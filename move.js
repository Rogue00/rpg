//--=== TO DO ===--
//4. Better attack formula;
//5. Better defence formula;
//6. Save player detals in database;
//8. Implement spell reuse timer and changing images (v0.1 two different images: a)usable; b) not usable );
//9. Rewrite Enemy Object to Constructors;
//Generate random damage for each attck
//Implement who will attack first (sprite with higher speed will attack first)
//Make sure that enemy doesn't appear in the same location as player
//Implement random item location
//Implement enemy drops
//Implement images for enemies
//Implement images for drops
//Spells using Mana
//Clean move.js
//Swap wearable item
//Implement player wears
//Use items from Invetory
//Equipt item from inventiry


//--=== Done ===--
//1. 08/02/2015 - Fixed enemy random location function => random location could only be generated once;
//2. 10/02/2015 - Implemented moving with keyboard events;
//3. 14/02/2015 - RPG project moved to GitHub (https://github.com/github2014/rpg);
//4. 14/02/2015 - Damage is shown in the page;
//5. 14/02/2015 - Implemented turn based attacks;
//6. 14/02/0215 - Implemented spells (input field);
//7. 16/02/2015 - Implemented images for spell and events by clicking on them;
//8. 17/02/2015 - Implemented Spell.prototype (all spell instances will inherit from same prototype)
//9. 17/02/2015 - Implemented one function to get all spell ids 
//10. 21/02/2015 - Inventory created + adding items to inventory
//11. 21/02/2015 - Items created
//12. 23/02/2015 - Implemented check if inventory is full
//13. 24/02/2015 - Show invetory in the page
//14. 24/02/2015 - Implemented images for items
//15. 01/03/2015 - index.html shows Invetory and Items
//16. 11/03/2015 - show icon for empty slots

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
	locationX: 2,
    locationY: -1
};

var playerWearables = {
    head: '',
    mainHand: '',
    secondaryHand: '',
    chest: '',
    legs: '',
    feet: ''
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
	}
}

function collision() {
	messagePlayerLocation();
    
    if(player.locationX === enemy.locationX && player.locationY === enemy.locationY) {
        document.getElementById("submitButton").style.visibility = "visible";
        fight();
    }
}

function fight() {   
    player.damage = Math.floor(Math.random() * player.strength +1);
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

