// Canvas
const canvas = document.querySelector('canvas'); // Canvas from DOM
const context = canvas.getContext('2d'); // 2D or 3D

// Background
context.fillStyle = '#222';
context.fillRect(0, 0, 600, 600);

// Draw loop
const side = 600;
const gap = 40;
const reps = 6;
const diff = 10;
const squareSize = (side - gap * (reps+1)) / reps;
const increment = squareSize + gap;
context.lineWidth = 2;
context.strokeStyle = '#00FFFF';
for (let x=gap; x<=side-gap*2; x+=increment) {
    for (let y=gap; y<=side-gap*2; y+=increment) {
        context.beginPath();
        context.rect(x, y, squareSize, squareSize);
        if (x > side/2 && y < side/2 || Math.random() > 0.5) {
            context.rect(x + diff, y + diff, squareSize - diff * 2, squareSize - diff * 2);
        }
        context.stroke();
    }
}


// Arrays
let years = [];
let menu = ['starter', 'main', 'dessert', 'drinks'];

// Loops
for (let i=0; i<menu.length; i++) {
    console.log(menu[i]);
}
for (let i=0; i<20; i++) {
    years.push(2021 + i);
}
console.log(years);

// For each built-in function
years.forEach(item => {
        console.log(item);
    }
)