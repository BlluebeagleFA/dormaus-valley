var area = {
        "title": "eastwoods_entrance",
        "header": "The Eastwoods",
        "nomap": "You don't know your way around this area yet. You'll have to navigate on foot.",
        "subheader": 'These forests cluster around the mountains to the west of Dormaus Valley. For now you are still only partway into the woods, and there is still light through the sparse trees this close to the road. A well-trodden path leads south, and animals can be heard rustling in the bushes and trees.',
        "events": [
            {
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