var area = {
        "title": "grancampion_slums",
        "header": "The Slums",
        "nomap": "As an indentured servant, your options for exploration are limited. You'll have to walk on foot.",
        "subheader": "You wander through the narrow, tangled alleyways adjacent to one of Gran Campion's canals. The waterside is covered with rotten, cramped buildings. Narrow tenements are squeezed together like sardines, where families live with six or more people in one room.</p>But it is still better than the people who live below, on the rickety wooden platforms inches above the foul waterways. The slums are the bottom of Gran Campion society, but there is still hope for a better life in these crime-and-disease ridden warrens. In the \"pits\", there isn't even that.",
        "events": [
            {
                "id": "returnworkhouse",
                "title": "Return to the Workhouse",
                "subtitle": "Go back to the drudgery of life in Gran Campion.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You head back to the wet, cold and miserable squalor of the workhouse.",
                        "area": "grancampion_workhouse",
                        "outcomes": []
                    }
                }
            },{
                "id": "song",
                "title": "A Haunting Song",
                "subtitle": "A sad, haunting song drifts towards you from between the alleys. It is a significant change from the creaks, groans and distant barking that normally come from these streets.",
                "type": "random",
                "requirements": [
                    
                ],
                "icon": "default",
                "results": {
                    "thing": {
                        "html": "data/active/CampionHealer.html",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "athief",
                "title": "A Thief?",
                "subtitle": "You are distracted from looking down at the pits, when a cloaked figure rushes past and bumps into you. Then they flee into an alley and disappear. Instinctively, you check your pockets.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "slip",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "thing": {
                        "html": "data/active/RatThief.html",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "mossfog",
                "title": "The Mossfog",
                "subtitle": "You hear a wet, hacking cough coming from a nearby alleyway. The few huddled people who pass by you in the narrow streets avoid it, and pull their cloaks up tighter.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "slip",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "inanimatefetish",
                "results": {
                    "thing": {
                        "html": "data/active/Mossfog.html",
                        "outcomes": [
                            
                        ]
                    }
                }
            }
        ],
        "npcs": [
        ]
    }