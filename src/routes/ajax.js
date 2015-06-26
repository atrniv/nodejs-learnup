var express = require('express');

var router = express.Router();

router.post('/login', function (req, res) {
  res.json(req.body);
});

router.post('/register', function (req, res) {
  res.json(req.body);
});

module.exports = router;
