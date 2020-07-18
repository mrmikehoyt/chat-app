/* eslint-disable func-names */
/* eslint-disable space-before-blocks */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chat', function (err){
  if (err) {
    console.log(err);
  } else {
    console.log('connected to database');
  }
});

const messageSchema = new mongoose.Schema({
  content: String,
  name: String,
}, {
  timestamps: true,
});

const Chat = mongoose.model('Message', messageSchema);

const newMsg = new Chat({ messageSchema });
newMsg.save(function (err) {
  if (err) throw err;
});

module.exports = mongoose.model('Message', messageSchema);
