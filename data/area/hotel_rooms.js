var area = {
        "title": "hotel_rooms",
        "position": [0.93,0.65],
        "header": "The Two Feathers Inn: Bedroom",
        "subheader": 'The beds at the Two Feathers are clean and well-made. It smells like fresh linen, and atop each bed is a small but clearly much-loved patchwork toy.',
        "events": [
            {
                "id": "inspect_bear",
                "title": "A Strange Teddy Bear",
                "subtitle": 'You are looking around the room when your eye is drawn to the patchwork toy on the bed. Now that you look closer, it seems a little out of place compared to the rest of the room. The colours are so different, and the button eyes are almost sinister in a way. Before you know it, you\'re sitting on the bed and lifting it up to look into its gleaming eyes. </p>It\'s surprisingly heavy. It\'s also strangely warm, and your body feels weak and soft the longer you hold it. Do you hold on?',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 6,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "grizzsex": {
                        "text": 'You can\'t seem to look away. Warmth and energy is flowing out from you, flowing into the strange toy. It grows bigger, and heavier, while you feel weak and soft. Your skin tingles as it starts to take on patches of colour all over. Purples, pinks, blues, greens. Your flesh is becoming soft, squishy artificial cotton. Your limbs are thickening, the insides filling with fluff. Your fingertips become fat and short, with stitches down the sides of your arms. Your head bulges out as it becomes a big round ball, with round teddy bear ears atop it. Then your mouth bulges into a rounded muzzle with a little plastic nose, and your eyes harden into gleaming glass spheres. </p>You struggle to resist, and finally toss aside the plush. You stumble backwards, shorter, and much fatter, now some sort of living patchwork plush teddy bear. The other toy stares at you, an evil grin on its face. It\'s now just as big as you are. </p>You can feel its power over you, and you shudder. If you explore in this place again, you know somehow that you will suffer an irreversible fate that may trap you here forever.',
                        "descriptionchange": "This adventurer is a short, chubby living teddy bear.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 6,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "become_teddy",
                "title": "Return to the Evil Plush.",
                "subtitle": 'The plush toy is calling out to you...',
                "type": "random",
                "requirements": [
                	{
                        "parameter": "species",
                        "value": 6,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "inanimatefetish",
                "results": {
                    "grizzpay": {
                        "text": 'Foolishly, you linger in this cursed room, and of course you are quickly drawn to the enormous toy. You sit in front of it, shivering with anticipation, and look deeply into its lifeless black glass eyes. Your vision swims and your body feels weak. Moving your limbs is becoming an enormous effort, like they weigh a ton. You can only stare helplessly, and that means you can no longer escape your fate. </p>The other plush starts to move, reaching forward to grip your sides with its cotton mitten-like hands. You are shrinking more, as more energy flows out from you into the plush. Its patches start to merge together, the many colours blending into a dark brown, while its simplistic shape becomes tall, hulking and muscular. Mitten hands become huge clawed paws, and simple round head slowly becomes a leering, thuggish ursine face with a massive cruel grin. You are totally helpless and small in the bear\'s grip. </p>He stands up, stretching out his muscles and growling, before dropping you on the bed. You are tiny now, the size the original bear was, and you cannot move at all. You are nothing but a toy. The bear cracks his neck side to side, and speaks in a deep voice that is like rocks rumbling. </p>"Finally, I\'m real! Thanks for the soul, little fool. I\'m gonna love being alive!" He then walks off without giving you a second glance, and you can only lie there, helpless and cute.',
                        "trapped_desc": "There is a cute patchwork teddy bear here, sitting on the pillows with a mindless, stitched-on smile.",
                        "trapped": 'You are a lifeless patchwork teddy bear, cute and smiling and filled with only fluff and stuffing. Your plastic eyes stare out into the room as you wait silently to be hugged.',
                        "outcomes": []
                    }
                }
            },{
                "id": "teddy_random",
                "title": "Accept Your Fate",
                "subtitle": "You are nothing but a teddy bear. Why try to be anything else?",
                "trapped": true,
                "type": "random",
                "requirements": [
					{
                        "parameter": "species",
                        "value": 6,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "inanimatefetish",
                "results": {
                    "footstool_1": {
                        "text": 'It\'s hard to think, as a plush toy. Your brain is full of fluff and all your thoughts keep drifting off to fantasies of hugging and being played with. The longer you spend in this soft, cute prison, the harder it is to hold on to your old thoughts and ideas.</p>You\'re not sure how much time passes, but a new guest rents out the room you\'re in. You can only see him when he walks past, since you\'re unable to move your head or even your shiny glass eyes. He is an otter, shorter than a human but with lean, firm swimmer\'s muscle visible under his shirt and shorts. He tosses his pack into a corner, and then jumps onto the bed next to you, before stretching and yawning.</p>The impact of him on the bed causes you to fall sideways, so you are able to see as he pulls off his shirt, revealing his bare chest, with its short, sleek fur and firm muscles. He kicks off his shorts and flexes his webbed feet, while his long and thick tail sways slightly. As he starts to push down his underwear, he notices you at last. "Oh! Looks like I have a roommate", he says, in a light-hearted tone.</p>He picks you up and holds you in his hand, your body dangling from his grip. You see his other hand reaching down and pushing his underwear off, and then you are being pushed down, your soft body pressing against his warm, throbbing shaft. You are helpless to resist as he starts to grind and thrust against you, his cock sliding up and down through your artificial fur. He rubs you against himself for a while, until his cock is leaking slick, shiny pre onto your body, and then he presses you down onto the mattress.</p>Your face is shoved into the sheets, and you feel the otter\'s body crushing down on you. His warm, firm chest squishing your cotton-stuffed body down, while he humps and fucks you. His cock grinding hard against your back, staining your cute fuzz with fluids. His panting getting louder, his sweat building up, until he shudders and moans. Hot, thick messy cum splatters all over your back, soaking your fabric and dripping from your sides. He then picks you up, still wet and dripping, and tosses you aside. You are dizzy and damp, your mind swimming with happiness at having made your guest happy.',
                        "outcomes": []
                    }
                }
            },{
                "id": "resist_teddy",
                "trapped": true,
                "title": "Resist Your Transformation",
                "subtitle": "You are not an object! You can fight this!",
                "type": "statcheck", //or random
                "stat": "might",
                "difficulty": 10,
                "requirements": [
					{
                        "parameter": "species",
                        "value": 6,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "default",
                "results": {
                	"rareSuccess": {
                		"text": 'You are not just a teddy bear. You have flex all of your strength to resist the cutesy, cuddly urges that are flowing through you. The urge to snuggle and pet is hard to fight, but when you remember what your muscles and strength used to feel like, it makes it easier to fight it. You aren\'t meant to just be soft, floppy cotton and fluff. You are a powerful adventurer! You feel like it\'s starting to work. Your floppy inanimate arms twitch and grow. Your fabric flesh pulses with warmth as it toughens and turns into flesh and blood once more. You feel heavy and firm as your skeleton regrows, and you start to be able to move again. You keep fighting, and slowly, with great effort, you reform completely. You are left panting and exhausted on the bed, still resisting the urge to think about hugs.',
                		"freeTrap": true,
                		"outcomes": []
                	},
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You are not just a teddy bear. You have flex all of your strength to resist the cutesy, cuddly urges that are flowing through you. The urge to snuggle and pet is hard to fight, but when you remember what your muscles and strength used to feel like, it makes it easier to fight it. You aren\'t meant to just be soft, floppy cotton and fluff. You are a powerful adventurer! You feel like it\'s starting to work, when the owl who runs the inn comes in to the room and starts to dust. He picks you up, and the pleasure you feel when his long feather fingers press into your fluffy fabric skin is overwhelming. Must fight it! Must...but then he pulls you close to his chubby, soft belly, and gives you a big squeeze. No orgasm can compare to the joy of being hugged as a plush. You are drowning in pleasure, and by the time you get put back on the bed, all you can think of is happy plush thoughts. Maybe next time you can escape.',
                        "outcomes": [
                        ]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'You are not just a teddy bear. You have flex all of your strength to resist the cutesy, cuddly urges that are flowing through you. The urge to snuggle and pet. The incredible joy of being hugged tightly and played with. The soft glee, mindless empty warm pleasure of being a toy. That\'s what you are, right? Just...a soft, cuddly, happy toy. No need to be big and strong. Just need to be soft and dumb and happy. Playtime! Hugs! Cuddles!',
                        "outcomes": []
                    }
                }
            },{
                "id": "alder_04",
                "trapped": true,
                "title": "Wake up", //WAKE ME UP! WAKE ME UP INSIDE!
                "subtitle": "You are unconscious. You’d rather not be that. You should try to wake up. It might be hard if your body is not strong.",
                "type": "statcheck", //or random
                "stat": "might",
                "difficulty": 25,
                "requirements": [
					{
                        "parameter": "alder_interest",
                        "value": 2,
                        "comparison": "equal" //default greater
                    },{
                        "parameter": "alder_connection",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "default",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You try your hardest to wake up. You can’t yet recall why you’re unconscious. You’re not asleep — that would feel much different. It takes all your energy, but you finally manage to return to consciousness. It’s hard to tell where you are with your eyes closed, but it’s even harder to open them. Your body is covered by something soft and warm, and you can feel an awfully cold paw pad on your forehead. By the minute, your senses unlock, and you begin to hear a faint tapping. You never regain your sense of smell — it appears you have a stuffed nose. You try your hardest and finally manage to open your eyes.</p>Your vision is weak, and all you see at first is a dark figure. Their eyes are a bright amber color, wearing a grim expression, though his face lightens up when he looks over and sees your battle to regain yourself. He placed a hand on your forehead and smiled warmly, giving you the time to wake up at your own pace. Your eyes wander around the room, noting it as awfully familiar — in fact, you’re pretty sure you’ve woken up in this bed before, and it even smells like where you usually sleep.</p>You ask the figure where you are. “You’re in your room,” he replied, his voice familiar and soothing. “Are you okay?” You could see the worry in his eyes. You nod faintly and ask what happened. “You fell into the river. I got you back out, but you’d already passed out by then. I think you got a cold too.” Your head feels light, though every moment spent speaking with him made you more and more awake. You try to sit up in the bed, but he holds you down gently. “You need to lay down and rest. Are you hungry or thirsty? I’ll get you something warm.” You nodded. “Alright. Just stay here and I’ll be back as soon as possible.” As he left the room, you felt your eyelids getting heavy, and you soon fell asleep once again.</p>You were woken up again by a knocking sound. This time opening your eyes was much easier. The door to your room opened, and Alder walked in carrying a tray with a bowl of soup. He placed it on the table, “Here you go. This should help.” He helps you sit up and places the tray on your lap. You don’t need to be told much else, and you dig in quickly. You feel your body reinvigorating itself, warming you to your core. “How’s it taste?” You didn’t tell a word and focused on wolfing down the soup; “that is one way to answer.” the panther thought out loud.</p>You finished it quickly. In fact, you’d been so pre-occupied you hadn’t noticed how dark outside it was. How long had you been passed out for? You open your mouth to ask, but the panther places a finger on your lips to silence you, “Whatever questions you have, you should rest first. I’ll be staying in the room across from yours, so don’t worry. Focus on recovering, alright?” He leaned down and kissed you on the forehead. Like a magic spell, you found yourself falling asleep again not long after, filled with warmth.</p>You wake up the subsequent morning, feeling as fresh as ever. Was it the soup? Perhaps it had magic to help cure colds? Whatever it was, you felt better than ever, ready to begin a new day. When you told Alder later that day, he smiled and hugged you tightly.",
                        "freeTrap": true,
						"outcomes": [
							{
                                "parameter": "alder_interest",
                                "quantity": 0,
                                "change": "set"
                            }
						]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": "You manage to bring yourself to the brink of consciousness, but you quickly go cold again. Your body is weak, you must try harder!",
                        "outcomes": []
                    }
                }
			},{
				"id": "alder_room",
                "title": "Alder's Room",
                "subtitle": "Alder is staying at the Dormaus Inn for the time being. He probably wouldn’t mind if you visited him in his room.",
                "type": "random",
                "requirements": [
					{
						"parameter": "alder_connection",
						"value": 1,
						"comparison": "greater"
					},{
						"parameter": "gender",
						"value": 1,
						"comparison": "equal"
					}
				
                ],
                "icon": "navigateicon",
                "results": {
                    "success": {
                        "text": "You knock on the panther’s door and wait for a response. You feel your stomach flutter in anticipation; he opens the door not long after, a lit cigarette in his mouth. His face beams up as he sees you, and he quickly speaks: “Ah, it's you! Come on in!”",
                        "area": "hotel_alder",
                        "outcomes": []
                    }
                }
			},{
                "id": "alder_05",
                "title": "Perverted Panther",
                "subtitle": "It’s strange… When you first saw Alder, you figured he’d be the rough, violent type, but he’s the exact opposite of that. You’ve been thinking about the first time you met more and more as of lately, each time bringing a tightness to your pants. You want to see him in his gear again… and possibly move to stage 2 of your relationship.",
                "type": "random",
                "requirements": [
					{
                        "parameter": "alder_interest",
                        "value": 0,
                        "comparison": "equal"
					},{
						"parameter": "alder_connection",
						"value": 1,
						"comparison": "equal"
					},{
						"parameter": "gender",
						"value": 1,
						"comparison": "equal"
					}
				
                ],
                "icon": "aldericon",
                "results": {
                    "success": {
                        "text": "You knock on Alder’s door. You hear a couple of heavy footsteps before the door is opened. As if he’d read your thoughts, he was standing right there in front of you, decked out in leather from head to toe just like the first time you met him. You took a few steps backs from instinct — feeling intimidated at a primal level.</p>“I was about to go to your room and surprise you, but it seems that wasn’t needed…” The panther’s voice was deeper than usual, and his face was shaped into a smirk. “It seems it worked though.” He took a step forward and pointed down at your crotch, “And you look like you’re liking the view too, yes?” Looking down, you saw yourself standing with a full erection. No one was around to see, but it was still rather embarrassing to be standing in a hallway with an obvious bulge.</p>“So, are you going to feast yourself on my appearance, or do you want to come in and get the whole ‘package’?” he grabbed his groin as he said the last part. Even if you had rejected him, your dick might’ve just gravitationally pulled you into the room anyway. As you took a step forward, his smirk intensified; placing his paw on your head, he leaned in and whispered to your ear: “Good boy.” You felt a shiver run through your body — one that was chilling yet immensely arousing. You follow him into his room and closed the door behind you.</p>You were immediately hit by the strong scent of smoke and panther — which wasn’t too much of a surprise really. How he had managed to get it smelling this quickly was the real surprise. “Now, strip.” It caught you off guard so much that you froze. After seconds of silence, the panther snapped his finger, and like a spell, you found yourself able to move — feeling compelled at an instinctual level to strip down.</p>“There we go… I want to see all your cute curves when I play with you.” You can’t tell if he’s thrown you into a trance, or if you’re just so horny that you’ve lost control of your body. You want to obey him and do whatever he tells you to. Now strip naked inside the room, you find yourself blushing in embarrassment. The panther walks over and sits on his bed. He beckons you over with a finger, and you follow him like a puppy on a leash. Without a word, he points down at the floor, and you kneel down before him. He grabs your head and shoves your face into his crotch. You could smell his natural, manly musk. Even after removing his hand, you keep huffing his scent in.</p>“You’re definitely the kinky type, aren’t you?” Just as you’re about to reply, he hushed you and patted your head demeaningly. “You don’t need to speak. Just relax and be a good boy.” Those words send a shiver of arousal through your skin again. You’re distracted by something inside the panther’s pants hardening and pressing up against your face.</p>“Are you enjoying yourself? My cute little kitten…” You nodded instinctively, nuzzling your face against his crotch. You were rock hard, and the arousing scents all around you didn’t make it any easier on you. “Now, just sniffing is boring… I think it’s about time for you to have a taste…” He pulled your head back and began to slip his leather pants and his underwear down. Out came his black cock, covered in short barbs — short enough that you figure them to be more pleasurable than painful.</p>He doesn’t wait or give you any orders; he shoves his cock straight into your mouth and presses your head up to his crotch, filling your nose with a strong natural musk and your throat with his meat. You can tell from his erratic breathing that he’s enjoying your warm maw. He starts out slow, pulling and pushing his cock back and forth, warming himself up for later.</p>Unable to see much past his crotch fur, you don’t notice your face elongating and growing short black fur. With each thrust, a little bit of his essence — precum — enters you, subtly making you more and more like him. His thrusts speed up, and so does your transformation. You’re just now noticing the effect as your eyesight and sense of hearing sharpens — not to mention the musky scent growing stronger and more familiar to you.</p>Soon the panther is practically fucking you like a toy. You feel the black fur spread down your neck and to your chest. Your muscles strengthen wherever the fur is, and bit by bit your body is overtaken by your new figure. Your biceps and pecs grow to the same size as Alder’s, pink pads appear on your palm and fingertips, abs become visible on your stomach… As the effect reaches down to your crotch, you feel orgasmic as your cock reshapes itself to be just like Alder’s, barbs and all. It spreads down your legs to your feet, and finally, it’s over… In such a short time, you’ve become a panther not too different looking from Alder.</p>At this point, the panther begins thrusting even more erratically. He uses one of his leather boots to tease and grind into your new cock. You were hard before — now you felt like you could cum at any point. However, it was the panther fucking you that came. With a loud moan, he thrust violently into your throat, filling you up with his potent seed. You couldn’t breathe as he practically used you as a disposal pipe, thrusting a few more times as load after load filled your mouth and went down your throat. The flow stopped after a while, and you could hear Alder audibly panting in exhaustion above you.</p>“F-fuuck… Your face makes a good fucktoy, I should’ve used you like this the first time we met…” The thought of getting used like this by someone you didn’t know was oddly arousing, though knowing it was someone you loved doing it was better to you. “Do you want to keep going?”",
                        "descriptionchange": "This adventurer is a tall black panther with a long and slender tail. Their eyes are a glowing amber color, and you can discern from their breath they’re a frequent smoker.",
						"area": "hotel_alder",
						"trapped_desc": "This adventurer is about to get laid by a hot, muscular panther.",
                        "trapped": "It'd be rude to leave in the middle of sex.",
                        "outcomes": [
							{
								"parameter": "alder_connection",
                                "quantity": 1,
                                "change": "set"
							},{
								"parameter": "species",
								"quantity": 46,
                                "change": "set"
							}
						]
                    }
                }
			},{
                "id": "lioness_place_m",
                "title": "Your Master Calls",
                "subtitle": "You can smell the lion, the one who owned you. You need him, desperately.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "gender",
                        "value": 1,
                        "comparison": "equal" //default greater
                    },{
                        "parameter": "submissiveness",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },{
                        "parameter": "leonar_master",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "leonar_r",
                "results": {
                    "The Shining": {
                        "text": 'As you stand in the hotel room, you begin to feel strange. Your body is flushed, and warm. Tingling sensations are flowing along your thighs, and your lion body feels warm and tingly. You have a desperate urge, an overpowering need to be filled. You start to pant, and your nostrils flare as you detect the source of your desire. A musk in the air, just a faint trace, but one which is hammering at your deepest desires like a jackhammer. You can smell a powerful, fertile male lion, and you are in the throes of some sort of strange heat.</p>You leave the room and follow the scent down the corridor, your heart pounding in your chest. With each step the musky, primal savannah scent of a horny lion gets stronger. You follow it up the stairs to the royal suite of the hotel, normally off-limits to all but the most prestigious of guests. You push open the double doors, and your mind swims at what you see. In front of you, lying on his back naked in a massive four poster bed, is your king, your lion. His handsome face is stretched into a gleaming fanged grin, and his arms are crossed behind his head, showing off his huge furry armpits. Surrounding him, at his feet and sides and curled on the floor, are many beautiful female lions, purring and gazing up at their ruler with adoration. He flexes his mighty paws, and you find yourself staring between his legs at the gigantic rock-hard lion cock standing erect in the air.</p>"I knew you would come, my lioness. Serve me", he commands. You feel like you should correct him, to say you are male. But it does not matter. Male, female...you are his lioness. You are helpless to resist. You move forward and kneel before his bed, taking hold of one of his mighty footpaws and beginning to stroke and massage it. He growls with pleasure and flexes his paw, then motions you to come up on the bed. Obediently, you climb up onto the plush and comfortable bed, but all you want to be on is your master\'s glorious body. He stares at you with his glowing amber eyes, as you stroke and kiss his legs, then rub your hands along the powerful muscles of his furry chest. He reaches up and strokes your chest, then pulls you down and rolls you over. His heavy, hot, musky body presses down onto you, as he growls with dominance and possessiveness.</p>"You are my lioness. My slave", he says, and you just nod, accepting your place. He teases and strokes your breasts, then begins to push forward, his mighty shaft stroking along your cock, as he frots and grinds against you. You exist to please him, to serve him. He cock rubs over your furry skin, oozes pre into your pelt, and every motion he makes causes you to forget your old life more and more. You want only to be with him forever, be one of his adoring harem slaves. He starts to thrust faster, his fanged maw slavering as his fur rises. Over and over he grinds against you, until his chest heaves with lust and his hands unleash claws that leave massive ragged tears in the bedsheets.</p>You hear his orgasm coming, as a rumbling, earthshaking roar building in his chest, until it crashes out from his muzzle. His enormous roar crushes your will, makes you know that you are beneath him, serving him, and when his cock unleashes its hot gift all over your chest, you accept it with bliss. Your master has used you and taken you, and blessed you with his cum. Your own body shudders and heats with pleasure, a heartpounding orgasm that washes away your thoughts and fills you with desire for your man. Your smaller cock erupts with your own seed, mingling with his. Slowly, you look up to him, and whimper something unintelligable, trying to express your love. He grins, his eyes gleaming...and rolls you over to fuck your ass, already hard and ready to go.</p>All night you are mounted and taken by your king, sent to heights of pleasure you have never felt before. By the morning, you are an exhausted mess, and he leaves you dripping with his cum on the bed as he gathers his slaves to go. Before he leaves, he kisses your neck and places something next to you. When you recover your senses enough to get up, you find a beautiful silver slave collar. Engraved on the front are the words "My Lioness"',
                        "outcomes": [
                            {
                                "parameter": "leonar_master",
                                "quantity": 2,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "lioness_place_f",
                "title": "Your Master Calls",
                "subtitle": "You can smell the lion, the one who owned you. You need him, desperately.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "gender",
                        "value": 2,
                        "comparison": "equal" //default greater
                    },{
                        "parameter": "submissiveness",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },{
                        "parameter": "leonar_master",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "default",
                "results": {
                    "The Shining": {
                        "text": 'As you stand in the hotel room, you begin to feel strange. Your body is flushed, and warm. Tingling sensations are flowing along your thighs, and your lioness pussy feels warm and wet. You have a desperate urge, an overpowering need to be filled. You start to pant, and your nostrils flare as you detect the source of your desire. A musk in the air, just a faint trace, but one which is hammering at your deepest desires like a jackhammer. You can smell a powerful, fertile male lion, and you are in the throes of heat.</p>You leave the room and follow the scent down the corridor, your heart pounding in your chest. With each step the musky, primal savannah scent of a horny lion gets stronger. You follow it up the stairs to the royal suite of the hotel, normally off-limits to all but the most prestigious of guests. You push open the double doors, and your mind swims at what you see. In front of you, lying on his back naked in a massive four poster bed, is your king, your lion. His handsome face is stretched into a gleaming fanged grin, and his arms are crossed behind his head, showing off his huge furry armpits. Surrounding him, at his feet and sides and curled on the floor, are many beautiful female lions, purring and gazing up at their ruler with adoration. He flexes his mighty paws, and you find yourself staring between his legs at the gigantic rock-hard lion cock standing erect in the air.</p>"I knew you would come, my lioness. Serve me", he commands. You are helpless to resist. You move forward and kneel before his bed, taking hold of one of his mighty footpaws and beginning to stroke and massage it. He growls with pleasure and flexes his paw, then motions you to come up on the bed. Obediently, you climb up onto the plush and comfortable bed, but all you want to be on is your master\'s glorious body. He stares at you with his glowing amber eyes, as you stroke and kiss his legs, then rub your hands along the powerful muscles of his furry chest. He reaches up and strokes your chest, then pulls you down and rolls you over. His heavy, hot, musky body presses down onto you, as he growls with dominance and possessiveness.</p>"You are my lioness. My slave", he says, and you just nod, accepting your place. He teases and strokes your breasts, then begins to push forward, his mighty shaft stroking along your labia, before plunging deep into your pussy. You gasp and moan, your insides so sensitive and so pleasured by the touch of your king\'s shaft. You exist to please him, to serve him. He thrusts and plunges into you, in and out, in and out, and every motion he makes causes you to forget your old life more and more. You want only to be with him forever, be one of his adoring harem girls. He starts to thrust faster, his fanged maw slavering as his fur rises. Over and over he pounds into you, until his chest heaves with lust and his hands unleash claws that leave massive ragged tears in the bedsheets.</p>You hear his orgasm coming, as a rumbling, earthshaking roar building in his chest, until it crashes out from his muzzle. His enormous roar crushes your will, makes you know that you are beneath him, serving him, and when his cock unleashes its hot gift deep into your pussy, you accept it with bliss. Your master has mounted you and taken you, and filled you with his cum. Your own body shudders and heats with pleasure, a heartpounding orgasm that washes away your thoughts and fills you with desire for your man. Slowly, you look up to him, and whimper something unintelligable, trying to express your love. He grins, his eyes gleaming...and starts to fuck you again, already hard and ready to go.</p>All night you are mounted and taken by your king, sent to heights of pleasure you have never felt before. By the morning, you are an exhausted mess, and he leaves you dripping with his cum on the bed as he gathers his slaves to go. Before he leaves, he kisses your breast and places something next to you. When you recover your senses enough to get up, you find a beautiful silver slave collar. Engraved on the front are the words "My Lioness"',
                        "outcomes": [
                            {
                                "parameter": "leonar_master",
                                "quantity": 2,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "hotelroom_random",
                "title": "Explore the Upper Hotel",
                "subtitle": "Despite this building's small size, the winding corridors and room numbers would suggest a much larger structure.",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "The Shining": {
                        "text": 'On the way to the room, you accidentally open the wrong door. It opens to reveal an older man in a business suit, who is getting a blowjob from a shorter, furry bear. The bear\'s muzzle is open wide, as he deep-throats the businessman\'s cock. </p>His thick black nose presses repeatedly into the human\'s fluffy pubes, until the businessman grunts and pants, unloading his cum deep into the bear\'s throat. The bear pulls free, letting the last few spurts spray over his nose and muzzle, where he lets it drip freely. They notice you looking, and turn to stare at you until you apologise and move away.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "Painting Theft": {
                        "text": 'The hallway between the bedrooms has oil paintings between each door, lending a homely sort of air to the place. Some of them are a bit weird though. Who would paint an oil painting to look like a trapped fox pounding on glass trying to escape? You are examining the painting looking for an artists signature, when you see a skunk man turning the corner. He scoffs at one of the paintings, and swipes a knife across the fabric, ruining it. Then, he coughs, and shudders. </p>You see his body stumble forward like it\'s being pulled on strings. His hands fall against the painting, and then start to melt into it. His fur turning to paint and oil, his body flattening. It sucks him up to his arms, and he yelps and struggles to pull free. It is no use though. He\'s pulled up into the canvas and sucked up, leaving just his bushy tail dangling out for a moment before that slips inside too. </p>You walk over to the painting, to see an animated, two dimensional version of the skunk, pounding on the canvas from within and trying to escape. Until finally the paint dries, trapping him in still painted silence.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "Grizz Dream": {
                        "text": 'You open one of the hotel room doors and peek inside. The musky aroma of booze and sweat greets you, and you see the huge furry bulk of Grizz the bartender lying on the mattress and snoring. His weight is causing the bed to crease down the middle, and he\'s on top of the blankets, naked, with his enormously thick bear cock standing erect in his sleep. His gigantic footpaw kicks and twitches, and he murmurs something. It sounds a bit like "Drink it all, bitch." </p>His cock leaks pre, dribbling down the huge shaft and soaking the mattress. He starts to pant, his enormous round belly heaving as he mutters louder and shakes more. "Fuck. Yeah. Swim in my cum. You slut..." he growls. It seems the big bear has a bit of a fixation on his own cream! Whatever he\'s dreaming about, it clearly becomes too much for him to handle. His cock jerks and bounces in his sleep, and without him ever touching it, it spurts a thick jet of cum that arcs into the air and splatters all over his belly. </p>His shuddering calms as he starts to snore again. Judging by the stains and stickiness all over the carpet, you get the feeling that Grizz has quite a few nightly emissions. No wonder he prefers to rent a hotel room than clean it all up himself.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
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