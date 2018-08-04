var area = {
        "title": "patrons",
        "header": "The Patron's Ballroom",
        "subheader": 'This classy, elegant ballroom is decorated with large tables and beautiful chandeliers. The ceilings are painted a deep blue, while the walls are papered in a classy sky blue and the floor is polished to a mirror shine. You get a strong feeling that this location is non-canon.',
        "events": [
            {
                "id": "leavetootterton",
                "title": "Go to Otterton",
                "subtitle": "A mysterious door here leads to Otterton.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You open the door, and walk through.",
                        "area": "otterton",
                        "outcomes": []
                    }
                }
            },{
                "id": "leavetomakarna",
                "title": "Go to Makarna",
                "subtitle": "A mysterious door here leads to Makarna.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You open the door, and walk through.",
                        "area": "makarna_training",
                        "outcomes": []
                    }
                }
            },{
                "id": "getsupplies",
                "title": "Get Supplies",
                "subtitle": 'There is a pile of digging supplies, all neatly stacked together wrapped in brown paper. A sign in gold lettering says "Help Yourself"',
                "type": "random", //or random
                "requirements": [
                    
                ],
                "icon": "supplies",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You take some digging supplies. The pile seems to be no smaller than it was before.",
                        "outcomes": [
                            {
                                "parameter": "supplies",
                                "quantity": 2,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "reset_flute",
                "title": "Reset Flute",
                "subtitle": 'Lin is carefully writing down some notes in a large record book. You could ask her to reset your status with Flute, if you wish.',
                "type": "random", //or random
                "requirements": [                    
                ],
                "icon": "fluteicong",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'Lin looks up from her notes and smiles. "Ah! Of course, honoured guest! Just a moment", she says. She looks back a few pages, and then crosses out some lines with a quill pen. "You may start afresh with Flute now", she finishes.',
                        "outcomes": [
                            {
                                "parameter": "flute_connection",
                                "quantity": 0,
                                "change": "set"
                            },{
                                "parameter": "flute_interest",
                                "quantity": 0,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "bemale",
                "title": "Become Male",
                "subtitle": 'You tire of your current gender.',
                "type": "random", //or random
                "requirements": [                    
                ],
                "icon": "gender",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You take a glass of white wine from a tray labelled "Gentlemen". As you drink it, you feel your breasts flatten and something grow between your legs. You are now male.',
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
                "id": "befemale",
                "title": "Become Female",
                "subtitle": 'You tire of your current gender.',
                "type": "random", //or random
                "requirements": [                    
                ],
                "icon": "gender",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You take a glass of white wine from a tray labelled "Ladies". As you drink it, you feel your chest swell with growing breasts, and your package shrinks and inverts, becoming a vagina. You are now female.',
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
                "id": "complain",
                "title": "Complain to the Developer",
                "subtitle": 'One of the many perks of being a paying customer is that the developer has to listen to you.',
                "type": "random", //or random
                "requirements": [                    
                ],
                "icon": "usefulraccoon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You start complaining about nothing in particular, to the empty ballroom. It seems to be listening intently. When you finish, you notice there is a small blue raccoon in front of you. He is wearing a spiked collar and typing furiously on a laptop. You get the feeling things will go your way more often if you keep him around.',
                        "outcomes": [
                            {
                                "parameter": "useful_raccoon",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            }
        ],
        "npcs": [
        ]
    }