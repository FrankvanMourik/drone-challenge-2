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
                manualControl = true;
            }
        }
    });
});