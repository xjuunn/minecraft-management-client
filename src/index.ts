import { WSClient } from './core/ws/WSClient';
export * as Schemas from './components/schemas';

const client = new WSClient("ws://localhost:25585");

client.on('open', () => {
    console.log("连接已建立");
})

client.on('message', (e) => {
    // console.log("客户端消息：", e);
})

client.on('error', (e) => {
    console.log("错误：", e);
})

client.on('close', () => {
    console.log("连接关闭");
})

setTimeout(async () => {
    const data = await client.call("minecraft:server/system_message", [
        {
            receivingPlayers: [{ name: "Junhsiun" }],
            overlay: false,
            message: { literal: "测试消息" },
        }
    ])

    console.log("执行结束，返回结果：", data);

}, 1000);