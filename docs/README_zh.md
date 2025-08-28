# minecraft-management-client

一个适用于 **Node.js** 和 **浏览器** 的 TypeScript 客户端，基于 **25w35a**中引入的**Minecraft服务器管理协议**进行通信。
有了这个库，你可以直接从JavaScript/Typescript代码管理Minecraft服务器

## 功能特性

* ⚡支持**Node.js**和**浏览器**
* 📝 由Typescript编写，提供完整的类型声明
* 🔌支持管理服务器的`allowlist`、`bans`、`ipbans`、`operators`、`players`、`server`、`serversettings`，所有的官方Method
* 📡支持监听服务器通知消息，所有的官方notification

## 如何使用

### 1. 服务器开启 API

默认情况下，该 API 处于禁用状态，可以在文件中启用。`server.properties`

- `management-server-enabled`：设置为以启用 API。默认为 。`true``false`
- `management-server-host`：API 端点的主机。默认为 。`localhost`
- `management-server-port`API 端点的端口。默认为 。`25585`

> [!warning]
>
> 将管理服务器端口暴露给 Internet 是**危险**的。该协议没有保护。任何有权访问此协议的人都可以完全控制服务器。

### 2. 使用 minecraft-management-client

安装

~~~ shell
# 使用npm
npm i minecraft-management-client
# 使用pnpm
pnpm i minecraft-management-client
# 使用yarn
yarn add minecraft-management-client
~~~

连接服务器

~~~ ts
import { WSClient } from 'minecraft-management-client'
const ws = new WSClient('ws://localhost:25585');
// 监听服务器事件
ws.on('open', (e) => {
    console.log("WebSocket连接已打开");
})
// 监听玩家玩家
ws.onNotification("notification:players/joined", (data) => {
    console.log("玩家加入:", data[0]);
})
~~~

玩家列表

~~~ ts
import { Method } from "minecraft-management-client";
// 查询玩家列表
const players = await ws.callMethod(Method.Players.get());
console.log("玩家列表:",players);
~~~

添加和移除OP

~~~ ts
import { Method } from 'minecraft-management-client'
// 添加
const ops = await ws.callMethod(Method.Operators.add([{
    bypassesPlayerLimit: false,
    permissionLevel: 4,
    player: {
        id: "bafe5a4e-0401-b4ef-acb3-772890ec032f",
        name: "Steve"
    }
}]))
console.log(ops);
// 移除
await ws.callMethod(Method.Operators.remove([{
    id: "bafe5a4e-0401-b4ef-acb3-772890ec032f",
    name: "Steve"
}]))
~~~

## TODO

* [ ] 友好的消息创建器
* [ ] 重连机制
* [ ] 错误处理