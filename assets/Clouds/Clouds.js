function setup() {
  const width = windowWidth - 50;
  const height = windowHeight - 25;

  let canvas = createCanvas(width, height);
  canvas.parent("sketch-container");
  canvas.center("horizontal");
  colorMode(HSB);
}

function draw() {
  const width = windowWidth - 50;
  const height = windowHeight - 25;

  noStroke();
  background(110);

  for (let x = -100; x < width + 100; x++) {
    for (let y = -100; y < height + 100; y++) {
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
