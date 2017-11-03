'use strict';

const express = require('express');
const app = express();
let bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT || 4000;
console.log('port', port);

app.set('models', require('./models'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

let routes = require('./routes/');

app.use(routes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

