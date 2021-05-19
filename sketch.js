var bigImg
var cat
var mouse

function preload() {
    //load the images here
    bgImg = loadImage("garden.png")
    catimg1 = loadAnimation("cat1.png")
    mouseimg1 = loadAnimation("mouse1.png")
    catimg2 = loadAnimation("cat2.png","cat3.png")
    mouseimg2 = loadAnimation("mouse2.png", "mouse3.png")

}

function setup(){
    createCanvas(680,400);
    //create cat and mouse sprites here

    background = createSprite(340,200)
    background = addImage("backgroundImg1,backgroungImg1")

    cat = createSprite(500,340,20,100)
    cat = addAnimation ("catimg1,catimg1")

    mouse = createSprite(200,340,10,40)
    mouse = addAnimation("mouseImg1,mouseImg1")

function draw() {

     background(rgb(30,100,220))
    //Write condition here to evalute if cat and mouse collide

    if (cat.x - mouse.x < cat.width / 2 - mouse.width / 2) {
        cat.velocityX = 0;
        cat.addAnimation("catImg4", catImg4);
        cat.changeAnimation("catImg4");
        cat.x = 300;
 
        mouse.addAnimation("mouseImage4", mouseImage4);
        mouse.changeAnimation("mouseImage4");
        cat.bounce(mouse);
     }

    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
  mouse.addAnimation("mouseTeasing",mouseing2)
  mouse.changeAnimation("mouseTeasing")
  mouse.frameDelay = 25;


  }



}
