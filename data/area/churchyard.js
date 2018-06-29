var area = {
        "title": "churchyard",
        "position": [0.74,0.57],
        "header": "Churchyard",
        "subheader": 'The churchyard is a place of quiet and respite from the otherwise busy streets of Dormaus. Benches sit amongst the grass, under the shade of tall trees. To the north, the wooden church itself stands, with a tall pointed bell tower atop it.',
        "events": [
            {
                "id": "inspect_gargoyle",
                "title": "Examine the Gargoyles",
                "subtitle": 'You walk up the path to the church, and notice something about the statues at the sides of the doorway. While twisted, monstrous stone gargoyles perch atop the door and to the side, one of the platforms where they stand is empty. You think you can see something glinting in the eaves above the empty platform. Do you want to climb up and take a closer look?',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 5,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "grizzsex": {
                        "text": 'You heave yourself up onto the stone platform, and scramble on the cold smooth pedestal. Standing up, you look into the glinting eave, and see only an old penny, strangely stuck into a crevice in the brick. It\'s worthless, so you turn and start to climb back down, only to discover that your feet seem to be stuck to the pedestal. You struggle, but they won\'t move at all. </p>You feel your toes shifting and straining, and you growl strangely as your feet start to stretch out. Your toes curve out into enormous, powerful talons, and the flesh begins to turn to smooth, cold grey stone. Your legs thicken with muscle, but the power and strength comes with a bizarre and smooth coldness when your flesh turns to stone. A long, thick dragon-like tail curves out from behind you, and your hands stretch and grow as they become mighty talons, capable of crushing rock to powder. You snarl with the sound of rocks grinding together, as your back aches and throbs. Two enormous stone wings tear out from behind you, and flap in the air. </p>Your hair falls out, leaving your head smooth and grey, before two thick and heavy horns bulge out from your skull, and curve behind you. Your face becomes stern and fierce as your mouth and nose pushes forward into a beak-like muzzle, filled with sharp stone teeth. Your feet finally move again, and you stumble and fall from the pedestal. Your wings flap, and you land heavily in the soil. You feel incredibly powerful and deadly, and your insides are as cold and still as stone.',
                        "descriptionchange": "This player is a tall, winged stone monster. Their face is curved into a powerful beak-like muzzle, and they have long and powerful horns made of cold granite.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 5,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "mummy_m",
                "title": "An Out-of-Place Tomb",
                "subtitle": 'One of the tombs is very unlike the others. It\'s pyramidal, and decorated in sandstone. [Guest event from OsirionMummy]',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "gender",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "inanimatefetish",
                "results": {
                    "grizzpay": {
                        "text": 'The graveyard is covered with fog and vines cover the pathways. Suddenly dirt gives way to sand and you happen upon a large sandstone crypt. A desert heat beats down on you, encouraging you to take refuge inside the tomb. Torches light your way into a large chamber. </p>Open sarcophagi lay in rows. Most are empty, with their lids off to the side. But some are occupied. You hear muffled moans coming from inside the stone boxes.</p>At the center of the chamber lays a golden sarcophagus. With a grinding sound, the lid opens revealing bandaged jackal with glowing yellow eyes. He shuffles towards you from a golden sarcophagus. "Hello. Welcome to my necropolis!"</p>"Over the centuries, many have sought immortality. It is here, where they’ve found it." The jackal opens a nearby sarcophagus to reveal a squirming mummified male. His arms are crossed over his chest, his legs and tail wrapped together, his cock fastened proudly to his stomach. Over his face, a golden burial mask of a stoic fox. "He has been here for millennia, undisturbed."</p>His eyes stare at yours as his soft, cloth-covered paws pet your chin. They comfort you as the jackal chuckles, "You’ve traveled so long. You deserve an eternal rest…"</p>You feel tired while looking into the jackal’s hypnotic eyes. And you say yes to the jackal’s comforting words. "Wonderful! You can be assured that my mummies have the best quality. Not that you\'ll find another embalmer like me out there," the jackal chuckles as he leads you to a sandstone altar. </p>In ceremonies that last for days but to you seems like minutes, the jackal anoints you with oils, preserving your body.</p>Your master pumps your hardened cock, spilling your juices onto the altar over and over. Gradually your flesh begins to lose moisture until your cock and your entire body is a jerkied shell of its former self.</p>The jackal chants over your body as bandages crawl from their stone cabinets and adhere to your limbs. As the bandages tightly wrap, they leave not one hair or patch of skin free. And eventually they cover your eyes, snuffing out your vision.</p>Another layer is added to you, and another. Finally the flurry of bandages seems to stop. And the jackal picks you up, taking you to your sarcophagus. A golden burial mask is placed on your head, where it adheres tightly.</p>In darkness, you feel one last stroke on your sensitive bandaged cock. "Sweet dreams, my slave." You hear the lid closing over your tomb, and then nothing…',
                        "trapped_desc": "There is a lifeless mummy in a golden sarcophagus here.",
                        "trapped": 'You are trapped in the darkness of a glorious sarcophagus. Your body is a silent still mummy, wrapped tightly in bandages, and adorned in golden ornaments. You will remain here forever.',
                        "outcomes": []
                    }
                }
            },{
                "id": "mummy_f",
                "title": "An Out-of-Place Tomb",
                "subtitle": 'One of the tombs is very unlike the others. It\'s pyramidal, and decorated in sandstone. [Guest event from OsirionMummy]',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "gender",
                        "value": 2,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "inanimatefetish",
                "results": {
                    "grizzpay": {
                        "text": 'The graveyard is covered with fog and vines cover the pathways. Suddenly dirt gives way to sand and you happen upon a large sandstone crypt. A desert heat beats down on you, encouraging you to take refuge inside the tomb. Torches light your way into a large chamber. </p>Open sarcophagi lay in rows. Most are empty, with their lids off to the side. But some are occupied. You hear muffled moans coming from inside the stone boxes.</p>At the center of the chamber lays a golden sarcophagus. With a grinding sound, the lid opens revealing bandaged jackal with glowing yellow eyes. He shuffles towards you from a golden sarcophagus. "Hello. Welcome to my necropolis!"</p>"Over the centuries, many have sought immortality. It is here, where they’ve found it." The jackal opens a nearby sarcophagus to reveal a squirming mummified male. His arms are crossed over his chest, his legs and tail wrapped together, his cock fastened proudly to his stomach. Over his face, a golden burial mask of a stoic fox. "He has been here for millennia, undisturbed."</p>His eyes stare at yours as his soft, cloth-covered paws pet your chin. They comfort you as the jackal chuckles, "You’ve traveled so long. You deserve an eternal rest…"</p>You feel tired while looking into the jackal’s hypnotic eyes. And you say yes to the jackal’s comforting words. "Wonderful! You can be assured that my mummies have the best quality. Not that you\'ll find another embalmer like me out there," the jackal chuckles as he leads you to a sandstone altar. </p>In ceremonies that last for days but to you seems like minutes, the jackal anoints you with oils, preserving your body.</p>Your master stuffs your clit with oil-soaked bandages. The bandages give you a tingly feeling inside as they draw out moisture from your body and turn your entire body into jerky.</p>The jackal chants over your body as bandages crawl from their stone cabinets and adhere to your limbs. As the bandages tightly wrap, they leave not one hair or patch of skin free. And eventually they cover your eyes, snuffing out your vision.</p>Another layer is added to you, and another. Finally the flurry of bandages seems to stop. And the jackal picks you up, taking you to your sarcophagus. A golden burial mask is placed on your head, where it adheres tightly.</p>In darkness, you feel one last stroke on your sensitive bandaged clit. "Sweet dreams, my slave." You hear the lid closing over your tomb, and then nothing…',
                        "trapped_desc": "There is a lifeless mummy in a golden sarcophagus here.",
                        "trapped": 'You are trapped in the darkness of a glorious sarcophagus. Your body is a silent still mummy, wrapped tightly in bandages, and adorned in golden ornaments. You will remain here forever.',
                        "outcomes": []
                    }
                }
            },{
                "id": "wolf_ghost_male",
                "title": "Read a Gravestone",
                "subtitle": 'One of the stones in the churchyard draws your eye. For a moment, you thought you saw someone sitting on it.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "gender",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "default",
                "results": {
                    "grizzsex": {
                        "text": 'You feel a chill in your spine, and shudder as you turn to look at a mossy gravestone at the side of the churchyard. Something makes the hair on the back of your neck stand up with trepidation. You brush the moss away, but the name on the stone is unreadable. When you stand up, you have a powerful feeling that there is someone behind you. You turn, and see the shadowy outline of a wolf only slightly visible in the air. His eyes are just glowing yellow lights. </p>Before you can react, he steps forward, his insubstantial body moving into yours with an icy cold, tingly sensation. Your struggle to move, your body no longer reacting under your own power. Your face twists into a new expression, a cruel and smug grin. You feel your body moving seemingly of its own accord, as your hand strokes down your belly and grips around your cock. You pant and moan, with a rough and scratchy voice. You are pounding your cock like you haven\'t felt sexual pleasure in decades. The intensity of your strokes are almost painful, and before long, you are panting and shaking. Your cock spurts and shakes, spraying hot white jizz all over the gravestone. As the sexual pleasure fades, you feel a coldness move out of you, and you see the grinning face of a shadowy wolf before he disappears into the foggy air.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "wolf_ghost_female",
                "title": "Read a Gravestone",
                "subtitle": 'One of the stones in the churchyard draws your eye. For a moment, you thought you saw someone sitting on it.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "gender",
                        "value": 2,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "default",
                "results": {
                    "grizzsex": {
                        "text": 'You feel a chill in your spine, and shudder as you turn to look at a mossy gravestone at the side of the churchyard. Something makes the hair on the back of your neck stand up with trepidation. You brush the moss away, but the name on the stone is unreadable. When you stand up, you have a powerful feeling that there is someone behind you. You turn, and see the shadowy outline of a wolf only slightly visible in the air. His eyes are just glowing yellow lights. </p>Before you can react, he steps forward, his insubstantial body moving into yours with an icy cold, tingly sensation. Your struggle to move, your body no longer reacting under your own power. Your face twists into a new expression, a cruel and smug grin. You feel your body moving seemingly of its own accord, as your hand strokes down your belly and against your pussy. "Never had one of these before...", you find yourself saying, with a rough and scratchy voice. You slide your fingers into yourself, and start to thrust and pump into your pussy like you haven\'t felt sexual pleasure in decades. The intensity of your fingering is almost painful, and before long, you are panting and shaking. Your body pulses with an intense and hot orgasm that leaves you moaning and your body almost steaming with warmth in the cold air. As the sexual pleasure fades, you feel a coldness move out of you, and you see the grinning face of a shadowy wolf before he disappears into the foggy air.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "churchyard_random",
                "title": "Explore the Churchyard",
                "subtitle": "It is strangely cold here, even when the sun is shining brightly.",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "Ghost Fox": {
                        "text": 'You hear a grunting and moaning from the churchyard, and walk around behind a tree to see a peculiar sight. A fox adventurer is sitting pantsless on the grass, moaning and humping with his tail raised. When you get closer, you see that there is another fox, or something like one. Atop the adventurer is a ghostly, faint blue image of a fox with a horny, lustful grin. </p>The ghost\'s translucent cock is ramming into the living fox\'s ass, and he\'s feeling it as if it were as solid as any real cock. You hear a faint voice, sinister yet almost like just noise in the wind. "Yes, cum for me. Release your life essence!" it says. The living fox whimpers, and strokes his own throbbing cock, before moaning and spraying his cum all over the grass. When he does, his orange fur starts to look strange. His cock is still leaking and spraying something, but it almost looks like glimmering, shining sparkles, that are flowing out from him and up into the ghostly fox above. </p>The living fox\'s cock starts to turn transparent and ghostly, and he yelps as he looks at his hands and realises he can see right through them! Slowly, his orange fades to an icy, barely-visible blue, and he begins to float up off the ground. He turns and spins, confused and aroused, until the other fox ghost grabs him and squeezes him possessively. </p>The other ghost is much more visible now, almost like a floating blue ordinary fox. "Your life force felt great, new guy. You\'ll make a fun little ghost slave for me." he whispers. The wind rises up suddenly, and you are forced to blink. When you open your eyes, you see no one in the churchyard with you at all.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
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