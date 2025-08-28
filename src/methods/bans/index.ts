/**
 * bans
 */
import { Method } from '../index';
import * as Schemas from '../../components/schemas';

/**
 * Get the ban list
 */
export function get() {
    return new Method<undefined, Schemas.UserBan[]>("minecraft:bans");
}

/**
 * Set the banlist
 * @param bans ban list
 */
export function set(bans: Schemas.UserBan[]) {
    return new Method<Schemas.UserBan[], Schemas.UserBan[]>("minecraft:bans/set", bans);
}

/**
 * Add players to ban list
 * @param bans ban list
 */
export function add(bans: Schemas.UserBan[]) {
    return new Method<Schemas.UserBan[], Schemas.UserBan[]>("minecraft:bans/add", bans);
}

/**
 * Remove players from ban list
 * @param bans ban list
 */
export function remove(bans: Schemas.UserBan[]) {
    return new Method<Schemas.UserBan[], Schemas.UserBan[]>("minecraft:bans/remove", bans);
}

/**
 * Clear all players in ban list
 */
export function clear() {
    return new Method<undefined, Schemas.UserBan[]>("minecraft:bans/clear");
}