var area = {
        "title": "wetcavern",
        "header": "Wet Cavern",
        "nomap": "These caves twist and bend unnaturally. It feels like the walls are shifting.",
        "subheader": 'This part of the cavern is lower than the rest, following a path down into the earth. It stops at a black, inky pool of water, the rest of the cavern flooded and inaccessible. The water is still as death.',
        "events": [
            {
                "id": "fastenter_1",
                "title": "Leave No Stone Unturned (3 Supplies)",
                "subtitle": "It will be harder, and cost more supplies, but you may find better rewards",
                "type": "statcheck", //or random
                "stat": "stealth",
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
                        "area": "darkcavern",
                        "outcomes": [{
                            "parameter": "supplies",
                            "quantity": 3,
                            "change": "sub"
                        },{
                            "parameter": "digger_progress",
                            "quantity": 3,
                            "change": "add"
                        }]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'While caution and efficiency are very important, you want to get the most out of this trip as possible. You stop every few meters, hammering in pistons and setting up ropes for easy travel. You mount braziers on the walls using your extra torches, and you even take the time to carve rough steps into the trickier parts of the cave. Or at least, that\'s your intention. Unfortunately it seems you\'re not quite up to the task. Your torches end up right under leaky wet sections of the stone, and are ruined. Your attempt to carve steps only ends up making some of the holes larger. All in all, you spend a lot of time and many of your supplies, only to end up no better off than you were before.',
                        "area": "darkcavern",
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
                "stat": "stealth",
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
                        "area": "darkcavern",
                        "outcomes": [{
                            "parameter": "supplies",
                            "quantity": 2,
                            "change": "sub"
                        },{
                            "parameter": "digger_progress",
                            "quantity": 2,
                            "change": "add"
                        }]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'You want to be efficient, but these caves could also hold mysteries that would be of value or interest. As you move, you place markers and hammer pistons into the wall, so that you can find your way back and forth more easily. It\'s dangerous, but will be more rewarding. Unfortunately, you overestimate your own skill. As you are hammering into one section of the wall, there is a threatening rumble from above. Cracks skitter across the stone, and you leap away for safety moments before rocks come crashing down from above. You\'ve caused a cave in, and lost all of the supplies you had been holding while you hammered. You will have to backtrack and spend more supplies to make up the time.',
                        "area": "darkcavern",
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
                "stat": "stealth",
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
                        "area": "darkcavern",
                        "outcomes": [{
                            "parameter": "supplies",
                            "quantity": 1,
                            "change": "sub"
                        },{
                            "parameter": "digger_progress",
                            "quantity": 1,
                            "change": "add"
                        }]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'You start to descend into the caves. The stone is wet and cold, and when you place your feet down, you find yourself slipping. You stumble and fall, sliding along a crevasse. You barely catch yourself just before you would have tumbled into a pitch-black abyss. Unfortunately, your supplies are not so lucky. Some of them fall from your pack and disappear into the darkness.',
                        "area": "darkcavern",
                        "outcomes": [{
                            "parameter": "supplies",
                            "quantity": 1,
                            "change": "sub"
                        }]
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
                "icon": "default",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'The darkness of this cavern makes it very difficult to navigate. It\'s so quiet, and cold. You move carefully, to avoid pits, and then you feel a tingling on the back of your neck. Dread shivers down your spine. Something is moving in the darkness. It was just for a moment, but you felt something slither past. Grues are strange and mysterious creatures. They exist only in absolute darkness, and can never be seen. They are indestructible, and deadly, and always hungry. And one is right next to you.</p>Some sort of enormous paw or talon pins you down to the floor. You can\'t see what it is, but you feel the gigantic claws, as thick as your upper arm. You feel the sharp points pressing down on your belly, and the thick, heavy fur of the beast that covers its foot. You smell a musty, beastly stink surrounding you, as the weight on top of you pushes down harder. Something leans in, and you feel the hot breath of a massive creature washing over you. Drool drips from gigantic fangs, and the heat of a terrible beast washes down over you from above. You feet its tongue slide out, and lick slowly up your chest. It wraps around you like a tentacle, warm and wet. You are constricted and squeezed, as the tongue licks between your legs, up your rear, tasting every inch of you. You are drawn inescapably into the maw of the creature, and it closes its mouth around you. The darkness within its maw is no less pitch-black than the cave itself, but it is warm and wet and slippery.</p>You struggle helplessly as you are swallowed. Your body constricted on all sides, dragged down into the stomach of a terrifying beast of myth and darkness. You never stood a chance.',
                        "area": "belly",
                        "outcomes": [
                        ]
                    }
                }
            },{
                "id": "illithid",
                "title": "Dark Water",
                "subtitle": 'It\'s impossible to know how deep the water might be. Any form of horror could lurk within the depths, waiting to strike. Do you dare approach?',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 13,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "default",
                "results": {
                    "mikhailsex": {
                        "text": 'The darkness of these caverns is very oppressive, and even more so standing next to this inky-black water. It doesn\'t move at all, making it look almost like an endless pit into oblivion. You turn to leave, and hear the plip-splash of the water as you go. Hold on though, still water doesn\'t make noises?</p>You turn around, and stumble as you see a glistening, writhing form emerging from the depth. Water cascades from a long, thick black tentacle, followed by more of them, curling and twining together.</p>As you try to back away, one of the tentacles lashes forward with blinding speed. It coils around your leg, the flesh squishy yet with a firm, inescapable strength. The skin of it is cold and slimy, and it wraps slowly around your leg as it drags you towards the water. You struggle, but the stones here are wet and slippery, and your motions only make you slide further down. Another tentacle grabs your other leg, pulling you in faster. The tentacles seem endless, a forest of powerful limbs dripping with water and slime.</p>The crawling tentacles writhe around your legs, then begin to coil around your waist as well. Your body is constricted all around by the cold and slimy limbs of this strange creature. Slime soaks your skin, making your flesh tingle and itch. The tentacle wraps around your neck, squeezes just enough to make you struggle to breathe, and then suddenly plunges deep into your gasping mouth. You feel its bulging flesh as it forces its way into your throat, deeper and deeper. You are helpless to fight it, even when you feel your feet sink into the ice-cold water. If you could, you would take a deep breath, but the tentacle prevents that. In one more sudden jolt, you are plunged into the blackness of the dark water.</p>You can see nothing, hear nothing. All you can feel is the tentacles as they touch and stroke your flesh. One of them slides between your buttcheeks, then its firm tip presses against your hole. You squirm as it enters you, filling you bit by bit, stretching your insides. The parts of your skin exposed to the water begin to go numb, and icy cold penetrates deep into your body.</p>You start to realise that you haven\'t taken a breath for several minutes. Your body doesn\'t seem to need it. This pitch-black water is somehow sustaining you. The coldness sinks deeper and deeper, filling you, washing away the heat and warmth of your beating heart and human flesh. Some other warmth inside you, some fundamental human kindness and joy, is slowly frozen over, and replaced by a cruel, inhuman, emotionless chill.</p>Your skin feels slimy and damp. The colour of it begins to change, becoming a flawless jet-black that glistens wetly. Your muscles harden and bulge, thickening and growing with incredible strength. Your fingers and toes grow longer and stronger, before hard and razor-sharp claws emerge from the tips. Between your digits, a thin, dark webbing forms, perfect for moving in the water.</p>Your hair starts to fall out, all over, leaving you slimy and cold and bald on every inch of your form. Your head bulges, growing round and large, as your mind races with new intelligence and knowledge. Your eyes glow a deep yellow, illuminating the water, where you see an infinite forest of writhing, thrashing tentacles. The tentacle in your mouth emerges, and you stretch your jaw as something seems to form on your face. Thick, fleshy points, growing long, and strong, and moving like fingers at your will. A set of huge grasping black tentacles, almost like a beard covering your lower face. You flex your new body, and swim to the surface. There, you emerge from the depth, a monstrous and evil aquatic being. A tentacled, terrible illithid.',
                        "descriptionchange": 'This adventurer is an inhumanly tall and muscular being, their skin pitch black and cold. Their hands and feet are webbed and clawed, and their head is large and bulbous, with a set of powerful tentacles covering their mouth and hanging down like a beard. Their yellow eyes glow with an evil, heartless expression.',
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 13,
                                "change": "set"
                            }
                        ]
                    }
                }
            }
        ],
        "npcs": [
            
        ]
    }