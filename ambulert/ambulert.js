const xStart = 250;
const yStart = 250;
//starting x and y for car
let board = []

let xCor = [];
let yCor = [];

let bluex = 250;
let bluey = 450;
let red1x = 0;
let red1y = 100;
let red2x = 150;
let red2y = 300;
let red3x = 500;
let red3y = 50;
//initializing array with board colors
for (let x=0; x<=50; x++){
  let temp = []
  if (x%5 == 0){ //horizontal roads
    for (let y=0; y<=50; y++) {
      temp.push(true);
    }
  }else { //vertical
    for (let y=0; y<=50; y++) {
      if (y%5 == 0) { //road
        temp.push(true);
      }
      else { //sidewalk
        temp.push(false);
      }
    }
  }
  board.push(temp)
}
//end initializing

let blueImage;
let redImage;

function setup() {
  createCanvas(510,510);
  frameRate(15);
  stroke(255);
  
}

class Pointer {
  constructor(x, y, z) {
    this.x = x+5;
    this.y = y;
    this.z = z;
  }
  display() {
    fill(this.z);
    stroke(this.z);
    triangle(this.x-5,this.y-10,this.x,this.y,this.x,this.y-7.5);//left
    triangle(this.x,this.y-7.5,this.x,this.y,this.x+5,this.y-10);
    stroke('white');
  }
}

function draw() {
  //draw the city
  for (let x=0;x<board.length;x++){
    for (let y=0;y<board.length;y++){
      if (board[x][y]){
        stroke('black');
        fill('black');
        square(x*10,y*10,50);
      }else{
        stroke('gray');
        fill('gray');
        square(x*10,y*10,50);
      }
    }
  }
  //done drawing city
  
  //test pointer
  let red1 = new Pointer(red1x, red1y,'red');
  red1.display()
  let red2 = new Pointer(red2x, red2y,'red');
  red2.display()
  let red3 = new Pointer(red3x, red3y,'red');
  red3.display()
  let blue = new Pointer(bluex, bluey,'cyan');
  blue.display()
}
