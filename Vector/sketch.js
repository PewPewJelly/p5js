let svgImg;

function preload() {
  svgImg = loadImage('assets/file.svg'); // SVG 파일 로드
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  image(svgImg, 50, 50, 300, 300); // (이미지, x, y, 너비, 높이)
}