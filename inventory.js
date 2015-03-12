function drawInventory(inventoryTable, playerInvetorySize) {
      
    var row = document.getElementById("tr-inventory");

    for(i = 0; i < playerInvetorySize; i++) {
        function checkSlot() {
            if(typeof(inventoryTable[i]) === 'undefined') {
                //var emptySlot = 'Empty Slot';
                //inventoryTable[i] = emptySlot;
                var emptySlotElement = document.getElementById("tr-inventory").childNodes[i+1];
                var emptySlot = emptySlotElement.innerHTML = '<img class="inventoryItem"  src="images/emptySlots/emptySlots-invetory.png" alt="Empty Slot">';
                return emptySlot;
                debugger;
            } else {
                var filledSlot = inventoryTable[i].innerHTML = '<img class="inventoryItem" id="' + inventoryTable[i] + '" class="" src="images/' + window[inventoryTable[i]].image + '" alt="' + inventoryTable[i] + '">' + window[inventoryTable[i]].value;
                return filledSlot;
            }
        }
        
        var x = row.insertCell();
        x.innerHTML = checkSlot();
    }
}

