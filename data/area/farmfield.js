var area = {
        "title": "farmfield",
        "header": "Scrubby Farmland",
        "nomap": "You don't know your way around this area yet. You'll have to navigate on foot.",
        "subheader": 'The farmland is tangled with weeds here, with only a few weak trees standing up from the long grass. It leads up to the rocky sides of a rising mountain, where the dark mouth of a strange cave looms. The cave is criss-crossed with paper talismans and you strangely cannot pass them.',
        "events": [
            {
                "id": "farmfield_w",
                "title": "Travel West to Turner's House",
                "subtitle": "It will only take a few minutes to get back to the farmhouse",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You leave the muddy farm and make your way back to the farmhouse.",
                        "area": "farmhouse",
                        "outcomes": []
                    }
                }
            },{
                "id": "farmfield_e",
                "title": "Enter the Dark Cavern",
                "subtitle": "Your Digger's permit causes the protective charms to move aside when you get close",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "digger",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You push nervously past the glowing charms, but their strange resistive force seems to have dissipated. The dark caverns lie beyond.",
                        "area": "cavernentrance",
                        "outcomes": []
                    }
                }
            },{
                "id": "ram_tf",
                "title": "Help Round Up Sheep",
                "subtitle": 'A massive shaggy sheepdog is panting and leaning on the fence. Beyond it, you can see a number of sheep, scattered around and wandering off. He sees you and waves. "Hey there friend! Dinnae suppose you could help? I need someone tough who can keep these ladies in line!", he says.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 33,
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
                        "text": "You nod, and get closer to the sheepdog. He\'s quite portly, though it may just be because of his thick coat of long, shaggy fur. He wipes his long fringe out of his eyes before explaining his problem. \"Aye, having a tough time today, I am. These she-devils just willnae listen to me! I need em to stay put else\'or some wolf\'ll gobble em up, but they dinnae respect me. Need someone to put em in line!\", he says. You doubt it will be all that difficult to intimidate a bunch of rambunctious sheep, so you agree and hop over the fence.</p>At first, it\'s harder than you thought. The sheep scatter whenever you get close, and you find yourself getting more and more frustrated. These ewes should be deferring to you more! You sneak up around to one, and it sniffs the air and runs off with a bleat. Your head starts to ache, and you snort as you rub at your temple, feeling a thick, hard bulge at the side of your head that only makes you feel more angry and demanding.</p>When the next sheep runs off, and you see it\'s rear end bouncing up into the air as it runs from you, you feel a rush of heat and emotion inside you. That ewe is YOURS. You start sprinting after her, your feet growing tough and hard as they turn black. Your toes merge together, each fusing into two huge halves of a cloven hoof on each foot. With your huge hooves, you start to run faster and gain on the ewe. The closer you get, the more the controlling and possessive feelings start to grow inside you. You snort and feel the bulges on your head growing more, stretching out from the sides of your skull and beginning to curl and twist. Their weight seems to drive you even more frustrated and needy. These are your ewes! They must obey you!</p>You fall to all fours, your hands toughening as each pair of fingers fuses together and hardens into cloven hooves. You feel a weight growing between your legs, a thick bulging needy presence that is rapidly taking over all of your concerns. It bounces and thickens, growing harder and heavier the more you smell the ewe you are chasing. Finally, you catch up to her, and leap forward, pressing your weight down atop her fluffy curly wool as she bleats and complains. You push your face down into her wool, breathing in that delicious, arousing scent. The scent of YOUR ewe. She belongs to YOU. Your new ram cock, rock hard and dripping with pre, is controlling your thoughts now. You thrust it and shove, rutting like an animal as you search for the ewe\'s pussy. Finally, you feel yourself plunge in deep, and you both bleat together, hers feminine and yours deep and bellowing.</p>You thrust and fuck, slamming in over and over as your face pushes forward and stretches, growing longer the more you sniff her arousing scent. Your skin darkens and turns black, and you feel hair starting to grow from you all over, thick and curly and wooly. It thickens into a heavy, hot pelt of ram wool, stinking with your masculine, dominant musk. The closer you get to orgasm, the more you seem to think with your cock, becoming dumber and more aggressive. Finally, you feel your balls pulse and tense, and you bleat loudly, filling your ewe with your hot, fertile cum. Your eyes glow for a moment, as your pupils become horizontal slits. You pull out, and your ewe submissively follows behind you.</p>For the rest of the day, you track down and breed every one of your ewes, making sure they know exactly who they belong to. As the sun sets, you return to the sheepdog, feeling yourself rise back up onto two legs, as your feral form becomes more anthro. By the time you reach him, you are a tall, muscular and cocky ram man, who\'s brain is as small as his muscles are huge. \"Good work out there laddie!\", he says. You snort, and warn him not to mess with your ladies unless he wants to join them, then hop over the fence to get back to adventuring.",
                        "descriptionchange": "This adventurer is an enormous muscular ram, with gigantic curling horns and a cocky, arrogant stride.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 33,
                                "change": "set"
                            },{
                                "parameter": "dominance",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "farmfield_random",
                "title": "Explore the muddy fields",
                "subtitle": "The mud sticks to your feet and it feels like you might sink into it at any moment",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "New Sheep": {
                        "text": 'There is a loud barking in the fields today. You turn to look, and see fluffy white sheep bounding along the fields, being corralled by a massive shaggy dog. He barks at them, running along their sides and keeping them all together. Another adventurer is also watching the show, but he gets a bit too close. The dog runs behind him and barks at him, loudly, and the adventurer falls forward in shock, landing on all fours next to the sheep. He tries to stand up and leave, but every time he does, the dog gets in the way, and another powerful bark makes the human fall back again. His clothes start to slip off, revealing skin that is sprouting curly white hair all over. His flesh turns black under the growing wool, and he bleats and yelps in surprise. His hands and feet harden and stiffen more with every bark, until he\'s backing off on all fours atop cloven hooves. One final bark, and the new sheep flees into the herd, identical to all the others.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 7,
                                "change": "add"
                            }
                        ]
                    },
                    "New Pig": {
                        "text": 'The fields are particularly muddy today, and you struggle to walk along with your feet squelching and sticking in the mud after every step. Not everyone is annoyed by this turn of events, though. You can see another adventurer, who is pulling off his leather boots with a big grin on his face. He pushes his bare foot into the cool mud and sighs with arousal when he wriggles his toes in it. He then pulls off his shirt, and starts to remove his pants. As he does, you notice his belly starting to swell and grow. His hard fighting muscles are softening into a chubby and heavy gut. His belly jiggles and bounces as he finally gets naked, then starts to roll around in the mud. When he\'s soaked and dripping with dirt, he begins to pump and jerk his cock, making oinking and grunting noises. His face, now fat and round, pushes out into a porcine muzzle with wide nostrils. His ears flop over, and a curly tail forms at his rear. By the time he unloads his cum all over his fat belly, the former human is a fat pink pig man, having the time of his life in the mud.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 7,
                                "change": "add"
                            }
                        ]
                    },
                    "New Mudman": {
                        "text": 'The mud in the fields is extra sticky today. Every step feels almost like hands are grabbing at your feet and trying to pull you deeper into the muck. You struggle up onto a large stone to take a break from trudging through the muck, and look around while you rest. Another adventurer is having a rough time too. He\'s up to his crotch in the mud, and wading through it with difficulty. As he moves, two shapes seem to rise up in the mud behind him. They look like growing mounds of dirt, until dripping arms emerge from the mud pillars, and the tops of them open up into dark mouths oozing with mud. They wrap their arms around the human, and start to stroke and squeeze him. One of them slimes over in front of him and begins to nuzzle and lick his cock with its earthy face. The human is shocked at first, but starts to moan with pleasure, and hump the mud-man\'s face quite eagerly. All the while, the one holding him is smearing its hands over his body, coating his skin in a thick layer of dripping brown mud. Soon, the human moans and gasps, and the mudman backs off to let him cum. The cum that comes out is brown and goopy, just more fertile mud. The human, totally coated in mud, grins his own goopy slime, and he slowly sinks into the earth, a new recruit for the two mud men. You decide to wait for the ground to dry up a bit before you move on.',
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