/**
 * operators
 */
import { Method } from '../index';
import * as Schemas from '../../components/schemas';

/**
 * Get all oped players
 */
export function get() {
    return new Method<undefined, Schemas.Operator[]>("minecraft:operators");
}

/**
 * Set all oped players
 * @param ops op list
 */
export function set(ops: Schemas.Operator[]) {
    return new Method<Schemas.Operator[], Schemas.Operator[]>("minecraft:operators/set", ops);
}

/**
 * Op players
 * @param ops op list
 */
export function add(ops: Schemas.Operator[]) {
    return new Method<Schemas.Operator[], Schemas.Operator[]>("minecraft:operators/add", ops);
}

/**
 * Deop players
 * @param players player list
 */
export function remove(players: Schemas.Player[]) {
    return new Method<Schemas.Player[], Schemas.Operator[]>("minecraft:operators/remove", players);
}

/**
 * Deop all players
 */
export function clear() {
    return new Method<undefined, Schemas.Operator[]>("minecraft:operators/clear");
}