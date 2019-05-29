/*eslint-env node*/

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('WE\'RE GOING TO THE MOON!');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
