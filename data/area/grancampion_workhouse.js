var area = {
        "title": "grancampion_workhouse",
        "header": "The Workhouses",
        "nomap": "As an indentured servant, your options for exploration are limited. You'll have to walk on foot.",
        "subheader": "In the work houses of Gran Campion, the poorest and most destitute struggle to make a living. Those who come here have fallen to the slave class, one of the lowest rungs of Gran Campion society. Earn your way by doing unpleasant or dangerous tasks for the nobles of the city, and you can earn the most valuable currency in the city. Paper slips that mark you as approved by a noble, with which you can purchase your freedom, or buy your way into a higher rank of society.",
        "events": [
            {
                "id": "escape",
                "title": "Purchase Your Freedom",
                "subtitle": "With enough writs to prove your worth, you can buy your way out of this wretched, fog-drowned city.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "slip",
                        "value": 9,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "slip",
                "results": {
                    "success": {
                        "text": "You hand over your stack of signed papers to the surly guard at the front desk of the workhouses. He glances over them with a sneer, but is unable to see any problem with them. \"Alright, fine. Get on with ye then\", he mutters.</p>You are handed a small token allowing passage through the city gates and out of the lands of Gran Campion. You trade this to a caravan, and make your long, slow journey back to the valley.</p>When you return, you are pleasantly surprised to find that your status as an outcast has been forgotten after all. Your absence, and people's curiosity about goings-on in \"the gilded city\", have washed away any bad feelings about your actions.",
                        "area": "dormaus_entrance",
                        "outcomes": [
                            {
                                "parameter": "slip",
                                "quantity": 10,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },
            {
                "id": "gototraining",
                "title": "Visit the Slums",
                "subtitle": "The slums are not a place for a pleasant visit, but they are one of the few areas you are permitted free access to.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "The towers of Gran Campion rise from the distant mist like mountains on a white sea. The nobles of the sprawling city are spared the icy touch of the granfog that floods the narrow, spidery streets, the same way they are spared the disease and hunger that the lower districts suffer.</p></p>The tips of each tower glitter with stained glass and fluttering silken drapes, and the mystical stone they were crafted from glows a faint green in the early morning light. The land surrounding them is an oasis of green and vibrant manicured gardens, surrounded by high spiked walls.</p></p>Between each tower winds both the maze of deep canals that criss-cross the city, and the equally labrynthine lower districts. There, tall and narrow tenements struggle for space in the overcrowded city, becoming smaller and more delapidated the closer you walk to the city's enormously sprawling docks. </p></p>The streets are grey and squalid, patrolled by the black-armored Patrician's Guards in the more prosperous merchant districts, and by the robed and hooded thugs of the Thieves Guid in the poorer areas. ",
                        "area": "grancampion_slums",
                        "outcomes": []
                    }
                }
            },{
                "id": "gotodocks",
                "title": "Head down to the market",
                "subtitle": "During free hours, you are allowed to visit the expansive markets of Gran Campion, to waste your slips as you wish.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "Gran Campion is a city of trade and wealth. From their towers, the noble families maintain a vast web of trading routes and conglomerates that reach out to the furthest inhabited areas of the world. On the boats that sail to and from these ports come exotic spices from Glowscale, rare jewels from the savannahs of Makarna, and ancient artifacts scavenged from the ruins of Westwood.</p></p>As a result, the grand markets of the city are equally enormous. On one street you can find stalls and tents selling over a hundred different kind of candles and incence. On another, a hundred year old craftsman of violins stands next door to a bazaar selling only intricately-woven rugs.</p></p>Throngs of people travel through the narrow streets, both customers and workers making deliveries or calls. Beggars cluster at every corner, and pickpockets slip between the crowds like shadows.",
                        "area": "grancampion_market",
                        "outcomes": []
                    }
                }
            },{
                "id": "cleaningwork",
                "title": "Cleaning Work",
                "subtitle": "Nobles always need cleaning done. Having it done by a rotating squad of random slaves from the workhouse reminds them all not to take their homes for granted when it comes to assassins, a valuable lesson for a growing aristocrat.",
                "type": "statcheck", //or random
                "stat": "stealth",
                "difficulty": 35,
                "requirements": [
                ],
                "icon": "slip",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You are assigned to the manor house of a mid-ranking noble from House Actaeon, and delivered there in a black wooden slave carriage. The ride is bumpy and uncomfortable, but once you arrive you are taken aback by the beauty of the manor.</p>Perfectly manicured gardens surround a gorgeous mansion. Marble statues stand among circles of flowers, amidst tinkling fountains and a few strategically placed benches. The house itself is decorated with columns, though you are led away from those to a narrow door in the rear, for the staff.</p>Within, the house is cozy and warm. Gas lanterns flicker from wall sconces, oil paintings hang from the walls, and the floor is elegantly covered with thick carpet even in the corridors. It seems almost impossibly extravagant compared to the misery and squalor of the city outside.</p>You are kept to the less important areas of the house. You scrub the servant kitchens, clear soot out from a massive oven, and muck out the stables in the rear gardens. You get only a few peeks of the beautiful manor rooms for now. As you are working in the stable, you catch a glimpse of the manor lord. He's a tall, elegant stag, who's antlers curve up regally from his head into a twelve-point rack. His double-breasted frock jacket and spats are a far cry from the grimy rags you are cleaning in. He doesn't notice you at all. Eventually your work is done and you are returned to the carriage, sweaty, bruised and exhausted.",
                        "outcomes": [
                            {
                                "parameter": "slip",
                                "quantity": 1,
                                "change": "add"
                            },{
                                "parameter": "reputation_actaeon",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": "You are assigned to the manor house of a mid-ranking noble from House Actaeon, and delivered there in a black wooden slave carriage. The ride is bumpy and uncomfortable, but once you arrive you are taken aback by the beauty of the manor.</p>Perfectly manicured gardens surround a gorgeous mansion. Marble statues stand among circles of flowers, amidst tinkling fountains and a few strategically placed benches. The house itself is decorated with columns, though you are led away from those to a narrow door in the rear, for the staff.</p>Within, the house is cozy and warm. Gas lanterns flicker from wall sconces, oil paintings hang from the walls, and the floor is elegantly covered with thick carpet even in the corridors. It seems almost impossibly extravagant compared to the misery and squalor of the city outside.</p>You are kept to the less important areas of the house. You scrub the servant kitchens, clear soot out from a massive oven, and muck out the stables in the rear gardens. You find yourself parched and exhausted after the stables, and are unable to continue. You sneak back to the servant entrance, hoping to get a cup of water, but as you move to open the door, the lord of the manor walks past.</p>He's a tall, elegant stag, who's antlers curve up regally from his head into a twelve-point rack. His nose wrinkles with disgust as he sees you, covered in stable muck, your clothes damp with sweat. He doesn't speak to you, but at the end of the day you are reprimanded for being 'insufficiently discreet'.</p>The carriage driver, an older dog with a scarred scalp, gives you a sympathetic look. \"Noble toffs, kid. They expect us to be like silent like those fancy little statues, but still want their privies cleaned!\", he says.",
                        "outcomes": [{
                            "parameter": "slip",
                            "quantity": 1,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "chesgame",
                "title": "A Game of Chess",
                "subtitle": "House Actaeon trusts you enough to request your assistance with one of their famous garden chess parties.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "reputation_actaeon",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "slip",
                "results": {
                    "thing": {
                        "html": "data/active/AGameOfChess.html",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "weddit",
                "title": "Be a Witness for a Wedding",
                "subtitle": 'A noble from House Striate is looking for someone to witness and sign off on his unconventional wedding.',
                "type": "random",
                "requirements": [
                    
                ],
                "icon": "slip",
                "results": {
                    "thing": {
                        "html": "data/active/Wedding.html",
                        "outcomes": [
                            
                        ]
                    }
                }
            }
        ],
        "npcs": [
        ]
    }