const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');

const app = express();

app.use(cors());
app.use(json());

app.get('/', (req, res) => {
  res.send('Hello from API');
});

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}...`);
  console.log(`Live at: http://localhost:${PORT}`);
});
