const express = require('express')
const http = require('http');
const app = express();
const server = http.createServer(app);  
const { Server } = require("socket.io");
const io = new Server(server);
const 

server.listen(process.env.PORT || 3000, function () {
    console.log('Hi, im listening on 3000.');
})

// app.get('/', function (req, res) {
//     res.send 
// })
