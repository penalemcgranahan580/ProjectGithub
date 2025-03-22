const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hi there! I am your Node.js Hello World example.</h1>');
});

app.listen(3000);
