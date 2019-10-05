var mongoose = require('mongoose'),

   UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
      //user email
  email: {
     //for user email
    type: String,
    required: true
  },
      // create a password
  password: {
     //for user passward.
    type: String,
    required: true
  },
  date: {
     //for user date
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
