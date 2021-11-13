{
        "title": "ping_farmland",
        "header": "Farmland Expanse",
        "mapId": "dormausvillage.jpg",
        "position": [-1,-1],
        "subheader": "Before you lies a stone paved path, that cuts through the hills and valley. Along the path, there is a large expanse of farmland, with various crops and ranches dotted through the land. All of them looks relatively well maintained, but you spot no persons or animals of any kind as you pass through, making you wonder where the people went. One end of the expanse begins to fade into a forest, the trees tightly together, and the other ends abruptly at a large stone wall that rises to the sky like a monolith.",
        "events": [{
            "id": "gotopatron",
            "title": "Back into the Forest",
            "subtitle": "Toward the western edge of the farmland, the path begins to lead into a forest. You could follow it to get back into the heart of the forest or further to continue back to the cave.",
            "type": "random", //or random
            "requirements": [
                
            ],
            "icon": "navigateicon",
            "results": {
                "success": { 
                    "text": "The walk along the path is surprisingly uneventful, the forest being quiet except for the occasional rustle of leaves or chirp of a bird. After a bit of walking, you find yourself back at the glade that was near the cavern entrance.",
                    "area": "ping_forest",
                    "outcomes": []
                }
            }
        },{
            "id": "cow",
            "title": "The Bell",
            "subtitle": "As you walk along the path, a breeze begins to pick up, adding sound to the before eerily quiet walk. The breeze is comfortable and warm as it blows through. With it however comes a strange sound you couldn’t quite make out. Do you try to concentrate and listen for it?",
            "type": "random",
            "requirements": [
                {
                    "parameter": "species",
                    "value": 61,
                    "comparison": "nequal" //default greater
                }
            ],
            "icon": "tffetish",
            "results": {
                "grizzsex": {
                    "text": "\"Ring!\" You hear a bell in the distance, somewhere toward one of the farms on the outside of the village. You can't see the source of it, but the sound carries loud and clear. \"Ring!\" You hear it again, you begin to wonder who's ringing it, so you walk toward that farm. As you get closer it gets louder, clearer. \"Ring, Ring, Ring!\" It doesn't take long to reach the farmhouse, but what you find gives a sense of disappointment. There's no one here ringing a bell, instead there's just a small bell tied to a post, ringing with every light gust of wind. You decide not to stay long and go on your way, but the thought is interrupted by a loud, \"Ring!\"</p>You stop, what… what were you doing? You were going to… “Ring!” Listen to the Bell. That’s right, you were gonna listen to the pretty Bell. You turn back around and look at it, noticing its details. It is a shiny black, as if it was covered in a thin layer of rubber but every time the wind causes the little rod inside to hit the sides it rings a clear metallic sound. “Ring” You stare at the Bell blankly, a little drool dripping off the side of your mouth. “Ring!” You can’t look away, you need to stand there and listen, need to… to… mo… moo? “Ring!” Your thoughts start to degrade with each ring, eventually become one simple thing. Moo.</p>Your thoughts are so simple and focused, you don’t even notice when a little drop of black liquid falls from the Bell onto the ground. It begins to slither toward you, getting larger as it moves, until it is a tiny pool of black rubber situated in front of your feet. “Ring!” At that sound, it the lurches up, starting to cover the lower half of your legs. The rubber is cool against your skin but oddly comfortable, but even as the strange substance begins to move on you, your focus remains on the Bell. “Ring!” The rubber moves up your legs, coating them slowly. Where your feet once were, large rubbery hooves stand. It moves up further, coating your legs in smooth black rubber, a little bit of a shine reflecting off of them.</p>Ring!” The rubber moves up farther, travelling up past your waist, as it does so it pauses a little. Then from behind a bit of rubber shoots out, quickly forming a tail with a tiny, white tuff of rubbery hair at the end of it. In the front however, a glob of rubber begins to form in front of your crotch. It shapes into a large inflated bulge, if you touched it would ignite a needy feeling as if you edged yourself despite no dick or vagina being visibly there anymore. “Ring!” Then rubber starts moving up again, faster than before. In no time at all, it covers your chest, flattening it out into a shiny, smooth rubber skin.</p>“Ring!” The rubber moves down your arms and hands, your fingers proceeding to be tipped off with thick hoof like endings. The rubber then travels back up your already coated arms, the feeling of it rubbing against causing you to shudder a little, a small “Moo…” escaping your mouth, but your attention remains entirely on the Bell. “Ring!” The rubber climbs past your shoulders and then begins to envelope your head. “Ring!” It covers your head completely. Suddenly you feel a little distraught, you can’t see the Bell, and your ears are covered, can you even hea- “Ring!” Moo…  The rubber continues its work and begins to shape your head into a bovine shape with a single white spot around your left eye breaking up the black, your ears stretch out a little becoming floppy cow ears, the soft nubs of horns form on the top of your head, and a long cow tongue and flat teeth form in your mouth. The rubber is done, most of its mass having been used to form the Cow drone that stands in front of the Bell, but the remainder of it does one last thing, forming itself into a tag that hangs off of your ear, with a single white zero on it.</p>The Bell rings again, “Ring!” You are instantly filled with an urge to paw at your null bulge and moo loudly as if confirming your submission, each touch making you more and more needy. For a little bit the wind picks up. “Ring, Ring, Ring, Ring, Ring!” This cycle of the Bell ringing, and you pawing continues for what seems to be hours. Eventually, the breeze that was causing the Bell to ring subsides, and you stand there in complete silence. Without the Bell ringing, your thoughts slowly begin to return to you, causing you to fully realize what happened. After a while, you tear yourself away from staring at the Bell and move on, with most of your faculties returned except for the occasional Moo consuming your thoughts.",
                    "descriptionchange": "This adventurer is a rubber drone in the shape of a small anthro cow. Despite any gender they may have, they can be seen mindlessly rubbing a bulge in between their legs.",
                    "outcomes": [
                        {
                            "parameter": "species",
                            "quantity": 61,
                            "change": "set"
                        }
                    ]
                }
            }
        },{
            "id": "boar",
            "title": "Pig’s-Berry Jam",
            "subtitle": "While walking along the path that cuts through the expanse of farms and land, you spot a tiny stand propped up on the edge of the path. Approaching it, you notice that it is made of wood and has a sign along the bottom of it. There appears to be no person or any other thing of note around. Reading the sign, it says in large, red colored letters, “Pig’s Berry Jam! The most delicious jam you will ever taste! A blending of Strawberries, Apples, and my patented Secret Recipe will make you want to Pig Out! Feel free to take one for free!” Next to the lettering is the illustration of a pig holding up an empty jar, with red jam smeared along his face. You are about to leave, thinking that the jars were probably taken long before you walked by or possibly that the stand may must be abandoned when you notice something in the corner of your eye. Where you previously noticed nothing, a jar of rose read jam sits in the center, a label on the front of it depicted the pig from before smiling an exaggerated smile. You feel like you couldn’t have missed it, but there it sits, almost beckoning you to try it. Do you taste the mysterious food?",
            "type": "random",
            "requirements": [
                {
                    "parameter": "species",
                    "value": 62,
                    "comparison": "nequal" //default greater
                }
            ],
            "icon": "tffetish",
            "results": {
                "grizzsex": {
                    "text": "You take the jar in hand and begin to open it. At first, there is a little resistance, the cap of the jar sealed tightly to the glass, but then it all gives away and the top goes off with a loud, audible pop. You tilt the jar a little, scooping a bit of the red jam with your fingers and then put those two fingers in your mouth. At first you don’t really taste anything, the jam having a very awkward lack of taste, making you think of the odd idea of it basically being water with texture. But soon after a very sweet yet tart taste begins to flood your mouth. You swallow it and soon the aftertaste fades.</p>\tDespite the flavor of the jam being nothing special, except for that weird moment of nothing, you feel like you need more. Your stomach rumbles a bit as you look at the jar in your hands and you begin to think, ‘A bit more couldn’t hurt…’ You begin to scoop more onto your fingers, tasting it like before. You are so enthralled by tasting the weird jam, you don’t even notice when a thin tail with a tuft of fur at the end shoots out of your backside. You begin to find that just a little at a time is not enough, and you begin to shovel what you can into your mouth, any semblance of civility associated with the act of eating being lost immediately.</p>\tAs this happens, you begin to change a bit more. Your waistline begins to expand, pounds of fat and muscle being added to your weight fattening out your rear. This also applies to your belly, which becomes significantly rounders and softer, all this fat hiding a layer of thickening muscle. While this happens, dark brown hair begins to sprout out around your body, slowly covering you in a coarse pelt. You however, still don’t notice, perhaps don’t care about your changing form as you begin to feel hungrier and hungrier, the ravenous feeling consuming you. Each time you shovel the red jam into your maw, you feel less and less satisfied, the need to eat increasing.</p>\tYou then get an idea, and so you raise the jar up, tilting it so it can fall directly into your maw. As you do so, you slightly notice that that something is different, you hand covered in brown hair and the fingernails black and thick; however, you find that it doesn’t matter, instead it is your stomach that rules your mind. The jam then falls toward you, most of it ending up in your mouth, but some of it splashing around the front of your face. The changes as this point begin to speed up considerable, your appearance finally matching your piggish actions. Your head shifts as the jam hits it, your nose starting to resemble a large pig’s snout, and your ears become large and round, ending in a point. Lastly, as the last of the jam falls out of the jar, large round yet sharp tusks begin to jut out of the sides of your mouth. </p>\tYou sit there for a few moments, finally realizing what happened. You don’t dwell on those thoughts for long though as your stomach begins to rumble hungrily. And so, you stand, throwing the emptied jar to the wayside, and leave to find more food to hopefully sate your insatiable needs.",
                    "descriptionchange": "This adventurer is a large boar with dark brown fur and large white tusks. Their extremely fat belly jiggles a bit as they walk, and they always appear to be hungry.",
                    "outcomes": [
                        {
                            "parameter": "species",
                            "quantity": 62,
                            "change": "set"
                        }
                    ]
                }
            }
        },{
            "id": "mansion",
            "title": "The Abandoned Mansion",
            "subtitle": "As you travel along the dirt road you notice clouds begin to form in the sky, dark and overcast. It looks like if you don’t get running soon, you’ll be caught in a sudden downpour. As you get ready to dash, you notice something on your right that you didn’t quite notice before. There’s a small paved path to what looks like a dilapidated plantation manor, the windows boarded up and porch crumbling, but it could give temporary shelter. However, you could ignore this place and outrun the storm.",
            "type": "random",
            "requirements": [
                
            ],
            "icon": "default",
            "results": {
                "grizzsex": {
                    "text": "You decide to run toward the manor, the second you take your first step a drop of water hitting your head. Then another, then another, and finally a downpour. By the time you run into the manor, you are soaking wet. The sound of rain outside being overwhelming, only being broken up by the flash of lightning and the roar of thunder. Outside, the storm made everything dark as if it wasn’t midday anymore, and instead the middle of the night. And so, you are trapped inside while the storm rages on.</p>\tYou take a look around your surroundings, being in a what must have been a grand entrance once. A crystalline chandelier scattered onto the floor, and a main stairwell going up into the dark. On the left and right, through the dim flashes of light, you could see a living room and a dining room respectably. The furniture in each covered in tarps and dust, having been long abandoned. You decide to go toward the left, getting a better view of the room. In the center is a tarp covered couch, facing a grate covered fireplace, a visible lock preventing you from opening it and starting a fire to warm up the room. Under another tarp there seems to be a tall object, possibly a grandfather clock of some sort. And lastly, above the fireplace sat a torn painting, the figure it once held being nigh unrecognizable. And so, you decide to sit down on the couch for a little bit, hoping the storm will subside soon. </p>\tDONG! DONG! DONG! A loud noise wakes you up with a jolt. You open your eyes, rubbing your drowsy head and completely unsure about when you actually fell asleep. Upon doing so, you notice your surroundings have changed completely. There was light, coming from the fireplace, which was no longer locked shut. The couch you were on no longer was covered, instead being a bright red, its fabric surprisingly soft and comfortable. Behind you the clock, which must have made the noise, ticks away, its black hand moving along a porcelain white face held up by smooth wood. The painting, which was formerly ripped, now showed a regal horse in a suit holding a glass of wine. Everything looked new and fancy. Even the walls, their faded gray now a vibrant wallpaper. Instead of the window being boarded up, shiny metal bars crossed along it preventing you from opening it, but even so it is clear the storm still is raging outside. </p>\tYou then soon realize you are not alone in this strangely rejuvenated house when you hear a crash upstairs. Against your better reason you decide to investigate it, walking out into entrance, seeing the staircase in its grandeur as well as a full crystalline chandelier hanging from the ceiling, light reflecting in flashes with each flash of lightning in the distance. And then walking up the red carpeted stairs, noting the golden shine in the handles, you notice a door halfway open right in the center, a door that conspicuously wasn’t there prior. </p>\tYou reach the top of the stairs and peer inside the half-ajar doorway, spotting a lavish bedroom. Or it would have been lavish if it wasn’t for the bed itself, contrasting with the fine wooden dressers and mirrors. The mattress sunken in, the post fallen down, the wood splintering and rotting, it appeared as decrepit as the house was before. Then there was a flash of something. A watch swinging from a hand, and then everything appeared normal again, the strange sight being forgotten from your mind. The bed looked lavish, comfortable, inviting. Ignoring the small thud of something being moved you approach it and lay down, the mattress so soft you feel like you are sinking into it.</p>\tAnd then a sensation, something grabbing your leg. Then something else grabbing you arm. You can’t see it, but something has its grip around you. Yet, somehow it is not alarming, instead normal and comforting. The oddities of the scenario seemed more than normal to you, and so you just relaxed in their grip. More and more, the feeling of hands gripping comes over you. More around your arms, around your legs, rubbing your feet, the sides of your chest, even in your mouth, the feeling of fingers going in and out. Prodding. Feeling. These invisible hands lift you up as they continue to explore your body. And despite any feelings you would have had about it before, you feel bliss. Every touch, every squeeze, every prod excites you.</p>\tThe hands stopped the illusion, the scenery no longer appearing new, but you don’t even notice nor care. All that matters is their touch. The ghostly hands continuing to tease you well past the storm’s ending, well past the moment you fall asleep from exhaustion. Eventually you wake up in a destroyed bedroom with no recollection of the past events, leaving the not so abandoned manor behind for someone else to stumble into.",
                    "outcomes": [
                        
                    ]
                }
            }
        }],
        "npcs": []
    }