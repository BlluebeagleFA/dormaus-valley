var area = {
        "title": "down_valley",
        "header": "Down the Valley",
        "position": [0.42,0.49],
        "mapId": "worldmap.jpg",
        "subheader": 'You are walking through the natural beauty of the grassy valley. The land rises to the north, leading to a distant farm, a golden smudge of growing wheat. To the south, it winds slowly towards the sea.',
        "events": [
            {
                "id": "downv_north",
                "title": "Travel further North",
                "subtitle": "It will take a while longer to reach Dormaus.",
                "type": "statcheck", //or random
                "stat": "might",
                "difficulty": 20,
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You climb further up the valley, still far from visible civilization.",
                        "area": "top_valley",
                        "outcomes": []
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'You start climbing up the valley, but you are bruised and achey from the long journey, and still with no civilization in sight.',
                        "area": "top_valley",
                        "outcomes": [{
                            "parameter": "pain",
                            "quantity": 1,
                            "max": 1,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "downv_south",
                "title": "Travel further South",
                "subtitle": "It will be a long journey south to the coast.",
                "type": "statcheck", //or random
                "stat": "might",
                "difficulty": 20,
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You climb down the valley, and as you get closer, the gleaming ribbon of light in the distance turns out to be a fresh, flowing river.",
                        "area": "beside_river",
                        "outcomes": []
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'You climb down the valley, and as you get closer, the gleaming ribbon of light in the distance turns out to be a fresh, flowing river. You are very glad to see water, as you are aching, thirsty and tired.',
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
                "id": "be_bandit",
                "title": "A Spot Of Banditry",
                "subtitle": "These plains are far enough from civilization in both directions that you are unlikely to encounter law enforcement. It could be a good way to earn some cash.",
                "type": "statcheck", //or random
                "stat": "stealth",
                "difficulty": 20,
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 34,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "thefticon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You find some thick bushes by the side of the road, and climb in to wait. You don\'t have to wait long, as it turns out. A lanky pine marten appears on the horizon, travelling south with a large satchel on his back. He doesn\'t notice anything amiss, and as he walks past your bush, you leap out and startle him as you point your weapon at his neck.</p>He raises his hands, trembling. \"Ah! Please, don\'t hurt me!\", he begs. \"I am carrying a lot of delicate potions! If they break, I have no idea what might happen!\", he continues. You order him to hand over all his valuables, and he nods. He unbuttons his tunic, revealing his soft pale-brown chest fur, and reaches inside. Suddenly, he lunges, slicing a small concealed dagger out towards you. You dodge at the last second, and his blade swishes mere inches from your face. Reacting fast, you plunge your fist into his long, thin belly in a brutal uppercut. He gasps and curls over, falling to his knees and then collapsing on his side. His dagger tumbles from his grip and bounces away.</p>You hear the sound of glass clanking, and the fabric of his satchel starts to darken with a spreading leak. A strange, enticing smell rises into the air, and you start to pant and feel light headed. The shuddering, terrified marten is starting to look strangely...appealing. You order him to strip, your voice deep and grunting. He gulps and nods, then pulls off his tunic with trembling hands. You lick your lips as he reaches down and tugs off his cloth boots, revealing small brown clawed paws. He then wriggles out from his pants, his thin weaselly body sliding free along with his long brown tail. Your skin feels hot and there\'s a buzzing, intense feeling behind your eyes that is making you desperately crave his long furry noodle body. You shove your pants down, and lunge down atop him. Your crotch presses against his, and you feel his fuzzy balls and soft sheath rub against your lower belly.</p>You stroke your hands across the large white patch of fur below his long neck, and squeeze and stroke along his sides. He starts to pant and blush, as that strange smell in the air gets stronger. You slide your hands down his sides, and press your thumbs into his belly, and he gasps. You can feel an odd, dull pleasure when you touch him, a pleasure that is getting rapidly more intense. You try to stand up, but the marten\'s crotch tugs with you. You look down, and see that the skin of your crotch is merging with the flesh of the marten\'s. He looks dizzy and confused, and you start to stroke his long chest more, loving the erotic feeling you get from touching him. His fur begins to recede, the soft sleek brown fuzz shrinking away to reveal pale skin that is flushed and pink and sensitive. His arms shrink, becoming smaller and weaker. He seems to realise something is wrong, and pushes against you, but his limbs recede completely as he tries, and his smooth furless muzzle just coughs up thick, clear precum.</p>You start to feel strange, as heat and sensation flows up your body from your crotch. Your bones ache and creak as you stretch, becoming taller and thinner. Claws emerge from your fingertips, and you use them to stroke and tease the sensitive, pleasurable skin of the changing marten. You feel your tailbone growing, as it stretches out and becomes long and furry. That same fur spreads up along your back and wraps around your chest. As it spreads to your neck, you feel your neck lengthening and your face pushing forward into a short muzzle. You gasp, revealing sharp small predator teeth in your new muzzle. Your ears stretch and grow, rising up above your head, as you become the spitting image of the pine marten himself.</p>He wiggles helplessly as his legs start to disappear too, followed by his tail shrinking, becoming a small nub, and vanishing. You begin pumping him, stroking your new furry hands along his body while his head recedes into his neck. More pre gushes from his mouth as it shrinks into a slit, soaking him in slippery, musky cum. Finally, his eyes and nose seem to melt away, disappearing into a large bulging cockhead. You gasp and shudder as cum rushes up through his body, exploding out of his former mouth and spraying all over the road. As you spray load after load, your new cock shrinks more and more, until finally it becomes a much more reasonable nine inches. You touch and stroke it, but you can see no indication that the pine marten is still in there. Oh well. You cheerfully steal his wallet and go on your way.",
                        "descriptionchange": "This adventurer is a long, slinky pine marten, with a long fuzzy neck and long fuzzy tail.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 34,
                                "change": "set"
                            },
                            {
                                "parameter": "muscat_1",
                                "quantity": 20,
                                "change": "add"
                            }
                        ]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": "You find some thick bushes by the side of the road, and climb in to wait. You don\'t have to wait long, as it turns out. A lanky pine marten appears on the horizon, travelling south with a large satchel on his back. He doesn\'t notice anything amiss, and as he walks past your bush, you leap out and startle him as you point your weapon at his neck.</p>He raises his hands, trembling. \"Ah! Please, don\'t hurt me!\", he begs. \"I am carrying a lot of delicate potions! If they break, I have no idea what might happen!\", he continues. You order him to hand over all his valuables, and he nods. He unbuttons his tunic, revealing his soft pale-brown chest fur, and reaches inside. Suddenly, he lunges, slicing a small concealed dagger out towards you. You fail to dodge in time, and his vicious blade cuts a jagged gash across your chest.</p>You snarl in pain, and stumble. Before you know it, his small knife is pressed against your neck. \"So, you think you can handle my potions do you, thief? Let\'s see shall we!\", he says. He reaches behind him and draws out a small vial from a side pouch on his satchel. With one clawed thumb, he pops the cork out, then raises it to your nose. A strong scent of dirty, humid barnyard flows into your nose, and you start to feel dizzy. You snort, and shake your head, blinking and growing woozy. You can\'t seem to remember what you were doing. You look at the marten with confused, half-closed eyes, and your posture slumps. You ears begin to grow, stretching up above your head and becoming long and pointed. Grey fur sprouts along the back of them, and they twitch idly in the air.</p>The marten chuckles, and shows you the label on the vial. It just looks like squiggles to your dumb, slow brain. \"Oh yes, you can\'t read. It says \'instant pack mule potion\'\", he says.</p>He pulls off your clothes, and you obediently let him, not understanding what they even are or having any real desire to do anything except stand around. Once you are completely naked, he packs up your belongings in his satchel, and then slides the heavy backpack onto you. He then tugs you along, and you follow behind him, your bare feet squelching in the mud as you passively do as you are told.</p>You walk slowly down the path towards Otterton, the marten very pleased to no longer have to carry his heavy load. You get sweaty, and muddy, and very uncomfortable, but you are too stupid to do anything but follow your owner. You pass merchants and adventurers, who chuckle at your naked, dirty body and embarrassing ears, though you don\'t really comprehend the humiliation of it all.</p>After days of travel, you finally reach the small port town of Otterton. The marten retrieves his backpack, and tosses your things at your feet. He then takes a small rope and ties it around your neck, before attaching the other end to a hitching post where a number of ordinary feral donkeys are sitting. You sit down obediently, waiting for more orders. None come, however, and a few hours later the potion finally wears off. Your ears return to normal, and you blink and gradually start to think again. You face feels hot with embarrassment and anger as you realise what happened. Your chest hurts, you were caught in a crime, and everyone laughed at you. That almost couldn\'t have gone worse.",
                        "area": "otterton",
                        "outcomes": [{
                            "parameter": "pain",
                            "quantity": 1,
                            "max": 2,
                            "change": "add"
                        },{
                            "parameter": "outcast",
                            "quantity": 1,
                            "max": 2,
                            "change": "add"
                        },{
                            "parameter": "guilt",
                            "quantity": 1,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "goblinfight",
                "title": "An ambush...?",
                "subtitle": "Was that something rustling in the bushes just now? You thought you saw a hint of green flesh. Be on guard.",
                "type": "random",
                "requirements": [
                    
                ],
                "icon": "default",
                "results": {
                    "thing": {
                        "html": "data/active/Goblin.html",
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 12,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "downvalley_random",
                "title": "Enjoy the scenery",
                "subtitle": "The wind feels great on your face. Why not take your time?",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "Squirrel Boy": {
                        "text": 'There are several trees growing in the lush valley either side of the road, and you see that one of them has scattered nuts all around its base. You wonder why they haven\'t been gathered up, until you see an adventurer walk up and start collecting them. The more he gathers, the more he seems to change. He shrinks in his clothes, his pants falling around his ankles, and his shirt hanging loose. His teeth stick out in the front, and a large bushy tail starts to grow from his rear. When he\'s gathered all the ones he can find, he wriggles free from his clothes, then tries to climb up the tree to get more. His hands and feet become small furry clawed paws, and he chitters as he makes his way up to the branches, leaving his nuts abandoned. When he gets to the top, he\'s just a cute, fuzzy little squirrel.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 9,
                                "change": "add"
                            }
                        ]
                    },
                    "Grass Snake": {
                        "text": 'You see two adventurers discussing the dangers of the area as they walk down the road. You trail a little behind them to listen in. One of them, a magician, is explaining to her warrior friend that he should stay on the path to avoid grass snakes. "Pshaw! Grass snakes? Corgo fears no little slithery serpent!", he roars. He then jumps into the grass and swings at it with his sword, while the sorceror sighs in annoyance. Behind Corgo, a grassy hillock that you just assumed was part of the landscape starts to rise up. It uncoils, standing as a massive snake twenty feet tall and covered not with scales, but with a pelt of grass that blends into the land around it. Corgo slowly turns around when the sun is blotted out, only for the snake to open its maw and unleash a coiling vine-like tongue, which wraps him up and drags him up into the beast\'s mouth. The snake then returns to its slumber, totally concealed. A few moments later, a new flower pops up from its grassy hide, the same color as Corgo\'s tanned skin.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 9,
                                "change": "add"
                            }
                        ]
                    },
                    "Donkey Hypno": {
                        "text": 'As you walk down the road, you hear the merry sound of a string instrument, a rapid fiddle tune that makes you bob your head. You soon discover the source of the music, as there is a donkey man sitting under a tree by the side of the road as he plays his music on a beautiful violin. You can\'t help but notice he is wearing no pants, so his huge black-and-pink donkey cock is just resting on the grass, thick and heavy. Your eyes are drawn to it the longer you listen to his song, and you are finding it tough to think straight.</p>The donkey is handsome and cute, with his scruffy muzzle and long furry ears. If you didn\'t like donkeys before, you seem to find yourself loving them now. The longer you listen, the more his furry body looks enticing and masculine. His thick, powerful hooves. His cute tufted tail. Most importantly, though, his enormous, manly, musky cock. You are on your knees before you realise what is happening, the music filling your head and pulling you like a puppet on strings. </p></p>You press your nose to the donkey\'s huge black-skinned balls, and inhale his manly aroma. Then you start to lick and kiss his shaft, tasting his sweat and his warm flesh. You open your mouth wide as you take his cock into your throat, as deep as you can go. Your lips tease against the sensitive ring of flesh that encircles the middle of his splotchy donkey cock, and he soon brays with pleasure, the sound briefly interrupting the hypnotic song. Your mind returns to you just at the same time as a rush of thick, sticky and messy donkey cum rushes into your throat. You pull your face away, only for his cock to twitch and bob, and then spray a smelly splatter of cum all over your face and chest. The music quickly starts up again, and you grin stupidly as you stand up and walk away, allowing the cum to stay on your face and remind you of that gorgeous, wonderful donkey man.',
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