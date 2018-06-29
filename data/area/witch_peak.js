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