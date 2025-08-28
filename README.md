# minecraft-management-client

A **TypeScript client** for **Node.js** and **browser** environments, communicating via the **Minecraft Server Management Protocol** introduced in **25w35a**.
With this library, you can manage a Minecraft server directly from your JavaScript or TypeScript code.

[简体中文](./docs/README_zh.md)

## Features

- ⚡ Supports **Node.js** and **browser** environments
- 📝 Written in TypeScript with full type declarations
- 🔌 Allows management of the server’s `allowlist`, `bans`, `ipbans`, `operators`, `players`, `server`, and `serversettings`—all official methods
- 📡 Supports listening to server notification messages, including all official notifications

## Usage

### 1. Enable the Server API

The API is disabled by default and can be enabled in the `server.properties` file.

- `management-server-enabled`: Set to `true` to enable the API. Defaults to `false`.
- `management-server-host`: Host of the API endpoint. Defaults to `localhost`.
- `management-server-port` Port of the API endpoint. Defaults to `25585`.

> [!warning]
> It is **dangerous** to expose management server ports to the internet. The protocol has no protection. Anyone with access to this protocol can get full control over the server.

### 2. use minecraft-management-client

install

```shell
# use npm
npm i minecraft-management-client
# use pnpm
pnpm i minecraft-management-client
# use yarn
yarn add minecraft-management-client
```

connect server

```ts
import { WSClient } from "minecraft-management-client";
const ws = new WSClient("ws://localhost:25585");
// Listening to Server Events
ws.on("open", (e) => {
  console.log("WebSocket connected");
});
// Listening to Player Events
ws.onNotification("notification:players/joined", (data) => {
  console.log("player join:", data[0]);
});
```

player list

```ts
import { Method } from "minecraft-management-client";
// list players
const players = await ws.callMethod(Method.Players.get());
console.log("player list:", players);
```

add and remove operators (OPs)

```ts
import { Method } from "minecraft-management-client";
// add
const ops = await ws.callMethod(
  Method.Operators.add([
    {
      bypassesPlayerLimit: false,
      permissionLevel: 4,
      player: {
        id: "bafe5a4e-0401-b4ef-acb3-772890ec032f",
        name: "Steve",
      },
    },
  ])
);
console.log(ops);
// remove
await ws.callMethod(
  Method.Operators.remove([
    {
      id: "bafe5a4e-0401-b4ef-acb3-772890ec032f",
      name: "Steve",
    },
  ])
);
```

## TODO

- [ ] Friendly message builder
- [ ] Reconnection mechanism
- [ ] Error handling
