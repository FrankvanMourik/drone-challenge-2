var manualControl = false;

$(document).ready(function(e) {
    $("button").click(function(e){
        var value = $(this).attr('value');
        if(value != "manual"){
            $.post("/" + value);
            console.log('POST /' + value);
        }
        else{
            if(manualControl){
                console.log("disable manual");
                $(this).html("Start Manual");
                manualControl = false;
            }
            else{
                console.log('enable manual');
                $(this).html("Stop Manual");
                $.post("/keyUp");
                manualControl = true;
            }
        }
    });
    var ws = new WebSocket('ws://localhost:3001');
    // event emmited when connected
    ws.onopen = function () {
        console.log('websocket is connected ...')
        // sending a send event to websocket server
        ws.send('connected')
    }
    // event emmited when receiving message 
    ws.onmessage = function (ev) {
        console.log(ev);
        $('#altitude').html(JSON.parse(ev.data).altitude);
    }
});

// Sent keypresses to the server for manual control
var allowedKeys = ['t', 'l', 'w', 'a', 's', 'd', 'q', 'e'];
var currentKeys = [];
allowedKeys.forEach(function(e){
   currentKeys[e] = false;
});

$(document).keypress(function(e){
    if(manualControl && allowedKeys.indexOf(e.key) != -1 && !currentKeys[e.key]){
        console.log("pressed '" + e.key + "'");
        currentKeys[e.key] = true;
        $.post("/keyDown/" + e.key);
    }
});

$(document).keyup(function(e){
   if(manualControl && allowedKeys.indexOf(e.key) != -1){
       console.log("up '" + e.key + "'");
       currentKeys[e.key] = false;
       $.post("/keyUp");
   }
});