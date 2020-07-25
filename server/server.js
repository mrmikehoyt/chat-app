require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const socketio = require('socket.io');
const { addUser, removeUser, getUser, getAllUsers } = require('./utils/users');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
} else {
  app.use(express.static(path.join(__dirname, 'public')));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chatapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}, (error) => {
  if (error) throw error;
  console.log('MongoDB connection created');
});


app.use(routes);

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const io = socketio(server);

io.on('connect', (socket) => {
  socket.on('join', ({ name}, callback) => {
    const { error, user } = addUser({ id: socket.id, name });

    if(error) return callback(error);

    socket.emit('message', { user: '', text: `${user.name}, welcome to the global chat room.`});
    socket.broadcast.emit('message', { user: '', text: `${user.name} has joined!` });

    io.emit('roomData', {  users: getAllUsers() });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    console.log(user);

    io.emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.emit('message', { user: '', text: `${user.name} has left.` });
      io.emit('roomData', { users: getAllUsers()})
    }
  })
});

