function setup() {
  const width = windowWidth - 50;
  const height = windowHeight - 25;

  let canvas = createCanvas(width, height);
  canvas.parent("sketch-container");
  canvas.center("horizontal");
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
  const width = windowWidth - 50;
  const height = windowHeight - 25;

  let x = 200 * cos(a * 3);
  let y = 200 * sin(a * 4);

  circle(width / 2 + x, height / 2 - y, 100);
}
