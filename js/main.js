var sheet5e = sheet5e || (() => {
    /*
    attr_strength.........................................score
    attr_strength_max..................................modifier
    attr_dexterity........................................score
    attr_dexterity_max.................................modifier
    attr_constitution.....................................score
    attr_constitution_max..............................modifier
    attr_intelligence.....................................score
    attr_intelligence_max..............................modifier
    attr_wisdom...........................................score
    attr_wisdom_max....................................modifier
    attr_charisma.........................................score
    attr_charisma_max..................................modifier
    attr_class_level_race.................display class & level
    attr_class_level_race_max..............................race
    attr_background_alignment........................background
    attr_background_alignment_max.....................alignment
    attr_player_name_experience_points..............player_name
    attr_player_name_experience_points_max....experience_points
    attr_inspiration--------------------------------inspiration
    attr_inspiration_max
    attr_proficiency_bonus_level..............proficiency_bonus
    attr_proficiency_bonus_level_max........level (total level)
    attr_passive_wisdom..........................passive_wisdom
    attr_passive_wisdom_max
    attr_save_strength............................save_strength
    attr_save_strength_max............save_strength_proficiency
    attr_save_dexterity..........................save_dexterity
    attr_save_dexterity_max..........save_dexterity_proficiency
    attr_save_constitution....................save_constitution
    attr_save_constitution_max....save_constitution_proficiency
    attr_save_intelligence....................save_intelligence
    attr_save_intelligence_max....save_intelligence_proficiency
    attr_save_wisdom................................save_wisdom
    attr_save_wisdom_max................save_wisdom_proficiency
    attr_save_charisma............................save_charisma
    attr_save_charisma_max............save_charisma_proficiency
    
    */
    const attrList = [{
            name: 'strength',
            current: '+10',
            max: '30'
        },
        {
            name: 'dexterity',
            current: '+10',
            max: '30'
        },
        {
            name: 'constitution',
            current: '+10',
            max: '30'
        },
        {
            name: 'intelligence',
            current: '+10',
            max: '30'
        },
        {
            name: 'wisdom',
            current: '+10',
            max: '30'
        },
        {
            name: 'charisma',
            current: '+10',
            max: '30'
        },
        {
            name: 'class_level_race',
            current: 'class_level',
            max: 'race'
        },
        {
            name: 'background_alignment',
            current: 'background',
            max: 'alignment'
        },
        {
            name: 'player_name_experience_points',
            current: 'player name',
            max: 'experience_points'
        },
        {
            name: 'inspiration',
            current: 'TRUE',
            max: ''
        },
        {
            name: 'proficiency_bonus_level',
            current: '+11',
            max: '1'
        }, /* proficiency_bonus_level_max = level */
        {
            name: 'passive_wisdom',
            current: '+14',
            max: ''
        },
        {
            name: 'save_strength',
            current: '+14',
            max: 'FALSE'
        },
        {
            name: 'save_dexterity',
            current: '+14',
            max: 'FALSE'
        },
        {
            name: 'save_constitution',
            current: '+14',
            max: 'FALSE'
        },
        {
            name: 'save_intelligence',
            current: '+14',
            max: 'FALSE'
        },
        {
            name: 'save_wisdom',
            current: '+14',
            max: 'FALSE'
        },
        {
            name: 'save_charisma',
            current: '+14',
            max: 'FALSE'
        }
    ];

    const addAttrs = (obj) => {
        attrList.forEach((attr) => {
            createObj('attribute', {
                name: attr.name,
                current: attr.current,
                max: attr.max,
                characterid: obj.id
            });
        });
    };

    on('add:character', (obj) => {
        addAttrs(obj);
    });

})();
