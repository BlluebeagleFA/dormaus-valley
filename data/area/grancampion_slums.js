var area = {
        "title": "grancampion_slums",
        "header": "The Slums",
        "nomap": "As an indentured servant, your options for exploration are limited. You'll have to walk on foot.",
        "subheader": "You wander through the narrow, tangled alleyways adjacent to one of Gran Campion's canals. The waterside is covered with rotten, cramped buildings. Narrow tenements are squeezed together like sardines, where families live with six or more people in one room.</p>But it is still better than the people who live below, on the rickety wooden platforms inches above the foul waterways. The slums are the bottom of Gran Campion society, but there is still hope for a better life in these crime-and-disease ridden warrens. In the \"pits\", there isn't even that.",
        "events": [
            {
                "id": "returnworkhouse",
                "title": "Return to the Workhouse",
                "subtitle": "Go back to the drudgery of life in Gran Campion.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You head back to the wet, cold and miserable squalor of the workhouse.",
                        "area": "grancampion_workhouse",
                        "outcomes": []
                    }
                }
            },{
                "id": "song",
                "title": "A Haunting Song",
                "subtitle": "A sad, haunting song drifts towards you from between the alleys. It is a significant change from the creaks, groans and distant barking that normally come from these streets.",
                "type": "random",
                "requirements": [
                    
                ],
                "icon": "default",
                "results": {
                    "thing": {
                        "html": "data/active/CampionHealer.html",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "athief",
                "title": "A Thief?",
                "subtitle": "You are distracted from looking down at the pits, when a cloaked figure rushes past and bumps into you. Then they flee into an alley and disappear. Instinctively, you check your pockets.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "slip",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "thing": {
                        "html": "data/active/RatThief.html",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "mossfog",
                "title": "The Mossfog",
                "subtitle": "You hear a wet, hacking cough coming from a nearby alleyway. The few huddled people who pass by you in the narrow streets avoid it, and pull their cloaks up tighter.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "slip",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "inanimatefetish",
                "results": {
                    "thing": {
                        "html": "data/active/Mossfog.html",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "winery",
                "title": "A Wine Bar",
                "subtitle": "A run-down, grimy bar sits on the corner of a busy slum street.",
                "type": "random", //or random
                "requirements": [
                    
                ],
                "icon": "inanimatefetish",
                "results": {
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": "You blink as you step out of the bright light, and into the large, rustic looking tavern. From the outside, this place looked like a cesspit. Rundown, falling apart, just like the rest of the slums. </p></p>But inside, it was a very different story. Glimmering blue flames burn in chandeliers on the ceiling, while small candles give off a rainbow color of light. The flames dancing and changing hues, so much, you found yourself just stopping and staring at a nearby empty table. </p></p>The tavern is totally empty, except for one figure standing behind a bar, an amused smile on his muzzle. He’s a pale white wolf, with a scar over one, sightless eye. The large burly canine giving a chuckle as he leaned over and cleared his throat. The sound drawing you out of the hypnotic dance of the candles as you turn to look at the lupine, a small blush on your cheeks. </p></p>“Greetings traveller, it isn’t often I have guests before sunset. My name is Orius. It’s nice to meet you. Tell me, what brings you here? We’re not actually open at the moment, but, if you’re looking for work, I may have a few jobs open for you. </p></p>The flickering candles and the warm, soothing smell makes you feel dizzy. You find yourself mumbling about asking for a job.</p></p>The wolf nods as you explain. “Well, I’m always one to welcome new talent to my tavern, come, come, take a seat my boy. Take a seat, tell me, what do you enjoy most when you think about working here, hmm?” He asked, leaning forward, his one good eye focused on you as you take a seat in front of him. </p></p>It’s getting harder to think. You mumble the first thing you think of, “serving drinks”.</p></p>The wolf’s eye seems to glitter with suppressed mirth as he nods. “Well, that’s something we always need. You’d be shocked by how quickly we go through it. Though….if you don’t mind me asking, I’m wondering, who’d you’d rather serve a nice beverage too, me? Or some random customer?” </p></p>The handsome wolf, his soothing voice, the flickering of the candles. You stare into his eye, feeling your mind growing dull, as you say “you”.</p></p>The wolf licked his lips as you say that. “Mhmmmm, I was hoping you would say that. Well, I suppose we shouldn’t keep you out of your….heh….uniform. Don’t worry, this won’t take too long. Just relax. Take a deep breath, and I’ll get you looking right and proper for your new duties.” </p></p>As the wolf spoke, his eye began to blaze with silver light as he looks into your eyes. And you begin to feel…..bubbly. A hiccup slips from your mouth, as your whole body gives a shudder, a feeling of coolness running through your body. </p></p>“That’s it. Relax. I think I could go for a nice bottle of beer before I open up.” The wolf rumbled happily as he watched you, his magic washing over you, starting to change you. </p></p>The first change that happened was your clothes, or, rather your former clothes. Out of the corner of your eyes, you could see them dissolve away into silver light, leaving you naked as the day you were born. </p></p>Your body was the next to change. You could see your hands begin to lighten, all of the color just fading away as they became translucent and see through. Nothing but clear, solid glass. The glass rapidly starting to spread up your arms, soft crackling echoing through the tavern as they hardened and locked into place. </p></p>And yet, you didn’t feel anything wrong with this. In fact, as you gave another bubbly hiccup. It felt….good…..nice. Even as your arms locked into place and the translucent glass began to spread over your chest, traveling down to coat your sides, your legs, and moving up your neck towards your head, you couldn’t help but revel in it. You felt safe, protected. </p></p>You felt….right. </p></p>“There we are, just accept it. Accept what you are. You’re nothing but a bottle of beer for my bar. That’s all you are. All you’ve ever been. And all you’ll ever be. Nothing but a nice, tasty drink, eager to be guzzled down, eager to refresh. You have a purpose to serve. And soon, you’ll serve it. But you’re much too large. We need to make you more….managable.” The wolf cooed. </p></p>In just a few seconds, you look like a glimmering glass sculpture of yourself, sitting motionlessly on the bar stool. An almost breathtaking work of art. But it doesn’t last as your shimmering body begins to move on it’s own. Your glass hide rippling, almost like liquid as it begins to flow together. Your arms and legs pulling together against each other, and against your sides. </p></p>Your legs glow together. Your legs and feet rounding out into a nice stable base. You needed that….yes….you could feel that. You needed a good base. You didn’t wanna fall over after all. You might spill, and that was no good. You wanted to be drunk by someone. You needed to be drunk by someone. They couldn’t do that if you were spilled all over a table or the floor. Or worse, if you fell over and shattered. </p></p>Slowly, your arms vanished, as the rounding effect continued to consume you. Your chest barreling out, as your head was forced to look skyward. Your mouth opening as your head began to smooth out, your features vanishing into the bottleneck of a nice, smooth glass bottle. A brown bottle cap popping into place on top, sealing it shut, as it began to rapidly fill with a deep, dark brown liquid. Everything you were, everything you might have been, and everything you used to be, being turned into tasty, refreshing beer. Your mind rapidly starting to fade. It becomes almost impossible to think, to focus on anything but the sheer joy and excitement you feel at the idea of being guzzled down by some thirsty animal. </p></p>And in moments. It is all over. All traces of you have vanished from the tavern, and where you once sat, was now a simple bottle of beer. A wrapped forming around the glass, depicting an almost cartoonish mascot of yourself, a smile on your muzzle as you look out towards your would-be drinker. </p></p>And with a smile on his muzzle. The wolf reaches over and grasps you, lifting you up and slowly turning you in his paw, examining you as he licks his lips again. </p></p>“Mhmmmm, don’t you look tasty. Don’t mind if I do.” The wolf growled, lifting you to his maw, and using one of his fangs to casually pop your cap off of you. </p></p>Pure bliss and excitement fills every trace of your bottle. This….this was it. You were…..you were…..going….to….b…..b…..</p></p>…….</p></p>Your thoughts sputter and stutter out. Going silent as the wolf closes his muzzle around your neck and begins to take great pulls from your bottle. Rapidly draining the rich beer from within you. Every guzzling gulp breaking your mind more and more, before, with a happy sigh. The wolf gently releases you from his muzzle, lifting a paw up and wiping his muzzle as he let out a happy sigh, looking at your empty bottle. </p></p>“Ahhhhh, that hit the spot. Man, you were a great beer. I’m already feeling buzzed.” He said, licking his lips to get the last bits of your flavor as he patted his gut. </p></p>“Welp, enough of that. Gotta get opened. Thanks whoever you were. You made a fine b-UUUUUUUAAARRRRRP.” </p></p>The wolf let out a loud belch, laughing as he rubbed his gut. “Woowee, yep, one fine beer if I do say so myself.” He said before casually hurling you over his shoulder. Your empty glass form soaring through the air before hitting the trashcan and shattering into tiny pieces. </p></p>Nothing but trash, a used bottle of beer. </p></p>And it was all you’d ever be again. </p>",
                        "trapped_desc": "You are a bottle of delicious wine",
                        "trapped": "You are a bottle of delicious wine",
                        "outcomes": [{
                            "parameter": "trapped",
                            "quantity": 30,
                            "change": "set"
                        }]
                    }
                }
            }
        ],
        "npcs": [
        ]
    }