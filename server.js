const express = require("express");
const app = express();

const path = require("path");
const http = require('http');
const { Server } = require("socket.io"); // Use Server instead of server

const httpServer = http.createServer(app); // Rename to httpServer

const io = new Server(httpServer); // Correct usage of Server

app.use(express.static(path.resolve("")));

app.get("/", (req, res) => {
    return res.sendFile("index.html");
});

httpServer.listen(3000, () => {
    console.log("port connected to 3000");
});
