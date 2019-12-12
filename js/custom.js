var EQUAL = 13, KEY_UP = 38, KEY_RIGHT = 39, KEY_DOWN = 40;

var NUM1 = 0;
var NUM2 = 0;
var NUM3 = 0;
var NUM4 = 0;
var Operation = "";
var answer = 0;


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

function update() {
    if (keystate[EQUAL]) console.log("aaaa");
}

function getOne() {
    document.getElementById("val").value = "1";
    NUM1 = 1;
}

function getTwo() {
    document.getElementById("val").value = "2";
    NUM2 = 2;
}

function getThree() {
    document.getElementById("val").value = "3";
    NUM3 = 3;
}

function getFour() {
    document.getElementById("val").value = "4";
    NUM4 = 4;
}

function getFive() {
    document.getElementById("val").value = "5";
}
function getSix() {
    document.getElementById("val").value = "6";
}

function getSeven() {
    document.getElementById("val").value = "7";
}

function getEight() {
    document.getElementById("val").value = "8";
}

function getNine() {
    document.getElementById("val").value = "9";
}

function sum() {
    document.getElementById("val").value = "+";
    Operation = "+"
}

function multiple() {
    document.getElementById("val").value = "x";
}

function divide() {
    document.getElementById("val").value = "/";
}

function sub() {
    document.getElementById("val").value = "-";
}

function total() {
    console.log(NUM1);
    console.log(NUM2);
    console.log(Operation);

    switch(Operation){
        case "+" : answer = NUM1 + NUM2 + NUM3 + NUM4;   break;
        case "-" : answer = NUM1 - NUM2;                 break;
        case "/" : answer = NUM1 / NUM2;                 break;
        case "x" : answer = NUM1 * NUM2;                 break;
    }

    document.getElementById("val").value = answer;
}

main();