

import { WebSocketServer } from "ws";
import { client } from "@repo/db/client"

const server = new WebSocketServer({
    port: 3002
});

server.on("connection", async (ws) => {
    try {
        const res = await client.user.create({
            data: {
                username: Math.random().toString(),
                password: Math.random().toString(),
            }
        });
        console.log("User created:", res);
        ws.send("Hi there you are connected to the server");
    } catch (error) {
        console.error("Error creating user:", error);
        ws.send(JSON.stringify({ error: "Failed to create user" }));
    }
});

server.on("error", (error) => {
    console.error("WebSocket server error:", error);
});

console.log("WebSocket server running on port 3002");

