const mongoose = require('mongoose');
const express = require('express');
const router = new express.Router();

const User = require('../../models/user');

router.post('/', async (req, res) => {
  try {
    const user = await User.findById(req.body.userId)

    const existingItem = user.cart.find(item => item.itemId === req.body.item.itemId)
    if (existingItem) {

    }


    user.cart = [...user.cart, mongoose.Types.ObjectId(req.body.itemId)]
    await user.save();

    res.status(201).send(user.cart)
  } catch (err) {
    res.status(500).send('Something went wrong')
  }
})

module.exports = router;