const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  owner: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'User'
  },
  items: [{ type: Schema.Types.ObjectId }]
})

cartSchema.virtual('items', {
  ref: 'Item',
  localField: 'items',
  foreignField: '_id'
})

// cartSchema.post('find', async items => {
//   for (let item of items) {
//     await item.populate('items').execPopulate();
//   }
// })

cartSchema.set('toObject', { virtuals: true })
cartSchema.set('toJSON', { virtuals: true })

const Cart = mongoose.model(cartSchema)

module.exports = Cart;