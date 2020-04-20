var area = {
        "title": "eastwoods_entrance",
        "header": "The Eastwoods",
        "position": [0.29,0.65],
        "mapId": "worldmap.jpg",
        "subheader": 'These forests cluster around the mountains to the west of Dormaus Valley. For now you are still only partway into the woods, and there is still light through the sparse trees this close to the road. A well-trodden path leads south, and animals can be heard rustling in the bushes and trees.',
        "events": [
            {
                "id": "go_to_bonacieux",
                "title": "The Howl",
                "subtitle": "The soil is heavily pounded and trodden down from the weight of many boots and feet, almost all leading towards the Grease Pit to the south. However, one set of footprints leads elsewhere. Enormous padded wolf pawprints lead off to the west, deeper into the trees where the land begins to rise up against the mountains. They remind you of Bonacieux's enormous paws from when he transformed.",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "pistol",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },{
                        "parameter": "festival_time",
                        "value": 2,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "priesticon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You follow the pawprints, tracking them through the undergrowth by the broken sticks and trampled plants. They lead you up steep hillsides, through bushes that have been pushed aside by the movement of a giant form, and up the sides of slippery muddy creeks where you are only able to climb higher by using the pawprints in the mud as makeshift steps. Finally, you push your way out from some thick, thorny bushes, and stop mere steps away from a plunging drop. You hadn't realised how high you had been climbing following the wolf's tracks. In front of you, the western valleyside drops down to the dense forests and fertile farmlands far below.</p>You turn and look behind you. Dormaus Valley is absurdly deep and you are still only partway up the western side. From here it looks almost like someone scooped an enormous spoon all along the land to dig it out. In the jagged mountain range, there is a gap between two peaks, and on an outcropping facing it, you can see the shape of an enormous feral wolf. It's Bonacieux, in his huge feral form. You climb up the remaining distance, and carefully watch your step next to the dangerous drop. The wolf turns his head to watch you with amusement. Suddenly, you feel your foot slip on the muddy side, and for one terrible lurching moment you see yourself toppling off the side. With a rush of silvery motion, Bonacieux lunges and grabs you gently in his mouth. His hot breath washes over you as he places you down next to him. \"You really must be more careful, you know. It would be quite embarrassing to defeat monstrous chaos creatures only to end up perishing from a slip and fall\", he says. He gives you a smile, his long muzzle gleaming with sharp teeth.</p>His ears perk up, and he turns his head back to the gap between the mountains. You can see his long furry ears twitch and rotate. He gives a little chuckle, and turns back down to you. \"Can you hear it? I suppose not, unless you know how. You may be wondering why I'm not down there, revelling with the big Feast of the Wolf celebration\", he says. He sits down, and his enormous fluffy tail swishes as it rests against you. \"In my community, the Feast is more about spending time with family and friends. We gather together, cook together, and break bread as one pack. The party is less important than the connections between us. That is why I'm up here. With the howl, I never need to be separate from the people that are important to me.\"</p>He raises his head high into the air. His enormous wide throat straight and strong, as he opens his mouth, and lets out a loud, long howl. The sound of it vibrates through you, and echoes out over the mountainside. It flows out from him, carrying with it his desires, dreams and connections. You can feel them, somehow, as it fills your ears and your mind with a sense of him. His strength and determination to protect the people around him. The many years of wandering and struggle that he has been through. His quirks, and desires, and positivity despite everything. When the howl ends, you feel like you understand him on a new and deeper level. His head lowers down again as you look into his deep amber eyes, you feel a flush of deep attraction to the old, strong wolf. He shifts, adjusting himself, and your eye is drawn down between his legs, where his furry grey sheath is slowly revealing a fat, pointed shaft. \"You, too, are important to me. I have found myself dwelling on you ever since we left the catacombs. If you are willing, would you like to howl with me?\", he asks.",
                        "area": "wolf_choice",
                        "outcomes": []
                    }
                }
            },{
                "id": "windy_east",
                "title": "Leave the Woods",
                "subtitle": "The road is within sight, it should be simple.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You climb further up the valley, still far from visible civilization.",
                        "area": "beside_river",
                        "outcomes": []
                    }
                }
            },{
                "id": "windy_south",
                "title": "Travel Deeper",
                "subtitle": "Is that a building to the south?",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You follow a path deeper into the woods, and find a peculiar wooden building, almost like a bar.",
                        "area": "grease_lot",
                        "outcomes": []
                    }
                }
            },{
                "id": "squirrel_tf",
                "title": "Climb Into the Trees",
                "subtitle": 'You can see creatures scurrying and climbing around in the treetops.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 37,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "grizzsex": {
                        "text": "You look up into the treetops, and see creatures moving around between the gaps in the canopy. The leaves rustle and move as they dash around, and judging by the strange, squeaky and chittering language you can hear, it seems they are communicating. You decide to investigate this situation, so you look for whichever tree seems easiest to climb. The obvious choice seems to be a large, tall oak with many hefty branches in easy reach.</p>You grab one of the lower branches and tug on it experimentally. It doesn't shift at all, so you pull yourself up onto it, carefully balance, and reach up for the next one. It seems a little further away than you anticipated, so you have to anchor one of your feet against the trunk to lean up and grab it. As you pull yourself up, you slip and scramble. Your footwear goes flying as you struggle, falling to the ground. Your bare feet clutch against the trunk, and you find yourself holding on firmly, as your toenails stretch and grow, becoming sharper and thicker. With this better grip, you are able to tug yourself up further.</p>You grin proudly, your teeth thickening and growing longer in the front. This is going well! Your clothes do feel bigger than before, but you also feel lighter and more agile. You flex your fingers, as claws start to grow, and then you dig them into the trunk and start to climb up more. Your pants fall to your ankles, and you kick them away with annoyance. As you crawl further up the tree, it seems to just get longer and longer. Your shirt gets caught on a branch, so you squirm and struggle, pulling yourself free of it. Why would you need clothes anyway? You have all this soft, wonderful fur growing all over your small body.</p>You hop up onto a branch, and start to climb along it. You sway and almost lose your balance a few times, but your tailbone seems to be stretching and growing, and as it develops a thick bushy covering of fur, you find it easier to balance. You hop to the next tree along, and keep climbing. Your face pushes forward, growing a muzzle, while your ears become fuzzy and tufted. Finally, you reach the treetop, and push your head through the leaves.</p>You see, to your surprise, a huge and heavy-set squirrel guy looking down at you with a grin. You try to speak, but before you can say anything, he suddenly shoves you, hard. You stumble and fall, but as you tumble, you instinctively spread your arms and legs. You feel loose, soft webbing forming between your limbs, which catches the air and forms a sort of kite. You glide clumsily back down to the ground, and gather up your now much-larger belongings.</p>What rude squirrels! You should come back some time and show them who's REALLY in charge around here. After all, you've always been a handsome and appealing squirrel and they should respect that.",
                        "descriptionchange": "This adventurer is a short, furry flying squirrel. They have a long bushy tail and webbing at their limbs, which lets them glide slightly in the air.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 37,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "meek_vore",
                "title": "Snake Encounter (Contributed by Meek)",
                "subtitle": "You travel along the southern path between The Grease Pit and main road until you encounter a large python hanging from a tree. You cannot see its entire body, but from the thickness and length of the beast, you imagine it well-fed. You do your best to steer clear, but it calls in a sibilant tone: “Hello, there. What brings you to my woods?”",
                "type": "random",
                "requirements": [
                    
                ],
                "icon": "vorefetish",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You’re unsure if the snake is less dangerous with the power of speech. Not wanting to be rude, you politely tell it you’re just passing through and try to keep walking. “Oh? What’s the rush?” It says, pulling itself in your way. “I don’t get to leave this place often, you know. I need to rely on travelers for news...” A loop of coils falls behind you. You are surrounded by the enormous snake.</p></p>Sensing doom, you try to run. However, a fat rope of snake trips you to the dirt. Luckily, the fall is cushioned by more coils to hug you possessively. “Well, aren’t you rude!” The snake says in mock-offense. You struggle against his body wrapping around you, but your strength can’t compare to it.</p></p>In seconds, you’re trapped from ankle to neck in sections of coils. You cannot move your arms or do anything but whimper, as the weight of the snake alone is enough to render you powerless. The snake drops any pretense of being polite, tasting your scent with its flickering tongue. “Well, if you’re going to act like a meal...”</p></p>The snake lowers its face to meet yours, and you’re acutely aware you can’t turn your head away. You know what it wants to do. You squeeze your eyes shut before the snake can look in them, which makes it scoff. “Oh, please. Make this fun for both of us, will you?” The coil around your neck strangles you. You can’t even wheeze.</p></p>“Eyes on me. Don’t make me snap your neck,” the snake chides you casually. You know looking is a terrible idea, but an instant death is worse. Anything to extend your life span, right? Maybe someone could rescue you.</p></p>You resign yourself and open your eyes, greeted by the most beautiful colors you’ve ever seen. Indescribable and numerous, ever-changing like a god’s kaleidoscope. The snake’s eyes are swirling magnificently, beaming these colors directly into your mind.</p></p>You don’t stand a chance. Your mind flutters away, leaving nothing but the colors and the snake and all the good feelings that come with it. Happy, obedient, satisfied, blissful. You are enthralled and smile to show it.</p></p>“Good,” the snake says, stroking over your peaceful face. “I should eat you... Make you part of something greater... Me.” It continues to squeeze and knead your body in its coils. Then it relaxes, somewhat, loosening its grip on you. You can’t think right now, but instinctively, you take a deep breath of air the moment its possible.</p></p>The snake seems satisfied to hold you in place simply with its weight, too heavy for someone in your state to force away. It nibbles at your neck until planting its lips against yours.</p></p>You’ve never kissed a snake before. It’s surprisingly soft and smooth. Your spiraling eyes reflect your bliss from smooching the charming snake, but its mouth stretches wider. You press your face against the snake’s mouth to kiss, and it keeps opening wider, until your whole head is inside.</p></p>Warm and wet, and getting tighter. Your silly mindless head, your limp shoulders, tired arms and torso--bit by bit you’re gobbled up by the snake, until just your feet poke out its mouth. Your entire being barely makes a bump in the massive python, even if you wiggle.</p>When you finally disappear completely into your new forever home, nobody could ever tell you were here at all.",
                        "area": "belly",
                        "outcomes": [
                        ]
                    }
                }
            }
        ],
        "npcs": [
            
        ]
    }