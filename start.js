window.onload = start;

function start() {
    init();
    spellLaunch();
    //getSpell("spell", "click", function(){lifeDrain.fire.bind(lifeDrain)});
    //getSpell("spell", "click",function(){console.log("SAY WHAT??!!!?: ");});
    getSpell("spell", "click");
}
