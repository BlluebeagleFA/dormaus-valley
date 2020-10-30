var area = {
        "title": "underground_ruins",
        "header": "Underground Ruins",
        "subheader": "These broken, tangled passageways are like a maze. In the darkness beneath the village, with the dripping of distant water as the only sound, your mind starts playing tricks on you. You see shadows and creatures at the corners of your vision, getting closer, moving when you don't look at them.",
        "events": [
            {
                "id": "delvedeeper",
                "title": "Delve deeper still",
                "subtitle": "Someone is waiting for you down here, you are sure of it. It feels like when you walk somewhere in a dream, and you remember being there many times before, yet when you wake you realise that you never knew such a place. That same false nostalgia draws you forward now.",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "asong",
                        "value": 2,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "garethflower",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You shake your head and try to focus. While dangers do lurk in these dark catacombs, the first such danger that you must overcome is in your own mind. With a force of will, you focus into the darkness, and stride forward. You note down every passageway, gradually mapping out the twisting paths and what few landmarks exist.</p>It takes hours, and at times the feeling of being watched, or being followed, becomes almost too much to bear. Nonetheless, you remain steadfast, and finally it seems like you have the rough outlines of a functional map of this place.</p>You feel like you should return back now, but something catches your attention. A scent, of sorts. It smells like faint flowers, but mossier and more damp. The ever-present sound of water is a little louder too. You follow it cautiously.</p></p>As much as you try to focus, the oppressive darkness of the tunnels wears away at your sanity. You can feel things staring at you just beyond the reach of your torchlight. When you take corners, you swear that for a brief moment you can see the tails of creatures slithering out of sight, or a brief flash of clawed hands at the edges of the walls. Your skin crawls and you find yourself trembling despite yourself.</p>You make another turn, and find yourself unexpectedly back at a familiar crossing. You must have lost focus, because your rough attempts to map the ruins look completely contradictory now. A bubbling feeling of panic wells up at the back of your mind.</p>They're going to eat me.</p>You turn suddenly and look around. Was that your thought just now? Your hand is shaking.</p>Help me.</p>Your thoughts don't sound like your own voice. You lean against the wall, and your hand leaves black streaks where it touches the stone. When you look again, they're gone.</p>You need to get out of here. You painstakingly retrace your steps, and breathe a sigh of relief when you make it back to familiar territory.",
                        "outcomes": []
                    },
                    "bestsuccess": { //success and fail, rare success, rare fail, or random
                        "text": "The winding passages seem to be endless. You can distantly make out the edges of this massive ruin, yet somehow no matter how far you walk, you never seem to get any closer. Pathways lead to steps that sink down into the water, yet you are sure you passed by them only moments before. Intersections you marked to remember now have fewer or more paths than before.</p>Everything keeps shifting, yet you never see or hear it change. Your vision starts to blur. Something creeps at the back of your mind, a clinging, rasping sensation. You stumble, your foot slipping on wet tile – and you fall into the inky black waters beneath.</p></p>You don't know how much longer it is when you awaken. You can hear someone humming. It's a slow, melancholy melody. You push yourself up, and look around. This isn't the same part of the ruins as before. You're under a beam of sun that shines down from above, and the ground here has lush grass that gleams in the light. A small yellow butterfly floats past, and rests for a moment on your hand. You look at your hand, and you see a furry chunky hoof-hand. Your lungs ache, and your heartbeat is pounding in your head. You struggle to stand, and stumble, but someone catches you and lifts you gently to your feet. \"Steady now. You are safe here\", they say. It's a deep and kind voice.</p></p>You look up to see a tall boar, his white fur gleaming in the light. He holds himself with regal bearing, and his huge hands are gentle as he guides you to a chair and pours you some water into a small china cup. When you sip it, it smells like daffodils. It takes you a little while to fully recover, and in that time you examine yourself to find that you are also a boar, albeit a smaller one. Your fur is a clean, gleaming white, but instead of trotter feet you have soft and furry paws. \"I apologise for the changes. When I was alive I was a remarkable healer, but the grave takes many tolls on a person\", the boar says.</p>You look at him closer, and realise that he seems fade slightly every now and then. You can see the outline of the walls behind him very faintly when he's at his most faded. </p>\"My name is Gareth, the first and last ruler of the Kingdom of Dormaus\", he says.",
                        "descriptionchange": "You are a chubby boar with soft and thick white fur. Your tusks are short and stubby, and you have a pair of squishy furry footpaws instead of the usual boar trotters.",
                        "outcomes": [{
                            "parameter": "asong",
                            "quantity": 3,
                            "change": "set"
                        },{
                            "parameter": "species",
                            "quantity": 55,
                            "change": "set"
                        }]
                    }
                }
            },{
                "id": "flower_1",
                "title": "A flower for the lost",
                "subtitle": "Gareth seems to spend a lot of time tending to flowers. Maybe he would appreciate the one you are carrying?",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "asong",
                        "value": 3,
                        "comparison": "equal" //default greater
                    },
                    {
                        "parameter": "gareth_connection",
                        "value": 0,
                        "comparison": "equal" //default greater
                    },
                    {
                        "parameter": "lotus_1",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "gareth_b",
                "results": {
                    "bestsuccess": { //success and fail, rare success, rare fail, or random
                        "text": "You pull out the white flower, slightly wilted, and present it to Gareth. He smiles radiantly as his enormous handpaws take it from you, and he holds it up to the light for a closer look. \"Widow's tears, how elegant! Oh, witch's lotus, you say? Perhaps the name has changed over the centuries. In my time there was a legend that they used to grow in places of great tragedy, blossoming only from ground that was drenched with tears. A little melancholy, but a lovely plant. Thank you so much for giving it to me\", he says. He takes the flower and gently snips small sections of the stem, which he then places in pots of soil that are resting on the remains of stone tables. As he pots the cuttings, he hums that same slow song that you remember waking up to when he first found you. You ask him where the song comes from, and he takes a moment before he realises he was humming. \"Oh, my apologies. I get distracted sometimes. It's the Waltz de Muscard, I suppose you could say it is the theme of my royal lineage. They played it at my wedding, you know. I suppose this little flower brought up some old memories\", he says.</p></p>His eyes shine for a moment, and he smiles at you. Still humming the song, he bows to you deeply, then takes your hand in his. In his enormous paw, your smaller hand is dwarfed by comparison. He walks you out to the space behind his workshop, where a crumbling empty space with the remains of a vaulted ceiling may once have been a beautiful ballroom. He takes a step backwards, and then to the side, and spins you carefully by holding your arm and turning it above your head. You slowly get the hang of the steps, and there, in the remains of his ancient castle, he guides you through a waltz. As you dance, you hum along with his music, following to his footsteps and forgetting the crumbling and decayed surroundings. The king's movements are refined and skillful, as smooth as silk and yet completely silent, as his ghostly feet hover above the ground.</p>As his leads you to and fro, turning and spinning, he speaks aloud. \"Courtly elegance is the first lesson a royal must learn\", he says. He turns you again and pulls you against his chest. \"I conquered many of the petty kingdoms of the valley with force, but many more with diplomacy and grace. Never wield a sword if a pen will suffice.\"</p></p>He draws you forward into a beam of light that shines down from the rocky ceiling above. \"This is how I met my wife. She was a mighty bear warrior, you know. Even with my mighty armies, taking down her bear clan seemed impossible. They would strike at us and back away, whittling away at us but never staying long enough for retaliation. Much like a dance\", he says. His eyes are misty as he smiles. \"So I invited her to my palace for peace negotiations. She walked into my throne room in full armor, covered in blood and spikes, and challenged me right there. So I challenged her to a dance, and while we danced, we talked. Her desires for her people to be free and wild, and my desires for a valley where people would not need to squabble in petty wars, and have meaningless death. I don't know if that is where she fell for me, but I know that dance was when I fell in love with her\", he says.</p>He ends the dance by pulling you into his arms, where you press against his wide chest and look up into his eyes. For a moment, in the bright beam of light, he no longer looks pale and ghostly, and the room around you shines, every tapestry its once vibrant colours, every wall gleaming gold. Then you blink, the ancient glory fades, and everything is normal once more. </p>\"Thank you for visiting me. You are under no obligation to entertain this tired old boar\", he says, before kissing your cheek and escorting you back to his workshop.",
                        "outcomes": [{
                            "parameter": "gareth_connection",
                            "quantity": 1,
                            "change": "set"
                        },{
                            "parameter": "lotus_1",
                            "quantity": 1,
                            "change": "sub"
                        }]
                    }
                }
            },{
                "id": "flower_2",
                "title": "A flower for the brave",
                "subtitle": "Gareth seems to spend a lot of time tending to flowers. Maybe he would appreciate the one you are carrying?",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "gareth_connection",
                        "value": 1,
                        "comparison": "equal" //default greater
                    },
                    {
                        "parameter": "lotus_2",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "gareth_b",
                "results": {
                    "bestsuccess": { //success and fail, rare success, rare fail, or random
                        "text": "You take the fluffy flower from your pack, and hand it over to Gareth. He lifts it up and turns it in the light, making the petals shine and flow. \"Wonderful! A fire aloe, I haven't seen one in such a long time. They are native to the southern continent. It grows in dry and barren places, as if to say that life always finds a way\", he says. He takes one of the thick leaves from the base of the flower, and peels it off carefully before placing it into a clay pot. He then tucks the tip of the flower into his tunic, the red standing out vibrantly against his white clothes.</p></p>\"This calls for something a little more exciting, I think\", he says. His tusks gleam as he grins, and he takes your hand before walking you across a partially-submerged platform. Though your feet leave ripples in the water, he passes through it without any trace at all. At the other side, a few steps lead up to platform with a corner of a stone room still attached to it. On one of the remaining walls there is a rack of rusty weaponry. Gareth picks up two wooden poles, and tosses one to you. He then holds his own out in front of him, with his other hand behind his back, and bows. You copy his movements, and when you straighten up, he lunges forward with his pole. You step to the side quickly, but he turns his lunge into a swing that taps you gently on the chest. He chuckles. \"Here, stand like so\", he says, before carefully holding your sides with his enormous white paws. He adjusts your stance, with one foot in front of the other, and then has you lift your pole a little higher. \"Now, when I attack like so, turn your sword like this, for a circular parry\", he says. He attacks again, more slowly, and you turn your pole so that it catches his one and knocks it aside with a circular motion. You then quickly lunge back, and he steps aside expertly. \"Now you are getting it! En garde!\" he cries, before redoubling his attack.</p></p>The two of you swing, parry, and riposte, circling eachother on the field. Each time he lands his weapon on you, he explains how best you should counter his actions, and over time, you gradually become more and more adept. He grits his teeth, grinning as he lunges and strikes. \"The second lesson! For when affairs of the court do not suffice, you must be ruthless!\", he says. His sword moves like a snake, twisting around and down to your leg, where he raps your knee sharply.</p>\"This is a lesson my father taught me in many ways, not all of them intentional. As a child, I would sneak into the woods play with swords like this, with another boy around my age. A boy not from Dormaus, but from Riverford. Our petty kingdoms were, technically, enemies, but in those moments we knew eachother only as friends\", he says.</p>His attacks and movements lead you down along the wet ground, and you almost slip as your foot touches a hidden submerged edge. You jump back, onto a stepping stone where some masonry emerges from the flooded water. He nods proudly at your grace, and leaps onto an adjacent stone.</p>\"My father of course, eventually discovered this. The shame of his heir cavorting with an enemy, and even worse, with a commoner of no title at all. He took me into the throne room, with his retinue watching with their dry, cold little faces. There, he told me that I had disgraced our family name, that from now on I must remember what was about to happen, because honour must always be preserved, with no consideration for the weak feelings of a child\", he says.</p>Both of you balance on opposite rocks, watching eachother for an opening. \"He cut off my friend's head in front of me. It was that day that changed my life, because when he left me alone in that room with the body, I swore I would make a valley where there was no difference between one kingdom and another. Where a prince of Dormaus and an angler's son from Riverford were the same\", he says. His gaze slips aside for just a moment.</p></p>You lunge, your weapon like a dart. It strikes pure and true, and your \"sword\" taps against the flower on his pocket. He grinds, his eyes gleaming. In a rush of motion, he lifts you up and slaps you on the back with great force. \"An excellent display! You have learned the second lesson well!\" he says.</p>He walks you back to the workshop, giving you tips and pointers on your behaviour and fighting style. His gaze lingers on you as you talk, and his eyes are warm.</p>\"My flower collection is nearly complete, I believe. I have every one that I could ever want...bar, perhaps, one\", he says.</p>You ask him which flower he is missing, and he strokes his fingers across a lily. It takes him a while to reply, as he looks down at the petals with a distant gaze. \"It's not something you could find now. To be honest, I am not sure I would want to see it. It was the favourite flower of my wife...and my daughter. The muscard rose, the symbol I used for the nation I spread through this valley.\"</p>He turns the flower he's working on aside, and brushes his forehead before turning to you. \"It was a new breed of rose, and the only seeds were in this castle when it was destroyed. It was lost along with my family, and my kingdom. I apologise for the dreary story\", he says. He walks over to you and squeezes your shoulder.</p>\"It is fine, really. Forget I said anything. My collection is complete, and beautiful, thanks to you\", he says.",
                        "outcomes": [{
                            "parameter": "gareth_connection",
                            "quantity": 2,
                            "change": "set"
                        },{
                            "parameter": "lotus_2",
                            "quantity": 1,
                            "change": "sub"
                        }]
                    }
                }
            },{
                "id": "garethhistory",
                "title": "Ask Gareth about his kingdom",
                "subtitle": "To unify the entire valley from one tiny province is remarkable. How did he manage it?",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "gareth_connection",
                        "value": 2,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "gareth_b",
                "results": {
                    "thing": {
                        "html": "data/active/GarethHistory.html",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "garethhistory2",
                "title": "Ask Gareth for the truth",
                "subtitle": "What is he hiding?",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "gareth_connection",
                        "value": 3,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "gareth_b",
                "results": {
                    "thing": {
                        "html": "data/active/GarethPower.html",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "lastflower",
                "title": "A flower for the future",
                "subtitle": "Now that you know, the resemblance is there. In Gareth's soft, kind eyes, you see an echo of Titan. You have to tell him.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "gareth_connection",
                        "value": 3,
                        "comparison": "equal" //default greater
                    },{
                        "parameter": "rose_muscat",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "gareth_b",
                "results": {
                    "thing": {
                        "html": "data/active/LastFlower.html",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "becomeroyal",
                "title": "Request Healing",
                "subtitle": "Gareth is looking with frustration at some of his flowers, which appear to have wilted. He seems happy to be distracted when you walk up to talk with him.",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 55,
                        "comparison": "nequal" //default greater
                    },
                    {
                        "parameter": "gareth_connection",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "bestsuccess": { //success and fail, rare success, rare fail, or random
                        "text": "\"Oh, I would be more than happy to heal you, my friend. It is one of the few things I'm still quite good at!\", he says proudly. He scratches at the thick, soft fluffy beard under his chin for a moment.</p>\"Though, there is one slightly embarrassing requirement. We may need to be...naked. I hope that's not an issue...?\", he says.</p>Considering the slight blush on his partially-transparent cheeks, and the awkward nervousness with which he says it, you are fairly sure this isn't just a come-on. You reassure him that you don't mind, and he lets out a relieved sigh.</p>\"Back in my youth I could have healed even mortal wounds with just the palms on my hands touching their skin, but in this weakened state some rather more surface area is required\", he explains as he leads you down along a narrow path beside his flower garden. It leads to a crumbled structure, the door long-since collapsed, but a new entrance formed where the corner wall has fallen open. Within, some creaky wooden boards surround a square pool of milky water.</p>\"The old palace bath - I've tried my best to keep it stocked with herbs and in one piece, but there's only so much I can do\", he says. He leans down and presses his hands to the water, and you feel a slow blossom of heat as he tries to magically warm it. Noticing that he's struggling, you gently lay one of your hands on his shoulder. He jumps in surprise as plumes of flame erupt from his hands, and the bath is soon bubbling and steaming.</p>\"My goodness! That was unexpected. You are quite the accomplished medium, aren't you? I would have snapped you up to be an advisor back in my day\", he says.</p>He closes his eyes and waves his hand across his chest. The illusory form of his royal regalia fades away like smoke, leaving him naked. His whole body is snowy white all over, with a belly that is round and heavy, but which looks firm and tough under the thick fuzz. His limbs are stocky and thick, indicating muscles beneath the layer of blubber and fur. A thick trail of soft fluffy fuzz runs down from his neck to his crotch in a trail, and you cannot help but glance at his manhood. His cock is soft and thick, hanging down from under a fluffy forest of fur above a pair of plump white balls. He coughs politely when he notices you staring, and you adjust your gaze.</p>You strip down too, while Gareth steps into the water and takes a seat. No ripples emerge from the bath as he steps into it, and you wonder if he is able to feel the warmth. Once you are naked, you step into the water, and feel the heat and herbal bath soothe your aches and pains.</p>Gareth reaches up gently, and pulls you against him, your back against his chest. His thick, furry thighs press gently on the outside of your legs, and he wraps his arms around your front. You can't help but think about his soft package against your lower back, and you shiver ticklishly as you feel his fluffy moustache touch against your bare neck. His snout rests gently under your chin at the side, while his soft fingers stroke and touch your skin.</p>You feel a warm, comforting sensation flowing through you. Not just from the bath, but also like its flowing up from deep inside you, a feeling of happiness, contentment. The warmth of the sun on a lazy summer's day. The smell of a freshly-baked pie. The feeling of holding hands with someone who cares about you. Your pains start to fade away, your body feeling bright and healthy and brimming with life.</p>Gradually, you feel your skin beginning to tingle. Soft, fluffy brown fur starts to sprout from your skin, while your belly gently begins to inflate and bulge out. It feels heavy and warm, like a pillow hanging from your front, as it becomes a small round furry gut.</p>Your ears stretch out slightly, and flop over, becoming furry and pointed. Your jaw bulges forward, forming a snout, while your nose flattens and spreads wider. You feel your nostrils thickening as a piggish boar snout forms on your face. The lower teeth on your shifted jaw ache for a moment, before curving and bulging out as stubby tusks.</p>Your cheeks become rounder, while your limbs thicken. A short, bristly tail forms at your rear while your butt inflates and widens beneath its layer of boar fur. You wiggle your toes, feeling them thicken and become soft, your feet getting wider to support your increased weight.</p>Finally, you let out a cute, involuntary boar snort, and Gareth chuckles slightly, his rumbling deep voice making you shiver slightly. He pats your newly-grown stomach, and stands up. As he steps out of the water, his clothing returns, and he gives you an odd look. There's a happy smile, but with a hint of sadness in his eyes.</p>You climb out of the water with a small amount of clumsiness, as you adjust to your altered form. A quick shake helps get most of the water out of your fur, and you gather up your clothes.</p>\"I apologise again for the side effect, but it does look good on you, if you don't mind me saying so. You have my eyes\", he says. He coughs, and glances away, before guiding you back to the flower garden. On the walk back, he insists on holding your shoulder and guiding you carefully along the path.</p>When you prepare to leave, he insists on making you check you have everything, and tells you to wrap up warm. He seems rather reluctant to see you go.",
                        "descriptionchange": "You are a chubby boar with soft and thick white fur. Your tusks are short and stubby, and you have a pair of squishy furry footpaws instead of the usual boar trotters.",
                        "outcomes": [{
                            "parameter": "species",
                            "quantity": 55,
                            "change": "set"
                        }]
                    }
                }
            }
        ],
        "npcs": [
            {
                "id": "gareth",
                "name": "King Gareth",
                "requirements": [
                    {
                        "parameter": "asong",
                        "value": 3,
                        "comparison": "equal" //default greater
                    }
                ],
                "description": "Gareth is a tall white boar-like creature, wearing an elegant tunic with a golden crest on the breast pocket. He has a warm face surrounded by a short white beard, and his dark eyes are filled with kindness. Mane-like white fur surrounds his head, and he is sometimes faintly translucent.",
                "icon": "gareth_b",
                "dialogue": [
                    {
                        "input": "What is your name?",
                        "output": '"I am Gareth, the former king of Dormaus Kingdom. It\'s a delight to meet a new face. As you can imagine, I don\'t receive guests very often."'
                    },
                    {
                        "input": 'What is your job?',
                        "output": '"I was the king of this land, a very long time ago. My kingdom stretched from the northern mountains to the southernmost tip of the valley. Though I suppose it might not be a kingdom any longer. I\'m afraid I left things in a rather turbulent state. These days I am but a lingering memory, dwelling on the past."'
                    },
                    {
                        "input": 'Goodbye.',
                        "output": "Do feel free to come visit any time. I shall make some more tea for you. It gives me something to do. I would be glad to hear how things are going up above, if you have any news. Just follow the pillars with my sigil in them and you should have no problem coming and going."
                    },
                    {
                        "input": 'How did you save me?',
                        "output": "I fished you out when you fell into the water. It was fortunate that you drifted over this way, I doubt I could have dragged you here on my own. For all the magic that soaks these ruins, I am still sorely limited by this phantom form.</p>You had inhaled a great deal of water, and you were almost as icy cold as I myself. I am thankful that my healing abilities are less hampered in death than my physical ones are. I was descended from a long line of powerful healers, you know. The boar form I left you in was an accident though. I think in my haste to heal you, I accidentally imbued you with a little of my bloodline. My family were the only boars I know of with paws. A little relic of some rather unsavory royal inbreeding, I'm afraid. It's just the way things used to be done, you know."
                    },
                    {
                        "input": 'Did you grow these flowers?',
                        "output": "Not all of these flowers are mine. When the castle fell, a large part of the grounds fell down with it. I'm not sure how the flowers continue to grow with such dim light and cold air, but they persist nonetheless. I try to consider it an inspiration for me, that I too should do my best to linger despite all natural reason.</p>When I was alive I was never much of a one for flowers. They were my wife's secret passion, you know. She was not much of a one for feminine things, but flowers were the one exception. I've had a long time to learn to appreciate their value, down here."
                    },
                    {
                        "input": 'How did you die?',
                        "output": "Well now, that's a rather personal question. Perhaps I can tell you the details another time, when we get to know one another better. In brief, the castle was attacked by a powerful entity, and I went down along with most of my army. My biggest regret was that so many of my citizens were killed, too. They were not complicit in my many sins; I hope some of them managed to evacuate."
                    },
                    {
                        "input": 'Would you like to hear about how the village is doing?',
                        "output": "You tell the king about the village above, and its current political system.</p>\"I don't get out much, you could say! I am glad to hear that people still choose to live near here. It was quite a lovely and fertile part of the valley. That mayor sounds like a bit of a bad apple though; he should relax more, I have no intention of rising up and reclaiming my throne. It is not like I have any heirs who could press my claims.\""
                    }
                ]
            }
        ]
    }