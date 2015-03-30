var itemTest = {
    id: '',
    name: '',
    image: ''
}

function checkItem() {
    console.log("ITEM SELECTED: " + itemTest.id);
    var playerInventory = player.inventory;
    
    if(itemTest.className == 'inventoryItem chest') {
        var itemToRemoveIndex = playerInventory.indexOf(itemTest.id);
        playerInventory.splice(itemToRemoveIndex, 1);
        
        playerWearables.chest = itemTest.id;
        //add a boost to stats
        playerWearables.defenceBoost = window[itemTest.id].defenceBoost;
        console.log("DEFENCE BOOST: " + window[itemTest.id].defenceBoost);
        playerStats();
        playerStatsRemove();
        
        var slot = document.getElementById("playerWearables-chest").src = itemTest.image;
        var inventorySlot = document.getElementById(itemTest.id).src = "images/emptySlots/emptySlots-invetory.png";
        var invetoryStopEvent = document.getElementById(itemTest.id);
        
        //removeEventListener must reference to the function against which object that was previously attached (in this case removeItem)
        invetoryStopEvent.removeEventListener("click", removeItem);
    } else if(itemTest.className == 'inventoryItem mainHand') {
        var itemToRemoveIndex = playerInventory.indexOf(itemTest.id);
        playerInventory.splice(itemToRemoveIndex, 1);
        
        playerWearables.mainHand = itemTest.id;
        playerWearables.strengthBoost = window[itemTest.id].strengthBoost;
        console.log("STRENGTH BOOST: " + window[itemTest.id].strengthBoost);
        playerStats();
        playerStatsRemove();
        
        var slot = document.getElementById("playerWearables-mainHand").src = itemTest.image;
        var inventorySlot = document.getElementById(itemTest.id).src = "images/emptySlots/emptySlots-invetory.png";
        var invetoryStopEvent = document.getElementById(itemTest.id);
        
        invetoryStopEvent.removeEventListener("click", removeItem);
    }
}

function removeItem() {
    itemTest.className = this.className;
    itemTest.id = this.id;
    itemTest.image = this.src;
    checkItem();
}

function equipItem(className, event) {
    var itemArray = document.getElementsByClassName(className);
    
    for(var i = 0; i < itemArray.length; i++) {
        var ids = itemArray[i].getAttribute("id");
        
        console.log("Equip Item: " + ids);
        itemArray[i].addEventListener(event, removeItem);
    }
    //removeWearable("playerWearables", "click");
}

function removeWearable(className, event) {
    var itemArrayRemove = document.getElementsByClassName(className);
    
    for(var i = 0; i < itemArrayRemove.length; i++) {
        var ids = itemArrayRemove[i].getAttribute("id");
        console.log("Removed Wearable: " + ids);
        itemArrayRemove[i].addEventListener(event, removeWearableFnc);
    }
}

function removeWearableFnc() {
    console.log("Wearable removed!!");
    itemTest.className = this.className;
    itemTest.id = this.id;
    itemTest.image = this.src;
    checkWearable();
}

function checkWearable() {
    console.log("Checking Wearable: " + itemTest.id);
    var playerInventory = player.inventory;
    
    if(itemTest.className == 'playerWearables chest' && playerWearables.chest != '') {
        playerInventory.splice(0, 0, playerWearables.chest);
        
        playerWearables.chest = '';
        playerWearables.defenceBoost = 0;
        console.log("DEFENCE BOOST: " + playerWearables.defenceBoost);
        playerStats();
        playerStatsRemove();
        
        var slot = document.getElementById("playerWearables-chest").src = "images/emptySlots/emptySlots-chest.png";
        deleteInventory(player.inventory, player.inventorySize);
        drawInventory(player.inventory, player.inventorySize);
        equipItem("inventoryItem", "click");
    } else if(itemTest.className == 'playerWearables mainHand' && playerWearables.mainHand != '') {
        playerInventory.splice(0, 0, playerWearables.mainHand);
        
        playerWearables.mainHand = '';
        playerWearables.strengthBoost = 0;
        console.log("STRENGTH BOOST: " +  playerWearables.strengthBoost);
        playerStats();
        playerStatsRemove();
        
        var slot = document.getElementById("playerWearables-mainHand").src = "images/emptySlots/emptySlots-mainHand.png";
        deleteInventory(player.inventory, player.inventorySize);
        drawInventory(player.inventory, player.inventorySize);
        equipItem("inventoryItem", "click");
    }
}
