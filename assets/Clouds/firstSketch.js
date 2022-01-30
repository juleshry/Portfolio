function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container");
  colorMode(HSB);
}

function draw() {
  noStroke();
  background(110);

  for (let x = -100; x < windowWidth + 100; x++) {
    for (let y = -100; y < windowHeight + 100; y++) {
      my_maths_function(x, y);
    }
  }
  noLoop();
  //saveCanvas(canvas, "myCanva", "png");
}

function my_maths_function(x, y) {
  var sat = 100 * noise(x / 50, y / 50);
  var hue = 220 + 50 * noise(x / 50, y / 50) - 25;

  fill(hue, sat, 100);

  x += 100 * noise(x / 100, y / 100) - 50;
  y += 100 * noise(y / 100, x / 100) - 50;

  circle(x, y, 1);
}
