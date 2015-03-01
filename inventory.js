function drawInventory(inventoryTable, playerInvetorySize) {
      
    var row = document.getElementById("tr-inventory");

    for(i = 0; i < playerInvetorySize; i++) {
        function checkSlot() {
            if(typeof(inventoryTable[i]) === 'undefined') {
                var emptySlot = 'Empty Slot';
                inventoryTable[i] = emptySlot;
                return emptySlot;
            } else {
                var filledSlot = inventoryTable[i].innerHTML = '<img id="' + inventoryTable[i] + '" class="" src="images/' + window[inventoryTable[i]].image + '" alt="' + inventoryTable[i] + '">' + window[inventoryTable[i]].value;
                /*
                var filledSlot = inventoryTable[i].innerHTML = '<img id="' + pickedItem.name + '" class="" src="images/' + pickedItem.image + '" alt="' + inventoryTable[i] + '">';
                */
                return filledSlot;
            }
        }
        
        var x = row.insertCell();
        x.innerHTML = checkSlot();
    }
}

