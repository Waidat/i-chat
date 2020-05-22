const express = require('express')
const http = require('http')
const socketio = require('socket.io')


const PORT = process.env.PORT || 3300;

const app = express();
const server = http.createServer(app);
const io = socketio(server);


server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})


io.on('connect', (socket) => {

    socket.on('startJoin', (message) => {
        console.log(message);
    })

    socket.on('sendMessage', (message, callback) => {

        console.log(message);

        io.emit('message', {text: message})

        callback();
    })

    socket.on('disconnect', () => {
        console.log("Disconnect")
    })


})
