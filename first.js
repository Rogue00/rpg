obstaclesArrayCreation();

function obsticklesBlockedMove(locationX, locationY) {
     for(var i = 0; i < obstaclesArray.length; i++) {
            if(
                locationX == (obstaclesArray[i][0])
                && locationY == (obstaclesArray[i][1])
            ) {
                return true;
                break;
            }
    }
    return false;
} 