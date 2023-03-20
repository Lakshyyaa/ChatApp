const express = require('express')
const http = require('http');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const router = require('./router')
const {getUser, getUsersInRoom, addUser, removeUser} =require('./users')
app.use(router)
const PORT = process.env.PORT || 5000

io.on('connection', (socket) => {
    socket.on('join', ({ name, room }, callback) => {
        const {error, user}= addUser({id:socket.id, name, room})
        if(error){
            
        }
    })
    console.log('New User Joined!');
    socket.on('disconnect', () => {
        console.log('The User Has Disconnected!');
    })
    socket.on('chat message', (message) => {
        console.log(`received: ${message}`);
    })
})

server.listen(PORT, () => {
    console.log(`Hi, im listening on ${PORT}.`);
})

