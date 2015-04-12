var enemiesArray = [];
var ENEMIES_COUNT_TROLL = 2;
var ENEMIES_COUNT_RED_DRAGON = 1;
var ENEMIES_COUNT = ENEMIES_COUNT_TROLL + ENEMIES_COUNT_RED_DRAGON;


//Populate enemiesArray list
for(var i = 0; i < ENEMIES_COUNT_TROLL; i++) {
    enemiesArray.push({
        "id": enemyTroll.id,
        "name": enemyTroll.name,
        "image": enemyTroll.image(),
        "level": enemyTroll.level,
        "xp": enemyTroll.xp,
        "hp": enemyTroll.hp,
        "baseHp": enemyTroll.baseHp,
        "strength": enemyTroll.strength,
        "defence": enemyTroll.defence,
        "damage": enemyTroll.damage,
        "attack": enemyTroll.attack,
        "locationXY": enemyTroll.locationXY()
    })
}

for(var i = 0; i < ENEMIES_COUNT_RED_DRAGON; i++) {
    enemiesArray.push({
        "id": enemyRedDragon.id,
        "name": enemyRedDragon.name,
        "image": enemyRedDragon.image(),
        "level": enemyRedDragon.level,
        "xp": enemyRedDragon.xp,
        "hp": enemyRedDragon.hp,
        "baseHp": enemyRedDragon.baseHp,
        "strength": enemyRedDragon.strength,
        "defence": enemyRedDragon.defence,
        "damage": enemyRedDragon.damage,
        "attack": enemyTroll.attack,
        "locationXY": enemyRedDragon.locationXY()
    })
}

