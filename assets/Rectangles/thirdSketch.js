function setup() {
  const width = windowWidth - 50;
  const height = windowHeight - 25;

  let canvas = createCanvas(width, height);
  canvas.parent("sketch-container");
  canvas.center("horizontal");
  background("black");
  angleMode(DEGREES);
  colorMode(HSB);
}

function draw() {
  fill("white");

  draw_Rectangles();

  noLoop();
}

function draw_Rectangles() {
  const width = windowWidth - 50;
  const height = windowHeight - 25;

  let w = 15;
  let h = 5;
  for (let x = width / 5; x < (4 * width) / 5; x += 22) {
    for (let y = height / 4; y < (3 * height) / 4; y += 11) {
      let n = noise(x / 200, y / 200) - 0.5;
      let rotation = 90 * n;

      draw_Rectangle(x, y, w, h, n, rotation);
    }
  }
  //saveCanvas(canvas, "myCanva", "png");
}

function draw_Rectangle(x, y, w, h, n, rotation) {
  push();
  translate(x + w / 2, y + h / 2);
  rotate(rotation);
  translate(-(x + w / 2), -(y + h / 2));
  rect(x, y, w, h * (1 - 2.1 * -n));
  pop();
}
