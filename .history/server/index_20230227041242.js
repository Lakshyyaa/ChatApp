const express = require('express')
const bodyParser = require('body-parser')
const socketio=require('socket.io')
const https = require('https');

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }))
app.listen(process.env.PORT || 3000, function () {
    console.log(80085);
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})
