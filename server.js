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
     gameIds.push(req.body.code)
     console.log(gameIds)
     res.sendStatus(200)
})

app.post('/joinGame', function(req,res){
    
})

 http.listen(port, function(){
    console.log("port on %d",port)
})