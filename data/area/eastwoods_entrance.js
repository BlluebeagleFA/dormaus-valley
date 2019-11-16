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
            }
        ],
        "npcs": [
            
        ]
    }