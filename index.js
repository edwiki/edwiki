var express = require('express');
var app = express();

app.use(express.static('www'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/www/index.html');
});

app.listen(80, function () {
  console.log('listening on port 80');
})
