const { Schema, model } = require('mongoose');

const NoteSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  }
})

const Note = model('Note', NoteSchema);

module.exports =  Note;
