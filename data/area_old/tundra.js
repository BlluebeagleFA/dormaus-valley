{
        "title": "tundra",
        "header": "Lost",
        "nomap": "There is nothing but snow, everywhere.",
        "subheader": 'You are adrift in endless deep white. The frigid cold extends forever in all directions. At times the snowdrifts are so thick you are unsure if you are heading uphill or down, and the blinding snowstorms twist and warp your sense of direction.',
        "events": [
            {
                "id": "northmore",
                "title": "DEEPER",
                "subtitle": "Something is calling you forward into the cold. Something like a voice, a vast, vast distance away. It speaks in words like knives that make you sick and shaky. Each step you take the world gets colder and your skin burns and aches.",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "pain",
                        "value": 3,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "curse",
                "results": {
                    "success": { 
                        "text": "You feel compelled to follow the feeling. It drags you along like puppet strings tied into your gut, even as you stumble, and fall. As your eyes grow blurry from the cold, and the pain in your limbs is replaced with a deadly creeping numbness.</p>At times, you think you see something through the flurries of snow. A distant, towering shadow. Then it draws away, always further back, ever harder to reach. You know somehow that the thing calling you is countless miles beyond the most frigid wastes, far beyond the point that even the hardiest of arctic creatures could survive. You can never possibly reach it before this frozen hell claims your life.</p>You keep walking.",
                        "outcomes": [{
                            "parameter": "pain",
                            "quantity": 1,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "northfinal",
                "title": "DEEPER",
                "subtitle": "Something is calling you forward into the cold. Something like a voice, a vast, vast distance away. It speaks in words like knives that make you sick and shaky. Each step you take the world gets colder and your skin burns and aches.",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "pain",
                        "value": 2,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "curse",
                "results": {
                    "success": { 
                        "text": "You can no longer feel anything. It is like you are floating, far far away from your body. You are unsure if you are even still walking. Everything is faint, and warm, and quiet. The roaring wind, the endless white, it fades away as you drop forward into the snow, and sleep.</p>You dream that you are deep under the world, and that you are everywhere at once but you cannot pull yourself together. The dream goes on forever...and then you wake up.</p>You are lying down on something thick and soft, with a strong barnyard stink to it. The sound of a crackling fire comes from nearby, and you slowly open your eyes. You are lying on a fur rug of some sort. Your whole body aches and feels exhausted. You barely manage to push yourself up onto your elbows, and look around. You are still outside, but you are surrounded by a herd of huge, furry reindeer. Some of them snort and shake their heads, or tap their wide hooves. They form a circle around you, staying close to the fire and protecting you from the wind. It is surprisingly warm, despite the open sky above you.</p>Opposite from you, across from the fire, is a man sitting on more furs. He is rotund and burly, wearing a heavy leather cloak lined with fur, and more leather clothing beneath that is strung with odd beads, leaves and animal teeth. He reaches up and pulls back his hood, revealing that he is an old human with a thick, soft white beard and moustache. His equally bushy eyebrows rise as he smiles gently. \"Here, drink this\", he says. His voice is deep and booming, and he passes over a wooden bowl filled with white fluid. It is steaming and warm, and you sip it gently. It is creamy and thick, tasting like milk but with an unusually wild and gamey taste to it.</p>\"Reindeer milk. It will restore your strength, but drink slowly. It's hot\", he says. You sip it as he stands up, his massive leather boots crunching in the snow. He walks over to you and kneels down, before pulling off one of his fur-lined gloves and resting his hand against your leg. You feel a gentle warmth pulsing and flowing through you, as the pain and burning of your frostbite recedes slowly.</p>\"You are lucky to be alive, traveller. This is no place to be wandering unprotected. There are far worse things than I to encounter in these steppes. Once you recover your strength, you may travel with me to the trading post at the south. You can ride with the mail sleds, and make your way back to civilization\", he says.</p>You nod, feeling sleepy and light-headed. He takes the bowl from you gently and pulls another fur over you as you drift off to sleep.</p>When you awaken again, you are in motion. You sit up, feeling much better than before. Your aches and pains are almost completely gone. Looking around, you see that you are lying in a large wooden sled, which is being pulled along the snow by a herd of reindeer. Your rescuer is sitting at the front, holding the reins. He turns to you and nods. \"Ah, you awaken again. I am glad to see it. I am Kristoph, and these reindeer are my family. We will see you safely to more hospitable places, I promise you\", he booms.",
                        "area": "kristoph_sled",
                        "outcomes": []
                    }
                }
            }
        ],
        "npcs": [
            
        ]
    }