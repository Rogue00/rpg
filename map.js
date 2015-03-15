function drawMap() {
    var canvas = document.getElementById("canvasMap");
    var context = canvas.getContext('2d');

    var mapArray = [
        [0,0,1,1,0,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,0,1,1,0,0],
        [0,0,0,0,1,1,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ];
    
    var grass = new Image();
    var sand = new Image();
    var playerImage = new Image();
    var trollImage = new Image();
    
    grass.src = "images/map/grass.gif";
    sand.src = "images/map/sand.gif";
    playerImage.src = "images/map/player.png";
    trollImage.src = "images/map/troll_2.gif"

    var posX = 0;
    var posY = 0;

    grass.onload = function() {
         for(var i = 0; i < mapArray.length; i++) {
            for(var j = 0; j < mapArray[i].length; j++) {
                if(mapArray[i][j] == 0) {
                    context.drawImage(grass, posX, posY, 32, 32);
                }
                if(mapArray[i][j] == 1) {
                    context.drawImage(sand, posX, posY, 32, 32);
                }
                posX +=32;
            }

            posX = 0;
            posY += 32;
        }
    }
    
    playerImage.onload = function playerDraw() {
        context.drawImage(playerImage, player.locationX, player.locationY, 32, 32);
        console.log("Player Location X: " + player.locationX);
        console.log("Player Location Y: " + player.locationY);
    }
    
    trollImage.onload = function trollDraw() {
        context.drawImage(trollImage, enemy.locationX, enemy.locationY, 32, 32);
        console.log("Enemy Location X: " + enemy.locationX);
        console.log("Enemy Location Y: " + enemy.locationY);
    }
}
