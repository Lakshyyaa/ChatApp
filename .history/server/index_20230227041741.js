const express = require('express')

const http = require('http');

const app = express();

const server = http.createServer(app);  

const { Server } = require("socket.io");

const io = new Server(server);

server.listen(process.env.PORT || 3000, function () {
    console.log(80085);
})


// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/index.html')
// })
