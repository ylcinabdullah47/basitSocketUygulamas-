// const socketIo = require('socket.io');
// const io = socketIo(1234);

// io.on('connection',(socket)=>{
//     console.log("bir kullancı bağlandı" + socket.id);
    
//     socket.on('disconnect',()=>{
//         console.log("kullanıcı ayrıldı" + socket.id);
//     });
// });
// console.log("socket test123");


const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('bir kullanıcı bağlandı ' + socket.id);
  socket.on('disconnect', () => {
    console.log('kullanıcı ayrıldı ' + socket.id);
  });
});

http.listen(1234, () => {
  console.log('socket test123');
});