var area = {
        "title": "otterton_hill",
        "header": "Hill Above Otterton",
        "position": [0.41,0.81],
        "mapId": "worldmap.jpg",
        "subheader": 'You are standing on a hill just north of a small port town. The ocean breeze blows easily over the grassy land, and it makes the air fresh and brisk. A path weaves through a small, unfinished stone wall, and leads down to the town proper.',
        "events": [
            {
                "id": "hill_north",
                "title": "Travel North through the Valley",
                "subtitle": "Leaving the safety of the village is best done when healthy and well-prepared.",
                "type": "statcheck", //or random
                "stat": "might",
                "difficulty": 20,
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You start climbing up the valley, soon leaving the wall and the village as nothing more than a tiny glimmer on the horizon.",
                        "area": "windy_path",
                        "outcomes": []
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'You start climbing up the valley, but you are quickly tired and aching from the long walk uphill. By the time you make it to the windy path, your body is sore.',
                        "area": "windy_path",
                        "outcomes": [{
                            "parameter": "pain",
                            "quantity": 1,
                            "max": 1,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "hill_south",
                "title": "Travel South into the village",
                "subtitle": "The main part of the village is only a short walk away",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You walk past the wall, into the salty sea air of the little fishing village",
                        "area": "otterton",
                        "outcomes": []
                    }
                }
            },{
                "id": "otterhill_random",
                "title": "Walk along the wall",
                "subtitle": "The overgrown wall extends around the town. There might be something interesting to see.",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "Brick in the Wall": {
                        "text": 'You see a heavy-set beaver, working on the stone wall that is adjacent to the road. He lifts a huge stone brick and slots it carefully against a few others, then sighs and wipes the sweat from his forehead. He nods to you. "Howdy there, young feller. Just workin\' on the old wall here. Gonna take a long time though, we need a lot of volunteers to help with gettin\' the raw materials!" he says. You see a human adventurer jog up the hill and wave to the beaver. "Ah, here\'s one of our volunteers now!", the beaver says. </p></p>Just before the human can ask what he needs to do, the beaver grabs hold of his in his powerful arms and starts to squeeze and shove him against the wall. You watch with surprise as the struggling human\'s body is mashed and kneaded like clay. The beaver pulls at the human\'s clothes and peels them away, then rolls and kneads the blobby pink flesh some more. The adventurer\'s muffled complaints go quiet, and his features meld and blend into just a pink mass. The beaver then pats his material, straightening it into a block, before lifting his tail and sitting his bare furry ass on top of his "volunteer". You see the pink of the human\'s body slowly begin to darken and roughen, as it turns slowly into cold grainy stone. The beaver notices your surprise at the effects of his rump, and nods to you. "My granpappy was a catoblepas, so my stink tends to turn folks to stone. Pretty handy!", he says. You politely leave, once again surprised and slightly alarmed at the strange inhabitants of this land.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 10,
                                "change": "add"
                            }
                        ]
                    },
                    "Unlicky Ptero": {
                        "text": 'You see a man standing on top of the wall, reading from some sort of scroll. He notices you looking, and bows to you. He\'s wearing a waistcoat and has a short sword strapped to his hip. "Greetings friend! You are fortunate indeed, for you are about to witness a marvel of magical engineering! Behold, as I, the great Count Aptalon, gives birth to the magical spell of flight!" he cries flamboyantly. He then reads quickly from the scroll, the words complex and echoing. The sound seems to surround him, and you start to see sigils and runes glow as they spiral around his body. Slowly, but visibly, he begins to rise into the air and float! He laughs triumphantly, but his joy is short-lived. </p></p>His body starts to bulge and ripple strangely, and you see the front of his boots stretch out, before they split open, revealing his growing feet. His toes are stretching out into three enormous talons, covered in green scales. He blinks with shock, then cries out with surprise as his sleeves are torn open by skin growing from his chest to his arms. It forms a thick webbing, one which is replicated by the web that is growing between his fingers. Each finger stretches out, becoming thick and long, as they transform into massive scaly wings. His pants burst open at the back, allowing the growth of a muscular scaly tail. "Wh-what\'s happening? My head...I...need...food...want...mate. Eat. Mate!" he says, his voice becoming more and more guttural and beastlike. </p></p>Finally, his words devolve completely into feral screeching. His eyes turn completely black, like a shark\'s, before his hair falls out and his head stretches out into a beak-like scaly reptilian face. The new pterodactyl lands on the wall, clutching it with its huge feet, before screeching and flying away.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 10,
                                "change": "add"
                            }
                        ]
                    },
                    "Unlucky Gold": {
                        "text": 'You see a man digging in the hill with a large shovel. The mud caked on his boots, and the sweat dripping down his back, indicates he\'s been working on it for a while. You ask him what he\'s digging for, and he looks up from his small trench. "Oh, hey there. According to legend, there\'s a barrow in this here hill. If you can find it, you get incredible treasure!" he says. He slams his shovel hard into the ground, and there is a loud, echoing thud. With great excitement, he drops his shovel and falls to his knees, scooping the mud away with his hands to reveal a bricked-up stone construction. He heaves at one of the stones, and it slides free gradually. There is a rush of air from within, and you hear a booming voice say "YOU HAVE FOUND THE TOMB OF BRANDT. NAME YOUR WISH AND LET IT BE GRANTED!"</p></p>The man eagerly claps his hands together. "I wish for wealth and treasure!", he shouts. Immediately, a wisp of something floats up from the hole. It\'s like gold dust, swirling in the air. It surrounds the man, and starts to stick to him all over. "Huh? What\'s happening?", he says. His fingers start to stiffen and harden, locking into place as the flesh shines and gleams. A glowing golden hue covers his hands, before his fingers start to break apart into small round objects. Golden coins fall from his hands, and topple into the black hole below him. The gold spreads up his arms and onto his chest, along with the stiffness. He gurgles and moans, unable to move or speak. His arms fall off, collapsing into more golden coins, and he falls forward onto the hole. </p></p>Gradually, the golden hue spreads across his entire body, turning his legs and face into stiff, shiny metal. It then crumbles and falls apart into featureless coins, which roll and slide into the hole. Then, the stone he pulled away replaces itself, and the soil crawls back over to cover it. Soon there is no indication that anything happened at all.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 10,
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