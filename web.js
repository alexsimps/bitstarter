77;10103;0cvar express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send('wtf');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});