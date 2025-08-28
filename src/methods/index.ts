/**
 * 定义方法列表
 */

export * as AllowList from './allowlist/index';
export * as Bans from './bans/index';
export * as IpBans from './ipBans/index';
export * as Operators from './operators/index';
export * as Players from './players/index';
export * as Server from './server/index';
export * as ServerSettings from './serversettings/index';

export interface IMethod<Params = any, Result = any> {
    method: string;
    params?: Params;
}

export class Method<Params = any, Result = any> implements IMethod<Params, Result> {
    method: string;
    params?: Params;

    /**
     * create a method
     * @param method method name
     * @param params method parameters
     */
    constructor(method: string, params?: Params) {
        this.method = method;
        this.params = params;
    }
}