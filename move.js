var player = {
    name: 'JavaTar',
    level: 1,
    xp: 0,
    nextLevel: 10,
	hp: 20,
	baseHp: 20,
    strength: 5,
    intelligence: 3,
    defence: 3,
    damage: 0,
    magicDamage: 0,
    speed: 100,
    inventory: [],
    inventorySize: 5,
    gold: 1111,
	locationX: 128,
    locationY: 64
};

var playerWearables = {
    head: '',
    mainHand: '',
    secondaryHand: '',
    chest: '',
    legs: '',
    feet: '',
    
	hpBoost: 0,
	baseHpBoost: 0,
    strengthBoost: 0,
    intelligenceBoost: 0,
    defenceBoost: 0,
    damageBoost: 0,
    magicDamageBoost: 0,
}

var enemy = {
    name: '',
    level: 0,
    xp: 0,
    hp: 0,
    baseHp: 0,
    strength: 0,
    defence: 0,
    damage: 0,
    locationX: 0,
    locationY: 0,
    arrayPosition: 0
}

var nextLvl = 10;
var SPRITE_SIZE = 31;   

function init() {
    playerStats();
    playerStatsRemove();
    messagePlayerLocation();
}

function messagePlayerLocation() {
    var messagePlayerLocation = document.getElementById("messagePlayerLocation");
    messagePlayerLocation.innerHTML = ("Player Location: " + player.locationX + "|" + player.locationY);
}

function messageEnemyLocation() {
    var messageEnemyLocation = document.getElementById("messageEnemyLocation");
    messageEnemyLocation.innerHTML = ("Enemy Location: " + enemy.locationX + "|" + enemy.locationY); 
}


//Handle keyboard cntrols
//If a key code is in the object, the user is currently pressing that key
var keysDown = {};

addEventListener("keydown", function(e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
}, false);


//Update game objects
var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		player.locationY -= player.speed * modifier;
        if(blockedMove() == true || collision() == true) {
            player.locationY += player.speed * modifier;
            render();
        } else {
            render();
        }
	}
	if (40 in keysDown) { // Player holding down
		player.locationY += player.speed * modifier;
        if(blockedMove() == true || collision() == true) {
            player.locationY -= player.speed * modifier;
            render();
        } else {
            render();
        }
	}
	if (37 in keysDown) { // Player holding left
		player.locationX -= player.speed * modifier;
        if(blockedMove() == true || collision() == true) {
            player.locationX += player.speed * modifier;
            render();
        } else {
            render();
        }    
	}
	if (39 in keysDown) { // Player holding right
		player.locationX += player.speed * modifier;
        if(blockedMove() == true || collision() == true) {
            player.locationX -= player.speed * modifier;
            render();
        } else {
            render();
        }  
	}

};

var then = Date.now();

var main = function() {
    var now = Date.now();
    var delta = now - then;
    
    update(delta/1000);
    messagePlayerLocation();
    //console.log("DELTA: " + delta);
    
    then = now;
    requestAnimationFrame(main);
}

function collision() {
    for(var i = 0; i < enemiesArray.length; i++) {
        if(
            player.locationX <= (enemiesArray[i].locationXY[0,0] + 32)
            && enemiesArray[i].locationXY[0,0] <= (player.locationX + 32)
            && player.locationY <= (enemiesArray[i].locationXY[0,1] + 32)
            && enemiesArray[i].locationXY[0,1] <= (player.locationY + 32)
        ) {
            enemiesArray[i].attack = true;
            document.getElementById("submitButton").style.visibility = "visible";
            setEnemy();
            messageEnemyLocation();
            fight();
            return true;
        }  
    }
}

function blockedMove() {
    for(i = 0; i < obstaclesArray.length; i++) {
        for(j = 0; j < obstaclesArray[i].length; j++) {
            if(
                player.locationX <= (obstaclesArray[i][j] + SPRITE_SIZE)
                && obstaclesArray[i][j] <= (player.locationX + SPRITE_SIZE)
                && player.locationY <= (obstaclesArray[i][j+1] + SPRITE_SIZE)
                && obstaclesArray[i][j+1]<= (player.locationY + SPRITE_SIZE)
            ) {
                return true;
            }
        }
    }
}

function setEnemy() {
    for(var i = 0; i < enemiesArray.length; i++) {
        if(enemiesArray[i].attack) {
            enemy.name = enemiesArray[i].name;
            enemy.level = enemiesArray[i].level;
            enemy.xp = enemiesArray[i].xp;
            enemy.hp = enemiesArray[i].hp;
            enemy.baseHp = enemiesArray[i].baseHp;
            enemy.strength = enemiesArray[i].strength;
            enemy.defence = enemiesArray[i].defence;
            enemy.damage = enemiesArray[i].damage;
            enemy.locationX = enemiesArray[i].locationXY[0,0];
            enemy.locationY = enemiesArray[i].locationXY[0,1];
            enemy.arrayPosition = i;
        }
    }
}

function fight() {
    player.damage = Math.floor(Math.random() * (player.strength + playerWearables.strengthBoost) + 1);
    player.magicDamage = Math.floor(Math.random() * 7);
    enemy.damage = Math.floor(Math.random() * enemy.strength +1);
    
    playerStats();
    enemyStats();
    
    //Handle Submit button input
    var submitButton = document.getElementById("submitButton");
    submitButton.onclick = handleSubmitButton;
    
    function handleSubmitButton() {
        var userInput = document.getElementById("userInput");
        var userInput2 = userInput.value;
    
        userInput.value = "";
        //Pass user input to a function
        turn(userInput2);
    }

    function turn(en) {
        if (en === 'a') {
            player.baseHp = player.baseHp - enemy.damage;
            enemy.baseHp = enemy.baseHp - player.damage;
            att();
        } else if (en === 's') {
            player.baseHp = player.baseHp - enemy.damage;
            enemy.baseHp = enemy.baseHp - player.magicDamage;
            att();
        } else {
            console.log("Ivalid attack!");
        }   
    }   
}

function att() {
    if((player.baseHp > 0) || (this.enemy.baseHp > 0)){                              
        playerStats();
        enemyStats();
    
        if(player.baseHp <= 0) {
            enemyStats();
            playerStats();
            document.getElementById("submitButton").style.visibility = "hidden";
            alert(player.name + " your quest is over!");
        } else if(enemy.baseHp <= 0) {
            enemyStats();
            playerStats();
            enemyDead();            
            document.getElementById("submitButton").style.visibility = "hidden";
        }
    } 
}

function levelUp() {
    if(player.xp >= player.nextLevel) {
        player.level++;
        player.baseHp = player.hp;
        player.nextLevel = player.level * player.nextLevel;
        playerStats();
        playerStatsRemove();
        alert(player.name + " you reached level " + player.level);
    } else {
        init();
    }
}

function enemyDead() {
    alert(enemy.name + " is killed.");
    player.xp = player.xp + enemy.xp;
    enemiesArray.splice(enemy.arrayPosition,1);
    render();
    enemyStatsRemove();
    levelUp(); 
}

function spellAttack() {
    var dmg;
    
    if(spells.damage > 0) {
        dmg = player.intelligence + spells.damage;
    } else {
        dmg = 0;
    }
    
    player.baseHp = player.baseHp - enemy.damage + spells.heal;
    enemy.baseHp = enemy.baseHp - dmg;
    
    console.log("NAME: " + spells.name + " DAMAGE: " + spells.damage + " HEAL: " + spells.heal);
    att();
}

