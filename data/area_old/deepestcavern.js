{
        "title": "deepestcavern",
        "header": "Deepest Caverns",
        "nomap": "These caves twist and bend unnaturally. It feels like the walls are shifting.",
        "subheader": 'This is the deepest part of the caverns that you can reach. It is a small, round cavern, with frost covering the floor and walls. At the far end, the cavern falls off suddenly to a sharp, deep pit, from which a cold wind blows slowly, like the breath of a massive, tired beast. The air is so cold that it\s almost impossible to breathe, and the darkness is suffocating.',
        "events": [
            {
                "id": "reward_4",
                "title": "A Perfect Dig",
                "subtitle": "You couldn\'t have possibly done better. The cavern\'s treasures are yours!",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "digger_progress",
                        "value": 3,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "suppliesg",
                "results": {
                    "success": { 
                        "text": 'You are not afraid of a cave, no matter how dark and cold it may be. You treat this lowest area the same way you treated the rest of your trip, by carefully mapping it, placing lights and safety ropes, and analysing everything twice over.</p>Your perfectionism pays off as you finish your detailed map of the cave. This circular shape is far too regular to be natural. This cavern section is man-made! Now that you realise that, you recognise worn away sections of the walls that must once have been columns. The strange shape of the stones on the grounds could indicate where a mosaic of sorts used to be. You check them more carefully, and after a great deal of analysis and deduction, you are able to estimate that this area may have been a shrine or temple of some sort. The columns and steps that used to be here seemed to focus on a central point, just in front of the abyss. Which would suggest that perhaps this place once had an altar, or object of worship? You kneel down in the area you pinpointed, and brush away the stone and dust. Gradually, you discover something. What you previously thought was just more rock is in fact some sort of large, round stone object. You brush it further, and see traces of writing and symbols. Carefully, you pick up the large object.</p>As soon as you do, something seems to be...shifting...</p></p>t has been many years of training for you to reach this point. You have excelled at your studies, learned every rite and ritual, and even faced your brothers in single combat at the proving grounds. Out of all the kinfolk in your tribe, you know you are the most worthy to take up position as the new shaman. Only one ritual remains.</p>You kneel down reverently at the altar to the mad serpent. Your people\'s stone calendar is placed atop it, marking today as the point where his power is strongest. As you kneel, you see your scaly, clawed feet on the mural tiles below you. For a faint moment, you feel confused to see your powerful lizard legs. Like someone else is in your head, looking through your eyes. You shake it off. Now is not the time for idle fantasies.</p>You stand up, your scaly, muscular body gleaming in the light of the ritual fires that are mounted on the columns around you. Only your loincloth remains. Two of the high priestesses, their faces veiled, stand at your sides. They take your loincloth, and step away. You are naked before the mad serpent\'s abyss, but you are not afraid. You place your wide, powerful hands at either side of the altar, and spread your legs. You can hear the priestesses bringing in your brother, Rakalash. You and he have been rivals for years, but all of that came to an end when you struck him down in the arena. He has accepted his place, and knows that this ritual will make him forever subservient to you. You do not look back as your brother kneels, and drops to all fours. His hands are placed on the painted mural, at the red handprints that mark the ritual position. Once more you are tempted to look at him and let him see how proud you are that he will be giving you this honour, but you know that doing so would be against the rules of the ritual. Instead, you lift your bare feet and place them atop his hands. Your long toes flex, and just for a moment, you slide them between his fingers, like you are holding hands. You hope he understands.</p>You feel his long, thick muzzle press against your rear, and you lift your powerful tail to let him rest his face between your scaly cheeks. You then slowly lower your tail over the back of his head and down his neck. This ritual cavern is always cold, and yet you feel a great heat growing inside you. Your brother\'s face starts to press into your rear, and your feet slowly move down, sinking into his hands. You can feel a pulsing moving between your rear and his head, as your feeling and sensation begins to flow down and backwards. You can feel his arms, as they begin to melt and merge into your legs. Without looking, you can feel his strong, scaly back, his own legs behind you, his thick and strong tail. You twitch your toes, and feel both your own feet moving, as well as his, behind you. His body is becoming part of yours, becoming something for you to control. You feel your tail sinking into his back, fusing with his spine. His powerful chest heaves and pulses, and his head sinks even deeper into you, moving into your crotch. You never imagined the ritual would feel this amazing. You look down at your feet, and stretch your toes. Only a faint bulge indicates where your brother\'s hands were, and that soon melts away. Your feet are larger, and wider, and your dark green scales have your brother\'s red markings atop them. He is with you, his strength matching your own. You feel like his is at your back, always working with you. The feeling of another person being there slowly becomes normal, the feeling of just your own huge, muscular body. Your new four legs, your thick taur-lower body, and your brother\'s thick, heavy cock dangling between your rear legs, completely unchanged. You lift and drop your hind legs, and sway your new tail. You are a perfect, glorious lizardtaur. Your front cock is rock-hard and leaking pre. It almost feels like it\'s out of your control, unlike the rest of your new body. You look down at it. Rakalash? You don\'t know if you just imagine it, but you think your cock twitches and moves when you think that. You smile with pride, and look up at the high priestess before you. She lifts a massive mask covered in red and green feathers, and places it down over your long, powerful face. "Behold, a new servant for the mad serpent. Use your strength to crush all who would stand against him", she says.</p>Your eyes glow behind your mask, as your roar of pride shakes the very walls.<p></p>Suddenly, you are back to your own body. Your arms are shaking, and it takes you a moment to remember where you are. In your hands, you are holding an ancient mask. The long shape looks made for a lizard-like creature, and the smooth bone is covered in tiny holes that may once have held feathers, perhaps thousands of years ago. You return to the surface, clinging to the mask with a feeling of intense jealousy.',
                        "area": "cavernentrance",
                        "outcomes": [{
                            "parameter": "skull_mask",
                            "quantity": 1,
                            "change": "add"
                        },{
                            "parameter": "digger",
                            "quantity": 1,
                            "change": "add"
                        },{
                            "parameter": "digger_progress",
                            "quantity": 0,
                            "change": "set" //default greater
                        }]
                    }
                }
            },{
                "id": "reward_3",
                "title": "A Significant Reward",
                "subtitle": "Everything went almost perfectly! You are certain you will find great treasure down here.",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "digger_progress",
                        "value": 2,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "suppliess",
                "results": {
                    "success": { 
                        "text": 'You are not afraid of a cave, no matter how dark and cold it may be. You treat this lowest area the same way you treated the rest of your trip, by carefully mapping it, placing lights and safety ropes, and analysing everything twice over.</p>Your perfectionism pays off as you finish your detailed map of the cave. This circular shape is far too regular to be natural. This cavern section is man-made! Now that you realise that, you recognise worn away sections of the walls that must once have been columns. The strange shape of the stones on the grounds could indicate where a mosaic of sorts used to be. You check them more carefully, and after a great deal of analysis and deduction, you are able to estimate that this area may have been a shrine or temple of some sort. The columns and steps that used to be here seemed to focus on a central point, just in front of the abyss. Which would suggest that perhaps this place once had an altar, or object of worship? You kneel down in the area you pinpointed, and brush away the stone and dust. Gradually, you discover something. What you previously thought was just more rock is in fact some sort of large, round stone object. You brush it further, and see traces of writing and symbols. Carefully, you pick up the large object.<p>As soon as you do, something seems to be...shifting...<p><p>Part of you is ashamed, you must admit. You know it will be a great honour to serve your brother, Atark, and to give him the strength to become shaman. Yet also, you wish it was you standing at the altar right now, being anointed with the magical oils.</p>You and Atark have been rivals since being hatchlings. For so long you were always the one in charge. You were the bigger lizard as a child, and you would push him around and order him to do as you said. Then as you got older, and your sizes started to even out, you would wrestle and fight with him, and you would win only slightly more often than lose. Always, he was one step behind you. Yet now you were going to be one step behind him, forever. In the arena he had struck the critical blow that knocked you down, and now your fate is sealed.</p>You look down at your bulging, muscular arms. Your green scales are splashed with vibrant red, a natural pattern you were born with. For a moment you feel dizzy, like these are not your arms, and these are not your memories. You blink, and force those feelings out. Now is not the time for second guessing your own identity.</p>The veiled priestesses walk out from the ritual chamber, holding your brother\'s loincloth. As shaman, he won\'t be wearing anything like that any longer. It is time. You walk forward with the priestesses at your side. Inside the chamber, you can see your brother standing at the altar. The light of the ritual flames dances off his deep green scales. His legs are spread, and his back is turned to you. You step closer, and kneel behind him. You place your hands on the red hand-marks that are painted on the mosaic below you, and get on all fours. Your brother lifts his thick scaly feet, and places them atop your hands. You look up at his back one last time, feeling apprehensive. Then you feel his long clawed toes close gently around your fingers, almost like he\'s holding your hand. That gives you the resolve you need to do your duty. You lower your head and push it under your brother\'s tail, between his cheeks.</p>As your muzzle pushes between your brother\'s cheeks, he rests his thick and heavy tail atop your head. You feel it sitting along your neck and down your back. You can\'t see anything, but you can smell your brother\'s thick, incense-like scent. You start to feel dizzy, and your face almost seems to fall forward, deeper against his scaly body. You feel warm, and strange. His toes seem to squish and merge with your fingers. You can feel them sliding into his powerful feet, and losing their definition and dexterity. The feeling of his muscular body above and in front of you seems almost to be getting looser. You can feel him all around you, down your back and in your legs. Your arms merge with his calves, and your head sinks deeper as his tail slowly fuses with your spine. As it does, you feel your control over your own body growing lesser. Your legs lift and your toes stretch, but it\'s not you that\'s controlling them. You can no longer feel your head at all, only your lower body. It feels like it had smoothly merged with your brother\'s body, and you cannot tell where you end and he begins. You can\'t see, and it\'s hard to even think. Endless pleasure and a feeling of strength and duty fills you. You are...his body. You belong to him. Your tongue feels like the only part of your head that still exists. It\'s sticking out, thick and throbbing and strangely firm. You taste pre oozing down the tip of it. Somehow, you think you very faintly hear your brother calling your name. You try to respond, and your tongue bounces and twitches a little. You are proud to be part of him.</p></p>Suddenly, you are back in your own body. The cold around you makes you shiver, and you realise you\'re down on the ground on all fours, drooling. You blink and force yourself to gather your thoughts. The round stone tablet is beneath you, the same tablet that your brother was standing in front of. No, not your brother. Just a lizard, some echo of the ancient past. You reach down and carefully take the object, but no further visions come to you. It is time to leave this place, you decide.',
                        "area": "cavernentrance",
                        "outcomes": [{
                            "parameter": "stone_shield",
                            "quantity": 1,
                            "change": "add"
                        },{
                            "parameter": "digger",
                            "quantity": 1,
                            "change": "add"
                        },{
                            "parameter": "digger_progress",
                            "quantity": 0,
                            "change": "set" //default greater
                        }]
                    }
                }
            },{
                "id": "reward_2",
                "title": "A Moderate Reward",
                "subtitle": "You are confident that you are becoming quite the expert in cave diving. It could have gone better, but not by much.",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "digger_progress",
                        "value": 1,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "supplies",
                "results": {
                    "success": { 
                        "text": 'With how well you are starting to handle these caves, even this deepest darkest cavern holds no fear for you. You begin to map it out, shaking off the ever-present sense of fear and danger that makes your skin crawl. Something about the shape of the cave feels familiar, but it\'s too worn and damaged for you to pin it down. The ice damage in particular is so bad that the back wall, where the cave suddenly opens into an abyss, is completely covered in thick dark cracks.</p>Something about those cracks seems to draw your attention. You use some of your supplies to set up a safety rope, then sidle carefully around the edge of the abyss. When you reach the other side, you almost whoop with glee. The interior of the cracks reveals a dizzying quantity of incredible valuable crystal ore!</p>You use your cave-diving knowledge to carefully extract as much of the ore as you can safely carry back up with you. The substance is sleek and almost greasy to the touch, and in the light of your torch it is a deep, bloody red. This is bloodstone, a highly magical natural rock that will sell for a great deal of money. Not to mention that Saberhagen would practically kill to get his hands on some. From what you know of this area, bloodstone only forms underground, where magic collects in high concentration. After hundreds of years, in cold enough conditions, the magic crystallises into this precious stone. You leave the cave, very pleased about your discovery.',
                        "area": "cavernentrance",
                        "outcomes": [{
                            "parameter": "bloodstone",
                            "quantity": 10,
                            "change": "add"
                        },{
                            "parameter": "digger",
                            "quantity": 1,
                            "change": "add"
                        },{
                            "parameter": "digger_progress",
                            "quantity": 0,
                            "change": "set" //default greater
                        }]
                    }
                }
            },{
                "id": "reward_1",
                "title": "Some Small Success",
                "subtitle": "You made it to the deepest part of the caves with your dignity largely intact.",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "digger_progress",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "supplies",
                "results": {
                    "success": { 
                        "text": 'You brush yourself off as you look around this deep, dark hole. Though this area seems empty, you have been tracking the caves well enough to suspect there is more around here worth investigating. You leave the lowest cavern and make your way around and up, following a rough map you\'ve been constructing.</p>Just as you are filling in your details of one of the branches off the main cavern, you come across an astonishing sight. You walk around a bend in the cave and are greeted by beams of actual sunlight. Somehow, against all odds, light is streaming in from the cavern ceiling high above you, and illuminating this section of the caves. The ever-present water that leaks into these caves streams down the walls, and has caused thick sediment to gather on the ground. There, in the light and from the soil, are growing countless beautiful flowers. Their wide petals are purple and white, and they almost seem to glow in the light. You kneel down and touch one. You can feel a powerful energy within them, and you recall the tale of the Witch\'s Lotus - a magical flower that grows only in places where terribly sad things have happened. For there to be this many, what on earth could have happened in these caves?</p>You gather up as many as you can, being careful not to spend too long here in case their soporific smell sends you into a dangerously deep sleep. You leave the caves with a small fortune in rare flowers. Saberhagen will be extremely pleased to see these!',
                        "area": "cavernentrance",
                        "outcomes": [{
                            "parameter": "lotus_1",
                            "quantity": 20,
                            "change": "add"
                        },{
                            "parameter": "digger",
                            "quantity": 1,
                            "change": "add"
                        },{
                            "parameter": "digger_progress",
                            "quantity": 0,
                            "change": "set" //default greater
                        }]
                    }
                }
            },{
                "id": "reward_0",
                "title": "A Hopeless Task",
                "subtitle": "This excavation has been a complete disaster.",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "digger_progress",
                        "value": 0,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "supplies",
                "results": {
                    "success": { 
                        "text": 'At every step of your journey you have been beset by problems. Your supplies are wasted, and you have almost nothing to show for it. Still, at the very least, you did make it to this deepest part of the cave system. While you may not have very much to show for your efforts, you have learned things and you resolve to do better next time.</p>You start to make your way back up, trusting in your newfound knowledge of the dangers here. It is difficult and frustrating, but eventually you clamber out of that dark pit and into the light once again.',
                        "area": "cavernentrance",
                        "outcomes": [{
                            "parameter": "digger",
                            "quantity": 1,
                            "change": "add"
                        },{
                            "parameter": "digger_progress",
                            "quantity": 0,
                            "change": "set" //default greater
                        }]
                    }
                }
            }
        ],
        "npcs": [
            
        ]
    }