require('express-async-errors');
const express = require('express');
const cors = require('cors');

const router = require('../routes');

const app = express();
app.use(cors());

app.use(express.json());

app.use('/images', express.static('public/images'));
app.use('/product', router.ProductRouter);

app.use((err, req, res, _next) => {
  const { status, message } = err;
  console.error(err);
  res.status(status || 500).json({ message });
});

module.exports = app;
