var area = {
        "title": "abyss",
        "header": "Abyssal Chamber",
        "nomap": "You are on the hunt, and have no time to delay.",
        "subheader": 'This unnatural arena seems to have been constructed by the accursed creatures, in a strange mimicry of a coliseum. The wide, round chamber is ringed by steps, formed of broken and crumbling stone walls and sarcophagi. Atop them, skeletons have been placed like a ghoulish audience. In the center, a massive black plinth stands, like the sacrificial altar of some hideous temple.',
        "events": [
            {
                "id": "deeper",
                "title": "The Necrophagous Beast",
                "subtitle": "Your quarry stands before you, hideously grinning.",
                "type": "statcheck", //or random
                "stat": "might",
                "difficulty": 30,
                "requirements": [
                    {
                        "parameter": "priest_quest",
                        "value": 3,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "accursedicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You draw your weapon and stand ready. Bonacieux takes a second gun from his coat, a small pistol in one hand and his shotgun in the other. You both start to move to opposite sides of the beast, ready to strike in a pincer attack.</p>Its eyes move to follow you both repulsively, like the disconnected eyes of a chameleon. It giggles again, and then speaks, in a droning, cracking voice. \"Heya Deus. Don\'t ya recognise me?\", it says. Bonacieux stops in his tracks. He looks shaken. The creature crawls down from its perch and slides up the steps of the coliseum, keeping its distance from you both. It moves with a sinuous motion, its limbs bending and twisting as if it has no joints or bones. \"I\'m offended. How could you forget me, big brother? Have you no heart at all?\", it says. It constantly sounds like it is about to laugh. Bonacieux grips his weapons tighter. \"Sept?\", he says in a choked voice. Finally, the beast laughs. Its face literally opens all the way, the upper half bending backwards as it sends cackling laughter echoing through the room.</p>\"You do remember! I was so upset when you banished me. I wandered for such a long time! Looking for something better than your stupid old fashioned magic. I found something too. You know? It was amazing. It said to me. It said\", it says, its eyes looking in odd directions as it crawls up and down and over the objects in the room.</p>\"It asked me what I wanted to be. And I said. I said. I said\", it mutters. Suddenly, it launches itself off from the side of the room. The stonework literally cracks and crumbles under the force of its leap, and it bursts through the air like a rocket to crash into Bonacieux and send him tumbling across the steps, with its entire body pinned down atop him. It opens its mouth and screams into his face.</p>\"STRONGER THAN YOU!\", it screeches.</p>You leap into action. Bonacieux is in no condition to fight that thing. You recall the motions he made when he lit the torch and campfire. They come back to you, and you find yourself replicating them, moving your fingers in a way that seems to draw in the power and energy in the air. Your hands erupt into flame, and you twist your entire body to throw the fire across the room and onto the creature\'s flank. It hisses and roars, leaping off from Bonacieux and crashing into a tomb. It screams in rage as it rushes towards you, weaving between the stone objects to avoid your fireballs. It leaps through the air again, and you dash backwards to what should have been a safe position. However, it twists in the air and turns impossibly, and suddenly its entire weight is crashing down atop you. Its long black tongue lashes out and wraps around your neck, choking you even as you struggle and pull at it. You see Bonacieux struggling to stand up, and his body pulses. It throbs again, strangely, and his jacket falls to the ground. The buckles on his armor unlock as he starts to grow. His muscles swelling and stretching, his fur growing thicker and bigger, while his body contorts and grows. He falls to all fours, the ground cracking under him, and when he turns, he is an enormous, snarling feral wolf, the size of a house. He lunges, and smashes into the accursed with a sound like an avalanche. The two of them roll into the aisles, smashing everything they touch. Finally they separate, and the accursed flees across the room. Bonacieux is covered in wounds, but the beast is hideously burned and injured.",
                        "outcomes": [
                            {
                                "parameter": "priest_quest",
                                "quantity": 4,
                                "change": "set"
                            }
                        ]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": "You draw your weapon and stand ready. Bonacieux takes a second gun from his coat, a small pistol in one hand and his shotgun in the other. You both start to move to opposite sides of the beast, ready to strike in a pincer attack.</p>Its eyes move to follow you both repulsively, like the disconnected eyes of a chameleon. It giggles again, and then speaks, in a droning, cracking voice. \"Heya Deus. Don\'t ya recognise me?\", it says. Bonacieux stops in his tracks. He looks shaken. The creature crawls down from its perch and slides up the steps of the coliseum, keeping its distance from you both. It moves with a sinuous motion, its limbs bending and twisting as if it has no joints or bones. \"I\'m offended. How could you forget me, big brother? Have you no heart at all?\", it says. It constantly sounds like it is about to laugh. Bonacieux grips his weapons tighter. \"Sept?\", he says in a choked voice. Finally, the beast laughs. Its face literally opens all the way, the upper half bending backwards as it sends cackling laughter echoing through the room.</p>\"You do remember! I was so upset when you banished me. I wandered for such a long time! Looking for something better than your stupid old fashioned magic. I found something too. You know? It was amazing. It said to me. It said\", it says, its eyes looking in odd directions as it crawls up and down and over the objects in the room.</p>\"It asked me what I wanted to be. And I said. I said. I said\", it mutters. Suddenly, it launches itself off from the side of the room. The stonework literally cracks and crumbles under the force of its leap, and it bursts through the air like a rocket to crash into Bonacieux and send him tumbling across the steps, with its entire body pinned down atop him. It opens its mouth and screams into his face.</p>\"STRONGER THAN YOU!\", it screeches.</p>You leap into action. Bonacieux is in no condition to fight that thing. You recall the motions he made when he lit the torch and campfire. They come back to you, and you find yourself replicating them, moving your fingers in a way that seems to draw in the power and energy in the air. Your hands erupt into flame, and you twist your entire body to try and throw your magical fire. You can\'t seem to control it properly though. It hisses and fizzles in the air, and the creature hears it and dodges aside. It screams in rage as it rushes towards you, weaving between the stone objects to avoid your fireballs. It leaps through the air again, and you dash backwards to what should have been a safe position. However, it twists in the air and turns impossibly, and suddenly its entire weight is crashing down atop you. Its long black tongue lashes out and wraps around your neck, choking you even as you struggle and pull at it. You see Bonacieux struggling to stand up, and his body pulses. It throbs again, strangely, and his jacket falls to the ground. The buckles on his armor unlock as he starts to grow. His muscles swelling and stretching, his fur growing thicker and bigger, while his body contorts and grows. He falls to all fours, the ground cracking under him, and when he turns, he is an enormous, snarling feral wolf, the size of a house. He lunges, and smashes into the accursed with a sound like an avalanche. The two of them roll into the aisles, smashing everything they touch. Finally they separate, and the accursed flees across the room. Bonacieux is covered in wounds, and the beast is at an advantage.",
                        "outcomes": [{
                            "parameter": "priest_quest",
                            "quantity": 4,
                            "change": "set"
                        },{
                            "parameter": "b_supplies",
                            "quantity": 1,
                            "change": "sub"
                        }]
                    }
                }
            },{
                "id": "deeper_yet",
                "title": "What Makes You Stronger",
                "subtitle": "The creature, Sept, is weakened, but still terribly dangerous. It crawls and weaves between the steps of its lair, waiting to pounce.",
                "type": "statcheck", //or random
                "stat": "magic",
                "difficulty": 30,
                "requirements": [
                    {
                        "parameter": "priest_quest",
                        "value": 4,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "accursedicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "Bonacieux moves up to you, his enormous body somehow almost silent as he steps across the stone. He looks down at you with huge amber eyes. You somehow know what he is saying. He can\'t defeat this thing on his own.</p>You take hold of his thick grey fur, and start to climb. Sept watches you both with confusion, leaving trails of ichor wherever he moves. You climb up atop Bonacieux\'s body, your legs straddling his neck. His fur is incredibly thick and soft and warm. You lean down into it, and hold onto him tightly.</p>You still don\'t fully understand it, but magic responds to you in this place. It calls out to you, wanting you to shape it. You just have to have the will to hold onto it. You close your eyes and focus on Bonacieux\'s warmth and fur. His strength and experience, his desire to protect. You draw on all of it and feel magic flowing through you like a cool river.</p>The arena is engulfed in blinding white light. Sept hisses in despair, and the accursed lurking above flee from the radiance. You open your eyes, and see that Bonacieux\'s fur is glowing white, and he is covered in flickering colourless flame. You hold on tightly as he leaps across the arena, leaving trails of fire in the air. Sept flees and dodges pounce after pounce, light tracking darkness in this arena beneath the earth. Finally he has nowhere to run, nowhere that isn\'t covered in flame. He scrambles to the altar, and Bonacieux comes crashing down atop him, shattering it into a thousand pieces and crushing Sept beneath his paws. The creature sputters and chokes on its own black blood as it hisses. \"Brotherrrrr\", it croaks.</p>\"You are not my brother\", Bonacieux intones in an echoing voice. His jaws open, and crunch down in a single, final motion.</p>Sept\'s body melts and collapses in the remains of his temple. The battle is over.",
                        "outcomes": [
                            {
                                "parameter": "priest_quest",
                                "quantity": 5,
                                "change": "set"
                            }
                        ]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": "Bonacieux moves up to you, his enormous body somehow almost silent as he steps across the stone. He looks down at you with huge amber eyes. You somehow know what he is saying. He can\'t defeat this thing on his own.</p>You take hold of his thick grey fur, and start to climb. Sept watches you both with confusion, leaving trails of ichor wherever he moves. You climb up atop Bonacieux\'s body, your legs straddling his neck. His fur is incredibly thick and soft and warm. You lean down into it, and hold onto him tightly.</p>You still don\'t fully understand it, but magic responds to you in this place. It calls out to you, wanting you to shape it. You just have to have the will to hold onto it. You close your eyes and focus on Bonacieux\'s warmth and fur. His strength and experience, his desire to protect. You draw on all of it and feel magic flowing through you like a cool river.</p>The arena is engulfed in blinding white light. Sept hisses in despair, and the accursed lurking above flee from the radiance. You open your eyes, and see that Bonacieux\'s fur is glowing white, and he is covered in flickering colourless flame. You hold on tightly as he leaps across the arena, leaving trails of fire in the air. Sept flees and dodges pounce after pounce, light tracking darkness in this arena beneath the earth. Finally he has nowhere to run, nowhere that isn\'t covered in flame. He scrambles to the altar, and Bonacieux comes crashing down atop him, shattering it into a thousand pieces and crushing Sept beneath his paws. The creature sputters and chokes on its own black blood as it hisses. \"Brotherrrrr\", it croaks.</p>\"You are not my brother\", Bonacieux intones in an echoing voice. His jaws open, and crunch down in a single, final motion.</p>Sept\'s body melts and collapses in the remains of his temple. The battle is over.</p>Or is it? Something is wrong. The light gleaming from Bonacieux\'s fur flickers weakly. You look down, and see the slimy remains of Sept starting to crawl up his forepaw, in the places where your magic has left an opening. He backs off, and claws at it, but it soaks into his skin and makes him roar in agony.",
                        "outcomes": [{
                            "parameter": "priest_quest",
                            "quantity": 5,
                            "change": "set"
                        },{
                            "parameter": "b_supplies",
                            "quantity": 1,
                            "change": "sub"
                        }]
                    }
                }
            },{
                "id": "badend",
                "title": "Stronger Than You",
                "subtitle": 'Something is wrong with Bonacieux. His eyes are wide and yellow, and slavering drool is frothing from his jaws.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "priest_quest",
                        "value": 5,
                        "comparison": "equal" //default greater
                    },{
                        "parameter": "b_supplies",
                        "value": 0,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "vorefetish",
                "results": {
                    "grizzpay": {
                        "text": "You back away from Bonacieux as he thrashes and twists his head. He roars, the sound of it sending rocks crashing down from above. One massive paw steps towards you, leaving cracks in the ground. His head turns towards you, his eyes focusing on you, and starting to glow. Glowing pure white, with no pupils, just like the accursed.</p>As the enormous wolf steps closer and closer, you see his cock starting to emerge from his sheath. It is huge, and veiny. The pointed tip drips with pre, and his knot bulges and swells as it becomes the size of a beachball. His cock is bigger than your entire body is, and if he uses that thing on you, you will surely die.</p>You flee, trying to duck between the seats where the enormous wolf can\'t reach, but he leaps ahead of you at every turn, his enormous jaws snapping and biting mere inches from your body. He seems to be toying with you, corralling you like a sheepdog as you get more and more exhausted. Whenever you start to falter, his teeth snap closer to you and you are forced to flee again in terror until finally, hours later, you collapse near the altar.</p>Your body is utterly exhausted. You can\'t move at all. You know how it must feel to be a wild deer, hunted to breaking point by wolves. He steps over you, his enormous body musky and hot with exertion. His gigantic cock pushes down, and the tip of it presses into your ass. You whimper in pain as it stretches you. Every inch that sinks in is absolute agony as your ass struggles to contain an impossibly huge cock, yet somehow it manages it. He sinks deeper and deeper into you, your insides moving out of the way to make room for him.</p>You see black, slippery darkness starting to writhe around his legs and chest, slowly covering his silver fur in glistening, unnatural darkness. The blackness spreads over you, too, soaking into your skin and squeezing you even tighter against that cock.</p>Your mouth stretches open wide, and you gag as the wolf\'s pointed tip forces its way out from your lips. Black, corrupted pre oozes and drips from it, and as it spreads around your body, it pins your limbs tightly against the throbbing hardness. You feel your body merging and fusing with Bonacieux\'s shaft, his massive black shiny knot becoming your crotch, his throbbing eternally hard shaft your torso, and your vision and senses fading away as your head becomes his cockhead.</p>Your vision darkens, followed by your hearing. There is only touch, the eternal, endless, needy pleasure of your cock form. Touch and taste, from the constant flow of oily, musky cum that oozes from your mouth. The beast that used to be Bonacieux prowls the catacombs, a monstrously enormous black wolf, hunting for prey to rape and devour. You are along for the ride, your mind crumbling and disappearing slowly as you succumb to the corruption sinking deep inside you.",
                        "trapped_desc": "The rock-hard shiny smooth wolf cock of the Beast of Dormaus is here",
                        "trapped": 'You are the massive, glistening jet-black cock of a monstrous wolf monster that prowls beneath Dormaus Village',
                        "outcomes": []
                    }
                }
            },{
                "id": "leavedone",
                "title": "Return Above",
                "subtitle": "It's finally over. This was the most dangerous battle you've faced in this world so far, but you are victorious.",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "priest_quest",
                        "value": 5,
                        "comparison": "equal" //default greater
                    },{
                        "parameter": "b_supplies",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "duelpistol",
                "results": {
                    "rareSuccess": {
                        "text": "Bonacieux says nothing, and does not change from his wolf form. You cling to him as he scales the sides of the chasm and runs through the catacombs. His enormous paws move like the wind as you leave this repulsive place behind.</p>Finally, you emerge back into the sunlight, and the old wolf shrinks and changes, reverting slowly back to his normal form. He falls to his knees, naked and exhausted, with his belongings clutched in one hand.</p>He stands up, and looks over to you with a struggling smile. \"Thank you. I could not have done this without you. You have freed me from a heavy burden. I know I said we could discuss other matters, but...I need some time first. Please forgive me\", he says.</p>He takes something from the bundled up jacket in his hand. It\'s the pistol he was using alongside his gun. It\'s beautiful, and engraved with silver. He hands it to you. \"I think this will be better in your hands\", he says.</p>He walks back into the church, his head hung low. You hold the gun in your hand, and turn it over. There are words engraved in the smooth, polished handle.</p>\"For my little brother. I will always protect you. Deus.\"",
                        "area": "churchyard",
                        "outcomes": [
                            {
                                "parameter": "b_supplies",
                                "quantity": 0,
                                "change": "set"
                            },{
                                "parameter": "priest_quest",
                                "quantity": 6,
                                "change": "set"
                            },{
                                "parameter": "pistol",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "savemebat",
                "trapped": true,
                "title": "Mr Bat, In His Element",
                "subtitle": "How many decades has it been? There is nothing left of either of you at this point. Nothing but a mindless beast.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "mrbat",
                "results": {
                    "rareSuccess": {
                        "text": "The black wolf crawls through the catacombs, sniffing and hunting for prey. It has become known as the Beast of Dormaus, a terrifying accursed of legendary strength and power. Countless heroes have fallen to its wrath. The town above is completely deserted, the people having fled to avoid the thing that hunts at night, dragging screaming people down into its lair to inflict unspeakable torments on them.</p>It walks along, not noticing the shape hanging from the ceiling above. The shape drops down, wings unfolding, as a dapper vampire bat lands on the wolf\'s flank. The creature twists and roars, snapping and snarling, but the bat moves like a dancer, dodging easily out of the way. After another lunge, the bat ducks down and gently touches the wolf\'s ever-erect cock with one hand. The wolf freezes in place, suddenly trapped.</p>\"I apologise for the delay. Certain aspects of your current living quarters make it slightly more difficult for me to take action. Nonetheless, I am here\", the bat says.</p>He opens a pocket watch, and gently turns the hand on it backwards with his thumb. Suddenly, everything seems to be falling, swirling, disappearing...</p>You are standing at the crypts, waiting to enter the depths alongside Bonacieux. You have a terrible headache, and you have no idea why.",
                        "freeTrap": true,
                        "area": "churchyard",
                        "outcomes": [
                            {
                                "parameter": "b_supplies",
                                "quantity": 2,
                                "change": "set"
                            },{
                                "parameter": "priest_quest",
                                "quantity": 1,
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