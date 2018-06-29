var area = {
        "title": "quartzcavern",
        "header": "Quartz Cavern",
        "nomap": "These caves twist and bend unnaturally. It feels like the walls are shifting.",
        "subheader": 'This cavern opens out to reveal thick pieces of quartz sticking out from the rock walls. Glittering white crystals stud the tall ceiling, making what little light that is here refract strangely.',
        "events": [
            {
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
            },{
                "id": "fastenter_1",
                "title": "Leave No Stone Unturned (3 Supplies)",
                "subtitle": "It will be harder, and cost more supplies, but you may find better rewards",
                "type": "statcheck", //or random
                "stat": "magic",
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
                        "area": "wetcavern",
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
                        "area": "wetcavern",
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
                "stat": "magic",
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
                        "area": "wetcavern",
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
                        "area": "wetcavern",
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
                "stat": "magic",
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
                        "area": "wetcavern",
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
                        "area": "wetcavern",
                        "outcomes": [{
                            "parameter": "supplies",
                            "quantity": 1,
                            "change": "sub"
                        }]
                    }
                }
            },{
                "id": "crystal_drone",
                "title": "Living Crystal",
                "subtitle": 'The crystal cavern is strange to stand in. The way the light refracts and bounces from the countless glittering crystals is sort of disorienting. You stare a little longer than you intended to, and when you turn to leave, the exit doesn\'t seem to be where you thought it was. It takes you several minutes to re-orient yourself and find the exit, and by then, you are starting to get distracted by the glimmering crystals again. Do you want to relax and watch the shiny lights?',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 16,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "grizzsex": {
                        "text": 'You loosen your guard a little and look around, watching the lights twinkle and shimmer and shine all around you. It\'s quite calming and relaxing, in a strange way. Your breathing starts to grow slower and stiller, as your body feels like it\'s somehow stiffening. Your limbs harden and stay firm in their positions, losing the natural twitching and shifting of a normal body. You feel your feet becoming more comfortable on the rocky and spiky cavern floor. It no longer feels awkward and jagged, but instead feels natural to let your own skin harden and toughen against it.</p>The glimmering lights seem to reflect and bounce from your skin, which itself is starting to gleam and shimmer. Your flesh hardens and toughens, the bends and curves of a normal body starting to be replaced by sharp edges and flat, smooth planes. A glow emerges from deep within you, leaving your skin with a gleaming crystalline green shimmer. You reach towards your chest with unnatural jerky motions, and feel the hard, rocky edges of the shape there. There is no heartbeat or rise of breath. </p>Your torso is changing inside, organs being replaced with more shiny, slightly see-through crystal. You lift your hands and see your fingers lengthen, the tips becoming jagged crystal claws. The last of your skin and flesh is replaced, with a twinkling of lights, and becomes more beautiful crystal. You flex your toes, and feel them grow longer and stronger. Perfect for moving in this rocky cavern, your feet shift into jagged crystal talons.  Your crystal body takes on the suggestion of muscle and strength, becoming thicker in the limbs, and you feel a strange pleasure inside you when your rear starts to grow a new crystal. It makes a strange sound like the edge of a wineglass being touched when it grows, and it thickens and bends with sharp angles as it forms a sort of thick, lizardlike tail.</p>Your body is so cold and still and beautiful. A strange feeling is rising in your chest, one of lifeless, emotionless coldness. It tingles as it moves up into your head, and you feel your mind starting to grow slower and more calculating. Like a silicon crystal computer, your emotions fade away and leave only empathy-free logic. Your face starts to smooth over, your eyes and nose and mouth all turning into a smooth, beak-like crystal with no features or difference at all. Two horn-crystals just from the featureless shape of your head, and you feel satisfied and content with your body. This is how you were meant to be. You are a crystal drone.',
                        "descriptionchange": "This adventurer is a strange creature, made entirely of slightly green, translucent crystal. Their jagged body is shaped roughly like a lizard person, but their head is just a featureless crystal with two large horns and no eyes or facial features at all. When they are not moving, you would swear they are just a lifeless statue.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 16,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "crystal_prison",
                "title": "A Trick of the Light",
                "subtitle": 'As you walk past one of the larger white crystals in this room, you swear for a moment you saw a weird reflection, like a person. You turn to look behind you, but there is no one there. When you look back into the crystal and squint, you start to make out what looks like a canine warrior, mouthing silently to you as a reflection in the gleaming crystal. Do you want to try to speak with the ghostly image?',
                "type": "random",
                "requirements": [
                ],
                "icon": "inanimatefetish",
                "results": {
                    "grizzpay": {
                        "text": 'You step closer to the crystal, and try to talk to the person inside. Or on the surface, or whatever they are. The crystal itself seems hollow, yet at just the right angle you can almost make someone out, like an optical illusion. The canine mouths something to you, and you press your hands on the crystal and lean in to see if you can hear him. Suddenly, there is a bizarre sensation of falling that completely overtakes your body. You seem to almost collapse forward, out of your own flesh and down. You tumble through a shimmering, dizzying labyrinth of crystal reflections, and find yourself trapped, unable to move, and staring out into the very cave you were just standing in. Your body is pinned at the sides, encased at all angles, and you cannot move or twitch or even breathe.</p>From what you can see in the cave, your body is still there, your own hands pressed against your crystal prison. But then it blinks, and steps back, and shudders before a grin spreads across its face. "Woah! Fuck, it feels so good to be able to move again! But hey, I used to be a dog! What gives?" it says. Your face is bearing an expression totally unlike you would normally wear, and your voice is a gruff one that sounds like you might imagine that burly dog warrior would sound. </p>You see your body touch its face, stroke between its legs, and whatever spirit possesses it gradually realises what happened. It steps back from the crystal, and grins wider. "Oops! Guess you\'re stuck in my place, friend. Oh well, I\'m sure some other idiot will be along eventually to swap with you!" it says, before quickly leaving this cursed cave.',
                        "trapped_desc": "You are a silent reflection in the light of a magical crystal.",
                        "trapped": 'You are trapped inside a crystal, unable to move and only able to look out into the cave beyond. You are not even visible to other people except at the right angle, having become nothing but a cursed reflection.',
                        "outcomes": []
                    }
                }
            },{
                "id": "wolf_swap",
                "title": "Wolf Swap",
                "subtitle": "[WARNING: You will lose your character and start new as an entirely new person with different stats and items] You wait helplessly within the crystal, your only hope being that someone might come and free you with a magic spell. Or so you think. You hear someone walking through the caves, and they pass in front of you. It\'s an adventurer, a tall and heavy-set wolf. His thick fur is dark, almost black, and very shaggy and fluffy. His face is scruffy and unkempt, and his eyes glow yellow. He\'s wearing a leather vest and huge boots, and smoking a cigarette that lights up the dark cave. His rank fur looks smelly and dirty, and his belly is bulging out from under his shirt. Do you want to try and grab his attention?",
                "trapped": true,
                "type": "random",
                "requirements": [
                ],
                "icon": "tffetish",
                "results": {
                    "footstool_1": {
                        "text": 'You try to wriggle and shout out to the wolf, but your image just silently mouths in the reflection of your crystal prison. It\'s enough to get his attention, though. He blinks, and looks at you with a curious glare. "What the fuck?" he says, in a deep and growling voice. He leans forward, and presses one huge dirty paw-hand on the crystal surface.</p>At that moment, you feel a strange rush, like you\'re falling yet moving higher and higher. You burst out from the crystal like coming up for air from the ocean, and stumble backwards. You feel so heavy and strange. Your mouth tastes ashy and nasty from the cigarette you\'re smoking, but you can\'t seem to stop. Your face is long and scruffy, with thick and huge teeth. You touch them with your tongue, and carefully touch your new face with your rough, clawed hands. You feel your pointy ears, and look down at your chubby, hairy belly. You flex your massive toes inside your heavy leather boots, and wag your thick, shaggy wolf tail. You have taken the wolf\'s body! For a moment, you see him shouting at you in the crystal, but you lose the angle, and can\'t seem to find him again. You move forward, momentarily wanting to help, but then your head aches. </p>God you need a smoke. You feel so horny all of a sudden, like you\'ve been trapped and unable to fap for ages. You drop your beloved leather jacket, and kick off your huge boots, letting your smelly and filthy massive wolf paws flex. Fuck yeah that feels good. You stroke and tease your thick, sweaty cock for a while, until you pant and drool, then blow a hot load all over your shaggy chest. That feels way better. The pleasure of your orgasm flows through your big dirty body, and your consciousness combines with the brain in your head, the brain of a big dirty horny wolf man. That\'s what you always were, right? You...you remember growing up in Westwood. Yeah, you\'re a wolf from the new country. Grew up, learned to fight, and made your way as a digger. You were just coming to visit Dormaus and see what this place is like. You rub your head and sigh as the strange sensation that you used to be someone else fades. Must have been a weird side effect of these crystals. You really need to be more careful. For some reason, you stroke your rough hand over your muzzle, down your hairy chest, and lift your balls for a moment, like you\'re feeling them for the first time. Ugh, you have to focus on this dig or you\'ll never get paid. Back to work, Borus, then you can return to town and have some of your favourite ale, find a hot guy or gal to lick your pits the way you like.',
                        "newchar": {  
                            "area":"wetcavern",
                            "dust":52,
                            "description":"This adventurer is Borus, a tall, manly wolf. He has a hairy muscle gut, thick arms covered in scruffy fur, and a shaggy muzzle with enormous yellow fangs. He stinks of smoke and sweat. His long muzzle is twisted into a perverted grin, showing off his huge yellow fangs.",
                            "equipment":{  
                               "head":null,
                               "weapon":null,
                               "feet":null,
                               "ally":null,
                               "clothes":null
                            },
                            "stats":{  
                               "stealth":15,
                               "magic":10,
                               "charm":20,
                               "might":25
                            },
                            "statprogress":{  
                               "stealth":0,
                               "magic":0,
                               "charm":0,
                               "might":0
                            },
                            "items":{  
                               "wine_1":10,
                               "wine_2":5,
                               "muscat_1":123,
                               "supplies":15,
                               "cowboy_boots":1,
                               "leather_jacket":1,
                               "cigarette":1
                            },
                            "attributes":{  
                               "dominance":{  
                                  "value":3,
                                  "progress":0
                               },
                               "westwood":{  
                                   "value":1,
                                   "progress":0
                                },
                                "digger_progress":{  
                                    "value":3,
                                    "progress":0
                                 },
                                 "digger":{  
                                     "value":3,
                                     "progress":0
                                  },
                                  "kind":{  
                                      "value":2,
                                      "progress":0
                                   },
                               "species":{  
                                  "value":17,
                                  "progress":0
                               },
                               "gender":{  
                                  "value":1,
                                  "progress":0
                               }
                            },
                            "suffering":{  
                               "curse":{  
                                  "value":0,
                                  "progress":0
                               },
                               "guilt":{  
                                  "value":0,
                                  "progress":0
                               },
                               "pain":{  
                                  "value":0,
                                  "progress":0
                               },
                               "outcast":{  
                                  "value":0,
                                  "progress":0
                               }
                            },
                            "trapped":null,
                            "trapped_desc":null,
                         },
                        "outcomes": []
                    }
                }
            }
        ],
        "npcs": [
            
        ]
    }