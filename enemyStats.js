function enemyStats() {
    enemyName();
    enemyLevel();
    enemyXp();
    enemyHp();
    enemyBaseHp();
    enemyStrength();
    enemyDefence();
}

function enemyName() {
    var enemyName = document.getElementById("enemyName").innerHTML = enemy.name;
}

function enemyLevel() {
    var enemyLevel = document.getElementById("enemyLevel").innerHTML = enemy.level;
}

function enemyXp() {
    var enemyXp = document.getElementById("enemyXp").innerHTML = enemy.xp;
}

function enemyHp() {
    var enemyHp = document.getElementById("enemyHp").innerHTML = enemy.hp;
}

function enemyBaseHp() {
    var playserBaseHp = document.getElementById("enemyBaseHp").innerHTML = enemy.baseHp;
}

function enemyStrength() {
    var enemyStrength = document.getElementById("enemyStrength").innerHTML = enemy.strength;
}

function enemyDefence() {
    var enemyDefence = document.getElementById("enemyDefence").innerHTML = enemy.defence;
}

//Remove enemy stats
function enemyStatsRemove() {
    document.getElementById("enemyName").innerHTML = "Enemy";
    document.getElementById("enemyLevel").innerHTML = "";
    document.getElementById("enemyXp").innerHTML = "";
    document.getElementById("enemyHp").innerHTML = "";
    document.getElementById("enemyBaseHp").innerHTML = "";
    document.getElementById("enemyStrength").innerHTML = "";
    document.getElementById("enemyDefence").innerHTML = "";
}