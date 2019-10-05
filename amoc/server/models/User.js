var mongoose = require('mongoose'),

   UserSchema = new mongoose.Schema({
      //for user name   
  name: {
    type: String,
    required: true
  },
  email: {
     //for user email
    type: String,
    required: true
  },
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
//for connecting with other pages.
module.exports = User;
