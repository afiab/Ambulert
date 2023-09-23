const xStart = 250;
const yStart = 250;
//starting x and y for car
let board = []

let xCor = [];
let yCor = [];
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

function setup() {
  createCanvas(510,510);
  frameRate(15);
  stroke(255);
  
}


function draw() {
  //draw the city
  for (let x=0;x<board.length;x++){
    for (let y=0;y<board.length;y++){
      if (board[x][y]){
        fill('black');
        square(x*10,y*10,50);
      }else{
        fill('gray');
        square(x*10,y*10,50);
      }
    }
  }
  //done drawing city
  
}
