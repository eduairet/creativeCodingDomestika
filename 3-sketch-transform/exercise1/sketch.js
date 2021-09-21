const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {

    const x = width*.5,
          y = height*.5,
          w = width*.4,
          h = height*.4;

    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.save();
      context.fillStyle = 'black';
      context.translate(x, y);
      context.rotate( math.degToRad(random.range(0,360)) );
      context.beginPath();
      context.rect(w*-.5, h*-.5, w, h);
      context.fill();
    context.restore();
    
    context.strokeStyle = 'white';
    context.lineWidth = 60;
    context.beginPath();
    context.arc(x, y, w*random.range(.25, 0.5), 0, Math.PI*2);
    context.stroke();

    const hours = 12*4;
    for (let hour=0; hour<hours; hour++) {
      const slice = math.degToRad(360/hours);
      const tetha = slice * hour;
      const cx = Math.sin(tetha) * w,
            cy = Math.cos(tetha) * h;
      const radius = 10;
      const myScale = random.range(0, 3);
      context.save();
        context.fillStyle = 'black';
        context.translate(cx, cy);
        context.scale(myScale, myScale);
        context.beginPath();
        context.arc(x/myScale + random.range(-30, 30), y/myScale + random.range(-30, 30), radius, 0, Math.PI*2);
        context.fill();
      context.restore();
      context.save();
        context.strokeStyle = 'black';
        context.lineWidth = random.range(1,20);
        context.translate(width*.5, y-h);
        context.rotate(slice * hour);
        context.translate(cx, cy);
        context.beginPath();
        context.arc(0, 0, random.range(w*.6,w), slice*random.range(5, -.2), slice*random.range(-.01, 12));
        context.stroke();
      context.restore();
    }

  };
};

canvasSketch(sketch, settings);
