var area = {
        "title": "hornloft_2",
        "header": "Hornloft Prison",
        "nomap": "There is surely no escape from the mountain citadel of Hornloft Prison.",
        "subheader": 'You are trapped within the cold black walls of Highloft prison, a dour stone fortress atop the gryphon kingdom\'s inhospitable mountains. Day by day passes the same, with the only change being you feel a little colder and more hopeless.',
        "events": [
            {
                "id": "steal_soap",
                "title": "Steal Some Soap",
                "subtitle": "Your plan will require one of the nasty firm soap bars used by the cleaning crew.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "escape_plan",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "default",
                "results": {
                    "success": {
                        "text": "Today the prison guards have you scrubbing down the bleak black hallways. Along with a group of other prisoners, you have been given some rags, a bucket of unpleasantly brown water, and one oversized, nasty-smelling hard yellow soap between you all.</p>You start off by scrubbing the floor like you're supposed to, and time your plan carefully. There's one guard, a short, chubby gryphon, who doesn't wear boots like the rest of them does. His bare paws are the only thing between him and the floor. You have to get a time when it's your turn to use the soap, and when he's the one doing the rounds between you to keep you all in check. You scrub and wash on all fours, your back aching, and finally your chance arises. You take the soap from the prisoner next to you right as the chubby guard is walking down the corridor, and you keep a careful eye on his footsteps. One, two...three! You \"accidentally\" squeeze the wet soap too hard, sending it sliding out of your hand and across the floor. The gryphon's fat lion paw comes right down on top of it, and he squawks like a surprised parrot as he falls over onto his face.</p>When he gets up, he has a furious glare in his eyes, and though it might just be your imagination, his beak looks slightly crooked. He picks up the soap and throws it at you, and you block it with your arm, but take a painful bruise. \"Watch what you are doing, you clumsy oaf! For that, the rest of you can finish this cleanup WITHOUT soap!\", he growls. He orders you to put the soap in the water bucket, and you pretend to meekly comply. Right as you \"drop\" it, you carefully palm it into your sleeve, and splash the water with your hand to make it seem the soap fell into the murky bucket.</p>Step one of your escape plan, successful!",
                        "area": "hornloft_3",
                        "outcomes": [
                            {
                                "parameter": "escape_plan",
                                "quantity": 2,
                                "change": "set"
                            }
                        ]
                    },
                    "fail": {
                        "text": "Today the prison guards have you scrubbing down the bleak black hallways. Along with a group of other prisoners, you have been given some rags, a bucket of unpleasantly brown water, and one oversized, nasty-smelling hard yellow soap between you all.</p>You start off by scrubbing the floor like you're supposed to, and time your plan carefully. There's one guard, a short, chubby gryphon, who doesn't wear boots like the rest of them does. His bare paws are the only thing between him and the floor. You have to get a time when it's your turn to use the soap, and when he's the one doing the rounds between you to keep you all in check. You scrub and wash on all fours, your back aching, but the timing never comes. Another prisoner, a scarred and rough-looking cat, grabs the soap from you right before the gryphon walks past, and your assigned cleaning time ends before he comes around again. You'll have to retry another time.",
                        "area": "hornloft_3",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "escape",
                "title": "Escape!",
                "subtitle": "This is it, the final step. It's time to escape!",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "escape_plan",
                        "value": 5,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "default",
                "results": {
                    "success": {
                        "text": "The perfect opportunity for your plan has finally come. You're assigned to mop the corridors near the garbage chute, and the fat gryphon guardian you is barely paying any attention. As he stares out of a window, you subtly start to mop towards the stairs down towards the chute. If he asks what you are doing, you can just claim that you were going to mop the stairs. Fortunately he doesn't seem to care at all. You manage to slip away and quietly run down without him noticing.</p>The smell of trash gets repulsively strong as you descent the spiral staircase. You eventually come down to a circular room, with large metal containers filled with refuse. Half of the room is barred and locked off, and beyond the bars you can see the trapdoor to your freedom. Nervously, you slide your key into the keyhole. You try to turn it - and it sticks. Very slowly and carefully, you wiggle and coax it, turning the rusty old pins and hearing them creak. FInally, with a click, the gate unlocks - but the sudden twist causes your makeshift key to shatter. No matter, you won't need it anymore.</p>You push the gate open and scramble to the trapdoor, heaving it up with effort. A dark, stinking chute lies beyond. It's now or never. You jump down, and feel yourself sliding down into the darkness. It's lit only by intermittent crackling flickers, as the batons in the walls zap everything that passes through. But you pass unharmed, and finally are dropped out into the icy brightness of the outside world.</p>As you start to fall, you have a terrible fear that you've just leapt to your death. But fortunately for you, you hit soft snow quite soon, and roll clumsily down a steep snowbank, right into a soft mountain of cold, smelly garbage. You are free!</p>Wasting no time, you start to climb down the garbage pile and along the mountainside. The walls of Horn are distant but visible, and judging by the rough path in the snow, scavengers must come here to pick at the prison's garbage. It takes a long time, and your legs are aching and sore, but eventually you come to a pitted mountain road leading down away from Horn. With your skin miserably sore and your fingers aching and numb, you hide. Your white pelt blends in nicely with the rough snowbank, but you struggle to stay awake even though you know sleeping here could mean death. Finally, you hear the rolling and clunking of a passing cart. As the horses pass by, you ready yourself, and scramble onto the back. The cart is carrying big jars of what look like pickles, and you conceal yourself under a tarp for the days of travel that will return you to Dormaus.",
                        "area": "dormaus_entrance",
                        "outcomes": [
                            {
                                "parameter": "escape_plan",
                                "quantity": 0,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "meet_vicious",
                "title": "Meet Vicious",
                "subtitle": "You can hear desperate pleading from the warden’s office. You could peek in and see what is happening?",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "vicious_connection",
                        "value": 0,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "viciousicon",
                "results": {
                    "success": {
                        "text": "You start moving towards the office as you mop, curious as to what might be going on. Two people are talking, one voice calm and quiet, the other increasingly desperate and panic-stricken. The door to the warden’s office is open a crack, allowing you to peek inside.</p>There is a prisoner on his knees, pleading and begging with the warden. The prisoner is a  canine mix, dressed in the same tattered brown rags that you are all wearing. The warden is dressed in the same black uniform that all of the guards wear, but with a black brimmed cap on his head. He’s a dingo, with a long slender muzzle and a thin, lanky and angular body. \"Please sir! I swear I'm innocent! If I could just contact my family, I can get proof!\", the prisoner begs. The warden doesn't appear to be listening, as he is just filing and sharpening his claws with a slender, cruel dagger, while leaning back on his chair with his boots on the desk. The prisoner leans forward and grips the desk, looking up at the warden with tears in his eyes.</p>Suddenly, there is a loud thunk, and the prisoner falls back, shocked and gasping. The dagger the warden was holding is buried in the wall, vibrating from the force of how hard it was thrown. The prisoner is pale and terrified, and clutches his neck where the blade grazed his skin. The warden leans forward on his chair, and steps up onto the desk. \"No touching my property, you criminal filth\", he says, his muzzle stretched into a wide, vicious grin. His eyes widen as he steps down off the desk right onto the prisoner's chest, his boot shoving the dog hard onto the ground. He leans down and grips the dog's shoulder, then leans further. His long tongue slides slowly up the dog's neck, as he laps up the warm, oozing blood. The warden's body presses down onto the prisoner's, and his hand slides down across his chest, his sharp claws tearing through his shirt and revealing his trembling furry chest.</p>The warden's jaw opens as he pushes it forward and closes his teeth around the dog's neck. His clawed hand moves down further, as he pushes it into the dog's torn pants and wraps his fingers around his balls, before slowly starting to squeeze. You see the dog tremble and pant, wanting to shake and struggle free of the pain, but terrified to move with those vicious teeth pressing into his neck.</p>Finally, the warden releases him, and stands up. The prisoner cowers on the ground, and the warden presses one of his boots firmly against his crotch, slowly pushing it harder and harder. \"You're never leaving here. All of you belong to ME, and you will live or die as I wish\", he says. He giggles, his face still stretched into that manic grin. Suddenly his ears flick and twist, and he turns to the door. You pull back, and dash away, not wanting to stick around to see how he would 'discipline' you.",
                        "area": "hornloft_3",
                        "outcomes": [
                            {
                                "parameter": "vicious_connection",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "cleaning_duty",
                "title": "Cleaning Duty",
                "subtitle": "The warden is overseeing the prisoners as they mop and clean the halls. You want to do everything in your power to not draw his attention.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "vicious_connection",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "viciousicon",
                "results": {
                    "Success": {
                        "text": "Warden Vicious is walking past and staring closely at all the prisoners as they clean. His lanky, angular body moves unsettlingly, and his long grinning dingo face lingers a little too close to everyone's necks before he moves on. No one wants to be his latest plaything, so everyone is silent and awkward. You clean quietly, sweeping your barely-damp mop across the cracked black flagstones and praying that the warden's gaze won't settle on you. You don't hear him as he steps closer and closer. Not until you sweep your mop a little too hard, and the handle cracks backwards hard into something. You turn slowly, and see the warden staring at you, with blood leaking slowly from one nostril, where you just cracked him hard in the face.</p>There is a terrible, long pause. Then his muzzle stretches slowly into a grin. He begins to laugh, a giggling and cracking laugh that chills your blood. The other guards, who rushed forward when he was struck, stop and begin to laugh too, with awkward fake laughing. All except one, a bear, who looks around nervously. The warden's smile disappears instantly. \"Why aren't you laughing? It was FUNNY\", he snarls. He moves in a sudden twisting lunge like a snake, and in an instant there is a knife buried deeply in the bear guard's shoulder. The bear screams and falls against the wall. Vicious moves forward, his hand still holding the handle of the knife, and twists it slightly as he reaches into the bear's pants and pulls his thick, soft cock out from within. The bear gasps and pants in pain, blood dribbling down his arm. Vicious turns to you. \"Criminal. My subordinate doesn't think you're funny. Come apologise to him\", he growls.</p>You walk forward, and get on your knees. You look up to the guard, who is wide-eyed and terrified. He glances from you to the warden, and gulps. The warden is staring at you. You open your mouth and slide the bear's thick, soft cock into it, licking and sucking on it. It's warm, and slowly thickens and stretches out in your mouth. The bear closes his eyes and tries to ignore the warden still holding the knife in his arm. It takes an agonisingly, awkwardly long time for his cock to fully stiffen in your mouth, and your jaw is aching. Finally, his thick black bear meat starts to twitch and throb, and he gasps and pants in ragged breaths. His crotch bucks forward, and he shakes as he starts to cum. Right as soon as his hot cum sprays into your mouth, the warden twists the knife hard, making blood gush from his shoulder all over the dingo's face. His moan of pleasure becomes a ragged scream of pain, and he falls to his knees, cum still leaking from his cock.</p>Vicious puts his knife away and whistles. \"Glad to see us all having fun. Wipe that up, criminal\", he says, before walking off and leaving you with the shaking, bloodsoaked bear.",
                        "area": "hornloft_3",
                        "outcomes": [
                            {
                                "parameter": "vicious_connection",
                                "quantity": 2,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "cleaning_duty",
                "title": "Normal Cleaning Duty",
                "subtitle": "The days pass by in drudgery and enslavement.",
                "type": "random",
                "requirements": [
                    
                ],
                "icon": "default",
                "results": {
                    "Success": {
                        "text": "You scrub and wash the stone floors, resenting the steps of every guard as they pass by. You can feel the cold air from the escape chute down the stairwell close by, but you cannot escape yet. Freedom is so close, yet still so frustratingly far.",
                        "area": "hornloft_3",
                        "outcomes": [
                            
                        ]
                    }
                }
            }
        ],
        "npcs": [
            
        ]
    }