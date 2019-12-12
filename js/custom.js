var EQUAL = 13, KEY_UP = 38, KEY_RIGHT = 39, KEY_DOWN = 40;

var NUM1 = 0;


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

function getOne(){
    document.getElementById("val").value = "1";
}

function getTwo(){
    document.getElementById("val").value = "2";
    NUM1 = 2;
}

function getThree(){
    document.getElementById("val").value = "3";
}

function getFour(){
    document.getElementById("val").value = "4";
}

function getFive(){
    document.getElementById("val").value = "5";
}
function getSix(){
    document.getElementById("val").value = "6";
}

function getSeven(){
    document.getElementById("val").value = "7";
}

function getEight(){
    document.getElementById("val").value = "8";
}

function getNine(){
    document.getElementById("val").value = "9";
}

main();