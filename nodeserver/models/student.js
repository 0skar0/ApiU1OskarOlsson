const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  username: String,
  password: String,
  likedPlayers: [{
    playerId: Number,
    name: String
  }]
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
