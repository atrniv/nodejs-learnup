var express = require('express');
var passwordHash = require('password-hash');

var router = express.Router();

router.post('/login', function (req, res) {
  req.db.collection('users', function (err, collection) {
    if (err) { throw err; }
    collection.findOne({ username: req.body.username }, function (err, user) {
      if (err) { throw err; }
      if (user != null && passwordHash.verify(req.body.password, user.password)) {
        req.session.logged_in = true;
        req.session.username = user.username;
        res.json({ ok: true });
      } else {
        res.status(401).json({
          error: 'login_failed',
          error_description: 'Invalid username/password'
        });
      }
    })
  });
});

router.post('/register', function (req, res) {
  req.db.collection('users', function (err, collection) {
    if (err) { throw err; }
    var user = req.body;

    collection.findOne({ username: user.username }, function (err, existing_user) {
      if (err) { throw err; }
      if (existing_user == null) {
        user.password = passwordHash.generate(user.password);
        collection.save(user, function (err, result) {
          if (err) { throw err; }
          res.json({ ok: true });
        });
      } else {
        res.status(409).json({
          error: 'user_exists',
          error_description: 'User already registered'
        });
      }
    });
  });
});

module.exports = router;
