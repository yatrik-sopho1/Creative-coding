let x = 0;

let inconsolata;
function preload() {
  inconsolata = loadFont('Futura Classic W01 Bold.ttf');
}
function setup() {

  var canvas = createCanvas(windowWidth, windowHeight, WEBGL) ;
  canvas.parent('sketch-holder');
  //createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(inconsolata);
  textSize(windowWidth/14);
  textAlign(CENTER, CENTER);

}



function draw() {
  background(0);

    let camXB = map(mouseX , 0, width, -60,60);
    let camYB = map(mouseY, 0,200,-1,1);
    camera(camXB,camYB,(height/2)/tan(PI/6),camXB,camYB,0,0,1,0);

    fill(10,115,251);
    text('C R E A T I V E', 0,-80);
  	text('C O D I N G', 0,15);





    let camX = map(mouseX , 0, width, -50,50);
    let camY = map(mouseY, 0,200,-2,2);
    camera(camX,camY,(height/2)/tan(PI/6),camX,camY,0,0,1,0);

    fill(245,100,5);
    text('C R E A T I V E', 0,-80);
  	text('C O D I N G', 0,15);


  let camXW = map(mouseX , 0, width, -40,40);
  let camYW = map(mouseY, 0,200,-3,3);
  camera(camXW,camYW,(height/2)/tan(PI/6),camXW,camYW,0,0,1,0);

  fill(255);
  text('C R E A T I V E', 0,-80);
  	text('C O D I N G', 0,15);


fill(255,255,255,100);
ellipse(mouseX-windowWidth/2,mouseY-windowHeight/2,30,30);

}
