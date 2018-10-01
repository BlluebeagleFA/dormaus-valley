var area = {
        "title": "farmpath",
        "header": "Farm Path",
        "nomap": "You don't know your way around this area yet. You'll have to navigate on foot.",
        "subheader": 'This well-worn muddy path is tracked deeply with the ruts from passing wagon wheels. To the sides, fenced-off pastures hold horses and cows, idly and calmly chewing on the grass.',
        "events": [
            {
                "id": "farm_north",
                "title": "Travel North to Dormaus",
                "subtitle": "The village of Dormaus is a short hike to the north.",
                "type": "statcheck", //or random
                "stat": "might",
                "difficulty": 5,
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You start your hike north, along the muddy road. The weather stays nice and before long, the cheerful little houses of Dormaus appear on the horizon. You approach the entrance gate.",
                        "area": "dormaus_entrance",
                        "outcomes": []
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": "You start your hike north, walking along the muddy and rough path. Before long you feel tired and achey, yet Dormaus Village feels no closer to you.",
                        "outcomes": [{
                            "parameter": "pain",
                            "quantity": 1,
                            "max": 1,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "farmpath_s",
                "title": "Travel South to Turner's House",
                "subtitle": "It will only take a few minutes to get to the farmhouse you can see from here",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You make your way south, slowly approaching the farm and its whitewashed farmhouse.",
                        "area": "farmhouse",
                        "outcomes": []
                    }
                }
            },{
                "id": "become_mare",
                "title": "Enter the stallion's paddock",
                "subtitle": 'Beyond a wooden fence lies a large grassy paddock, in which a number of mares are grazing. Mares, and one enormous, jet-black stallion, who is currently mounting one mare - one who looks suspiciously humanoid, though less so with every thrust. Do you dare get closer?',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "submissiveness",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },{
                        "parameter": "stallion",
                        "value": 1,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "subicon",
                "results": {
                    "grizzpay": {
                        "text": 'Nervously, you climb over the fence, and enter the stallion\'s territory. His pasture. You walk hesitantly over to him, staring at him as he thrusts and fucks his mare. The horse beneath him whinnies in pleasure, her mind succumbing completely to equine pleasures. You see her human, intelligent eyes turn to the deep brown of a simple horse, as the stallion huffs and fills her with his fertile seed. He then pulls free, landing on his four enormous hooves, and the mare trots away obediently.</p>Then the stallion turns to you. He lunges forward, threateningly. His hooves dig against the ground, and his hot breath washes over you. He is challenging you. Making sure you know you aren\'t welcome here. Shaking and nervous, you get on your knees and bow to him, hoping to show your submissiveness. You smell his rank, manly smell as he walks closer, and his head leans down to poke at you. You tremble and remain still, well aware that one of his hooves could easily strike you down. He walks even closer, your body under his now, and you look up to see the swaying, glistening orbs of his enormous smelly horse balls. Sweat drips from them onto your face. The stink of fertile, primal equine power fills your lungs. Your mind crumbles before it, your submissive desires overflowing you. You start to drool with need, desperate to serve him. Once you are fully prepared, he walks around, his gigantic cock swaying between his legs. He walks behind you, and rests that enormous equine cock on your back. It oozes fluids down your body, and you start to try to get up. Your body is tingly and strange, though. You feel hot, and needy. Between your legs, a powerful heat is growing, a primal urge to be filled and to be mounted.</p>Your hands and feet are stiff and hard in the grass. You can\'t push yourself up on two legs anymore, as your body is shifting and twisting into a new stance. Your fingers and toes harden into tough black hooves, thickening and growing as they dig into the soil. You feel your body growing, getting bigger and wider as muscle packs on, under a growing hide of soft horsehair. Your neck lengthens and widens with muscle, and your rear thickens out massively, growing wider and heavier before your tailbone grows out and develops a long, twitching horsehair tail. You find yourself instinctively flicking it, spreading the scent of your lust and need. Your eyes start to move apart, making room for your growing nose and mouth, which are shifting and cracking as they become a wide horse\'s snout. You blink, seeing the pasture either side of you now, and you feel your ears flick and twitch as they become pointed, sensitive horse ears.</p>You have no time to experience your new body though, because your mate has found what he has been waiting for. Between your hind legs, hot and wet and needy, is now the large and dark pussy of a fertile mare. You whinny as he rears up and presses his heavy, musky body down onto you. His hooves are either side of your flanks, and his gigantic cock is sliding between your cheeks. It searches out its prize, and then plunges in deep, with one enormous, powerful thrust.</p>It is like a spear striking directly through your mind, crushing and shattering any willpower or desire you had. That gigantic cock is almost as long as your entire body used to be, and your insides are hot and wet as it slides in, rams deep, and then plunges in and out. The white-hot pleasure is too much to bear. Your mate is mounting you. You are his mare. You must bear his foals and serve him. You want more, you crave it. Each and every thrust would be enough to send you into throes of orgasmic bliss before, and now they are coming over and over. His pendulous balls sway, and churn with cum, before they unleash their gift. Hot, thick fountains of cum explode deep inside you. The heat fills your belly, and at the same time as your mate impregnates you, your eyes turn to a simple brown, and you accept your fate. </p>You are a simple breeding mare. Your mind is dull and empty. When your mate pulls out, you simply flick your tail and begin to graze on the fresh green grass below you.',
                        "trapped_desc": "There is a healthy, contented mare grazing here.",
                        "trapped": 'You are a simple breeding mare. You have no desire to leave your paddock, or do anything but graze and be mounted by your handsome stallion lover.',
                        "outcomes": []
                    }
                }
            },{
                "id": "become_stallion",
                "title": "Confront the Stallion",
                "subtitle": 'Beyond a wooden fence lies a large grassy paddock, in which a number of mares are grazing. Mares, and one enormous, jet-black stallion, who is defending them fiercely. That horse looks like trouble. You had better be strong if you want to challenge him.',
                "type": "statcheck", //or random
                "stat": "might",
                "difficulty": 20,
                "requirements": [
                    {
                        "parameter": "dominance",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },{
                        "parameter": "stallion",
                        "value": 1,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "domicon",
                "results": {
                    "success": {
                        "text": "You hurdle over the fence, and confidently stride towards the horses. The mares look up from the grass and sniff the air curiously as you approach. Then the stallion turns, and his nostrils flare as he sees you. He strides forward, his hooves leaving deep gouges in the soil as he gets closer. He strikes one hoof against the ground, challenging you to back down and submit.</p>You stand your ground, and stare deep into his dark eyes. The stallion snorts, and lowers his head, before charging at you. You turn at the last moment, avoiding his lunge. He tries to turn around, but his huge four legs are harder to control than your body is. You twist and grab, sliding your arm up behind his huge neck, then using his momentum against him as you pull and throw. He stumbles and sways, but manages to catch himself and clamber back onto all fours.</p>He\'s more wary now, and nervous. He pauses, lowers, and charges again. This time you duck aside, and grab onto his mane as he passes, before leaping up on top of him. He bucks and leaps, trying to throw you off, but you cling to him defiantly. Bit by bit, his struggling and bucking starts to tire him out. You feel his huge sweaty, heavy body panting and heaving below you. The longer you hold on, the more his sweat and exertion seems to soak into your skin. You feel your skin starting to darken, while your muscles ache and pound with heat and strength. Your arms bulge as your biceps begin to inflate, growing huge and round, almost like watermelons. Your shoulders creak and stretch, widening with muscle and power. Your legs, either side of the stallion\'s body, grow longer and thicker, the muscles in them becoming as hard and thick as tree trunks.</p>You snort, and shudder, your blood pumping with strange heat. It\'s almost like you are draining the very power and masculinity from this virile beast underneath you. Your feet start to darken and harden, the flesh becoming tough and firm like rough stone. Your toes curl up and toughen, and your feet reshape, becoming longer and thinner, while your toes stretch and reshape themselves into large, round horse\'s hooves. Your chest feels flat and hard. You stroke your fingers down it, feeling firm, flat muscle and rugged well-defined pecs. Your fingers are black and rough too, almost hooflike. You feel fur beginning to form on your dark skin, which is thick and tough as horsehide. Black hair grows down from your head, long and thick and lustrous, while your neck bulges with muscle and stretches as it grows. Your face pushes forward too, becoming the long sloped face of a mighty stallion. You realise that the thick, musky barnyard stink of the stallion below you seems to be closer, and spreading all around you. You lift your armpit, and sniff yourself, then grin as you realise that the sweat and musk oozing from your body is the very stolen scent of the horse.</p>The black stallion slows and stops, clearly exhausted. You hop down from him, and he sniffs your scent, his horse mind confused and afraid of the smell of powerful, dominant horse he is detecting. You grunt and shudder as you feel something bulging in your pants. You struggle to lower them, revealing a massive, glistening black cock. It is growing even as you watch, stretching down longer and longer as it reaches past your knees. The gleaming black skin is splotched with pink, and around the middle is a sensitive fleshy ring. You reach down and touch the pair of huge black sweaty horse balls hanging below it, and grin. You walk around behind the horse, pausing to notice that your new equipment is a perfect copy of his...except perhaps slightly bigger. His tail rises instinctively as you take hold of his huge, muscular rump. You lift your enormous cock, and press your flared head to his large black donut-like tailhole. You slide in easily, and he trembles and whinnies, clearly having never submitted to a superior stallion before. You push in more, feeling the incredible pleasure of being able to just keep pushing deeper and deeper with an absurd two-foot-long cock. Finally, you hilt yourself inside him, and begin to pump and thrust. In, and out, your massive cock pounds the formerly proud beast, showing him who is really in charge. You fuck him right in front of his mares, putting him in his place until finally, with an explosive rush of incredible pleasure, you unload bucketloads of thick, hot horse cum deep inside him.</p>When you pull out, leaving his tailhole dripping and wet, he lowers his head and quietly follows behind you. Now nothing but an obedient pet.",
                        "descriptionchange": "This adventurer is an enormous muscular black horse, over seven feet tall with gleaming black fur that drips with sweat and a musky, dominant aroma.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 10,
                                "change": "set"
                            },{
                                "parameter": "stallion",
                                "quantity": 1,
                                "change": "add"
                            },{
                                "parameter": "gender",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    },
                    "fail": {
                        "text": "You hurdle over the fence, and confidently stride towards the horses. The mares look up from the grass and sniff the air curiously as you approach. Then the stallion turns, and his nostrils flare as he sees you. He strides forward, his hooves leaving deep gouges in the soil as he gets closer. He strikes one hoof against the ground, challenging you to back down and submit.</p>You stand your ground, and stare deep into his dark eyes. The stallion snorts, and lowers his head, before charging at you. You turn at the last moment, avoiding his lunge. He tries to turn around, but his huge four legs are harder to control than your body is. You twist and grab, sliding your arm up behind his huge neck, then using his momentum against him as you pull and throw. He stumbles and sways, but manages to catch himself and clamber back onto all fours. You don\'t react in time, and one of his hooves strikes out, knocking you painfully to your side </p>As you struggle to stand, he quickly lunges over you. His powerful body casts a shadow over you, and you look up to see the swaying, glistening orbs of his enormous smelly horse balls. Sweat drips from them onto your face. The stink of fertile, primal equine power fills your lungs. Your mind struggles to fight against it, but you know you have been beaten. Your dominance seems to twist and turn, melting away under the stallion\'s power. You start to drool with need, desperate to serve him. Once you are fully prepared, he walks around, his gigantic cock swaying between his legs. He walks behind you, and rests that enormous equine cock on your back. It oozes fluids down your body, and you start to try to get up. Your body is tingly and strange, though. You feel hot, and needy. Between your legs, a powerful heat is growing, a primal urge to be filled and to be mounted.</p>Your hands and feet are stiff and hard in the grass. You can\'t push yourself up on two legs anymore, as your body is shifting and twisting into a new stance. Your fingers and toes harden into tough black hooves, thickening and growing as they dig into the soil. You feel your body growing, getting bigger and wider as muscle packs on, under a growing hide of soft horsehair. Your neck lengthens and widens with muscle, and your rear thickens out massively, growing wider and heavier before your tailbone grows out and develops a long, twitching horsehair tail. You find yourself instinctively flicking it, spreading the scent of your lust and need. Your eyes start to move apart, making room for your growing nose and mouth, which are shifting and cracking as they become a wide horse\'s snout. You blink, seeing the pasture either side of you now, and you feel your ears flick and twitch as they become pointed, sensitive horse ears.</p>You have no time to experience your new body though, because your mate has found what he has been waiting for. Between your hind legs, hot and wet and needy, is now the large and dark pussy of a fertile mare. You whinny as he rears up and presses his heavy, musky body down onto you. His hooves are either side of your flanks, and his gigantic cock is sliding between your cheeks. It searches out its prize, and then plunges in deep, with one enormous, powerful thrust.</p>It is like a spear striking directly through your mind, crushing and shattering any willpower or desire you had. That gigantic cock is almost as long as your entire body used to be, and your insides are hot and wet as it slides in, rams deep, and then plunges in and out. The white-hot pleasure is too much to bear. Your mate is mounting you. You are his mare. You must bear his foals and serve him. You want more, you crave it. Each and every thrust would be enough to send you into throes of orgasmic bliss before, and now they are coming over and over. His pendulous balls sway, and churn with cum, before they unleash their gift. Hot, thick fountains of cum explode deep inside you. The heat fills your belly, and at the same time as your mate impregnates you, your eyes turn to a simple brown, and you accept your fate. </p>You are a simple breeding mare. Your mind is dull and empty. When your mate pulls out, you simply flick your tail and begin to graze on the fresh green grass below you.",
                        "trapped_desc": "There is a healthy, contented mare grazing here.",
                        "trapped": 'You are a simple breeding mare. You have no desire to leave your paddock, or do anything but graze and be mounted by your handsome stallion lover.',
                        "outcomes": []
                    }
                }
            },{
                "id": "birth",
                "title": "Breed",
                "subtitle": "You are a mare, you have a stallion. Do what's natural.",
                "trapped": true,
                "type": "random",
                "requirements": [
                    {
                        "parameter": "horse_son",
                        "value": 1,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "horseson",
                "results": {
                    "footstool_1": {
                        "text": "Your life in the pasture is a very simple one. You eat grass, enjoy the sun, and most importantly, get filled by your stallion. You are only one of his many mares, so the anticipation of the days when he will come up behind you, sniff your flaring pussy, and mount you, are incredibly exciting.</p>It\'s one of those days when the farmer discovers you for the first time. Your stallion is up on your back, his powerful body weighing down on you, and his hooves aside your chest. His hot breath is huffing on your neck as he slams his enormous horse cock in and out of you.</p>The farmer is a large hairy human, who counts the mares and notices you are one extra. He stays well back, watching as the stallion whinnies and unloads his hot, thick fertile cum into you. Once he pulls off and walks away, he comes up and strokes your neck. He notices your belly, which is rounder and feels heavy. He reaches down and strokes it, feeling a faint kick.</p>Many months later, your belly is heavier than ever, growing large with the foal inside you. You are leaning down, eating grass, when you feel an intense pressure and need inside you. You spread your legs as water gushes from under your tail. The farmer comes over, patting and comforting you. You push, feeling the foal inside you moving, pushing out. The farmer reaches his hands carefully into your pussy, and takes hold of your foal, guiding it out. You push more, panting with exertion, but finally the farmer pulls free a wet, small baby horse. He places the foal down, who stands with shaking, confused legs. You look over to see your son, a handsome black colt, just like his father. He nuzzles between your legs, and starts to suck at your teats. You feel intensely proud as he drinks your milk, hoping he will grow up just as strong as your stallion is.",
                        "outcomes": [
                            {
                                "parameter": "horse_son",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "farmpath_random",
                "title": "Walk along the path",
                "subtitle": "The road is rough and muddy, and there's a long way to go before you get anywhere",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "New Mare": {
                        "text": 'You hear a whinnying sound in the fields, and rest your hand on the fence to look over into the grassy pasture. There is a farm worker, in some sort of distress, sitting next to a massive and muscular black feral stallion. It looks like the farmhand was cleaning the horse\'s hoof. As you watch, he falls to all fours and tries to crawl away from the stallion. His body begins to bulge and swell, and he yells and shouts for help, but his voice turns to a loud, horsey neigh. His neck grows longer and thicker, and his body tears through his clothes as his hands and feet become heavy hooves that sink into the grass. At his rear, a long hairy horse tail forms, but then lifts up into the air. You can see the man\'s genitals shrinking and turning black, as they recede into his flesh and leave behind a wet, needy mare\'s pussy. The mighty black stallion rears up, and he mounts the transforming human, fucking and claiming his new mare while she whinnies and struggles. Watching the mighty beast claim his prize is confusingly erotic, and you have your leg over the fence, about to run over and beg to be a mare too, before you get a hold of yourself and move on.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 7,
                                "change": "add"
                            }
                        ]
                    },
                    "New Udder": {
                        "text": 'You pass by an adventurer on the road, who is drinking milk from a glass bottle. He waves at you as you walk by. "The milk from that farm is incredible!" he says. You notice his pants are bulging with a huge bump. As you watch, they split open, revealing that his cock is throbbing and oozing white fluid, above a pair of balls that are massively swollen. They bulge out bigger and bigger, and then four soft and tender bumps appear on the surface. Each new teat oozes milk, and the adventurer continues walking along, not seeming to notice the heavy, swollen udder between his legs.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 7,
                                "change": "add"
                            }
                        ]
                    },
                    "Ignorance is Bliss": {
                        "text": 'There is an adventuring party blocking the road as you walk up. You see a male and female human talking to their companion, an enormous horse-man with a dazed, happy expression. The woman, their leader, is shouting. "How many times did you fuck that horse farmer, Myzwizrion? You are supposed to be our sorceror!" she shouts. The huge horse man scratches his head and snorts. "Miz...Miz...wiz....me just like him. Like big horsey" he says, in a slow and heavy voice. The humans facepalm, and sigh. The male warrior pats his friend\'s side, and the horse snorts happily. "Do you just want to be our pack horse from now on, buddy?" he says, and the horse nods happily. They attach the former wizard to their cart with a backpack-like harness, and he pulls it happily along. Sometimes intelligence can be a burden!',
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