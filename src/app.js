var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

app.use(cookieParser());
app.use(session({ resave: false, saveUninitialized: true, secret: 'foo' }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  if (req.session.requests == null) {
    req.session.requests = 0;
  } else {
    req.session.requests++;
  }
  next();
});

app.get('/', function (req, res) {
  res.json({ ok: true, requests: req.session.requests });
});

app.post('/', function (req, res) {
  res.json(req.body);
})

app.listen(3000);
