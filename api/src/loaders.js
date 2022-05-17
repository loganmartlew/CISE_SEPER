const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const { json } = require('body-parser');
const connectDB = require('./db');

const envLoader = async () => {
  dotenv.config();
};

const expressLoader = async (app) => {
  app.use(cors());
  app.use(json());

  app.use(express.static(path.resolve(__dirname, '../public')));
};

const mongooseLoader = async () => {
  connectDB();
};

const apiLoader = async () => {};

const reactLoader = async (app) => {
  app.get('/*', (_, res) => {
    res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
  });
};

const loadApp = async (app) => {
  await envLoader();
  await expressLoader(app);
  await mongooseLoader();
  await apiLoader();
  await reactLoader(app);
};

module.exports = loadApp;
