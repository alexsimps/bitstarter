var express = require('express');

var app = express.createServer(express.logger());
var fills Buffer(256);
app.get('/', function(request, response) {
    response.send('wtf');
    fills=fs.readFileSync;
    response.send(buf.toString(fills);
 //   response.send(buf.toString(fs.writeFile(index.html)));

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});