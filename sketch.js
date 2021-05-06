var canvas, tom, jerry;
var bg;


function preload() {
    //load the images here
    
    bg = loadImage("images/garden.png")
    
    T1 = loadAnimation("images/cat1.png");
    T2 = loadAnimation("images/cat2.png", "images/cat3.png");
    T3 = loadAnimation("images/cat4.png");

    J1 = loadAnimation("images/mouse1.png");
    J2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    J3 = loadAnimation("images/mouse4.png");
       
}

function setup(){
    createCanvas(1200,800);
    //create tom and jerry sprites here
    tom= createSprite(770,600,10,10);
    tom.addAnimation("TOMSLEEPING",T1);
    tom.scale=0.2;

    jerry= createSprite(200,600,101);
    jerry.addAnimation("jerryStanding",J1);
    jerry.scale=0.15;
        
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x = jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("tomlastImage", T3);
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("tomlastImage");
        jerry.addAnimation("jerrylastImage", J3);
        jerry.scale = 0.15;
        jerry.changeAnimation("jerrylastImage");

    }
    

    drawSprites();
}


function keyPressed(){

  
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("tomRunning", T2);
        tom.changeAnimation("tomRunning");

        jerry.addAnimation("jerryTeasing", J2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}
