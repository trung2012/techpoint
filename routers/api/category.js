const express = require('express');
const router = new express.Router();
const Category = require('../../models/category');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.find()
    return res.status(200).send(categories)

  } catch (err) {
    console.log(err)
    res.status(500).send()
  }
})

module.exports = router;