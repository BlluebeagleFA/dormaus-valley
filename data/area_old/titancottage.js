{
        "title": "titancottage",
        "header": "Titan's Cottage",
        "position": [0.55,0.02],
        "mapId": "worldmap.jpg",
        "subheader": "A narrow babbling brook crosses through this small clearing, running past a small cottage and back into the woods. Tall trees surround the clearing in a blanket of green. The cottage itself is a rickety but homely dwelling, built up against the side of a massive tree. The roof is thatched with straw, and a creaky wooden waterwheel attached to one wall turns along with the flowing water. A stone path leads up to the cottage door, and vibrant flowers of many colours blossom in the gardens around the building.",
        "events": [
            {
                "id": "chillout",
                "title": "Relax With Titan",
                "subtitle": "The boar is delighted to have you stay a little longer. He eagerly brews up a pot of flower tea and asks you all about the world outside.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "dracolich_connection",
                        "value": 1,
                        "comparison": "nequal" //default greater
                    },
                    {
                        "parameter": "titan_connection",
                        "value": 4,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "titan_b",
                "results": {
                    "pumpkin_1": {
                        "text": "You take a seat at Titan's small table, on one of his creaky wooden chairs. He hums to himself happily as he brews up a pot of tea from a handful of vivid yellow flowers and a pinch of herbs.</p>He pours it out into two small cups, and sits down next to you. You pick up your cup and smell the fresh, fragrant scent. It's summery and bright, and makes you feel quite relaxed.</p>\"So, um, you're an adventurer right? I've only ever heard stories about people like you. What's it like out there? What kind of adventures have you been on?\", he asks.</p>You tell him about the village just south of the forest, and the many odd people who live there. Your friends and acquaintances, the sinister mayor, craft Flute, stoic Grizz. He listens rapt to every word, as fascinated by your descriptions of houses and streets as he is about your talk of your adventurous encounters and numerous transformative shenanigans.</p>He, by comparison, has much fewer to talk about, something he seems self-conscious of. When you ask what he's seen, he can only describe the small amount of these woods he's ever been to, and the many animals of the forest. He prefers to turn the topic back to you and your life, which seems astonishing and wondrous to him. As you tell him about your travels, he sets out small snacks, scones and little cakes and biscuits, and he listens with rapt attention to every word you say. He even scoots his chair a little closer to you during the particularly exciting parts.</p>The sun slowly sets as you talk, and the pot of tea is rapidly emptied out. You are just finishing describing your latest adventures, when you feel Titan lean against your shoulder. You turn to see his eyes closed, and his chest gently rising up and down as he snores quietly.</p>His fur is soft, and his round cheeks are pillowy against your side. You gently lower him down and pull yourself out from under him, then grab a blanket to drape over him before making your way out for the night.",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "relaxasboar",
                "title": "Relax and Kick Up Your Feet",
                "subtitle": 'Titan seems really happy to have you around - almost unusually so. He keeps offering you little cakes and hinting that you might like to stay the night. Could he be hitting on you? You could try "getting more comfortable".',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 55,
                        "comparison": "equal" //default greater
                    },
                    {
                        "parameter": "dracolich_connection",
                        "value": 1,
                        "comparison": "nequal" //default greater
                    },
                    {
                        "parameter": "titan_connection",
                        "value": 4,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "default",
                "results": {
                    "mayor_intern": {
                        "text": "After what feels like the fiftieth jam tart that Titan insists you have, you are starting to feel a little bit stuffed, even in your current stout boar body. Titan keeps looking at you and humming to himself happily.</p>He starts stoking the little brick fireplace at the side of his cottage, and soon it begins to grow warm in the cottage, even as the dusk draws in outside.</p>\"It's really fun hearing about all your adventures. You live such an exciting life!\", he says. He places a kettle of water atop the fireplace, and then fetches you another pillow.</p></p>\"You can stay here for the night if you want, you know\", he says bashfully. \"It would save you walking through that forest in the dark, and I'd feel a lot safer with another boar - I mean, with an adventurer at home.\"</p>Ok, that has definitely got to be a sign. You give him a flirty grin, and yawn. \"Maybe you're right\", you say, as you lazily kick off your shoes. Your squishy, warm footpaws feel great close to the fire.</p>What you weren't expecting is for Titan to suddenly start choking and spluttering on his cup of tea. The little porcelain cup he was drinking from clatters on the floor, barely avoiding breaking.</p>\"Um, your - you have -\", he says. He looks around nervously. \"Oh gosh, look at the time! Maybe you should be getting back out after all. You have so many cool adventures to go on, and everything...\", he says. He starts bustling around the house, gathering up teacakes and scones, and wraps them up in a bindle before pushing it into your hands.</p>You are gently but firmly ushered out the door, barely giving you time to grab your shoes. \"Please come visit again soon!\", he says. \"I really like having you over!\"</p>The door closes firmly in front of you. That was unexpected. This form seems to have quite the effect on some people.",
                        "area": "northwoods",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "potion",
                "title": "Try A Potion",
                "subtitle": "Titan has a variety of herbs brewing at all times, and a number of his concoctions already set out for testing.",
                "type": "random",
                "requirements": [
                    
                ],
                "icon": "tffetish",
                "results": {
                    "thing": {
                        "html": "data/active/ShrinkingPotion.html",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "feedpie",
                "title": "Bring Titan a Pie",
                "subtitle": "You have a pumpkin pie, and pie is often more enjoyable with friends. Titan probably doesn't get to experience food outside his forest often.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "pie_1",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "dracolich_connection",
                        "value": 1,
                        "comparison": "nequal" //default greater
                    },
                    {
                        "parameter": "titan_connection",
                        "value": 4,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "pie_1",
                "results": {
                    "pumpkin_1": {
                        "text": "You knock on the door of Titan's little cottage, and he cheerfully calls out for you to enter. When you walk in, you see him grinding up some herbs in a mortar and pestle. \"Hi there!\", he says. \"I'm just working on some new medicines. Oh my, what's that amazing smell?\"</p>You grin, and reveal the freshly-baked pie that you have brought. He almost starts salivating on the spot. \"That looks amazing! Oh my goodness, let me get a knife, we can split it!\", he says. You place the pie on the table, and he fetches a large serving knife from his kitchenette. He also grabs one of the paper bags on his shelf and brings them over.</p>\"I'm sure it won't be as nice as what you brought, but I've been working on some snacks of my own from what I've been foraging. I hope you like them!\", he says.</p>As he tucks in eagerly to the pumpkin pie, you take a look in the bag. They appear to be very small round biscuits, with a pleasing sort of savoury scent to them. You take one out and give it a taste. It's pretty good!</p>The strange, meaty little dried snacks are oddly addictive. You find yourself picking at them more and more, tossing them into your mouth and starting to neglect your share of the pie. Your skin feels tingly and strange, and you shake your head as a wave of dizziness washes over you.</p>As you reach for more of the snacks, you notice your sleeve is draping over your wrist. The table in front of you seems higher than before, too, and your legs are dangling down from your chair without touching the ground. When you shake your sleeves to free your hands, you see that your thumbs have started to shrink down against your wrists, and your palms are swelling and bulging up into pads. Small black claws grow from the tips of your fingers, as fur starts to sprout down your arms and across your belly. It's brown at your hands, russet orange all up your arms, and a soft peach colour on your belly.</p>Oddly, these changes don't seem all that interesting compared to the tasty food which is now moving out of your reach. You struggle and squirm in your clothes, freeing yourself from the oversized fabric, and hop up onto the table on all fours. Your spine stretches out behind you, growing out and developing a thick brush of fur. It sways happily behind you, and you chomp down eagerly on the remaining scattered snacks.</p>Titan jumps and looks at you, surprised, as you leap onto the table. He quickly stands up and looks at the paper bag he got the treats from, and makes an embarrassed yelp. \"Oh no! That's the wrong, bag, this is the mix I made for the foxes in the forest! I wanted to help them have healthy glossy fur...\", he mumbles.</p>He looks at you nervously, as your face pushes forward into a pointed muzzle, and your ears stretch up into large triangles above your head. Slowly and carefully, he moves his soft hand to your head, and begins to stroke you. His pudgy fingers slide along your back, and he rubs between your ears. You wave your tail happily, and look up at him. The cute boar gave you food! That makes him nice. You jump forward onto his lap, and he smiles nervously.</p>As he continues to pet you, you curl up on his lap. \"This should only last a week or so, I think...I'll take care of you until then, I promise\", he says. You yawn, and give him a \"more treats please\" look. He pops one of the snacks into your mouth. \"Ok, a little bit longer than a week. I gotta stop giving you these snacks…\"</p>After you fall asleep, he lifts you up and carefully places you on a cushion next to his workstation. He then hesitantly takes a blue ribbon, and ties it around your neck. His cheeks flush with a blush and a little smile as he leaves you to sleep.",
                        "trapped_desc": "You are Titan's pet fox. He is a very loving master, who gives you regular pets and rubs, though he is a bit too generous with the fox snacks.",
                        "trapped": "You are Titan's pet fox. He is a very loving master, who gives you regular pets and rubs, though he is a bit too generous with the fox snacks.",
                        "outcomes": [
                            {
                                "parameter": "pie_1",
                                "quantity": 1,
                                "change": "sub"
                            },
                            {
                                "parameter": "trapped",
                                "quantity": 12,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "feedicecream",
                "title": "Bring Titan Ice Cream",
                "subtitle": "Carrying it all this distance without it melting took some rather fiddly magic, but you made it work. He's sure to appreciate such an exotic treat.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "pie_2",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "titan_connection",
                        "value": 1,
                        "comparison": "equal" //default greater
                    },{
                        "parameter": "dracolich_connection",
                        "value": 1,
                        "comparison": "nequal" //default greater
                    },
                    {
                        "parameter": "titan_connection",
                        "value": 4,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "pie_1",
                "results": {
                    "pumpkin_1": {
                        "text": "You give the ice cream a once-over with a simple frost enchantment before walking up to Titan's cottage. Once you got into port at Otterton it was much less painful to keep it frozen, as the magic-rich air of the valley makes conjuring so much easier.</p>You want it to be a surprise, so you don't announce yourself as you come up the path and push the door open.</p>As the door creaks forward, you are greeted by a rather surprising sight. Titan has laid out three wooden chairs at his table. There's a teapot and teacups, on top of frilly doiles. Sitting on two of the chairs are two large plush toys. One bear, and one rabbit, both clearly home made, with rough stitching and simple button eyes.</p>He pours out tea in front of the rabbit. \"Here you go, Ms Bunnypeets, your jasmine...tea...\", he says, as he catches sight of you.</p>His chubby cheeks turn pink with a blush as he places the teapot down. \"Ah! Oh, um, I was, just...playing...\", he says. He covers his face with his hands, and squirms with embarrassment. You cough, and gently place the ice cream down on the table. After a moment he peeks through his fingers, then puts his hands down and gasps. \"What is that?\", he says. You tell him it's a dessert, and he takes a small spoon and tries a little. Then he wiggles and almost hops in the air. \"It's so good! I've never had anything like this before!\", he yelps.</p>The embarrassment is forgotten, as you both sit down and share the ice cream together. Titan spills a little on his chin, and you wipe it with your finger for him. He blushes a little, and glances away nervously. \"I will just get us some tea. I know just the kind; I have some berry tea I've been working on that's perfect after that lovely meal\", he says.</p>When he comes back, he has a small white teapot, and pours you out some hot tea. It's a deep, crimson colour, with a fresh scent of summer and wine. It's very pleasant. Titan looks like he wants to say something, though. You let him work up the courage, and sip your tea as he nervously hems and haws a little while. Then he speaks.</p>\"Um, so my tea party, well it's just something I like to do when I'm alone, you know? It makes this place less lonely. I'm not...super good with talking to people. I like having you here, but it can make me a bit nervous, still. I never know exactly what sort of thing to say. Do you think, maybe, if you were interested...\", he says, and coughs. He squints his eyes. \"Well, I liked it when you were my pet...you were really easy to talk to. Do you think, maybe, you'd like to try being my toy at a tea party for a while? So I can get used to it?\"</p>He lifts up a potion bottle, which sparkles with playful colours. \"Just, if you ever feel like it, of course\", he says. You pick up the bottle and look at the swirling colour, and tell him you'll definitely consider it. His nervous smile is quite adorable.",
                        "outcomes": [
                            {
                                "parameter": "pie_2",
                                "quantity": 1,
                                "change": "sub"
                            },
                            {
                                "parameter": "titan_connection",
                                "quantity": 2,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "becomepuppet",
                "title": "Become a Toy",
                "subtitle": "You can tell Titan that now would be a good time to try his latest potion. The boar is always eager to have you around.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "titan_connection",
                        "value": 2,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "titan_b",
                "results": {
                    "pumpkin_1": {
                        "text": "When you tell Titan you've set some time aside to try his potion, he almost squeals with glee. Then he composes himself. \"I will treat you like such a good toy, I promise!\", he says happily. You take a seat on the side of his bed and watch him setting up his tea party. He places a cloth on the table, doilies, a vase with flowers, the whole deal. His two  plushies are seated on their chairs, and he pulls out the remaining chair for you to sit down.</p>You take a seat, and he pours the potion into a teacup for you. He then lifts it up to your mouth. \"Oh, um, just relax and think toy thoughts\", he says. You let your hands droop at your sides, and lean back in your chair as he places the cup to your lips, and tips it.</p>The potion is thick and oddly textured as it goes down your throat, but it doesn't really taste of anything much. It slips down into your stomach, and makes you feel a little drowsy and sluggish. Your arms droop further, feeling heavy and stiff. Your legs grow heavy too, as your body slowly starts to become still. Your breathing slows, and stops completely. You stare forward, calm and relaxed, as your skin starts to tingle.</p>There is an odd, sort of dry feeling, as your body tightens and grows firm. Your skin takes on a rough, lined texture, as your limbs start to reshape. Becoming more boxy, with visible edges and corners. Your colours start to fade, becoming a simple, natural brown all over.</p>The tightness grows strongest at your joints, where your flesh pinches in and deforms, before breaking off into wooden balls and hinge joints. The wood texture spreading over your chest, down to your fingers, each joint becoming a carved wooden segment. Your insides feel heavy and firm for a moment, as the solid wood consumes your organs and turns your chest and limbs into solid blocks of pine.</p>You lose all control of your limbs bit by bit as each one turns to wood, until finally the wooden texture spreads up your neck, and over your head. Your hair receding, eyes closing over, mouth sealing up. Until finally the tight feeling squeezes down on your head, sinking into your mind and turning your skull into a solid block of wood. Your mouth clanks open, as a simple dummy-style wooden mouth.</p>Titan looks at you in surprise. \"It looks like the toy potion affects everyone differently...\", he says. \"But you look so boring as just a plain wooden puppet. I'll fix you up!\", he says. He leaves the cottage for a moment, and you are content to simply sit there, mindless and silent. You are just a puppet, you have no thoughts or desires except what your owner tells you that you have.</p>He returns with some small tubs of paint, and a large brush. He lies you down on the table and pulls your clothes off from your plain wooden body, before gently stroking the brush up your chest. It tingles and tickles a little, but feels pleasurable too. He covers you in black paint, then begins painting on details. Stripes down your back and on your face, white \"fur\" on your chest, and a big smiling face.</p></p>Soon, you are a happy, smiling badger puppet. He dresses you up again, and slides a cup of tea in front of you. For the rest of the night, you are Titan's silent, smiling best friend. It feels so easy to just not think, not move. Let your owner move you, think for you. When he lifts your arm and puts the empty teacup to your face, you feel like you are lifting your arm, drinking the tea. When he bobs your head up and down, and says your words for you, you think that you are saying those words. \"Thank you Titan!\", \"This tea is lovely, Titan!\", \"You're my best friend, Titan!\"</p>You are a puppet, and so it is all true. There is no memory of your past self, only this new life, this identity as Badger, the tea party guest. You smile vacantly, your head empty and wooden, as your beloved owner makes your decisions for you. Soon, the night draws in.</p>You turn to Titan (as he moves your head for you), and say \"My goodness best friend, it is getting late!\" (in his voice, as he speaks for you). \"I know you are a busy adventurer Badger, but do you think you could stay the night with me?\", Titan asks.</p>Titan helps you nod your head up and down. He lifts your arm and rests it over his shoulder, and then leans against your wooden chest. His chest rises and falls gently, as he closes his eyes and nuzzles against you. You would happily stay like this forever. A beloved, mindless wooden partner, your will completely a part of Titan's imagination. Of course, the gentle little boar would never actually do that to you, and so as the hours pass, the magic of the potion slowly dissolves.</p>By the time you slowly start to feel the enchantment fade, Titan has fallen fast asleep with a happy smile on his face. You stretch out your limbs and massage your arms, easing back into having flesh and blood instead of wood. You then stand up and take a blanket from his bed, before draping it gently over his shoulders. He snuffles and murmurs something in his sleep.</p>You are about to leave and let him rest, when you notice a cold, unpleasant chill. You look around for the source, and spot a small door at the side of Titan's cottage. It's partially obscured by a large rack of herbs, so you hadn't noticed it until now.</p>Walking closer, you can see a very small, narrow wooden room. It's unlit, with only what appears to be a small wooden shrine at one side, with a variety of candles and dried flowers stacked up together.</p>That same unpleasant, cold feeling rushes past you again. It's not coming from the shrine. You kneel down and touch the ground in the dark room. It's oddly sticky. Looking at your finger, there appears to be spilled wax all over the floorboards. Your arm knocks something over, and you pick it up.</p>It's a skull, humanoid by the looks of thing. There's a large handle attached to the back, and the eyes have glass lenses inside them. The top is open and inside is a burned-out candle, making a sort of macabre lantern. What is Titan doing with this? It hums unsettlingly with a powerful magical energy.</p>You get the feeling you should take this to someone who knows more about magic. You pocket it and sneak out of the door, leaving Titan to his dreams.",
                        "outcomes": [
                            {
                                "parameter": "titan_connection",
                                "quantity": 3,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "majordanger",
                "title": "Titan In Danger",
                "subtitle": "The cottage is silent when you return. The windows are shuttered, the door is firmly closed. The air in the clearing, which is normally warm and sunny, has an icy bite to it.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "titan_connection",
                        "value": 4,
                        "comparison": "equal" //default greater
                    },
                    {
                        "parameter": "dracolich_connection",
                        "value": 1,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "curse",
                "results": {
                    "thing": {
                        "html": "data/active/TitanInDanger.html",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "titanthanks",
                "title": "Titan's Thanks",
                "subtitle": "Titan is gripping his overcoat tightly up against his throat when you enter the cottage today. He stammers and blushes a little, his cheeks pink and his ears flopped down. \"Could we talk a little?\", he asks.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "titan_connection",
                        "value": 5,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "titan_b",
                "results": {
                    "pumpkin_1": {
                        "text": "Titan invites you inside and closes the door behind him. His battered little tin kettle starts piping and whistling, and he hurries over to the stove and pours out some hot water into two chipped ceramic cups. He then sits down on the side of his bed, and pats the mattress next to him softly.</p>You sit down next to him, and he hands you one of the cups. The warm scent of herbs and leaves flows up from the hot water. The chubby boar takes a deep breath, and slowly exhales. His hands are trembling.</p>\"I have been thinking a lot, after you saved me. Part of why I was trying to do something so dumb was because I feel so lonely here. I always thought that I wouldn't mind staying in the forest, on my own, but I think deep down I really have been feeling like something is missing. I know you're basically the first person I've ever talked to, but still...\", he says. His hand slides over and gently rests on top of yours, and his soft fingers squeeze around your palm. \"I don't think I really want to have a sexual relationship. But, I think, I might really like to just cuddle you? If you would be alright with that?\", he says. His voice gets quieter and quieter, and his flushed cheeks blush hotter with every word.</p>You nod, and squeeze his hand back. His eyes widen, and he gulps. \"I am going to go slow, if that's ok? This is my first time doing anything like this\", he says. He shrugs off his large jacket, pulling his arms free from the sleeves and then carefully placing it on a hook next to the bed.</p>Next, he carefully starts to unbutton his tunic, the fabric pushing open as his chubby, furry round belly is freed. He pushes that off too, and the soft round ball of his belly, and his equally soft and bulging pecs, are left open to the air. The fur on his chest is a lighter, peachlike colour, contrasting the brown fur of his head and arms. He reaches down, and starts to hesitate. \"This is a big deal for me. My grandma made me promise that I would never let anyone see my feet, you see. It's part of why my family had to hide out here. She said strange feet run in our family and people would recognise them and figure out who we are\", he mumbles. Then, nervous and trembling, he pushes off his large, floppy boots.</p>At the bottom of his chubby legs, instead of the usual hooves a boar would have, are a pair of soft, furry feet. Each of his toes are squishy and fat, with a flat and slightly chubby sole. He breathes heavier and faster, his eyes starting to look intensely scared as his hands shake wildly. Gently, you put your arm around his shoulder, and he looks up at you. He slides his arms slowly around your waist, and then presses his flat, soft snout into your chest. His breathing slows and calms as you both squeeze eachother, feeling his warm body, his soft fur. He leans back, and pushes down his pants, kicking them off his legs and letting them fall to the ground. Beneath, he is wearing a white pair of underwear, stretched around his large soft rear, and bulging slightly in the front.</p>He climbs over into the bed, and lies down on the blankets, on his side with his body facing you. You strip down as well, dropping your shirt and pants, and then you climb into the bed with him. Your arms wrap around eachother, and his soft hands stroke and feel over your chest, your sides, your back. You run your fingers through his soft fur, feel the pillow-like warm belly that hangs on his front. He pulls the blankets up over you both, creating a warm, dim space.</p>His flat muzzle presses against your face, as he nervously starts to kiss you. You squeeze him close, and kiss him back, showing him how to do it. He gets braver, his tongue exploring yours, his small tusks rubbing and pressing against your cheeks. Together, you cuddle and nuzzle one another long into the night, and fall asleep in eachother's arms.</p>In the morning, you wake up to the smell of frying food. You turn to see Titan dresed up in warm clothes, his boots back on again. He slides his frying pan up and down his little stove for a while, then tips out the contents onto a plate and brings it to you.</p>It turns out to be soft, sugared eggy toast. You eat it with him and give him a kiss on the cheek, and he blushes. \"Thank you for last night. It really meant a lot to me\", he says. He hands you a flower, and squeezes your hand tightly. You look down and see that it's a gorgeous rose, each petal striped with blue and white. \"It's a muscard rose\", he says. \"My family have been growing these for hundreds of years. I want you to have it.\"</p>He kisses you again, and you hug him tightly for a while before getting up to go about your day.",
                        "outcomes": [
                            {
                                "parameter": "rose_muscat",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "eviltitan",
                "title": "After Five Hundred Years, I'm Free!",
                "subtitle": "It's time to conquer the valley!",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "dracolich_connection",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "dracolich_titan",
                "results": {
                    "pumpkin_1": {
                        "text": "Titan is very excited to begin his new reign of terror. He has had his best clothing soaking in black dye for a full day, which he explains to you is enchanted with the darkest of black magics. Currently, the clothes are drying on a line outside the house, dripping blackness all over the grass and stinking up the yard.</p>He orders you to brush and groom his new, darker fur, and you are compelled to obey. He admires himself in a short mirror while you brush a small pink hairbrush down his back to keep all of his short fur sleek and appealing. He's naked, and he lifts his round soft belly and drops it a little, watching it bounce.</p>\"I'll make a new brush once we get started, I think. Perhaps from the bones of my enemies. Do you think I should go barefoot? The paws are rather iconic to the house of Muscard, but it's been so long I don't know if anyone would even remember. Back in the day I was naked most of the time, but that's rather easier to pull off as a dragon than as a boar...\", he mutters.</p>He picks up a crown from his desk, and adjusts it on his head, and sighs. It is made from black vines that he had you harvest for him, enchanted with a little magic to encourage them to bloom red-tinged black flowers.</p>\"I'm not too happy with this, either. I hope the actual crown is still in that castle somewhere. Servant, go fetch my robes, I want to see how I look\", he commands. Your body jerks up and you find yourself marching out to the back yard, and pulling down Titan's clothes into a wicker basket. His command over you is unbreakable, but only when he is deliberately focusing on controlling your body. Most of the time, you are free to move as you wish. You re-enter, and he lifts his arms up.</p>You slide a black tunic down over his torso, and cinch it closed with a belt. Then a black robe covers his shoulders, and you kneel down in front of him to prepare his boots. As you do, you see his thick, short cock start to harden. It pushes up against the underside of his chubby round belly, and his control over your mind tightens.</p>You are drawn forward, as you nuzzle your nose against his furry black balls. You lick slowly along the length of his short shaft, before opening your mouth and beginning to suck and worship at it. He shudders with pleasure, pressing his hand down atop your head.</p>\"Yes, worship me, minion. Soon the entire valley will obey me, and you will be second only to myself...\", he mutters. As his cock starts to dribble pre onto your tongue, he makes you pull back and continue dressing him. His black pants bulge attractively in the front, and after checking himself out in the mirror with both boots and no boots, he eventually decides to go barefoot.</p>\"Now, let us march down to Riverford, I want to take out a few hundred years of aggression\", he tells you. You follow obediently behind him as he leaves the cottage, and walks out into the woods.</p>The trees seem darker, and more dense than usual. A thick fog lingers on the ground, obscuring the grass and making you stumble against undergrowth constantly. Titan swears and mutters with annoyance. Eventually, the trees start to think out, and you walk beyond them...right back to the front of the cottage.</p>Titan looks at it, growls, and turns back around before stomping back out into the woods. This time it takes less than half as long before you both wander straight back to the cottage again. Then again, and again. After the fifth time, Titan throws his crown on the ground and stomps on it, then yelps as the thorny vine cuts his paw.</p>\"What is going on?! I planned this all perfectly!\", he growls. You get on your knees, and start rubbing and massaging his sore footpaw as he thinks. After a few minutes, he breathes in sharply.</p>\"The Glatisant. The lingering aspect of the old king, it must be. It prevents outsiders from finding this place, and protects the king's descendants from discovery. And I am both, and neither, so I am trapped\", he says. He clenches his fists, shaking with annoyance, then sits down on the grass and starts to sulk.</p>\"We'll try again soon. There must be a way to break this spell, if you managed to find your way here. In the meantime, you can entertain me with service and adoration, my slave\", he says. You nod obediently.",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "titansplintergive",
                "title": "The Black Splinter (Contributed by Meek)",
                "subtitle": "Titan is sitting on a makeshift throne, otherwise known as a wicker folding chair. His chin is resting on his fist as you massage his kingly feet. He’s been ignoring you for the past ten minutes, but you attend to him dutifully. His ebony-black fur and piggish musk are captivating. With a childish whine, Titan kicks you away.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "dracolich_connection",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "dracolich_titan",
                "results": {
                    "pumpkin_1": {
                        "text": "You prostrate and ask if there’s anything wrong. Titan yanks his chin upwards. “Nothing you did, servant. I’ve been thinking on how to recuperate my evil powers.” He waves his hand dismissively. “And escape this damn cottage.” </p></p>He forces you to kneel. He orders you to hold out your hands. You don’t see him twist his fingers with magic, releasing some of the black miasma inside his body. It spins and forms a crystalline object in his palm.  “Do you know what this is, slave?”</p></p>“This is my power, distilled.” Titan states, placing the Black Splinter in your hand. “Unseen and intangible except to us. It will allow you to control the minds of others.”</p></p>You’re astonished. Anyone in the world, under master’s power? </p></p>Titan coughs, looking uncharacteristically bashful. “Hrm. Eventually. Maybe when that power grows, but for now... It’ll work on whoever it reacts to, at least.” Ah. You thank the master profusely for such a wonderful gift. “That enthusiasm is good, slave. I want you to take it and leave.”</p></p>You don’t understand. Your master wants to be alone? </p></p>“Use it. Spread my control. Corrupt and enslave as I would, and eventually, its power may grow--as will mine.” He looks around the semi-destroyed cottage. “I’ve handled himself alone for this long. Just come back often.” After swearing on your life, you thank his majesty. You will not disappoint him. </p></p>Your demeanor makes Titan click his tongue. “Act normal when you’re not here. In fact, think normal too. I can’t trust you to not get mindfucked...” He snorts and flicks your ear. “Since your willpower is so frighteningly low. Do as I say unwittingly, unawares, outside this forest. Until the time comes for my grand reveal.”</p></p> You bow, agreeing to every word he says.",
                        "outcomes": [
                            {
                                "parameter": "black_splinter",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "gotohypno",
                "title": "Use the White Splinter on Titan",
                "subtitle": "Titan is baking when the White Splinter vibrates in his presence. You’re uncertain, but... There’s an obligation to use the gift Gareth gave. You promise you’ll be gentle on your fellow boar. He reminds you of the Royal Majesty himself. Well, most boars do, but Titan especially. The resemblance makes you hesitate. (Contributed by Meek)",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "dracolich_connection",
                        "value": 1,
                        "comparison": "less" //default greater
                    },{
                        "parameter": "white_splinter",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },{
                        "parameter": "species",
                        "value": 55,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "titan_b",
                "results": {
                    "success": { 
                        "text": "Titan is baking when the White Splinter vibrates in his presence. You’re uncertain, but... There’s an obligation to use the gift Gareth gave. You promise you’ll be gentle on your fellow boar. He reminds you of the Royal Majesty himself. Well, most boars do, but Titan especially. The resemblance makes you hesitate.</p></p>You retrieve the glowing fragment just as Titan pulls a pie from the oven. You decide to wait until that piping-hot pie is safely out of his hands. Smells like cinnamon. Honestly? It sets the mood, in a weird way.</p></p>The White Splinter activates, releasing thin beams of energy. They shoot into Titan like arrows and absorb without any visible marks. He stiffens. You can’t see his expression. “Titan,” you order, “Turn around. Face me.”</p></p>The young boar obeys, and you confirm the spell worked. His eyes are glassy, distant, with a faint swirling whiteness. There’s a small smile on his face. You walk over and cup his chin, stroking it. Titan is completely placid and spellbound. “How do you feel?” You ask.</p></p>“Good,” Titan replies. You tell him he’s under your power, that his mind and body are yours to play with.</p></p>“Yes, daddy.”</p></p>...</p></p>What did he just say?</p></p>You huff, a grin pulling across your tusks. “I’m your daddy, huh?” You force two thick fingers in Titan’s mouth. He sucks, even if you make him gag by forcing your fingers as far down his throat you can. You feel this teeth and wet tongue doing its best to lap at the invasion. Drool starts running down Titan’s fuzzy chin.</p></p>When you pull your spit-coated fingers out, you trace them over Titan’s snout. “Say it,” you order. “Say I’m your daddy.”</p></p>“You’re my daddy,” Titan pants, visibly aroused. His face is red, with wet eyes and spit dribbling from it. He must be a virgin, but you ask. “Yes, daddy. I’ve never... Done anything.” You ask him if he’s practiced by himself and get the same answer.</p></p>“Titan,” you ask, “You wanna learn?” </p></p>The boar shivers and nods. “Yes, daddy.”</p></p>You grab one of his moobs, squishing it in your hands like a woman’s breast. “You don’t have to. I give you full permission to be honest and clear-minded... Ask, and I’ll stop. I’ll release my hold on your mind.”</p>Titan takes a deep breath. The White Splinter’s mind control doesn’t falter. “Teach me, daddy.”</p></p>Attaboy. ",
                        "area": "titansplinter",
                        "outcomes": []
                    }
                }
            },{
                "id": "stayasfox",
                "title": "Life of a pet",
                "subtitle": "Being a pet is the best. Free food, regular scritches, and a nice warm place to sleep. It's even better when you have an overly affectionate master who can be guilted very easily into giving you extra food.",
                "trapped": true,
                "type": "random",
                "requirements": [
                    {
                        "parameter": "trapped",
                        "value": 12,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "inanimatefetish",
                "results": {
                    "pumpkin_1": {
                        "text": "You wake up one morning and yawn, before looking around for your master. The cottage is oddly empty, but he has left you some food in a bowl under the table. It's not quite as good as your favourite fox snacks, but it's still very filling.</p>You chew down on your breakfast happily, but master still hasn't come back by the time you're finished. You hop up onto the countertop, and push open the window before walking out into the garden. You can smell him somewhere nearby, so you weave your way through the herbs and flowers, down a small path behind the house.</p>The fur on your back starts to stand on end as you smell something very unpleasant. Is master in danger? You bound forward quickly, towards the edge of the forest, when you see him. He is kneeling down, in front of a titanic, monstrous black beast.</p>The creature's body is so huge that it weaves through the deep woods like a snake, and you realise that what you first thought were deep shadows beyond the trees were actually part of its massive form. A thick, bulging neck weaves out towards the cottage, ending with a massive, malformed skull, dripping with black ichor.</p>The Glatisant. Your whole body freezes up in terror. But...it doesn't attack. Its muzzle presses up against Titan, and you see him rubbing something against it. He dips a white cloth into a bowl next to him, and then wipes one of the jagged wounds on the glatisant's cheek. He's...healing it?</p>Titan notices you, and gently motions you closer. You walk forward, your every instinct telling you to flee. The Glatisant ignores you, even as its wheezing, hissing breath fills the air with the sound of bellows.</p>\"It's ok\", Titan whispers. \"I am a healer, and I think it knows that. It's just an animal too, you know. Even big and scary animals need help sometimes\", he says. The glatisant's one good eye swivels towards you. The other one is completely covered by twisted, strange metal plating. A line of glowing light curls along the edges of the metal each time it breathes. As Titan finishes wiping up the wound, the massive beast slowly stands up, and then retreats back into the woods, disappearing like fog.</p>You walk up close to Titan, and see that he's trembling. He lets out a relieved sigh, and pets you with a shaking hand. \"That poor creature. I wonder what happened to it...\", he mumbles. He then picks you up and carries you back into the cottage.",
                        "outcomes": []
                    }
                }
            },{
                "id": "resist_fox",
                "trapped": true,
                "title": "Turning Back",
                "subtitle": "Finally, the effects of Titan's fox medicine is starting to wear off (despite your best efforts to get him to give you more). The boar looks extremely apologetic as you start to feel the change ending.",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "trapped",
                        "value": 12,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "default",
                "results": {
                    "rareSuccess": {
                        "text": "You stretch yourself out, feeling your small furry body starting to grow. Your forepaws flex, fingers becoming longer, paws becoming hands. The cottage around you seems to shrink as you get bigger and bigger, and a wave of vertigo washes over you.</p>You feel your mind recovering from the constant deluge of playful feral fox thoughts, and you rub your forehead dizzily. Looking down at yourself, you still appear to be a slender, cute orange fox, but at least you're an anthro one now. Titan, his eyes tightly closed, pushes your neatly-folded clothes towards you. \"I'm really sorry!\", he yelps.</p>You quickly get dressed and reassure him that this sort of thing happens to you all the time, and that there are no hard feelings. He still looks mortified though, so you promise him that you'll bring him more food some time to show you're still friends.</p>He pets the top of your head, and you close your eyes and wave your tail happily. Then he quickly pulls his hand away. \"Oh, sorry! I guess I got into a bit of a habit...\", he mumbles. You wink at him, and he blushes a little.</p>Being his pet wasn't that bad actually. Maybe you'll do it again some time.",
                        "descriptionchange": "This adventurer is a slender orange fox with a bushy soft tail.",
                        "freeTrap": true,
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 8,
                                "change": "set"
                            }
                        ]
                    }
                }
            }
        ],
        "npcs": [
            {
                "id": "titan",
                "name": "Titan",
                "requirements": [
                    {
                        "parameter": "dracolich_connection",
                        "value": 1,
                        "comparison": "nequal" //default greater
                    },
                    {
                        "parameter": "titan_connection",
                        "value": 4,
                        "comparison": "nequal" //default greater
                    }
                ],
                "description": "Titan is a short, shy young boar. His fur is chocolate brown everywhere it's visible, except for a patch of white above his short muzzle. His tusks are stubby and rounded, and his ears flop down at the side of his head. He's wearing soft leather boots, and a slightly-too-large leather overcoat, the pockets of which are overflowing with bottles and herbs.",
                "icon": "titan_b",
                "dialogue": [
                    {
                        "input": "How did I get here?",
                        "output": "\"I found you in the forest. I'm really supposed to keep to myself, but you were passed out and it looked like you were in pain. I brought you here on my herb cart to fix you up a little. I am sorry if your clothes smell like wild onions now, I found a lot of those before I found you and some of them got a bit squished\", he says."
                    },
                    {
                        "input": 'How did you heal me?',
                        "output": "\"I'm sort of what you might call an alchemist, I guess? My grandma taught me how to make a lot of helpful tonics and extracts out of the plants in this forest. It's been passed down from my ancestors, all the way back to my like tenth great grandma. It's my first time trying it on someone who isn't just an animal though. I'm glad you didn't wake up only able to bark or anything like that\", he says."
                    },
                    {
                        "input": 'Do you live here on your own?',
                        "output": "Titan nods. \"It used to be me and my grandma, but...well, I'm not totally on my own. Lots of the animals I healed like to come check on me now and then. I just keep to myself mostly. You're the first person I've spoken to properly in, um. Well, in a long time\", he says."
                    },
                    {
                        "input": 'What do you do here?',
                        "output": "\"I mostly keep to myself, and forage in the woods. There's all sorts of helpful herbs and things in there, and hardly anyone ever comes here so there are plenty of things to find. I've been working on some special medicines too, I like to keep myself busy.\""
                    },
                    {
                        "input": 'Aren\'t you worried about the bandits?',
                        "output": "Titan shakes his head. \"I know there are lots of bad and dangerous people around, but they can't find me here. This cottage is special. My great great grandma was a really powerful witch, and no one can find this place unless I invite them in.\""
                    },
                    {
                        "input": 'Can I see your cock?',
                        "output": "Titan's cheeks turn bright pink, and he raises his gloves to cover his snout. \"Oh! Gosh, I mean, um, I'm very flattered. But I, I think I might only want to do that with someone really close to me...\", he mumbles.</p>He slowly lowers his hands and looks away shyly. \"I mean, even then...I'm not sure if that's something I really want, you know? I think I might just be the kind of person who'd rather cuddle...\""
                    },
                    {
                        "input": 'Can I see your paws?',
                        "output": "\"No!\", he yelps suddenly. He shakes and mumbles, his eyes suddenly wide and scared. \"I mean, why would you want that? I can't, I mean, I don't...I'm sorry...\", he mumbles. Something about that question seemed to really frighten the chubby little boar."
                    }
                ]
            },{
                "id": "dracolichtitan",
                "name": "Titan",
                "requirements": [
                    {
                        "parameter": "dracolich_connection",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "description": "Titan's once-brown fur is now black and smooth all over. His shy and gentle face is now cruel and cold, with a smug and arrogant grin. When he isn't naked, he wears black clothes or robes. Sometimes, from his dark eyes, you see hints of the monstrous beast that he has fused with.",
                "icon": "dracolich_titan",
                "dialogue_html": "data/active/DracoTitan_Chat.html"
            }
        ]
    }