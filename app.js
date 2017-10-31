'use strict';

const express = require('express');
const app = express();
let bodyParser = require('body-parser');

require('dotenv').config();
const port = process.env.PORT || 8080;

app.set('models', require('./models'));

let routes = require('./routes/');

app.use(routes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});