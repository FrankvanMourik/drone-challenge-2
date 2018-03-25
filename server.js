const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');
const droneStream = require('dronestream');
const drone = require('./drone.js');
 
const app = express();
 

// App settings
app.set('view engine', 'ejs');

app.use(express.static('public'));
// app.use(function (req, res) {
//     res.send({ msg: "hello" });
//   });

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


const videoServer = http.createServer(app);


droneStream.listen(videoServer);


videoServer.listen(8080, function listening() {
  console.log('Listening on %d', videoServer.address().port);
});



/*

const statistics = require('./statistics.js');

const app = express();

var data = JSON.parse(`
{"demo": {
    "controlState": "CTRL_DEFAULT"
}}
`);


// Livestream settings
var videoServer = require("http").createServer(app);
droneStream.listen(videoServer);

videoServer.listen(3000, function listening() {
    console.log('Listening on %d', server.address().port);
  });
const url = require('url');
const WebSocket = require('ws'); 

const wss = new WebSocket.Server({ videoServer });
 
wss.on('connection', function connection(ws, req) {
  const location = url.parse(req.url, true);
  // You might use location.query.access_token to authenticate or share sessions
  // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
 
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  ws.send('something');
});
 
*/