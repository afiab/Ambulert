const xStart = 250;
const yStart = 250;
//starting x and y for car
let board = []

let xCor = [];
let yCor = [];

//x and y coords of pointers
let bluex = 250;
let bluey = 410;
let red1x = 0;
let red1y = 10;
let red2x = 150;
let red2y = 10;
let red3x = 500;
let red3y = 60;
//horizontal or vertical movement
let red1d = true;
let red2d = true;
let red3d = true;
let blued = true;
//left+right or up+down movement
let red1s = true;
let red2s = true;
let red3s = true;
let blues = true;

let blueslow = true;
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
  constructor(x, y, z, d, s) {
    this.x = x+5; //x coor
    this.y = y; // y coor
    this.z = z; // color
    this.d = d; //horizontal if true
    this.s = s; //positive if true
  }
  display() {
    fill(this.z);
    stroke(this.z);
    if (!this.d && this.s){ //down
      triangle(this.x-5,this.y-10,this.x,this.y,this.x,this.y-7.5);//left
      triangle(this.x,this.y-7.5,this.x,this.y,this.x+5,this.y-10);
    }else if (!this.d && !this.s){
      triangle(this.x-5,this.y,this.x,this.y-10,this.x,this.y-2.5);//left
      triangle(this.x+5,this.y,this.x,this.y-10,this.x,this.y-2.5);
    }else if (this.d && this.s){
      triangle(this.x-5,this.y-10,this.x+5,this.y-5,this.x-2.5,this.y-5);//left
      triangle(this.x-5,this.y,this.x+5,this.y-5,this.x-2.5,this.y-5);
    }else if (this.d && !this.s){
      triangle(this.x+5,this.y-10,this.x-5,this.y-5,this.x+2.5,this.y-5);//left
      triangle(this.x+5,this.y,this.x-5,this.y-5,this.x+2.5,this.y-5);
    }
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
  let red1 = new Pointer(red1x, red1y,'red', red1d, red1s);
  red1.display()
  let red2 = new Pointer(red2x, red2y,'red', red2d, red2s);
  red2.display()
  let red3 = new Pointer(red3x, red3y,'red', red3d, red3s);
  red3.display()
  let blue = new Pointer(bluex, bluey,'cyan', blued, blues);
  blue.display()
  
  //direction for red1d
  if (red1x%50 ==0 && (red1y-10)%50==0){
    red1d = Math.random(0,1)>0.5;
    red1s = Math.random(0,1)>0.5;
  }
  if (red1d){//horizontal
    if (red1s) { //go right
      if (red1x+10<=500){
        red1x +=10;
      }else{
        red1s = false;
      }
    }else{//go left
      if (red1x-10>=0){
        red1x -=10;
      }else{
        red1s = true;
      }
    }
  }else{//vertical
    if (red1s) { //go down
      if (red1y +10<= 500){
        red1y +=10;
      }else{
        red1s = false;
      }
    }else{//go up
      if (red1y-10>=10){
        red1y -=10;
      }else{
        red1s = true;
      }
    }
  }
  //red2 here
  if (red2x%50 ==0 && (red2y-10)%50==0){
    red2d = Math.random(0,1)>0.5;
    red2s = Math.random(0,1)>0.5;
  }
  if (red2d){//horizontal
    if (red2s) { //go right
      if (red2x+10<=500){
        red2x +=10;
      }else{
        red2s = false;
      }
    }else{//go left
      if (red2x-10>=0){
        red2x -=10;
      }else{
        red2s = true;
      }
    }
  }else{//vertical
    if (red2s) { //go down
      if (red2y+10<=500){
        red2y +=10;
      }else{
        red2s = false;
      }
    }else{//go up
      if (red2y-10>=10){
        red2y -=10;
      }else{
        red2s = true;
      }
    }
  }
  //direction for red3
  if (red3x%50 ==0 && (red3y-10)%50==0){
    red3d = Math.random(0,1)>0.5;
    red3s = Math.random(0,1)>0.5;
  }
  if (red3d){//horizontal
    if (red3s) { //go right
      if (red3x+10<=500){
        red3x +=10;
      }else{
        red3s = false;
      }
    }else{//go left
      if (red3x-10>=0){
        red3x -=10;
      }else{
        red3s = true;
      }
    }
  }else{//vertical
    if (red3s) { //go down
      if (red3y +10<= 500){
        red3y +=10;
      }else{
        red3s = false;
      }
    }else{//go up
      if (red3y-10>=10){
        red3y -=10;
      }else{
        red3s = true;
      }
    }
  }
  
  //blue here
  if (bluex%50 ==0 && (bluey-10)%50==0){
    blued = Math.random(0,1)>0.5;
    blues = Math.random(0,1)>0.5;
  }
  if (blued && blueslow){//horizontal
    if (blues) { //go right
      if (bluex+10<=500){
        bluex +=10;
      }else{
        blues = false;
      }
    }else{//go left
      if (bluex-10>=0){
        bluex -=10;
      }else{
        blues = true;
      }
    }
  }else if(!blued && blueslow){//vertical
    if (blues) { //go down
      if (bluey +10<= 500){
        bluey +=10;
      }else{
        blues = false;
      }
    }else{//go up
      if (red3y-10>=10){
        bluey -=10;
      }else{
        blues = true;
      }
    }
  }
  blueslow = !blueslow;
}
