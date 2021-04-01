var express= require('express')
var mongoose=require('mongoose')
var bodyParser=require('body-parser')

var app= express()

var url='mongodb+srv://dbUser:dbUser@mylearning.c9gxp.mongodb.net/eduonix?retryWrites=true&w=majority'
mongoose.connect(url)
mongoose.Promise=global.Promise
var db=mongoose.connection

db.on('error', console.error.bind(console,'MongoDB connection failure'))

//  app.get('/', function(req,res){
//      res.send("EntryPoint");
//  });

//const cors = require('cors')

//
var router=require('./router/todo')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/App',router)

app.listen(5000, function(req,res){
    console.log("listening")
})
