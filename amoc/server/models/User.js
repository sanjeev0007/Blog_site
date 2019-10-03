var mongoose = require('mongoose'),

   UserSchema = new mongoose.Schema({
      //user name
  name: {
    type: String,
    required: true
  },
      //user email
  email: {
    type: String,
    required: true
  },
      // create a password
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
