var area = {
        "title": "lionquest_aceboot",
        "header": "On Ace's Feet",
        "nomap": "You are far from home and you don't know your way back.",
        "subheader": 'You are a pair of leather boots, with Ace\'s big dirty feet filling you',
        "events": [
            {
                "id": "resistcock",
                "title": 'Life of Boots',
                "subtitle": 'You must focus your mind, remember who you are, and not lose yourself to inanimate thoughts.',
                "type": "statcheck",
                "stat": "magic",
                "difficulty": 20,
                "requirements": [
                    {
                        "parameter": "curse",
                        "value": 2,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "aceicon",
                "results": {
                    "success": {
                        "text": 'Life as a boot is simple and unpleasant. Ace\'s weight presses down on you, step after step, hour after hour, and the stink of his big furry feet fills you more and more. You only get relief when he pulls you off and lets you air out. Usually this is just before bed, and he will leave you at the edge of the tent so his stink can ooze from your opening and keep away other animals. Sometimes this is by the side of a creek while he rests his paws in the water, a rare occurrence that you look forward to, because it means he\'ll be a little less smelly when he slides his foot back inside your body and fills you up.</p>Dealing with this is just a matter of endurance.</p>There is one issue though. The magic that Ace used to transform you is still lingering in the leather of your new boot form, and you are constantly tempted to make use of it. If you were to take the transformation a little further, Ace\'s rank stench wouldn\'t be so unbearable. The filth he grinds into your sole wouldn\'t taste so bad. In fact, all of it would probably feel good. With the mind of a boot, you would get pleasure and enjoyment from being used in that way. The next time you feel his dirty toes sliding inside you, and his foot stretching your body, you are very tempted to use the spell to turn this from torture into pleasure. Fortunately, you resist. It\'s only a few more days, right?',
                        "outcomes": [
                            {
                                "parameter": "time",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    },
                    "fail": {
                        "text": 'Life as a boot is simple and unpleasant. Ace\'s weight presses down on you, step after step, hour after hour, and the stink of his big furry feet fills you more and more. You only get relief when he pulls you off and lets you air out. Usually this is just before bed, and he will leave you at the edge of the tent so his stink can ooze from your opening and keep away other animals. Sometimes this is by the side of a creek while he rests his paws in the water, a rare occurrence that you look forward to, because it means he\'ll be a little less smelly when he slides his foot back inside your body and fills you up.</p>Dealing with this is just a matter of endurance.</p>There is one issue though. The magic that Ace used to transform you is still lingering in the leather of your new boot form, and you are constantly tempted to make use of it. If you were to take the transformation a little further, Ace\'s rank stench wouldn\'t be so unbearable. The filth he grinds into your sole wouldn\'t taste so bad. In fact, all of it would probably feel good. With the mind of a boot, you would get pleasure and enjoyment from being used in that way. The next time you feel his dirty toes sliding inside you, and his foot stretching your body, you are very tempted to use the spell to turn this from torture into pleasure.</p>When the heat from the day causes his paws to begin to fill your insides with a puddle of stinking coyote sweat, your resistance finally shatters. You can\'t take it anymore! You take control of the magic that is invisibly wrapped around your leather body like spiderwebs, and push yourself further and deeper into your transformation. Gradually, the world around you starts to feel different. Your vision and hearing dull, but your sense of taste and smell start to grow more and more intense. You can taste every inch of Ace\'s huge dirty paw inside you, his toes on your tongue, his sweat over every inch of your mouth. The disgust of it starts to fade, as you find yourself enjoying it, even craving it. Your mind fades and becomes weaker, as you become more comfortable and soft, changing your form and mind to be a better boot. That night, when Ace tugs you off, you miss his nasty stink and feel hollow and empty as you sit and air out. Bit by bit, you are losing your identity, and wanting to be nothing but an object.',
                        "outcomes": [
                            {
                                "parameter": "curse",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "cursed",
                "title": 'Melt Away in Master\'s Sweat',
                "subtitle": 'You have given into the spell too much. There is nothing of you left.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "curse",
                        "value": 1,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "curse",
                "results": {
                    "success": {
                        "text": 'Finally, after weeks of travel, Ace walks through the gates of Dormaus Valley. He grins at the familiar sight of the little town, and sighs in the cool air of this more temperate part of the world. "Alright partner, time to go", he says. He reaches down, and pulls off his boot, which steams with hot, musky stink. Sweat drips from his paw as he lifts the boot up and shakes it. He grunts with annoyance when nothing seems to happen. "Come on. Let\'s go, I haven\'t got all day!", he says. The boot does nothing. Then he notices that the patterns and engravings on the front of it, which showed that it was a living, conscious being, seem to have worn off and faded away. In his hand is nothing but a dirty leather boot.</p>Nervously, he lifts the boot to his nose, and takes a sniff of the inside. He senses nothing but his own scent, the powerful and ripe stench of a masculine coyote. There\'s not even a hint of the adventurer that transformed into this object anymore. "Wow. You went all the way, huh? I\'m flattered, I guess. I\'ll treat you right. The hell, I\'m talking to a freaking mindless piece of shoe leather...", he says, then sighs. He lowers the boot down and pushes his foot back into it, then walks off to the bar.</p>Ace is as good as his word. He takes good care of his new boots, though he does forget what their name used to be. He polishes them, cleans them, and keeps them in good condition for years. You are not aware of any of this, of course. You have no mind or identity at all. You are just a pair of comfortable leather boots, obediently serving your owner forever.',
                        "trapped_desc": 'Ace\'s big leather boots are as dirty and smelly as ever.',
                        "trapped": 'You are Ace\'s boots. You have no mind, no desires. You are just an object, that will serve your master forever.',
                        "outcomes": []
                    }
                }
            },{
                "id": "savemebat",
                "trapped": true,
                "title": "Save those boots, Mister Bat!",
                "subtitle": "Ace doesn't recognise the peculiar tall bat that enters the casino one day, but he never says no to a gamble.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "mrbat",
                "results": {
                    "rareSuccess": {
                        "text": 'Ace blinks in slight surprise as he looks across the table to see a tall bat sitting at the chair. He could have sworn he didn\'t see anyone come in. The bat reaches over and shuffles the deck of cards, then smiles pleasantly. "Hello, Ace. I would like to play cards, if you would be so kind", he says. Ace shrugs and gets out his chips. One mark is as good as another.</p>A few hands later and Ace is staring at the table in disbelief. The bat wins every single round, and however he\'s cheating, Ace can\'t seem to see it. The bat places his cards down, revealing another winning hand. "I would like to go for one more hand, if you don\'t mind. Perhaps all my chips, against those boots you are wearing?", he says. Ace growls. "You\'re on!"</p>A few minutes later, Ace is sulkily resting his boots on the table while the bat pulls them off. He doesn\'t even flinch at the stench, and simply leaves with a short bow, leaving all his other winnings behind. He takes the boots outside, places them on the ground, and waves his wings over them. You feel yourself suddenly rising up and awakening, your mind rousing from inanimate emptiness as you look up at the familiar bat with confusion. "Please do be more careful in future", he says, before bowing and leaving.',
                        "freeTrap": true,
                        "outcomes": [
                            {
                                "parameter": "curse",
                                "quantity": 0,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "nextfromcock",
                "title": 'Finally Home',
                "subtitle": 'It has been one hell of a journey',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "time",
                        "value": 1,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "guilt",
                        "value": 2,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "aceicon",
                "results": {
                    "grizzsex": {
                        "text": 'You slowly awaken from what feels like a long dream. Someone is saying your...name? You have a name? You are tasting your master\'s feet, like a good boot. You blearily open what you vaguely know to be eyes, and look up. Your...owner? He is above you, looking down at you with concern as you hold his foot in your hands and lick the toes. "Come on, get it together. I had to get that smug cat to help me with the undo this time. I ain\'t got time to stand here all day. Are you still you in there?" he says. Slowly, you let go of his feet, and stand up weakly. Ace pats your head. "I think I better take these paws away before you have a relapse, boots. Best of luck, partner", he says. You stare longingly at his bare feet as he enters the tavern. You are not sure you are quite the same as you were before you started this trip. Paws...Feet...',
                        "area": "dormaus_entrance",
                        "outcomes": [
                            {
                                "parameter": "time",
                                "quantity": 0,
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