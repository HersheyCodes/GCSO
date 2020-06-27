
var car,wall
var speed,weight
var deformation

//istouching( car,wall)




function setup() {
  deformation=0
  createCanvas(1600,400);
  
  speed=random(55,90)
  weight=random(400,1500)
  wall=createSprite(1400,200,60,height/2)
  car=createSprite(50,200,50,50)
  
  car.shapeColor="purple"
 
  car.velocityX = 10
  deformation=Math.round((0.5*weight*speed*speed)/22500)
}

function draw() {
  
  background(255,255,255);  
  drawSprites();
 
  textSize(20)
  text("deformation = " + deformation,50,50)
  if(isTouching (car,wall)){
    car.velocityX=0
    

    if(deformation>180){
      car.shapeColor= "yellow"
      

    }
    else if(deformation>80&&deformaton<180){
      car.shapeColor= "green"

    }
    else if(deformation<80){
      car.shapeColor= "red"

    }

  }
}