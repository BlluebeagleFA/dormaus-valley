var area = {
        "title": "witch_peak",
        "header": "Witch's Peak Bluff",
        "nomap": "You don't know your way around this area yet. You'll have to navigate on foot.",
        "subheader": 'West of the village, the coast bends up into a cliff that overlooks the crashing foamy waves below. The grass sways in a powerful wind, and the salty spray of foam manages to reach even to the cliff heights. In the distant horizon, ships float on the waters.',
        "events": [
            {
                "id": "witch_e",
                "title": "Travel East back to Otterton",
                "subtitle": "It's cold and a little lonely up here. It will be nicer back down in the village.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You walk down from the cliff, back to the comfy lights of the little fishing village.",
                        "area": "otterton",
                        "outcomes": []
                    }
                }
            },{
                "id": "orc_tf",
                "title": "Hunt Goblins",
                "subtitle": "The caves around these cliffs are lousy with goblins. The small, dirty creatures like to steal and vandalise the town, and it would be helpful to have someone put them in their place.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 36,
                        "comparison": "nequal" //default greater
                    },{
                        "parameter": "dominance",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "grizzsex": {
                        "text": "You hunt around the cliffside, looking for signs of goblins. Eventually you discover a flattened area of grass, with a pile of burned rocks in the middle, and bones scattered about. A primitive goblin campfire. You hide behind some of the rocks on the cliffside and wait for nightfall.</p>Sure enough, once the sun gets low in the sky, you hear the frenzied giggles and chattering voices of some goblins, as they crawl up from the caves below to meet atop the cliff. You wait for them to start up their fire and begin their strange, ritualistic dancing before you make a move.</p>You lunge out from behind the rock, dashing in and striking one of the goblins across the face. He falls backwards and rolls, his short green body bouncing on the firm stony ground. Two of the goblins panic and grab their weapons, simplistic sticks with rusty blades attached by dirty strips of cloth. You dodge their clumsy lunges, and grip one of the weapons. With a twist of your arms, you disarm one goblin and smash the other across the head. Something is odd though. The goblins you brutalised are grinning massively, showing off their yellow, jagged sharklike teeth. You turn to the lead goblin, who\'s skin is a rusty reddish shade, and covered in muddy painted symbols. He\'s still chanting, and dancing around the fire, his yellow eyes fixed on you.</p>You find yourself grunting and clutching the weapon in your hand. Your grip shakes for a moment, then the flimsy wood snaps like a twig in your fist. These little worms thought they could best you with something so pathetic? Absurd. The fire seems to rise higher, the smoke from it thick and heady with strange, exotic spices and scents.</p>The three goblins you hit crawl towards you slowly, looking up at you with strange, adoring expressions on their deranged faces. Their long pointy green ears twitch. You feel like you can almost understand the words the lead goblin is saying. Almost, but not quite. These weaklings are no threat to you. You lean back on a rock, spreading your legs and lounging like a king amongst his inferiors. Two of the goblins kneel at your feet, and start to rub them. Their small, rough fingers stroke along your heel and sole, massaging and stroking them. They open their mouths, and reveal long dripping tongues, which they use to lick your toes and clean the dust from your feet. As they should. They should be serving a superior, powerful warrior like you.</p>You relax more, leaning backwards and grinning wide. As the goblins stroke your feet, they seem to get longer and wider. Your toes stretching out, muscles starting to bulge under your skin. Your calves change too, bulging with hard, firm muscle. Gradually, as the goblins soak your feet in their slimy saliva, your skin begins to darken, and change hue. It becomes a deep, grassy green. You stroke your chest, feeling it flatten and widen. Your shoulders stretch out, while your abs become rock hard and well defined. Your arms bulge with muscle, swelling and growing huge and hard. The green shade continues to spread up your legs, covering your rear and crotch, then spreading up your chest and down your arms.</p>Your face aches as your teeth seem to grow too large for your mouth. You grunt and growl, licking your lower canines as they bulge, swell, and stretch out from your mouth. They curve up over your lips, becoming thick, powerful fangs. Your face becomes more rugged and harsh, your forehead bulging and your nose becoming flat and wide. Your ears stretch, becoming pointed and wide, while your hair turns into a dark, wild mane.</p>Finally, you realise you can understand the goblins after all. Their pathetic clumsy speech is a depraved, corrupted form of orcish. The ones at your feet are calling you master, king, lord orc. The lead goblin is reciting an old chant, a spell of sorts that calls out into the world for a powerful monster. One who can lead them and order them around.</p>You chuckle, in a deep and powerful orcish voice, as you command the lead goblin to stop his blabbering, and come over and get his head between your legs. These worthless cretins belong to you, now.",
                        "descriptionchange": "This adventurer is a huge, muscular orc, with deep green skin and a powerful warrior body.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 36,
                                "change": "set"
                            },{
                                "parameter": "goblins",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "battf",
                "title": "Cliffside Bats",
                "subtitle": 'You can hear some sort of squeaking, and smell an odd musky scent coming from the edge of the cliff. You walk over and peek down to see caves that you had not noticed before. The sun is starting to set, and as the light dims, some shapes poke their heads out from the caves. They have flat pink leaf-shaped noses, tall pointy ears, and huge skin-covered wings at their sides. They are preparing to leave as the sun sets. Do you want to wait with them?',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 26,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "grizzsex": {
                        "text": 'There is a chorus of squeaks from the caves as the last of the sun\'s rays disappear over the horizon. With a flutter of wingbeats, the bat-people emerge from the cave and fly up to the top of the cliff. One of them notices you, and squeaks a command to his companions. They flutter down and land on the grass around you. Their long feet grip on the grassy soil, as they fold their wings like massive leather cloaks at their back. The tallest of them is still only about four feet tall, and he walks awkwardly over to you, clearly more comfortable in the air. He squeaks at you. Despite his odd leaf-nose, he\'s surprisingly cute. The other two bats have moved to your sides, and they are nuzzling and sniffing your sides. You feel strangely comforted by their closeness. You can imagine cuddling up against them, hanging from a cave ceiling in a furry huddle. Your fingers start to grow longer and thinner as they nuzzle you, and the skin between them stretches out into a thin fleshy web that reaches up to your fingertips. You flex and stretch your new wings experimentally, marvelling at how light you feel. The lead bat moves in closer, and you realise your nose is pressing against his. Your body feels small and light, and you close your eyes and allow him to kiss you with his long, strange tongue. Your nose smushes against his as it flattens and turns to a point. Your ears stretch out atop your head, growing tall and pink and sensitive. Soft black fur flows over your flesh, while your feet stretch out on the ground. Your toes are like long, dextrous fingers. When you open your eyes, and your bat leader steps back, you are a perfect clone of him. His beautiful leaf nose. His black fur and handsome bat face. You never realised how cute and wonderful bats really were. You are not yet ready to join the bats for good, though, and your twin understands. The bats squeak at you, and fly off into the night, leaving you standing on the grass in your new, squeaky form.',
                        "descriptionchange": 'This player is a small and cute anthro fruitbat, with large wings and a flat leaf-shaped nose.',
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 26,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "cliff_random",
                "title": "Wait at the peak",
                "subtitle": "You can sense a faint aura of magic up atop this cliff.",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "Brogulls": {
                        "text": 'As you walk along the cliff, you hear a distant sound of bird calls coming from below. You peek along the edge of the cliff, and see that down on the sandy shore to the distance, there are two white shapes moving. Careful observation reveals that they are two seagull-men, one tall and muscular, and the other thinner and shorter. They are kissing and nuzzling eachother with their beaks, and as you watch, they lie on the sand together as the muscular one mounts the smaller seagull\'s ass. Part of you wishes you were a bit closer. It looks like quite a touching scene.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 7,
                                "change": "add"
                            }
                        ]
                    },
                    "Goblins": {
                        "text": 'There is a strange sound coming from the cliffs this evening. Sort of like chanting and primitive yelling. You see the flicker of a campfire, and walk over to it. Dancing around the fire is a group of short, green-skinned humanoids with piggish faces and large pointed ears. They are jabbering at eachother and eating roasted meat, their bodies covered only by loincloths and by splatters of mud. One of them turns and snorts when you get close, and yells some sort of command. Before you can react, two of the goblins lunge at you and knock you down. You struggle under them, but despite their tiny size, they are too strong to resist. The lead goblin, who\'s skin is more of a rusty orange-red shade, walks up between your legs and sniffs you. He grins, and you blush as you realise that something about the goblins\' sweaty, dirty stink is turning you on. He moves up to your head, and straddles your chest with his short legs, before pulling away his loincloth to reveal a fat green cock that looks disproportionately large on his short body. He rams it forward, shoving it into your mouth and forcing you to suck on the sweaty green flesh. The other two goblins, excited by this, start to rub their own cocks all over your skin. The excitement seems too much for them because it isn\'t long before they are spraying thick, sticky cum all over your legs and chest. The leader finishes not long after, his cum tasting bitter and hot as it floods into your throat. They back off after that, and your mind is filled for a moment with a desire to strip down and dance around the fire. To become dumb and horny and dirty, just a stupid minion, waiting for a real monster to use you and control you. You manage to shake it off, and quickly flee before the feelings return.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 7,
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