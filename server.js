const express = require('express');
const http = require('http');
const droneStream = require('dronestream');

const drone = require('./drone.js');

const app = express();


// App settings
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index');
})

app.post('/kill', function(req, res) {
    drone.kill();
    res.sendStatus(200);
});
app.post('/fly', function(req, res){
    drone.fly();
    res.sendStatus(200);
});

// Manual control pages
app.post('/keyUp', function(req, res){
    drone.hover();
    res.sendStatus(200);
});
app.post('/keyDown/t', function(req, res){
    drone.takeoff();
    res.sendStatus(200);
});
app.post('/keyDown/l', function(req, res){
    drone.land();
    res.sendStatus(200)
});
app.post('/keyDown/w', function(req, res){
    drone.forward();
    res.sendStatus(200);
});
app.post('/keyDown/s', function(req, res){
    //console.log("s");
    drone.backward();
    res.sendStatus(200);
});
app.post('/keyDown/a', function(req, res){
    drone.left();
    res.sendStatus(200);
});
app.post('/keyDown/d', function(req, res){
    drone.right();
    res.sendStatus(200);
});
app.post('/keyDown/q', function(req, res){
    drone.rotateLeft();
    res.sendStatus(200);
});
app.post('/keyDown/e', function(req, res){
   drone.rotateRight();
   res.sendStatus(200);
});


// Livestream settings
var videoServer = require("http").createServer(app);
droneStream.listen(videoServer);

videoServer.listen(3000, function(){
    console.log("Listening on port 3000");
});