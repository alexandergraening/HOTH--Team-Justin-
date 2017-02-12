var express = require('express')
var app = express();

app.get('/homepage', function(req, res){
	res.sendFile(__dirname + '/homepage.html')
})
app.get('/food', function(req, res){
	res.sendFile(__dirname + '/food.html')
})
app.get('/resources', function(req, res){
	res.sendFile(__dirname + '/resources.html')
})
app.get('/workshops', function(req, res){
	res.sendFile(__dirname + '/workshops.html')
})
app.get('/prizes', function(req, res){
	res.sendFile(__dirname + '/prizes.html')
})
app.get('/hacking', function(req, res){
	res.sendFile(__dirname + '/hacking.html')
})

app.listen(3000);