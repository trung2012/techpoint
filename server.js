const express = require('express');
require('./db/mongoose');
const cors = require('cors');
const categoryRouter = require('./routers/api/category');
const userRouter = require('./routers/api/user');


const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/categories', categoryRouter)
app.use('/api/users', userRouter)

const port = process.env.PORT || 5000;

app.listen(port, err => {
  if (err) throw Error;
  console.log(`Server running on port ${port}`)
})
