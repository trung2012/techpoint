const mongoose = require('mongoose');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

mongoose.connect(process.env.db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(console.log('MongoDB is connected!'))
  .catch(err => console.log(err))