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

var User = require('./model/user');
var Post = require('./model/post');

var router = express.Router();

router.use(function (req, res, next) {
  console.warn(req.method + ' ' + req.url + ' with: ' + JSON.stringify(req.body));
  next();
});

app.use('/', express.static(__dirname + '/public'));
app.use('/libs', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/libs', express.static(__dirname + '/node_modules/es6_shim/'));
app.use('/libs', express.static(__dirname + '/node_modules/zone.js/dist/'));
app.use('/libs', express.static(__dirname + '/node_modules/reflect-metadata/'));
app.use('/libs', express.static(__dirname + '/node_modules/systemjs/dist'));
app.use('/libs', express.static(__dirname + '/node_modules/rxjs/'));
app.use('/libs', express.static(__dirname + '/node_modules/angular2-in-memory-web-api/'));
app.use('/libs', express.static(__dirname + '/node_modules/@angular/'));

