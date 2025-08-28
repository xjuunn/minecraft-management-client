/**
 * ip_bans
 */

import { Method } from '../index';
import * as Schemas from '../../components/schemas';

/**
 * Get the ip ban list
 */
export function get() {
    return new Method<undefined, Schemas.IpBan[]>("minecraft:ip_bans");
}

/**
 * Set the ip banlist
 * @param ipBans ip ban list
 */
export function set(ipBans: Schemas.IpBan[]) {
    return new Method<Schemas.IpBan[], Schemas.IpBan[]>("minecraft:ip_bans/set", ipBans);
}

/**
 * Add ip to ban list
 * @param ipBans ip ban list
 */
export function add(ipBans: Schemas.IpBan[]) {
    return new Method<Schemas.IpBan[], Schemas.IpBan[]>("minecraft:ip_bans/add", ipBans);
}

/**
 * Remove ip from ban list
 * @param ipBans ip ban list
 */
export function remove(ipBans: Schemas.IpBan[]) {
    return new Method<Schemas.IpBan[], Schemas.IpBan[]>("minecraft:ip_bans/remove", ipBans);
}

/**
 * Clear all ips in ban list
 */
export function clear() {
    return new Method<undefined, Schemas.IpBan[]>("minecraft:ip_bans/clear");
}