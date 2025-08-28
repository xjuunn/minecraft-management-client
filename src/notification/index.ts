/**
 * notification
 */

import { Schemas } from "..";

/**
 * Notification
 */
export interface Notification<Name extends string, Params = {}> {
    name: Name;
    params: Params;
}

/**
 * All notifications.
 */
export type Notifications =
    | Notification<"notification:server/started">
    | Notification<"notification:server/stopping">
    | Notification<"notification:server/saving">
    | Notification<"notification:server/saved">
    | Notification<"notification:players/joined", [player: Schemas.Player]>
    | Notification<"notification:players/left", [player: Schemas.Player]>
    | Notification<"notification:operators/added", [player: Schemas.Operator]>
    | Notification<"notification:operators/removed", [player: Schemas.Operator]>
    | Notification<"notification:allowlist/added", [player: Schemas.Player]>
    | Notification<"notification:allowlist/removed", [player: Schemas.Player]>
    | Notification<"notification:ip_bans/added", [player: Schemas.IpBan]>
    | Notification<"notification:ip_bans/removed", [player: string]>
    | Notification<"notification:bans/added", [player: Schemas.UserBan]>
    | Notification<"notification:bans/removed", [player: Schemas.Player]>
    | Notification<"notification:gamerules/updated", [gamerule: Schemas.TypedGameRule]>
    | Notification<"notification:server/status", [status: Schemas.ServerState]>

/**
 * Notification parameters for a specific notification type.
 */
export type NotificationParams<T extends Notifications['name']> =
    Extract<Notifications, { name: T }>['params'];