window.onload = start;

function start() {
    drawInventory(player.inventory, player.inventorySize);
    getSpell("spell", "click");
    equipItem("inventoryItem", "click");
    removeWearable("playerWearables", "click");
    render();
    init();
    main();
}