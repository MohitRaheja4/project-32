const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b15,arrow,slingshot,img,locationn,score,ground,ground2,ground3,ground4;
var gameState="onsling"
function preload(){
 img=loadImage('images/suresh_on_arrow.png');
    
}

function setup(){
    var canvas = createCanvas(1100,400);
    engine = Engine.create();
    world = engine.world;
score=0
   // var arrow_op={restitution:1,
     //   friction:1,
        //density:1
//}
arrow=new Arrow(130,130,90,70)

  slingshot=new SlingShot(arrow.body,{x:138,y:120})
  
platform= new Box(125,330,250,140)
//sydney
b1=new Box(480,398,120,4)
b2=new Box(420,350,4,100)
b3=new Box(540,350,4,100)
//delhi
b4=new Box(650,398,120,4)
b5=new Box(590,350,4,100)
b6=new Box(710,350,4,100)
//rome
b7=new Box(820,398,120,4)
b8=new Box(760,350,4,100)
b9=new Box(880,350,4,100)
//toronto
b10=new Box(990,398,120,4)
b11=new Box(930,350,4,100)
b12=new Box(1050,350,4,100)
    
ground=new Box(550,420,1100,2)
ground2=new Box(550,-20,1100,2)
ground3=new Box(-10,200,2,400)
ground4=new Box(1110,200,2,400)
    
}

function draw(){
background("grey");
fill(60,60,60);
//slingshot.scale=0.3
//image(img,arrow.body.position.x,arrow.body.position.y,20,80);
ground2.display();
ground.display();
ground3.display();
ground4.display();

textFont("broadway")
textSize(28)
text("sydney",430,350)
text("delhi",609,350)
text("rome",782,350)
text("toronto",934,350)
   platform.display();
   //sydney
   fill(0);
  b1.display();
  b2.display();
  b3.display();
  //delhi
  b4.display();
  b5.display();
  b6.display();
  //rome
  b7.display();
  b8.display();
  b9.display();
  //toronto
  b10.display();
  b11.display();
  b12.display();
  slingshot.display();
arrow.display();
    Engine.update(engine);
   var rand=Math.round(random(1,4))
if(keyDown("space"))
{
    switch(rand){
      case 1:locationn="delhi"
      break;
      case 2:locationn="sydney"
      break;
      case 3:locationn="toronto"
      break;
      case 4:locationn="rome"
      break;
      default:break;
    }
    
  gameState="given"
}
if(gameState==="given"||gameState==="launched"||gameState==="incremented"){
  text("suresh wanna go to "+locationn,500,100)
}

if(gameState==="launched"&&locationn==="sydney"&&arrow.body.position.x<540&&arrow.body.position.x>420&&
arrow.body.position.y<450&&arrow.body.position.y<250)
{
score=score+1
gameState="incremented"
}

if(gameState==="launched"&&locationn==="delhi"&&arrow.body.position.x<710&&arrow.body.position.x>590&&
arrow.body.position.y<450&&arrow.body.position.y<250)
{
score=score+1
gameState="incremented"
}

if(gameState==="launched"&&locationn==="sydney"&&arrow.body.position.x<880&&arrow.body.position.x>760&&
arrow.body.position.y<450&&arrow.body.position.y<250)
{
score=score+1
gameState="incremented"
}

if(gameState==="launched"&&locationn==="sydney"&&arrow.body.position.x<1050&&arrow.body.position.x>930&&
arrow.body.position.y<450&&arrow.body.position.y<250)
{
score=score+1
gameState="incremented"
}
text("score-"+score,10,19)

textSize(14)
textFont("arial")
text("the guy who is sitiing on the arrow is suresh, the main character of the game or you may "+
"say only character, on the press of space key you will get a ",120,10)
text ("text in which the name of city will be written where "+
"suresh wants to go"+" and you have to shoot using the the arrow to the city where he wants to go if ", 120,25)
text(" you will be correct"+
" you will get one point and once you shoot the arrow on the press of space key arrow will be again attached to "+
"the bow. HAPPY PLAYING!! ",120,40)


}   

function mouseDragged(){
     if (gameState==="given"){
      Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
     }
 }
 
 
 function mouseReleased(){
  if (gameState==="given"){
     slingshot.fly();
     gameState = "launched";
  }
 }
 
 function keyPressed(){
     if(keyCode === 32 && gameState==="launched"||gameState==="incremented" ){
         arrow.trajectory=[]
         Matter.Body.setPosition(arrow.body,{x:130,y:130})
         slingshot.attach(arrow.body);
     }
 }