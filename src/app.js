express = require('express');

app = express();

app.get('/', function (req, res) {
  res.json({ ok: true });
});

app.listen(3000);
