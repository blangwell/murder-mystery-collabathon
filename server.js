require('dotenv').config();
const API_PORT = process.env.PORT || 4000;
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');

const db = require('./models');

const app = express();

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/signup', (req, res) => {
  console.log(req.body);
  db.User.create({firstName: req.body.firstName, email: req.body.email})
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