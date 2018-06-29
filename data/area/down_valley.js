var area = {
        "title": "down_valley",
        "header": "Down the Valley",
        "nomap": "You don't know your way around this area yet. You'll have to navigate on foot.",
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