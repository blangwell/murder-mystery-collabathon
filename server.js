require('dotenv').config();
const API_PORT = process.env.PORT || 4000;
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');

const db = require('./models');

const app = express();

// app.use(express.json());
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/signup', (req, res) => {
  db.User.create({firstName: 'Barent', email: 'barent@email.fart'})
  .then(created => res.status(201).send(created))
  .catch(err => res.status(503).send(err));
})

app.get('/admin', (req, res) => {
  db.User.find()
  .then(users => res.render('admin', {users, count: users.length}))
  .catch(err => console.log(err))
})

app.listen(API_PORT, () => {
  console.log(`🌽 listenin' on port ${API_PORT}`);
})