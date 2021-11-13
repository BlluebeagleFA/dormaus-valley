{
        "title": "farmhouse",
        "header": "Morgan Farmhouse",
        "position": [0.51,0.29],
        "mapId": "worldmap.jpg",
        "subheader": 'A wide wooden farmhouse stands here, the board walls washed with white paint, and the tiled roof a cheerful red. Some horse posts are next to the wooden porch, and a creaking sign painted with a wheat symbol sways on the gate.',
        "events": [
            {
                "id": "farm_north",
                "title": "Travel North towards Dormaus",
                "subtitle": "You will need to walk along the roads for a while.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { 
                        "text": "You start travelling north, away from Turner's farmhouse and along the country roads towards Dormaus.",
                        "area": "farmpath",
                        "outcomes": []
                    }
                }
            },{
                "id": "farmhouse_e",
                "title": "Travel East towards the fallow fields",
                "subtitle": "There are some bare muddy fields in that direction.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { 
                        "text": "You leave the planted fields and make your way gradually along the thick muddy path.",
                        "area": "farmfield",
                        "outcomes": []
                    }
                }
            },{
                "id": "farmhouse_s",
                "title": "Travel South towards the farm exit",
                "subtitle": "You can see some wheat fields down that way",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { 
                        "text": "You make your way south, soon coming to a number of swaying wheat fields.",
                        "area": "farmsouth",
                        "outcomes": []
                    }
                }
            },{
                "id": "horsatyr_tf",
                "title": "Help Out in the Stables",
                "subtitle": 'Turner could always use some assistance with the horses, of numerous varieties.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 39,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "grizzsex": {
                        "text": "You look around the farm for Turner, and soon find the tall horse mucking out the stables with a long pitchfork. He wipes the sweat from his forehead and leans on the handle of his tool as you approach. \"Heya friend! How can I do ya for?\", he asks.</p>You ask him whether you could help him out in the stables, and he practically drags you inside. \"Fer sure! Can never get enough help with these fellas!\", he says cheerfully.</p>He shows you around inside the stables to begin with. The floor is packed dirt, strewn with hay, and the walls and ceilings are wooden planks with tall, dusty rafters. In the many stalls of the stable are a variety of equines. There are a few scruffy, long-eared donkeys, several enormous muscular stallions, and even a few seemingly normal anthro horses.</p>You stop in front of one such horse, curious about what he's doing. He's a tall grey percheron with soft pale spots all down his flank. He's completely naked, and seems totally relaxed in his stall, chewing on some hay. You try asking him why he's here, and he just stares at you, then gives Turner a meaningful look. Turner chuckles. \"Ah, some folks want the simple life, yknow? This here fella sold himself to us an' he doesn't wanna talk or think or make decisions, just wants to be like a workin' horse. I can almost see the appeal, m'self. His name's Pech now\", he explains.</p>After that, Turner shows you what he needs you to do. Muck out the stables with the pitchfork, replace the hay with fresh stuff, sweep the floors and brush down the horses. It's the last part you look forward to most, and you find yourself imagining stroking your brush down the firm, warm hides of the many horses in the stables as you do the other, more tedious work. You find yourself sweating quite a lot as you work, and since your clothes are also getting quite dirty, you decide to pull your shirt off and continue without it. Your legs ache and feel warm as you continue to heave all the dirty hay away and brush down the stables, and soon your feet are aching and sore, feeling almost like they're swollen. You remove your shoes, and flex your toes. They feel stiff and firm, but now that you're barefoot you are already feeling better. You carry on working, your feet starting to make cute clopping sounds as you work, but you are too distracted by your upcoming final task to notice that.</p>You take the horse brush from its hook on the wall, and open up the door to Pech's stall. He gives you a blank look, and snorts from his large nostrils. You remember to treat him just like a normal horse, and first gently rub his nose to let him smell you before you stroke his sides and ease your brush against his fur. His tail flicks and sways as you begin to stroke the brush firmly down his broad, muscular sides. He seems incredibly relaxed, and it starts to rub off on you too. As he mindlessly stares into the distance and enjoys the brushing, your own thoughts start to slow and feel calm and mellow. Your stiff, firm feet harden more, and stretch out. They push into the ground as they form into powerful hooves. You find yourself admiring the large horse, and daydreaming about sharing his simple, obedient life. You look down at his massive hooves, his thick and powerful legs, and his huge, soft black sheath, hanging like a sleeve atop a pair of huge, musky balls. You inhale his scent, and lean in closer to him. You barely notice as he gently takes the brush from you, and starts to stroke it down your sides. The firm bristles sliding down your legs, making them muscular and firm. Causing you to grow soft horsehair, just like his. He brushes it over your rear, making it plump and grow, and you snort as you feel your own horsehair tail start to grow from your behind, flicking and twitching like his.</p>Just as he raises the brush to spread the changes further, you are suddenly interrupted. Turner stomps into the stable, pulls open the stall, and grabs the brush. \"Pech! Ah told ya a dozen times! You can't be turnin' folks into horses without askin'!\", he yells. Pech snorts and flicks his tail sullenly.</p>Turner takes you by the arm and drags you out of the stables. You struggle a little, your gait feeling odd as you walk on your strong hooves and muscular horse legs, but with your upper torso the same as it was before. \"Ah apologise fer him. He can be a handful. You do look cute as a horse satyr though, friend!\", Turner says cheerfully. You nod, still dazed and confused, as Turner hands you your pay for the day and sets you loose.",
                        "descriptionchange": "This adventurer appears to be half horse. Their lower body is the muscular, firm body of an anthro horse, with a spotted grey hide and large, strong hooves.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 39,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "become_pig",
                "title": "Work in the Pigpen",
                "subtitle": 'You hear a dull, repetitive noise coming from behind Turner\'s ramshackle barn. You walk around the building to see Turner, his shirt off to reveal his muscular horse body, using a shovel to muck out an old pen. He sees you approaching and give you a wave. "Pa says ah haf ta\' get this pen back into usable order," the huge horse says, pulling at the strap of his overalls. He steps out and points back into the pen. "Why don\' you see if ya think it\'s worth living in?" Do you want to help him out? [Guest event from GrayVanillaWafers]',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 9,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "grizzpay": {
                        "text": 'You pass by Turner and step into the pen to get a look at the hard work he has put into cleaning the stall. You can tell he\'s cleaned out quite a bit of mud and filth, but there is still quite a bit left to do. You look down and realize that you have gotten some of that filth on the bottom of your shoe. You start trying to scrape it off when you hear a shout from the barn. </p>"Boy!!" the deep twang filled voice of Turner\'s father bellows. A moment later the huge plow horse is standing before his son and towering over him. "I tolt you ter\' get that pen clean\'t". You decide that it is time to get out of Turner\'s hair, so you move back to the pen opening and Turner\'s father sees you. "And what is this boy doin here?" Turner tells his father, "Ah asked \'im to see if he thought t\'were ready to live in." Turner\'s father turns his angry gaze back on you, "Is it? It ready to live in boy?" Shaken, you just not your head. </p>The large horse smiles at you in a sinister way, then pushes you hard in the chest. You fall back into the mud and filth of the pen. The muck coats your arms and legs. "Then why don\' you get comfy." You start to stand up, to demand him to apologize, but then it hits you. The stench from the filth ridden mud. You try to plug your nose with you hand, but manage only to smear more of the insidious smell across your face. </p>You gag and try wiping your hands across your filthy shirt. The mud feels so good as it squelches through the cloth of your shirt and against your skin. You can\'t help yourself as you grab another handful and rub it across your chest. And the smell has become less sharp and painful, but more warm and inviting. You run your hands deep into the muck, forgetting about Turner and his father standing at the fence watching you. </p>Your shirt and pants start to feel tight as you roll in the mud, coating more and more of yourself. Your feet start to stiffen and turn black as they become hooves, bursting through your shoes, but you hardly notice as you lower your face to the ground. Your nose and jaw pushing forward to meet the wet earth and a squeal escapes your lips as you feel your ears stretch into peaks then flop over. Your stomach continues to grow until your pants and shirt shred into a million tiny ribbons. As you take one last roll in the muck, your large backside is in perfect view for turner to see your spiral tail spring from the soft pink flesh. He grins. He\'s not had a pig to roll in the mud with for a few years.',
                        "descriptionchange": "This adventurer is a chubby pink pig with a jiggling belly and flat snout.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 9,
                                "change": "set"
                            }
                        ]
                    }
                }
            },/*{
                "id": "pumpkin_random",
                "title": "Accept Your Fate",
                "subtitle": "You are nothing but a big orange pumpkin. Why try to be anything else?",
                "trapped": true,
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "pumpkin_1": {
                        "text": 'Today you hear a sound that you have gotten used to happening every now and then. The mayor\'s crooning, sultry voice, and the stomping and crushing sound of your fellow pumpkins being turned into smashed-up goo under his feet. You can\'t see him, being unable to move from your position, but you hear him get closer and closer. </p>Then his shadow falls over you, and you see his shining eyes and massive grin above you. The older cat\'s large, soft feet are completely soaked with shiny wet pumpkin goo. "Well now, what a delightful plump specimen you are", he says. You feel the sole of his paw as he strokes it slowly along your firm rind. Smears of wet pumpkin drip along your bulbous body, the remains of former humans, turned into pumpkins and then into crushed goo by this powerful cat. </p>His claws slowly emerge, and trace along your body. It\'s ticklish, and you would squirm if you could, as he leaves thin lines cut into your side. His paw lifts high into the air, and you are sure that this is the end. You will soon be just a messy pile of goop for his amusement. But then he lowers it again, and winks at you. "Perhaps once you are a little larger, my friend", he says, and walks off to his next victim.',
                        "outcomes": []
                    },
                    "pumpkin_2": {
                        "text": 'Turner the horse is here today, walking through the pumpkins and feeling them for weight, size and firmness. You feel his hands stroke over your rind and tease your vine, but he leaves you behind in the soil. The pumpkin next to you is luckier, though. Turner nods in approval at that one, and picks him up with a mighty heave, before putting him on a little wagon. "Yer gonna be a mighty fine pumpkin pie", the big horse says. </p>You are incredibly jealous. Being eaten may have seemed terrifying when you were an adventurer, but as a pumpkin, you have grown to love the idea. For someone to chop you up, cook you into a delicious meal, and spread around your seeds is the greatest delight a pumpkin could hope for. You fantasise about all the different meals you could be used for all day.',
                        "outcomes": []
                    },
                    "pumpkin_3": {
                        "text": 'The soil doesn\'t feel as tasty and nutritious today as it usually does. Your vine feels dry and sticky, and you\'re not in a good pumpkin mood. That is, until you feel the ground under you tremble with the approach of someone big and heavy. You sit in the soil until a shadow falls over you. It\'s Grizz, the barkeeper. </p>You watch as he pulls his cock out from under his apron, and begins to pump and squeeze the thick, dark meat of his swollen bear cock. His foreskin slides up and down his glistening shaft, until he grunts and growls. With a pant, and a jerk of his cock, a messy splatter of cum slaps against your orange pumpkin body. Rope after rope of thick, creamy jizz splatters and lands all over you, then drips slowly down you into the dirt. You can do nothing but let it dribble. </p>Once it soaks into the soil, though, you feel revitalized and full of energy again. If you get the chance, you feel you should thank Grizz for the fertilizer.',
                        "outcomes": []
                    },
                    "pumpkin_4": {
                        "text": 'The sun is particularly warm and pleasant today. As a plant, the feeling of the sun is almost like energy flowing directly into your body. The pleasure of it tingles all along your rind, and makes your vine throb with delight.',
                        "outcomes": []
                    }
                }
            },{
                "id": "resist_pumpkin",
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
                		"text": 'It\'s very hard to think or focus on anything as a vegetable. Your mind is kept sluggish by the endless pleasure of your vines and the tasty warmth of the sun. But knowing that you\'re in a farm, waiting to be harvested and destroyed, gives you the motivation to fight that sluggishness and focus on escape. You don\'t want to just be someone\'s dessert. You focus all your energy on trying to move and bring yourself back.</p>It takes a long while, but eventually with enough force and effort, you manage to wiggle your vine. It strokes along the ground, and the pleasure of it makes you almost immediately forget what you were doing. You quickly stop moving it, and focus on other areas of your body instead. Your thick orange rind starts to grow and move. Your whole body wiggles a little, and very gradually begins to push out new limbs. They emerge slowly, orange arms and legs, a gradually developing torso. Your vine snakes between your legs and pulses, as the pumpkin moves up your body, leaving you partway reformed, as an orange creature with a pumpkin for a head.</p>You reach down and pull on your vine, drawing it out from the soil and pulling it back to your body. Your pumpkin head softens slowly, as your eyes and mouth begin to reform. The firm orange of your skin becomes softer as it returns to living flesh, and you gradually feel sensation restoring to you all over. The coldness of the mud under your feet, and the living vines of the other pumpkins brushing at your ankles as they try to keep you here. You quickly scramble away before that can happen.',
                		"freeTrap": true,
                		"outcomes": []
                	},
                    "success": { 
                        "text": 'It\'s very hard to think or focus on anything as a vegetable. Your mind is kept sluggish by the endless pleasure of your vines and the tasty warmth of the sun. But knowing that you\'re in a farm, waiting to be harvested and destroyed, gives you the motivation to fight that sluggishness and focus on escape. You don\'t want to just be someone\'s dessert. You focus all your energy on trying to move and bring yourself back.</p>It takes a long while, but eventually with enough force and effort, you manage to wiggle your vine. It strokes along the ground, and the pleasure of it makes you almost immediately forget what you were doing. Your thick green vine is just so sensitive and firm. You might have been able to resist that, except unfortunately Turner the horse was walking right nearby when he saw you move. The large, friendly stallion kneels down next to you and pats your side. "Don\'t worry, buddy. You\'ll be a great pumpkin! Let me help you relax", he says. His thick, calloused hand takes hold of your vine, and he starts to stroke up and down it, squeezing and kneading it gently. Overwhelming pleasure flows through you with every touch. The motions seem to release relaxation and orgasmic bliss like you\'ve never felt before. The flood of warmth and sensation utterly melts away your thoughts, and you sink completely into mindless vegetable pleasure. You have no idea how many hours it is before you slowly, sluggishly start to re-awaken, but you\'ll have to start your resistance all over again.',
                        "outcomes": [
                        ]
                    },
                    "fail": { 
                        "text": 'You have to struggle to force yourself to think. Being a vegetable, your mind is constantly slowing down and becoming dumb and empty and calm. You are distracted by the pulsing warmth and sensation of the sun on your body, and the coolness of your vines absorbing life from the soil. You know that for all that it feels so pleasurable to sit here amongst the other pumpkins, if you don\'t fight back, you are destined to end up smashed under the mayor\'s feet or baked into a pie.</p>But...would that be so bad? Surely that was why you were planted, right? You want to make your farmer happy. Being a vegetable means that you exist just to be eaten or harvested. You feel excited and tingly thinking about it. Getting big and plump and fat, having someone scoop out your warm tasty goo and making it into pies. Each scoop making you dumber and emptier and happier, knowing people are going to swallow you piece by piece, knowing you are delicious.</p>Or even the mayor pressing his feet down onto you, shoving them inside you, so you soak him with your goo and your seeds scatter over the soil. Making lots of new pumpkins to give pleasure to more people. This is where you belong! You are a good vegetable and you can\'t wait to be harvested.',
                        "outcomes": []
                    }
                }
            },*/{
                "id": "farm_work",
                "title": "Work on the farm",
                "subtitle": "Turner always appreciates help, but it\'s hard and tiring work.",
                "type": "statcheck", //or random
                "stat": "might",
                "difficulty": 15,
                "requirements": [
                    {
                        "parameter": "turner_interest",
                        "value": 2,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "watervine_1",
                "results": {
                    "success": { 
                        "text": 'Turner is extremely pleased to have some help around the farm. You follow him into one of his fields, and he shows you how to pull out the thick, hard weeds out from between his watervines. As he demonstrates, his enormous muscles flex, and the sweat glistens on them. It\'s a little distracting. Once he\'s confident you know which strands are weeds and which are part of the watervines, he leaves you to it.</p>You start to grip and tug on the rough black weeds, slowly dragging them out from the soil. Soon your hands are stinging and your arms are aching, but you stick with it. The sun moves slowly down in the sky as you work, and when Turner returns, you don\'t even realise how long you\'ve been at it. He grins and pats your back. "Yeah, ah\'m the same sometimes. Feels good to work hard an\' just not think much, huh friend?", he says. He tosses you a cloth to wipe your forehead with, and kneels down to pick up a vine that\'s fallen loose. "Here ya go, ya can keep this one", he says.',
                        "outcomes": [
                            {
                                "parameter": "watervine_1",
                                "quantity": 1,
                                "change": "add"
                            },
                            {
                                "parameter": "turner_interest",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    },
                    "fail": { 
                        "text": 'Turner is extremely pleased to have some help around the farm. You follow him into one of his fields, and he shows you how to pull out the thick, hard weeds out from between his watervines. As he demonstrates, his enormous muscles flex, and the sweat glistens on them. It\'s a little distracting. By the time he\'s finished with his explanation, you realise you barely heard any of it, but he leaves before you can ask.</p>You start to grip and tug on the rough black weeds, slowly dragging them out from the soil. The scratchy flesh of the vines tears at your skin, and they stick in the soil so strongly that your arms are aching with pain after only two or three of them. Turner soon returns and gives you a disappointed expression. "Ah, s\'ok friend, not all of us are cut out fer the farm life", he says sympathetically.',
                        "outcomes": [{
                            "parameter": "pain",
                            "quantity": 1,
                            "max": 2,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "farm_payday",
                "title": "Harvest Time",
                "subtitle": "The crops have come in and Turner wants to share.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "turner_interest",
                        "value": 1,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "turnericong",
                "results": {
                    "grizzpay": {
                        "text": 'Today when you walk up to the trellises that the watervines coil around, you notice that the dark colour of the vines has given way to a glossy, shiny deep green. The vines are covered in thick, bulging grapes. Turner is standing at one trellis, unwinding the vines and stacking them in a basket. He waves at you when you approach. "Hey there friend! Watervines are comin\' in nice! Here, try one with me!", he says cheerfully. He hands you one of the heavy vines, and you sit together on the soil as you eat.</p>The strange grapes have only a very faint flavour, like grassy watermelon. However, each bite fills your mouth with cool, thirst-quenching water. As you eat, you notice that Turner is looking at you, and there\'s a faint hint of a blush on his cheeks. "Here, this basket is fer you", he says. You take the wicker basket from him, and as your hand strokes across his fingers, he gives you a bashful smile.',
                        "outcomes": [
                            {
                                "parameter": "watervine_1",
                                "quantity": 3,
                                "change": "add"
                            },
                            {
                                "parameter": "turner_interest",
                                "quantity": 0,
                                "change": "set"
                            },
                            {
                                "parameter": "turner_connection",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "turner_genderswitch",
                "title": "Turner Likes Men",
                "subtitle": 'You start to look around Turner\'s garden, assuming that the enormous horse won\'t mind, but you notice something peculiar. He keeps looking over to you, and fidgeting. His hoof-fingered hands fumble with his hoe, and he keeps dropping it, or stumbling and crushing his flowers under his huge hooves. Sweat is dripping down his cheek, and he keeps huffing nervously. Clearly something is going on with him. </p>You walk up, and he actively backs off, stepping back and tripping, as he lands on his rear in the mud with a red blush across his face. "Oh shucks!" he says, in his deep country accent. "Ah\'m no good around...lady types." He looks away from you and scratches his head. "Feel free ta say no, but would ya mind if I...turn you into a guy like me?"',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "turner_connection",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "gender",
                        "value": 1,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "turnericong",
                "results": {
                    "grizzsex": {
                        "text": 'The huge horse sighs with relief as you agree, and smiles. "Ah was worried it would be rude ta ask! Should be a quick\'un. My pa\' always said I was a man\'s man!" You are wondering how he plans to achieve this, when he starts to pull his arm through his muddy overalls. They fall down, revealing the wide and hairy pecs on his powerful chest. With his strange, wide black fingers, he pushes the fabric down further, then kicks it away with his gigantic hooves. His naked body is revealed, sweat outlining his chiselled muscles, and a dizzying scent of pure masculinity rising from his crotch. </p>His balls are huge and soft-looking in their musky black sack, and his cock is a thick pillar of meat dappled with pink and black splotches. He reaches up with an enormous arm and pulls your head down between his legs. The heat rising from his crotch is like a radiator, and before you know it, you are licking and kissing along the side of his shaft. When your tongue strokes around the ring of flesh in the middle of his cock, he knickers and whinnies a little at the sensitivity. He is a stallion though, and you can\'t possibly open your mouth wide enough to actually give him a blowjob. Still, he\'s clearly enjoying the feeling, and you are too. Your crotch is hard and – wait - hard? </p>You reach down between your legs and blink as you feel a bulge beginning to form. Your pussy is closing up, and from it is emerging a sensitive, throbbing shaft. Small at first, but getting bigger. You start to stroke it while you kiss and nuzzle the horse\'s cock, and it feels great. A weight forms beneath it as your balls start to develop, though they are tiny by comparison to the farmer\'s huge sack. </p>Turner grins, his nervousness fading as your features start to become more masculine and rugged, your femininity fading away. He grabs his cock and starts to rub it between your breasts, which are flattened gradually by his touch, until he is just grinding his cock against a manly pair of pecs. He leans forward, presses his cock between your legs, and begins to grind his dick against yours. Your cock, fresh and new, is extra-sensitive, and soon the rubbing of his throbbing meat causes you to grunt and gasp, as you feel intense pleasure rush up through your shaft and spurt out all over his dick in a creamy, sticky mess of cum. </p>He whinnies loudly, gripping his shaft and lubricating it with your cum, as he strokes and pumps it. Before long, his gigantic tool throbs and spurts a practical torrent of hot white musky cum all over your face and chest. The ultra-masculine seed washes away the last traces of your female form, making your body thicken and shift into a full male. </p>He sighs and wipes the last of the cum onto your cheek, then stands back up. "Thanks! You sure look good as a man, feller! Come back any time, ah reckon I will like it a whole lot more in our next roll in the hay!"',
                        "outcomes": [
                            {
                                "parameter": "gender",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "turner_horsetf",
                "title": "Turner Likes You",
                "subtitle": 'You start poking around Turner\'s garden, since the enormous horse doesn\'t seem to really mind. While you look around, you can\'t help but notice him while he works, his seven foot tall body glistening with sweat in the sun, and his worn overalls barely containing his powerful form. He puts his hoe down and grabs a large log lying on the grass, which he lifts onto his shoulders with a mighty heave. As he does so, there is a ripping sound, and you watch as the crotch of his overalls tears open. </p>A pair of enormous, sweat-glistening black balls flops out, along with the farmer\'s massive horse cock. It\'s long, and thick, and the flesh is dappled pink and black, with a flared head. His ears wiggle in the air as his long face turns red with a blush. While his arms are occupied, do you want to move in for a taste?',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "turner_connection",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "species",
                        "value": 10,
                        "comparison": "nequal" //default greater
                    },
                    {
                        "parameter": "gender",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "turnericong",
                "results": {
                    "grizzsex": {
                        "text": 'You take a few quick steps towards Turner, then get on your knees and stroke your hands along the sides of his enormous exposed cock. He whinnies with surprise, but then a grin spreads along his long equine face. "Sure is neighbourly of ya to help a fella\' out!" he says, and his cock bounces in your grip as he flexes it. His shaft is gigantic, as befitting a stallion, so you can\'t fit it in your mouth, but stroking the firm flesh and breathing in his ultra-masculine scent is getting you hard all on its own. </p>You start to kiss the flared head of his shaft as you stroke and squeeze along the sides of his mottled cock, having to stretch your arm forward and back to reach to the base of his heavy meat. He whinnies and snorts with pleasure, more than he was before. It is then that you realise that some of those whinnies are coming from you! You open your eyes and see that your vision seems to have spread wider, and you watch as a bulge grows out in your vision. You feel your nose and mouth growing forward, and you can see your large flaring nostrils steam into the air as a horse\'s muzzle grows on your head. Hair flops down into your eyes as you feel yourself growing a messy, shaggy mane. </p>Your hands on Turner\'s shaft are getting larger, and your fingers feel stiff and hard. The skin turns hard and black, while your fingers fuse together, the first two and last two on each hand melting into one to leave you with just two thick, powerful black fingers and a thumb on each hand. Your knees sink deeper into the mud as you feel your body growing taller and heavier. Muscle bulges and swells under your skin, which itself is growing thick and shaggy horse hide that emits the same manly scent that Turner\'s hard-working body does. You feel your feet cramping up, as they grow wide and heavy, the flesh turning stiff and hard. Your feet are reshaping, becoming powerful and mighty hooves, just like Turner\'s. </p>It is then that you feel a sudden, potent rush of heat and energy pulsing through you. Your mind feels fuzzy and slow from the assault of testosterone in your veins, but you don\'t really care, because your cock is harder, and longer, than it has ever been before. It\'s inflating like a balloon betweem your legs, above some dark, musky balls that are so heavy and hot that it is driving you crazy. You pump and stroke yourself, loving the feeling of your sensitive middle ring, and the flared, flat tip of your new stallion cock. </p>Turner chuckles. "Ah reckon yer the spittin\' image of my cuz Turnover! Ah guess that makes us kinfolk now!" he says. The pleasure you\'re feeling drives you to open your muzzle as wide as you can, and push your mouth forward onto Turner\'s shaft. His bulging meat fills your mouth and shoves into your throat, and his whinny is so loud it can probably be heard all the way into Dormaus. </p>"Tarnation! Turnover doesn\'t suck half as well as you do, cuz!" he pants. You slide your muzzle forwards and back on Turner\'s cock, while he submits to his lust and humps and pounds your face. The pleasure of a blowjob is too much for the farm horse, and he soon grips your head and shudders as he unloads a flood of cum. It rushes into your throat, a tide of heat that you eagerly gulp down, wanting as much of his powerful manly seed as you can get. Your own cock hardens in your grip, and your body pulses with overwhelming pleasure as you unload your own flood of cum, a messy fountain of jizz that soaks Turner\'s hooves in sticky whiteness. </p>When you stand up, you are the same height as the massive stallion, and in fact, you look like you could even be brothers. He gives you a slap on the back before you go. "Come back any time, you\'re family now!" he says.',
                        "descriptionchange": "This adventurer is a tall and muscular horse with a slightly simple, happy expression.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 10,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "farmhouse_random",
                "title": "Explore the grounds",
                "subtitle": "The farmhouse and surrounding grounds are large, and there are a number of paddocks and animal pens.",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "Turners Dad": {
                        "text": 'You see a huge horseman shape as you approach the farm today, and you assume it is Turner, as usual. You are mistaken, however. You thought that Turner was tall and strong, but this horse dwarfs him in both aspects. He\'s easily a foot taller, and his muscles are rippling under black horse hide. He\'s wearing a tunic and breeches, and he turns to greet you as you approach. His face is rugged and hairy, with a stern expression. His hide is streaked with grey, and he\'s clearly much older than Turner, not that his age seems to have reduced his incredible strength. "If you\'ve come to see my boy, he\'s busy right now", the huge stallion says in a gruff and dominant voice. His tone is enough to stop you in your tracks, and gives you a bizarre feeling of intense fatherly discipline and power. It makes you want to clean your room and do as you\'re told. The old stallion brushes a hoof-hand through his short dark grey hair, and your vision slowly lowers down his bulging muscles towards his legs. You blink with surprise as you see Turner, bent over a hay bale, his ass pressed to his dad\'s crotch as the old stallion rams his cock in him over and over. The commanding presence of the older horse was so strong that you didn\'t even notice until just now. The black stallion turns back to his son and grips his back in his powerful hands as he carries on thrusting and pounding, ramming his cock deep into the younger stallion\'s rear. Turner whinnies and slams his foot against the ground as he cums, his huge cock soaking the hay bale in sticky seed. The stern black stallion, however, just grunts once, powerfully, and his chest rises and falls quickly as he fills Turner\'s ass with horse seed in thick, hot ropes. He pulls out, and adjusts his pants to put away a cock so ludicrously huge that you are certain it would literally split you in half. "Work harder next time, boy. No more slacking off, or next time I spank your ass red before I fuck it", he says, before stomping off into the fields on hooves big enough to cover your entire torso. Turner pants and blushes as he stands up, before pulling his pants up. If you were wondering why such a gigantic stallion is so awkward and shy, you get the feeling you know part of it now.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 7,
                                "change": "add"
                            }
                        ]
                    },
                    "Mikhails Dog": {
                        "text": 'There is a loud whistle behind the farmhouse, and you walk around it to see what is causing the sound. A familiar old german shepherd is leaning against the fence, shouting commands to a frazzled-looking human that is trying to corral some unruly sheep. Mikhail turns and grins at you through his shaggy, beard-like muzzle fur. "Heya son. Just on a visit. Me and Turner\'s old man have a lot in common, and I help out around here every now and then." he says. The human in the field stumbles, and Mikhail shouts loudly. "No, you fool! Left! Get behind them!" he barks. The human nods, and starts to move quicker and more efficiently under Mikhail\'s orders. The more he obeys, the better he gets, and after a while he even starts to bound around on all fours for more speed. His hair is getting shaggier, partially covering his eyes, but it doesn\'t affect his work, because his nose is turning wet, black and extra-sensitive. He struggles free of his clothing, finding it easier to run around naked. A shaggy tail grows from his rear, and his hands and feet shift into clawed canine paws for better movement in the fields. Mikhail whistles, and the former human runs over, his skin growing thick fur and his new muzzle open in a pant. The new feral dog wags his tail and nuzzles Mikhail\'s feet, and the old anthro dog leans down to close a collar around his neck. Mikhail winks at you, and leads the feral dog away on a lead for more farm work.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 7,
                                "change": "add"
                            }
                        ]
                    },
                    "Horse Milk": {
                        "text": 'You hear a panting and moaning from a barn adjacent to Turner\'s farmhouse. The door is ajar, and you walk over and take a peek inside. Within is a surprising sight. Turner, the huge stallion man, is suspended in some sort of harness. He\'s raised off the ground, his legs spread and tied to poles, and his arms bound above his head. His gigantic cock is inside some sort of strange machine, attached to a hose, and at the other end of it is Flute the fox, monitoring a valve which regularly spurts steaming warm white goo into bottles. "Just a few dozen more, my equine friend!", says Flute. Turner blushes and shudders, struggling in the harness as he lets out a loud whinny, and bucks into the pumping machine. Another gush of cum erupts from the end into a bottle, and Flute rubs his hands with glee. You sort of hope you get a chance to buy one of these bottles of \'horse milk\' later!',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 7,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "phantommare_null",
                "title": "Make Horse Milk",
                "subtitle": 'Turner\'s farm has a breeding tool for "milking" male stallions for ingredients to make the popular horse milk drink.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 10,
                        "comparison": "equal" //default greater
                    },{
                        "parameter": "intelligence",
                        "value": 0,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "dumb_potion",
                "results": {
                    "grizzsex": {
                        "text": "Since you are currently a horse, you are curious to try some of the experiences that natural horses have. One of those, you have learned, is taking a ride on the \"phantom mare\". You find it in a back room of Turner\'s barn, and at first you are not particularly impressed.</p>The object is a sort of large upholstered bench, standing on four spreadeagled metal legs. In one end is a very large entrance, looking a little bit like a fleshlight, but big enough to handle even the enormous rods of horny stallions. You get close and sniff it, noticing the very obvious smell of many sweaty horny horses that have used this thing before you. You drop your pants, and stroke your thick, long horse cock for a while, getting it slowly hard before pressing the end into the tip of the object. As it slides in, you snort and your ears twitch with surprise. The inside of it feels good. Really good. It\'s ribbed, and textured, and when you slide your sensitive, thick cockmeat in and out it feels fucking amazing.</p>You lean over it, resting your muscular chest atop the cushioned part, before thrusting in deeper. You whinny, overcome with pleasure, and you start to thrust faster. You pull your cock out, over a foot of it, then thrust in again, feeling the wonderful tightness and texture rubbing over you, before doing it again and again. Something inside squeezes and bounces off your medial ring, and a spongy wall at the end squishes against your flat cockhead. You sweat and pant, utterly addicted to this pleasure. Your brain feels foggy and slow, as fucking the phantom mare becomes all you can think about. You drool a little, and grunt and snort, losing yourself completely in the feeling.</p>Finally, you feel pleasure building up all through your body. Your skin is hot and tingly, and your balls feel ready to explode. You thrust in once more, and neigh with all your might as you unload what feels like gallons of cum. It rushes through your long cock and erupts into the depths of the phantom mare, filling up its reservoirs. As your jizz flows out of you, you feel like your brain is emptying out too. Your thoughts get slower and dumber, and you snort and rut like a beast, as you slowly pull free of the toy and stumble away.",
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "phantommare",
                "title": "Make Horse Milk",
                "subtitle": 'Turner\'s farm has a breeding tool for "milking" male stallions for ingredients to make the popular horse milk drink.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 10,
                        "comparison": "equal" //default greater
                    },{
                        "parameter": "intelligence",
                        "value": 1,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "dumb_potion",
                "results": {
                    "grizzsex": {
                        "text": "Since you are currently a horse, you are curious to try some of the experiences that natural horses have. One of those, you have learned, is taking a ride on the \"phantom mare\". You find it in a back room of Turner\'s barn, and at first you are not particularly impressed.</p>The object is a sort of large upholstered bench, standing on four spreadeagled metal legs. In one end is a very large entrance, looking a little bit like a fleshlight, but big enough to handle even the enormous rods of horny stallions. You get close and sniff it, noticing the very obvious smell of many sweaty horny horses that have used this thing before you. You drop your pants, and stroke your thick, long horse cock for a while, getting it slowly hard before pressing the end into the tip of the object. As it slides in, you snort and your ears twitch with surprise. The inside of it feels good. Really good. It\'s ribbed, and textured, and when you slide your sensitive, thick cockmeat in and out it feels fucking amazing.</p>You lean over it, resting your muscular chest atop the cushioned part, before thrusting in deeper. You whinny, overcome with pleasure, and you start to thrust faster. You pull your cock out, over a foot of it, then thrust in again, feeling the wonderful tightness and texture rubbing over you, before doing it again and again. Something inside squeezes and bounces off your medial ring, and a spongy wall at the end squishes against your flat cockhead. You sweat and pant, utterly addicted to this pleasure. Your brain feels foggy and slow, as fucking the phantom mare becomes all you can think about. You drool a little, and grunt and snort, losing yourself completely in the feeling.</p>Finally, you feel pleasure building up all through your body. Your skin is hot and tingly, and your balls feel ready to explode. You thrust in once more, and neigh with all your might as you unload what feels like gallons of cum. It rushes through your long cock and erupts into the depths of the phantom mare, filling up its reservoirs. As your jizz flows out of you, you feel like your brain is emptying out too. Your thoughts get slower and dumber, and you snort and rut like a beast, as you slowly pull free of the toy and stumble away.",
                        "outcomes": [
                            {
                                "parameter": "intelligence",
                                "quantity": 1,
                                "change": "sub"
                            }
                        ]
                    }
                }
            },{
                "id": "phantommare2",
                "title": "Make Horse Milk",
                "subtitle": 'Turner\'s farm has a breeding tool for "milking" male stallions for ingredients to make the popular horse milk drink.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 10,
                        "comparison": "equal" //default greater
                    },{
                        "parameter": "intelligence",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "dumb_potion",
                "results": {
                    "grizzsex": {
                        "text": "You grunt and snort, moving eagerly towards the back of the barn where the phantom mare is waiting. Your mane is scruffy and askew, and your clothing is rumpled and messy. The more you have used it, the harder it has been to think about anything but the incredible feeling of that rubbery sheath squeezing around your thick, fat horse cock. Drool drips from your lips as you go to open the door where it waits, but you are stopped as a large rough hand grabs your arm.</p>You look to see Turner, who is giving you a concerned expression. \"Aww shucks cuz, you know you really shouldn't use that thing too much. Give yerself a chance to fill back up, y'know?\", he says. You blink dumbly, as it takes you a moment to sort out the words he's saying. Your brain feels shrunken and tight and slow, like your head is full of cotton wool.</p>You grunt, and shove him hard away from you. He stumbles and falls back, allowing you to slam the door open and quickly run inside. The stink of cum and sweat washes over you, making your huge fat horse cock rise to full height.</p>You race forward, and grab the rubbery object with both hands. Then, unable to wait, you slam your cock forward into that tight, smooth opening. The feeling of your shaft slipping up into that rubbery body is everything you ever wanted. You start to slam and thrust, bucking against it like a wild beast. Your eyes roll up in the back of your head, your cockhead rams against the deepest interior of the phantom mare, and you whinny loudly, and madly.</p>As your medial ring rubs and bounces against the ridges inside the sheath, you feel your orgasm bubbling up from deep inside you. Heat and pleasure filling you up from the ends of your hooves to the tips of your pointed ears. Your hands gripping the mare slip and you fall forward, as your fists clench and start to stiffen, becoming thick, round black hooves. Your body barrels out, spine and bones shifting and adjusting to being quadrupedal. As you fall forward, and your front hooves slam against the ground, your body is rocked by your sudden, exploding orgasm.</p>The lust and bliss flows through you, your mind whites out as all thoughts stop in that brief, glorious moment of lust and pleasure. Only this time, your thoughts don't start up again. Cum explodes and rushes out from your cock, a thick gushing fountain of hot stinking horse cum, but you don't stop fucking and thrusting. Your hooves tap and your ears twitch as you fuck and buck against the rubbery device over and over.</p>You don't notice when the door behind you opens, and Turner walks in. He strokes his hand over your flank, and looks at your eyes as they turn wide, brown and mindless. When he tries to gently pull you out from the phantom mare, you snort and ram against him, but he eventually manages to get your cock to slip out, dripping and shiny and wet with cum. His fingers squeeze over your shaft, and you calm down as he strokes it slowly up and down.</p>He guides you gently forward on all fours, walking you through the barn, as you mindlessly soak in the pleasure of your cock being touched. You are led into a side-barn, where you can smell many other stallions, all sweaty and horny just like you. One stall is open and unoccupied, and he pushes you gently into it. He picks up a rubbery pump from the ground, and pulls it down slowly over your cock, and you whinny happily as it starts to slide up and down on your shaft with an enjoyable sucking feeling. Some leather straps are tightened around your hooves, and Turner pulls some sort of leather mask over your head, two large flaps blocking out your vision and keeping you calm and happy. His hand pushes your head down against a trough full of oats, and you chew happily and mindlessly.",
                        "trapped_desc": "You are just a brainless milking horse now, who will stay here happily for as long as his cock gets pumped and stroked.",
                        "trapped": "You are just a brainless milking horse now, who will stay here happily for as long as his cock gets pumped and stroked.",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "turner_piss",
                "title": "Turner's Piss",
                "subtitle": "Turner is relieving himself and you can't stop thinking about it.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "pisscurse",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "turnericon",
                "results": {
                    "grizzpay": {
                        "text": 'You hear a loud splashing noise, like a hose, and faintly detect a sharp and acrid smell in the air. You look around until you notice Turner standing against a tree, with his overalls open in the front. One of his hands is leaning on the bark, and the other is holding his enormous cock, which is unloading a forceful stream of steaming yellow piss all over the tree\'s roots.</p>You try to resist, but the curse inside you starts to hum and tingle, and you find yourself walking forward quickly, before throwing yourself against the tree and falling onto your ass, your face looking straight into the flow. Turner whinnies in surprise, but he can\'t stop mid-stream, and his urine blasts against your face and mouth. The force of it is like a water cannon, and your head is pushed back against the tree. Your mouth opens as his bitter urine flows over your tongue and spills down your front. Your body is soaked, and by the time he stops, you are left sitting in a warm puddle of horse piss.',
                        "outcomes": [
                        ]
                    }
                }
            }
        ],
        "npcs": [
            {
                "id": "turner",
                "name": "Turner",
                "description": "Turner is an enormous clydesdale stallion, wearing a mud-splattered pair of overalls that barely contain his huge hairy muscles. He is chewing on a piece of straw.",
                "icon": "turnericon",
                "dialogue": [
                    {
                        "input": "What is your name?",
                        "output": '"\'ello there. Don\'t often see y\'all folks from the town here. Name\'s Turner."'
                    },
                    {
                        "input": 'What is your job?',
                        "output": '"I\'m a farmer, born and bred. Me an\' my kinfolk have owned Morgan farm for generations."'
                    },
                    {
                        "input": 'See you later.',
                        "output": '"Don\'t be a stranger now!"'
                    },
                    {
                        "input": 'How is your cock?',
                        "output": 'The stallion looks away with embarrassment, but his tail flicks from side to side, and you think you see a hint of a blush on his long face. "Well ah reckon it\'s doin\' fine, thanks for askin\'."'
                    },
                    {
                        "input": 'How are your paws?',
                        "output": 'The big horse whinnies with amusement. "Ah guess you ain\'t met a horse before, but I ain\'t got me no paws!"'
                    },
                    {
                        "input": 'How are your hooves?',
                        "output": 'Turner lifts one of his powerful legs, revealing his wide and heavy hoof that is squelching in the mud. The fluffy fur around his hoof is splattered with dirt. "Thanks fer askin\', hoof health is sure important for a big guy like me. It\'s all sound down there!"'
                    }
                ]
            }
        ]
    }