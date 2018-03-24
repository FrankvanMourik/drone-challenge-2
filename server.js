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
    res.render('index');
});
app.post('/fly', function(req, res){
    drone.fly();
    res.render('index');
});

// Livestream settings
var videoServer = require("http").createServer(app);
droneStream.listen(videoServer);

videoServer.listen(3000, function(){
    console.log("Listening on port 3000");
});