require('dotenv').config();
const API_PORT = process.env.PORT || 4000;
const express = require('express');

const db = require('./models');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Index route hit')
})

app.post('/signup', (req, res) => {
  db.User.create({firstName: 'test testington', email: 'actualemail@email.fart'})
  .then(created => res.status(201).send(created))
  .catch(err => res.status(503).send(err));
})

app.get('/admin', (req, res) => {
  res.send('Admin route hit')
})

// we need two routes 


app.listen(API_PORT, () => {
  console.log(`🌽 listenin' on port ${API_PORT}`);
})