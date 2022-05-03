const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { json } = require('body-parser');
const path = require('path');
const { connect } = require('mongoose');

dotenv.config();

async function connectDB() {
  try {
    connect(process.env.MONGO_URI);
    console.log('Connected to database');
  } catch (error) {
    console.log(error);
    throw new Error('Unable to connect to database');
  }
}

connectDB();

const app = express();

app.use(cors());
app.use(json());

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/api', (_, res) => {
  res.send('Hello from API');
});

app.get('/*', (_, res) => {
  res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}...`);
  console.log(`Live at: http://localhost:${PORT}`);
});
