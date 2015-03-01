function Spell(name, damage, heal) {
    this.name = name;
    this.damage = damage;
    this.heal = heal;
}

Spell.prototype.fire = function() {
     spells.name = this.name;
     spells.damage = this.damage;
     spells.heal = this.heal;
     console.log(spells.name + " is coming!!!");
     spellAttack();
}

var spells = {
    name: '',
    damage: 0,
    heal: 0
}

var fireBall = new Spell('Fire Ball', 5, 0);
var lifeDrain = new Spell('Life Drain', 2, 0);
var holyHeal = new Spell('Holy Heal', 0, 5);

//picks all the ids that belongs to selected class
function getSpell(className, event){
    var spellArray = document.getElementsByClassName(className);
    
    for(var i = 0; i < spellArray.length; i++){
        var ids = window[spellArray[i].getAttribute("id")];
        spellArray[i].addEventListener(event, ids.fire.bind(ids))
    }
}