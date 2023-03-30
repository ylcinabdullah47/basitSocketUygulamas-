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
// const mongodb = require('mongodb');
// const dbUrl ='mongodb://localhost:27017';

// const client = mongodb.MongoClient;



// client.connect('mongodb://localhost:27017',(err,db)=>{
//     console.log('err',err)
//     console.log('db',db)
//     const mydb = db.db('vkod',{Logger:(L) =>{console.log('1',1);}})
//     mydb.createCollection('authors').then((r) => {
//         console.log('r',r);
//     }).catch((err) => {
//         console.log("hata oluştu")
//     });
// })

// client.connect(dbUrl,(err,db)=>{
//     if (db) {
//         console.log("bağlantı başarılı");
//     }else{
//         console.log("veri tabanı bağlantı hatası var")
//     }
// })
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








app.get('/api' ,(req,res)=>{ 
res.send("sayfaya hoşgeldiniz")

})
