const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/user');
const router = new express.Router();


//Register User
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send('Please fill all fields')
  }

  const user = await User.findOne({ email })
  if (user) {
    return res.status(400).send('User already exists')
  }

  const newUser = new User({
    name,
    email,
    password
  })

  try {
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(newUser.password, 10, (err, hash) => {
        if (err) reject(err)
        resolve(hash)
      })
    })

    newUser.password = hashedPassword;
    const user = await newUser.save()

    jwt.sign({ id: user._id }, process.env.jwtSecret, (err, token) => {
      if (err) throw error;
      res.status(201).json({
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      })
    })
  } catch (err) {
    res.status(500).send('Something went wrong')
  }
})

// User Login

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Please fill in all fields')
  }

  try {
    const existingUser = await User.findOne({ email })

    const isMatch = await bcrypt.compare(password, existingUser.password)

    if (!isMatch) {
      return res.status(401).send('Invalid credentials')
    }

    jwt.sign({ id: existingUser._id }, process.env.jwtSecret, (err, token) => {
      if (err) throw Error;

      res.status(200).json({
        token,
        user: {
          id: existingUser._id,
          name: existingUser.name,
          email: existingUser.email
        }
      })
    })
  } catch (err) {
    res.status(500).send('Something went wrong')
  }

})

module.exports = router;