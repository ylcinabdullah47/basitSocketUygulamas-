// const express =require('express');
// const http = require('http');
// const socket = require('socket.io');

// const app = express();

// const server = http.createServer(app);
// const io = socket(server);
// server.use(express.static('public'));
// app.use(express.json());


// // const server = app.listen(3000)

// // app.listen(3000,(req,res)=>{
// //     console.log("3000 portu çalışıyor");
// // });

// io.on('connection',(socket)=>{
//     console.log(socket.id)

//     socket.on('chat',data=>{
//         io.sockets.emit('chat',data)
//     })
//     socket.on('typing' ,data =>{
//         socket.broadcast.emit('typing',data)
//     })
// });

// server.listen(3000, () => {
//     console.log(' 3000 portu çalışıyor');
//   });



const express = require('express');
const http = require('http');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.static('public'));

server.listen(3000, () => {
  console.log('3000 portu çalışıyor');
});

const io = socket(server);
 
io.on('connection',(socket)=>{
    console.log(socket.id)

    socket.on('chat',data=>{
        io.sockets.emit('chat',data)
    })
    socket.on('typing' ,data =>{
        socket.broadcast.emit('typing' ,data)
    })
});
