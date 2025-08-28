/**
 * server
 */
import { Method } from '../index';
import * as Schemas from '../../components/schemas';

/**
 * Get server status
 */
export function status() {
    return new Method<undefined, Schemas.ServerState>("minecraft:server/status");
}

/**
 * Save server state
 * @param flush Whether to flush the state
 */
export function save(flush: boolean) {
    return new Method<{ flush: boolean }, boolean>("minecraft:server/save", { flush });
}

/**
 * Stop server
 */
export function stop() {
    return new Method<undefined, boolean>("minecraft:server/stop");
}

/**
 * Send a system message
 * @param msg system message
 */
export function systemMessage(msg: Schemas.SystemMessage) {
    return new Method<Schemas.SystemMessage, boolean>("minecraft:server/system_message", msg);
}

