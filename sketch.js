





 var dog,dogImage,happy,database,FoodStock,FoodS
var FoodS=20
function preload()
{


}

function setup() {
  createCanvas(500, 500);
  
  dog=createSprite(200,300,20,50)
  dog.scale=0.2
  dogImage=loadImage("images/dogImg.png")
  dogImage1=loadImage("images/dogImg1.png")

  milk=createSprite(190,100,20,50)
  milk.scale=0.05
  milkImage=loadImage("images/Milk1.png")

  dogHouseImage=loadImage("images/dogHouse.png")

  database= firebase.database()
  FoodStock=database.ref('Food')
  FoodStock.on("value",stock)
 

}


function draw() {  
background(dogHouseImage)

  drawSprites();
  

if(keyWentDown(UP_ARROW)){
  
  dog.addImage("dog",dogImage1)
  
  if(FoodS<0){
    FoodS=0
  }else{
    FoodS=FoodS-1
  }
  writeStock(FoodS)

  milk.addImage("white",milkImage)
  
  }else{
    
    dog.addImage("dog",dogImage)
  }
  textSize(17)
  fill('blue')
  text("FEED CHEESECAKE BY CLICKING UP_ARROW",50,40)
textSize(20)
  fill('black')
  text("MILK  :  "  +FoodS,200,100)

 
  
}




function stock(data){

FoodS=data.val()
}
function writeStock(x){

  database.ref('/').update({
    Food:x
  })

  }
