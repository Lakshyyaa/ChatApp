const express = require('express')
const http = require('http');
const app = express();
const server = http.createServer(app);  
const { Server } = require("socket.io");
const io = new Server(server);
const router=require('./router')
app.use(router)

io.on('connection', (socket)=>{
    console.log('New User Joined!');
    socket.on('disconnect', ()=>{
        console.log('i have disconnected!');
    })
})

server.listen(process.env.PORT || 3000, function () {
    console.log('Hi, im listening on 3000.');   
})
