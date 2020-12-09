let combat_log = null;
let_active_combat = null;

Hooks.on("ready", _ => {
    console.log("Checking for combat log compendium pack.");
    if (Array.from(game.packs.keys()).includes("combat-logger.logs")) {
        combat_log = game.packs.get("combat-logger.logs");
    } else {
        console.log("womp womp")
    }
});

Hooks.on("createCombat", combat => {
    active_combat = combat.uuid
    journ = new JournalEntry({name: combat.id, combat_state: combat});
    combat_log.importEntity(journ);
});

Hooks.on("updateCombat", combat => {
    console.log(combat);
})

Hooks.on("deleteCombat", combat => {
    activ_combat = null;
});
