function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container");
  colorMode(HSB);
  angleMode(DEGREES);
}

function draw() {
  noFill();

  stroke(220, 100, 90, 0.5);
  for (let a = 0; a < 360; a += 0.5) {
    spot(a);
  }

  noLoop();
  //saveCanvas(canvas, "myCanva", "png");
}

function spot(a) {
  let x = 200 * cos(a * 3);
  let y = 200 * sin(a * 4);

  circle(windowWidth / 2 + x, windowHeight / 2 - y, 100);
}
