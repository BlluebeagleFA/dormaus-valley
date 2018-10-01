var area = {
        "title": "hornloft_1",
        "header": "Hornloft Prison",
        "nomap": "There is surely no escape from the mountain citadel of Hornloft Prison.",
        "subheader": 'You are trapped within the cold black walls of Highloft prison, a dour stone fortress atop the gryphon kingdom\'s inhospitable mountains. Day by day passes the same, with the only change being you feel a little colder and more hopeless.',
        "events": [
            {
                "id": "mr_bat_prison",
                "title": "Mr Bat, Moonlighting",
                "subtitle": "You hear someone walking down the corridor outside your cell, another guard on patrol. A baton rattles against your cell's bars, and you turn to look at the guard. To your shock, you see a very familiar bat, wearing a finely tailored guard's uniform and grinning widely.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "escape_plan",
                        "value": 0,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "mrbat",
                "results": {
                    "Brogulls": {
                        "text": "You rush over to the bars, and Mr Bat gently raps your knuckles with his strange baton. You flinch backwards and he winks. \"No touching, criminal\", he says. You ask him if he's here to set you free, and he wags his long finger at you. \"Of course not! You did the crimes, you do the time. Fortunately, I have every faith in your ability to cook up an escape plan\", he says.</p>He spins his baton in his dextrous fingers, and you notice it looks different than the sleek black batons of the normal guards. His looks ancient and corroded, with strange engravings. \"Hmm, I suppose I could assist you a little, however. First, perhaps you could help me. It's only fair, after all the assistance I provide so regularly!\", he says.</p>He reaches down, and slides his black guard pants down, revealing a very long, thick brown cock. It rises and bounces between the cell bars, and you can tell from his grin that he is not joking right now. You get on your knees, and hold his cock in your hand, before slowly sliding it into your mouth. It is very clean, and smells faintly of cologne. The warmth and thickness of it slides across your tongue and down your throat, as he takes his time slowly fucking you. Thrusting forward and then gradually drawing it out, making your face press over and over into his soft, furry crotch.</p>\"Ah, that does feel good. About time I had a little reward for my efforts. Now, while you debase yourself, it's time for a history lesson! Do you know why this prison is so hard to escape?\", he says. You look up at him with annoyance, unsure if he honestly expects you to reply with a twelve inch bat cock down your throat.</p>\"Well, apart from the main exit, which is barred, guarded and over a deadly canyon, the only other exits are high windows that lead to an icy, instant drop. It's too cold and the air is too thin to fly, even. There's one other exit, through the trash chutes, but it's certain death, naturally. You see there's some old technology in those chutes, from the days of Old Horn. They are lined with these, you see\", he continues. He holds one hand on your head and idly pulls and pushes you, shivering a little as you service his cock. With the other, he spins the baton in his hand.</p>\"It's a long story, but these little devices will kill anything they touch. Perhaps even me, if you held it long enough! Think of them something like the electric batons the guards use, but with raw purple death instead of electricity. Someone would have to be a perfect conductor of magic to touch them unharmed, and there's no such thing as a perfect magic conductor in this world\", he finishes. He presses a trigger on the baton, causing it to spark and crackle, and then suddenly, he rams it down onto your head.</p>You yelp and pull back, his cock leaving your throat with a pop...and realise you're totally unharmed. You didn't feel a thing. He gives you a wink, and zips up his pants. \"Next time, I really will have to insist you finish. Best of luck, my old friend\", he says. You blink, and he disappears as if he was never there in the first place.",
                        "area": "hornloft_2",
                        "outcomes": [
                            {
                                "parameter": "escape_plan",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "plan_check",
                "title": "Consider Your Plan",
                "subtitle": "It wouldn't hurt to double-check your plan.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "escape_plan",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "navigateicon",
                "results": {
                    "Brogulls": {
                        "text": "It should be simple. There is a trash disposal chute near the cleaning area, which isn't heavily guarded because the original architects lined it with deadly machinery. You are immune to that machinery, so it is the perfect escape route. You need to steal some soap and use it to make a mould for a guard's key. Then you can make a duplicate in shop class, and use it to escape. You will also need to get yourself a cold-resistant body to do it with.",
                        "area": "hornloft_2",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "gon_dance",
                "title": "Ask to see Gon's Dance",
                "subtitle": 'Gon has mentioned the "dance of his people" several times. You could ask him to elaborate on what exactly that means.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "gon_connection",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },{
                        "parameter": "vicious_connection",
                        "value": 5,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "gonicon",
                "results": {
                    "Brogulls": {
                        "text": "Gon practically jumps up and down in the air when you ask him about his dance. \"No one ever asks Gon about dance! Dance is very important!\", he barks. He hops down from his bunk, and pushes you gently against the wall to watch.</p>The short dog clears the room, and then stands in the middle. He puts his hands out in front of him, like a dog begging, then hops from side to side. He gets on one leg, spins around, and then hops again. He repeats that a few times, then sticks his arms out and spins in a circle, repeatedly. Finally, he puts his arms up in the air and barks.</p>You clap politely, even though it looked completely ridiculous. \"Kobold elders taught Gon this dance when Gon became a full warrior! One day Gon do dance with Gon's partners and become bonded forever!\", he says.</p>You ask him about what that means, and he looks like he's struggling to think of how to explain it. \"Dance has...special part? Gon find hunting friend to be loyal companion forever, they do part of dance in front, and become bonded. Even bad dogs become good loyal with dance. Gon find together partner, they do side by side, we become bonded too!\", he says. He adjusts his pants as he says that part, and blushes slightly, which makes it clear what a \"together partner\" represents to him.</p>Gon repeats his dance for you several times over the day, since he now believes you enjoy it. To be honest, part of you does, and you start to get so familiar with it you could probably fill in the other parts one day. However, that would have to wait until you can escape, and perhaps take the little warrior with you.",
                        "area": "hornloft_2",
                        "outcomes": [
                            {
                                "parameter": "gon_connection",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "pet_monster",
                "title": "My Pet Monster",
                "subtitle": 'Vicious is pleased to see you are back where you belong, but you need your true form restored.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "vicious_connection",
                        "value": 5,
                        "comparison": "equal" //default greater
                    },{
                        "parameter": "species",
                        "value": 4,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "viciousicon",
                "results": {
                    "Brogulls": {
                        "text": "Your cell door opens, and you smell a familiar scent. You look up, and see Vicious, leaning against the side of your door and grinning at you. \"My puppy is looking a little different today. Let's fix that, shall we?\", he says. You growl at him lustfully, and he begins to pull off your clothes. He rips your prison shirt over your head, and pushes down your pants, then shoves you against the wall. You snarl and snap your teeth at him, and he strokes his hand down your chest.</p>You feel him closing something around your neck - a thick, heavy collar. He tugs on it, and leads you out from your cell, naked. As you walk along the cold stone floor behind him, you feel your feet starting to toughen and harden. Your pawpads return, your claws emerge from them and begin clacking on the ground. You feel your tail growing back, and wagging and shaking in the air behind you as you follow your master and lover.</p>As you walk past prisoners, Vicious orders you to attack them. You lunge and snap, retrained back inches from their bare flesh as he tugs on your leash. Watching their fear and smelling their sweat and anxiety fills you with delight. After the third such prisoner, Vicious doesn't retrain you, and you actually manage to close your jaws around the arm of a tall rabbit. You bite hard and drag him around, thrashing him from side to side like a chew toy as your muzzle returns to its long, cruel shape, your ears grow pointed once more, and your fur starts to return to how it should be. \"Heel, boy!\", Vicious commands. You release the bleeding, shaking rabbit, and lunge at Vicious instead, clawing and biting at him in blood-drunk lust. He wrestles you to the ground, smashing your face into the cold floor, and you feel blood leak from your nose as you look up at him.</p>He is grinning with delight. \"Glad to have you back, my beloved monster\", he says. You wag your tail and think about how good his blood tastes.</p>You follow along behind him on all fours after that, feeling like a truly feral beast, a deadly and cruel fighter dog with no conscience or care for others. He leads you into his office, your mind becoming more and more obsessed with violence and blood, and you sniff the air as you walk in.</p>There is an otter on the ground in front of Vicious's desk, covered in bruises and wounds. Vicious strokes his hand along your head, and leans down close to your ear. \"Kill\", he whispers.</p>A few hours later, you return to your cell, your stomach full and your muzzle stained with sticky red gore. You are truly Vicious's hound, in body and soul.",
                        "area": "hornloft_2",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 4,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "bad_dog",
                "title": "You Bad Dog!",
                "subtitle": 'Gon is avoiding you. He looks upset when he sees you, and doesn\'t want to talk. You should MAKE him talk to you.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "vicious_connection",
                        "value": 5,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "gonicon",
                "results": {
                    "Brogulls": {
                        "text": "Gon hasn't been talking to you ever since you became your true self, and accepted your inner feelings as a powerful, sexy canine. The little dog must think he's BETTER than you. That cannot stand! You will show him who the true top dog is in this cell.</p>You prepare yourself by stripping your clothes and tossing them aside, to show off your full, glorious naked doberman body. You lean back against the wall, waiting for the little dog to return from the canteen. It is not long before he walks in, and looks up to see you grinning at him. You stride forward, and reach out to grab him by the neck, intending to force him to the ground under you.</p>Suddenly, Gon shifts, sliding and turning himself as he grabs you by the waist. He bends, and twists, and you find yourself soaring through the air as he throws you to the ground. His little paw presses down on your back as he wrenches your arm back, and you growl. \"You bad dog! Gon is kobold warrior. Gon can fix and train bad dogs\", he says sternly. You snarl at him, and lash out. The dog is strong, but you are massively taller and heavier than him. You manage to wrench free, and begin slashing and biting. Every time he lunges or twists you, you manage to get in a few swipes, and your thick neck tears at his fur. Gradually, you start to wear him down, leaving him with cuts and scrapes, but at the cost of terrible bruises and aches all over your body from where he throws you against the wall and bounces you off the floor.</p>Again and again you lunge at him, and he spins and twists and dances away, parrying each blow, striking where he can. He looks ridiculous, spinning and...dancing...as he fights. Through your battle-crazed rage you start to realise something is wrong. These moves are familiar. They're Gon's stupid, weird dance. You try to back off, or get away, but your legs move of their own accord, attacking and striking in turn with the dance. Without realising, you have trapped yourself in this strange ritual, and if Gon is in that position, that means your part is...\"hunting partner\". Finally, the dance comes to an end, with Gon panting as he spins and steps forward. You find yourself unable to move, your limbs stubbornly refusing to obey you. \"Sit!\", Gon orders.</p>Immediately, you find yourself sitting down on the hard stone floor. Your body doesn't want to obey you, it only wants to obey Gon. \"Down, boy!\", he says, and you flop forward on all fours, your long snarling muzzle on the floor at his feet. He lifts one of his paws and rubs it gently over your wet nose. You sniff it, growling and wishing you could bite him, but you end up inhaling his scent, and find yourself thinking strange thoughts. Running through the woods by Gon's side, going where he commands, hunting birds and wild animals for his tribe. Being a good dog, a loyal partner, a proud hunter, part of Gon's family. Your tail wags, even as you growl and try to force the thoughts away.</p>\"Roll over!\", Gon orders. You roll, showing off your naked chest, as he starts to rub and pet your belly. Damn him, but it feels so good. Your tail won't stop wagging! Stupid, handsome, strong kobold warrior! \"Gon can't finish ritual here. Gon need to take you away from bad man and show you good hunting, make you a good dog. Gon will get you out of here one day\", he says.</p>Gon lets you stand back up after that, and returns to his bed. No matter what you try, you can't fight him or do anything against him, and you end up sulking on your own prison cot, trying to shake off this bizarre compulsion, and feeling a deep hunger for wild rabbit.",
                        "area": "hornloft_2",
                        "outcomes": [
                            
                        ]
                    }
                }
            }
        ],
        "npcs": [
            {
                "id": "gon",
                "name": "Gon",
                "description": "Gon, your cellmate, is a very short, scruffy dog. He appears to be some sort of mutt. His ears are lopsided, and his paws are oversized and thick. He is wearing a thick bandana around his neck, and he struggles with your language.",
                "icon": "gonicon",
                "dialogue": [
                    {
                        "input": "What is your name?",
                        "output": '"Gon\'s name is Gon! Gon was given name by Gon\'s clan for being a good and powerful kobold!"'
                    },
                    {
                        "input": 'What is your job?',
                        "output": '"Gon is a mighty kobold warrior! Gon knows the dance of his people and Gon can throw spears and even REALLY big rocks!"'
                    },
                    {
                        "input": 'What was your crime?',
                        "output": '"Gon doesn\'t know. Gon was just eating in the big shiny place and some big men came and told Gon he had to come here now. Gon doesn\'t like it here. When can Gon go home?"'
                    },
                    {
                        "input": 'How is your cock?',
                        "output": '"Gon is a big and mighty warrior, Gon is saving himself for Gon\'s special partner. We will do the dance of bonding and Gon will love them forever and then Gon and partner will live in Gon\'s village!"'
                    },
                    {
                        "input": 'What are your paws like?',
                        "output": '"Gon has big paws! Good for running and KICKS!", he says. He sits down and shows you, lifting up his thick footpaws and wiggling his clawed toes as he shows them off proudly.'
                    }
                ]
            }
        ]
    }