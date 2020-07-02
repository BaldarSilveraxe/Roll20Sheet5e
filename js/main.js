var sheet5e = sheet5e || (() => {
    const attrList = [
        {name: 'strength', current: "+10", max: "30"},
        {name: 'dexterity', current: "+10", max: "30"},
        {name: 'constitution', current: "+10", max: "30"},
        {name: 'intelligence', current: "+10", max: "30"},
        {name: 'wisdom', current: "+10", max: "30"},
        {name: 'charisma', current: "+10", max: "30"},
        {name: 'class_level_race', current: "class_level", max: "race"},
        {name: 'background_alignment', current: "background", max: "alignment"},
        {name: 'player_name_experience_points', current: "player name", max: "experience_points"},
        {name: 'inspiration', current: "TRUE", max: ""},
        {name: 'proficiency_bonus_level', current: "+11", max: "1"}, /* proficiency_bonus_level_max = level */
        {name: 'passive_wisdom', current: "+14", max: "1"},
        {name: 'save_strength', current: "+14", max: "FALSE"},
        {name: 'save_dexterity', current: "+14", max: "FALSE"},
        {name: 'save_constitution', current: "+14", max: "FALSE"},
        {name: 'save_intelligence', current: "+14", max: "FALSE"},
        {name: 'save_wisdom', current: "+14", max: "FALSE"},
        {name: 'save_charisma', current: "+14", max: "FALSE"}
    ]; 

    const addAttrs = (obj) => {
        attrList.forEach((attr) => {
            createObj("attribute", { name: attr.name, current: attr.current, max: attr.max, characterid: obj.id });
        });
    }; 
    
    on("add:character", (obj) => {
        addAttrs(obj);
    });

})();
