var area = {
        "title": "makarna_training",
        "header": "Makarna Training Yard",
        "nomap": "You don't know your way around this area yet. You'll have to navigate on foot.",
        "subheader": 'The inner wall juts out here, forming a stout reinforced guard tower, one of several that line the thick stone walls in a circle all around the inner city. At its base, land has been cleared and flattened to create a training yard, in which recruits for the Makarna Militia are drilled at all hours of the day in the ways of combat and defense. Up against the walls are straw archery targets, and heavily-battered wooden dummies stand at the other end of the yard.',
        "events": [
            {
                "id": "leavemakarna",
                "title": "Go to the Patron's Lounge",
                "subtitle": "A mysterious door here leads to the patrons-only area.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You open the door, and walk through into a mysterious ballroom.",
                        "area": "patrons",
                        "outcomes": []
                    }
                }
            },{
                "id": "gotomarket",
                "title": "Head towards the market",
                "subtitle": "The market street is a rush of busy wanderers and loud salespeople.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You leave the training yard and move towards the marketplace.",
                        "area": "makarna_silk_market",
                        "outcomes": []
                    }
                }
            },{
                "id": "rufohtml",
                "title": "Rufo",
                "subtitle": "There is one guard in the training yard who looks familiar. A rugged and scarred body, that stern pose and mature face. It's Rufo, the lion who helped you escape from the king's harem.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "rufo",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "html": "data/active/Rufo.html",
                        "outcomes": [
                            {
                                "parameter": "rufo_connection",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "tiger",
                "title": "Tiger Training",
                "subtitle": "\"No, no no!\", you hear someone shout. You walk into the training barracks to see an exasperated sergeant with his face in his palm, and a sheepish-looking lion recruit with his hands held out like claws, in what you can only assume is a bad impression of a wild beast. A line of other recruits are standing awkwardly behind the sergeant, who composes himself and starts to snarl at the recruit. \"With ferocity! Crouch over more. More than that! Now always be moving - no, not like that, you\'re going to-\", he says, before being interrupted as the recruit trips over his own paws and lands awkwardly on the sandy courtyard. The sergeant sighs, and sees you watching. \"Ho there, traveller. Trying to get these greenpaws to do some anti-tiger drills, but fighting against wooden dummies is no way to get to grips with how a tiger warrior moves. Though they are probably better than training against this fool!\" he growls. The clumsy recruit looks away with embarrassment, and the grizzled sergeant rubs his chin as he looks you up and down. \"Tell you what, son, I learned a few spells on my deployments. You let me turn you into a tiger, and you can train with us. My rookies get a real tiger to face off against, and you get free training from the mightiest army in the seven kingdoms! What do you say?\"",
                "icon": "tffetish",
                "requirements": [{
                    "parameter": "species",
                    "value": "32",
                    "comparison": "nequal"
                }],
                "type": "random",
                "results": {
                    "grizzsex": {
                        "text": "The old sergeant grins, an expression you get the feeling he does not use often. He rubs his hands together and takes a wide stance. \"Right, let me see if I remember how to do this properly. Don\'t give me that look, don\'t you know all felines are gifted with magic? Of course I can do this!\" he says. Your skepticism only grows when he starts to stumble over his words, and wave his arms in a very unconvincing manner. It seems to have done something though - you can feel the now-familiar tingle of magic as it crawls over your skin and wraps around you like invisible tendrils. You look down at your arms, and see the colour slowly changing, becoming a deep burnished orange, and then developing darker tiger stripes. A promising start, if not for one thing - there\'s no fur growing, only a shiny smooth texture that squeaks when you move your arms, and gleams very unnaturally. You watch the rubbery texture spread along your upper arms, forming plastic wrinkles and bends at your elbows. It also spreads down your hands, and your fingertips bulge out into puffy, cartoonish digits, before you grow stubby and blunt rubbery claws.</p></p>You try to warn the sergeant that his spell isn\'t working properly, but your voice comes out as a loud and high-pitched squeak. The pressure of your squeak seems to push at your face, causing it to bulge out and inflate. You feel a forced grin stretch on your growing squeaky rubber muzzle, while your vision blurs for a moment, before your eyes become painted-on colours on your smooth, rubbery head. You open your mouth and touch your rubber tongue and blunt artificial teeth, while the rubber spreads down your chest and legs. Your feet bulge out into puffy rubber paws, and a long shiny striped rubber tiger tail stretches from your rear and sways in the breeze. Your final change is the most embarrassing, as the rubber flows...</p></p>With your entire body now covered in tiger-print rubber, you feel your insides grow light and strange. A great hole seems to form inside you, replacing your organs and bones with nothing but inflated air. The sensation is very odd, as you discover that even the most cautious of steps is at risk of leaving you bouncing off the ground and through the air. The captain gives you a pained expression as he takes in your artificial, fake-tiger appearance. \"Well...that\'s closer than the rookie\'s impression I suppose. Are you sure you were thinking tigery thoughts?\" he says. You say something cutting, but you\'re still struggling with your squeaky-toy throat, and it mostly comes out as vaguely offensive squeaks.</p></p>Although you did agree to help the guards with their training, the futility of attempting to do so is quite clear the first time one of them baps you with a polearm and you immediately bounce across the courtyard. It\'s dizzying, but not painful. The guard\'s hopeful expression is dashed when the sergeant assures him that real tigers aren\'t actually that easy to knock away. Eventually, they give up, and the sergeant says he\'ll just do it himself. His terrifying roars and attacks are quite believable as a relentless tiger. You wonder if he missed his calling as an actor. Unfortunately, he\'s so occupied with his impression that he doesn\'t turn you back, and you end up leaving the training yard on your new inflatable rubber paws.",
                        "descriptionchange": "This adventurer is an inflatable rubber tiger, with squeaky smooth skin and painted on stripes. They bounce as they walk.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 32,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "illegalbar",
                "title": "The Unregulated Bar",
                "subtitle": "This building can barely be called a bar. It's a few planks of wood leaning against the side of the wall to inner Makarna, with some more planks on empty kegs to form a makeshift counter, from which some cheap ale can be served. The guard post seems like a sensible place for it, considering how much traffic they are giving it.</p>The bartender, a particularly gruff and scarred hyena, leers at you when you sit down. \"Hey there adventurer. We're running low on booze. Care to help me get some more? There's cash in it for you...\", he says. One lion guard sitting nearby gives a nasty chuckle when he asks you that. Suspicious.",
                "type": "statcheck", //or random
                "stat": "might",
                "difficulty": 40,
                "requirements": [
                ],
                "icon": "inanimatefetish",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You agree, with some hesitation, and the hyena wipes his snout then roots around in his pocket. He pulls out a small bottle and tosses it to you. \"Drink up. Needed for the...delivery\", he says.</p>You look down at the little clay bottle, and pull the stopper out. It stinks of booze. You hold your nose and drink it down, feeling the hot, sharp taste as it flows down your throat. You cough and wince, and thump your chest to help clear your throat.</p>The hyena starts to chuckle, and leans on the bar to stare at you. You feel a bit dizzy, and swollen. You suddenly belch, loudly, and it tastes of booze when you do. Your clothes start to feel tight, as your belly bulges out, growing larger and rounder. It feels firm and strange, and when you move, you can feel a very weird, sloshing sensation. You wobble on your chair, and then fall backwards, landing on your rear with a loud, hollow wooden THUMP. The bartender walks over, and pulls your shirt off, allowing you to look down and see the wood-grain planklike pattern on your bulging, swelling belly. You try to stand, but the sloshing inside you is getting heavier, and you can't seem to pull yourself up. The hyena just pulls your pants off, and he and a lion guard heave you up onto the bar. Your arms and legs wiggle helplessly as the bartender grabs a large copper tap, and shoves it firmly against your belly.</p>You feel the tap digging into your wooden bellybutton, and an incredible, relaxing and orgasmic bliss flows through you. Your toes clench and you moan, as frothing golden beer gushes from your tap and spills out into a pewter mug that the hyena is holding. He hands it to the guard, and twists your tap shut. You whimper and reach down for it, desperately wanting more, but your arms are too short now. Your body is bulging bigger and bigger, becoming a massive wooden keg, and you can do nothing but let yourself be used.</p>For the rest of the day, you serve the workers of the docks. Guards come in after their shifts, pull off their armor and reveal their sweaty muscular chests, and buy a mug of ale from you. Dockworkers, scaly, furry and feathery, walk in, wipe the sweat from their brow, and drink your ale. Each time you are used to fill a mug, you feel more empty, and light headed, and happy. Only your incredible strength seems to keep you going. Despite the many thirsty patrons of the bar, you can keep up with demand. You want to be a good barrel. You must serve. You let them drink up from you well into the night, until the sun sets and several of the workers are snoozing, drunk, on the floors of the tavern.</p>The hyena yawns and gives you a grin. \"Damn, you made one fine barrel. You're the first person who ever lasted a whole night!\", he says. You just grin dumbly, your mind full of beer thoughts. Your beloved bartender owner walks around and twists the tap oddly, and you start to feel strange. The bubbly warmth of your inner booze fades away. Your firm hard wood becomes soft and spongy, and you shrink. Soon, you are confused and dizzy, sitting on the countertop with a weird fleshy body and no way to serve the patrons!</p>The hyena pats your head and hands you a handful of the odd plants that Makarna uses for currency. \"Give it a few hours, you'll feel normal soon. Come back any time!\", he says.",
                        "outcomes": [
                            {
                                "parameter": "watervine_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": "You agree, with some hesitation, and the hyena wipes his snout then roots around in his pocket. He pulls out a small bottle and tosses it to you. \"Drink up. Needed for the...delivery\", he says.</p>You look down at the little clay bottle, and pull the stopper out. It stinks of booze. You hold your nose and drink it down, feeling the hot, sharp taste as it flows down your throat. You cough and wince, and thump your chest to help clear your throat.</p>The hyena starts to chuckle, and leans on the bar to stare at you. You feel a bit dizzy, and swollen. You suddenly belch, loudly, and it tastes of booze when you do. Your clothes start to feel tight, as your belly bulges out, growing larger and rounder. It feels firm and strange, and when you move, you can feel a very weird, sloshing sensation. You wobble on your chair, and then fall backwards, landing on your rear with a loud, hollow wooden THUMP. The bartender walks over, and pulls your shirt off, allowing you to look down and see the wood-grain planklike pattern on your bulging, swelling belly. You try to stand, but the sloshing inside you is getting heavier, and you can't seem to pull yourself up. The hyena just pulls your pants off, and he and a lion guard heave you up onto the bar. Your arms and legs wiggle helplessly as the bartender grabs a large copper tap, and shoves it firmly against your belly.</p>You feel the tap digging into your wooden bellybutton, and an incredible, relaxing and orgasmic bliss flows through you. Your toes clench and you moan, as frothing golden beer gushes from your tap and spills out into a pewter mug that the hyena is holding. He hands it to the guard, and twists your tap shut. You whimper and reach down for it, desperately wanting more, but your arms are too short now. Your body is bulging bigger and bigger, becoming a massive wooden keg, and you can do nothing but let yourself be used.</p>For the rest of the day, you serve the workers of the docks. Guards come in after their shifts, pull off their armor and reveal their sweaty muscular chests, and buy a mug of ale from you. Dockworkers, scaly, furry and feathery, walk in, wipe the sweat from their brow, and drink your ale. Each time you are used to fill a mug, you feel more empty, and light headed, and happy. Finally, the time comes when your mind is utterly free of thoughts or cares. You only have the pleasure of giving out drinks. It is your purpose. As your inner fluids empty, your arms and legs shrink even more. Becoming small nubs against your planks. Your head sinking in to the top of your keg form, while it flattens out and becomes more and more like normal wood. When your last mug is filled, you close your eyes, shiver, and sigh as you sink in completely, becoming nothing but a hollow, empty barrel.</p>The bartender twists your tap once more, checking for any empty drops, then pulls the tap out of you. He lifts you up and carries you to a big pile of other identical empty barrels, and leaves you there to dry out. Perhaps later you will be sold and used to carry goods for the ships, but you are now nothing but a container.",
                        "trapped_desc": "There is an empty beer barrel here.",
                        "trapped": 'You are nothing but a booze-soaked wooden barrel, drying in the sun.',
                        "outcomes": []
                    }
                }
            },{
                "id": "staybarrel",
                "title": "Drained and Empty",
                "subtitle": "You are nothing but an empty barrel, discarded against the wall. Nothing of interest and with no hope of anything fun happening to you. You are basically garbage.",
                "trapped": true,
                "type": "random",
                "requirements": [
                ],
                "icon": "inanimatefetish",
                "results": {
                    "pumpkin_1": {
                        "text": "You sit helplessly, feeling your wooden body slowly dry out in the sun. Your insides feel empty, hollow and needy, with your \"mouth\" open into the air, waiting for anything to fill you. Of course, no one is interested in just another random empty barrel.</p>You see something arc through the air, and splatter against the inside of your mouth. It tastes sticky and slightly mushy as it slides slowly down your wooden inner walls and flops against the bottom of you. Is that...a banana peel?</p>Unable to move or react, you are forced to sit helplessly for the rest of the day, tasting and smelling the peel slowly turn brown and nasty. As the sun sets, you see a baker walking by with a bag. He notices you, takes a look inside, and then drops his bag into you. Crusty rolls of unsold bread tumble into your body, bouncing inside you and landing in a heap. In the morning, a guard walking past you tosses the remains of his lunch into you, a couple of greasy bones. This can't be happening. You're being treated as a garbage dump!</p>Weeks pass, and the stink and taste grows worse. A nasty stench and greasy, sticky feeling that lingers in the back of your throat. One you are helpless to do anything about. In the night, as you are feeling disgusted by your stench, you see someone creep up towards you. It's a short, filthy rat, wearing nothing but a tattered and worn pair of shorts held up by a rope. His hands and feet are caked with mud, and his fur is scruffy and filthy.</p>He lifts his head over your side and sniffs you. You feel his bare feet scrabble against your wood as he climbs up and hops inside. His filthy feet squelch in the muck and garbage within you. You can see him inside your body as he curls up, his back against one side of you and his feet pressed against the other.</p>He reaches down into his pants, and slowly starts to pump and stroke himself. He closes his eyes, relaxing and enjoying the moment, totally unaware that he is being observed. His skinny body breathes in deep, and he shivers with pleasure as his tail curls around some of your garbage. Finally, he shudders and moans, and his pants become darker and stained with wetness. When he pulls his hand out, his fingers are sticky and covered in dripping white cum. He curls up inside you, and soon falls asleep.</p>As you watch over him, you feel an odd sense of pride and protectiveness. You may be a worthless garbage dump, but you're of use to this skinny little rat. That's something.",
                        "outcomes": []
                    }
                }
            }
        ],
        "npcs": [
        ]
    }