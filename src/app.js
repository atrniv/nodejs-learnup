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

app.get('/', function (req, res) {
  res.render('login');
});

app.get('/home', function (req, res) {
  res.render('home', {
    challenge: {
      id: 1,
      description: 'Print out the sequence of numbers from 1 to the given input.',
      sample_input: '5',
      sample_output: '1 2 3 4 5'
    }
  });
})

app.listen(3000);
