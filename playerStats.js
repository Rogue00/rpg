function playerStats() {
    playerName();
    playerLevel();
    playerXp();
    playerHp();
    playerBaseHp();
    playerStrength();
    playerDefence();
    playerDamage();
    playerGold();
}


function playerName() {
    var playerName = document.getElementById("playerName").innerHTML = player.name;
}

function playerLevel() {
    var playerLevel = document.getElementById("playerLevel").innerHTML = player.level;
}

function playerXp() {
    var playerXp = document.getElementById("playerXp").innerHTML = player.xp + " / " + player.nextLevel;
}

function playerHp() {
    var playerHp = document.getElementById("playerHp").innerHTML = player.hp;
}

function playerBaseHp() {
    var playserBaseHp = document.getElementById("playerBaseHp").innerHTML = player.baseHp;
}

function playerStrength() {
    var playerStrength = document.getElementById("playerStrength").innerHTML = player.strength + ' + ' + playerWearables.strengthBoost;
}

function playerDefence() {
    var playerDefence = document.getElementById("playerDefence").innerHTML = player.defence + ' + ' + playerWearables.defenceBoost;
}

 function playerDamage() {
        var playerDamage = document.getElementById("playerDamage").innerHTML = player.damage + " / " + player.magicDamage;
 }

function playerGold() {
    var playerGold = document.getElementById("top-stats-gold").innerHTML = player.gold;
}

//Remove player stats
function playerStatsRemove() {
    document.getElementById("playerDamage").innerHTML = "";
}