require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const socketio = require('socket.io');

// Routes
const routes = require('./routes');

// Chats imports
const createMessage = require('./chat/creator/message');
const messageUtils = require('./chat/message');
const userUtils = require('./chat/user');

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

io.on('connection', (socket) => {
  // Create a chat user
  const user = userUtils.addUser(socket);

  socket.emit('action', { type: 'WS_SET_USERNAME_SUCCESS', payload: { username: user }});
  socket.emit("action", { type: "WS_SOCKET_ID", payload: { socketId: socket.id }});

  socket.on('connected', () => {
    io.emit('congrats');
  });

  socket.on('chat message', (message) => {
    const added = messageUtils.addMessage(message);
    io.emit('message', message);
  });

  socket.on('disconnect', (reason) => {
    console.log('Disconnect for:', reason)
    const response = userUtils.removeUser(socket.id);
    const message = createMessage(response);
    socket.broadcast.emit("broadcast", message);
  });

  socket.on("action", (action) => {
    switch (action.type) {
      case 'WS_SEND_MESSAGE':
        const {message} = action.payload;
        io.emit("action", {
            type: "WS_RECEIVE_MESSAGE",
            payload: {message: message}
        });
      default:
        break;
    }
  });
});

