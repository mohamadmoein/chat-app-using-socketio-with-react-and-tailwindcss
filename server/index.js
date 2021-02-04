const cors = require('cors');

const express = require('express');
const socketio = require('socket.io');
const http = require('http')

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: '*',
  }
});

app.use(cors());
app.use(router);

io.on('connection', (socket) => {
  console.log('We have new connection');
  

  socket.on('join', ({ name, room }, callback) => {
    
  });


  socket.on('disconnect', () => {
    console.log('User had left!');
  });
});

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));