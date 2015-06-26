var express = require('express');

var router = express.Router();

router.get('/', function (req, res) {
  res.render('login');
});

router.get('/home', function (req, res) {
  res.render('home', {
    challenge: {
      id: 1,
      description: 'Print out the sequence of numbers from 1 to the given input.',
      sample_input: '5',
      sample_output: '1 2 3 4 5'
    }
  });
})

module.exports = router;
