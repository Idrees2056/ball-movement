var hypnoticball, database;
var position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    hypnoticball = createSprite(250,250,10,10);
    hypnoticball.shapeColor = "red";


    var hypnoticballPosition=database.ref('ball/position')// refer to the database
    hypnoticballPosition.on("value",readposition, showerror) // on is used to read the value or listen the value
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);//(251,250)
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);//(250,249)
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
database.ref('ball/position').set({// it will refer the database and "Set" will update the x and y
    'x': position.x+x,
    'y':position.y+y,
})

   
}

function readposition(data){
position=data.val();
hypnoticball.x=position.x// position of ball in database will be allocated to hypnotic ball
hypnoticball.y=position.y
}

function showerror(){
    console.log("error in connecting the databse")
}






