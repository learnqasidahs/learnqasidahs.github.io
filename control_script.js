let mute_press = false;

document.getElementById("Mute").onclick = function(){
    console.log("working");
    if(mute_press != false){
        mute_press = true;
    }
    if(mute_press != true){
        mute_press = false;
    }
    console.log(mute_press);
}