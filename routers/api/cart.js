const mongoose = require('mongoose');
const express = require('express');
const router = new express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/user');

router.post('/', auth, async (req, res) => {
  try {
    const { user } = req;

    const existingItem = user.cart.find(item => item.item.toString() === req.body.item.item)
    if (existingItem) {
      user.cart.forEach(item => {
        if (item.item.toString() === req.body.item.item) {
          item.quantity += req.body.item.quantity
        }
      })
      await user.save()
      return res.status(200).send(user.cart)
    }

    user.cart = [...user.cart, req.body.item]
    await user.save();

    res.status(201).send(user.cart)
  } catch (err) {
    res.status(500).send('Something went wrong')
  }
})

module.exports = router;