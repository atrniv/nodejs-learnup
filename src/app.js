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

app.use('/assets', express.static(__dirname + '/../bower_components'));

app.use('/', require('./routes/core'));
app.use('/ajax', require('./routes/ajax'));

app.listen(3000);
