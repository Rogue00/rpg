function spellLaunch() {
    //fireBallSpell();
    //lifeDrainSpell();
    //holyHealSpell();
}

function Spell(name, damage, heal){
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

var elements = document.getElementsByClassName('boxes');
for(var i=0, l=elements.length; i<l; i++){
 elements[i].style.backgroundColor = "green";
}

//document.getElementById("fireBall").addEventListener("click", fireBall.fire.bind(fireBall));


function getSpell(className, event, fn){
    var spellArray = document.getElementsByClassName(className);
    
    for(var i = 0; i < spellArray.length; i++){
        spellArray[i].addEventListener(event, fn)
        console.log("ASSAS");
    }
}


/*
var ids = [];
function getSpell(){
    //var ids = [];
    
    var spellArray = document.getElementsByClassName("spell");
    
    for(var i = 0; i < spellArray.length; i++){
        //console.log(spellArray[i]);
        //getAttribute() gets atributes value
        ids[i] = spellArray[i].getAttribute("id");
        console.log("ATTRIBUTE ID: " + ids);
        //spellArray[i].addEventListener("click", function(){console.log("dsa" + ids[i])});//ids[2].fire.bind(ids[2]));
        
        /*
        var clicking = spellArray[i].addEventListener("click", function(){
                                                                    console.log("SAY WHAT??!!!?: " + ids[2]);
                                                                })*/
    //}
//}

var fireBall = new Spell('Fire Ball', 5, 0);
var lifeDrain = new Spell('Life Drain', 2, 0);
var holyHeal = new Spell('Holy Heal', 0, 5);

/*
function fireBallSpell() {
    var fireBall = new Spell('Fire Ball', 5, 0);
    //using function.bind 
    document.getElementById("fireBall").addEventListener("click", fireBall.fire.bind(fireBall));
}

function lifeDrainSpell() {
    var lifeDrain = new Spell('Life Drain', 2, 0);
    document.getElementById("lifeDrain").addEventListener("click", lifeDrain.fire.bind(lifeDrain));
}

function holyHealSpell() {
    var holyHeal = new Spell('Holy Heal', 0, 5);
    document.getElementById("holyHeal").addEventListener("click", holyHeal.fire.bind(holyHeal));
}
*/