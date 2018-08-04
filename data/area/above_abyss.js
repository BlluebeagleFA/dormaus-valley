var area = {
        "title": "above_abyss",
        "header": "Approach to an Abyss",
        "nomap": "You are on the hunt, and have no time to delay.",
        "subheader": 'The catacombs stop here, suddenly and dramatically. The walls and floor have fallen away, disappearing into a massive hole in the earth. From deep below, a sinister pale light is glowing and flickering. On the far walls, you can see the faint outline of creatures moving and crawling in the dark.',
        "events": [
            {
                "id": "allout",
                "title": "Out of Supplies",
                "subtitle": "Bonacieux is completely out of supplies. You cannot continue at this rate - clearly he misjudged what was needed for the trip.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "b_supplies",
                        "value": 0,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "supplies",
                "results": {
                    "footstool_1": {
                        "text": 'You try to insist that you can carry on regardless, but he shakes his head. "No, absolutely not. If I ran out then that means that I underestimated the dangers lurking down here. To progress on at this point would be to throw caution to the wind. We will return to the church and regroup", he demands.</p>You reluctantly concede, and the two of you gradually return to the surface. The sun feels extremely calming and safe after the unsettling gloom beneath the earth.',
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
            },{
                "id": "replenish",
                "title": "Replenish Bonacieux",
                "subtitle": "His supplies are running low. You could stop for a moment and use some of your own to help him out.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "b_supplies",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },{
                        "parameter": "b_supplies",
                        "value": 2,
                        "comparison": "less" //default greater
                    },{
                        "parameter": "supplies",
                        "value": 1,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "supplies",
                "results": {
                    "footstool_1": {
                        "text": "You ask Bonacieux to stop and set up camp so that you can restore your energy. He looks reluctant, until you demonstrate that you have brought ample extra supplies. He raises one eyebrow. \"Goodness! You certainly came prepared. I made the right decision in asking you to assist, my child\", he says.</p>He helps you gather up stones and tinder from the ruined brickwork to construct a campfire pit, and you use some fire logs from your pack of supplies to set up the fire. You struggle initially with your flint and tinder to start up the wood in these dark, damp catacombs, but Bonacieux assists you by snapping his fingers and summoning a gleaming white light that rapidly engulfs the wood. \"Sorcery isn\'t my specialty, but you pick up a few tricks here and there if you spend any time in the valley\", he explains.</p>Once the fire is up, Bonacieux removes his jacket and relaxes near the warmth. You can\'t help but notice the hard, strong working muscles in his arms under his thick grey fur, and the stout and powerful body barely concealed by his peculiar armour. His age has not made him any less strong, it would seem. His long, bare grey paws turn gently by the fire, and you notice a thin scratch along the base of his left foot. He sees you looking, and makes a dismissive wave of his hand. \"Just a minor annoyance. Some of the stone around here is sharper than it appears. Well worth it to not be constrained by boots in the event that I need to really push my abilities\", he explains.</p>You grab some cleansing oil and a bandage from your pack, and he briefly protests by saying it\'s really not necessary. He doesn\'t resist, though, when you pour out a capful of the oil and begin to massage it into his foot. His paw is long and strong, and you can feel the tense, powerful muscles under his fur as you stroke and squeeze his foot with your thumbs and fingers. You rub the oil over his thick black pawpads, feeling the smooth bulging flesh and stroking away all the dust and grime of the trip. You then take a small amount of gauze and wrap it around the scratch, and he flexes his clawed toes.</p>\"You make a very tender nurse, I see. Perhaps you could help me with this bone, it\'s been throbbing quite severely since you started rubbing my paw\", he says. You look up to see both his big toothy grin, and the thick red cock between his legs, which he has pulled out from his pants and is slowly stroking with his large furry hand. You move up closer to him, and he strokes the firm warm flesh of his canine cock against your cheek. Pre oozes from the pointed tip, and slides slowly down your face, as he marks you with his scent.</p>He pulls his hand away, and you take over, holding onto his thick veiny shaft and sliding your hand up and down it, feeling the weight and girth of the older wolf\'s manhood. His base starts to throb and swell, bulging out into the hard, large shape of a powerful knot. You use one hand to hold his shaft, and the other to stroke and squeeze his knot as you lower your mouth over the tip of his cock.</p>It is warm, and musky, but clean as you suck him. His salty pre oozes over your tongue and down your throat, and he bucks and thrusts a little, starting to pant with pleasure as you service him. You slide your head down further, feeling his cock slide down past the back of your tongue and into your throat. His hand presses down onto your head, pushing you further as he grunts and pants. You let him take charge, pushing and pulling your head, and thrusting deep into your throat as he gets closer to orgasm. Finally, he growls and snarls, as he thrusts so deep that your lips kiss against his knot. His cock stiffens, and you feel his hot, thick cum rush into your throat. Thick loads fill you deeply, one after the other in hot, sticky ropes. Gradually, the flow of cum lessens, and he releases his grip and allows you to pull your head free. He chuckles. \"It seems age has not lessened my libido, nor your attraction to me. Now, let us clean ourselves up and get back to work, I am feeling greatly refreshed!\"",
                        "outcomes": [
                            {
                                "parameter": "b_supplies",
                                "quantity": 1,
                                "change": "add"
                            },{
                                "parameter": "supplies",
                                "quantity": 2,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },{
                "id": "descent",
                "title": "Descent",
                "subtitle": "This may be your last chance to resupply before you find your target. Proceed only when you are truly ready.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "b_supplies",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "default",
                "results": {
                    "footstool_1": {
                        "text": "You nod to Bonacieux. You are ready to face whatever horror lies below. He motions you to follow his lead, and begins to descend the narrow ring around the interior of the pit. It is shaped like the thread on a screw, almost as if this shaft was created by some titanically enormous drill. As you descend, he occasionally stops and pulls you back against the wall, as he waits for one of the crawling creatures to move past without seeing you.</p>After what feels like hours of careful, nerve-wracking climbing, you finally reach the bottom. The pit ends at a bizarre construction, a coliseum formed of scavenged grave markers from the catacombs above. You and Bonacieux walk down the abandoned stairs, towards a massive altar in the center.</p>Standing over it, hunched over and grinning hideously, is unmistakably the creature you came here to defeat. It is unlike any of the other corrupted, who have mostly retained their shapes and forms, with unnatural traits atop them. Instead, it is utterly unnatural. Long, thick claw hands and feet clutch onto the altar. The body is glistening black and red, with exposed muscle and bizarre bone plates in strange places. Its head hangs from the end of a long, crooked neck, covered in a bony helmet with a repulsive long black tongue oozing from the front.</p>It giggles and twitches as you approach. The other accursed stand far above, watching silently, drawn here by some strange power the beast possesses.",
                        "area": "abyss",
                        "outcomes": [
                            
                        ]
                    }
                }
            }
        ],
        "npcs": [
        ]
    }