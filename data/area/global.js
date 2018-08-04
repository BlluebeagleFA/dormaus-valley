var global_area = {
        "events": [
            {
                "id": "contributor",
                "title": "Thank You",
                "subtitle": 'Thank you for supporting Dormaus Valley. Without all of your help, this game could not have been brought back.',
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "contributor",
                        "value": 1,
                        "comparison": "less" //default greater
                    },{
                        "parameter": "contributor",
                        "value": 10,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "contributor",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'All of you have my deepest thanks for your kindness, contributions, donations and support. I hope to continue extending this game for a long time. This special attribute will give you early access to new content, as a thank you for your help.',
                        "outcomes": [
                            {
                                "parameter": "contributor",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "am_male",
                "title": "Are you male?",
                "subtitle": 'A tall stranger bumps into you and apologises. Sorry sir, er, madam, er...',
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "gender",
                        "value": 1,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "gendericon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You look up at the stranger, who turns out to be a tall, poor-sighted bat in a long cloak to protect him from the sun. You correct him that you\'re male, and his long ears twitch as he smiles. "I see. Well, I hope to meet you again, sir", he says, before continuing on his way.',
                        "outcomes": [
                            {
                                "parameter": "gender",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "am_female",
                "title": "Are you female?",
                "subtitle": 'A tall stranger bumps into you and apologises. Sorry sir, er, madam, er...',
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "gender",
                        "value": 1,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "gendericon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You look up at the stranger, who turns out to be a tall, poor-sighted bat in a long cloak to protect him from the sun. You correct him that you\'re female, and his long ears twitch as he smiles. "I see. Well, I hope to meet you again, my lady", he says, before continuing on his way.',
                        "outcomes": [
                            {
                                "parameter": "gender",
                                "quantity": 2,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "save_me_batty",
                "title": "Save me Mr Bat!",
                "subtitle": 'A tall bat in a cloak bumps into you, and blinks with surprise. "Oh my! Do you require assistance?"',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "gender",
                        "value": 100,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "mrbat",
                "results": {
                    "success": { 
                        "text": 'The bat adjusts his glasses and takes a close look at you. He strokes his chin for a moment, then opens up his long cloak. From within, he draws out a small black book and reads it thoughtfully. "Here you are, this should resolve your problem, my friend", he says. He touches the page and quickly mutters a long string of complex syllables. The words seem to spin and twirl around you, and for a moment your body feels completely fluid. There is a crackle and pop of electricity, and then with a sudden SNAP, the curse binding you is undone! </p>As you look down at yourself, your form restored, the bat gives you a little bow. "I am glad I found myself lost so that I could provide you assistance, my friend. Until we meet again!"',
                        "freeTrap": true,
                        "outcomes": [
                        ]
                    }
                }
            },{
                "id": "fox_spell",
                "title": "The Spell of Befox!",
                "subtitle": 'A glowing aura of orange energy is swirling around you, trying to possess your body.',
                "type": "random",
                "requirements": [
                    {
                        "temporary_param": "fox"
                    }
                ],
                "icon": "thevoid",
                "results": {
                    "success": { 
                        "text": 'You feel the magic flowing through you, your body tingling. Your skin prickles as you develop soft, fluffy orange fur. The fur becomes light and peachy on your neck and chest, and dark at your hands and feet. Your head stretches forward into a pointed muzzle, while your ears grow pointed and fluffy. A long, bushy tail sprouts from your rear, swaying in the air as you transform into a fox!',
                        "clearTemp": "fox",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 8,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "rabbit_spell",
                "title": "The Spell of Berabbit!",
                "subtitle": 'A glowing aura of hopping, rapid energy is surrounding you, trying to possess your body.',
                "type": "random",
                "requirements": [
                    {
                        "temporary_param": "rabbit"
                    }
                ],
                "icon": "thevoid",
                "results": {
                    "success": { 
                        "text": 'You feel the magic flowing through you, your body tingling. Your skin prickles as you develop soft, silky white fur. It spreads down your body, and when it hits your legs, they thicken with muscle, then your feet grow long and thin. You start to shrink, and your head develops a small rounded muzzle, while your ears grow enormously long, stretching above your head and twitching in the air. A soft, white cottontail sprouts from your rear, bobbing in the air as you turn into a rabbit!',
                        "clearTemp": "rabbit",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 29,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "vore_spell",
                "title": "The Spell of Vore!",
                "subtitle": 'A glowing aura like the maw of a mighty beast is swirling around you, dragging you towards the caster.',
                "type": "random",
                "requirements": [
                    {
                        "temporary_param": "vore"
                    }
                ],
                "icon": "thevoid",
                "results": {
                    "success": { 
                        "text": 'The magic drags you over to the caster with a rush of air. They open their mouth revealing large fanged teeth dripping with drool. Their face contorts into a snarling, predatory grimace and their belly growls loudly. With beastlike rage, they grab you and grip you firmly in their hands. Opening their jaw wide, they start to shove you into their mouth. They drool and snarl as you wriggle and struggle, your body sliding over their tongue. Their tongue licks over your body, every inch of you being tasted, until they start to swallow. You are dragged into their dark, tight throat, and forced down a slippery warm tunnel until you land, curled up and confused, inside their belly.',
                        "clearTemp": "vore",
                        "area": "belly",
                        "outcomes": [
                        ]
                    }
                }
            }
        ],
        "npcs": [
            
        ]
    }