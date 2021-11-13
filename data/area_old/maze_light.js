{
        "title": "maze_light",
        "header": "Memory Maze",
        "nomap": "Every direction you take leads only to more mirrors. You can't even tell if you are moving or if the maze is just shifting around you.",
        "subheader": 'Are these mirrors lighter? Your head hurts. The sun is blinding...',
        "events": [
            {
                "id": "asong",
                "title": "Someone Singing?",
                "subtitle": "This memory isn't like the others. Those are gleaming and vibrant with power. This is just quiet, and dark. You feel safe.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "curse",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "garethflower",
                "results": {
                    "Brogulls": {
                        "text": "Your head hurts, and so does your entire body. You feel like you are horribly burned and aching all over. This doesn't feel like the other mirrors. You can still remember wandering through the maze, looking for a way out. Are you still you, or just a memory of someone just like you? </p>Your eyes are closed, and wherever you are, you can hear someone humming to themselves. It's a quiet, melancholy memory. It reminds you of a waltz, or maybe something that would play on a piano. You struggle to open your eyes, and see very little. You're somewhere underground, perhaps? You can hear a faint drip of water coming from somewhere. In front of your eyes is a long, thick muzzle, with glistening wet black flesh. Your own arm is flopped at your side, stretched out and unfamiliar. It's thin, and gnarled, with long black claws and strange black flesh. </p>The humming stops, and a voice speaks to you, a kindly and deep older man's baritone. \"Don't try to get up yet. You're still fighting it off\", he says. You try to speak, but a bolt of electricity arcs from your mouth and sends sparks skittering across the stone floor. Pitch black ocre drips from your twisted muzzle. \"Don't worry. You won't hurt me\", he says again. </p>A gentle hand strokes your head. You try to turn and see, but you only get a faint glimpse before your vision starts to blur again. Light is shining from cracks in the ceiling above, and you think you see little flowers growing from the stone. As you pass out, you hear him speak again. </p>\"Don't lose your way.\"",
                        "area": "maze_1",
                        "outcomes": [
                            {
                                "parameter": "curse",
                                "quantity": 1,
                                "change": "sub"
                            },
                            {
                                "parameter": "asong",
                                "quantity": 1,
                                "change": "add",
                                "max": 1
                            }
                        ]
                    }
                }
            },{
                "id": "mrbatincurse",
                "title": "Mr Bat, Systematically",
                "subtitle": "This reflection feels strange. You feel like you're looking around a corner with a periscope, like its the world around you but separated from your vision by a few degrees.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "curse",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "mrbat",
                "results": {
                    "Brogulls": {
                        "text": "You force yourself to open your eyes. You are clinging to a wall, which is wet and slick with a thin layer of dripping black ooze. Your hands are long, twisted black claws, and there is a long snarling muzzle on your face.</p>It's difficult to move. Your body keeps wanting to go in different directions, and when you try to speak, you only crackle with electricity and let out a bubbling growl. You try to look around, and see that you are in a wide, dark underground shaft. Glistening black creatures are crawling along it, and over eachother, hissing and growling and oozing more blackness.</p>You struggle to focus and think, with your mind so dizzy and confused. Then you notice something moving fast, a blur of motion bouncing across the walls. You force yourself to look closer, and see a bat land on one of the accursed creatures. His long feet hold on to the beast's muzzle and back, and he leans down and grips its forehead in his hand. The creature struggles, and its eyes glow. Then the bat tosses it aside and jumps to another one. You try to speak, but your head just thrashes and looks away.</p>Your vision blurs and darkens again, and you drift into dreams and visions and memories. You are back in the maze, just staring at a reflection. Was that the present day? Mr Bat will find you eventually, he is pretty reliable. But perhaps you can get your own way out before then. It looks like he had a lot of searching to do.",
                        "area": "maze_1",
                        "outcomes": [
                            {
                                "parameter": "curse",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },{
                "id": "yourclaws",
                "title": "Your Claws All Black",
                "subtitle": "This memory feels urgent, and hot, and sharp. You can feel your heart pounding in your chest, and sharp pains at your side.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "curse",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "pain",
                "results": {
                    "Brogulls": {
                        "text": "You open your eyes, and snarl. There's a sword sticking out of your side. Black goopy \"blood\" is dripping over the metal and crawling up the hilt. The person holding it flinches back and jumps aside as your accursed goop almost touches their skin.</p>In front of you is a small group of adventurers. You faintly recognise the stone corridor you are in. It's the dark catacombs under Dormaus Village. The leader, a massive muscular cow in plate mail, shoves her torch at you, and you flinch back. Next to her, the fox fencer who stabbed you falls back and pulls a spare shortsword out from her belt. At the back, a rabbit in cleric's gear holds up a charm and mutters a protective prayer.</p>You try to speak to them, to tell them you are not a monster. No words come from your mouth, only a bubbling froth of black tar, and a crackling bolt of electricity that crawls along the wall, leaving a sooty black mark, then bounces off an invisible wall of energy. The rabbit flinches and pants with exertion after his wall deflects your electricity.</p>You flex and curl your long, dripping claws. Your muzzle is so long and sharp and filled with black, unnatural teeth.</p>Is this a memory? You don't feel like someone else. You remember the maze, and what parts of your mind you have retained. You just feel unwell, and dizzy, and sick. The cow hefts the warhammer she is holding in her mailed fist, and swings it towards your head.</p>You catch her arm in one of your long claws, and reach forward. You tear her shoulder plate open, revealing her bare, enormous bulging bicep. With one touch you could curse her too. Spread your poison over her body and leave her a mindless, crawling beast.</p>Your hand reaches out closer and closer, while she struggles and snorts and tries to free herself. With your claws inches from her skin, you force yourself to open your hand. She staggers back, away from you.</p>The rabbit says something, and the corridor is filled with blinding light. You snarl and recoil, and when your vision returns, the adventurers are gone. Darkness slowly takes over your vision as you find yourself drifting away and falling asleep. You awaken back in the maze, no closer to being free.</p>Or are you? You saved that adventurer, even if she doesn't know it. You aren't gone for good. You haven't lost your way.",
                        "area": "maze_1",
                        "outcomes": [
                            {
                                "parameter": "curse",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },{
                "id": "wake up",
                "title": "Wake Up",
                "subtitle": "Everything hurts like hell. The wind is cold, the sun is too bright. But you are yourself again.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "curse",
                        "value": 1,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "curse",
                "results": {
                    "Brogulls": {
                        "text": "You slowly open your eyes. You are lying in the grass, and your body is aching and sore. Slowly, you push yourself up, and suddenly feel wretched. You cough and gag, and a trickle of thick, glistening black slime drips from your mouth, then sizzles and disappears in the sunlight.</p>Once your eyes gradually adjust to the sunlight, you realise you are sitting in Dormaus Village graveyard. You lean against a large, ornate tomb. Its features are worn and weathered away by time, but it makes a good armrest to help you climb back to your feet. You give the tomb a little word of thanks, and then limp slowly back towards the village.",
                        "area": "churchyard",
                        "outcomes": [
                            
                        ]
                    }
                }
            }
        ],
        "npcs": [
            
        ]
    }