var area = {
        "title": "contributor_1_2",
        "header": "Underground Pool",
        "mapId": "dormausvillage.jpg",
        "position": [-1,-1],
        "subheader": "You find yourself in a strangely and perfectly circular room in this cave system, illuminated by a flickering light. The walls, floor, and ceiling appear to be perfectly smooth as if they were carved and sanded to be like this. In the center of the room sits a calm pool of water, if you were to look down into the pool, you would not be able to see the bottom, the water fading into a darkness. However, the source of light for the room can be visibly seen in the pool, a strange, floating crystal, almost like a clear diamond, with a raging red fire burning inside. Other than that, nothing else about the room seems to stand out.",
        "events": [{
            "id": "gotopatron",
            "title": "Crawl Back into the Crevasse",
            "subtitle": "You can crawl back into the crevasse from this way, the way seems clearer from this side, almost as if the path is opened up to you.",
            "type": "random", //or random
            "requirements": [
                
            ],
            "icon": "navigateicon",
            "results": {
                "success": { //success and fail, rare success, rare fail, or random
                    "text": "With the dangers of passing through before, you expected traversing through into the crevasse to be more dangerous, but you find yourself getting to the center of it without incident. Once you get into the crevasse, you turn around and can almost swear that the way back closed a little behind you.",
                    "area": "contributor_1_1",
                    "outcomes": []
                }
            }
        },{
            "id": "gotonewarea",
            "title": "East to the Cavern Entrance",
            "subtitle": "You can spot a path further out of the cavern, there seems to be what looks like streams of natural light coming in and the pleasant breeze of fresh air flowing through.",
            "type": "random", //or random
            "requirements": [
                
            ],
            "icon": "navigateicon",
            "results": {
                "success": { //success and fail, rare success, rare fail, or random
                    "text": "You go through the cavern pathway with little to no incident and find yourself into the new room.",
                    "area": "ping_cavern",
                    "outcomes": []
                }
            }
        },{
            "id": "badtouchten",
            "title": "Dive into The Pool",
            "subtitle": "You become a little curious about the crystal floating in the pool. Seeing it float there, flames not dying any time soon, raise questions like is it magical or something closer to natural? You could swim into the water and get a closer look of it, though you aren’t entirely sure that there is nothing else down in the murky darkness… ",
            "type": "random",
            "requirements": [
                
            ],
            "icon": "random",
            "results": {
                "grizzsex": {
                    "text": "You take of your armor and weaponry, leaving them by the pool’s edge, and dive into the water. It feels cold against your skin but not uncomfortably so. You begin to swim downward toward the crystal at a brisk pace, the issue of how long you can hold your breath being one you want to avoid. You get down to relatively close to the crystal until you hear a swishing sound from below. Then without much warning, you feel slithery things wrap around your arms and legs. You look down, panicked at the new predicament, and what looks back is many yellow eyes open up underneath you.</p>You see the pure-black, monstrous creature below you open up its mouth, rather its many mouths. Each filled with many rows of asymmetrical, sharp teeth. You feel terrified, you don’t want to become this thing’s dinner. You struggle against the tentacles binding you to no avail, they are wrapped tightly leaving you in a splayed position. However, it doesn’t pull you down like you feared. Instead you see more tentacles rise out of the wide maws, you realize that these aren’t tentacles but tongues. These tongues shoot out toward you and increase the amount holding you into place, but a few go to a different location. A couple instead stop in front of your feet, stopping an inch away. </p>You then hear a moan go through the water and see the creature shudder intensely just before those tentacles bash into the bottom of your feet. After the first hit however, they begin to gently rub against your feet. You realize that it is licking them and enjoying it too as the tentacles holding you there seem to lessen their grip and relax a little. In fact, you realize that these tongues actual feel pretty good, a little tingly, smooth, pleasurable sensations radiating from your rubbed feet… You release a moan yourself, bubbles escaping your lips. Then a new terror dawns on you, you are running out of air. </p>You almost feel remorseful to do so, but you begin to thrash in the creature’s grip again. This time you surprise the creature, it clearly waking up from a kind of daze. It doesn’t take much effort to escape the hold of its tongues and you kick quickly to get to the surface. You move quickly, faster than the surprised monster can react and you break the surface. You float there for a few seconds, taking exasperated breaths and then look down. The creature just stares back up at you with its many eyes and with a sad sounding moan closes them and retracts its tongues, leaving the bottom to appear to by an abyss again. You exit the pool and reclaim your belongings, feeling a little like you lost something but also like the creature had some impact on you that you can’t place.",
                    "outcomes": [
                        {
                            "parameter": "submissiveness",
                            "quantity": 1,
                            "change": "add",
                            "max": 3
                        },{
                            "parameter": "dominance",
                            "quantity": 1,
                            "change": "add",
                            "max": 3
                        },{
                            "parameter": "magic",
                            "quantity": 2,
                            "change": "sub"
                        }
                    ]
                }
            }
        },{
            "id": "guest_fursuit",
            "title": "A Risky Nap",
            "subtitle": "The still pool and light in the room makes the place oddly relaxing, you feel like if you put a bedroll on the ground you could take a relaxing nap. As an adventurer you don’t get too many opportunities to rest. However, there is the possibility of someone with not so pure intentions discovering you whilst you sleep. The still pool and light in the room makes the place oddly relaxing, you feel like if you put a bedroll on the ground you could take a relaxing nap. As an adventurer you don’t get too many opportunities to rest. However, there is the possibility of someone with not so pure intentions discovering you whilst you sleep.",
            "type": "random",
            "requirements": [
                {
                    "parameter": "species",
                    "value": 42,
                    "comparison": "nequal" //default greater
                }
            ],
            "icon": "tffetish",
            "results": {
                "grizzsex": {
                    "text": "You disregard the risk of anyone walking in on you because of how out of the way these caves are. You lay out a bedroll toward the back of the room and easily drift off to a dreamless sleep. You do not know for how long you slept, but some time later you awaken to the sound of walking. For a few moments you scramble silently to get up so you can face whoever or whatever has arrived to the same place you have. In strides a buff but grayed anthropomorphic hyena man. All over his body at different angles lie deep looking scars, showing signs of battles past. He has no weapon or armor, except a tattered loincloth, but you get the impression that in a fight he wouldn’t need a weapon. He stops walking and looks directly at you.  You realize that his eyes are completely white, he is blind. </p>In an old, gruff voice he says, “I can smell you there interloper. I may be old, but I will not go down like a young welp!” You see his legs shift into a stance, his arms raised in an odd stance to where it looks like he is ready to tear at you. You quickly yell out that you don’t want to fight him. You see him pause for a second, as if he is considering whether or not he actually wants to fight and then eventually lowers his guard. Then almost dismissively, “If you aren’t an enemy, then come over so I can get a look at you.” You oblige and walk toward him carefully. As you get closer you realize the he is giving off a strong, sweaty scent. Whereas on the other side of the cavern chamber you didn’t even notice it, as you get closer it gets stronger and ranker. You try to stifle a cough, the air a little hard to breath.</p>You eventually get up to the man, the smell overpowering. You can barely breath being so close to him, the air made of sweat and musk. You don’t know why you didn’t stop walking, but you are there now. He talks, seemingly oblivious to your discomfort, “Well, if you ain’t here to fight, what are you here for?” You try to give a reply but instead begin to choke a little, to which he again seems oblivious too. “Hmm, you seem to be nervous, …” Then with a jovial yell, “I get it! You came to my special place because you wanna to become a great warrior like ol’ Okez the Unbeaten, don’t yah welp!” He laughs loudly and boastfully, putting one arm around you. “Well come close then, before I change my mind!”</p>You are about to object to this, thinking you should probably get away from the boisterous male and his stench. However, you don’t get the chance as suddenly Okez shoves your head straight into his warm, sweaty armpit. You originally thought it was rank just being next to him, but near the source it is beyond overwhelming. Your eyes water, and breathing seems almost impossible, so you start to struggle in vain in the warrior’s grip. While your mind focuses on the musk, your body starts to slowly become wracked with changes. Spotted fur begins to grow in patches on your body, your face taking the form of a hyena muzzle, new muscles beginning to bulge with strength.</p>While your body changes, so does your brain. The musk at first is too strong, painful, rank. You want nothing more to get out of this beast’s hold and escape. But the more your nose takes it in the easier it is to breathe. It becomes less and less bad smelling to you. In fact, it starts to smell good actually. Sexy, strong, powerful… A smell to be jealous of… The musk of a strong Gnoll warrior… You want to laugh at your past resistance, it seems so ridiculous that you didn’t desire this. Instead of fighting it anymore, you bury your face further into his pit, your new broad tongue extending and licking to get a taste of it.</p>Your surrender to the situation only speeds up the transformation that was happening in the background. The fur rapidly grows out into a spotted brown hyena pelt. Your snout grows out, only getting more and more sensitive to the odor. From behind a dog-like tail forms, slightly wagging in enjoyment. Your arms, legs, and chest grow more muscular, becoming more fitting for a brute than a man. Lastly your hands and feet shift into paws with sharp claws. Eventually, long after the transformation has finished, Okez lightly pushes you off of his pits and laughs. “That’s more like it welp, you even smell better!” He pats you hard on the back hard and then takes off his loincloth, handing it to you. You instinctively bring it to your nose; the sweaty smell of the warrior having rubbed off on it. “Do me proud brother, become a stronger warrior than me!” It is then the boisterous Gnoll goes, leaving you to bask in the afterglow of your transformation. And so, you stand there awhile, just enjoying your new stinky life.",
                    "descriptionchange": "This adventurer is a muscular Gnoll brute. They seem to exude a very strong smell and act very jovial.",
                    "outcomes": [
                        {
                            "parameter": "species",
                            "quantity": 42,
                            "change": "set"
                        }
                    ]
                }
            }
        }],
        "npcs": []
    }