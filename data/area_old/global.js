var global_area = {
        "events": [
            {
                "id": "to_outcast",
                "title": "Outcast",
                "global": true,
                "subtitle": 'You have a problem. Inns are reluctant to give you a room. Shopkeepers put away their goods when you enter, and charge you exorbitant rates. Guards shoo you along when you loiter, and everyone eyes you with suspicion.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "gender",
                        "value": 100,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "outcast",
                "results": {
                    "success": { 
                        "text": "The reason for your woes gradually become clear as you overhear people whispering about you. Gossips lean towards eachother and point as you walk past, and sometimes you catch people laughing. From the fragments of conversation you catch, it seems that you have cultivated such a bad reputation with your actions that you can't be considered a member of polite society any more.</p>You are trying to figure out how to restore your reputation, when you spot a large carriage on the street. It is black, with bars on the windows, but a colourful painted logo on the side claims it is the \"Gran Campion Reputation Society\". A donkey is sitting atop it, wearing a soft cap and a rough but fashionable set of riding gear. He winks at you.</p>\"Made an ass of yourself, friend? I recognise that look. Worn through people's trust once too many times? Streaked through town, maybe got caught unloading behind a bar alleyway? Well worry no longer! Join me on a trip to the beautiful, the extravagant, city of Gran Campion, and your worries will be solved!\", he says.</p>You ask about Gran Campion, and he pantomimes exaggerated shock and surprise. \"Not heard of the Gilded City? Goodness you really have been living under a rock! I suspected from your appearance, but even so. Gran Campion lies beyond the mountains, the glittering city of canals on the eastern peninsula. The riches of nations flow through her markets, global fashions and tastes are developed in the very heart of culture!\"</p>He hops down, his hoofs tapping as he lands. \"Why, work there for a few months, and you'll be the talk of the town! Everyone will want the news from the Gilded City. I guarantee your reputation as an outcast will be gone!\"</p>With no other options, you reluctantly agree. He leads you into the carriage, and travels on his way. He picks up a few more rough, miserable-looking workers as he travels, all of you with similar stories of embarrassment and shame.</p>The carriage travels a long way, winding through the mountains along a narrow set of passes and roadways. The air becomes cold and dry, and the carriage becomes more uncomfortable by the day. As you make your way back down the mountains, you pass through a checkpoint, and officially enter into the sovereign lands of Gran Campion.</p>The mountains give way to fertile fields, filled with windmills and town houses. Carefully maintained forests are the limits of the \"wild\" on this side of the mountains. The landscape is a patchwork quilt of fields and farms. You pass through small towns, growing larger and more extravagant as you approach the southern coast.</p>Finally, Gran Campion itself appears on the horizon. It is spectacularly huge, a grey blot stretching across your view. The whole city is draped and clouded by mist. Tall towers pierce out from above it, but the buildings below are swaddled by the fog.</p>The road becomes paved and well-maintained as you reach the city gates. The donkey pays a fare, and enters into the city. You travel past tight, cramped streets, with ramshackle houses clustering and fighting for space. Beggars and urchins scramble between foggy roads. Armored guards are everywhere, their black plate wet in the fog. Everywhere, workers and citizens hustle and scramble. The city is packed to bursting, as densely-filled as a rat's warren.</p>The towers rise above it all, piercing into the sky. Despite their beauty, this city stinks of desperation and fear. You and the other 'recruits' are shoved into a squat, cold building. Water drips from the ceiling, and a guttering light illuminates racks of dirty bunkbeds. Welcome to the Work Houses.",
                        "area": "grancampion_workhouse",
                        "outcomes": [
                            {
                                "parameter": "outcast",
                                "quantity": 0,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "to_jail",
                "title": "Imprisoned",
                "global": true,
                "subtitle": 'Your crimes have caught up to you at last.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "gender",
                        "value": 100,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "guilt",
                "results": {
                    "success": { 
                        "text": "You get the feeling that your most recent crime may have been just a step too far. This feeling is generally exacerbated when you feel someone strike you hard from behind, and cold cuffs locked around your wrists as you pass out.</p>You are awakened some time later with a sore head, by a lurching and jolting motion. You blearily look around and see the wooden boards of some kind of wagon. As you sit up, a clanking sound reveals that you are chained to a bench, by a pair of heavy shackles around your hands. You try on a whim to cast magic, but you feel it fizzle out in your fingers, as the metal shackles seem to somehow ground and steal it. There are other prisoners in the wagon, all of them looking downcast and glum. A raccoon, a fox, and a bear. When you try to ask where you're headed, the fox looks up to you with deep, baggy eyes and gives a weak smile. \"We're being sent to Hornloft, unlucky one. We won't be returning alive\", he says.</p>Over the course of several days, you make short conversation with the other prisoners. Hornloft, you discover, is an infamous prison in the northern kingdom of Horn. The gryphons of Horn believe firmly in retribution, and agree to take the criminals of other lands in exchange for payment. The raccoon and bear were caught in the act of burglary, the bear being a lockpick and the raccoon his muscle. The fox is from the wealthy city of Gran Campion, and was imprisoned for being an anti-monarchist, he claims.</p>Once a day the guards open the barred doors of the wagon and give you all bowls of thin, unpleasant gruel. They are a pair of stoic, muscular canines, and any questions are answered with growls or painful jabs from their batons. The air gets colder and colder as the days pass, making you all shiver and feel weak. Finally, on a day where your breath is crystallizing in the air, the wagon comes to a stop. The door is opened, and the guards pull you out, and lead you chained together through a snowy path.</p>You can tell from the cold, and the thin, painful air, that you are high in the mountains. You pass through dark conifers along a stone-paved path higher and higher, until finally you are led beyond the trees and see your destination. At the edge of a mountain, dangling perilously over the edge, is a massive black fortress. It looms like a sullen beast, with the white snow settling atop it like a shroud. As you walk up the mountainside towards it, you peer down over the edge to see a large city below you, with high thick walls and many dark, squat buildings poking out from between snowy streets.</p>You stop at the entrance to the fortress, in front of a massive mechanical drawbridge. Hornloft itself is built on the edge of a precipice, surrounded on all sides by a sheer drop of cold ice. This drawbridge seems to be the only accessway. The canine guards hand your chains over to two pike-bearing gryphons, wearing dour black armor. They lead you within, and you notice as you enter the narrow passages of the black stone building that it is only barely less bitterly cold than the outside.</p>Your belongings are confiscated, and locked away. You notice they say nothing about ever returning it, or about when or if you will be freed. You are given a grey prison uniform, and taken to a cell high in one of the towers. It is barren and cold, with only a wooden bench, toilet, and a tiny barred window looking out into the steely gray skies.",
                        "area": "hornloft_1",
                        "outcomes": [
                            {
                                "parameter": "guilt",
                                "quantity": 0,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "to_maze",
                "title": "Out of Control",
                "global": true,
                "subtitle": "The magic inside you is roiling and boiling over like a volcano. You fall to your knees, clutching your gut as you feel burning hot and ice-cold, all at once. Energy flows from your mouth and eyes as you lose control...",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "gender",
                        "value": 100,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "curse",
                "results": {
                    "success": { 
                        "text": "The more you misused magic and lost control of it, the more you felt a strange presence growing nearby. You feel like something enormous and terrifying is starting to notice you, looking up through from the bowels of the earth, and searching for you.</p>When, finally, you lose control completely and feel magic surging from every inch of your body, you think it finally found you. For a moment, you see an enormous bony hand reach out and close its grip around your body. Then, you pass out.</p>You are not sure what happens after that. You are vaguely aware of shouting, and people grabbing you and pinning you. Maybe you are being pushed down somewhere dark. But the feelings are faint and hard to hold onto. Your vision and mind are being swamped with other memories, other thoughts. You see yourself as a cat sorceror, wrapping up your rival in magical tendrils so that you can finally put him in his place. Moments later you are someone else, a human wizard being shrunk down by his own familiar as your supposedly-obedient crow pet takes control of you. Then, you are one of many robed figures, chanting a summoning spell as a massive horned, beast rises up from the earth.</p>Which of these are your memories? Who are you? Where are you?",
                        "area": "maze_1",
                        "outcomes": [
                            {
                                "parameter": "curse",
                                "quantity": 2,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "contributor",
                "title": "Thank You",
                "global": true,
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
                    "success": { 
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
                "global": true,
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
                    "success": { 
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
                "global": true,
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
                    "success": { 
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
                "global": true,
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
                "global": true,
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
                "global": true,
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
                "global": true,
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
            },{
                "id": "dumb_0",
                "title": "Drink a Stupidity Potion",
                "subtitle": "Is that really wise?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "dumb_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 0,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "dumb_potion",
                "results": {
                    "success": { 
                        "text": 'You swallow the strange creamy milk. It is warm and salty and very very thick. You blink a few times, and realise you have a dumb, slow grin on your face. You rub your forehead and realise you\'re reacting slower than you used to. You can\'t seem to focus on anything for long. You are stupider than you used to be, but there\'s a sort of slow, addictive happiness to your new ignorance.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 3,
                                "change": "set"
                            },
                            {
                                "parameter": "dumb_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "dumb_1",
                "title": "Drink a Stupidity Potion",
                "global": true,
                "subtitle": "Is that really wise?",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "dumb_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "dumb_potion",
                "results": {
                    "success": { 
                        "text": 'Your stupid brain seems to be stopping completely. You struggle to form even a single sentence in your head. You try to speak, but all that comes out is grunts and noises. You vaguely understand that you are losing something, but you don\'t understand the concept of what is happening to you. You are working on basic, animal instinct, nothing more than a beast. You can no longer speak.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 1,
                                "change": "set"
                            },
                            {
                                "parameter": "dumb_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "dumb_2",
                "title": "Drink a Stupidity Potion",
                "subtitle": "Is that really wise?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "dumb_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 2,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "dumb_potion",
                "results": {
                    "success": { 
                        "text": 'Your stupid brain seems to be stopping completely. You struggle to form even a single sentence in your head. You try to speak, but all that comes out is grunts and noises. You vaguely understand that you are losing something, but you don\'t understand the concept of what is happening to you. You are working on basic, animal instinct, nothing more than a beast. You can no longer speak.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 1,
                                "change": "set"
                            },
                            {
                                "parameter": "dumb_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "dumb_3",
                "title": "Drink a Stupidity Potion",
                "subtitle": "Is that really wise?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "dumb_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 3,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "dumb_potion",
                "results": {
                    "success": { 
                        "text": 'You swallow the strange creamy milk. It is warm and salty and very very thick. Your already-below-average brain seems to slow to a crawl. You blink slowly and start to drool. Your mind is full of fog and wool, and you can barely focus on any thought for more than a few moments, before your mind drifts away. You look down and see a discarded newsletter by your feet, and realise that there is something written on it, but you can no longer understand the letters. You laugh, in a dumb, slow, stupid way. You are happy and content in your stupid tiny brain. You will struggle to speak intelligently now.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 2,
                                "change": "set"
                            },
                            {
                                "parameter": "dumb_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "dumb_4",
                "title": "Drink a Stupidity Potion",
                "subtitle": "Is that really wise?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "dumb_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 4,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "dumb_potion",
                "results": {
                    "success": { 
                        "text": 'You swallow the strange creamy milk. It is warm and salty and very very thick. You blink a few times, and realise you have a dumb, slow grin on your face. You rub your forehead and realise you\'re reacting slower than you used to. You can\'t seem to focus on anything for long. You are stupider than you used to be, but there\'s a sort of slow, addictive happiness to your new ignorance.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 3,
                                "change": "set"
                            },
                            {
                                "parameter": "dumb_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "dumb_5",
                "title": "Drink a Stupidity Potion",
                "subtitle": "Is that really wise?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "dumb_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 5,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "dumb_potion",
                "results": {
                    "success": { 
                        "text": 'You swallow the strange creamy milk. It is warm and salty and very very thick. Your intelligent mind feels a little strange. You blink a few times, and almost feel a thick, slow morass in your head, slowing you down. You feel like things like algebra and science would be less easy to understand now. You are thinking at the level of an average person.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 4,
                                "change": "set"
                            },
                            {
                                "parameter": "dumb_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "dumb_6",
                "title": "Drink a Stupidity Potion",
                "subtitle": "Is that really wise?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "dumb_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 6,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "dumb_potion",
                "results": {
                    "success": { 
                        "text": 'You swallow the strange creamy milk. It is warm and salty and very very thick. Your rapid and intelligent thoughts seem to move slower and more sluggishly, like they are struggling through thick fluid. You can feel it in your head, slowing you down. You know you are more intelligent than average, but you no longer so easily grasp ultra-complex thoughts.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 5,
                                "change": "set"
                            },
                            {
                                "parameter": "dumb_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "dumb_7",
                "title": "Drink a Stupidity Potion",
                "subtitle": "Is that really wise?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "dumb_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 7,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "dumb_potion",
                "results": {
                    "success": { 
                        "text": 'You swallow the strange creamy milk. It is warm and salty and very very thick. Your mechanical mind whirrs and chugs for a moment, as stupidity almost seems to flow into your head and clog the delicate and powerful machinery of your brain. The hot, rapid thoughts in your robot brain start to slow down, and you feel warm and squishy and soft in your head. Your stiff, robotic posture slouches a little, and you begin to breathe, and sweat. Your body aches as you sense organic sensations and impulses. You cough and rub your face as you return to a flesh and blood creature.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 6,
                                "change": "set"
                            },
                            {
                                "parameter": "dumb_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },{
                "id": "smart_0",
                "title": "Drink an Intelligence Potion",
                "subtitle": "What could be bad about being smarter?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "smart_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 0,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "smart_potion",
                "results": {
                    "success": { 
                        "text": 'You swallow the thin and tingly fluid. It almost feels electrical in your mouth, and it makes your brain zap and tingle. You feel smarter, and faster. Your mind runs through alebra and riddles, and they unravel with ease under the power of your fast and potent thoughts.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 4,
                                "change": "set"
                            },
                            {
                                "parameter": "smart_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "smart_1",
                "title": "Drink an Intelligence Potion",
                "subtitle": "What could be bad about being smarter?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "smart_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "smart_potion",
                "results": {
                    "success": { 
                        "text": 'You swallow the thin and tingly fluid. It almost feels electrical in your mouth, and it makes your brain zap and tingle. Your basic, instinctive animal brain sparks and tingles. You look around, and feel thoughts in your head. Stupid, and slow, and basic, but still thoughts. You no longer have the mind of a simple animal.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 2,
                                "change": "set"
                            },
                            {
                                "parameter": "smart_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "smart_2",
                "title": "Drink an Intelligence Potion",
                "subtitle": "What could be bad about being smarter?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "smart_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 2,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "smart_potion",
                "results": {
                    "success": { 
                        "text": 'You swallow the thin and tingly fluid. It almost feels electrical in your mouth, and it makes your brain zap and tingle. You stop drooling, and your slack idiot grin sobers up, though you still struggle to think straight. You are slow and dumb, but smarter than you were before.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 3,
                                "change": "set"
                            },
                            {
                                "parameter": "smart_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "smart_3",
                "global": true,
                "title": "Drink an Intelligence Potion",
                "subtitle": "What could be bad about being smarter?",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "smart_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 3,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "smart_potion",
                "results": {
                    "success": { 
                        "text": 'You swallow the thin and tingly fluid. It almost feels electrical in your mouth, and it makes your brain zap and tingle. You blink and stretch, your mind understanding concepts properly again. Anything complex and powerful would be tough, but you\'re no dumber than the average person.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 4,
                                "change": "set"
                            },
                            {
                                "parameter": "smart_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "smart_4",
                "title": "Drink an Intelligence Potion",
                "global": true,
                "subtitle": "What could be bad about being smarter?",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "smart_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 4,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "smart_potion",
                "results": {
                    "success": { 
                        "text": 'You swallow the thin and tingly fluid. It almost feels electrical in your mouth, and it makes your brain zap and tingle. You feel smarter, and faster. Your mind runs through alebra and riddles, and they unravel with ease under the power of your fast and potent thoughts.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 5,
                                "change": "set"
                            },
                            {
                                "parameter": "smart_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "smart_5",
                "title": "Drink an Intelligence Potion",
                "global": true,
                "subtitle": "What could be bad about being smarter?",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "smart_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 5,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "smart_potion",
                "results": {
                    "success": { 
                        "text": 'You swallow the thin and tingly fluid. It almost feels electrical in your mouth, and it makes your brain zap and tingle. Your intelligent brain burgeons with power and speed. Everything around you seems to move slower, as you realise you are comprehending and analysing everything around you. Even incredibly complex problems are almost instantly solved in your head. You realise, suddenly, that you understand capital letters now. It\'s so simple!',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 6,
                                "change": "set"
                            },
                            {
                                "parameter": "smart_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "smart_6",
                "title": "Drink an Intelligence Potion",
                "subtitle": "What could be bad about being smarter?",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "smart_potion",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "intelligence",
                        "value": 6,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "smart_potion",
                "results": {
                    "success": { 
                        "text": 'You swallow the thin and tingly fluid. It almost feels electrical in your mouth, and it makes your brain zap and tingle. Your mind begins to move at speeds you could never have even imagined. In a microsecond you have analysed everything around you. You think through plans and strategies for every eventuality in an instant. Your body is no longer moving like an ordinary being. Your posture becomes stiff and straight. Your breathing slows, then stops completely. You no longer need it. You feel cold, and complex, and mechanical inside. Your skin becomes cold and firm, your organs begin to transform into whirring and buzzing machinery. Your brain, organic and sticky and slow, is rapidly replaced by a perfect artificial intelligence. Your wrinkled and wet organic mind becomes a perfect glittering sphere in your head, a mechanical computer far more powerful than it ever was before.',
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 7,
                                "change": "set"
                            },
                            {
                                "parameter": "smart_potion",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
			{
                "id": "smoke_cigarette",
                "title": "Smoke Cigarette",
                "subtitle": "Now would be a good time to have a smoke. Your troubles will wash away, literally — you’re sure of that.",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "ritter_cigarette",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "nicotine",
                        "value": 3,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "cigarette",
                "results": {
                    "success": { 
                        "text": "You dig through your pockets for a while before finding it; the cigarette you bought from Ritter! It doesn’t take you long to find the lighter Alder gave you, and with a flick, you’ve got the cigarette lit up. All it takes is a single drag for your entire body to enter a calm and relaxed state. Whether it’s the magic or just nostalgia, you feel your body reinvigorated, just the same as the first time you smoked with Alder. In fact, any scratches, bruises, or wounds you have seem to heal, and you feel more confident in yourself than ever.</p>The cigarette doesn’t last for much more than 10 minutes, though to you it felt more like an hour. You can already feel your fingers getting tingly and your head getting light just minutes after, though it goes away after half an hour or so. You’re already looking forward to your next smoke. You can hear a voice in the back of your mind telling you how bad of a habit it is, but all your fond memories of smoking with Alder deafen it.",
                        "outcomes": [
							{
                                "parameter": "nicotine",
                                "quantity": 3,
                                "change": "add"
                            },
                            {
                                "parameter": "pain",
                                "quantity": 1,
                                "change": "sub"
                            },
                            {
                                "parameter": "ritter_cigarette",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
			{
                "id": "smoke_cigarette_addicted",
                "title": "Smoke Cigarette",
                "subtitle": "Now would be a good time to have a smoke. Your troubles will wash away, literally — you’re sure of that.",
                "global": true,
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "ritter_cigarette",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "nicotine",
                        "value": 2,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "cigarette",
                "results": {
                    "success": { 
                        "text": "You dig through your pockets for a while before finding it; the cigarette you bought from Ritter! It doesn’t take you long to find the lighter Alder gave you, and with a flick, you’ve got the cigarette lit up. All it takes is a single drag for your entire body to enter a calm and relaxed state. Whether it’s the magic or just nostalgia, you feel your body reinvigorated, just the same as the first time you smoked with Alder. In fact, any scratches, bruises, or wounds you have seem to heal, and you feel more confident in yourself than ever.</p>The cigarette doesn’t last for much more than 10 minutes, though to you it felt more like an hour. You can already feel your fingers getting tingly and your head getting light just minutes after, though it goes away after half an hour or so. You’re already looking forward to your next smoke. You can hear a voice in the back of your mind telling you how bad of a habit it is, but all your fond memories of smoking with Alder deafen it.",
                        "outcomes": [
                            {
                                "parameter": "might",
                                "quantity": 2,
                                "change": "sub"
                            },
                            {
                                "parameter": "ritter_cigarette",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            }
        ],
        "npcs": [
            
        ]
    }