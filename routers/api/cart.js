const mongoose = require('mongoose');
const express = require('express');
const router = new express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/user');

router.post('/', auth, async (req, res) => {
  try {
    const { user } = req;

    const existingItem = user.cart.find(item => item.item.toString() === req.body.item)

    if (existingItem) {
      const newCart = user.cart.map(item => {
        return item.item.toString() === req.body.item ?
          { ...req.body, quantity: item.quantity + 1 }
          : item
      })
      user.cart = newCart;
    } else {
      newItem = { ...req.body, quantity: 1 }
      user.cart = [...user.cart, newItem]
    }

    await user.save()
    return res.status(201).send(user.cart)
  } catch (err) {
    res.status(500).send('Something went wrong')
  }
})

module.exports = router;