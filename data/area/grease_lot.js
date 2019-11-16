var area = {
        "title": "grease_lot",
        "header": "Grease Pit Lot",
        "position": [0.27,0.67],
        "mapId": "worldmap.jpg",
        "subheader": 'This building deep in the woods looks particularly out of place. The trees have been chopped down and the earth flattened to form a dirt lot. A wooden cabin has been erected atop the dirt, with corrugated metal sheeting on the roof.',
        "events": [
            {
                "id": "leave_putlot",
                "title": "Return to the Woods",
                "subtitle": "You have no further business here",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You follow the path back into the wild woods",
                        "area": "eastwoods_entrance",
                        "outcomes": []
                    }
                }
            },{
                "id": "enter_pit",
                "title": "Enter the Grease Pit",
                "subtitle": "The bar is loud and rowdy",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You push open the door into the loud and smoky bar, and enter.",
                        "area": "greasepit",
                        "outcomes": []
                    }
                }
            },{
                "id": "lot_random",
                "title": "Wait outside the Grease Pit",
                "subtitle": "You might get a better idea of what it is like inside if you observe for a while",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "Rubber Skunk": {
                        "text": "You notice something leaning up against the side of the building, and sneak closer for a better look. To your surprise, it appears to be a kind of motorbike. There are several of them next to eachother, with thick and chunky pipes, and oversized gears and machinery on them. They seem both primitive and more advanced than you'd expect for the civilizations near here.</p>Clearly you are not the only person to suspect the machines' value. Another human emerges from the bushes, not noticing you, and sneaks up towards one of the bikes, a large black one with crude white stripes painted on it. As soon as he touches the rubber tire, though, the black rubber seems to flow across his hand and arm. He yelps, struggling as it flows up his body, coating him in slick black rubber. It forms a muzzle with a shiny black visor over his head, pawlike boots on his feet, and a massive rubber skunk tail behind him. The door to the bar slams open, as a leather-jacket wearing skunk with a massive gut walks out. He stomps over to the human and laughs. \"Just give in, slave. Like mah hog, yah nothing but my tool now. Yuh exist to serve me and do as I say\", he says in a deep, growly, echoing voice. The rubber skunk drone slowly stops struggling, and falls to his knees to kiss his master's boots with his rubber face. You find yourself crawling forward, desperate to join him, until you catch yourself and quickly flee.",
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 9,
                                "change": "add"
                            }
                        ]
                    },
                    "Musk Hypno": {
                        "text": "There's someone else loitering outside the bar today. A massive, heavyset skunk. His huge off-white belly hangs out from his open leather sleeveless jacket, and he is wearing thick denim pants and a pair of enormous steel-capped boots. He's smoking a cigar, with two smaller, stupid-looking skunks talking to him with dazed expressions.</p>The doors to the bar crash open, and a human male stumbles out, clearly drunk out of his mind. His swaying, uneven steps cause him to turn and topple, and accidentally fall right against the wall next to where the skunk is smoking.</p>The skunk grins, and lifts one of his arms. With his bare jacket, there's nothing covering the skunk's muscular, furry armpits at all. The human sniffs the air, and looks momentarily disgusted, then confused, then strangely needy. He stumbles closer to the skunk, who just blows thick, dark smoke all over his face. When the smoke clears, you see the human nuzzling and kissing the skunk's armpit, while his face pushes forward, stretching into a muzzle.</p>The other two skunks strip his clothes, letting you see that black and white fur is spreading all over his body. His expression is empty and happy and mindless, and he moves on to kissing the skunk's other armpit, as his body is converted into another obedient, adoring skunk. A whiff of thick, musky stink blows over close to you, and you start to drool and shiver with desire. Your mind sways with lust for that gorgeous, powerful skunk, and you briefly consider surrendering your entire life to him for the chance to lick his musky, sweaty pits.</p>You force yourself to back away, your whole body aching as you wonder how good it would feel to smell him closer, if just a distant whiff was that good...",
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