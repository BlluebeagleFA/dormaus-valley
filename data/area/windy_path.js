var area = {
        "title": "windy_path",
        "header": "Windy Path",
        "position": [0.44,0.75],
        "mapId": "worldmap.jpg",
        "subheader": 'The road here weaves through some tall, grassy boulders, presumably rolled down into the valley by some geographic process. They stand like silent sentinels, and in the cool shade of the path between them, lots of birds flutter and caw. A strong wind blows through the stones, making a whistling noise as it moves.',
        "events": [
            {
                "id": "windy_north",
                "title": "Travel further North",
                "subtitle": "There's still a long way back to Dormaus.",
                "type": "statcheck", //or random
                "stat": "might",
                "difficulty": 20,
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You climb further up the valley, still far from visible civilization.",
                        "area": "beside_river",
                        "outcomes": []
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'You start climbing up the valley, but you are bruised and achey from the long journey, and still with no civilization in sight.',
                        "area": "beside_river",
                        "outcomes": [{
                            "parameter": "pain",
                            "quantity": 1,
                            "max": 1,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "windy_east_nodanger",
                "title": "Travel East to Jack's Place",
                "subtitle": "You are pretty sure you remember the way",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "jack_friend",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You hop up onto the rocks, and soon manage to find the entrance to Jack's secret hideout.",
                        "area": "jacks_hideout",
                        "outcomes": []
                    }
                }
            },{
                "id": "windy_south",
                "title": "Travel South Cautiously",
                "subtitle": "This is a good place for an ambush...",
                "type": "statcheck", //or random
                "stat": "stealth",
                "difficulty": 30,
                "requirements": [
                    {
                        "parameter": "muscat_1",
                        "value": 19,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "jack_friend",
                        "value": 1,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "Your well-honed senses detect that in this narrow, dark passage, you are in serious danger of being jumped. You slide and move cautiously from shadow to shadow. You are sure you see someone moving around atop the boulders, but you manage to avoid them, and move on through.",
                        "area": "otterton_hill",
                        "outcomes": []
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": '"Halt!", a voice cries out, and you stop in your tracks. Looking up, you see a raccoon-man standing on one of the tall boulders, with a small crossbow in his hand. He grins, and tosses a dagger in his other hand. "Look what I caught! Another dorky adventurer, ready to get fleeced. This rural shit suits me!", he says. He then waves the crossbow at you. "Twenty gold, and I spare your life. Or if you want, you can pay me by sucking down a mouthful of raccoon spunk!", he says. His face is stretched into a crooked grin as he sheathes his dagger and then gropes his bulging crotch through his leather breeches.</p>You reluctantly ask to suck the raccoon\'s cock, rather than pay up your hard-earned cash. He theatrically places his hand to his ear. "What was that? Say it again, and say please this time", he says. Grinding your teeth, you ask him again to let you suck his cock, with a sarcastic please at the end. He chuckles, and hops down from his rock. He keeps the crossbow bolt pointed at your head as he makes you kneel down, and walks closer to you. His long bare paws are dirty, and his fur is scruffy and unkempt. He starts to grope his bulge again, before lowering his pants to allow his cock to flop out into the air. </p></p>For a scrawny guy it\'s well-sized, the shaft hard and thick and the tip bulging as it oozes pre. Well aware of the deadly crossbow pointed at your skull, you lean forward and take the raccoon\'s shaft into your mouth. It\'s a little salty and dirty, and you can taste him along your tongue as you bob your head back and forth. His thick fluffy crotch is musky and warm, and he mocks and belittles you as you blow him. "Yeah, suck harder cumslut. You love my fat cock don\'t you?", he says, along with plenty of other slurs and insults. Finally he grips your head with his free hand and moans, as his cock pulses and unloads its hot, gooey load into your throat. He holds you down on it for a while afterwards, enjoying himself as he savours your humiliation. Then he backs off, gives you a wink, and hops back up onto his rock and out of sight before you can get revenge. Only when you get up and brush yourself off do you realise that some of your coins are missing!',
                        "area": "otterton_hill",
                        "outcomes": [{
                            "parameter": "muscat_1",
                            "quantity": 20,
                            "change": "sub"
                        }]
                    }
                }
            },{
                "id": "windy_south_nocash",
                "title": "Travel South Cautiously",
                "subtitle": "This is a good place for an ambush...",
                "type": "statcheck", //or random
                "stat": "stealth",
                "difficulty": 30,
                "requirements": [
                    {
                        "parameter": "muscat_1",
                        "value": 20,
                        "comparison": "less" //default greater
                    },
                    {
                        "parameter": "jack_friend",
                        "value": 1,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "Your well-honed senses detect that in this narrow, dark passage, you are in serious danger of being jumped. You slide and move cautiously from shadow to shadow. You are sure you see someone moving around atop the boulders, but you manage to avoid them, and move on through.",
                        "area": "otterton_hill",
                        "outcomes": []
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": '"Halt!", a voice cries out, and you stop in your tracks. Looking up, you see a raccoon-man standing on one of the tall boulders, with a small crossbow in his hand. He grins, and tosses a dagger in his other hand. "Look what I caught! Another dorky adventurer, ready to get fleeced. This rural shit suits me!", he says. He then waves the crossbow at you. "Twenty gold, and I spare your life. Or if you want, you can pay me by sucking down a mouthful of raccoon spunk!", he says. His face is stretched into a crooked grin as he sheathes his dagger and then gropes his bulging crotch through his leather breeches. You reluctantly admit that you don\'t actually own twenty gold, and he blinks with surprise. "Wait, seriously? Prove it!", he commands. You empty out your belongings to reveal your meager ownings, and the raccoon scratches the back of his head. "Damn, you\'re even more hard up than me", he mutters, before putting his crossbow away. He sits down on the edge of the rock, his long black-padded paws dangling over the end of it. "Well shit, now I feel bad. You can go, I won\'t keep ya. Oh wait, I just had a badass idea! You should join me and rob suckers too!", he yells with excitement. "Yeah! Got myself an apprentice!", the raccoon says. He reaches down to you, and you hold onto his rough hand as he pulls you up onto the rock. He then scurries away over the boulders, and you decide to follow him as he travels east. You follow him to the side of one boulder further from the others, and he brushes away some leaves near the base to reveal a rickety trapdoor. You are led down a narrow staircase, to an underground hideout.</p>The raccoon\'s hideout is a mess. The floor is covered in dirty clothes and stolen items. Bags, coats, even random socks and underwear. He jumps up on a chest stuffed with socks and grins at you. "Alright, introductions! The name\'s Jack, but you will call me master, or sir! Your name is newbie. We\'ve got a lot of work to do to make you a real thief!" he says.',
                        "area": "jacks_hideout",
                        "outcomes": [{
                            "parameter": "jack_friend",
                            "quantity": 1,
                            "change": "set"
                        }]
                    }
                }
            },{
                "id": "windy_south_nodanger",
                "title": "Travel South",
                "subtitle": "There's no risk now that the bandit is your 'master'",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "jack_friend",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You weave south through the rocks. You see Jack hop up onto the boulders above you when you do, but once he sees it's you, he backs off and lets you pass.",
                        "area": "otterton_hill",
                        "outcomes": []
                    }
                }
            },{
                "id": "wyvern",
                "title": "A Wyvern's Needs",
                "subtitle": 'You walk between two large boulders, forming a sort of corridor with a gap above from where you can see the sky. Just as you are halfway through the gap, you hear a roar high above you, and see a dark shape in the sky lunging down. With a heavy THUMP, an enormous wyvern lands on the boulders, one of its enormous clawed feet on each rock. You can look up and see its underside, with its powerful scaly feet and enormous wing-arms. Atop its long and powerful neck, the dragonlike face of the beast screeches and roars. It kneels down, and you are surprised to see a slit between its legs open up, before an enormous and heavy black cock slides out from it. It flops between the two rocks and hangs in front of you, easily the size of your entire body. Do you wish to service the feral beast?',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 23,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "grizzsex": {
                        "text": 'You reach up and hold onto the underside of the enormous shaft, before starting to rub and squeeze against the warm flesh. The wyverns roars become lower, happier rumbles, and it humps slowly back and forth, causing its cock to rub and bounce against you. Seeing how much it likes that, you get behind the huge shaft and wrap your arms around it, then start to slide yourself up and down, using your whole body to masturbate the beast. The wyvern leans down more to make it easier for you, and the tip of its ridged and pointed cock starts to ooze a powerful-smelling flow of precum. Its humping and thrusting, and the warmth of its hard cock, rapidly makes you sticky and sweaty. The cock starts to bob and twitch powerfully after you continue to rub, and one particularly powerful flex causes you to be thrown off, leaving you lying on the ground beneath the mighty beast. At that moment, it roars and stretches out its wings in pleasure, before its massive cock unloads a powerful blast of cum all over you. The force and quantity of its orgasm drenches you in seed, as it cums over and over, splattering you from head to toe in smelly wyvern cum.</p></p>The monster pants and cranes its neck for a moment, before flapping its enormous wings and flying off. As you wipe the cum off yourself, you notice the stains on the rocks around you. It seems this creature, unable to masturbate without arms of its own, has discovered that this particular spot is a good way to get some pleasure from the horny adventurers that pass by. As you try to stand up in the enormous pool of slippery cum, you feel your feet start to ache and stretch. Your toes grow longer and thicker, sliding through the cum and flexing as they become wide, powerful grasping talons. Your skin starts to toughen and become grey, before thickening and cracking into a set of leathery, rough scales. You try to back away, but you slip more in the cum, landing on your ass and spraying more of it over you. It soaks into your skin, and you feel your rear start to stretch out and throb. A long, muscular tail slides out behind you, moving through the slippery wyvern jizz. Your arms grow longer, and your fingers stretch out, thin and long and scaly. A web of flesh begins to grow down from your armpits, attaching your sides to your new longer arms, and you feel your neck ache as it pushes out and grows. Your face stretches into a fierce muzzle, and two horns ache as they arc out from your head, angling back and down along your new longer neck. You screech, in a loud predatory call, as your mind feels dumber and more instinctive. You struggle to keep your wits about you, and manage to crawl away from the cum before you completely submit to feral instincts.',
                        "descriptionchange": "This adventurer is a scaly half-wyvern, with leathery pterodactyl-like wings and a long muscular tail, along with a powerful neck and fierce sharp muzzle.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 23,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "windy_random",
                "title": "Explore the Rocks",
                "subtitle": "You don't expect to see anything interesting, but this place is a little spooky and it might be good to investigate",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "Unlucky Crow": {
                        "text": 'You see someone sitting on one of the smaller rocks, tossing seeds to the crows that cluster around these stones. They hop around, shoving eachother out of the way to get to the food. A few of them surround him, and one lands on his shoulder, hoping to get easier access to the seeds. He holds some up in his palm, and a crow pecks at the little pile. He doesn\'t seem to notice as with every peck the crow makes, his hand starts to grow little black pinfeathers, that spread across his skin and stretch out into full glossy crow\'s feathers. He starts to shrink, his clothes becoming baggy and loose, and his boots fall off to reveal that his feet are stretching out into long, thin grey talons. </p></p>When he gets small enough, the crows start to shove against him, trying to take the seeds from him directly. He shoves them back, and caws as his face morphs and hardens into a beak. Soon he is just another crow, fighting over the abandoned bag of seed.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 9,
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