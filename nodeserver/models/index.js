const mongoose = require('mongoose');

const Student =  require('./student');
const Counter = require('./counter');

const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/students";

const connectDb = () => {
  return mongoose.connect(uri, {useNewUrlParser: true});
}

module.exports = {
  connectDb,
  models: {
    Student,
    Counter
  }
};
