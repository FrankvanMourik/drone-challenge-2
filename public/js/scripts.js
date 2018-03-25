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
                $(".col.keys").hide();
                manualControl = false;
            }
            else{
                console.log('enable manual');
                $(this).html("Stop Manual");
                $.post("/keyUp");
                $(".col.keys").show();
                manualControl = true;
            }
        }
    });
});

// Sent keypresses to the server for manual control
var allowedKeys = ['t', 'g', 'w', 'a', 's', 'd', 'q', 'e', 'r', 'f'];
var currentKeys = [];
allowedKeys.forEach(function(e){
   currentKeys[e] = false;
});

$(document).keypress(function(e){
    if(manualControl && allowedKeys.indexOf(e.key) != -1 && !currentKeys[e.key]){
        currentKeys[e.key] = true;
        $("#keyboard #" + e.key).addClass("active");
        $.post("/keyDown/" + e.key);
    }
});

$(document).keyup(function(e){
   if(manualControl && allowedKeys.indexOf(e.key) != -1){
       currentKeys[e.key] = false;
       $("#keyboard #" + e.key).removeClass("active");
       $.post("/keyUp/" + e.key);
   }
});