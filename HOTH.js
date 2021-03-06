var express = require('express')
var app = express();

app.get('/homepage', function(req, res){
	res.sendFile(__dirname + '/homepage.html')
})
app.get('/food', function(req, res){
	res.sendFile(__dirname + '/food.html')
})
app.get('/resources', function(req, res){
	res.sendFile(__dirname + '/Resources.html')
})
app.get('/workshops', function(req, res){
	res.sendFile(__dirname + '/workshops.html')
})
app.get('/prizes', function(req, res){
	res.sendFile(__dirname + '/Prizes.html')
})
app.get('/hacking', function(req, res){
	res.sendFile(__dirname + '/Hacking.html')
})

app.listen(3000);