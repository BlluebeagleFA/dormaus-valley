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