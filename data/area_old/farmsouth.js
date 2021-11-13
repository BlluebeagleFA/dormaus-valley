{
        "title": "farmsouth",
        "header": "Farm South Exit",
        "position": [0.49,0.31],
        "mapId": "worldmap.jpg",
        "subheader": 'The southern end of Turner\'s farm passes through fields of swaying wheat. Beyond those, a wooden fence marks the end of the horse farmer\'s domain. The dirt path becomes overgrown and messy, and winds out down through the valley. You don\'t yet feel strong enough to wander into the untamed land beyond.',
        "events": [
            {
                "id": "farms_north",
                "title": "Travel North to Turner's House",
                "subtitle": "It will only take a few minutes to get back to the farmhouse",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { 
                        "text": "You leave the wheat fields and make your way back to the farmhouse.",
                        "area": "farmhouse",
                        "outcomes": []
                    }
                }
            },{
                "id": "topv_south",
                "title": "Travel South towards the coast",
                "subtitle": "It will be a long trip. You should make sure you're prepared.",
                "type": "statcheck", //or random
                "stat": "might",
                "difficulty": 20,
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { 
                        "text": "You leave the relative safety of Turner's farm, making your way down as the muddy path gives way to a small trail, and then only a flattened area of grass in the fields.",
                        "area": "top_valley",
                        "outcomes": []
                    },
                    "fail": { 
                        "text": "You leave the relative safety of Turner's farm, making your way down as the muddy path gives way to a small trail, and then only a flattened area of grass in the fields. It does not take long before you are feeling tired and your legs are aching from the long walk.",
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
                "id": "become_cocktree",
                "title": "Become a Ficus Malus",
                "subtitle": 'Doing hard work in the fields is far too much effort. Why exert yourself when you could just soak up the sunlight and make money that way?',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "gender",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "inanimatefetish",
                "results": {
                    "grizzpay": {
                        "text": 'You go get Turner and explain to him that you\'d still like to help on the farm, but that you want a more relaxing position. One in the orchard, with the other trees. He seems surprised at first, but eventually accepts. He\'ll plant you, and when you bear fruit, he\'ll sell it and you can have a portion of the profits.</p>You walk with him to an area at the side of the orchard grove. The soil here is cool and freshly tilled, and the tree next to you is still pink and soft, the flesh not yet fully turned to bark. Seeing that makes you a little nervous at first, but you just reassure yourself that this is a temporary scheme, and resolve to see through it.</p>First, the big horse helps you take off all your clothes, and puts your belongings into a wheelbarrow. "Ah\'ll keep this here safe until ya want it back", he says. He then lifts the huge hoe he\'s been carrying around, and digs it into the soil. His muscles bulge as he turns and digs at the ground, slowly digging a furrow. He then helps you step down into it. Your bare feet feel cool as your toes sink into the dirt. The horse\'s huge hand strokes your chest as he presses you down into the mud, belly-up. He instructs you to place your arms out and spread your legs slightly, and then he starts to shovel the mud over your limbs. Bit by bit, the mud covers your legs, arms, and chest, slowly burying you in it. It feels like a heavy blanket over your body, with just your face looking up into the sky. The big horse kneels down on top of you, and starts to pack the mud over your crotch, creating a small mound. His huge muscular rear, barely contained in his overalls, wags in your face as he does so. He then stands up, with his massive hooves right on top of where your body is hidden, as he stomps down the mud, making it tighter and harder for you to move. Once you are fully planted, he looks down at you and nods. "Eeyup, that should do it. Ah\'ll come check on ya tomorrow, and keep ya well-watered. Look forward to harvest season, ya hear?", he says. He then walks away, leaving you alone.</p>Well, you did sort of expect this. You\'re technically a plant from his point of view, now. You lie there, experimentally testing how much you can move. It\'s not much - just the barest wiggling. He sure did pack you in tight.</p>You resolve to make the most of the situation, and just relax, like a real tree. You look up into the sky and watch the clouds moving past. The sun feels warm and comforting on your face, and the cool soil all around you is surprisingly relaxing. The sky slowly turns orange, then purple, and night falls. You feel like you\'re in a trance, watching the stars come out, and then blue return to the sky as the delicious, tingly warmth of the sun returns. You are shaken out of your stupor by a pleasurable feeling in your crotch. A cool, refreshing shower of water is falling onto it. Your vision focuses as you look down, and see Turner gently pouring a watering can over your crotch. You blink and feel dozy, and ask him whether it\'s too soon to water you. He smiles at you. "Shucks, you took to this easy, huh? It\'s been a whole day, friend!", he says. That doesn\'t seem right at all, but you feel too relaxed to correct him. You can feel your cock growing, slowly rising and sliding through the mud, until it emerges from the mound of soil. It\'s thick, and hard, and feels amazing.</p>You watch the sky some more and relax to enjoy the feeling of your cock, as it thickens and slowly grows. The sun rises, and falls, and rises, again and again. You barely register it. But you do feel your cock, it\'s all you can focus on. It gets thicker, and harder. Throbbing as it grows longer and taller, never going soft, always firm and pleasurable. It rises up gradually, reaching a foot in length, and then two. You can feel water flowing up from the ground around you, up into your shaft and down again. You feel your soft fleshy shaft becoming green and shiny. It hardens as it changes, the insides remaining green and lush, but the outside toughening and slowly turning brown. Your growing bark feels very satisfying and thick. Day after day, Turner waters and cares for you like any other plant. When you grow your first branches, it is like five orgasms at once. You can feel each of them stretching out and growing like they are cocks of their own.</p>Then, your leaves start to grow in. They are so sensitive you could almost scream. Every rustle of the wind makes them twitch and move, and it\'s like being edged and teased in a way you\'ve never imagined. You drip sticky sap, but despite the maddening pleasure, you never orgasm. Instead, you simply live in a constant state of bliss.</p>When your pears start to grow, you think the pleasure might actually drive you to insanity. You feel like you have new cocks that are getting erect, but maddeningly slowly. Gradually bulging and swelling, filling with juice and delicious fresh fruit flavour. Getting bigger, and heavier, and more pleasurable every day.',
                        "trapped_desc": "This is a large cocktree growing here.",
                        "trapped": 'You are half-buried in soil, your cock now a towering thick tree that keeps you trapped with endless pleasure.',
                        "outcomes": []
                    }
                }
            },{
                "id": "cocktree_random",
                "title": "Get Harvested",
                "subtitle": "That's why you grow, after all. You need to be plucked!",
                "trapped": true,
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "footstool_1": {
                        "text": 'You have been a tree for weeks now, and you no longer have any sort of ordinary, conscious thought. Only endless pleasure. As a result, you don\'t really register it when Turner\'s heavy hooves return to you, and he starts to examine you. You do feel it when his thick, rough hands stroke over your tough and powerful bark though. You are filled with hope that he will finally pluck one of your fruit and free you from this maddening pleasure.</p>He reaches up, and his fingers close around your juicy ripe pear. You could scream with how great it feels. Your whole body would be writhing and squirming in endless bliss if you had the chance. He pulls very slowly, making the pleasure grow, and grow, and then - he plucks it.</p>Finally, the orgasm that has been building for weeks explodes through your mind. White-hot pleasure floods your whole body and erases every thought in your mind. You are utterly overjoyed to be plucked, for your fruit to be eaten. You don\'t care that as soon as the pear left your branches, your brain got a little smaller and emptier. You have no worries at all that some of your memories melted away, and your thoughts became slower and stupider. It doesn\'t matter. Only being harvested matters.',
                        "outcomes": []
                    }
                }
            },{
                "id": "farmsouth_random",
                "title": "Explore the fields",
                "subtitle": "In addition to the wheat, there are a number of other unusual plants growing here",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "Horny Chicken": {
                        "text": 'You notice quite a few chickens wandering around this end of the farm, scratching at the soil and pecking for seeds and food. You don\'t pay them much mind, until you see a desperate, anxious-looking man peek through the wheat and then try to flee. As he lunges out from the crops, you notice that his feet are large, clawed yellow talons. Just before he gets to the gate, there is a loud, aggressive COCK-A-DOODLE-DOO from behind you.</p></p>The man stumbles and shakes, sweating. "N-no! I don\'t want to lay more eggs!", he stammers. Again, there is that powerful COCK-A-DOODLE-DOO! You look behind you to see a large, strutting rooster, his feathers dark and intimidating. When he crows again, you feel a strange shudder of intimidation flow through you, and the whimpering man crawls over to the rooster to kneel in front of it. You watch as feathers start to sprout from the man\'s back, and his face pushes out into a beak. You quickly back off when you start to feel a growing urge to join him.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 7,
                                "change": "add"
                            }
                        ]
                    },
                    "Man Orchard": {
                        "text": 'You notice a freshly-hoed patch of soil forming a sort of new orchard at the edge of the fence. There are fresh new saplings growing from the ground, but there\'s some odd bulges near them too. You wander over, and when you get closer, you are shocked by what you see. There are three men lying in the mud, almost sunbathing, except they are half-buried in the cool mud with just their faces sticking out. The three new saplings are growing from their crotches, and now that you get closer, you see that the trunks of the saplings are still a little pink, clearly being their changing cocks.</p></p>One of them notices you, and grins. "Hey there! You can call me Malus pumila. Gonna be a sweet-ass apple tree soon. You mind kicking some fresh soil over me?", he says. You oblige him by nudging some soil over his eager face, and reflect again on how strange this land is.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 7,
                                "change": "add"
                            }
                        ]
                    },
                    "Wolf Pear": {
                        "text": 'You notice a cart filled with huge, juicy-looking pears, ready to be transported to market. You wander over, considering grabbing one, when you hear a crunching and munching coming from the other side of the cart. You look around, and see a fat, happy wolfman. He is wolfing down pears, with the cores of many others scattered around him. As you watch him eat, his belly bulges and grows, as his body becomes curvy and soft. His limbs become pudgy and fat, but also shrink down, getting stubbier and smaller. His head starts to sink into his torso as his neck disappears. You see a brown object emerge from his head, and it thickens into a wooden stem, before a leaf curls out alongside it.</p></p>He looks up at you with a big grin, his muzzle drooling pear juice, and his fur recedes into a shiny, juicy green pearskin. His limbs shrink down into his fat pear body, and he rolls over as his muzzle recedes and leaves only a grinning smile for just a moment. Then even that smooths over, leaving just spotted pear flesh. You pick him up and place him on the cart, and try to resist the juicy appeal of those pears.',
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