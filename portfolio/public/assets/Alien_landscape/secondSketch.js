function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container");
  background("black");
  colorMode(HSB);
}

function draw() {
  noStroke();

  for (let x = 0; x < (5 * windowWidth) / 7; x++) {
    for (let y = windowHeight / 5; y < (4 * windowHeight) / 5; y++) {
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
