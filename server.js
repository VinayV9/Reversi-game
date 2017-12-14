var express=require('express')
var app= express()
var http=require('http').Server(app)
var io = require('socket.io')(http)
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var port =(process.env.PORT || 3000)

app.use('/', express.static(__dirname + '/public'))

io.on('connection', function(socket){
    console.log(socket.id)
    socket.on('updateBoard', function(balls){
       io.emit('updateBoard', balls)
    })
})

var gameIds=[]
app.post('/start2Player', function(req, res){
    console.log(req.body)
     gameIds.push(req.body.code)
     res.sendStatus(200)
})

 http.listen(port, function(){
    console.log("port on %d",port)
})