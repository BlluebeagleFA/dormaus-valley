var area = {
        "title": "catacomb_entrance",
        "header": "Catacombs",
        "nomap": "Climbing out of here will take a little more effort.",
        "subheader": 'These ancient halls are a maze of twisty stone passages, all alike. The walls are like long stone bookshelves, only in place of books are the dusty, cobweb-covered remains of ancient skeletons.',
        "events": [
            {
                "id": "leavetomb",
                "title": "Climb up to the churchyard",
                "subtitle": "You remember the way back out, and could climb up with some difficulty.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You climb up on the shelf-like tombs, and squeeze your way into a crack in the roof to escape.",
                        "area": "churchyard",
                        "outcomes": []
                    }
                }
            },{
                "id": "getcursed",
                "title": "A Vein of Curse",
                "subtitle": "The side of the catacomb wall is broken and crumbling in one part. Past the thick stone you can see a glistening black fleshy line of what looks like the same substance that the accursed are covered in. Touching it would be extremely unwise.",
                "type": "random",
                "requirements": [
                ],
                "icon": "curse",
                "results": {
                    "mayor_intern": {
                        "text": "You reach in past the stone brickwork. You hesitate at first, but your curiosity gets the better of you. You take a deep breath, and press your hand firmly to the smooth, cold strange substance.</p>Immediately, you feel sick, and confused. You jerk back instinctively and fall to the floor. Your insides are cold and slick, and you start to cough and hack. Thick black ichor oozes and dribbles from your mouth, and flickers of energy crackle along your skin. Your hand that touched the stuff is turning black, a deep and unnatural shiny black, like tar. It spreads up along your arms, and your hand becomes twisted as long claws stretch out from your fingertips.</p>You try to speak, but only lightning and sparks of flame spurt from your mouth. Your mind is spinning, and you are finding it hard to focus. Random thoughts are running through your head, intruding and forcing their way into your focus. Memories that aren't yours, visions of places you have never been.</p>You fall to your knees as the blackness spreads over your chest and begins to flow up your head. Before you pass out, you see one last vision. A bleak, barren snowy wilderness, with nothing but lifeless frost in all directions.",
                        "outcomes": [
                            {
                                "parameter": "curse",
                                "quantity": 5,
                                "change": "set"
                            }
                        ]
                    }
                }
            }
        ],
        "npcs": [
            
        ]
    }