var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.json({ ok: true });
});

app.listen(3000);
