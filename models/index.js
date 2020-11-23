const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

const db = mongoose.connection;

db.once('open', () => {
  console.log(`🔌 connect to mongo plz, uri ${db.host}`)
})

db.on('error', (err) => {
  console.log(`THE DB IS FUCKED \n${err}`)
})

module.exports.User = require('./User.js')