export { WSClient } from './core/ws/WSClient';
export * as Schemas from './components/schemas';
export * as Method from './methods/index';



// import { WSClient } from './core/ws/WSClient';
// import { AllowList, Operators, Server } from './methods/index'
// const ws = new WSClient("ws://localhost:25585");
// setTimeout(async () => {
//     const data = await ws.callMethod(Server.stop())
//     console.log(data);

// }, 1000);