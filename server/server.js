require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
