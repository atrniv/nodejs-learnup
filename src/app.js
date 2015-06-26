var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();

var cache = {};

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({ resave: false, saveUninitialized: true, secret: 'foo' }));
app.use(bodyParser.json());

app.use('/assets', express.static(__dirname + '/../bower_components'));

app.use(function (req, res, next) {
  // Open the database if it has not already been done
  if (cache.db == null) {
    MongoClient = require('mongodb').MongoClient;
    MongoClient.connect('mongodb://localhost:27017/hackerlyfe', function (err, db) {
      if (err) {
        throw err;
      } else {
        console.log('Database connection opened');
        req.db = cache.db = db;
        next();
      }
    });
  } else {
    req.db = cache.db;
    next();
  }
});

app.use('/', require('./routes/core'));
app.use('/ajax', require('./routes/ajax'));

app.listen(3000);
