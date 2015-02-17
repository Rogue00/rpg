function spellLaunch() {
    fireBallSpell();
    lifeDrainSpell();
    holyHealSpell();
}

function Spell(name, damage, heal){
    this.name = name;
    this.damage = damage;
    this.heal = heal;
}

var spells = {
    name: '',
    damage: 0,
    heal: 0
}

function fireBallSpell() {
    var fireBall = new Spell('Fire Ball', 5, 0);
    
    document.getElementById("fireBall").addEventListener("click", fire);
   
    function fire() {
        spells.name = fireBall.name;
        spells.damage = fireBall.damage;
        spells.heal = fireBall.heal;
        console.log(spells.name + " is coming!!!");
        spellAttack();
    }
}

function lifeDrainSpell() {
    var lifeDrain = new Spell('Life Drain', 2, 0);
    
    document.getElementById("lifeDrain").addEventListener("click", fire);
   
    function fire() { 
        spells.name = lifeDrain.name;
        spells.damage = lifeDrain.damage;
        spells.heal = lifeDrain.heal;
        console.log(spells.name + " is coming!!!");
        spellAttack();
    }
}

function holyHealSpell() {
    var holyHeal = new Spell('Holy Heal', 0, 5);
    
    document.getElementById("holyHeal").addEventListener("click", fire);
   
    function fire() { 
        spells.name = holyHeal.name;
        spells.damage = holyHeal.damage;
        spells.heal = holyHeal.heal
        console.log(spells.name + " is coming!!!");
        spellAttack();
    }
}