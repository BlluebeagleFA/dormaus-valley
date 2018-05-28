var area_bar_rooms = {
        "title": "bar_rooms",
        "position": [0.72,0.71],
        "header": "The Fur and Feather Stalls",
        "subheader": 'From here, you can look down at the main area of the bar, past a wooden banister. This raised area is up the stairs and slightly darker. Several wooden tables are arranged below the mounted heads of strange beasts.',
        "events": [
        	{
                "id": "bar_gamble",
                "title": "Gamble With Ace",
                "subtitle": 'Ace the coyote is sitting at his usual spot, one of his boots up on the table. He has a pack of playing cards fanned out on the stained wood of the table, and he nudges up his cowboy hat as you approach, before giving you a wink. </p>"Howdy partner. Up for a little wager?" he says in his masculine drawl.',
                "type": "statcheck", //or random
                "stat": "charm",
                "difficulty": 10,
                "requirements": [
                    {
                        "parameter": "chips_1",
                        "value": 9,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "chips_1",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'For hand after hand, you keep your poker face calm. You use what you know of people to watch Ace carefully, and you notice that his ear wiggles slightly when he has a good hand. After that, you are soon victorious. Ace grins with surprise, and props his boots up on the table. You notice something a little different about them. One of his boots is white with black dalmation stripes, and the other is tiger-print. He grins when you notice. </p>"Don\'t worry, they had it coming. Don\'t spill beer on a man\'s boots." he says. </p>You see the boots wiggle and twitch slightly. From the rumors you\'ve heard about Ace\'s legendarily rank and smelly paws, you imagine those two are regretting their rudeness. The coyote tosses you something, and you catch a dusty, muddy pair of leather cowboy boots. They are soaked in booze, but the stink of ale is overpowered by a musky, masculine stench of sweat and hard work. It\'s so potent that you feel quite dizzy, though you have a bizarre urge to shove your nose in them and breathe deep. </p>"You can keep these old ones, partner. Should cover the cost of my chips. They were two folks too, once, but after a while they fade and turn to good, brown leather. Perfect for adventurers like us." he says. You take them, and leave with mixed feelings about such a \'punishment\'.',
                        "outcomes": [
                            {
                                "parameter": "ace_boots",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'At first, you think you are doing well. You win a few hands, and lose a few, but you\'re holding your own. That is, until Ace props his boots up on the table. A scent starts to flow across the table. It\'s thick, and musky, and sweaty. A ripe stink of masculine power and dirty unwashed drifter feet. Only a little is oozing from his boots, but it\'s enough to constantly drag your attention away.</p>You\'re staring at his boots when he snaps his fingers and grins at you. "Looks like you\'ve run dry, partner", he says. You realise you just lost your entire stake.',
                        "outcomes": [{
                            "parameter": "chips_1",
                            "quantity": 10,
                            "change": "sub"
                        }]
                    }
                }
            },{
                "id": "bar_gamble2",
                "title": "Gamble Without Chips",
                "subtitle": 'Ace the coyote is sitting at his usual spot, one of his boots up on the table. He has a pack of playing cards fanned out on the stained wood of the table, and he nudges up his cowboy hat as you approach, before giving you a wink. </p>"Howdy partner. Up for a little wager?" he says in his masculine drawl.',
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 3,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "chips_1",
                "results": {
                    "mousetf": { //success and fail, rare success, rare fail, or random
                        "text": 'You agree, and take a seat opposite from the tall canine. He lowers his boots and deals you some cards, sending them sliding across the table with graceful flicks of his wrist. </p>"Texas hold \'em. I got no need for money, so I think we\'ll bet...height! You lose, you shrink." The grin on his long muzzle suggests that he knows something you don\'t know. You look at your cards, a two and a five. Naturally, Ace has two aces. Then on the next hand, you have a pair of fours, and Ace gets a straight. </p>Over and over, the coyote gets a perfect high-value hand, and you get trash. With each hand, you shrink a little more, your clothes becoming baggy and loose on your diminished body. </p>When you shrink below three feet tall, your skin starts to tingle and itch as it grows soft white fur. Your ears widen and stretch, becoming round and large atop your head. You squeak with indignation, and have to clamber up onto the table to be able to see the cards. A long tail starts to grow from your rear, pink and furless, and your face pushes out into a pointy little muzzle. </p>You look down at yourself, a cute, naked little white mouse, with small pink paws, a long tail and twitching whiskers, and you kick one of the cards in frustration. You accuse Ace of cheating, and he laughs. </p>"And whatcha\' gonna do about it, partner?" He leans forward, grabs you by the tail, and dangles you over his muzzle as you kick and struggle in the air, helpless in his grip. Just when you fear he might open his mouth and swallow you whole, he tosses you to the floor, and you have no choice but to leave in your tiny new form.',
                        "descriptionchange": "This adventurer is a tiny white mouse.",
                        "outcomes": [
                        	{
                                "parameter": "species",
                                "quantity": 3,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "bar_random",
                "title": "Watch the Gamblers",
                "subtitle": "People come and go at the gambling tables regularly.",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "Bandit Dog": {
                        "text": 'There\'s a new visitor to the bar today. A tall and hairy human, with a scar over his eye and a huge beard. His belly is round and large, but rock hard, and his shirtless torso is covered in thick, dark body hair. He\'s talking with a gruff voice to a thin and scrawny guy, and you catch the end of it as you approach. "Yarr, can\'t have a bandit who falls asleep on duty, lad! Yer gettin\' demoted, permanently." he says. </p>The other man tries to protest, but all that comes out is a loud, deep bark. He covers his face in shock as his mouth and nose pushes forward into a furry muzzle. His ears grow larger and flop down, and brown fur begins to flow over his skin. He barks again, stumbling on his feet as they grow longer, and then falls to all fours. His hands clutch together and shift, forming claws and pads as they become dog\'s paws. His wriggles and struggles cause him to slip free of his clothes, and a furry tail grows from his rear. He whimpers and whines, but the huge bandit grabs him by the scruff of his neck and drags him forward, shoving his sensitive nose into his sweaty crotch. </p>The dog looks shocked for a moment, then his tail starts to wag as his eyes darken into big, brown, ordinary dog eyes. "There. Loyal mutts don\'t fall asleep on duty.", the bandit says. You wonder if his crotch musk has that effect on humans, too. He won\'t be needing his spare chips, so you grab them.',
                        "outcomes": [
                            {
                                "parameter": "chips_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "Dog Poker": {
                        "text": 'It looks like Ace is playing poker with an entire team of adventurers. A male and female warrior, and a tall mage, are all chatting together and dealing chips while they play. You watch for a moment, and see that the humans\' ears are starting to stretch up, growing pointed and developing fur. Their skin sprouts hairs all over, thickening into pelts. Grey, brown, and orange. They don\'t seem to notice, even as they push forward their chips with hands that are becoming clawed and the palms padded with black pawpads. One of them barks and howls, and you see tails pushing out from the holes in the backs of the chairs and start to wag. </p>In a few minutes, there are four canines all playing poker together, and you are reminded a little of a painting you once saw. Ace winks at you and tosses you a few spare chips to keep quiet.',
                        "outcomes": [
                            {
                                "parameter": "chips_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    }
                }
            }
        ],
        "npcs": [
            {
                "id": "ace",
                "name": "Ace",
                "description": "Ace is a coyote with a long smirking muzzle. His face is obscured by his cowboy hat, and sometimes he likes to toy and juggle with a gleaming knife.",
                "icon": "aceicon",
                "dialogue": [
                    {
                        "input": "What is your name?",
                        "output": '"Folks round here call me Ace."'
                    },
                    {
                    	"input": 'What is your job?',
                        "output": '"This and that. Not got anythin\' in particular at the moment. Guess you could call me a professional gambler."'
                    },
                    {
                    	"input": 'See you later.',
                        "output": 'He gives you a wink as you leave.'
                    },
                    {
                    	"input": 'Can I see your cock?',
                        "output": 'The coyote chuckles, and one of his gloved hands strokes down his thigh. "You ain\'t seein\' that partner, not unless I lost my clothes in a poker game. And I never lose."'
                    },
                    {
                    	"input": 'Can I touch your paws?',
                        "output": 'The coyote\'s boots are crossed atop his table, and he raises an eyebrow at you when you ask. "I don\'t give folks what they want for free, partner. Sides, a wanderin\' guy like me don\'t get a chance to bathe much. You don\'t wanna smell these dogs."'
                    }
                ]
            }
        ]
    }