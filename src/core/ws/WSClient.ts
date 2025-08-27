let WebSocketImpl: typeof WebSocket;
if (typeof window === 'undefined') {
    WebSocketImpl = require('ws');
} else {
    WebSocketImpl = WebSocket;
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

    constructor(url: string) {
        this.ws = new WebSocketImpl(url);
        this.on('message', (data: MessageEvent) => {
            const msg: JsonRpcResponse = JSON.parse(data.data)
            if (msg.id !== undefined && this.pending.has(msg.id)) {
                this.pending.get(msg.id)!(msg);
                this.pending.delete(msg.id);
            }
        })
    }

    // 注册事件回调
    public on<K extends keyof WSCallbackMap>(event: K, callback: WSCallbackMap[K]) {
        this.ws.addEventListener(event, callback as EventListener);
    }

    // 注销事件回调
    public off<K extends keyof WSCallbackMap>(event: K, callback: WSCallbackMap[K]) {
        this.ws.removeEventListener(event, callback as EventListener);
    }

    // RPC 调用
    public call(method: string, params?: any[]): Promise<any> {
        const id = this.rpcId++;
        const payload: JsonRpcRequest = { jsonrpc: "2.0", id, method, params }
        return new Promise((resolve, reject) => {
            this.pending.set(id, res => {
                if (res.error) reject(res.error);
                else resolve(res.result);
            });
            this.ws.send(JSON.stringify(payload));
        })
    }
}