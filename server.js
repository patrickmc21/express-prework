const express = require('express');
const app = express();
const { name } = require('./data');

const urlLogger = (req, res, next) => {
  console.log('Request URL:', req.url);
  next();
};

const timeLogger = (req, res, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

const errorPage = (req, res, next) => {
  res.status(404).send("OOPS! THAT IS NOT A VAILID THINGY!");
  next();
}

app.use(urlLogger, timeLogger)
app.use(express.static('public'))

app.get('/json', (req, res, next) => {
  res.status(200).json(name);
});

app.use(errorPage);

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});