import express from "express";
import { Server } from "socket.io";
import {createServer} from 'http';
import cors from 'cors'

const port = 3000;

const app = express();
const server = createServer(app);
const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true
    }
});


app.get('/', (req,res) => {
    res.send("Hello vivek !")
})

io.on("connection", (socket) =>{
    console.log("User Connected", socket.id);
    socket.emit("welcome", `welcome to server`);
    // socket.broadcast.emit("welcome", `${socket.id} join the server`);
    socket.on("disconnect", () => {
        console.log("User Disconnect", socket.id)
    })
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
})