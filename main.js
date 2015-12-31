//Creation in Progress-Ammad Hashmi
//v1.0
//
/*Log: 30/12 - BrainStormed Idea-Algorithm Skipped (Sorry Mr. Black lool) - Began Creating Main Menu

*/

//Main Menu
//Some colors shall be same(Main Menu color shall fuse into Game State)
background(0, 255, 242);
var c1xpos = 100;
var c2xpos = 150;
fill(255, 255, 255);
ellipse(c1xpos, 25, 30, 20);
ellipse(c2xpos, 30, 32, 22);
if(c1xpos > 430) {
    c1xpos = -20;
}
for(var i = c1xpos; i < 430; i++) {
    c1xpos = i;
}

var btn1 = { //Start
    x: 125,
    y: 100,
    width: 150,
    height: 50,
    text: "Start"
};
var btn2 = { //Instructions
    x: 125,
    y: 100,
    width: 150,
    height: 50,
    text: "Instructions"
};
var drawButton = function(btn) {
    fill(238, 255, 0);
    rect(btn.x, btn.y, btn.width, btn.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(btn.text, btn.x+52, btn.y+btn.height/4);
};


mouseClicked = function() {
    if (mouseX >= btn1.x && mouseX <= (btn1.x+btn1.width) &&
        mouseY >= btn1.y && mouseY <= (btn1.y+btn1.height))     {
        println("Still pretty useless");    
    }
};


drawButton(btn1);


