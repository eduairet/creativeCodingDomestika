const canvasSketch = require('canvas-sketch');

const side = 1080;

const settings = {
  dimensions: [ side, side ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#333';
    context.fillRect(0, 0, width, height);
    const gap  = 40;
    const reps = 6;
    const diff = 20;
    const squareSize = (side - gap * (reps+1)) / reps;
    const increment = squareSize + gap;
    context.lineWidth = side*0.003;
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
  };
};

canvasSketch(sketch, settings);