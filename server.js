const express = require('express');
require('./db/mongoose');
const cors = require('cors');
const categoryRouter = require('./routers/api/category');
const userRouter = require('./routers/api/user');
const cartRouter = require('./routers/api/cart');
const itemRouter = require('./routers/api/item');
const paymentRouter = require('./routers/api/payment');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/categories', categoryRouter);
app.use('/api/users', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/items', itemRouter);
app.use('/api/payment', paymentRouter);

if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if ((req.get('X-Forwarded-Proto') !== 'https')) {
      res.redirect('https://' + req.get('Host') + req.url);
    } else
      next();
  });

  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    res.setHeader('Last-Modified', (new Date()).toUTCString());
    next();
  });
};


const port = process.env.PORT || 5000;

app.listen(port, err => {
  if (err) throw Error;
  console.log(`Server running on port ${port}`)
})
