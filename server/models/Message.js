const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  content: String,
  name: String,
}, {
  timestamps: true,
});

const Chat = mongoose.model('Message', messageSchema);

const newMsg = new Chat({ messageSchema });
newMsg.save((err) => {
  if (err) throw err;
});

module.exports = Chat;
