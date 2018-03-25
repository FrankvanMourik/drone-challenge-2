var arDrone = require('ar-drone');
var http    = require('http');

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