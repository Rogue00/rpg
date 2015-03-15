function drawInventory(inventoryTable, playerInvetorySize) {
    var row = document.getElementById("tr-inventory");

    for(i = 0; i < playerInvetorySize; i++) {
        function checkSlot() {
            if(typeof(inventoryTable[i]) === 'undefined') {
                var emptySlotElement = document.getElementById("tr-inventory").childNodes[i+1];
                var emptySlot = emptySlotElement.innerHTML = '<img class="inventoryItem invetory-emptySlot"  src="images/emptySlots/emptySlots-invetory.png" alt="Empty Slot">';
                return emptySlot;
            } else {
                var filledSlot = inventoryTable[i].innerHTML = '<img class="inventoryItem ' + window[inventoryTable[i]].className + '" id="' + inventoryTable[i] + '" src="images/' + window[inventoryTable[i]].image + '" alt="' + inventoryTable[i] + '">' + window[inventoryTable[i]].value;
                return filledSlot;
            }
        }
        
        var x = row.insertCell();
        x.innerHTML = checkSlot();
    }
}

//Deltes all cells under "tr-inventory".
function deleteInventory(inventoryTable, playerInventorySize) {
    var row = document.getElementById("tr-inventory");
    
    for(i = 0; i < playerInventorySize; i++) {
        var x = row.deleteCell();
    }
}

