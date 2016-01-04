//Creation in Progress-Ammad Hashmi
//v1.0

//--------------------------------------------------------------------------------------------------
//     Fix Instruction Buttons and Turret Movement
//--------------------------------------------------------------------------------------------------

//Main Menu
//Some colors shall be same(Main Menu color shall fuse into Game State)
background(0, 255, 242);

var cloud = function(x, y, w, h) {
    noStroke();
    fill(0, 0, 0);
    ellipse(this.x, this.y, this.w, this.h);
};

var btn1 = { //Start
    x: 125,
    y: 100,
    width: 150,
    height: 50,
    text: "        Start"
};
var btn2 = { //Instructions
    x: 125,
    y: 175,
    width: 150,
    height: 50,
    text: "    Instructions"
};
var btn3 = { //Back to Menu from Instruct
    x: 125,
    y: 250,
    width: 150,
    height: 50,
    text: "  Back to Menu"
};
var drawButton = function(btn) {
    fill(238, 255, 0);
    rect(btn.x, btn.y, btn.width, btn.height, 5);
    fill(0, 0, 0);
    textSize(21);
    text(btn.text, btn.x, btn.y+btn.height/1.5);
};







var menuBuild = function() {
    //cloud
fill(0, 255, 242);
rect(0,0,405,405);
fill(227, 218, 227);
ellipse(0, 21, 50, 50);
ellipse(59, 21, 50, 50);
ellipse(134, 21, 50, 50);
ellipse(199, 21, 50, 50);
ellipse(243, 21, 50, 50);
ellipse(23, 21, 50, 50);
ellipse(263, 21, 50, 50);
ellipse(333, 21, 50, 50);
ellipse(223, 21, 50, 50);
ellipse(93, 21, 50, 50);
ellipse(367, 21, 50, 50);
ellipse(163, 21, 50, 50);
ellipse(299, 21, 50, 50);
ellipse(400, 21, 50, 50);
noStroke();
rect(0,0,400,35);

//Ground
fill(150, 78, 0);
rect(-1, 370, 401, 30);
fill(48, 224, 13);
rect(-1, 370, 401, 10);

//Turret
fill(0,0,0);
rect(192, 325, 20, 30);
fill(255,255,255);
rect(171, 345, 65, 25);

drawButton(btn1);
drawButton(btn2);
};


    

var instructionBuild = function(){
    fill(0, 0, 0);
    rect(0,0,400,400);
    fill(255,255,255);
    textSize(25);
    var Instruct = "Click and Shoot at the thingies falling from the ground below the grass into space from the clouds above and beyond the infinity of SuperBaby.";
    text(Instruct, 25, 25, 350, 300);
    drawButton(btn3);
    if(mouseX >= btn3.x && mouseX <= (btn3.x+btn3.width) &&
        mouseY >= btn3.y && mouseY <= (btn3.y+btn3.height)) {
            menuBuild();
        }
};

var instructions = function(){
    if(mouseX >= btn2.x && mouseX <= (btn2.x+btn2.width) &&
        mouseY >= btn2.y && mouseY <= (btn2.y+btn2.height)) {
            instructionBuild();
        }
};

menuBuild();

var start =function() {
    fill(0, 255, 242);
rect(0,0,405,405);
fill(227, 218, 227);
ellipse(0, 21, 50, 50);
ellipse(59, 21, 50, 50);
ellipse(134, 21, 50, 50);
ellipse(199, 21, 50, 50);
ellipse(243, 21, 50, 50);
ellipse(23, 21, 50, 50);
ellipse(263, 21, 50, 50);
ellipse(333, 21, 50, 50);
ellipse(223, 21, 50, 50);
ellipse(93, 21, 50, 50);
ellipse(367, 21, 50, 50);
ellipse(163, 21, 50, 50);
ellipse(299, 21, 50, 50);
ellipse(400, 21, 50, 50);
noStroke();
rect(0,0,400,35);

//Ground
fill(150, 78, 0);
rect(-1, 370, 401, 30);
fill(48, 224, 13);
rect(-1, 370, 401, 10);

//Turret
fill(0,0,0);
rect(192, 325, 20, 30);
fill(255,255,255);
rect(171, 345, 65, 25);
};
mouseClicked = function() {
    var built = 0;
    if (mouseX >= btn1.x && mouseX <= (btn1.x+btn1.width) &&
        mouseY >= btn1.y && mouseY <= (btn1.y+btn1.height))     {
         start(); 
    }
    if(mouseX >= btn2.x && mouseX <= (btn2.x+btn2.width) &&
        mouseY >= btn2.y && mouseY <= (btn2.y+btn2.height)) {
            instructionBuild();
            built=1;
        }
     if(built===0 && mouseClicked) {
         menuBuild();
     }
};

