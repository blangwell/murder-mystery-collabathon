require('dotenv').config();
const API_PORT = process.env.PORT || 4000;
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');

const db = require('./models');

const app = express();

// app.use(express.json());
app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/signup', (req, res) => {
  db.User.create({firstName: 'test testington', email: 'actualemail@email.fart'})
  .then(created => res.status(201).send(created))
  .catch(err => res.status(503).send(err));
})

app.get('/admin', (req, res) => {
  // context = {users: db.User.find()}
  db.User.find()
  .then(users => res.render('admin', {users}))
  .catch(err => console.log(err))
  // res.render('admin', context)
})

// we need two routes 


app.listen(API_PORT, () => {
  console.log(`🌽 listenin' on port ${API_PORT}`);
})