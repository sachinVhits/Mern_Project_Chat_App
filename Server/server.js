import express from "express";
import dotenv from "dotenv";
dotenv.config();
import("./src/config/Db.config.js");
import("./src/config/Socket.config.js");
import { Server, app } from "./src/config/Socket.config.js";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 9000;
Server.listen(port, () => {
  console.log(`App is running on ${port}`);
});
