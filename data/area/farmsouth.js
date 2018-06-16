var area = {
        "title": "farmsouth",
        "header": "Farm South Exit",
        "nomap": "You don't know your way around this area yet. You'll have to navigate on foot.",
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
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You leave the wheat fields and make your way back to the farmhouse.",
                        "area": "farmhouse",
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