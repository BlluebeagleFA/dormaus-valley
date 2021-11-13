{
        "title": "ping_forest",
        "header": "Forest Path",
        "mapId": "dormausvillage.jpg",
        "position": [-1,-1],
        "subheader": "You find yourself in a well-lit and peaceful forest glade. All around large trees of various species and types seem to reach out to the sky. No two trees seem to look alike, instead each being distinct and picturesque in their own right. There are tall ones, short ones; leaves of vibrant indigos, greens, and yellows; and a few dotted around don’t resemble conventional trees, instead curling around themselves or looking like fungi-tree mixes. Through the center of this odd menagerie is a small but straight dirt path leading from a small cave to a large field that can be seen at the edge of the forest.",
        "events": [{
            "id": "tofarm",
            "title": "East Towards the Farmland",
            "subtitle": "Towards the eastern edge of the forest, the dirt path begins to merge into hard, paved stone. It leads out past the trees into what seems to a valley with hills covered in crops and farmhouses. You could walk along it to explore more of this weird world.",
            "type": "random", //or random
            "requirements": [
                
            ],
            "icon": "navigateicon",
            "results": {
                "success": { 
                    "text": "The walk through the forest is quite serene and calming. Every so often, along the path, you see some small animal or creature like a rabbit or squirrel skitter across into one of their burrows or into a mini glade of unique looking flowers. You pay so much attention to the little things around you, it almost comes as a shock when you arrive into the more developed fields.",
                    "area": "ping_farmland",
                    "outcomes": []
                }
            }
        },{
            "id": "intocave",
            "title": "West Into the Cave",
            "subtitle": "From the outside, the cave you were in looks like a mound of dirt surrounding a metal door. The door looks to be in the same decrepit state on this side as it was on the other side, except that it still has its handle. It is very likely that to get back into the cave this way, you would have to try and force the door open, though it may require a bit of muscle.",
            "type": "statcheck", //or random
            "stat": "might",
            "difficulty": 20,
            "requirements": [
            ],
            "icon": "navigateicon",
            "results": {
                "success": { 
                    "text": "You grip tightly on the handle and begin to pull hard on the door. You pull and pull, straining yourself a bit, and cracks open just a little bit. However, it doesn’t open enough for you to get in, it refusing to go the rest of the way. You stand there for nearly a minute, trying to get it open farther until you have an idea. You walk back out to the forest and find a nice thick branch that looks sturdy and proceed to slide it into the opening. Using the stick as a lever, you begin to try to pry the rusted door open. At first it seems like it won’t work, the door remaining steadfast in its stillness. You try some more, applying more pressure to the stick until finally you do it. The door swings open with a crash, the stick unfortunately shattering in the process; but you are free to enter the cave once more, and so you do. However, not long after you enter you hear the door close behind you again, and you sigh a little bit in frustration. ",
                    "area": "ping_cavern",
                    "outcomes": []
                },
                "fail": { 
                    "text": "You grip tightly on the handle and begin to pull hard on the door. You pull and pull, straining yourself a bit, but it refuses to move. For all your effort, you only succeed in shaking off a little bit of the rust off the door. You may have to try a different approach of getting it open.",
                    "outcomes": []
                }
            }
        },{
            "id": "tofey",
            "title": "A Fey Night",
            "subtitle": "As you walk through the forest, you begin to hear the sounds of voices and music through the trees. They sound close, as if they are just behind some close-set trees on your right. The voices seem to laugh and boast unintelligibly but jolly, and the music’s dulcet tones sound as if they are coming from a loud yet beautiful sounding flute. Moving closer to the source of the sounds, it doesn’t seem to get louder, staying the same close yet evasive level of noise. Standing in front of the brush and trees, you are almost certain this is where the noises are coming from somehow, even though you are certain they haven’t gotten louder in the slightest. Moving a branch aside, you spot the place the sounds should be coming from: a single glowing yellow and red tent surrounded by tables of fresh-looking food and drink. However, there is not a single soul in sight despite the voices and music, instead the grounds look empty and abandoned despite the clear signs that a party of some kind is being held here. You are about to take a step forward, until you notice right below your foot, and lining the camp in a perfect circle, lies glowing blue mushrooms, radiating what seem to be little wisps of light that rise barely a few inches before dissipating into nothing. It might be better to just walk on and forgo investigating such a suspicious campground. ",
            "type": "random", //or random
            "requirements": [
                
            ],
            "icon": "navigateicon",
            "results": {
                "success": { 
                    "text": "You ignore the ring of mushrooms thinking that it is as strange as the rest of this place and step over it. It doesn’t take long for you to realize that this may have been a bad decision. Instantly, everything goes quiet, deafeningly so. Even though before you could hear the occasionally bird chirping or the leaves rustling, instead you hear nothing. You turn around and notice that oddly everything outside the circle seems almost frozen, you can see a bird mid flap in the sky, lifeless and still; a leaf floating, evidently having fallen but unmoving now; and many more small things that in any natural situation should have been moving. However, you do not have long to dwell on the situation, as behind you, you hear a voice breaking the silence, “A guest, why don’t you make yourself at home, we have a long time to get acquainted…”",
                    "area": "ping_camp",
                    "outcomes": []
                }
            }
        },{
            "id": "stagm",
            "title": "The Great Hunt",
            "subtitle": "As you walk along the path you hear a rustling of leaves ahead of you. Almost immediately after, a feral stag jumps in front of you. Its fur is a pure white, almost glistening in the light that falls through the leaves; its antler’s large, giving it an almost majesty, kingly look. However, its expression is one of terror. It stops, staring at you, the urgency of its situation easily read on its face. You get a very uneasy feeling from the situation, as if you should ignore the creature, but doing so would mean walking away.",
            "type": "random",
            "requirements": [
                {
                    "parameter": "gender",
                    "value": 1,
                    "comparison": "equal" //default greater
                }
            ],
            "icon": "tffetish",
            "results": {
                "fail": { 
                    "text": "After a few seconds of stillness, the two of you frozen in place, unable or not wanting to make the first move, a loud blood curdling howl breaks through the trees. It is soon followed by even more howls and the odd sound of something wooden crashing through the branches and trees. It is then you think you see the stag mouth the words, “I’m sorry…” followed by a blinding flash of blue light.</p>\tAfter your eyes adjust, letting you see again, you spot an anthropomorphic deer that is very similar to the feral stag and standing where the feral stag stood. This time you hear him say, in a light, almost young voice, “I’m so sorry…” After this, he turns and runs away before you could respond; however, you wouldn’t have been able to respond even if you wanted to as an extreme wave of nausea comes over you. You fall onto your hands and knees, your stomach churning and head dizzy. </p>\tYou look down at your hands, and notice the fingers melding into hard, black hooves. It doesn’t take much to realize, whatever the deer did to you is transforming you, likely into something very similar to himself. Beyond that, and beyond the nausea, you feel something else, something wrong, like you have been marked. You then hear the same howls from before and your instincts tell you exactly what you have been marked by: The Hunter. Your body screams for you to run, flee, avoid being The Hunter’s prey; however, you can’t run, your body is frozen from both fear and the continuing transformation, the changes and nausea leaving you stunned and helpless.</p>\tYou feel your feet become hooves as well, your stature becoming more and more four legged as your legs and arms become more cervine in nature. Pure white fur begins to come over your body, creating a shiny new pelt. Your chest begins to uncomfortably broaden and shrink at parts, fitting for your current feral form. Your head is the last to change, your face contorting to one of a deer, your new eyes wide with an instinctual terror that no matter what your rational mind says right now, you can’t escape. Large antlers quickly grow out of your head, weighing it down a little and giving you a strong appearance. And so, where once you stood stands a strong and majestic stag, one that would normally emanate a feel of masculinity and power; or rather, you would if you were not the proverbial deer in the headlights.</p>\tIt doesn’t take long after your transformation for you to hear the howls again. This time they are much, much closer, too close, the sound of wood against wood crackling to your right. It is then The Hunter and his “hunting party” crash through the trees onto the path in front of you. The sight before you is an unusual one, on a chariot stands a being, who you can only assume to be The Hunter by your instincts flaring at you to run away from him as soon as you can. The figure appears to be a pitch-black stag, his frame exceedingly muscular and his antlers intricate and large, the texture looking almost like wood in the light. His eyes glow an unnatural yellow, giving you the impression that he is staring into you, and his mouth is contorted into a twisted grin, sowing off exceedingly sharp teeth. Despite this, that isn’t what catches your eye about him. As your gaze lowers you see that his waist seems to merge into a what appears to be a type of plant, with large dark green vines snaking around him and brown spiky roots wriggling below him, as it they yearn to grab something. Lastly, almost toward the center of this creature, where his crotch would have been juts out a large, fat bud, one that appears like it could bloom into a type of flower or fruit.</p>He stands upon an opulent black and gold chariot, slim enough for one man to stand on, the chariot itself drawn by a large horse like creature. Additionally, he is surrounded by a pack of hounds, hunting dogs that snarl at you, ready to route you for their master. This menagerie being unusual on its own is made more so by what this horse and these dogs actually are. Even at a glance, it is easy to tell that they are not of flesh and blood, instead being composed of what appears to be tightly woven branches and brambles, their bodies covered in sharp thorns. Despite this fact, they do not appear any less alive nor less fearsome because of this, instead they give a greater feeling of danger because of it, their eyes, glowing red pits of light, seem to stare hungrily at you, and even the horse seems to snarl at the prey before it. </p>The Hunter looks down at you and his sharp grin turns into an unsettlingly pleasant smile. He then speaks, his voice deep and booming, adding to his imposing frame, “Well, it looks like my last prey finally escaped, and gave me a new one to play with.” Without any signal, his chariot begins to move up until he is in distance to touch you, all while your body screams to run, but you still mysteriously can’t. One of his vines begins to slowly stroke your cheek as he continues to speak, the feeling of it rubbing against you somehow both comforting and unnerving. “Heh, I sure hope you give a better chase than the last one.” The vine then quickly slithers around your throat tightening just enough to be uncomfortable. “Me and my pets have been getting quite restless with these pathetic hunts.” The vine slithers into your mouth a little as you stare at him, and then it quickly retracts as he leans in. “Well, what are you waiting for? Run.” Then, as if there was an explosion of pent up energy in your legs, you turn around and dash through the trees, your prey instincts taking over.",
                    "trapped_desc": 'This adventurer is a large, snow-white stag with big antlers and powerful legs. They seem to exude a feeling of masculinity and power except when scared.',
                    "trapped": 'You have turned into a stag, a strong noble beast that shines even under the fear of being hunted.',
                    "descriptionchange": "This adventurer is a large, snow-white stag with big antlers and powerful legs. They seem to exude a feeling of masculinity and power except when scared.",
                    "outcomes": [{
                        "parameter": "trapped",
                        "quantity": 22,
                        "change": "set"
                    },{
                        "parameter": "species",
                        "quantity": 64,
                        "change": "set"
                    }]
                }
            }
        },{
            "id": "stagf",
            "title": "The Great Hunt",
            "subtitle": "As you walk along the path you hear a rustling of leaves ahead of you. Almost immediately after a feral stag jumps in front of you. Its fur is a pure white, almost glistening in the light that falls through the leaves; its antler’s large, giving it an almost majesty, kingly look. However, its expression is one of terror. It stops, staring at you, the urgency of its situation easily read on its face. You get a very uneasy feeling from the situation, as if you should ignore the creature, but doing so would mean walking away.",
            "type": "random",
            "requirements": [
                {
                    "parameter": "gender",
                    "value": 2,
                    "comparison": "equal" //default greater
                }
            ],
            "icon": "tffetish",
            "results": {
                "fail": { 
                    "text": "After a few seconds of stillness, the two of you frozen in place, unable or not wanting to make the first move, a loud blood curdling howl breaks through the trees. It is soon followed by even more howls and the odd sound of something wooden crashing through the branches and trees. It is then you think you see the stag mouth the words, “I’m sorry…” followed by a blinding flash of blue light.</p>\tAfter your eyes adjust, letting you see again, you spot an anthropomorphic deer that is very similar to the feral stag and standing where the feral stag stood. This time you hear him say, in a light, almost young voice, “I’m so sorry…” After this, he turns and runs away before you could respond; however, you wouldn’t have been able to respond even if you wanted to as an extreme wave of nausea comes over you. You fall onto your hands and knees, your stomach churning and head dizzy. </p>\tYou look down at your hands, and notice the fingers melding into hard, black hooves. It doesn’t take much to realize, whatever the deer did to you is transforming you, likely into something very similar to himself. Beyond that, and beyond the nausea, you feel something else, something wrong, like you have been marked. You then hear the same howls from before and your instincts tell you exactly what you have been marked by: The Hunter. Your body screams for you to run, flee, avoid being The Hunter’s prey; however, you can’t run, your body is frozen from both fear and the continuing transformation, the changes and nausea leaving you stunned and helpless.</p>\tYou feel your feet become hooves as well, your stature becoming more and more four legged as your legs and arms become more cervine in nature. Pure white fur begins to come over your body, creating a shiny new pelt. Your chest begins to uncomfortably broaden and shrink at parts, fitting for your current feral form. Your head is the last to change, your face contorting to one of a deer, your new eyes wide with an instinctual terror that no matter what your rational mind says right now, you can’t escape. Large antlers quickly grow out of your head, weighing it down a little and giving you a strong appearance. And so, where once you stood stands a strong and majestic stag, one that would normally emanate a feel of masculinity and power; or rather, you would if you were not the proverbial deer in the headlights.</p>\tIt doesn’t take long after your transformation for you to hear the howls again. This time they are much, much closer, too close, the sound of wood against wood crackling to your right. It is then The Hunter and his “hunting party” crash through the trees onto the path in front of you. The sight before you is an unusual one, on a chariot stands a being, who you can only assume to be The Hunter by your instincts flaring at you to run away from him as soon as you can. The figure appears to be a pitch-black stag, his frame exceedingly muscular and his antlers intricate and large, the texture looking almost like wood in the light. His eyes glow an unnatural yellow, giving you the impression that he is staring into you, and his mouth is contorted into a twisted grin, sowing off exceedingly sharp teeth. Despite this, that isn’t what catches your eye about him. As your gaze lowers you see that his waist seems to merge into a what appears to be a type of plant, with large dark green vines snaking around him and brown spiky roots wriggling below him, as it they yearn to grab something. Lastly, almost toward the center of this creature, where his crotch would have been juts out a large, fat bud, one that appears like it could bloom into a type of flower or fruit.</p>He stands upon an opulent black and gold chariot, slim enough for one man to stand on, the chariot itself being drawn by a large horse like creature. Additionally, he is surrounded by a pack of hounds, hunting dogs that snarl at you, ready to route you for their master. This menagerie being unusual on its own is made more so by what this horse and these dogs actually are. Even at a glance, it is easy to tell that they are not of flesh and blood, instead being composed of what appears to be tightly woven branches and brambles, their bodies covered in sharp thorns. Despite this fact, they do not appear any less alive nor less fearsome because of this, instead they give a greater feeling of danger because of it, their eyes, glowing red pits of light, seem to stare hungrily at you, and even the horse seems to snarl at the prey before it. </p>The Hunter looks down at you and his sharp grin turns into an unsettlingly pleasant smile. He then speaks, his voice deep and booming, adding to his imposing frame, “Well, it looks like my last prey finally escaped, and gave me a new one to play with.” Without any signal, his chariot begins to move up until he is in distance to touch you, all while your body screams to run, but you still mysteriously can’t. One of his vines begins to slowly stroke your cheek as he continues to speak, the feeling of it rubbing against you somehow both comforting and unnerving. “Heh, I sure hope you give a better chase than the last one.” The vine then quickly slithers around your throat tightening just enough to be uncomfortable. “Me and my pets have been getting quite restless with these pathetic hunts.” The vine slithers into your mouth a little as you stare at him, and then it quickly retracts as he leans in. “Well, what are you waiting for? Run.” Then, as if there was an explosion of pent up energy in your legs, you turn around and dash through the trees, your prey instincts taking over.",
                    "trapped_desc": 'This adventurer is a large, snow-white doe with a surprisingly muscular frame. They seem to exude a feeling of femininity and nobility unless scared.',
                    "trapped": 'You have turned into a doe, a majestic beast that shines even under the fear of being hunted.',
                    "descriptionchange": "This adventurer is a large, snow-white doe with a surprisingly muscular frame. They seem to exude a feeling of femininity and nobility unless scared.",
                    "outcomes": [{
                        "parameter": "trapped",
                        "quantity": 22,
                        "change": "set"
                    },{
                        "parameter": "species",
                        "quantity": 64,
                        "change": "set"
                    }]
                }
            }
        },{
            "id": "stone_random",
            "title": "Flee",
            "subtitle": "You are prey. You can’t fight, you can’t escape. All you can do is try and run, try and hide, try and avoid The Hunter and his Hounds. You don’t know what exactly he will do to you when he catches you, and whenever you try to think on it, you get the distinct feeling that you don’t want to find out. And so you try to survive, even as escape never seems to get closer.",
            "trapped": true,
            "type": "statcheck", //or random
            "stat": "stealth",
            "difficulty": 30,
            "requirements": [
                {
                    "parameter": "trapped",
                    "value": 22,
                    "comparison": "equal"
                }
            ],
            "icon": "inanimatefetish",
            "results": {
                "rareSuccess": {
                    "text": "You run and run, escape seemingly outside of your grasp constantly, the edge of the forest never seeming to get closer. Your hope seems to slowly be drained from you as you run, survival becoming the only thing you can grasp on. Day and night, you dodge and hide, each one being a narrow escape, the Hunter clearly playing with you. The times where you can not even hear the hounds approaching being the most fearful times as the sneak up on you, the silence always giving away to a mad dash for your life.</p>\tThis is one of those quiet times. The howls stopped mere moments ago. The closeness of the pack no longer becoming apparent. You hear the snap of a branch to your left and nearly have a heart attack, until you see exactly what, or rather who it was. A human, an unknown, normal looking human male. He stares at you with a sense of wonder and confusion, trying to read the fear on your face. And through that stare, you feel a strange sort of connect, almost as if you willed it, this hunt could be over for you.</p>\tDespite a growing feeling of guilt, a howl rising in the distance forces your decision, a weight seemingly being lifted off of your shoulders, and falling upon his. Your frame starts to shift, going from a quadrupedal form to a more bipedal on, your front hooves becoming more handlike. Instantly you turn and run away, not willing to stay and watch his transformation, knowing the fate that awaits him. The only thing you are able to say being “Sorry.”",
                    "freeTrap": true,
                    "outcomes": [
                        {
                            "parameter": "time",
                            "quantity": 0,
                            "change": "set"
                        }
                    ]
                },
                "success": { 
                    "text": "As you run, you spot what looks like a small cave, rather a little alcove in a boulder that has a tree growing out of it, around it a bunch of brush and vines. As you pass it you then get an idea, one that could be a risk. Hearing the howls far behind you, you decide to see if you could hide the little hole and maybe get some rest, if the venture being a waste of time, you’d run to not waste the distance you have garnered between you and the hunter. </p>\tYou begin to move some of the brush and vines, the act of doing so unsurprisingly hard with opposable thumbs, but with some effort you are able to move some of the brush and vines into a position that could hide the entrance into the rock. Standing back, you look on your handiwork with a strange sense of pride. Despite the restrictions your current feral form had placed on you, you were successful in hiding the alcove. Without knowing it was there, you’d find it hard to think that there was in fact something that wasn’t just hard rock behind the vines and branches. It is then you hear another set of howls, this time much closer, meaning soon you’d have to put the hiding place to the test.</p>\tYou fall asleep quickly, needing to get as much rest as you. It is not long before a cracking noise wakes you, the sound of branches rubbing against each other, the sound of a hound. You open your eyes and stop your breathing, the instincts of a deer taking over. Near frozen, not unlike a statue, you lay there. From the other side of the vines you see the shimmering of shadows. Only one of those strange beasts nearby, but if it found your hiding place you would be trapped. The seconds feel like hours, the creature slowly around the place, it knows that you are nearby but apparently it is not smart enough to figure out where. Then, eventually, you hear the sound of a horn echoing across the forest. The hunter calling back his hounds. The shadow stops, and then disappears, running away to the north.</p>\tAfter the bramble-hound leaves a sense of relief washes over you, and you fall asleep again. Despite sleeping very lightly you would later awake feeling well rested although with the feeling you shouldn’t stay too long in this hiding spot, lest the hounds or the hunter figure it out.",
                    "outcomes": [
                        {
                            "parameter": "time",
                            "quantity": 1,
                            "change": "add"
                        }
                    ]
                },
                "fail": { 
                    "text": "You run and run, as fast as your agile legs can carry you, trying to find some way to escape him. No matter how far you run you can not shake the feeling that he is directly behind you, the howls and barks of his dogs confirming it, their noise never seeming to get farther away. You franticly try and think of some way to lose them and maybe get some rest from the continuous running. </p>\tYou continue to run until you spot what looks like a tiny waterfall that runs into a creek. You find that all the running has made you parched and tired, the endless fear of being caught being the only thing that spurs you forward being the instinctual fear of what could happen to you if you are caught. You quickly ponder whether or not it would be a good idea to stop for a drink, and then decide that you can keep running like this without something giving out. </p>\tYou stop at the edge of the creek, bending down to get a few quick gulps of the water. The water itself appears to be quite clean and clear; tasting it, it has a slight metallic taste and goes down quite easily. You find yourself drinking more of it, the water somehow hitting just the right spot. You eventually stop, remembering the danger you are in, and as you do you realize that almost all of your fatigue had faded away. You’d feel great if you didn’t feel a knot of fear and despair form in the pit of your stomach as a single hound popped out of the trees.</p>\tIt looks at you and it smiles a wide toothy grin; the shape of red thorns in place of teeth giving off a menacing presence. You don’t hear the rest of the hounds, this one being one of the vanguards that split off to follow your scent more directly. You quickly turn away from it to run, and hopefully avoid the beastly creature, but instead it pounces quickly, pinning you to the ground. Its “teeth” right against the back of your neck, the wood-like fangs touching just against your hide. </p>\tYou then feel its fangs slightly press down onto your flesh, just breaking the skin and drawing blood, and then suddenly back away. You hear a deep brittle laugh behind you, the chortle of the creature sounding close to wood rubbing together added to something you can place, the sound unsettling you and making you want to run away more. The bramble hound continues to laugh as it keeps its prey pinned and then it stops laughing, a snarl in its voice as it gets tired of your struggling.</p>\tIt snaps its right near you neck, the noise and feeling loud enough to freeze you in place. You then feel its weight shift on top of you, normally you’d try and look to see what it is doing but the fear of pain overwrites any curiosity you may have. However, the realization of what he’s doing comes in full force when you feel a slick thing prod against your rear. Its member making you think of an oiled-up jumble of vines. </p>Whatever it is, you can feel it roughly trying open your hole and use you for its own pleasure. It rubs against it with no regards for your comfort, thrusting along it. As it rubs, you can feel it seemingly grow more and more, the twists of the coiled vines seemingly getting larger and tighter until finally he is done teasing his cock. With a single crackling growl, he thrusts his way inside, causing you grit your teeth hard.</p>The feeling of it entering you with little lubrication causes a great amount of discomfort despite the unusual waves of pleasure coursing through your body. With this mixed discomfort you realize that struggling right now is useless. You must wait. Bide your time. Find that exact moment in which you can escape. Instead of losing yourself to the pleasure or pain, your mind and body are calm for once, contrasting the near wild plant beast on top of you.</p>And so, you wait, letting the thing on top of you continue to rut itself within you. You then feel the vines seemingly get tense and tighter, a slight pulse rippling around it and within you. You realize that this means he is getting close his climax, whatever that means for you. It is then with a large howl, you feel one final pulse, and then a gush of warm sap like liquid, the orange material feeling sticky and warm in your rear. However, that is when his grip loosens, and you take the chance that was given to you.</p>You instantly buck within its loosened grip, barely breaking free with only negligible scratches. The surprised creature has no time to react before you are back to running in the forest. And so, everything is back to how it was, with the hunters still chasing you down, albeit now with an uncomfortable, sticky feeling in your bum as you run.",
                    "outcomes": []
                },
                "rareFail": { 
                    "text": "You dash through the woods in an attempt to escape. The yapping and snarling of the plant like beasts behind you continue to get closer. The ever-present noise worrying you, scaring you, causing you to mess up. Your hoof snags on a branch and you trip, falling over into the dirt. Before you can stand up the hounds break through the tree line and see you. The pack surrounds you quickly in a circle, trapping you. You get up and try to see if there is any breaks you could dash through to escape but more and more of the bramble hounds appear, plugging up any route to freedom, the circle slowly shrinking as they snap at you. A single loud whistle fortunately, or perhaps unfortunately, stopping their approach before they could tear you apart.</p>\tYou see the chariot, and the hunter that stood upon it, his plant-like visage in the shape of a snarl, his vines practically snapping like whips in the air. He speaks, the anger in his voice quickly apparent and setting your instincts on fire, making you want to escape anywhere, anywhere but here. “You have disappointed me. I had such high hopes that this hunt could be entertaining but you botched it. A pathetic prey such as you doesn’t even deserve to be released back into the population.” </p>Instantly one of those vines snap towards you, wrapping around your throat, the barbs digging into your flesh as it drags you into the air, choking you. You thrash and fight, body gasping for any air as you are lifted towards your aggressor. His maw opens, revealing an almost plant like interior. A sweet-smelling wafting towards your nose, one that would be almost calming if you were not choking to death. And then as quickly as he grabbed you, he drops you inside. His maw closes, ending both the light and your hopes for survival, leaving you in a chamber of sweet-smelling nectar.",
                    "area": "belly",
                    "freeTrap": true,
                    "outcomes": [
                        {
                            "parameter": "time",
                            "quantity": 0,
                            "change": "set"
                        }
                    ]
                }
            }
        },{
            "id": "transfercurse",
            "title": "Transfer the Curse",
            "subtitle": "The only way out of the hunt other than being caught lies within how the hunt had become started for you. As there is always a Hunter, there must always be a Prey.",
            "trapped": true,
            "type": "random",
            "requirements": [
                {
                    "parameter": "time",
                    "value": 2,
                    "comparison": "greater"
                },{
                    "parameter": "trapped",
                    "value": 22,
                    "comparison": "equal"
                }
            ],
            "icon": "tffetish",
            "results": {
                "footstool_1": {
                    "text": "You run and run, escape seemingly outside of your grasp constantly, the edge of the forest never seeming to get closer. Your hope seems to slowly be drained from you as you run, survival becoming the only thing you can grasp on. Day and night, you dodge and hide, each one being a narrow escape, the Hunter clearly playing with you. The times where you can not even hear the hounds approaching being the most fearful times as the sneak up on you, the silence always giving away to a mad dash for your life.</p>\tThis is one of those quiet times. The howls stopped mere moments ago. The closeness of the pack no longer becoming apparent. You hear the snap of a branch to your left and nearly have a heart attack, until you see exactly what, or rather who it was. A human, an unknown, normal looking human male. He stares at you with a sense of wonder and confusion, trying to read the fear on your face. And through that stare, you feel a strange sort of connect, almost as if you willed it, this hunt could be over for you.</p>\tDespite a growing feeling of guilt, a howl rising in the distance forces your decision, a weight seemingly being lifted off of your shoulders, and falling upon his. Your frame starts to shift, going from a quadrupedal form to a more bipedal on, your front hooves becoming more handlike. Instantly you turn and run away, not willing to stay and watch his transformation, knowing the fate that awaits him. The only thing you are able to say being “Sorry.”",
                    "freeTrap": true,
                    "outcomes": [
                        {
                            "parameter": "time",
                            "quantity": 0,
                            "change": "set"
                        }
                    ]
                }
            }
        },{
            "id": "becomebramble",
            "title": "Submit",
            "subtitle": "The hunt has broken you. Maybe if you plead with the Hunter your life will be spared, or perhaps a new one will start…",
            "trapped": true,
            "type": "random",
            "requirements": [
                {
                    "parameter": "trapped",
                    "value": 22,
                    "comparison": "equal"
                },
                {
                    "parameter": "time",
                    "value": 2,
                    "comparison": "greater"
                }
            ],
            "icon": "tffetish",
            "results": {
                "fail": { 
                    "text": "You stop, no longer desiring to continue running and fighting, and so you sit. It doesn’t take long for the pack of hounds to catch up to you, surrounding you. Yet they seem to not be hostile instead sitting down, already somewhat understanding your intentions. The chariot breaks through the line of trees and stops behind the circle, the Hunter staring down at you. Despite your instincts yelling at you to run and flee, you look at him with an almost pleading face. He smiles an unexpectantly warm smile, and wordlessly approaches you. Something about the air seems different with that thorny smile, less fearful, sweet smelling, comfortable.</p>\tHe then speaks, his voice somehow calming, “You have given a satisfactory chase my little prey, it is time for your reward.” One of his vines approaches you and lightly rubs against the side of your muzzle, the thorns not scratching you, instead releasing a sticky yellow sap like substance that smears into your fur. You don’t quite know why but you open your mouth and the vine slowly snakes its way inside. The sap tastes overwhelmingly sweet, as if it was pure sugar. You shudder feeling somewhat strange and different, looking up at the Hunter, or rather the Master.</p>\tThe new name appears in your head immediately. It feels natural. Relaxing. And so, you relax even more and begin to suckle on the vine almost instinctually, the reward being more spurts of that sweet sap. It doesn’t take long for you to feel somewhat strange, your fur itching and feeling very unnatural, almost like an itchy sweater. You start to scratch at it with your front hooves, or rather your front claws. You were so caught up with the vine, you didn’t see when your front feet changed. Instead of hooves, strange leafy paws are there, the ends tipped with wooden claws that scratch your odd itch just right.</p>\tAs you continue to suckle upon that vine the changes that started with your paws begin to spread, painless thorns poking out from your white fur, a green over taking as the fur of your legs begin to recede. They become skinnier, yet somehow stronger and tighter as they start to resemble the stems of roses wrapped around one another. With one paw you start to hang upon that vine, and the Master gives an approving smile as he stares at his newest thrall slowly and willingly lose their past identity. </p>\tYour white-furred flesh gives way to the greens and browns as the changes spread further, red spiky thorns painlessly popping out of the vines. As your torso changes, it begins to resemble more the wrapping brambles of a prickly shrub, twisting and winding about itself, only vaguely resembling that of an animal. Near the center, where your heart was, a glowing red flower begins to bloom the bud growing and then flowering. Through it you feel a strange connection, a comforting one. You are an extension of the Master, just like the vine you are suckling on.</p>\tThe transformation begins to go through your head as you come to this realization. Your antlers becoming wooden and then twisting around, the flash changing like the rest of your body, becoming leaner and more plant like, yet with a rougher appearance. Your Cervidae visage twisting into that of a canid, instinctively snarling a satisfied snarl with your tough wooden teeth. Sap leaking from the sides, partially as excess from the vine and partially as a hungry drool. The inside of your mouth changes to be leafy, excreting this sap. Then your eyes finally change, becoming glowing pits, your vision changing, colors becoming brighter and more saturated. The very heat of things seemingly glowing to you.</p>\tThe last thing to change, as per the control of your master, would be your privates. Whatever you had before, a strange purple flower would begin to grow around it. It would fill and bulge out, becoming a hardened, sap-filled bulb, always on edge and always leaking. Yet despite how needy it feels, you make no movements to touch it, knowing that it is only for the hunt, to slow down that delicious prey.</p>\tEventually, the Master removes his tentacle from our maw with a final spurt. And you stand, joining the rest of the pack, another one of the hounds. He stands proud upon his chariot, sounding his horn to start the hunt yet again. And so, you give chase, following his war path through the hunting grounds until you catch that irresistible scent of the prey. For you are the hunter. And the hunt is everything.",
                    "trapped_desc": "This adventurer is a large, Bramble Hound. Their body resembling thorny vines in the shape of a wolf. Their fangs and claws made of wood, and their privates resembling a flower bud.",
                    "trapped": "This adventurer is a large, Bramble Hound. Their body resembling thorny vines in the shape of a wolf. Their fangs and claws made of wood, and their privates resembling a flower bud.",
                    "descriptionchange": "This adventurer is a large, Bramble Hound. Their body resembling thorny vines in the shape of a wolf. Their fangs and claws made of wood, and their privates resembling a flower bud.",
                    "outcomes": [{
                        "parameter": "trapped",
                        "quantity": 23,
                        "change": "set"
                    },{
                        "parameter": "species",
                        "quantity": 65,
                        "change": "set"
                    },{
                        "parameter": "gender",
                        "quantity": 1,
                        "change": "set"
                    }]
                }
            }
        },{
            "id": "mastershount",
            "trapped": true,
            "title": "The Master’s Hunting Dog",
            "subtitle": "You are the Master’s Hunting dog. Your plant-like appearance strikes fear into the hearts of the deer you chase, as you hunt and route them for your master. And sometimes, when you catch them, he lets you get your reward…",
            "type": "random",
            "requirements": [
                {
                    "parameter": "trapped",
                    "value": 23,
                    "comparison": "equal"
                }
            ],
            "icon": "random",
            "results": {
                "1": {
                    "text": "You moved away from the pack at the orders of the Master, specifically to make sure the prey does not stray too far to the left. You run through the forest making sure to keep a distance from the pack on that off chance, and for your hard work you get a clear reward, the scent of a buck. One running directly towards you, not knowing yet that you are there. You smile, hiding in a nearby bush and wait. It takes barely a minute before a deer breaks the treeline and tries to run past, but not fast enough. You pounce and put your fangs near the back of his neck, your weight pinning him down, and your bud beginning to pulse near his backside. You don’t spend long taking him but the act of doing so feels like a gift given directly from your master. Eventually you cum that sweet-smelling sap, marking him, and then loosening your grip just enough. He fights and breaks free, fleeing from you. But with that sap the pack could smell him from miles away, so you chase at a relaxed pace, eventually rejoining the pack with a sense of satisfaction.",
                    "outcomes": [
                        
                    ]
                },
                "2": {
                    "text": "You hear a rustling to the right of you while you run along and it’s a… squirrel… Squirrel! SQUIRREL! You chase off barking like a normal dog.",
                    "outcomes": [
                        
                    ]
                },
                "3": {
                    "text": "The night is dark and the moon full, as it always is. You and the pack howl, never needing rest. Yet tonight the Master stops the chase, to give you and the rest a little break, instead him being more hands on with the hunt. In the distance you hear the yelp of one of the prey that run around. Eventually he returns with a new packmate, the Master’s tendrils all dripping of sap.",
                    "outcomes": [
                        
                    ]
                },
                "4": {
                    "text": "It has started to rain and it feels so good. Your body absorbs the liquid like any plant would, strength coursing through your body as well as a fullness that you so rarely experience. After the rain dissipates and the sun peaks out again, you and many of your pack members, seem just a little bit bigger and your bodies just a little bit more livelier.",
                    "outcomes": [
                        
                    ]
                },
                "5": {
                    "text": "You and your packmates howl through the trees, striking terror in the prey you chase. The symphony of howls reverberating through all of you, reminding you that you are part of the pack, and that makes you happy.",
                    "outcomes": [
                        
                    ]
                },
                "6": {
                    "text": "You accidentally bruise your flower and for a second, a flash of your old life returns to your mind. You growl, your head hurting, wanting those thoughts to go away. And so, as the flower heals, they do, and with it your mood, as you are happiest as a hound.",
                    "outcomes": [
                        
                    ]
                }
            }
        },{
            "id": "freebramble",
            "title": "Save Me, Mr Bat!",
            "subtitle": "You find yourself alone and away from the pack, face to face with a mysterious bat.",
            "trapped": true,
            "type": "random",
            "requirements": [
                {
                    "parameter": "trapped",
                    "value": 23,
                    "comparison": "equal"
                }
            ],
            "icon": "tffetish",
            "results": {
                "footstool_1": {
                    "text": "You snarl and yap, seeing him as an intruder. If he was prey, the Master would have changed him like all the others. You don’t know how the rest of the pack had not noticed him… Until you realize, in fact, you don’t know how you noticed him. He has no scent, no heat, barely any presence, and this scares your primitive brain. He takes a step forward and you react, like an attack dog, and try to snap at him, aiming for the throat. Except, he dodges. You don’t quite see how, and with a swift movement he plucks the flower in your chest. There’s a sharp pain, but then relief. You remember everything and have control over your mind yet again. You feel a tang of guilt for attacking the one who has saved you. You awkwardly stand on two legs, your plant form evolving to a more bipedal form and look up to thank him, finding him gone.",
                    "freeTrap": true,
                    "outcomes": [
                        
                    ]
                }
            }
        }],
        "npcs": []
    }