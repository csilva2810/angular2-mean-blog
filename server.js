var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var jwt        = require('jsonwebtoken');

var secretKey  = 'MySuperSecretKey';

var mongoose   = require('mongoose');

mongoose.connect(
  'mongodb://carlos:carlos123@ds149820.mlab.com:49820/blog', 
  function (err) {
    if (err) console.error('Error: ', err);
  }
);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());