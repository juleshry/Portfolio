function setup() {
  const width = windowWidth - 50;
  const height = windowHeight - 25;

  let canvas = createCanvas(width, height);
  canvas.parent("sketch-container");
  canvas.center("horizontal");
  background("black");
  colorMode(HSB);
}

function draw() {
  const width = windowWidth - 50;
  const height = windowHeight - 25;

  noStroke();

  for (let x = 0; x < (5 * width) / 7; x++) {
    for (let y = height / 5; y < (4 * height) / 5; y++) {
      my_maths_function(x, y);
    }
  }
  noLoop();
  //saveCanvas(canvas, "myCanva", "png");
}

function my_maths_function(x, y) {
  x += y / 2;
  let h = 200 * noise(x / 200, y / 200);
  h += 30 * noise(x / 30, y / 30);

  let hue = (h + 180) % 360;
  let brightness = h * 0.75;

  fill(hue, 80, brightness, 0.3);

  circle(x, y - h + 115, 2);
}
