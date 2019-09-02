const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    }
  },
  password: {
    type: String,
    required: true,
  }
})

userSchema.virtual('cart', {
  ref: 'Cart',
  localField: '_id',
  foreignField: 'owner'
})

const User = mongoose.model('User', userSchema);

module.exports = User;