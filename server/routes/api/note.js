const express = require('express');
const auth = require('../../middleware/auth');
const Note = require('../../models/Note');
const User = require('../../models/User');

const router = express.Router();

// api/note
router.get('/', auth, async (req, res) => {
  const authUserID = req.user.id;

  User.findOne({ _id: authUserID })
    .populate('notes')
    .select('-password')
    .exec((error, notes) => {
      res.status(200).json(notes);
    })
});

// api/note
router.post('/', auth, async (req, res) => {
  try {
    const { title, content } = req.body;
    const authUserID = req.user.id;

    const user = await User.findById(authUserID);
    if (!user) throw Error('User does not exists');

    const note = Note.create({ title, content });
    if (!note) throw Error('Unable to create user note');

    user.notes.push((await note).id);
    await user.save();

    res.status(201).json((await note));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})

router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findById(id);
    if (!note) throw Error('No note found');

    const removeNote = await note.remove();
    if (!removeNote) throw Error('Note unable to remove');

    res.status(200).json(note)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})

module.exports = router;
