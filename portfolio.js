var i = j = k = 0;
var turn = 1;
var hello = "hello.";
var aidan = "i'm aidan,";
var sd = "software developer";
var speed = 50;
var wait1 = 500;
var wait2 = 300;

function back() {
    localStorage.setItem("wentback","true");
}

function fadePage() {
    element = document.getElementById("aboutme")
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.2;
    }, 50);
}

function github() { document.location.href = "https://github.com/aidandobkins" }

function linkedin() { document.location.href = "https://www.linkedin.com/in/aidandobkins/" }

function showPage() { document.location.href = "/aboutme"; }

function resume() { document.location.href = "/resume"; }

function showButton() {
    element = document.getElementById("fadeins")
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.2;
    }, 50);
}

function showButtonInstant() {
    element = document.getElementById("fadeins")
    element.style.opacity = 1;
}

function typeWriter() {
    if(localStorage.getItem("wentback") == "true") {
        document.getElementById("hello").innerHTML += hello;
        document.getElementById("aidan").innerHTML += aidan;
        document.getElementById("sd").innerHTML += sd;
        showButtonInstant();
        localStorage.setItem("wentback","false");
    }
    else {
        if(i == hello.length) {
            turn++;
            i = 0;
            setTimeout(typeWriter, wait1);
            return;
        }
        if(j == aidan.length) {
            turn++;
            j = 0;
            setTimeout(typeWriter, wait2);
            return;
        }
        if(k == sd.length) {
            setTimeout(showButton, wait2);
        }
        if (i < hello.length && turn == 1) {
        document.getElementById("hello").innerHTML += hello.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        }
        if (j < aidan.length && turn == 2) {
        document.getElementById("aidan").innerHTML += aidan.charAt(j);
        j++;
        setTimeout(typeWriter, speed);
        }
        if (k < sd.length && turn == 3) {
        document.getElementById("sd").innerHTML += sd.charAt(k);
        k++;
        setTimeout(typeWriter, speed); 
        }
    } 
}