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
    inventory: [],
    inventorySize: 5,
    gold: 1111,
	locationX: 30,
    locationY: 30
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
    name: 'Troll',
    level: 1,
    xp: 10,
    hp: 15,
    baseHp: 15,
    strength: 3,
    defence: 1,
    damage: 0,
    locationX: 0,
    locationY: 0
}   

var nextLvl = 10;

function generateEnemyLocationX() {
    enemy.locationX = Math.floor(Math.random() * 10 * 15);
    return enemy.locationX; 
}

function generateEnemyLocationY() {
    enemy.locationY = Math.floor(Math.random() * 10 * 15);
    return enemy.locationY; 
}

function generateEnemyLocation() {
    generateEnemyLocationX();
    generateEnemyLocationY();
}

//Generate enemy location
generateEnemyLocation();

function init() {
    playerStats();
    playerStatsRemove();
    messagePlayerLocation();
    messageEnemyLocation();
}

function messagePlayerLocation() {
    var messagePlayerLocation = document.getElementById("messagePlayerLocation");
    messagePlayerLocation.innerHTML = ("Player Location: " + player.locationX + "|" + player.locationY);
}

function messageEnemyLocation() {
    var messageEnemyLocation = document.getElementById("messageEnemyLocation");
    messageEnemyLocation.innerHTML = ("Enemy Location: " + enemy.locationX + "|" + enemy.locationY); 
}

function move(e){
	if (e.keyCode === 40) {
		player.locationY++;
        drawMap();
        collision();
	} else if (e.keyCode ===38) {
		player.locationY--;	
        drawMap();
        collision();
	} else if (e.keyCode === 37) {
		player.locationX--;
        drawMap();
        collision();
	} else if (e.keyCode === 39) {
		player.locationX++;
        drawMap();
        collision(); 
	}
}

function collision() {
	messagePlayerLocation();
    
    if((player.locationX - 17) === enemy.locationX || (player.locationY - 17) === enemy.locationY) {
        document.getElementById("submitButton").style.visibility = "visible";
        fight();
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
    if((player.baseHp > 0) || (enemy.baseHp > 0)){                              
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
    generateEnemyLocation();
    drawMap();
    enemy.baseHp = enemy.hp;
    enemyStatsRemove();
    messageEnemyLocation();
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

