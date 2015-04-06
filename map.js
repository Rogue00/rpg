var obstaclesArray = [];
var tiles =[];

//Create the canvas
var canvas = document.getElementById("canvasMap");
var context = canvas.getContext('2d');
var mapWidth = canvas.width;
var mapHeight = canvas.height;

var mapArray = [
    [2,0,1,1,0,0,0,0,1,1,0],
    [2,0,0,1,1,0,0,0,1,1,0],
    [2,0,0,1,1,0,0,0,1,1,0],
    [2,0,0,0,1,1,0,0,1,1,0],
    [2,0,0,2,1,1,0,0,1,1,0],
    [2,0,0,2,2,0,0,0,1,1,0],
    [2,0,0,0,0,0,0,0,1,1,0],
    [2,0,0,2,2,0,0,0,1,1,0],
    [2,0,0,0,0,0,0,0,1,1,0],
    [2,0,0,0,0,0,0,0,1,1,0],
    [2,2,2,2,2,2,2,2,2,2,2]
];

//Map images
var grassReady = false;
var grassImage = new Image();
grassImage.onload = function () {
    grassReady = true;
};
grassImage.src = "images/map/grass.gif";

var sandReady = false;
var sandImage = new Image();
sandImage.onload = function () {
    sandReady = true;
};
sandImage.src = "images/map/sand.gif";

var rockReady = false;
var rockImage = new Image();
rockImage.onload = function () {
    rockReady = true;
}
rockImage.src = "images/map/rock.gif";

//Player image
var playerReady = false;
var playerImage = new Image();
playerImage.onload = function (){
    playerReady = true;
};
playerImage.src = "images/map/player.png";

//Enemy images
var trollReady = false;
var trollImage = new Image();
trollImage.onload = function () {
    trollReady = true;
}
trollImage.src = "images/map/troll_2.gif";

//scan map and populate obstaclesArray with obstacles coordinates 
function obstaclesArrayCreation() {
    var posX = 0;
    var posY = 0;
    var obstaclesCount = 0;
    
    //console.log("Building Obstickles Array...");
    for(var i = 0; i < mapArray.length; i++) {
        for(var j = 0; j < mapArray[i].length; j++) {
            if(mapArray[i][j] == '2') {
                //console.log("NEW POS X: " + posX);
                //console.log("NEW POS Y: " + posY);
                
                obstaclesCount++;
                
                for(var k = obstaclesCount - 1; k < obstaclesCount; k++) {
                    obstaclesArray[k] = new Array();    
                }

                for(var indexX = obstaclesCount - 1; indexX < obstaclesArray.length; indexX++) {
                    for(var indexY = 0; indexY < 1; indexY++) {
                        obstaclesArray[indexX][indexY] = posX;
                        obstaclesArray[indexX][indexY + 1] = posY;
                    }
                }
            }
            posX +=32;
        }
        posX = 0;
        posY += 32;
    }
}

//Draw everything
var render = function () {
    
    //console.log("MAP IS UPDATED!!!!!!!!!!!!!!!!!!!");
    
    var posX = 0;
    var posY = 0;
    
    if (grassReady && sandReady && rockReady) {
        for(var i = 0; i < mapArray.length; i++) {
            for(var j = 0; j < mapArray[i].length; j++) {
                if(mapArray[i][j] == 0) {
                    context.drawImage(grassImage, posX, posY, 32, 32);
                }
                if(mapArray[i][j] == 1) {
                    context.drawImage(sandImage, posX, posY, 32, 32);
                }
                if(mapArray[i][j] == 2) {
                    context.drawImage(rockImage, posX, posY, 32, 32);
                    //console.log("Rock X: " + posX + " Rock Y: " + posY);
                }
                posX +=32;
            }
            posX = 0;
        posY += 32;
        }
    }

    if(trollReady) {
        context.drawImage(trollImage, enemy.locationX, enemy.locationY, 32, 32);
        //console.log("Enemy Location X: " + enemy.locationX);
        //console.log("Enemy Location Y: " + enemy.locationY);
    }
    if(playerReady) {
        context.drawImage(playerImage, player.locationX, player.locationY, 32, 32);
        //console.log("Player Location X: " + player.locationX);
        //console.log("Player Location Y: " + player.locationY);
    }
}
