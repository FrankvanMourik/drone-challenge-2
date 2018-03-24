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
    backward: function(){
        client.back(0.2);
    },
    left: function(){
        client.left(0.2);
    },
    right: function(){
        client.right(0.2);
    },
    rotateLeft: function(){
        client.counterClockwise(0.2);
    },
    rotateRight: function(){
        client.clockwise(0.2);

    }
};

module.exports = drone;