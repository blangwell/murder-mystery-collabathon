const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  email: { type: String, required: true }, 
});

module.exports = mongoose.model('User', userSchema);