require('dotenv').config();
const API_PORT = process.env.PORT || 4000;
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Index route hit')
})

app.listen(API_PORT, () => {
  console.log(`🌽 listenin' on port ${API_PORT}`);
})