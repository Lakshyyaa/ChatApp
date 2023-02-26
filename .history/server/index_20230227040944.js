const express = require('express')
const bodyParser = require('body-parser')
const socketio=require('socket.io')
const https = require('https');

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }))
// app.listen(process.env.PORT || 3000, function () {
//     console.log(80085);
// })

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/index.html')
// })
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});