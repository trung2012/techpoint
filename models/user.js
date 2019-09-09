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
  },
  cart: [{
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    categoryId: {
      type: String,
      required: true,
    },
    title: {
      type: String
    },
    price: {
      type: Number
    },
    shipping: {
      type: String
    },
    features: [String],
    logo: {
      type: String
    },
    imageUrl: {
      type: String
    },
    imageUrlLarge: {
      type: String
    },
    quantity: {
      type: Number
    }
  }]
}, { id: false })

// userSchema.set('toObject', { virtuals: true })
// userSchema.set('toJSON', { virtuals: true })

userSchema.methods.toJSON = function () {
  const { _id, name, email, cart } = this;

  return { _id, name, email, cart }
}

const User = mongoose.model('User', userSchema);

module.exports = User;