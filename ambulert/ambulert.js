const xStart = 250;
const yStart = 250;
//starting x and y for car
let board = []

let xCor = [];
let yCor = [];
for (let x=0; x<50; x++){
  let temp = []
  if (x%5 == 0){ //horizontal roads
    for (let y=0; y<50; y++) {
      temp.append(0);
    }
  }else { //vertical
    for (let y=0; y<50; y++) {
      if (y%5 == 0) { //road
        temp.append(0);
      }
      else { //sidewalk
        temp.append(1);
      }
    }
  }
}

function setup() {
  createCanvas(500,500);
  frameRate(15);
  stroke(255);
  
  
}


function draw() {

}
