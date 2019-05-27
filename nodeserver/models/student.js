const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: {
    gata: String,
    postnummer: Number,
    ort: String
  }
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
