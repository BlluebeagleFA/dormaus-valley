{
        "title": "patrons",
        "header": "The Patron's Ballroom",
        "mapId": "dormausvillage.jpg",
        "position": [-1,-1],
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
                    "success": { 
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
                    "success": { 
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
                    "success": { 
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
                    "success": { 
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
				"id": "reset_alder",
                "title": "Reset Alder",
                "subtitle": "There's a shark in a wetsuit with a surfboard resting next to him. He gives off a chill aura, and he might be able to give you some ‘relationship advice.’",
                "type": "random", //or random
                "requirements": [                    
                ],
                "icon": "aldericong",
                "results": {
                    "success": { 
                        "text": "You’re hesitant to approach him, but after but a few nervous glances he stands up and walks over to you. “What’s wrong, man? You lookin’ real uncomfortable. I’ll listen to your worries, that’s what bros are for, ‘ey?” He places a hand on your shoulder, and like a game of Jenga, you break into tears. You explain to him how you’ve felt about your relationship with Alder, that you want to break it off with him, but you just can’t. Half of it was probably incomprehensible through your sobs and sniffs, but he listens attentively as if you were the only person in the world.</p>As you begin to calm down, he rubs your shoulder and speaks. “Bro it sounds like you’re just not compatible with each other. If you don’t want him to be your dude you don’t gotta date him. Just be honest man, he’ll be happier than if you keep lying. Believe me bro, I’ve gone through more breakups than you can fathom.” You already feel a little better, as if all your issues matter a little less now.</p>A woman comes up from behind and starts speaking. “I couldn’t help but overhear you two. Do you need any help?” You tried to respond, but you felt something clotting your throat at that moment. The shark was quick to reply in your place.</p>“Yeah, my buddy here is totally down ‘cuz they wanna break up with their boyfriend. Don’t that fancy book you keep writing in do stuff like that?</p>Lin smiled, bringing out her book, turning a few pages, and letting out a quiet ‘ah’ as she found what she was looking for. “It sure does! I’ll help you and your boyfriend forget all about each other. You might recall that you had a boyfriend, but you won’t remember who he was. Try not to go back there again.”</p>“That’s rad bro!” The shark laughed loudly. “Good luck to you bro, I’m waiting on a pal, so I gotta get back to my seat. See ‘ya around!” And with that, the shark returned to where he sat previously. Lin wrote something in her book, and you felt all your memories with Alder fade away, replaced with vague memories of a past relationship. Sadly, you forgot about Lin and the shark as well, and you never got to thank them for their help.",
                        "outcomes": [
                            {
                                "parameter": "alder_connection",
                                "quantity": 0,
                                "change": "set"
                            },{
                                "parameter": "alder_interest",
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
                    "success": { 
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
                    "success": { 
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
                    "success": { 
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