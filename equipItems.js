//TO DO
//Create a class for different type of item and check the class not id

Item.prototype.equip = function() {
    itemTest.name = this.name;
    itemTest.image = this.image;
    itemTest.id = this.id;
    itemTest.defence = this.defence;
    itemTest.value = this.value;
    //alert("Dude what's happening??");
    //playerWearables.mainHand = this.name;
    //playerWearables.secondaryHand = this.id;
}

var itemTest = {
    id: '',
    name: '',
    image: '',
    defence: 0,
    value: 0
}

function checkItem() {
    console.log("ITEM SELECTED: " + itemTest.id);
    if(itemTest.id == 'leatherArmor') {
        playerWearables.chest = itemTest.id;
        var slot = document.getElementById("playerWearables-chest").src = "images/defence_letherArmor.png";
        var inventorySlot = document.getElementById(itemTest.id).src = "images/emptySlots/emptySlots-invetory.png";
        //debugger;
        var eee = document.getElementById(itemTest.id);
        console.log("1");
        //removeEventListener must reference to the function object that was previously attached (in this case removeItem)
        eee.removeEventListener("click", removeItem);
        console.log("2");
    } else if(itemTest.id == 'shortSword') {
        playerWearables.mainHand = itemTest.id;
        var slot = document.getElementById("playerWearables-mainHand").src = "images/attack_shortSword.png";
    }
}

function removeItem() {
    itemTest.id = this.id;
    checkItem();
}

function equipItem(className, event) {
    var itemArray = document.getElementsByClassName(className);
    
    for(var i = 0; i < itemArray.length; i++) {
        var ids = itemArray[i].getAttribute("id");
        
        console.log("Equip Item: " + ids);
        itemArray[i].addEventListener(event, removeItem);
    }
}