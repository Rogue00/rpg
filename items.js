function Item(name, image) {
    this.name = name;
    this.image = image;
}

Item.prototype.pickItem = function() {
    pickedItem.name = this.name;
    pickedItem.image = this.image;
    inventoryFull = false; 
    
    if(typeof(player.inventory[player.inventorySize - 1]) != 'undefined') {
            inventoryFull = true;
    }
    
     if(inventoryFull == true && pickedItem.name != "Gold") {
        console.log("Inventory is full.");
    }
    
    for(var i = 0; i <= player.inventorySize - 1; i++){
        if(typeof(player.inventory[i]) == 'undefined') {
            console.log("Inventry slot " + i + " is empty. Adding an item.");
            if(pickedItem.name != "Gold"){
                player.inventory[i] = pickedItem.name;
                console.log(pickedItem.name + " was added to the inventory.");
                break;
            } else {
                player.gold = this.gold + player.gold;
                console.log(pickedItem.name + " was added.");
                break;
            }
        }
        //to find item in the inventor
        //var res = playerInventory.indexOf("Short Sword");
    }
}

var pickedItem = {
    name: '',
    image: ''
}

function attackItem(name, image, value, className, strengthBoost) {
    Item.call(this, name, image);
    this.value = value;
    this.className = className;
    this.strengthBoost = strengthBoost;
}

function defenceItem(name, image, defence, className, defenceBoost) {
    Item.call(this, name, image);
    this.defence = defence;
    this.className = className;
    this.defenceBoost = defenceBoost;
}

function goldItem(name, image, value, className) {
    Item.call(this, name, image);
    this.value = value;
    this.className = className;
}

attackItem.prototype = new Item();
defenceItem.prototype = new Item();
goldItem.prototype = new Item();

//to know form where object was constructed. Oterwise it will say Item();
attackItem.prototype.constructor = attackItem;
defenceItem.prototype .constructor = defenceItem;
goldItem.prototype.constructor = goldItem;

var shortSword = new attackItem(shortSword.id, shortSword.image, shortSword.value, shortSword.className, shortSword.strengthBoost);
var letherArmor = new defenceItem(leatherArmor.id, leatherArmor.image, leatherArmor.defence, leatherArmor.className, leatherArmor.defenceBoost);
var gold = new goldItem(gold.id, gold.image, gold.value, gold.className); 

letherArmor.pickItem();
shortSword.pickItem();
letherArmor.pickItem();
gold.pickItem();