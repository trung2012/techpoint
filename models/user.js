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
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item'
    },
    quantity: {
      type: Number
    }
  }]
}, { id: false })

// userSchema.virtual('cartItems', {
//   ref: 'Item',
//   localField: 'cart',
//   foreignField: '_id'
// })

// userSchema.post('find', async users => {
//   for (let user of users) {
//     await user.populate('cart').execPopulate();
//   }
// })

userSchema.set('toObject', { virtuals: true })
userSchema.set('toJSON', { virtuals: true })

const User = mongoose.model('User', userSchema);

module.exports = User;