const mongoose = require('mongoose');
const Item = require('./item');

const categorySchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
}, { id: false })

categorySchema.virtual('items', {
  ref: Item,
  localField: '_id',
  foreignField: 'categoryId'
})

categorySchema.post('find', async categories => {
  for (let category of categories) {
    await category.populate('items').execPopulate();
  }
})

categorySchema.set('toObject', { virtuals: true })
categorySchema.set('toJSON', { virtuals: true })

const Category = mongoose.model('Category', categorySchema)

module.exports = Category;