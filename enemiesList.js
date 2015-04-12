var enemyTroll = {
        //className: '',;
        id: 'enemyTroll',
        name: 'Troll',
        image: function() {
            var image = new Image();
            image.src = 'images/map/troll_2.gif';
            return image;
        },
        level: 1,
        xp: 10,
        hp: 15,
        baseHp: 15,
        strength: 3,
        defence: 1,
        damage: 0,
        attack: false,
        locationXY: function() {
            var enemyLocationXY = [];

            var locationX = Math.floor(Math.random() * 11) * 32;
            var locationY = Math.floor(Math.random() * 11) * 32;

            while(obsticklesBlockedMove(locationX, locationY) == true) {
                locationX = Math.floor(Math.random() * 11) * 32;
                locationY = Math.floor(Math.random() * 11) * 32;
            }
            
            enemyLocationXY = [locationX, locationY]
            return enemyLocationXY;
        }
};

var enemyRedDragon = {
    //className: '',;
    id: 'enemyRedDragon',
    name: 'Red Dragon',
    image: function() {
        var image = new Image();
        image.src = "images/map/enemyRedDragon_orgiginal.gif";
        return image;
    },
    level: 1,
    xp: 50,
    hp: 33,
    baseHp: 25,
    strength: 2,
    defence: 99,
    damage: 0,
    attack: false,
    locationXY: function() {
            var enemyLocationXY = [];

            var locationX = Math.floor(Math.random() * 11) * 32;
            var locationY = Math.floor(Math.random() * 11) * 32;

            while(obsticklesBlockedMove(locationX, locationY) == true) {
                locationX = Math.floor(Math.random() * 11) * 32;
                locationY = Math.floor(Math.random() * 11) * 32;
            }
            
            enemyLocationXY = [locationX, locationY]
            return enemyLocationXY;
        }
}

