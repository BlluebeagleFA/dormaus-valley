var area = {
        "title": "marketplace",
        "position": [0.33,0.71],
        "header": "Dormaus Marketplace",
        "subheader": 'The marketplace is busy every time of day. Traders walk through, leading strange beasts of burden laden with goods, from walking birds to four-legged armored monsters. Colourful tents ring the marketplace, and between them, merchants hawk their wares from carpets or hand baskets.',
        "events": [
            {
                "id": "magic_shop",
                "title": "Work at Saberhagen\'s Bakery",
                "subtitle": "How hard could it possibly be?",
                "type": "statcheck", //or random
                "stat": "magic",
                "difficulty": 20,
                "requirements": [
                    
                ],
                "icon": "pie_1",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'Saberhagen is so happy to have assistance that he practically bounces on his paws. His form of baking is a little more magical than you might expect, but your own knowledge of such things is more than up to the task. When the dough gets mad and start to form itself into a big goopy fist, you just challenge it to rock paper scissors. The rolls try to roll away, so you put them in a big bowl so they can bounce around with eachother without causing trouble. Even the croissants, a notoriously difficult pastry to wrangle, are no match for you. When they try to whip at you like soft little sickles, you catch them in a net. They struggle in there uselessly, making angry little \'hon\' noises.</p>Saberhagen himself is amazed with your skills. With the other tasks handled he\'s able to make several more batches of goods than he normally would. He dashes all around the tent, setting things up and pulling new bread out of his little oven, until he bumps into you by accident. His chest lands against yours and he looks at you with surprise, along with a little bit of a blush barely visible under his dark fur.</p>You get out of his way and start to cover the front counter, where you soon realise that Saberhagen is a very popular merchant. A small crowd gathers very early on, eager to start their day with fresh bread. With how much extra you\'ve been able to make, you even have some left over after the initial rush. Passing merchants and shoppers try out your stocks on a whim, and soon you have even more customers who will be making regular visits to get more in the future.</p>At the end of the day, Saberhagen invites you over to a few cushions by his warm hearth, and splits some pumpkin pie with you. It\'s warm and freshly made, and you feel surprisingly at home in his little tent. He splits the day\'s takings with you evenly, resulting in a very reasonable little pile of coins. "Thanks so much for your help today! We made more food than ever, and everyone seemed really happy. I really appreciate you spending the day with me", he says. His eyes shine brightly and happily in the dim tent, and you finish up the pie before leaving.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 20,
                                "change": "add"
                            },
                            {
                                "parameter": "saberhagen_interest",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'While Saberhagen is overjoyed to have someone helping him in his little tent, you soon discover that baked goods in this land are far more complicated than you\'d imagine. When you try to knead the dough, it rises up in the shape of a fist and knocks you away. The rolls keep rolling around the tent, gathering dust, and the croissants are just completely impossible to argue with. They keep flying over your head, getting tangled in the sheets.</p>Despite your constant screwups, Saberhagen remains very positive. He reprimands the dough for hitting you, shows you how to kneel down when getting the rolls so you don\'t spook them, and gives you a net to catch the croissants with. When you try to handle the dough for the second time, he puts his hands in with you, guiding you along and teaching you how to push through the warm soft dough without making it annoyed. His hand touches yours in the bowl, and you see his whiskers twitch a little in embarrassment.</p>After the baking is all done, or at least the parts of it that can be salvaged, you cover the front counter for a while. You are surprised to discover how popular Saberhagen\'s food is. A small crowd gathers in the morning, eager to start their day with some fresh bread from "that nice cat who is visiting". Although you sell out everything you baked, with how much you messed up, the tent barely makes enough money to cover the cost of ingredients.</p>You are expecting to be sent home with just bruises and no money, when Saberhagen cheerfully walks up and holds your hands with his own soft furry black ones. You feel a calming warmth flow through you, and your minor injuries from the day are washed away. He then presses a couple of coins into your palm. "Here you go, friend. Your half for the day!", he says. You feel a little guilty for taking the money, but he waves it off. "Don\'t be silly! No one is perfect their first time trying. I am sure you\'ll be a great baker one day! Don\'t get discouraged!", he says. Maybe you actually will, with a teacher like him.',
                        "outcomes": [{
                            "parameter": "muscat_1",
                            "quantity": 3,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "bakery_payday",
                "title": "Make a Move on Saberhagen",
                "subtitle": "He is clearly interested, but he is too shy to say so.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "saberhagen_interest",
                        "value": 1,
                        "comparison": "greater" //default greater
                    },{
                        "parameter": "saberhagen_connection",
                        "value": 1,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "saberhagenicon",
                "results": {
                    "grizzpay": {
                        "text": 'You\'ve been working with the black cat long enough to know that, despite his bashfulness and reticence, he does have some sexual and romantic interest. The romance novels he\'s so ashamed of that he hides in the back of his tent, for example. He\'s clearly never going to work up the courage to make a move though, so maybe you need to make one for him.</p>As you work at the bakery today, you spend a little extra time focusing on Saberhagen. After he pulls out some freshly baked rolls from his oven, you walk up close to him and rub his shoulders. His body is lithe and thin under his robes, and he blushes a little. "Ah, how unexpected. What brought this on?", he asks. You tell him that he just looks like he\'s been working hard and needs a bit of attention. His fluffy ears twitch a bit, and he looks away, but he doesn\'t stop you from your massage. You press your fingers into his shoulders and along the back of his neck, and you feel a faint rumbling, along with a low, quiet sound. He\'s purring!</p>Taking the opportunity, you reach down under the hem of his thick leather robe and push your hands up under it. Your fingers stroke into the soft, warm black fur on his back, and he makes a nervous yelp. His tail twitches and lashes, but as you continue to stroke and touch him, his tension and shyness very gradually recede. He leans backwards into your touch, and you stroke your hands down his shoulderblades and then around his chest, holding him close to you. He purrs a little more, then coughs. "Um, my sincerest thanks for that. It was very considerate of you", he stammers, before gently untangling himself and going back to work.</p>Later that day, you make an idle complaint about how warm it is, and take off your shirt. You are amused to notice that he stares at you and blushes deeply every time he thinks you\'re not looking. It seems the cat has a crush on you. The next day when you come to work, you discover a letter from him near the work desk. "Dearest Friend, I really think that you would make a fine magician. With your adventuring skills, I am sure you could find the rare items I need to make spellbread designed just for you. Please give this to the mayor as a letter of recommendation for a license to become an official treasure digger. I would take you myself, but I confess I find myself overcome with an uncharacteristic shyness as of late. Deepest regards, Saberhagen"',
                        "outcomes": [
                            {
                                "parameter": "saberhagen_connection",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "saberhagensex_m",
                "title": "Move to the Next Level",
                "subtitle": 'Saberhagen has a big crush on you, but he\'s also a sheltered virgin scholar. Time to take things further.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "saberhagen_connection",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "species",
                        "value": 19,
                        "comparison": "nequal" //default greater
                    },
                    {
                        "parameter": "gender",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "saberhagenicong",
                "results": {
                    "grizzsex": {
                        "text": 'You choose a day where Saberhagen has been paying particular attention to you. Likely because you aren\'t wearing a shirt, but he keeps looking over, and the distraction makes him stumble, or drop his bread, or knock over some books. By the end of the day he\'s a blushing nervous mess. You help him close up the store, but instead of leaving for the day like normal, you walk into the tent with him. He looks up at you, his cat eyes shining in the dark tent. "Oh! Goodness, is there something I can, er, help you with?", he asks.</p>You tell him that actually, there is. Then, you take hold of his wrist and pull him close to you. His arms are slim and soft, and he doesn\'t resist at all. In fact, he looks completely star struck. You lean in close to him, and press your face to his soft furry muzzle. Your tongue slides into his mouth as you kiss him, feeling the smooth points of his teeth, and the hot warmth of his rough tongue. Judging by his nervousness and the motion of his tongue, you\'re probably his first kiss. You lean back and look at him, his face almost glowing with the red blush that covers his cheeks and muzzle. "I, oh, scholars, er...at the tower, we\'re not supposed to engage in...", he says, stumbling over his words.</p>You take his shaky hands and press them onto your chest, letting him feel your body. He strokes them over you, and bites his lower lip nervously. You can see him looking intensely at your crotch, and you oblige him by reaching down and pushing them off you, to reveal your erect cock. He almost gasps as it rises up into the air, and his whiskers twitch.</p>You reach forward and push open his robe, sliding it across his shoulders until it falls to the floor under its own weight. Then, in an authoritative tone, you tell him to take off his shirt and pants. He hesitates for a moment, but he can\'t take his eyes off your cock, and he pulls his shirt up over his head. His torso is the same shade of silky black as the rest of his body, and his chest is slender and narrow. You walk closer, and slide your hands along his hips, feeling his soft fur, before you push down his breeches, to reveal his hard, pre-leaking cock. He looks up at you and leans in for another kiss, which you oblige. Though his motions are still nervous and unsure, you can tell he\'s excited. You hold onto his cock, feeling its firmness in your hand as you slowly stroke and tease him. He purrs and yowls, wiggling at your touch. "I\'ve...I\'ve never...", he mutters, but you just lower him down onto the cushions that scatter the floor of the tent.</p>The cat closes his eyes and shakes a little as you lift his legs up and press your cock to his tailhole. He\'s very tight, and as you push forward, you feel him gasp and squirm. However, you soon manage to slide yourself into him, and feel his ass clenching around your cock. You start to thrust, pushing your cock into him, in and out, getting faster and faster. He pants and gasps, his own cock bouncing and leaking large amounts of precum. "I can\'t, it\'s, I!", he stammers, before yowling and suddenly cumming after only a few thrusts. His cock pulses and gushes a thick stream of cum into the air, but as it does so, a rush of almost electrical energy explodes from his fur and blasts into you. You find yourself yowling too, and thrusting hard into his rear as you shudder with sensation. Your skin prickles as soft black fur grows all over you. Your hands and feet sting as sharp, narrow claws push out from the tips. Your tailbone grows out, flicking and shaking as it stretches into a thin, furry feline tail. With the change comes a growing pleasure, and as your ears stretch up and grow pointed and triangular atop your head, you gasp. Your face pushes forward into a short, streamlined muzzle, and you grunt as you start to cum. Your cock unloads hot, dripping cum deep into Saberhagen\'s rear, overwhelmed by the pleasure of your changes. When you pull out, you leave him an oozing mess, and he covers his face with embarrassment. "I\'m so sorry! I lost control! I, but, you make a very handsome cat", he says shyly. You grin at him, and stand up, feeling your new feline body. This could certainly be fun.',
                        "descriptionchange": "This adventurer is a lithe and slender magical black cat.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 19,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "saberhagensex_f",
                "title": "Move to the Next Level",
                "subtitle": 'Saberhagen has a big crush on you, but he\'s also a sheltered virgin scholar. Time to take things further.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "saberhagen_connection",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "species",
                        "value": 19,
                        "comparison": "nequal" //default greater
                    },
                    {
                        "parameter": "gender",
                        "value": 2,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "saberhagenicong",
                "results": {
                    "grizzsex": {
                        "text": 'You choose a day where Saberhagen has been paying particular attention to you. Likely because you aren\'t wearing a shirt, but he keeps looking over, and the distraction makes him stumble, or drop his bread, or knock over some books. By the end of the day he\'s a blushing nervous mess. You help him close up the store, but instead of leaving for the day like normal, you walk into the tent with him. He looks up at you, his cat eyes shining in the dark tent. "Oh! Goodness, is there something I can, er, help you with?", he asks.</p>You tell him that actually, there is. Then, you take hold of his wrist and pull him close to you. His arms are slim and soft, and he doesn\'t resist at all. In fact, he looks completely star struck. You lean in close to him, and press your face to his soft furry muzzle. Your tongue slides into his mouth as you kiss him, feeling the smooth points of his teeth, and the hot warmth of his rough tongue. Judging by his nervousness and the motion of his tongue, you\'re probably his first kiss. You lean back and look at him, his face almost glowing with the red blush that covers his cheeks and muzzle. "I, oh, scholars, er...at the tower, we\'re not supposed to engage in...", he says, stumbling over his words.</p>You take his shaky hands and press them onto your chest, letting him feel your breasts. He strokes them, his eyes wide in admiration, and bites his lower lip nervously. You can see him looking intensely at your body, and you oblige him by reaching down and pushing your pants off, to reveal your full nudity. He almost gasps as your clothes drop to the floor, and his whiskers twitch.</p>You reach forward and push open his robe, sliding it across his shoulders until it falls to the floor under its own weight. Then, in an authoritative tone, you tell him to take off his shirt and pants. He hesitates for a moment, but he can\'t take his eyes off your body, and he pulls his shirt up over his head. His torso is the same shade of silky black as the rest of his body, and his chest is slender and narrow. You walk closer, and slide your hands along his hips, feeling his soft fur, before you push down his breeches, to reveal his hard, pre-leaking cock. He looks up at you and leans in for another kiss, which you oblige. Though his motions are still nervous and unsure, you can tell he\'s excited. You hold onto his cock, feeling its firmness in your hand as you slowly stroke and tease him. He purrs and yowls, wiggling at your touch. "I\'ve...I\'ve never...", he mutters, but you just lower him down onto the cushions that scatter the floor of the tent.</p>The cat closes his eyes and shakes a little as you lift yourself up and slide down onto his cock. You push forward, and feel him gasp and squirm. You start to thrust, riding him, in and out, getting faster and faster. He pants and gasps, his own cock leaking large amounts of precum inside you. "I can\'t, it\'s, I!", he stammers, before yowling and suddenly cumming after only a few moments. His cock pulses and gushes a thick stream of cum, filling you with warmth deep inside, but as it does so, a rush of almost electrical energy explodes from his fur and blasts into you. You find yourself yowling too, and hilting his cock inside you as you shudder with sensation. Your skin prickles as soft black fur grows all over you. Your hands and feet sting as sharp, narrow claws push out from the tips. Your tailbone grows out, flicking and shaking as it stretches into a thin, furry feline tail. With the change comes a growing pleasure, and as your ears stretch up and grow pointed and triangular atop your head, you gasp. Your face pushes forward into a short, streamlined muzzle, and you grunt as you start to orgasm too, overwhelmed by the pleasure of your changes. When you pull out, you leave him an oozing mess, and he covers his face with embarrassment. "I\'m so sorry! I lost control! I, but, you make a very beautiful cat", he says shyly. You grin at him, and stand up, feeling your new feline body. This could certainly be fun.',
                        "descriptionchange": "This adventurer is a lithe and slender magical black cat.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 19,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "cat_vore",
                "title": "Saberhagen's Guest?",
                "subtitle": "You are poking around in the marketplace, which is pretty difficult on tiny mouse legs, when you notice something a bit odd. Saberhagen, normally so refined and dignified, is nervously talking to a taller black cat with a wide grin. He notices you and starts staring at you with a look of strange concern. He shakes his head slightly.</p>Now that you are paying attention, you notice he is vibrating with barely-concealed intensity. Being a wizard from a foreign land, he isn\'t a horny sex-lunatic like everyone else in this town, so it\'s pretty weird to see him acting so uncharacteristically. Do you want to go ask him what\'s wrong?",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 3,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "vorefetish",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'You scurry over on four legs, intending to ask Saberhagen if something is wrong. The moment you get within arms range, your world is suddenly turned upside down! The other cat wizard has lunged forward with lightning speed and grabbed you in one of his hands, and you are dangling upside down by your tail, dizzy from the haste. You notice his claws are out, shiny and gleaming, and his mouth is drooling. </p>You wiggle and squeak, and Saberhagen drags the cat into his tent. "Let him go, Ritter! They don\'t eat people here!", Saberhagen pleads, but the other cat is snarling. "I try so hard to remain dignified..." he mutters, dropping you on the ground. When you scurry to escape, he lunges and slams a hand down in front of you, and when you retreat, he does it again. He purrs with amusement. "But this absurd town...letting MICE wander around freely! How can I resist that?!" he says. </p>He snaps his fingers, and his robes and hat disappear in a puff of smoke. Saberhagen is thrust across the room, his arms bound with gleaming strands of green light. Ritter\'s body is lean and lithe, his black fur sleek on his slender body. Between his legs, a furry black sheath holds a firm, erect cock. The whiteness of his grin stands out in the dark tent, almost like a cheshire cat\'s disembodied smile. Whether or not you find him attractive, his actions have triggered some primal survival instinct in your rodent body, and you spin around for a moment and flee as fast as your little paws will carry you. </p>There is another puff of purple smoke, and suddenly you are running along a warm, black, furry surface. You look up to see that you\'re walking on Ritter\'s chest, running towards his face! He grabs you, and drops you down between his legs, where you land on his twitching cock. Before you can move, he grips you firmly in his hand, and starts to squeeze you against his shaft. He pulls you up and down, rubbing you along his cock like a fuck toy, and the more you squeak and struggle, the more he purrs and the harder he gets.</p> "Mice...are toys. Toys for cats to amuse themselves with, and then, when we are done...to devour." he whispers. Pre oozes from his bulging cock and soaks your fur, making you slippery and wet. Just as his cock is bobbing and tensing, about to blow, he grabs you in his hand and lifts you to his mouth. You dangle over his wide, gaping maw, until suddenly your stomach lurches as you are dropped. You land on Ritter\'s wide, rough tongue, clinging on desperately as his fanged maw closes around you. In the dark wetness of his mouth, his tongue slides up and down your chest, licking and teasing you all over. You can feel how aroused he is by his panting breath over you, and the moans and purrs emitting from his throat. </p>With a shudder, and a loud, orgasmic moan, the cat blows his load, and swallows you at the same time. You are sent down a slippery slide along the tight confines of Ritter\'s throat and into his belly, even as he soaks his own chestfur with creamy cum.',
                        "area": "belly",
                        "outcomes": [
                        ]
                    }
                }
            },{
                "id": "guest_fursuit",
                "title": "The Fursuit Store",
                "subtitle": 'You find yourself in front of an unfamiliar building, unsure of how you got there and feeling a vague sense of Deja Vu. The street you are on is eerily quiet, not a single other person around you for as far as you can see. All the other buildings around you feeling very empty and devoid of life. The building in front of you resembles some sort of store, with large windows and a glass door with a “We are Open” sign hanging on the inside. When you try to glance through the windows, you find the inside of the store to be quite dim and through the glass you can make out what looks like suits or costumes hanging from some racks. You back up and notice a sign above the door, which you can almost swear was not there before. The sign has text in a comic sans font which says “Fur-Real Costume Shop” and below the text is a picture of a really exaggerated blue cartoon fox winking. Do you decide to enter the shop?',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 7,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "grizzsex": {
                        "text": 'You decide to sate your curiosity and enter the unusual shop. When you open the door a bell above you rings, and you walk forward into the dimly lit shop. All around you, you see mascot costumes hanging from the racks. They are really colorful ranging from bright neon blues and reds to dimmer brown and whites. The heads of the costumes appear to be on some shelves on the left side of the store. Their eyes blankly stare at you with perpetual smiles on their faces. You decide to walk around to shop to see if you can find the store owner or a desk, but all you find, other than more of the costumes, is an intricate gilded mirror in the back of the store.</p>After a while of waiting in the store, you decide to leave, confident that no store clerk or owner is going to arrive. You make it all the way across the store and start to open the door when you hear a large crash behind you. When you turn around you see one of the costumes, fallen on the ground. </p>Out of common courtesy you go to put the costume back where it belongs. However when your hand touches the surprisingly soft fur, you instantly have an urge to try the suit on. You pick it up and start to look at it. It is a blue and white furred costume with a tail in the back and attached arm and leg paws. You check a tag on the bottom of the tail and realize that the costume is meant to be an arctic fox. You look around to make sure no one is around and with the suit in your hands you walk toward the mirror. You hesitate for a second, staring into the smooth inside of the suit not sure why you are doing this, but nevertheless you begin to slip on the suit. The inside feels warm and smooth to the touch, and it slides perfectly onto your body. </p>Zipped up, the suit fits perfectly upon your body, almost as if it was made specifically for you. You look in the mirror and move around, seeing how it looks on you. Other than your head, which is contrasting with the rest of your body, you think that you look great. Everything below looks like a larger than life fox. Your “paws” are slightly oversized, your “tail” is extremely bushy and sways almost lifelike when you move, and the white and blue color palette accentuates the suit on your body. </p>You start to lose track of the time as you keep posing and turning with the suit on your body, it becoming an obsession. After a while you decide it is finally time to take off the suit and you attempt to pull down the zipper. As you do, you find that it is stuck and you can’t pull it down. No matter how hard you pull down, it doesn’t budge an inch. You keep trying, slight panic swelling up from within you.</p>Then a calm thought, not entirely your own, enters your mind. “The suit is not complete…” At this you realize what was off all along. You were missing your head. You immediately run to the rack of heads you saw before and search for yours. It doesn’t take long, the right one standing out as bright as day. In the middle of the shelves, it is blue and white, like the rest of your body. The large cartoon eyes and gleaming smile practically telling you to put it on then and there. And so you do. You close your eyes and take the mask off the shelf, slipping it onto your head. It fits perfectly, like the rest of the suit, and slipping it on makes you feel a comfort you never felt before. Unknown to you, the head of the suit merged with the suit’s body, becoming one over your own.</p>At this you finally feel complete and whole, the suit filling the emptiness inside you. Conversely, your body begins to disappear under the suit, becoming a void beneath the cloth of the costume. Your “body” becomes lighter and hollower, just as it always was meant to be. You open your “eyes” and look around the shop. Then you look down at the zipper which confounded you earlier, and pull it down with ease. Inside your suit there is nothing but the inner black lining, and you feel happy. After a while you leave the shop content, but slightly confused why you went to a costume shop since as far as you can remember you can remember, you were always a walking fursuit. [Guest event from CJMPinger]',
                        "descriptionchange": 'This adventurer is a living fursuit. Inside they are hollow and lined with fabric, and outside they are a cartoonish white and blue arctic fox with large eyes, paws, and a bushy tail.',
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 7,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "market_random",
                "title": "Wander the Market",
                "subtitle": "There are many peddlers selling their wares, along with a number of brick-and-mortar stores selling odd things.",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "Slave Market": {
                        "text": 'You are shocked to see a wooden platform erected in the market square today, atop which are three men, naked except for their chains and collars. A human, a wolf, and a chubby, short cat. A crowd in front is shouting auction prices, and you realise this is a slave market! You are thinking about whether you should try to stop this, when a price is decided for the tall and muscular wolf. </p>It looks like a human adventurer has bought him, and the adventurer climbs up the platform, and then, strangely, strips naked. He opens the wolf\'s collar and places it around his own neck, while the wolf takes the man\'s armor and puts it on, then leads his new slave away on a chain. It looks like this is an auction to take the slave\'s place! What an odd town this is.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "Furniture Store": {
                        "text": 'There\'s a furniture stall in the market today. A satyr, with a muscular brown-skinned chest but the lower body of a furry goat, is selling wooden chairs and tables and other items. An adventuer asks whether he can buy one of the chairs on layaway. The satyr frowns, and says that he can\'t help with that, but the human could pay a sort of deposit now, then get the chair in a month or two. </p>The adventurer agrees, and the satyr toots a strange, lilting tune on his panpipes. The human looks dizzy and confused, and starts to slowly remove his clothing with slow, zombie-like motions. Once he is naked, he gets on his knees, and the satyr starts to adjust him, moving his legs and straightening his back, and pressing his arms to his sides. The man\'s body hardens, and forms wood-like swirls and patterns. His limbs stiffen and become square and hard edged, as his lower body becomes four wooden legs. His back becomes a straight, firm wooden chair back, and his face just a carved pattern in the wood. Soon, there is just an ornate, handsome wooden chair. </p>The satyr grins. "There ya go. Two months and I turn you back and give ya the chair for free – unless someone buys ya before then!"',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "Saberhagen's Secret": {
                        "text": 'Saberhagen is organising his stall, carrying huge stacks of books to and fro and trying to jam them into shelves. You wonder what the books are for, when his magic is bakery-based, and take a quick peek. "Nine Love Lives", "Fifty Shades of Chameleon", "Love on a Hot Tin Roof", "Cat Love Amongst the Pigeons". These are romance novels! Saberhagen clearly has a secret vice. He turns and sees you looking, and his face turns pink with a blush. </p>"How rude! To spy upon my correspondence. I know just the punishment.", he says. He waves his hand, and your vision is suddenly filled with swirls and colours. Your body goes slack as you droop forward, your face stretching into a stupid, drooling smile. Saberhagen good kitty. Saberhagen master. Do what kitty says. For the rest of the day, the cat uses you to carry his books around and clean his stall, and you follow him like a big puppy, your mind filled with simple, happy thoughts. He eventually restores your free will and lets you go, but you get the feeling your intelligence didn\'t quite come back all the way yet. Nice kitty...',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "The Hood": {
                        "text": 'While in the marketplace, you spot a young dog, possibly one of Mikhail’s many sons, talking to Flute. In Flute’s right arm are a few purple and blue hoodies, looking quite out of place in this rural fantasy environment. The one on top looks almost custom made for the dog, with extensions on the hood to accommodate for his ears. On the hood there is also yellow eyes that almost seemed to glow and little cloth teeth on the brim. The dog seems very eager, a small bag of gold in his hand and his tail wagging behind him.</p>Flute eagerly takes the gold out of the dog’s hands and tosses him the hoodie from the top of the pile. “Enjoy the purchase, and you know what? Have the rest on the house!” Flute tosses the rest of the hoodies onto the ground nearby and walks away, counting the money in the bag. The dog quickly and happily puts on the article of clothing, his tail wagging even more. He zips it up, leaving the hood down and looks at it on his body. It fits snug, and comfortably on him. He smiles and emphatically exclaims “This stange garment is cool!”</p>While the dog admires his new hoodie jacket, you spot the hood oddly move up on its own. With a single soft FWIP, the hood completely covers all of the dog’s face except for the mouth. “AH!! What the?!” yells the dog. He starts to pull at the hood panicking, trying to get it off. The “eyes” of the hood begin to glow even brighter with an unearthly light. The strings of the hood pull down further, all on their own, tightening the hood to his head. Soon you see the dog hunched over, his tail no longer wagging and his arms hanging down. In a matter of seconds, all struggling was over. You then see him walk slowly toward the pile of hoodies. He picks them up one by one, slowly his arms move as he was a zombie. When he finally picks all of them up, he starts walking by you and you hear in a deeper monotone “I… Obey… The … Hood…” </p>After he passes by, you resolve to yourself to not buy any strange pieces of clothing from flute, or wear one of those hoods. [Guest event by CJMPinger]',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    }
                }
            }
        ],
        "npcs": [
            {
                "id": "saberhagen",
                "name": "Saberhagen",
                "description": "Saberhagen is a male black cat, wearing a wide-brimmed pointed hat. He is constantly checking his store and pulling baked goods out of the oven, or arranging his shelves.",
                "icon": "saberhagenicon",
                "shop": {
                    "trades": [],
                    "buys": ["lotus_1", "bloodstone", "skull_mask", "stone_shield"],
                    "sells": []
                },
                "dialogue": [
                    {
                        "input": "What is your name?",
                        "output": '"My name is Saberhagen, sorceror of the Tower Spiral. I am here to purchase spell components and do research."'
                    },
                    {
                        "input": 'What is your job?',
                        "output": '"I am a scholar and a sorceror, one who commands the art of magic. I am currently using my skills to earn some money down here amongst the people, to fund my studies."'
                    },
                    {
                        "input": 'Is there anything you\'d like to buy?',
                        "output": '"If you could find me some witch lotus from the south of the valley, I would be greatly appreciative. Or anything that has a lot of ambient magic stored inside it."'
                    },
                    {
                        "input": 'What spells do you know?',
                        "output": '"Why, I know hundreds of spells, of course! At the Tower Spiral, I was one of the top students. Unfortunately, away from the tower I am a little more limited in what I can cast. I\'m trying to perfect my spellbread right now, which should help a great deal."'
                    },
                    {
                        "input": 'What is spellbread?',
                        "output": '"You have not heard of spellbread? The art of the baker is the most magical and potent of all. They store the power of the cosmic spiral in the whirls of their soft dough. You see, only living beings can store the patterns of magical spells, so we use the yeast in bread to store spells in physical form. In short, eating spellbread teaches you magic."'
                    },
                    {
                        "input": 'How is your cock?',
                        "output": 'The cat blinks with surprise, and then his cheeks turn pink. "I...I suppose it is fine. Th-thank you. I am not accustomed to this country\s open and eager affections."'
                    },
                    {
                        "input": 'How are your paws?',
                        "output": '"You are a peculiar adventurer. My paws are well, thank you for your concern. Their appearance? Long and black, I suppose?"'
                    }
                ]
            }
        ]
    }