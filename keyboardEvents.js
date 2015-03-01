document.onkeydown = function keyboardEvent(event) {
    //Identify presssed key
    //var key_press = String.fromCharCode(event.keyCode);
    var key_code = event.keyCode;
    
    //console.log("Key Pressed: " + key_press);
    //console.log("Key Code: " + key_code);
    move(event);
}