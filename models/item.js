const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  categoryId: {
    type: String,
    required: true,
    ref: 'Category'
  },
  title: {
    type: String
  },
  price: {
    type: mongoose.Decimal128
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
  }
})

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;