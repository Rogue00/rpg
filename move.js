//--=== TO DO ===--
//1. Show damage on the page;
//2. Turn base attack;
//3. Implement spells (input field);
//4. Better attack formula;
//5. Better defence formula;
//6. Save player detals in database;
//7. Implement images for spell and events by clicing on them;
//8. Implement spell reuse timer and changing images (v0.1 two different images: a)usable; b) not usable );
//9. Move project to gitHub
//10. Rewrite Enemy Object

//--=== Done ===--
//1. 08/02/2015 - Fixed enemy random location function => random location could only be generated once;
//2. 10/02/2015 - Implemented moving with keyboard events
;

var player = {
    name: 'JavaTar',
    level: 1,
    xp: 0,
	hp: 20,
	baseHp: 20,
    strength: 5,
    defence: 3,
	locationX: 2,
    locationY: -1
};

var enemy = {
    name: 'Troll',
    level: 1,
    xp: 10,
    hp: 15,
    baseHp: 15,
    strength: 3,
    defence: 1,
    locationX: 0,
    locationY: 0
}   

var nextLvl = 10;

function generateEnemyLocationX() {
    enemy.locationX = Math.floor(Math.random() * 10 - 5);
    return enemy.locationX; 
}

function generateEnemyLocationY() {
    enemy.locationY = Math.floor(Math.random() * 10 - 5);
    return enemy.locationY; 
}

function generateEnemyLocation() {
    generateEnemyLocationX();
    generateEnemyLocationY();
}

//Generate enemy location
generateEnemyLocation();

function init() {
    //enemyStats();
    playerStats();
    messagePlayerLocation();
    messageEnemyLocation();
    
    //Handle Submit button input
    var submitButton = document.getElementById("submitButton");
    submitButton.onclick = handleSubmitButton;
}

//Handle Submit button input
function handleSubmitButton() {
    var userInput = document.getElementById("userInput");
    var userInput2 = userInput.value;
    
    userInput.value = "";
    //Pass user input to a function
    //move(userInput2);
}

function messagePlayerLocation () {
    var messagePlayerLocation = document.getElementById("messagePlayerLocation");
    messagePlayerLocation.innerHTML = ("Player Location: " + player.locationX + "|" + player.locationY);
}

function messageEnemyLocation () {
    var messageEnemyLocation = document.getElementById("messageEnemyLocation");
    messageEnemyLocation.innerHTML = ("Enemy Location: " + enemy.locationX + "|" + enemy.locationY); 
}

function move(e){
	if (e.keyCode === 38) {
		player.locationY++;
        collision();
        
	} else if (e.keyCode ===40) {
		player.locationY--;	
        collision();
        
	} else if (e.keyCode === 37) {
		player.locationX--;
        collision();
        
	} else if (e.keyCode === 39) {
		player.locationX++;
        collision();
        
	} else {
        alert("You trying to reach another dimention. Please stay in this Universe.");
	}
}

function collision() {
	messagePlayerLocation();
    
    if(player.locationX === enemy.locationX && player.locationY === enemy.locationY) {
        fight();
    }
}

function fight() {   
    var playerDamage = Math.floor(Math.random() * player.strength +1),
        enemyDamage = Math.floor(Math.random() * enemy.strength +1);
    
    console.log("Player damage (fight): " + playerDamage);
    console.log("Enemy damage: (fight): " + enemyDamage);
    
    
    while((player.baseHp > 0) || (enemy.baseHp > 0)) {
        player.baseHp = player.baseHp - enemyDamage;
        enemy.baseHp = enemy.baseHp - playerDamage;
        
        console.log("Player HP: " + player.baseHp);
        console.log("Enemy HP: " + enemy.baseHp);
        
        if(player.baseHp <= 0) {
            enemyStats();
            playerStats();
            alert(player.name + "Your quest is over!");
            break;
        } else if(enemy.baseHp <= 0) {
            enemyStats();
            playerStats();
            enemyDead();

            console.log("Player XP (fight): " + player.xp);
            console.log("Enemy baseHp (fight): " + enemy.baseHp);
            break;
        } 
    } 
}

function levelUp() {
    if(player.xp >= nextLvl) {
        player.level++;
        player.baseHp = player.hp;
        
        nextLvl = player.level * nextLvl;
        console.log("Next level (levelUp): " + nextLvl);
        playerStats();
        alert(player.name + " you reached level " + player.level);
    } else {
        init();
    }
}

function enemyDead() {
    alert(enemy.name + " is killed.");
    player.xp = player.xp + enemy.xp;
    generateEnemyLocation();
    enemy.baseHp = enemy.hp;
    enemyStatsRemove();
    messageEnemyLocation();
    levelUp(); 
}





