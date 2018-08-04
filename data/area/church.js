var area = {
        "title": "church",
        "position": [0.77,0.54],
        "header": "Temple of the First Dragon",
        "subheader": 'The church is quiet today. Rows of pews face towards an altar, behind which, a serene statue of a goddess looks with benevolence upon the congregation. The coloured glass in the windows causes the light here to shine ethereally.',
        "events": [
            {
                "id": "priestquest1",
                "title": "A Job Offer",
                "subtitle": 'Bonacieux is lighting the candles when he notices you. He stops, and turns to you. "Ah, just the adventurer I was looking for. I have heard that you are becoming quite the accomplished digger. That is exactly what I need right now", he says.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "priest_quest",
                        "value": 0,
                        "comparison": "equal" //default greater
                    },{
                        "parameter": "digger",
                        "value": 2,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "priesticong",
                "results": {
                    "grizzsex": {
                        "text": "You tell the wolf that you are interested in what he has to say. He leads you outside, and points across the river, to the crumbling castle in the distance. \"There is trouble brewing, more than I can handle by myself. Are you aware of the catacombs beneath this village? They connect to the ruins of the castle, and recently I have discovered signs that suggest an accursed one is down there, growing stronger. If I am correct, and this is not dealt with, it could threaten the entire town. I warn you, the catacombs are likely to be the most dangerous place you have ever explored. There is a strong risk of death in this mission, and I cannot guarantee your safety\", he says.</p>The old wolf\'s face is surprisingly serious, with none of the vaguely-amused naughtiness you normally associate with him. You tell him you might be interested, but that you\'ll need more information. He nods, and takes you back into the church. You follow him into a room in the back, where he unrolls a large package of black felt, to reveal a small arsenal of weapons. Crossbows, gleaming silver knives, ropes and tackle, and small crystal phials that glow faintly. \"I am taking this very seriously. I have dealt with accursed before, and they are unpredictable and deadly. I will bring supplies, but I would advise you to fetch your own, along with any weapons you can muster. First, we will descend into the catacombs using an entrance in one of the crypts. From there, we must navigate the ancient passageways, and try to track the accursed. Once we identify it, we put it down. If you are willing, then meet me in the graveyard. I cannot promise you a reward that makes up for the danger involved, but I will reimburse you as best I am able\", he says.</p>He gives you a satchel of coins, and instructs you to use this to supplement your supplies. He then begins polishing a long saber, and you leave him to his preparations.</p>This mission sounds extremely serious. You suspect that it will require all of your abilities and a great deal of preparation if you wish to be successful.",
                        "outcomes": [
                            {
                                "parameter": "priest_quest",
                                "quantity": 1,
                                "change": "set"
                            },{
                                "parameter": "muscat_1",
                                "quantity": 100,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "church_random",
                "title": "Wait in the Pews",
                "subtitle": "It's very quiet in here. Seems like a good place to relax and contemplate.",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "Wolf Gets His Goat": {
                        "text": 'You hear a thumping and growling in the back of the church, and wander over to take a closer look. The confessional booth is rocking back and forth, and the growling and panting sounds are coming from within. You take a peek inside, and see a goat adventurer, his pants around his ankles and his furry rear shoved up against the side of the booth. On the other side, the wolf priest is ramming his cock into a hole between the pews, and slamming and thrusting forcefully into the blushing, bleating goat\'s ass. </p>The goat stammers something about being sorry for being such a bad bad guy, and the wolf priest growls with a feral, predatory intensity that makes you shiver. "Take my cock, you little slut, and I\'ll forgive you once your belly is full of cum." he says, his voice so rough and crude that you can\'t believe it\'s the same friendly, fatherly priest you met! The wolf snarls and drool oozes from his long fanged muzzle, and you can tell by the goat\'s bleats and shudders that his ass is being filled with hot cum. The goat starts to try to pull free, but Bonacieux rams forward so hard that he nearly crushes the wooden partition. </p>The goat yells in sudden pain as the wolf\'s swollen knot pops into his ass, tying him there until the priest is satisfied. His glowing yellow eyes turn to you, and he chuckles. "Shouldn\'t be spying, boy. You will need to be forgiven next!" he growls, and you back off, not sure if you\'re aroused or terrified.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "Wolf Sermon": {
                        "text": 'You decide to attend one of Bonacieux\'s sermons, curious what the people of this town think about religion. Animals of all races slowly filter into the church and take seats in the pews. It seems to mostly be visitors, but you notice a surprising amount declined to wear pants to this event. After a short delay, Bonacieux walks out and moves up to the lectern, where he starts to talk about peace, forgiveness, and the loving embrace of the goddess of magic. It\'s all fairly standard stuff, but every now and then, the priest grips the side of the lectern with one hand, and growls in a very deep, suggestive way. </p>Towards the end, he starts to pant and moan through every other sentence, and you notice some of the congregation are stroking themselves quietly at their seats. You get curious, and carefully move up to the front-most row of pews, at the edge where you can just barely see past the lectern that the wolf is reading from. It looks like the wolf isn\'t alone up there. Kneeling between his legs and mostly hidden by the lectern is a ram, who\'s mouth is stretched open by an enormous wolf cock, while the wolf thrusts constantly into his face. Every now and then, Bonacieux reaches down, grabs the ram\'s horns, and yanks him forward to get a better grip as he deep-throats the wooly male. </p>Bonacieux ends his lecture with a rousing speech about treating people like they deserve, during which he pulls his cock out from the sheep\'s face, and howls as he sprays his wool down with cum, leaving the dizzy ram coated in dripping, sticky wolf jizz. Bonacieux then shoves him into the lectern and slides a panel down to conceal him, before putting his cock away and helping people leave the church. While he\'s distracted, you walk over to the lectern, intending to ask the ram if he needs any help. When he hears you talking, however, he baas and grunts. "Get lost! I\'m not trading places as his fucktoy with you! I love it down here!" he says. You shrug, and leave him be.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "Wolf Cockring": {
                        "text": 'You hear a crashing sound from the back rooms of the church, and a growl of what sounds like anger. You push open a door and enter, wanting to check if something is wrong. Inside, you discover a long, thin weasel, with his hand inside a cabinet filled with valuable plates and gold items. Bonacieux clearly discovered him mid-theft, because he just slammed the door closed on the weasel\'s hand. </p>"Stealing from here? Unforgivable. You need a special punishment, my son", he says in a deep and rumbling growl. He picks up the weasel as easily as if he were a toy, then sits down in a large armchair, before opening his robe and lowering the black pants he wears beneath it. His long cock stands firm and erect from his grey fur, and the weasel yelps as the wolf starts to squeeze and stretch him. The weasel\'s body seems to stretch out like taffee as Bonacieux pulls him wider and wider, making him grow thinner, yet also somehow shrink. Soon, the wolf is holding a pencil-thin weasel as long as his arm, who is still wriggling and squeaking desperately. He winks at you. </p>"A little trick I learned back in my younger days", he explains. He smooths his moustache for a moment, then starts to wrap the weasel around the base of his cock in a spiral. As he does, the weasel\'s struggling and wiggling becomes slower, as his body starts to stiffen and harden. His brown fur begins to twinkle and gleam, as his flesh becomes smooth and firm, then takes on the gleaming burnished colour of gold. When the wolf finishes wrapping him around, the weasel\'s head is simply a golden lump with the carved image of a shocked weasel on it. It makes a very shiny and attractive cock ring on the older lupine\'s shaft. </p>He closes his robe again, hiding the trapped criminal, and gives you a wink. "Such is the justice of the goddess" he says, and you remind yourself never to piss off the big wolf.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "Confession": {
                        "text": 'In this serene and quiet environment, you do start to feel a little guilty for your behaviour. Surely it couldn\'t hurt to try confessing your fears and anxieties? You walk into the confessional booth, and sit down. </p>A few moments later, the wolf priest Bonacieux enters the other side and closes the door. You can see his face through the grill. His long, furry snout is streaked with grey in the black, and his fur sticks out at the sides and chin in the shape of a soft and fluffy moustache, contrasting with the thinner fur atop his head. </p>"What troubles you, my child?" he says, his voice deep, soothing and fatherly. As you begin to tell him your worries, he nods, strokes his chin, and lowers his hands somewhere. You don\'t notice his motions, too focused on your confession. Finally, you are done, and you look over to the wolf, expecting some form of advice. </p>Instead, a small panel in the wooden partition opens, one that you hadn\'t seen before, and your eyes open wide as a long, fat cock is pressed through it. The wolf grins at you, his massive teeth gleaming in the dark of the booth. </p>"It sounds like you have been very naughty indeed, my child. I insist you redeem yourself, by debasing yourself." His voice is so deep and dominant that you can barely stammer out a response before you find yourself getting down and taking hold of the wolf\'s heavy cock. </p>His scent is masculine and virile, and you close your eyes and take him into your mouth. Your head slides forwards and backwards on the priest\'s lupine cock, your jaw aching to contain the massive manhood. He growls and urges you on as you suck. </p>"Yes, my child." "Faster, young one." "That\'s it, keep going, obey me." It doesn\'t take long before his voice descends into rough, rumbling growls, until finally he thrusts forward and howls. His cum explodes into your throat, so thick and so much that it spills from your cheeks and lips. </p>Once you have swallowed as much as you can, he slowly pulls away, and smiles at you. </p>"You are forgiven, my child. Return for confession whenever you wish.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "enter_shrine",
                "title": "Enter a Small Shrine",
                "subtitle": "A narrow staircase leads down to a tiny room where you can pray for a new beginning.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You follow a tiny spiral staircase down into the darkness, where you find a tiny, strange shrine.",
                        "area": "resetshrine",
                        "outcomes": []
                    }
                }
            }
        ],
        "npcs": [
            {
                "id": "bonacieux",
                "name": "Bonacieux",
                "description": "Bonacieux is a tall and imposing grey wolf, with a small black moustache and goatee. He wears priest robes, and his bare paws stick out from the bottom of them.",
                "icon": "priesticon",
                "dialogue": [
                    {
                        "input": "What is your name?",
                        "output": '"I am Bonacieux, my child. I forgive you if you struggle to pronounce it."'
                    },
                    {
                        "input": 'What is your job?',
                        "output": '"I service to the spiritual needs of my children in Dormaus. They come to me when they feel the need to atone for their sins. There are a lot of sins in this town."'
                    },
                    {
                        "input": 'What\'s it like being a wolf?',
                        "output": '"We wolves are very mighty and dangerous beasts. We must always be aware of our power over the weaker creatures, and do what we can to respect them."'
                    },
                    {
                        "input": 'Can you turn me into a wolf?',
                        "output": '"Hmm, an impertinent question. I am not in the habit of passing on the body of a wolf to anyone who wanders into my temple. There are certain trials you must pass. Perhaps I will discuss them with you at a later date."'
                    },
                    {
                        "input": 'Could you tell me about the myths and legends here?',
                        "output": '"Ah, it pleases me to know you are interested in the lore of this land. Once, long ago, there was nothing but blackness. Then, the great dragon weaved his threads together and there were the words. From these words, our entire world was created. At first, there were the primordial dragons, and they created us, the people of this world. Then, they slumbered. However, they say there remains a dark dragon of insects and bugs, who works to destroy the world to this day."'
                    },
                    {
                        "input": 'What is the dragon of bugs?',
                        "output": '"The dark dragon lurks beneath the world, always working to destroy the land and return it to the dark nothingness. Whenever he does, the great dragon needs to bring the world back together again. They are engaged in an eternal struggle."'
                    },
                    {
                        "input": 'Who was the first dragon?',
                        "output": '"The great dragon is responsible for recreating the world each time it falls apart. On the day he loses interest in fixing the world, we will all fall into nothing. They say the praise and attention of celestial otherworldly beings gives him the power he uses to keep the world together. He even changes the world, when we are not aware of it."'
                    },
                    {
                        "input": 'What does it mean when you say the first dragon changes the world?',
                        "output": '"They say that the great dragon sometimes shifts the very land itself. Of course, we here on the world could not see it happening, for he freezes and changes time when he does it. Only an extraplanar being would even know things had changed."'
                    },
                    {
                        "input": 'What\'s that weird little shrine for?',
                        "output": '"That was here when I took over as pastor for this church. I believe it is a shrine to an old goddess, one who has control over memories and history."'
                    },
                    {
                        "input": 'Can I see your cock?',
                        "output": '"Now now, what a naughty young beast you are. I insist you come to confession at once and think long and hard about your behaviour."'
                    },
                    {
                        "input": 'Can I see your paws?',
                        "output": '"What an odd query, young one." The old grey wolf lifts one foot from under his robe, revealing a wide clawed paw with thick and powerful soles. "Perhaps you need to come to confession more often."'
                    }
                ]
            }
        ]
    }