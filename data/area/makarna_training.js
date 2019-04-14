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
                        "area": "makarna_market",
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
            }
        ],
        "npcs": [
        ]
    }