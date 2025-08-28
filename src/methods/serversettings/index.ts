/**
 * serversettings
 */
import { Method } from '../index';
import * as Schemas from '../../components/schemas';
import { Difficulty, GameMode } from '../../core/enums';

/**
 * Get whether automatic world saving is enabled on the server
 */
export function getAutosave() {
    return new Method<undefined, boolean>("minecraft:serversettings/autosave");
}

/**
 * Enable or disable automatic world saving on the server
 * @param enable enable or disable auto saving
 */
export function setAutosave(enable: boolean) {
    return new Method<{ enable: boolean }, boolean>("minecraft:serversettings/autosave/set", { enable });
}

/**
 * Get the current difficulty level of the server
 */
export function getDifficulty() {
    return new Method<undefined, string>("minecraft:serversettings/difficulty");
}

/**
 * Set the difficulty level of the server
 * @param difficulty difficulty
 */
export function setDifficulty(difficulty: Difficulty) {
    return new Method<{ difficulty: Difficulty }, boolean>("minecraft:serversettings/difficulty/set", { difficulty })
}

/**
 * Get whether allowlist enforcement is enabled (kicks players immediately when removed from allowlist)
 */
export function getEnforceAllowlist() {
    return new Method<undefined, boolean>("minecraft:serversettings/enforce_allowlist");
}

/**
 * Enable or disable allowlist enforcement (when enabled, players are kicked immediately upon removal from allowlist)
 * @param enforce isEnforce
 */
export function setEnforceAllowlist(enforce: boolean) {
    return new Method<{ enforce: boolean }, boolean>("minecraft:serversettings/enforce_allowlist/set", { enforce });
}

/**
 * Get whether the allowlist is enabled on the server
 */
export function getUseAllowlist() {
    return new Method<undefined, boolean>("minecraft:serversettings/use_allowlist");
}

/**
 * Enable or disable the allowlist on the server (controls whether only allowlisted players can join)
 * @param use isUse
 */
export function setUseAllowlist(use: boolean) {
    return new Method<{ use: boolean }, boolean>("minecraft:serversettings/use_allowlist/set", { use });
}

/**
 * Get the maximum number of players allowed to connect to the server
 */
export function getMaxPlayers() {
    return new Method<undefined, number>("minecraft:serversettings/max_players");
}

/**
 * Set the maximum number of players allowed to connect to the server
 * @param max max player num
 */
export function setMaxPlayers(max: number) {
    return new Method<{ max: number }, boolean>("minecraft:serversettings/max_players/set", { max });
}

/**
 * Get the number of seconds before the game is automatically paused when no players are online
 */
export function getPauseWhenEmptySeconds() {
    return new Method<undefined, number>("minecraft:serversettings/pause_when_empty_seconds");
}

/**
 * Set the number of seconds before the game is automatically paused when no players are online
 * @param seconds pause duration in seconds
 */
export function setPauseWhenEmptySeconds(seconds: number) {
    return new Method<{ seconds: number }, number>("minecraft:serversettings/pause_when_empty_seconds/set", { seconds });
}

/**
 * Get the number of seconds before idle players are automatically kicked from the server
 */
export function getPlayerIdleTimeout() {
    return new Method<undefined, number>("minecraft:serversettings/player_idle_timeout");
}

/**
 * Set the number of seconds before idle players are automatically kicked from the server
 * @param seconds idle timeout duration in seconds
 */
export function setPlayerIdleTimeout(seconds: number) {
    return new Method<{ seconds: number }, number>("minecraft:serversettings/player_idle_timeout/set", { seconds });
}

/**
 * Get whether flight is allowed for players in Survival mode
 */
export function getAllowFlight() {
    return new Method<undefined, boolean>("minecraft:serversettings/allow_flight");
}

/**
 * Allow or disallow flight for players in Survival mode
 * @param allow whether to allow flight
 */
export function setAllowFlight(allow: boolean) {
    return new Method<{ allow: boolean }, boolean>("minecraft:serversettings/allow_flight/set", { allow });
}

/**
 * Get the server's message of displayed to players
 */
export function getMotd() {
    return new Method<undefined, string>("minecraft:serversettings/motd");
}

/**
 * Set the server's message of the day displayed to players
 * @param message message
 */
export function setMotd(message: string) {
    return new Method<{ message: string }, string>("minecraft:serversettings/motd/set", { message });
}

/**
 * Get the spawn protection radius in blocks (only operators can edit within this area)
 */
export function getSpawnProtectionRadius() {
    return new Method<undefined, number>("minecraft:serversettings/spawn_protection_radius");
}

/**
 * Set the spawn protection radius in blocks (only operators can edit within this area)
 * @param radius radius
 */
export function setSpawnProtectionRadius(radius: number) {
    return new Method<{ radius: number }, number>("minecraft:serversettings/spawn_protection_radius/set", { radius });
}

