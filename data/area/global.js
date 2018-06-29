var global_area = {
        "events": [
            {
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
                "icon": "speciesicon",
                "results": {
                    "success": { 
                        "text": 'The bat adjusts his glasses and takes a close look at you. He strokes his chin for a moment, then opens up his long cloak. From within, he draws out a small black book and reads it thoughtfully. "Here you are, this should resolve your problem, my friend", he says. He touches the page and quickly mutters a long string of complex syllables. The words seem to spin and twirl around you, and for a moment your body feels completely fluid. There is a crackle and pop of electricity, and then with a sudden SNAP, the curse binding you is undone! </p>As you look down at yourself, your form restored, the bat gives you a little bow. "I am glad I found myself lost so that I could provide you assistance, my friend. Until we meet again!"',
                        "freeTrap": true,
                        "outcomes": [
                        ]
                    }
                }
            }
        ],
        "npcs": [
            
        ]
    }