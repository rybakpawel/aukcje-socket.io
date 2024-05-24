const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "https://skillandchill-dev.outsystemsenterprise.com",
    },
});
const port = 5010;

server.listen(port, () => {
    console.log("Server listening at port ", port);
});

io.on("connection", async (socket) => {
    console.log("Połączono");

    socket.on("disconnect", () => {
        console.log("Rozłączono");
    });
});
