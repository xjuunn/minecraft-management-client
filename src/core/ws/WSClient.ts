import { Method } from "../../methods";
import { Notification, Notifications, NotificationParams } from '../../notification/index';

let WebSocketImpl: typeof WebSocket;
if (typeof window === 'undefined') {
    WebSocketImpl = require('ws');
} else {
    WebSocketImpl = WebSocket;
}

/**
 * Notification handler
 */
export type NotificationHandler<T extends Notifications['name']> = (
    params: NotificationParams<T>
) => void;

type NotificationMap = {
    [K in Notifications['name']]: NotificationHandler<K>[];
}

interface JsonRpcRequest {
    jsonrpc: "2.0";
    id: number;
    method: string;
    params?: any[];
}

interface JsonRpcResponse {
    jsonrpc: "2.0";
    id?: number;
    result?: any;
    error?: any;
    method?: string;
    params?: any[];
}

type WSCallbackMap = {
    open: (ev: Event) => void;
    close: (ev: CloseEvent) => void;
    message: (ev: MessageEvent<any>) => void;
    error: (ev: Event) => void;
};

/**
 * WebSocketClient
 */
export class WSClient {
    private ws: WebSocket;
    private rpcId = 0;
    private pending: Map<number, (res: JsonRpcResponse) => void> = new Map();
    private handlers: Partial<NotificationMap> = {};

    constructor(url: string) {
        this.ws = new WebSocketImpl(url);
        this.on('message', (data: MessageEvent) => {
            const msg: JsonRpcResponse = JSON.parse(data.data)
            if (msg.id !== undefined && this.pending.has(msg.id)) {
                this.pending.get(msg.id)!(msg);
                this.pending.delete(msg.id);
            }
            // notification callback
            this.handlers[msg.method as Notifications['name']]?.forEach(callback => {
                if (msg.params === undefined) {
                    (callback as () => void)();
                } else {
                    (callback as (params: any) => void)(msg.params);
                }
            });
        })
    }

    // Register the event callback
    public on<K extends keyof WSCallbackMap>(event: K, callback: WSCallbackMap[K]) {
        this.ws.addEventListener(event, callback as EventListener);
    }

    // Cancel event callback
    public off<K extends keyof WSCallbackMap>(event: K, callback: WSCallbackMap[K]) {
        this.ws.removeEventListener(event, callback as EventListener);
    }

    // RPC call
    public call(method: string, params?: any[]): Promise<any> {
        const id = this.rpcId++;
        const payload: JsonRpcRequest = { jsonrpc: "2.0", id, method, params }
        return new Promise((resolve, reject) => {
            this.pending.set(id, res => {
                if (res.error) {
                    console.error(res.error);
                    throw new Error(res.error);
                }
                else resolve(res.result);
            });
            console.log("调用：", JSON.stringify(payload));

            this.ws.send(JSON.stringify(payload));
        })
    }

    /**
     * RPC method call
     * @param method Method
     */
    public callMethod<P, R>(method: Method<P, R>): Promise<R> {
        if (method.params === undefined || method.params === null) {
            return this.call(method.method, []);
        }
        // if (method.params instanceof Array) {
        //     return this.call(method.method, [method.params]);
        // }
        return this.call(method.method, [method.params]);
    }

    /**
     * Register a notification handler
     * @param name Notification name
     * @param handler Notification handler
     */
    public onNotification<T extends Notifications['name']>(
        name: T,
        handler: NotificationHandler<T>
    ) {
        if (!this.handlers[name]) {
            this.handlers[name] = [];
        }
        (this.handlers[name] as NotificationHandler<T>[]).push(handler);
    }

    /**
     * Unregister a notification handler
     * @param name Notification name
     * @param handler Notification handler
     */
    public offNotification<T extends Notifications['name']>(
        name: T,
        handler: NotificationHandler<T>
    ) {
        const list = this.handlers[name] as NotificationHandler<T>[] | undefined;
        if (!list) return;
        const next = list.filter(h => h !== handler);
        (this.handlers as Record<string, NotificationHandler<any>[]>)[name] = next;
        if (next.length === 0) {
            delete (this.handlers as Record<string, NotificationHandler<any>[]>)[name];
        }
    }
}