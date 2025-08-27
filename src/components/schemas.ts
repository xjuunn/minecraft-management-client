
export interface UntypedGameRule {
    key: string;
    value: string;
}

export interface IncomingIpBan {
    reason: string;
    expires: string;
    ip: string;
    source: string;
    player: Player;
}

export interface SystemMessage {
    receivingPlayers: Player[];
    overlay: boolean;
    message: Message;
}

export interface KickPlayer {
    players: Player[];
    message: Message;
}

export interface IpBan {
    reason: string;
    expires: string;
    ip: string;
    source: string;
}

export interface TypedGameRule {
    type: 'integer' | 'boolean';
    key: string;
    value: string;
}

export interface UserBan {
    reason: string;
    expires: string;
    source: string;
    player: Player;
}

export interface Message {
    translatable: string;
    translatableParams: string[];
    literal: string;
}

export interface Version {
    protocol: number;
    name: string;
}

export interface ServerState {
    players: Player[];
    started: boolean;
    version: Version;
}

export interface Operator {
    permissionLevel: number;
    bypassesPlayerLimit: boolean;
    player: Player;
}

export interface Player {
    id: string;
    name: string;
}