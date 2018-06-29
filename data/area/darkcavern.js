var area = {
        "title": "darkcavern",
        "header": "Dark Cavern",
        "nomap": "These caves twist and bend unnaturally. It feels like the walls are shifting.",
        "subheader": 'The caverns are pitch-black here. It\'s impossible to see even inches in front of yourself. Even with artificial light, it seems to sputter and die barely feet from your body. The air is so cold that it hurts.',
        "events": [
            {
                "id": "fastenter_1",
                "title": "Leave No Stone Unturned (3 Supplies)",
                "subtitle": "It will be harder, and cost more supplies, but you may find better rewards",
                "type": "statcheck", //or random
                "stat": "charm",
                "difficulty": 30,
                "requirements": [
                    {
                        "parameter": "digger",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "supplies",
                        "value": 2,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "supplies",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "While caution and efficiency are very important, you want to get the most out of this trip as possible. You stop every few meters, hammering in pistons and setting up ropes for easy travel. You mount braziers on the walls using your extra torches, and you even take the time to carve rough steps into the trickier parts of the cave. Your efforts will make travelling back and forth vastly easier for other diggers. In addition, your attention to detail means that you identify a number of valuable ore deposits in the stone. You even find strange markings and carvings that might indicate a civilization once used this place. The writing is illegible, and the spiralling, sinuous carved drawings are far too water-damaged to understand, but it is still of some historical interest.",
                        "area": "deepestcavern",
                        "outcomes": [{
                            "parameter": "supplies",
                            "quantity": 3,
                            "change": "sub"
                        },{
                            "parameter": "digger_progress",
                            "quantity": 4,
                            "change": "add"
                        }]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'While caution and efficiency are very important, you want to get the most out of this trip as possible. You stop every few meters, hammering in pistons and setting up ropes for easy travel. You mount braziers on the walls using your extra torches, and you even take the time to carve rough steps into the trickier parts of the cave. Or at least, that\'s your intention. Unfortunately it seems you\'re not quite up to the task. Your torches end up right under leaky wet sections of the stone, and are ruined. Your attempt to carve steps only ends up making some of the holes larger. All in all, you spend a lot of time and many of your supplies, only to end up no better off than you were before.',
                        "area": "deepestcavern",
                        "outcomes": [{
                            "parameter": "supplies",
                            "quantity": 3,
                            "change": "sub"
                        }]
                    }
                }
            },{
                "id": "mediumenter_1",
                "title": "Proceed Slowly (2 Supplies)",
                "subtitle": "The more effort you put in, the better reward you will get",
                "type": "statcheck", //or random
                "stat": "charm",
                "difficulty": 25,
                "requirements": [
                    {
                        "parameter": "digger",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "supplies",
                        "value": 1,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "supplies",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You want to be efficient, but these caves could also hold mysteries that would be of value or interest. As you move, you place markers and hammer pistons into the wall, so that you can find your way back and forth more easily. It\'s dangerous, but will be more rewarding. You note with interest that there are crystals hidden in the stone. Sometimes when you hammer your pistons in, they are revealed and gleam appealingly. You make a careful note to fetch some on your way back.",
                        "area": "deepestcavern",
                        "outcomes": [{
                            "parameter": "supplies",
                            "quantity": 2,
                            "change": "sub"
                        },{
                            "parameter": "digger_progress",
                            "quantity": 3,
                            "change": "add"
                        }]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'You want to be efficient, but these caves could also hold mysteries that would be of value or interest. As you move, you place markers and hammer pistons into the wall, so that you can find your way back and forth more easily. It\'s dangerous, but will be more rewarding. Unfortunately, you overestimate your own skill. As you are hammering into one section of the wall, there is a threatening rumble from above. Cracks skitter across the stone, and you leap away for safety moments before rocks come crashing down from above. You\'ve caused a cave in, and lost all of the supplies you had been holding while you hammered. You will have to backtrack and spend more supplies to make up the time.',
                        "area": "deepestcavern",
                        "outcomes": [{
                            "parameter": "supplies",
                            "quantity": 2,
                            "change": "sub"
                        }]
                    }
                }
            },{
                "id": "lowenter_1",
                "title": "Just Get Through (1 Supplies)",
                "subtitle": "You won't get as good rewards, but you risk less",
                "type": "statcheck", //or random
                "stat": "charm",
                "difficulty": 20,
                "requirements": [
                    {
                        "parameter": "digger",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "supplies",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "supplies",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You start to descend into the caves. The stone is wet and cold, so you have to be careful where you place your feet, in case you slip. In addition, there are many sudden pitfalls that are hard to see in the gloom, even with your lights. You stop at one and set up a rope, before carefully grappeling down it. Before long, you find yourself in a new larger area, deep within the caves.",
                        "area": "deepestcavern",
                        "outcomes": [{
                            "parameter": "supplies",
                            "quantity": 1,
                            "change": "sub"
                        },{
                            "parameter": "digger_progress",
                            "quantity": 2,
                            "change": "add"
                        }]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'You start to descend into the caves. The stone is wet and cold, and when you place your feet down, you find yourself slipping. You stumble and fall, sliding along a crevasse. You barely catch yourself just before you would have tumbled into a pitch-black abyss. Unfortunately, your supplies are not so lucky. Some of them fall from your pack and disappear into the darkness.',
                        "area": "deepestcavern",
                        "outcomes": [{
                            "parameter": "supplies",
                            "quantity": 1,
                            "change": "sub"
                        }]
                    }
                }
            },{
                "id": "dridertf",
                "title": 'The Drider\'s Web',
                "subtitle": 'As you navigate the dark caverns, your hands brush through something soft dangling from the ceiling. Cobwebs? But no spider could make webs this large...',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 22,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "grizzsex": {
                        "text": 'You push through the webs, which part slowly, as though you are ripping through thin fabric. They lead deeper into a section of the caves that you hadn\'t noticed before. The webbing gets thicker, and harder to see, and you worry that some horrible creature might drop down on you. What you don\'t expect, is when you suddenly drop into a hidden pit. You fall through thicker and thicker webs, slowing your descent but wrapping and tangling you up in soft, sticky fabric. Finally, you end up bouncing and dangling on the end of a tangled rope of web, while hanging over some deep abyss. You didn\'t think you would be the one dropping down on a creature!</p>You hear something approaching with a skittering, clacking sound. You struggle, and try to turn or escape, but you are only able to catch a glimpse of enormous chitin-plated black legs, each as thick as a sturdy tree branch. They reach down from the dark and touch against you, the tips sharp and deadly. You start to spin as the legs toy with you, turning you around and around and wrapping you up tighter in webs that tightly bind your limbs to your sides, making it impossible to struggle. The legs hold onto your sides, and the massive creature pulls itself closer, finally letting you see your captor in full.</p>Though the lower body of the creature is a massive, bulging and gleaming black spider body, with sinister red stripes on the armour-like chitin, the upper body is not at all what you expected. Emerging from the end of the spider body is the naked, muscular torso of a humanoid male. His muscles gleam in the darkness, and his skin is a deep, inhuman purple. His eyes glow yellow, and his hair is long and white, hanging back from his head in a wild mane behind a long, pointy pair of elf-like ears. "Now, who do we have visiting my parlour?", he says in a deep, sultry voice. His massive spider leg strokes gently down the front of your body, though you cannot feel it through the heavy webbing. "It appears that tea has delivered itself to me today, and yet I do not hunger, for I ate repast only hours hence. Yet, perhaps there is another hunger this one could sate?", he says, more to himself than to you, since the webbing wrapped around your face makes you unable to speak.</p>He leans forward, opening his mouth to reveal large, gleaming vampire-like fangs. They tear at the web, and his mouth presses to yours as his cold, purple tongue slides into your mouth and strokes over your tongue. He holds your face in his humanoid hands, and the more he kisses you, the more you begin to feel strange. A cold, peculiar sensation of darkness flows down from your mouth, deep into your core. Your skin tingles and flushes with hot-and-cold sensations, as the colour pulses and deepens into a strange, deep purple hue. Your muscles feel firm and strong, as they harden and toughen. You feel your hair move and shift, as the colour in it disappears, replaced by a pure and gleaming white. The most intense change, however, is below your waist. You feel as though something is forming under the webs, something heavy, and hard, that strokes and flows down over you and traps you inside it. The webbing bulges and grows as your lower body is encased in a massive, bulging round form. You try to move or wiggle your legs, and you get a very odd sensation, as you can feel your legs briefly inside the big round object, but then your perception of them seems to split, and move out, becoming multiple feelings at the sides of your growing body. You flex, and push, and finally you feel the webs tear away, as enormous sharp black gleaming spider legs slice through your prison. You almost fall for a moment, but you instinctively twist your eight new legs, grabbing onto the webbing, but ending up directly below the other grinning spidertaur. Your armoured spider body is pressed belly-to-belly against his, and you feel his legs wrapping around you, holding you close in a mating clutch. You squirm, and gasp, feeling something thick and huge entering you in a place at the base of your new body. He stretches you as he thrusts forward, your bodies tangled in a confusing, arachnoid mating dance. You pant and struggle, confused by the feelings of lust growing inside you, and you feel something pushing up and filling you inside, sliding out from his body into yours. When he pulls free of you, you scutter away, struggling to control yourself. You feel filled to bursting, desperate to cum. Something emerges from underneath your legs, a huge, thick and long silvery organ. You gasp and moan with a loud, uncontrollable orgasm, as your new ovipositor unloads a large, round white egg into the webs around you. Another, and another, you unload egg after egg, emptying out your new womb and serving your purpose as a drider breeder. When you are finally empty, you scuttle away, trying to escape, but hearing his words as you depart. "You will return, my dear. You belong with me."',
                        "descriptionchange": "This adventurer is a purple-skinned drider, with an enormous armoured chitinous spider for a lower body.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 22,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "grue_vore",
                "title": "It is dark",
                "subtitle": "You are likely to be eaten by a grue.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "supplies",
                        "value": 0,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "vorefetish",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'The darkness of this cavern makes it very difficult to navigate. It\'s so quiet, and cold. You move carefully, to avoid pits, and then you feel a tingling on the back of your neck. Dread shivers down your spine. Something is moving in the darkness. It was just for a moment, but you felt something slither past. Grues are strange and mysterious creatures. They exist only in absolute darkness, and can never be seen. They are indestructible, and deadly, and always hungry. And one is right next to you.</p>Some sort of enormous paw or talon pins you down to the floor. You can\'t see what it is, but you feel the gigantic claws, as thick as your upper arm. You feel the sharp points pressing down on your belly, and the thick, heavy fur of the beast that covers its foot. You smell a musty, beastly stink surrounding you, as the weight on top of you pushes down harder. Something leans in, and you feel the hot breath of a massive creature washing over you. Drool drips from gigantic fangs, and the heat of a terrible beast washes down over you from above. You feet its tongue slide out, and lick slowly up your chest. It wraps around you like a tentacle, warm and wet. You are constricted and squeezed, as the tongue licks between your legs, up your rear, tasting every inch of you. You are drawn inescapably into the maw of the creature, and it closes its mouth around you. The darkness within its maw is no less pitch-black than the cave itself, but it is warm and wet and slippery.</p>You struggle helplessly as you are swallowed. Your body constricted on all sides, dragged down into the stomach of a terrifying beast of myth and darkness. You never stood a chance.',
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