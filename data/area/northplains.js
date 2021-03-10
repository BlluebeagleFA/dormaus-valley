var area = {
        "title": "northplains",
        "header": "Northern Plains",
        "position": [0.53,0.12],
        "mapId": "worldmap.jpg",
        "subheader": 'Waves of tall grass sway in the wind, so tall that you can barely see the village of Dormaus to the south. The grass crunches underfoot, concealing the hidden lives of many tiny field creatures in a sea of green.',
        "events": [
            {
                "id": "gohorse",
                "title": "The Horseball Inn",
                "subtitle": "You can see an odd, large black boulder nearby. A sign in the grass says 'This way to the Horseball Inn'.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You head over for a closer look.",
                        "area": "horseball_inn",
                        "outcomes": []
                    }
                }
            },
            {
                "id": "sweatshop",
                "title": "A Weasel?",
                "subtitle": 'Something suddenly rushes past you, scurrying through the long grass.',
                "type": "random",
                "requirements": [
                    
                ],
                "icon": "stealth",
                "results": {
                    "thing": {
                        "html": "data/active/PlainsWeasel.html",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "kitsunetf",
                "title": "Stone Guardian Statue (Contributed by Reese Ikena)",
                "subtitle": "A large stone tablet with foreign writing stands in a small clearing. Around the tablet are two foxes with bushy tails carved from similar rock. Though they are inanimate, you can’t help but feel they are watching you as you approach the statues. Will you study the mysterious guardian statues?",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 66,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": "Before you can reach the statue, the two foxes glow. Their rocky exteriors crumble, revealing blue, transparent spirits. The two foxes stretch their phantom limbs and watch you intently. You realize that approaching this strange stone tablet may have been a poor choice. When you attempt to run away, the foxes bound after you. In an instant, they flank your escape route and corner you against the stone tablet.</p>\tIn an attempt to back away from the fox spirits, you trip and fall against the tablet, leaving you in a compromised position. The foxes reach your feet and begin to lick your skin with their tongues. They have no physical form, so all you feel is the tingle of magic in your blood. When you raise one foot to see what the foxes are doing, you see a white-furred paw. The foxes continue to lick at your lower half, turning your legs into digitigrade, vulpine limbs. You make another feeble attempt to escape, but you aren’t used to your new extremities. You immediate fall back down, this time on your stomach, as the foxes crawl up your thighs. </p>\tYou feel the magic pulse from one of the foxes on the base of your spine. A small gasp emanates from your lips as new vertebrae form, stretching your body outwards. Long, white fur sprouts along the length of your new, fluffy tail. Then there’s another pulse, and your spine splits in two. Another tail extends and fills out with fur. You breathe heavily from the experience, but the changes aren’t over yet. Seven more times, your spine splits and a new tail is created. When you look backwards, you see your nine fox tails swaying in time with your thoughts.</p>The fox continues down between your cheeks, causing you to moan as the magic courses into your tailhole as the spirit licks your rear. The other fox takes the opportunity to approach you from the front. It licks at your ears first, coating them with fur and moving them up your skull. Moving along your face, the fox forces your nose and mouth to push into a long, thin snout. Your eyes change to a golden color, granting you an enhanced sense of sight.</p>\tThe foxes nuzzle you, urging you to flip over. You hesitate at first, but the magic tingling at your brain forces you to comply. You expose your front to the spirits, making them yip silently and bound onto your chest. They begin licking at you once more, coating the last of your skin with white fur, with a soft tuft in the middle of your chest. It appears your transformation is complete. The two foxes stare at you with keen interest. You manage to stand back up, your paws feeling more natural to stand on.</p>\tThe spirits aren’t quite done yet, however. They float into the air, and before you can react, they squeeze into your ears. It feels like your head is exploding with magical energy. Your memories are being rewritten, your personality is being changed. The foxes are molding you. As the magic pulses through your mind, you realize your purpose. You must guard the spirits of this forest. It is your duty as the kitsune. But no! You must resist! With the last ounce of willpower you have left, you break through the spirits’ temptations. Before anything else can mess with your head, you run away, taking your new, white-furred kitsune body with you.",
                        "descriptionchange": "You are a slender and eerie white-furred kitsune, your eyes glowing golden and your tails swaying hypnotically behind you.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 66,
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