/**
 * Get whether players are forced to use the server's default game mode
 */
export function getForceGameMode() {
    return new Method<undefined, boolean>("minecraft:serversettings/force_game_mode");
}

/**
 * Enable or disable forcing players to use the server's default game mode
 * @param force whether to force the default game mode
 */
export function setForceGameMode(force: boolean) {
    return new Method<{ force: boolean }, boolean>("minecraft:serversettings/force_game_mode/set", { force });
}

/**
 * Get the server's default game mode
 */
export function getGameMode() {
    return new Method<undefined, GameMode>("minecraft:serversettings/game_mode");
}

/**
 * Set the server's default game mode
 * @param mode the default game mode
 */
export function setGameMode(mode: GameMode) {
    return new Method<{ mode: GameMode }, string>("minecraft:serversettings/game_mode/set", { mode });
}

/**
 * Get the server's view distance in chunks
 */
export function getViewDistance() {
    return new Method<undefined, number>("minecraft:serversettings/view_distance");
}

/**
 * Set the server's view distance in chunks
 * @param distance the view distance in chunks
 */
export function setViewDistance(distance: number) {
    return new Method<{ distance: number }, string>("minecraft:serversettings/view_distance/set", { distance });
}

/**
 * Get the server's simulation distance in chunks
 */
export function getSimulationDistance() {
    return new Method<undefined, number>("minecraft:serversettings/simulation_distance");
}

/**
 * Set the server's simulation distance in chunks
 * @param distance the simulation distance in chunks
 */
export function setSimulationDistance(distance: number) {
    return new Method<{ distance: number }, string>("minecraft:serversettings/simulation_distance/set", { distance });
}

/**
 * Get whether the server accepts player transfers from other servers
 */
export function getAcceptTransfers() {
    return new Method<undefined, boolean>("minecraft:serversettings/accept_transfers");
}

/**
 * Enable or disable accepting player transfers from other servers
 * @param accept whether to accept player transfers
 */
export function setAcceptTransfers(accept: boolean) {
    return new Method<{ accept: boolean }, boolean>("minecraft:serversettings/accept_transfers/set", { accept });
}

/**
 * Get the interval in seconds between server status heartbeats
 */
export function getStatusHeartbeatInterval() {
    return new Method<undefined, number>("minecraft:serversettings/status_heartbeat_interval");
}

/**
 * Set the interval in seconds between server status heartbeats
 * @param seconds the interval in seconds
 * @returns whether the operation was successful
 */
export function setStatusHeartbeatInterval(seconds: number) {
    return new Method<{ seconds: number }, boolean>("minecraft:serversettings/status_heartbeat_interval/set", { seconds });
}

/**
 * Get the permission level required for operator commands
 */
export function getOperatorUserPermissionLevel() {
    return new Method<undefined, number>("minecraft:serversettings/operator_user_permission_level");
}

/**
 * Set the permission level required for operator commands
 * @param level the permission level
 */
export function setOperatorUserPermissionLevel(level: number) {
    return new Method<{ level: number }, number>("minecraft:serversettings/operator_user_permission_level/set", { level });
}

/**
 * Get whether the server hides online player information from status queries
 */
export function getHideOnlinePlayers() {
    return new Method<undefined, boolean>("minecraft:serversettings/hide_online_players");
}

/**
 * Enable or disable hiding online player information from status queries
 * @param hide whether to hide online player information
 */
export function setHideOnlinePlayers(hide: boolean) {
    return new Method<{ hide: boolean }, boolean>("minecraft:serversettings/hide_online_players/set", { hide });
}

/**
 * Get whether the server responds to connection status requests
 */
export function getStatusReplies() {
    return new Method<undefined, boolean>("minecraft:serversettings/status_replies");
}

/**
 * Enable or disable the server responding to connection status requests
 * @param enable whether to enable status replies
 */
export function setStatusReplies(enable: boolean) {
    return new Method<{ enable: boolean }, boolean>("minecraft:serversettings/status_replies/set", { enable });
}

/**
 * Get the entity broadcast range as a percentage
 */
export function getEntityBroadcastRange() {
    return new Method<undefined, number>("minecraft:serversettings/entity_broadcast_range");
}

/**
 * Set the entity broadcast range as a percentage
 * @param range the entity broadcast range as a percentage
 */
export function setEntityBroadcastRange(range: number) {
    return new Method<{ range: number }, number>("minecraft:serversettings/entity_broadcast_range/set", { range });
}

/**
 * Get the available game rule keys and their current values
 */
export function getGameRules() {
    return new Method<undefined, Schemas.TypedGameRule>("minecraft:gamerules");
}

/**
 * Update game rule value
 * @param gamerule the game rule to update
 */
export function setGameRules(gamerule: Schemas.TypedGameRule) {
    return new Method<{ gamerule: Schemas.UntypedGameRule }, boolean>("minecraft:gamerules/update", { gamerule });
}