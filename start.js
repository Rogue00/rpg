window.onload = start;

function start() {
    init();
    drawInventory(player.inventory, player.inventorySize);
    getSpell("spell", "click");
}