var area = {
        "title": "farmfield",
        "header": "Scrubby Farmland",
        "nomap": "You don't know your way around this area yet. You'll have to navigate on foot.",
        "subheader": 'The farmland is tangled with weeds here, with only a few weak trees standing up from the long grass. It leads up to the rocky sides of a rising mountain, where the dark mouth of a strange cave looms. The cave is criss-crossed with paper talismans and you strangely cannot pass them.',
        "events": [
            {
                "id": "farmfield_w",
                "title": "Travel West to Turner's House",
                "subtitle": "It will only take a few minutes to get back to the farmhouse",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You leave the muddy farm and make your way back to the farmhouse.",
                        "area": "farmhouse",
                        "outcomes": []
                    }
                }
            },{
                "id": "farmfield_e",
                "title": "Enter the Dark Cavern",
                "subtitle": "Your Digger's permit causes the protective charms to move aside when you get close",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "digger",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You push nervously past the glowing charms, but their strange resistive force seems to have dissipated. The dark caverns lie beyond.",
                        "area": "cavernentrance",
                        "outcomes": []
                    }
                }
            },{
                "id": "ram_tf",
                "title": "Help Round Up Sheep",
                "subtitle": 'A massive shaggy sheepdog is panting and leaning on the fence. Beyond it, you can see a number of sheep, scattered around and wandering off. He sees you and waves. "Hey there friend! Dinnae suppose you could help? I need someone tough who can keep these ladies in line!", he says.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 33,
                        "comparison": "nequal" //default greater
                    },{
                        "parameter": "dominance",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "grizzsex": {
                        "text": "You nod, and get closer to the sheepdog. He\'s quite portly, though it may just be because of his thick coat of long, shaggy fur. He wipes his long fringe out of his eyes before explaining his problem. \"Aye, having a tough time today, I am. These she-devils just willnae listen to me! I need em to stay put else\'or some wolf\'ll gobble em up, but they dinnae respect me. Need someone to put em in line!\", he says. You doubt it will be all that difficult to intimidate a bunch of rambunctious sheep, so you agree and hop over the fence.</p>At first, it\'s harder than you thought. The sheep scatter whenever you get close, and you find yourself getting more and more frustrated. These ewes should be deferring to you more! You sneak up around to one, and it sniffs the air and runs off with a bleat. Your head starts to ache, and you snort as you rub at your temple, feeling a thick, hard bulge at the side of your head that only makes you feel more angry and demanding.</p>When the next sheep runs off, and you see it\'s rear end bouncing up into the air as it runs from you, you feel a rush of heat and emotion inside you. That ewe is YOURS. You start sprinting after her, your feet growing tough and hard as they turn black. Your toes merge together, each fusing into two huge halves of a cloven hoof on each foot. With your huge hooves, you start to run faster and gain on the ewe. The closer you get, the more the controlling and possessive feelings start to grow inside you. You snort and feel the bulges on your head growing more, stretching out from the sides of your skull and beginning to curl and twist. Their weight seems to drive you even more frustrated and needy. These are your ewes! They must obey you!</p>You fall to all fours, your hands toughening as each pair of fingers fuses together and hardens into cloven hooves. You feel a weight growing between your legs, a thick bulging needy presence that is rapidly taking over all of your concerns. It bounces and thickens, growing harder and heavier the more you smell the ewe you are chasing. Finally, you catch up to her, and leap forward, pressing your weight down atop her fluffy curly wool as she bleats and complains. You push your face down into her wool, breathing in that delicious, arousing scent. The scent of YOUR ewe. She belongs to YOU. Your new ram cock, rock hard and dripping with pre, is controlling your thoughts now. You thrust it and shove, rutting like an animal as you search for the ewe\'s pussy. Finally, you feel yourself plunge in deep, and you both bleat together, hers feminine and yours deep and bellowing.</p>You thrust and fuck, slamming in over and over as your face pushes forward and stretches, growing longer the more you sniff her arousing scent. Your skin darkens and turns black, and you feel hair starting to grow from you all over, thick and curly and wooly. It thickens into a heavy, hot pelt of ram wool, stinking with your masculine, dominant musk. The closer you get to orgasm, the more you seem to think with your cock, becoming dumber and more aggressive. Finally, you feel your balls pulse and tense, and you bleat loudly, filling your ewe with your hot, fertile cum. Your eyes glow for a moment, as your pupils become horizontal slits. You pull out, and your ewe submissively follows behind you.</p>For the rest of the day, you track down and breed every one of your ewes, making sure they know exactly who they belong to. As the sun sets, you return to the sheepdog, feeling yourself rise back up onto two legs, as your feral form becomes more anthro. By the time you reach him, you are a tall, muscular and cocky ram man, who\'s brain is as small as his muscles are huge. \"Good work out there laddie!\", he says. You snort, and warn him not to mess with your ladies unless he wants to join them, then hop over the fence to get back to adventuring.",
                        "descriptionchange": "This adventurer is an enormous muscular ram, with gigantic curling horns and a cocky, arrogant stride.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 33,
                                "change": "set"
                            },{
                                "parameter": "dominance",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "become_cock",
                "title": "Help With Fertilising",
                "subtitle": "Turner is working particularly hard in the fields today. He's drenched in sweat, and his hooves and legs are covered in dirt. He stops and sits down on a treestump, and wipes his forehead. \"Shucks pardner, ah'm more tired than a cat in a rockin' chair factory! The town needs twice the produce ah got this year, so ah been usin' the ol' fast-grow trick, but it sure does tucker a fella out!\", he says.</p>You ask if he needs some help, and he raises his eyebrows. \"That's mighty kind a' y'all. Not many folks willin' to help with the fast-grow work, with what it takes...\"",
                "type": "random",
                "requirements": [
                ],
                "icon": "inanimatefetish",
                "results": {
                    "grizzpay": {
                        "text": "Despite the feeling you get that you don't fully grasp the implications, you re-affirm to Turner that you want to help him out. He slaps you on the back, hard, and then starts to unbuckle his dirty, well-worn overalls. \"Well shucks, with y'all helpin' my balls, I'll be good to fertilise these crops all night!\", he says.</p>Before you can ask what that means, he drops his overalls, revealing his muscular, sweaty farmer body. His cock is already starting to get hard, thickening and inflating like a gigantic balloon. A towering thick pink shaft, splotched with dark brown patterns along its length, atop a huge pair of sweaty black balls. The musk and scent of his hard-working country body starts to make you feel dizzy and confused, and before you know it, he has pulled you in against him. He turns you around and wraps his arms around you, his enormous cock pressed along your back. It's so long that you can feel it up past your rear and pressed against your lower back, pulsing and throbbing with warmth. He starts to stroke his rough, dirty hoof-hands across your chest, gently massaging and rubbing you. His fingers lift up your clothes, pulling them over your head and pushing them down past your legs until you are completely naked. His naked cock against your skin, the heat of it flowing through you, making you feel even more dizzy and strange.</p>Slowly, your skin starts to feel odd. It becomes spongy, and warm, and sensitive. His touch becomes incredibly pleasurable, despite his rough hands. It makes you blush and shudder, every motion of his palm along your chest making you want to drool and pant. You start to realise that you can no longer distinctly feel his shaft against your back. You just have a strange sort of warm, sensitive feeling all along your rear, and when you try to move forward, you feel a tugging and stretching, as if you're glued to Turner's crotch.</p>Your skin becomes smooth, all your hairs beginning to fall away under Turner's slowly stroking hands. You try to look down, finding it hard to move your neck, and see your skin flushed and warm, as large splotches of brown colour cover you all over, giving you a patchwork appearance...just like Turner's massive stallion shaft. You start to feel weak, and stumble forward slightly. \"Woah there pardner! Jus' relax now, let me do the work. Ah don't wanna strain my new parts after all!\", he says cheerfully. He grips you around the waist in both hands, holding you up as you feel your legs shrink up off the ground. Becoming soft and weak and limp, before being pulled back against Turner's body. You see your legs turn dark as they merge into his enormous balls, which grow even larger and more full beneath you. Your arms start to feel weak too, and as you try to lift them, you see them shrink and degrade, becoming nothing but small nubs, which then melt away entirely into your long, firm, heavy shaft body. Turner gently strokes his fingers around where your waist used to be, as a sensitive ring of flesh appears there. The feeling of him touching it makes you gurgle and pant, as thick, musky pre oozes and bubbles from your mouth. Your head cranes back, neck merging into your shoulders, and your features melting away into the flat, warm, and sensitive shape of a massive equine cockhead.</p>Turner holds you in both his arms, panting a little as he lifts his new enormous hyper cock, and gives you a firm kiss on your huge dribbling cockhead with his long snout. \"Right pardner, let's get to work!\", he says cheerfully.",
                        "trapped_desc": "Turner's cock looks enormous right now. It's thicker than his arm and so long it droops along the ground, constantly oozing musky, slippery pre.",
                        "trapped": "You are Turner's cock. A massive, sweaty, heavy horse shaft. You can think of nothing except cumming. You must orgasm, you must feel that incredible pleasure. You don't care that all of your essence and mind will drain every time you do.",
                        "outcomes": []
                    }
                }
            },{
                "id": "cock_cum",
                "title": "Fertilise",
                "subtitle": "You are Turner's cock. A massive, sweaty, heavy horse shaft. You can think of nothing except cumming. You must orgasm, you must feel that incredible pleasure. You don't care that all of your essence and mind will drain every time you do.",
                "trapped": true,
                "type": "random",
                "requirements": [
                ],
                "icon": "inanimatefetish",
                "results": {
                    "pumpkin_1": {
                        "text": "As Turner walks around, he has to wrap both his arms around you and rest your end over his shoulder. The feeling of his embrace drives you wild. You absolutely must cum! You throb and twitch in his grip, and he shudders and blushes hard as he tries to resist the pleasure you're constantly sending through him. Despite his best efforts, he rubs and strokes along your lower shaft, making you ooze and gush a constant flow of slippery, musky pre all down his back. \"H-heck, pardner, you sure are eager. Jus' a little longer!\", he says, his breath ragged.</p>Finally, he manages to walk you over to his fields. A number of small green shoots are clustered along the tilled soil, and he heaves you over and points you up over the soil like a hose. \"Here goes!\", he grunts, and starts to pump and stroke along you. Both his hands wrapped around your massive shaft, his palms sliding along your body. Touching and squeezing down from the tip of your shaft, past that unbearably sensitive ring, and squeezing your thick, hefty base. Over and over, making the need and pleasure inside you grow deeper and more unbearable. Your mind whiting out as lust and sensation takes over. Until finally, when you are utterly mindless with bliss, your whole body erupts in absolute pleasure. Your shaft pulsing from the force of the thick, hot cum that rushes up through you. Tasting Turner's white, potent cum as it splatters out from your mouth, spraying far across the fields in obscene ropes of steaming hot cum.</p>Over and over, you let out all your pent-up tension and need. Feeling your mind grow empty and calm, your control over this new body become weaker. It doesn't matter. You want to let it all out, let it become cum. You have no thoughts at all, only pleasure, and soon Turner's crops are utterly drenched in cum. Even after only a few minutes, the magic of your drained attributes is making them visibly stretch and grow.</p>\"G-gosh, pardner, th-that sure was somethin'!\", he says as he falls to his knees. He's panting and gasping, and drenched in sweat, but already you are starting to throb and harden once more, your huge body stretching along the soil. He pets you carefully, and gives a grin as he contemplates another round.",
                        "outcomes": [
                            {
                                "parameter": "might",
                                "quantity": 2,
                                "change": "sub"
                            },
                            {
                                "parameter": "magic",
                                "quantity": 2,
                                "change": "sub"
                            },
                            {
                                "parameter": "stealth",
                                "quantity": 2,
                                "change": "sub"
                            },
                            {
                                "parameter": "charm",
                                "quantity": 2,
                                "change": "sub"
                            },{
                                "parameter": "festival_time",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "turnback",
                "trapped": true,
                "title": "Change Back",
                "subtitle": "You have helped enough. You need to focus your mind and turn back before every part of you is eroded into cum.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "rareSuccess": {
                        "text": "You throb and twitch, and try to push back the pleasure and lust that's filling your mind. Turner notices, and nods as he gently lays you down on the ground. You feel yourself starting to come together. Thick cock body stretching out and growing, as muscles and bones start to reform. Limbs pushing out from your sides, wiggling weakly at first, but starting to feel strong and firm as you remember how to use them. Your features reform, mouth returning to normal size, and skin feeling less soft and warm and intense.</p>You blink, and look up at Turner's naked, sweaty body, towering over you. He blushes a little, and strokes his hand gently along your chest, rubbing up and down. You feel a familiar warm pleasure inside you, and you feel the need to wrap your arms around his neck and press against his large soft mouth for a kiss. He squeezes and strokes you, and you shudder with an intense orgasm, as cum gushes from your mouth into his. He pulls away after a moment, his own jizz on his lips, and you finally are able to stand up on your own. \"Thanks for the help pardner, you make a darn fine stallion shaft\", he says.",
                        "freeTrap": true,
                        "outcomes": []
                    }
                }
            },{
                "id": "farmfield_random",
                "title": "Explore the muddy fields",
                "subtitle": "The mud sticks to your feet and it feels like you might sink into it at any moment",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "New Sheep": {
                        "text": 'There is a loud barking in the fields today. You turn to look, and see fluffy white sheep bounding along the fields, being corralled by a massive shaggy dog. He barks at them, running along their sides and keeping them all together. Another adventurer is also watching the show, but he gets a bit too close. The dog runs behind him and barks at him, loudly, and the adventurer falls forward in shock, landing on all fours next to the sheep. He tries to stand up and leave, but every time he does, the dog gets in the way, and another powerful bark makes the human fall back again. His clothes start to slip off, revealing skin that is sprouting curly white hair all over. His flesh turns black under the growing wool, and he bleats and yelps in surprise. His hands and feet harden and stiffen more with every bark, until he\'s backing off on all fours atop cloven hooves. One final bark, and the new sheep flees into the herd, identical to all the others.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 7,
                                "change": "add"
                            }
                        ]
                    },
                    "New Pig": {
                        "text": 'The fields are particularly muddy today, and you struggle to walk along with your feet squelching and sticking in the mud after every step. Not everyone is annoyed by this turn of events, though. You can see another adventurer, who is pulling off his leather boots with a big grin on his face. He pushes his bare foot into the cool mud and sighs with arousal when he wriggles his toes in it. He then pulls off his shirt, and starts to remove his pants. As he does, you notice his belly starting to swell and grow. His hard fighting muscles are softening into a chubby and heavy gut. His belly jiggles and bounces as he finally gets naked, then starts to roll around in the mud. When he\'s soaked and dripping with dirt, he begins to pump and jerk his cock, making oinking and grunting noises. His face, now fat and round, pushes out into a porcine muzzle with wide nostrils. His ears flop over, and a curly tail forms at his rear. By the time he unloads his cum all over his fat belly, the former human is a fat pink pig man, having the time of his life in the mud.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 7,
                                "change": "add"
                            }
                        ]
                    },
                    "New Mudman": {
                        "text": 'The mud in the fields is extra sticky today. Every step feels almost like hands are grabbing at your feet and trying to pull you deeper into the muck. You struggle up onto a large stone to take a break from trudging through the muck, and look around while you rest. Another adventurer is having a rough time too. He\'s up to his crotch in the mud, and wading through it with difficulty. As he moves, two shapes seem to rise up in the mud behind him. They look like growing mounds of dirt, until dripping arms emerge from the mud pillars, and the tops of them open up into dark mouths oozing with mud. They wrap their arms around the human, and start to stroke and squeeze him. One of them slimes over in front of him and begins to nuzzle and lick his cock with its earthy face. The human is shocked at first, but starts to moan with pleasure, and hump the mud-man\'s face quite eagerly. All the while, the one holding him is smearing its hands over his body, coating his skin in a thick layer of dripping brown mud. Soon, the human moans and gasps, and the mudman backs off to let him cum. The cum that comes out is brown and goopy, just more fertile mud. The human, totally coated in mud, grins his own goopy slime, and he slowly sinks into the earth, a new recruit for the two mud men. You decide to wait for the ground to dry up a bit before you move on.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 7,
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