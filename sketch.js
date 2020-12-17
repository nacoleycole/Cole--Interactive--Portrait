let img1;
let button;


function preload(){
  img1 = createCapture(VIDEO);//loadImage("Diptych1.png");
 
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10, 50, 50);
  
   //button
   push();
   button = createButton('SELFFIIIIEEE!');
   button.position(700, 450)
   button.mousePressed(saveCanvas);
   pop();
  

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
  img1.loadPixels();
  // push();
    translate(500,0);
    let gridSize = 5;
     noStroke();
    for (let y = 0; y < img1.height; y += gridSize) {
      for (let x = 0; x < img1.width; x += gridSize) {
  
        let index = (x + y*img1.width) * 4;
        
  
        let r = img1.pixels[index + 2];
        let g = img1.pixels[index + 2];
        let b = img1.pixels[index + 2];
  
        fill(r, g, b);
        ellipse(x, y, gridSize, gridSize);
      }
    }
    img1.updatePixels();
    // pop();

} 
function image3 (){
  img1.loadPixels();
  // push();
    translate(480,0);
    let gridSize = 5;
     noStroke();
    for (let y = 0; y < img1.height; y += gridSize) {
      for (let x = 0; x < img1.width; x += gridSize) {
  
        let index = (x + y*img1.width) * 4;
        
  
        let r = img1.pixels[index + 200];
        let g = img1.pixels[index + 150];
        let b = img1.pixels[index + 100];
  
        fill(r, g, b);
        rect(x, y, gridSize, gridSize/2);
      }
    }
    img1.updatePixels();

}


function draw() {
  
  image1();
  image2();
  image3();

}
