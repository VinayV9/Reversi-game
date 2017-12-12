var express=require('express')
var app= express()
var http=require('http').Server(app)
var io = require('socket.io')(http)

var port =(process.env.PORT || 3000)

app.use('/', express.static(__dirname + '/public'));

io.on('connection', function(socket){
    console.log(socket.id)
    socket.on('updateBoard', function(balls){
       io.emit('updateBoard', balls)
    })
})

 http.listen(port, function(){
    console.log("port on %d",port)
})