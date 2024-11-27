import express from "express";
const app = express();
import http from "http";
const server = http.createServer(app);
import { Server as SocketIO } from "socket.io";
import { v4 as uuidv4 } from "uuid";
const io = new SocketIO(server, { cors: { origin: "*" } });
import Chat from "../models/Chat.js";
import Message from "../models/Message.js";
io.on("connection", (socket) => {
  socket.emit("getUserId", { message: socket.id });
  const roomId = uuidv4();
  console.log(`Generated Room ID: ${roomId}`);
  socket.on("exampleEvent", async (data) => {
    console.log("Received data from client:", data);
    socket.emit("responseEvent", { message: "Event received!" });
  });

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

export { app, server as Server, io as Socket };
