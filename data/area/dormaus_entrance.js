var area = {
        "title": "dormaus_entrance",
        "position": [0.84,0.85],
        "header": "Dormaus Gates",
        "subheader": 'The grassy road opens up here, leading to two wooden poles, bedecked with flags. This marks the entrance to the sleepy town of Dormaus, and the smell of bread and sound of lively music flows through the air as you approach.',
        "events": [
            {
                "id": "entrance_south",
                "title": "Travel South through the Valley",
                "subtitle": "Leaving the village would be unwise unless you're strong and in good health.",
                "type": "statcheck", //or random
                "stat": "might",
                "difficulty": 10,
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You are feeling strong and experienced enough to tackle the world outside. You start your journey south, with the wind at your back. Before long, the town disappears behind you, and you are walking through the grassy countryside. For now, the landscape is still tamed by farms and agriculture, but you can see it getting wilder and more dangerous the further you go. Walking on foot really hammers home how wide and long the valley is. You slow your pace as you begin to approach a small old-fashioned farm, several miles south of where you started.",
                        "area": "farmpath",
                        "outcomes": []
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'Lin gives you a worried glance as you start your journey south. It\'s a long and winding path, and the cobblestones soon give way to rough mud. You are barely out of sight of the town when you are already feeling achey and weak. You stop for a moment, and Lin appears near you. </p>"Ah, adventurer, I think you should spend some time in the town first to get used to your body, before you venture outside! I can\'t protect you if you get into trouble beyond the town walls!", she says. She leads you back to the village for now.',
                        "outcomes": [{
                            "parameter": "pain",
                            "quantity": 1,
                            "max": 1,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "flute_gift",
                "title": "Flute's Gift",
                "subtitle": 'You look around the gentle pastoral road leading up to the town. It seems the road here gets a lot of traffic, and some of said traffic approaches while you\'re waiting around. A slender fox man is hiking up to the gate, his back loaded heavily with a huge backpack, from which various strange trinkets and fabrics are sticking out into the air. When he sees you, he grins a wide vulpine smile and drops his bag.</p>"Well hello there! Let me guess, a new adventurer? What you need is an adventurer\'s kit!" The fox roots around in his bag and pulls out a wrapped package, which he tosses to you. "The name\'s Flute, and helping people out is my second favourite thing to do!" </p>Do you want to accept the package?',
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "slutty_shirt",
                        "value": 1,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "fluteicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You nod happily and take the gift, intending to open it later. But Flute moves forward, grinning, and you blink in shock as he slides down his green pants to reveal a thick, long cock that stands erect in the air. "Great! Since I did a favour for you, now you\'ll do a favour for me."</p>Whether or not you want to, you find yourself being pushed down to your knees. Your palms are tingly and you can\'t seem to resist Flute\'s actions. Was there something in that package? It doesn\'t matter, the only package you can seem to care about is the enormous one between the legs of this handsome fox. </p>Your mouth opens as Flute thrusts forward, sliding his cock over your tongue and deep into your throat. He thrusts in and out, grinning and breathing heavily while your nose bounces against the pale orange fur of his pubes. His clawed hands grip harder on your head as he shudders and moans. </p>You feel his cock pulse, before thick, hot cum floods your mouth. You swallow every drop of his salty fluids, as it is pumped into you in thick and heavy spurts. Flute then pulls out, leaving you craving more. He pulls his pants off, gives you a wink, and leaves. A little while later, you finally recover your senses and manage to get up off the ground.',
                        "outcomes": [
                            {
                                "parameter": "slutty_shirt",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "reduce_pain",
                "title": "Ask Lin to Help With Pain",
                "subtitle": 'Lin is happy to help new adventurers with their problems.',
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "pain",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "pain",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'Lin takes off her hat and reaches down into it. Her arm seems to move much much deeper than the depth of the hat would appear to indicate. There is a loud clattering and banging, and she finally withdraws a tub of cream from within her hat. "Here we are! This will fix you right up", she says. She takes a scoop of the cream, holds your hand, and rubs it gently into your palm with her soft white fingers. Your skin tingles and feels cool all over, and you feel your wounds closing up and healing.',
                        "outcomes": [
                        	{
                                "parameter": "pain",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },{
                "id": "reduce_guilt",
                "title": "Ask Lin to Help With Guilt",
                "subtitle": 'Lin is happy to help new adventurers with their problems.',
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "guilt",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "guilt",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'Lin crosses her arms and looks at you like a disapproving teacher. "Have you been up to no good? I\'ll help you, but you really should stay on your best behaviour from now on!", she says. Lin takes you to the mayor\'s office, and tells you to be quiet. After she walks up to the locked file office, she reaches her hand into the wall, and it passes through like it is just fog. She pulls out the investigation documents on your behaviour, and stashes them in her hat.',
                        "outcomes": [
                        	{
                                "parameter": "guilt",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },{
                "id": "reduce_curse",
                "title": "Ask Lin to Help With Curse",
                "subtitle": 'Lin is happy to help new adventurers with their problems.',
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "curse",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "curse",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'Lin places her hand on your forehead and frowns. "Goodness! You have terrible magic poisoning. I know visitors are vulnerable to magic, but this is much worse than I expected", she says. She places her thumbs carefully on your forehead and begins to hum something. The sound makes you feel dizzy and sleepy, and everything around you, for a moment, looks fuzzy. The lingering feeling of dread from your curse recedes slightly.',
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
                "id": "reduce_outcast",
                "title": "Ask Lin to Help With Outcast",
                "subtitle": 'Lin is happy to help new adventurers with their problems.',
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "outcast",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "outcast",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": '"Oh dear, are you feeling embarrassed? I can help you out with your reputation, sure!", Lin says. She walks around town with you, and listens in to what the townsfolk are talking about. Somehow, none of them can see her. She then instructs you on how to do little acts of kindness to slowly improve your reputation.',
                        "outcomes": [
                        	{
                                "parameter": "outcast",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },{
                "id": "entrance_random",
                "title": "Wait Near The Entrance",
                "subtitle": "It's a nice day, you could wait and watch the people here.",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "reluctant_horse": {
                        "text": 'You are walking through the gates of the town when you hear stomping and whinnying. You look around to see Turner, the horse man, patting the flank of a large quadrupedal horse, who is shifting and stomping with annoyance. Turner speaks gently. "Woah there boy! You agreed ta help me with a month \'a labour! You\'ll get used ta hooves, I promise." It seems this horse used to be an adventurer like yourself. Turner\'s rough hand reaches under the horse\'s belly and starts to stroke him, encouraging the former adventurer\'s sheath to release his heavy, splotched horse cock. He grips and strokes it, and the horse whinnies a little. "See boy? Bein\' a horse ain\'t so bad!" You almost feel a little jealous...though your jealousy is reduced a little when you find the former human\'s discarded wallet.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "ap_carpenter": {
                        "text": 'You hear a racket coming from the flagpoles, and look up to see Mikhail the dog hammering fresh nails into the sign bearing the name of the town. His shirt is off as he works, showing off his strong muscle gut and big, hairy forearms. He shouts some orders to another dog on the other side, who looks very much like him, though younger and skinnier. </p>"Boy, get your head in the game! You\'re gonna make this whole sign fall down." Mikhail sighs as the other dog stumbles, and drops his nails. "Boy, I need a man to do this job right." He clicks his fingers, and the smaller dog growls and shudders. His body grows larger, making his shirt and clothes creak, and he rips his shirt off with arms that are thickening and getting rougher. His soft fur becomes thick and shaggy, and his lithe chest develops hard muscle, which is then softened by a layer of pudge. His face becomes rugged, as his fur forms grey streaks and he grows a bristly beard across his cheeks. </p>He laughs in a deep, mature voice. "Well pops, guess I should call ya brother now!" he says. Mikhail nods, and they get back to work. Once they\'re done, the new carpenter walks past you and tosses you a few coins. "Buy yourself something nice, son!", he calls out to you.',
                        "outcomes": [
                            {
                                "parameter": "chips_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    }
                }
            }
        ],
        "npcs": [
            {
                "id": "lin",
                "name": "Lin",
                "description": "Lin is a white rabbit, wearing a blue-and-white striped top hat with a jiggling question mark atop it. She is wearing a waistcoat and sitting on a stack of books.",
                "icon": "linicon",
                "dialogue": [
                    {
                        "input": "What is your name?",
                        "output": '"I am Lin, the tutorial bunny! I am here for helping new players who might be confused."'
                    },
                    {
                    	"input": 'What is your job?',
                        "output": '"I sit here and tell people how to play the game! I am technically non canon so I do not have any sex events, though. Unless someone wants to write one for me!"'
                    },
                    {
                    	"input": 'How do I play the game?',
                        "output": '"Use the tabs on the top to navigate the menus. This menu is for talking to NPCs like me. The first tab takes you back to events, where most of the fun happens. The second tab lets you move to different areas, just click on the little icons.</p>When you do events, you\'ll get items and parameters, and your stats will gradually increase. Higher stats means higher chance of success. Failing might increase your sufferings though!"'
                    },
                    {
                    	"input": 'What are sufferings?',
                        "output": '"The four types of suffering stat are pain, outcast, curse and guilt. Failing events will increase these bad parameters, and if they hit five, you will be forced into a negative event. You can\'t leave negative events on your own, you have to pass events to escape them, so you might want to avoid that!"'
                    },
                    {
                    	"input": 'How do I reduce suffering stats?',
                        "output": '"While you\'re still low level, just come to me, I\'d be happy to help you out with those. Once you get a little stronger, you will have to find some other ways to reduce them though, by buying items or spending resources on healing events."'
                    },
                    {
                    	"input": 'How do I equip things?',
                        "output": '"Go to your inventory tab. You\'ll see your equipment slots, and any equipment you own next to them. Click something to wear it, or click your equipment slot to empty it. Equipment alters your stats, usually in a positive way. You can see your equipment effects next to your stats, on the left."'
                    },
                    {
                        "input": 'How come sometimes I just get money after an event even though the it didn\'t say anything about that?',
                        "output": '"All experience is valuable! Consider the cash that appears after you see a random event to be a physical representation of the value you\'ve gained from what you learned."'
                    },
                    {
                    	"input": 'See you later.',
                        "output": '"I hope I have been helpful! Have fun and remember, the objective is to masturbate!"'
                    },
                    {
                    	"input": 'Can I see your cock?',
                        "output": '"You might have more luck with the other NPCs. I am non canon!"'
                    },
                    {
                    	"input": 'Can I touch your paws?',
                        "output": '"You might have more luck with the other NPCs. I am non canon!"'
                    }
                ]
            }
        ]
    }