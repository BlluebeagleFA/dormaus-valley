var area_hotel_rooms = {
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
                "icon": "default",
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
                "icon": "default",
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
                ],
                "icon": "default",
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