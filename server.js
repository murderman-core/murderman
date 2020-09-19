var express = require("express");
var socket = require("socket.io");

var app = express();
var server = app.listen(process.env.PORT || 3000, listen);

function listen() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://" + host + ":" + port);
}

app.use(express.static("public"));

var io = socket(server);

io.sockets.on('connection', function(socket)
{
    console.log("Client Connected.");
    socket.on('disconnect', function() {
        console.log("Client has disconnected");
    });
});