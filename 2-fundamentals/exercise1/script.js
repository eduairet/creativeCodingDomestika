// Canvas
const canvas = document.querySelector('canvas'); // Canvas from DOM
const context = canvas.getContext('2d'); // 2D or 3D

// Background
context.fillStyle = 'magenta';
context.fillRect(0, 0, 600, 600);

// Rectangle
context.lineWidth = 8;
context.strokeStyle = "#FFF";
context.beginPath();
context.rect(100, 100, 400, 400);
context.stroke();

//Cirle
context.lineWidth = 8;
context.strokeStyle = "#00FFFF";
context.beginPath();
context.arc(300, 300, 200, 0, Math.PI * 2);
context.stroke();

// Variables
let year = 2021;
let nextYear = year + 1;
let dinner = 'hot-dog';
let sentence = 'Tonight, dinner is ' + dinner;

// Regular function
function saySomething(param) {
    console.log(param);
}
saySomething(sentence);

// Arrow function - Personal preference
const add = (a, b) => {
    return a + b;
}
console.log( add(10,11) );

// Anonymous function
const multiply = function (a, b) {
    return a * b;
}
console.log( multiply(10,11) );