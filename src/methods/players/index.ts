/**
 * players
 */
import { Method } from '../index';
import * as Schemas from '../../components/schemas';

/**
 * Get all connected players
 */
export function get() {
    return new Method<undefined, Schemas.Player[]>("minecraft:players");
}

/**
 * Kick players
 * @param kickPlayer kick players
 */
export function kick(kickPlayer: Schemas.KickPlayer[]) {
    return new Method<Schemas.KickPlayer[], Schemas.Player[]>("minecraft:players/kick", kickPlayer)
}