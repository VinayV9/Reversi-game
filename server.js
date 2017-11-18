var express=require('express')
var app =express()
var bodyParser=require('body-parser')
var port =3000

app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/public'));
app.use('/',express.static(__dirname+'js'))
app.listen(port, function(){
    console.log("port on %d",port)
})