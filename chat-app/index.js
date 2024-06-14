const http = require('http');
const express = require('express')
const app = express();
const path = require('path');
const {Server} = require('socket.io')

const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.resolve("./public")));

io.on('connection', (socket) =>{
    console.log('new user is connected', socket.id)
})


app.get('/', (req,res) => {
    return res.sendFile("/public/index.html");
})

server.listen(3000, () => {
    console.log( "running on port 3000");
})
