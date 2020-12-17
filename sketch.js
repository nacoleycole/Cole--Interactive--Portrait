let img1;
let img2;

function preload(){
  img1 = loadImage("Diptych1.png");
  img2 = loadImage("Diptych2.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  

}
function image1(){
  img1.loadPixels();
//  translate(500,10);
  let gridSize = 5;
    noStroke();
  for (let y = 0; y < img1.height; y += gridSize) {
    for (let x = 0; x < img1.width; x += gridSize) {

      let index = (x + y*img1.width) * 4;

      let r = img1.pixels[index + 100];
      let g = img1.pixels[index + 50];
      let b = img1.pixels[index + 2];

      fill(r, g, b);
      rect(x, y, gridSize/2, gridSize);
    }
  }
  img1.updatePixels();

}

function image2(){
  img2.loadPixels();
  // push();
    translate(760,0);
    let gridSize = 5;
     noStroke();
    for (let y = 0; y < img2.height; y += gridSize) {
      for (let x = 0; x < img2.width; x += gridSize) {
  
        let index = (x + y*img2.width) * 4;
  
        let r = img2.pixels[index + 2];
        let g = img2.pixels[index + 2];
        let b = img2.pixels[index + 2];
  
        fill(r, g, b);
        ellipse(x, y, gridSize, gridSize);
      }
    }
    img2.updatePixels();
    // pop();

} 

function draw() {
  // push();
   image1();
  // pop();
  //  push();
  image2();
  //  pop();

}
