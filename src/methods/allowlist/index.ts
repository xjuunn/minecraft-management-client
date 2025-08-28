/**
 * allowlist
 */
import { Method } from '../index';
import * as Schemas from '../../components/schemas';

/**
 * Get the allowlist
 */
export function get() {
    return new Method<undefined, Schemas.Player[]>('minecraft:allowlist')
}

/**
 * Set the allowlist
 * @param players player list
 */
export function set(players: Schemas.Player[]) {
    return new Method<Schemas.Player[], Schemas.Player[]>('minecraft:allowlist/set', players);
}

/**
 * Add players to allowlist
 * @param players player list
 */
export function add(players: Schemas.Player[]) {
    return new Method<Schemas.Player[], Schemas.Player[]>('minecraft:allowlist/add', players);
}

/**
 * Remove players from allowlist
 * @param players player list
 */
export function remove(players: Schemas.Player[]) {
    return new Method<Schemas.Player[], Schemas.Player[]>('minecraft:allowlist/remove', players);
}

/**
 * Clear all players in allowlist
 */
export function clear() {
    return new Method<undefined, Schemas.Player[]>('minecraft:allowlist/clear');
}