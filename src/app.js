var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(cookieParser());
app.use(session({ resave: false, saveUninitialized: true, secret: 'foo' }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.render('home');
});

app.listen(3000);
