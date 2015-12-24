var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.set('log level', 1);
io.on('connection', function(socket){
    console.log('a user connected');
    console.log(socket.id);
    socket.on('giveUrl', function(msg){
	msgArr = msg.split(',');
	console.log(msgArr);
	io.sockets.connected[msgArr[0]].emit('giveUrl',msgArr[1]);
    });
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
