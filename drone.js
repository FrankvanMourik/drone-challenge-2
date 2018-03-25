var arDrone = require('ar-drone');
var http    = require('http');
const WebSocket = require('ws');
const express = require('express');
const url = require('url');


//var pngStream = arDrone.createClient().getPngStream();
var client = arDrone.createClient();


var drone = {
    kill: function(){
        console.log('POST /kill');
        client.stop();
        client.land();
    },
    fly: function(){
        console.log('POST /fly');
        var altitude; 
        const app2 = express();
 

// App settings
app2.set('view engine', 'ejs');
const server = http.createServer(app2);

const wss = new WebSocket.Server({ server });
wss.on('connection', function connection(ws, req) {
  const location = url.parse(req.url, true);
  // You might use location.query.access_token to authenticate or share sessions
  // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
 
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  setInterval(
    () =>client.on('navdata', function(data) {
        // console.log(data);
        ws.send(data.demo.altitude);
    }),
    1000
  );
}); 
 
server.listen(3001, function listening() {
  console.log('Listening on %d', server.address().port);
})     
        client.takeoff();
        client
            .after(5000, function() {
                this.clockwise(0.5);
            })
            .after(5000, function() {
                this.stop();
            })
            .after(5000, function() {
                this.clockwise(0.5);
            })
            .after(5000, function() {
                this.stop();
            })
            .after(5000, function() {
                this.clockwise(0.5);
            })
            .after(5000, function() {
                this.stop();
            })
            .after(5000, function() {
                this.clockwise(-0.5);
            })
            .after(5000, function() {
                this.stop();
            })
            .after(5000, function() {
                this.clockwise(-0.5);
            })
            .after(5000, function() {
                this.stop();
            })
            .after(5000, function() {
                this.clockwise(-0.5);
            })
            .after(5000, function() {
                this.stop();
            })
            .after(1000, function() {
                this.stop();
                this.land();
            });
    },
    hover: function(){
        client.stop();
    },
    takeoff: function() {
        client.takeoff();
    },
    land: function(){
        client.stop();
        client.land();
    },
    forward: function(){
        client.front(0.2);
    },
    forwardStop: function(){
      client.front(0);
    },
    backward: function(){
        client.back(0.2);
    },
    backwardStop: function(){
        client.back(0);
    },
    left: function(){
        client.left(0.2);
    },
    leftStop: function(){
        client.left(0);
    },
    right: function(){
        client.right(0.2);
    },
    rightStop: function(){
        client.right(0);
    },
    rotateLeft: function(){
        client.counterClockwise(0.2);
    },
    rotateLeftStop: function(){
        client.counterClockwise(0);
    },
    rotateRight: function(){
        client.clockwise(0.2);
    },
    rotateRightStop: function(){
        client.clockwise(0);
    },
    up: function(){
        client.up(0.2);
    },
    upStop: function(){
        client.up(0);
    },
    down: function(){
        client.down(0.2);
    },
    downStop: function(){
        client.down(0);
    }
};

module.exports = drone;