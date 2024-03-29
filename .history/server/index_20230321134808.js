const express = require('express')
const http = require('http');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const router = require('./router')
const { getUser, getUsersInRoom, addUser, removeUser } = require('./users')
app.use(router)
const PORT = process.env.PORT || 5000
io.on('connection', (socket) => {
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room })
        if (error) {
            return (callback(error))
        }
        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}` })
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` })
        socket.join(user.room)
        console.log(socket.id);
    })
    console.log('New User Joined!');
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)
        io.to(user.room).emit('message', {user:user.name, text:message})
        callback()
    })
    socket.on('disconnect', () => {
        console.log('The User Has Disconnected!');
    })
})

server.listen(PORT, () => {
    console.log(`Hi, im listening on ${PORT}.`);
})

