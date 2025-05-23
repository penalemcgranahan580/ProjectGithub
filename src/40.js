let express = require('express');
let app = express();

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.listen(3000);
