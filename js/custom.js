var EQUAL = 13, KEY_UP = 38, KEY_RIGHT = 39, KEY_DOWN = 40;


function main() {
    frames = 0;
    keystate = {};

    document.addEventListener("keydown", function (evt) {
        keystate[evt.keyCode] = true;
    });
    document.addEventListener("keyup", function (evt) {
        delete keystate[evt.keyCode];
    });

    update();
}

function update(){
   if(keystate[EQUAL]) console.log("aaaa")
}

main();