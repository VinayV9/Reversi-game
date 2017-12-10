var express=require('express')
var app= express()
var http=require('http').Server(app)
var io = require('socket.io')(http)

var port =3000

app.use('/', express.static(__dirname + '/public'));

io.on('connection', function(socket){
    console.log("someone connected")
    socket.on('updateBoard', function(balls){
       console.log(balls)
    })
})

 http.listen(port, function(){
    console.log("port on %d",port)
})