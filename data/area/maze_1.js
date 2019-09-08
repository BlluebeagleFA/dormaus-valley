var area = {
        "title": "maze_1",
        "header": "Memory Maze",
        "nomap": "Every direction you take leads only to more mirrors. You can't even tell if you are moving or if the maze is just shifting around you.",
        "subheader": 'You are lost in an endless labyrinth of reflections. Each of them shows a different life, a different history. The memories and experiences of countless magic users throughout time are tangled up here, and if you cannot find yourself, you might never be free.',
        "events": [
            {
                "id": "meetdragon",
                "title": "A Dragon",
                "subtitle": "There is someone waiting here. A massive, quadrupedal dragon, standing amongst the countless glittering reflections and floating mirrors. His body is smooth and black, and his wings are stretched out, stroking and touching against the mirrors.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "seven_connection",
                        "value": 1,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "sevenicon",
                "results": {
                    "Brogulls": {
                        "text": "When you get closer, the dragon turns to you. His huge head moves down, and he tries to look at you. His eyes are strange, and grey. They don't seem to have any pupils, and you feel like he is looking at someone behind you, and doesn't see you at all.</p>\"You kept me waiting so long\", he says, his voice cracking and trembling. \"Why did you...take so long...\", he whimpers.</p>He blinks, and his eyes shift from grey to a glittering blue. He seems to focus on you, and looks surprised. \"Oh! There's someone else here?\", he says.</p>You ask him where you are, and what this place is. He looks around at the mirrors, and thinks for a while. \"This is the memory maze. I'm not sure where exactly it is, or how it exists. But there are a lot of mirrors here. If you can find the one that's yours, I think you can go home\", he says.</p>He walks with you through the mirrors. No matter how far you go, you don't seem to get anywhere new. The mirrors shift and move like reflections in broken glass. Showing fragments of lives of people you don't know or recognise.</p>\"I've been here a long time, I think. I don't remember anything about who I was before. Maybe if you find one of my memories, we could get out together? I will look for yours, too\", he says. He stops suddenly, and stretches his long neck up, looking up into the dizzying mirrors above you.</p>\"The stars are coming out...\", he mutters. You take one step too far, and as the mirrors shift, you lose track of him.",
                        "outcomes": [
                            {
                                "parameter": "seven_connection",
                                "quantity": 1,
                                "change": "add",
                                "max": 1
                            }
                        ]
                    }
                }
            },{
                "id": "courtwizard",
                "title": "A Mirror In A Tower",
                "subtitle": "You can see a room filled with books and tools. A window on one wall shows the high open sky.",
                "type": "random",
                "requirements": [
                    
                ],
                "icon": "curse",
                "results": {
                    "thing": {
                        "html": "data/active/CourtWizard.html",
                        "areas": ["maze_deep", "maze_light", "maze_light", "maze_light"],
                        "outcomes": [
                        ]
                    }
                }
            },{
                "id": "summoning",
                "title": "A Mirror In The One Tower, Spiral",
                "subtitle": "The reflection here is dizzy and nervous and nauseous. You didn't study enough!",
                "type": "random",
                "requirements": [
                    
                ],
                "icon": "curse",
                "results": {
                    "thing": {
                        "html": "data/active/SummoningDisaster.html",
                        "areas": ["maze_deep", "maze_light", "maze_light", "maze_light"],
                        "outcomes": [
                        ]
                    }
                }
            },{
                "id": "dracolich",
                "title": "A Mirror In A Black Castle",
                "subtitle": "This mirror pulses and wobbles with pure, sickening hatred.",
                "type": "random",
                "requirements": [
                    
                ],
                "icon": "curse",
                "results": {
                    "thing": {
                        "html": "data/active/Dracolich.html",
                        "areas": ["maze_deep", "maze_light", "maze_light", "maze_light"],
                        "outcomes": [
                        ]
                    }
                }
            }
        ],
        "npcs": [
            
        ]
    }