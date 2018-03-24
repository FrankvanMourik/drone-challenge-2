var arDrone = require('ar-drone');
var http    = require('http');

//var pngStream = arDrone.createClient().getPngStream();
var client = arDrone.createClient();

var drone = {
    kill: function(){
        client.stop();
        client.land();
    },
    fly: function(){
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
    }
};

module.exports = drone;