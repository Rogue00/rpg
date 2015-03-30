window.onload = start;

function start() {
    init();
    drawInventory(player.inventory, player.inventorySize);
    getSpell("spell", "click");
    equipItem("inventoryItem", "click");
    removeWearable("playerWearables", "click");
    render();
    main();
}