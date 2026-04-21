let img; 
function preload() {
  img = loadImage('assets/img2.png'); 
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  image(img, 0, 0); // 파라미터는 순서대로 (이미지, x, y)이다. (x, y) 위치가 이미지가 그려질 좌측 상단이다.
}