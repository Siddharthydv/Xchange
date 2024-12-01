require('dotenv').config()
import { WebSocketServer } from "ws";
import { UserManager } from "./UserManager";

const wss = new WebSocketServer({ port: Number(process.env.PORT),host: '0.0.0.0'});

wss.on("connection", (ws) => {
    UserManager.getInstance().addUser(ws);
});

