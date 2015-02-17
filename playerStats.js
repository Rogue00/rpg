function playerStats() {
    playerName();
    playerLevel();
    playerXp();
    playerHp();
    playerBaseHp();
    playerStrength();
    playerDefence();
    playerDamage();
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
    var playerStrength = document.getElementById("playerStrength").innerHTML = player.strength;
}

function playerDefence() {
    var playerDefence = document.getElementById("playerDefence").innerHTML = player.defence;
}

 function playerDamage() {
        var playerDamage = document.getElementById("playerDamage").innerHTML = player.damage + " / " + player.magicDamage;
 }

//Remove player stats
function playerStatsRemove() {
    document.getElementById("playerDamage").innerHTML = "";
}