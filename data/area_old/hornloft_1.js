{
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
                "id": "gon_ask_hunter",
                "title": "Ask Gon about becoming his hunting partner",
                "subtitle": 'You know of two positions in Gon\'s dance. One of the hunting partner, and one of the marriage partner.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "gon_connection",
                        "value": 1,
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
                        "text": "Gon is very happy to hear you ask about the dances. He hops down from his bed and pulls you over close to him. \"Gon will explain!\", he says. He takes you through the steps, showing you where you would step, how he would move around you, blocking you, pinning you. \"This dance is the hunting dance. Gon shows you where you belong, how you respond to Gon's movements. Gon make you loyal partner, make you respect Gon and obey\", he says. Your skin tingles as he shows you more, and you find yourself panting and snarling slightly. He stops you and pauses, letting the strange feeling fade.</p>\"You gotta want it too for it to work. You become Gon's wolf, Gon's loyal dog and companion. Gon give you new name, give you place to be, and you hunt with Gon and help feed the village. Is good place!\", he says.</p>You nod, and break off the dance, for now. Even that short section affected you heavily, though. You feel dizzy, and drop to your hands and knees, sitting down like a dog. Gon rubs your head, and your tongue lolls out. \"You make good dog! Not yet, though. Only when you want to be with Gon forever!\", he says. You nod, and let out a growly bark of agreement, before nuzzling his furry chest. For the rest of the day you fight the urge to walk on all fours and bark at people, until the effect very slowly fades.",
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
                "id": "gon_ask_partner",
                "title": "Ask Gon about becoming his partner",
                "subtitle": "You know of two positions in Gon's dance. One of the hunting partner, and one of the marriage partner.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "gon_connection",
                        "value": 1,
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
                        "text": "Gon's tail wags rapidly when you ask about that part of the dance. He rubs his cheeks bashfully and grins. \"Partner dance VERY special dance!\", he says. He holds your hand gently, and pulls you over next to him. \"In this dance, Gon and partner do exact same moves. Show they work together, think together. Show they are a team, they can face things together as one!\", he says. You follow his moves carefully, memorising them, copying each step and spin.</p>As you do, you feel a little tingly and strange. Your eyes feel fuzzy, and you blink as you look at Gon. You had never really fully appreciated how handsome he is. His thick, scruffy fur just makes him look more carefree and masculine. His big smile, from his shining, positive personality. His warm, strong body, his powerful arms. Gon notices you, and stops the dance. He holds your hand and you blush hotly. \"Ah! Gon not realise you feel dance so strong. Gon want to wait, until you decide you really want to be with Gon forever\", he says. You nod, your face hot all over with a blush. He squeezes your hand gently, and you lean down towards him. He presses his muzzle to your face, and gives you a gentle, slurpy kiss with his big tongue.</p>Magical or not, your infatuation with Gon lasts all day and takes a long time to fade out. You find yourself sniffing his pillow, feeling happy and safe when you smell his scent. You stare at him longingly, and constantly feel an urge to grab him and hug him. You can't help but fantasise about feeling like this all of the time, and becoming his forever.",
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
                        "descriptionchange": "This adventurer is a terrifying doberman, with thick, strong muscles and a long, snarling muzzle. Their expression is twisted in a snarl of primal bloodlust.",
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
            },{
                "id": "become_underwear",
                "title": 'Ask Jack for "on the job training."',
                "subtitle": "Jack promised to show you some of the secrets of Hornloft prison, though the way he described it made it sound like there would be some embarrassment involved. All you need to do is wait for him and then ask.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "jack_friend",
                        "value": 2,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "inanimatefetish",
                "results": {
                    "grizzpay": {
                        "text": "It's not too hard to find Jack. He's only in prison once every few weeks, but when he is, he's gambling with the Polar Gang or dealing in illicit goods in the prison yard. You approach him after he just finished slipping a suspicious pouch into a shark's hand, and he gives you a wink.</p>\"My apprentice! You know, it's not a great sign for a wannabe master thief to get arrested so much. Though I guess it does mean you keep escaping, so maybe you do have it in you after all!\", He chuckles. You tell him that you're interested in the secrets he mentioned, and he shushes you urgently, before pointing towards the latrines in the corner. You nod, and then wait for him to nonchalantly head over, then head off yourself without looking too much like you are together.</p>When you enter the latrines, you hear Jack hissing from a toilet booth. You slip inside, only to see that he's standing on top of the toilet, naked. He grins at you and strokes a hand down his scruffy, furry grey chest, before groping and lifting his large fuzzy balls. \"Ok so, there's no way you could sneak into the vents with me as you are now. I will need to carry you in, but I can't exactly hold you when I am dodging blades and climbing up pipes, so I'm gonna have to wear ya\", he says.</p>You are already starting to feel strangely dizzy and light headed as you watch Jack fondle and jostle his balls. You stumble and fall forward, and he catches you before pulling your face in close to his crotch. You feel his balls press and rub over your cheeks, and his musky sheath teases along your nose. You are compelled to push your face deeper against his crotch, to inhale his unwashed, dirty smell. He takes your arms, which feel limp and floppy, and wrap them around his waist. Your hands instinctively clasp together, and you feel your flesh merging and melting as your hands and arms begin to flatten and soften into a stretchy waistband.</p>Jack hops off the toilet, still holding your face to his crotch, and lowers you to the ground. Your body feels light and empty, as it starts to gradually flatten. Your skin becomes smooth and soft as it loses its colour, and begins to take on a clean, white smooth appearance. He rubs and strokes over your chest, helping it to flatten, as your organs somehow melt into your new cotton skin. He straddles your waist and pulls your flat, helpless legs up behind him. You feel your body wrapping around his crotch, your chest tight against his taint, your lower body snugly covering his fuzzy rear. Bit by bit your features melt away, leaving only white cotton until you are nothing more than a pair of tight boxers around Jack's crotch.</p>He huffs and grunts, before starting to stroke and rub the back of your head. You feel his hand pressing against your cotton and grinding you against his sheath, where his cock slowly starts to poke out. It stretches and thickens, bulging out against your former face and warping your cloth. As he rubs and plays with his bulge, you taste and smell every inch of his warm, hard cock, and each drop of pre that leaks from it and soaks into your fabric.</p>\"Fuck! Why didn't you tell me you were so goddamn comfortable? I'm half tempted to keep you!\", He mutters. You feel him let go of his crotch, and a deep longing to be touched and stroked fills your weak, confused mind. Everything goes dark as he pulls on his pants, leaving you with only the musk of his balls and the outline of his warm, throbbing cock in the dark.",
                        "trapped_desc": "Jack's underwear is hugging tightly around his crotch.",
                        "trapped": "You are Jack's tight white underwear. You want only to hug his crotch and drink in his musk as his clothing for as long as you can.",
                        "outcomes": []
                    }
                }
            },{
                "id": "stay_undies",
                "title": "Stay as Underwear",
                "subtitle": "You can feel your owner wriggling around and climbing through things. He squeezes through narrow passages, leaps across gaps, and constantly swears as he dodges the sounds of whirring blades and thumping machinery. The exertion makes his warm, furry crotch soak you with his musky sweat. You can't think of anything except how warm and smelly and sexy he is, as the sweat makes you outline his body with your clinging fabric. You don't really care about the secret passages anymore.",
                "trapped": true,
                "type": "random",
                "requirements": [
                ],
                "icon": "inanimatefetish",
                "results": {
                    "pumpkin_1": {
                        "text": "Jack wriggles out through some sort of narrow passage, and drops down a distance before landing with a thump. You see light again as he starts pulling down his pants, and from his crotch you look around to see a series of strange metal corridors. He strokes a hand over his bulge again, pressing you against his balls. \"Right, here we are. The secret passages under Hornloft, like I promised. Now come on, let's get you off me before I blow a load in you\", he says. You feel him slowly peeling you down his legs, before tugging you off one of his feet. You dangle limply in his grip, able to see his naked lower body. His soft balls, his half-hard cock. They look cold and they need you around them to keep them snug and warm. You feel empty as the warmth of his body slowly leaves your limp, fabric form.</p>\"Well? Come on, start turning back. Think of like, having limbs and shit. You must have done this sort of thing before\", he says. You don't want to turn back though. You want to be his, you want to be worn.</p>After a few minutes, he glances around and then presses you to his muzzle. His nose nuzzles into your fabric crotch as he breathes in his own scent, and starts to slowly pump his cock. \"Look, if you aren't gonna turn back, I'm gonna take that to mean you WANT me to cream in you bud. If I do that, you ain't turning back\", he says with a grin. With him not wearing you, you can feel the magic wearing off. If you wanted to, you could probably wiggle, give a sign, show you're not just an object. You don't, though. Underwear doesn't move!</p>He lowers you back down to his feet, and pushes them through your leg holes. Starts dragging you back up his body, your fabric stretching and filling back out as you slide back up his thighs. He tucks and guides his thick striped tail through your tailhole, and pulls you up over his balls and his now fully erect cock. It stretches out against your face, pulling on your fabric and on your mind. His hand wraps around his cock through you, and he starts to pump and stroke himself, dragging your fabric up and down his musky meat. He shudders and pants, his body getting warmer and muskier as he gets aroused. You feel his warm furry body pressed against you from inside, his throbbing meat rubbing and grinding over your face. Thick, slick precum oozes and dribbles into your fibres. He pants and grits his teeth, shuddering and gasping. \"Here it comes...get ready. Gonna be....ffffuck!\", he snarls. His cock jerks and throbs, as it suddenly gushes thick, hot spurts of cum. It drips down your face and soaks into your body, smearing over his balls and dripping and oozing everywhere. He gasps and squeezes the huge wet patch on his crotch, as your mind grows warmer and warmer and happier. His cum soaking deep inside you, pushing away whatever mind and identity was being stored in your fibres. No space for that. Only for master's scent and taste and musky pleasure.</p>He rubs and teases you some more, almost petting you. \"Guess we're partners forever now! You probably are gonna be better at this than bein' a thief I guess. You are some really fucking comfy underwear, you know\", he says. You feel tingly and soft at the praise from your owner. He pulls his pants back up, trapping you once more in the warm darkness. You feel him climbing back out, and you find yourself falling into a sort of sleep-like trance, a mindless, unthinking calm while you wait for his attention once more. It seems like barely any time passes at all before Jack returns home to his hideout.",
                        "trapped_desc": "Jack's favourite pair of underwear are here. They fit him perfectly, wrapped tight around his furry body with his large package bulging out the front. He never, ever wears any others.",
                        "trapped": "You are Master Jack's favourite underwear. You could never leave him, he needs you to keep him warm and comfy. You love the feel of his cock against your face, his butt filling out your rear. He loves you like a partner and almost never takes you off.",
                        "area": "jacks_hideout",
                        "outcomes": []
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