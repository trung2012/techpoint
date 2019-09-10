const express = require('express');
const router = new express.Router();
const auth = require('../../middleware/auth');
// const User = require('../../models/user');

router.post('/add', auth, async (req, res) => {
  try {
    const { user } = req;

    const existingItem = user.cart.find(item => item._id.toString() === req.body._id)

    if (existingItem) {
      const newCart = user.cart.map(item => {
        return item._id.toString() === req.body._id ?
          { ...req.body, quantity: item.quantity + 1 }
          : item
      })
      user.cart = newCart;
      await user.save();
      return res.status(201).send(user.cart)

    } else {
      newItem = { ...req.body, quantity: 1 }
      user.cart = [...user.cart, newItem]
      await user.save()
      return res.status(201).send(user.cart)
    }
  } catch (err) {
    res.status(500).send('Something went wrong')
  }
})

router.put('/remove', auth, async (req, res) => {
  try {
    const { user } = req;

    const existingItem = user.cart.find(item => item._id.toString() === req.body._id)

    if (existingItem) {
      if (existingItem.quantity === 1) {
        user.cart = user.cart.filter(item => item._id.toString() !== req.body._id)
        await user.save();
        return res.status(200).send(user.cart)
      }

      const newCart = user.cart.map(item => {
        return item._id.toString() === req.body._id ?
          { ...req.body, quantity: item.quantity - 1 }
          : item
      })
      user.cart = newCart;
      await user.save();
      return res.status(200).send(user.cart)
    } else {
      res.status(404).send('Item not found');
    }

    await user.save()
    return res.status(201).send(user.cart)
  } catch (err) {
    res.status(500).send('Something went wrong')
  }
})

router.post('/replace', auth, async (req, res) => {
  const { user } = req;

  try {
    user.cart = req.body;
    await user.save();
    return res.status(200).send(user.cart);
  } catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong')
  }

})

module.exports = router;