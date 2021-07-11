var box1 = new Box(200,200,40,40,"yellow"); //new ====> constructor()
var box2 = new Box(300,300,30,30,"blue");
var box3 = new Box(100,100,50,50,"purple");
var b4 = new Box(50,50,10,10,"black");
var ball = new Ball(200,200,20);


function setup(){
    createCanvas(400,400);

    
}

function draw(){
background("red")
box1.display();
box2.display();
box3.display();
b4.display();
ball.display();

box1.move();

box1.changeVX(0.05)
}