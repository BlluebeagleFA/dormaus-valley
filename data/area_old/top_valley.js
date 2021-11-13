{
        "title": "top_valley",
        "header": "Top of the Valley",
        "position": [0.45,0.36],
        "mapId": "worldmap.jpg",
        "subheader": 'From this high point, you can see down the valley as it flows south. The edges of the valley, swaying with grass, raise up either side up of you to the tall bare stony peaks of the mountains. You can see the shining ribbon of a river flowing down to the distant sea.',
        "events": [
            {
                "id": "topv_north",
                "title": "Travel North to the farm",
                "subtitle": "Turner's farm is within sight on the horizon.",
                "type": "statcheck", //or random
                "stat": "might",
                "difficulty": 20,
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { 
                        "text": "You climb up the valley, soon seeing the golden wheat of Turner's fields get closer as you reach his farm.",
                        "area": "farmsouth",
                        "outcomes": []
                    },
                    "fail": { 
                        "text": 'You climb up the valley, your body aching from the long journey',
                        "area": "farmsouth",
                        "outcomes": [{
                            "parameter": "pain",
                            "quantity": 1,
                            "max": 1,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "topv_south",
                "title": "Travel further South",
                "subtitle": "It will be a long journey south to the coast.",
                "type": "statcheck", //or random
                "stat": "might",
                "difficulty": 20,
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { 
                        "text": "You climb down the valley, and as you get closer, the gleaming ribbon of light in the distance turns out to be a fresh, flowing river.",
                        "area": "down_valley",
                        "outcomes": []
                    },
                    "fail": { 
                        "text": 'You climb down the valley, and as you get closer, the gleaming ribbon of light in the distance turns out to be a fresh, flowing river. You are very glad to see water, as you are aching, thirsty and tired.',
                        "area": "down_valley",
                        "outcomes": [{
                            "parameter": "pain",
                            "quantity": 1,
                            "max": 1,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "become_muddrake",
                "title": "Drake Seller",
                "subtitle": 'You hear a rumbling behind you, and step out of the road to allow a cart to pass by. It\'s piled high with goods, and being pulled along by a strange beast. It\'s a fat reptilian creature, its four legs low to the ground, and its body stocky and strong. It smells strongly of a musky barnyard stink, with its brown splotchy body covered in thick hide instead of scales. The vehicle stops next to you, and the big lizard sniffs around before panting and showing off a long, dripping tongue. </p></p>"Hey there!", a voice calls, and you look up to see a slender rabbit grinning at you. "Headed down to Otterton? It\'s a long and boring trip, but maybe I could help you out with that." he says. He points to his lizard beast, and the creature sniffs you curiously. "I could do with a second puller. It\'s easy work, and you won\'t be doing much thinking. When I get to Otterton, I\'ll turn ya back and pay ten gold. What do you say?", the rabbit says. You look down at the muscular, smelly beast of burden, and weigh your options. Do you want to try becoming one?',
                "type": "random",
                "requirements": [
                ],
                "icon": "tffetish",
                "results": {
                    "grizzpay": {
                        "text": 'You weigh your options for a moment, but then agree to the rabbit\'s proposal. He seems pretty shocked, but then he grins and bounces on his seat. "Woah, two folks really want to become smelly mud-drakes? Well, I ain\'t complainin!", he says. "Easiest way to do this is let the big dummy here spread his change onto ya", the bunny explains. He gets you to stand on all fours, your hands and feet sinking slightly into the damp mud on the road. The big brown lizard starts to get interested, and he bumps his huge scaly head against yours. His thick musk washes over you, as he clumsily and stupidly rubs and nuzzles you. His hot breath is damp and humid, and his huge tongue drools as he starts to lick at your face. His saliva is thick and slimy, and it makes your skin tingle. Your jaw starts to ache, as it stretches and pushes at your lips. You feel your teeth thickening and swelling, jutting out as they transform into massive fangs. Your tongue flops from your mouth as it grows, becoming heavy and wet. </p></p>You feel your body starting to grow heavier and stronger, as muscles grow and bulge under your skin. You posture shifts, your arms and legs becoming more bow-legged, and your hands and feet spreading out in the mud as they turn into thick, wide clawed feet. You feel your fingers and toes swelling and bulging, before you shudder at the feeling of wide, dull claws emerging from them and digging into the mud. Your body sweats heavily, the sweat dripping from your chest into the mud as you are surrounded by a smelly, raunchy barnyard stink. Your new aroma makes the other mud drake curious, and he clambers on top of you, his head nuzzling and poking your back as he crawls over your face. You look up and see his soft, scaly balls, and thick sheath-covered cock hanging in front of you. Your long wet tongue licks out instinctively as you taste him, savouring the beast\'s scent. You get a strange instinctive feeling of his health and emotions, like ball-licking is a form of weird communication between members of the kind of beast you are becoming.</p></p>The other mud-drake licks your rear, and you sway it gently as your tail starts to grow in. It thickens quickly, growing dull spikes and turning a muddy, earthy brown and red. It flops into the dirt behind you, before growing thicker and longer until it is almost the same size as the rest of your body. Your skin thickens and toughens, turning splotchy with the same brown-red markings as your tail.</p></p>As your changes complete, you feel your head growing foggy and slow. You blink lazily, your thoughts sluggish and stupid as your brain shrinks, and you take on the dump, complacent mind of a domesticated beast. You are still faintly clinging to your humanity, but it\'s like you\'re incredibly drunk. The rabbit pushes the other mud-drake off you, and then starts to fasten a halter around your chest. "You still in there, bud? I hear it\'s a pretty nice feeling, having an animal brain for a while. Don\'t get too addicted though. The other guy asked me to make him go full-beast when we get to Otterton, and sell him off. I\'ll just put this ribbon on your halter so I know which of you to turn back later", he says. He carefully wraps a little red ribbon around your leather straps, and you lick it curiously. He then climbs back onto his wagon, and shakes the reins. You and your partner walk forward, your strong legs easily pulling the small wagon as you do your duty.</p></p>The day goes by easily as you pull your load and do as you are told. Your simple mind doesn\'t get bored, it just feels happy to enjoy the sun and the feel of the mud beneath your claws. When the wagon master tells you you are doing a good job, you are proud, and you wag your tail. You are looking forward to doing lots more labour and being a good domesticated drake. It\'s only when you eventually see to the town of Otterton, your destination, that you remember that you\'re supposed to be turning back to normal soon. Your slow brain considers your options for hours as you walk down the valley towards the town.',
                        "trapped_desc": "This is a cart of goods travelling down the path, pulled by two huge scaly quadrupedal lizard beasts.",
                        "trapped": 'You are leashed to a cart, trundling along dumb and happy as a beast of burden on your journey.',
                        "outcomes": []
                    }
                }
            },{
                "id": "drake_return",
                "title": "Turn back and get paid",
                "subtitle": "You are currently a dumb smelly mud drake, but you are vaguely aware that you have a paycheck coming",
                "trapped": true,
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "footstool_1": {
                        "text": 'You cling onto enough of your old identity to remember that you don\'t want to be a beast forever, even if it is very relaxing. You just pull your cart slowly and happily, and trundle into the plaza at the center of Otterton. Your tongue waves in the air as you taste the salty sea breeze. The rabbit hops down and checks your ribbon, then unbuckles you from your harness. You\'re not sure how he does it, but he rubs your head in such a way that you find yourself standing up, your tail receding and your body returning to its former self. You rub your head, still dazed and dopey, as he presses ten gold into your hand. "Thanks for the help, friend. I\'ll see you around!", he says, before leading the other mud-drake off for sale.',
                        "area": "otterton",
                        "freeTrap": true,
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 20,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "drake_stay",
                "title": "Switch the ribbons",
                "subtitle": "You remember the ribbon. If you wanted to, you could pull it off your bridle with your flexible tongue and shove it into the side of your partner\'s harness instead. Let him turn human and get paid while you become a completely feral, stupid happy beast. Do you want to switch the ribbons?",
                "trapped": true,
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "footstool_1": {
                        "text": 'For a dumb mud-drake, this act of subterfuge is incredibly smart. You are strangely excited to think about how, once you are fully transformed, you will be far too stupid to think of something like this. You lick at the ribbon, slowly unwinding it, before pushing it over to your partner\'s harness and tucking it into the strap against his neck. You then just pull your cart slowly and happily, and trundle into the plaza at the center of Otterton. Your tongue waves in the air as you taste the salty sea breeze. The rabbit hops down, and checks both your harnesses. "Huh, good job I put this here, I almost got you two mixed up", he says. You watch happily as he unbuckles the other drake, and starts rubbing his scaly head. </p></p>The drake slowly stands up, his body reshaping as scales turn to flesh. His claws become feet, his tail pulls up and disappears, and soon a very dazed and confused burly human is standing there next to the bunny. The rabbit doesn\'t seem to remember what you looked like, because he just hands over ten gold to the human. "Here you go, as agreed", the bunny says. The human just stares at the gold and nods with slight confusion. Then, the bunny unstraps you, and pets your big scaly head. You drool happily as he pulls you along by a leash around your neck, leading you to a wooden pole at the side of the plaza. He wraps the leash around it, then kneels down and lifts your huge, smelly head. "Ok, here goes. One total brain-wipe, as promised. You\'re gonna make me a nice profit, big guy. Earth-drakes are pretty expensive", he says. You feel happy to know you\'ll be a good sale. He starts to rub and massage your thick neck, and stroke the sides of your head. You feel your brain slowing down more, your thoughts dropping away as you blink stupidly. Your memories and identity fizzle and sink to the back of your mind, then disappear. You lose understanding and sentience, forgetting concepts and ideas. You don\'t know what the things around you are called anymore. You can\'t comprehend language or thoughts. You just sniff and drool instinctively, as your brain shrinks to the tiny pea-sized mind of a dumb smelly lizard.</p></p>The furry soft thing pats your head again and makes noises at you. You drool some more, and watch him walk away. The sun feels nice. You like the breeze. This is good. Good. Happy. Drool.',
                        "area": "otterton",
                        "outcomes": []
                    }
                }
            },{
                "id": "topvalley_random",
                "title": "Take Your Time",
                "subtitle": "The scenery is beautiful, and you can stroll slowly and see what happens",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "Fox Hunting": {
                        "text": '"Woah there! Heel, boys!", a voice cries out behind you. You turn to look, and see an adventurer struggling to hold on to the leashes of two enormous hunting dogs. They look at you and wag their tails, and the panting man gives you a tired smile. "Oh hey there! These two are magic hunting dogs, guaranteed to find me a fox if I keep them out long enough!", he says eagerly. You see his ears start to rise up, growing pointy and moving atop his head, while his hair starts to turn orange from the root up. You nod as he describes where he got the dogs from, and the two dogs grin in a very sinister way as they stand either side of him. His face pushes out into a vulpine muzzle, and his pants start to fall as a long, thick and bushy fox tail forms behind him. The two dogs start growling, and only then does he realise what\'s happening. Yipping in terror, he falls to all fours and runs off, the two dogs chasing after him.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 9,
                                "change": "add"
                            }
                        ]
                    },
                    "Cowswap": {
                        "text": 'You pass by a farmer, pulling a cow along with a rope tied around its neck. He\'s talking to the cow, assuring her that she will go to a good home once he sells her at market, and apologising for not being able to take her back home. The cow just moos in a grumpy, annoyed sort of way, until finally the farmer sighs. "Fine fine, but I did promise a cow would be at the market for sale", he says. You watch as he unbuttons his overalls and drops them, then pulls off his large, muddy boots. He drops his shirt, and kicks off his underwear, revealing his full naked, hairy, muscular body.</p></p>He then removes the rope from the cow\'s neck and takes off the cowbell she is wearing, before putting it on his own neck. Immediately, his cock and balls start to bulge and swell. His balls in particular inflate massively, the skin turning pink as they jiggle between his legs. Bulges form on the flesh, before they inflate out into milk-leaking teats. The farmer moos loudly, and small horns start to emerge from his hairline. White and brown spotted fur grows all over his body, and he rolls over onto all fours as his hands and feet stiffen and harden into cloven hooves.</p></p>Meanwhile, the cow is shrinking and rising up onto two feet. She adjusts her stance, as she becomes a thick and strong anthro cow, before pulling the farmer\'s overalls on, with her udder bulging from a gap in the front. She then walks off with her new cow on its lead.',
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