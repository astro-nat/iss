/*eslint-env node*/

var express = require('express');
var app = express();
var http = require('http'),
    fs = require('fs');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.send('WE\'RE GOING TO THE MOON!');
});

fs.readFile('./index.html', functin (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8000);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
