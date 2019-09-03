// const express = require('express');
// const router = new express.Router();

// const Category = require('./models/category');
// const Item = require('./models/item');

// router.post('/items', async (req, res) => {
//   const item = new Item({
//     ...req.body
//   })

//   try {
//     await item.save();
//     res.status(200).send(item)
//   } catch (err) {
//     res.status(400).send(err)
//   }
// })

// router.post('/categories', async (req, res) => {
//   const category = new Category({
//     ...req.body
//   })

//   try {
//     await category.save();
//     res.status(200).send(category)
//   } catch (err) {
//     res.status(400).send(err)
//   }
// })
