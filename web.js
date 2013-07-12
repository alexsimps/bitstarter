var express = require('express');

var app = express.createServer(express.logger());
var fills Buffer(256);
app.get('/', function(request, response) {

    fills = fs.readFileSync(index.html);
    response.send(buf.toString(fills));

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});