{
        "title": "shop_rooms",
        "position": [0.61,0.72],
        "header": "The Want of a Nail Back Rooms",
        "subheader": 'The rear of the general store is the living quarters for the shopkeeper, though he always welcomes visitors. A large wagon wheel is propped against the wall, next to the colourful carpet. A pot of tea is boiling on the warm stove.',
        "events": [
        	{
                "id": "steal_socks",
                "title": "Steal From The Storeroom",
                "subtitle": 'The back room of the store is packed with boxes and objects. Bags of unidentified items are shoved into the shelves, and strange packages are stacked haphazardly everywhere. </p>There\'s no one here at the moment, and you can\'t help but wonder if you could get away with grabbing something from the piles.',
                "type": "statcheck", //or random
                "stat": "stealth",
                "difficulty": 20,
                "requirements": [
                    {
                        "parameter": "guilt",
                        "value": 2,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "theft",
                "results": {
                    "success": { 
                        "text": 'You are careful to first make sure no one is looking into the back rooms, and then you start to sort through the goods and items stacked haphazardly on the shelves. As you sort and move through them, you notice a faint scent in the air. The longer you look, getting frustrated that you can\'t find anything valuable, the more intense the smell seems to be, and the clumsier and slower your actions get. Fortunately, your abilities are good enough that even when they are a little reduced, you can still quickly and professionally swipe items from the stores. Right before Mikhail gets back in the shop, you reach back into the shelf and pull out something soft, before slipping away out of sight.</p>When you get to safety, you look down at the soft material in your hands. To your surprise, and slight annoyance, it\'s nothing but a pair of dirty old socks! Still, there\'s something odd about them. The smell coming from them is warm, dominant and powerful. It makes you feel calm and dizzy and obedient, though you\'re slowly starting to get used to it now. It seems Mikhail has been using these socks as a theft-deterrant. They might serve you well in situations where you need people to find you more agreeable.',
                        "outcomes": [
                            {
                                "parameter": "mikhail_socks",
                                "change": "add",
                                "quantity": 1
                            }
                        ]
                    },
                    "fail": { 
                        "text": 'You are careful to first make sure no one is looking into the back rooms, and then you start to sort through the goods and items stacked haphazardly on the shelves. As you sort and move through them, you notice a faint scent in the air. The longer you look, getting frustrated that you can\'t find anything valuable, the more intense the smell seems to be, and the clumsier and slower your actions get. You rub your head and sway slightly, and then feel a large, powerful hand on your shoulder. You turn to see Mikhail, the big canine shopkeeper. He\'s looking at you sternly, and you babble an excuse for what you\'re doing back there. He stares for a moment, then nods and leaves. You need to be more careful from now on, he\'s clearly getting suspicious.',
                        "outcomes": [{
                            "parameter": "guilt",
                            "quantity": 1,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "steal_socks_danger",
                "title": "Steal From The Storeroom",
                "subtitle": 'The back room of the store is packed with boxes and objects. Bags of unidentified items are shoved into the shelves, and strange packages are stacked haphazardly everywhere. </p>There\'s no one here at the moment, and you can\'t help but wonder if you could get away with grabbing something from the piles. With so much suspicion on you though, you may be risking more than you realise...',
                "type": "statcheck", //or random
                "stat": "stealth",
                "difficulty": 20,
                "requirements": [
                    {
                        "parameter": "guilt",
                        "value": 1,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "theft",
                "results": {
                    "success": { 
                        "text": 'You are careful to first make sure no one is looking into the back rooms, and then you start to sort through the goods and items stacked haphazardly on the shelves. As you sort and move through them, you notice a faint scent in the air. The longer you look, getting frustrated that you can\'t find anything valuable, the more intense the smell seems to be, and the clumsier and slower your actions get. Fortunately, your abilities are good enough that even when they are a little reduced, you can still quickly and professionally swipe items from the stores. Right before Mikhail gets back in the shop, you reach back into the shelf and pull out something soft, before slipping away out of sight.</p>When you get to safety, you look down at the soft material in your hands. To your surprise, and slight annoyance, it\'s nothing but a pair of dirty old socks! Still, there\'s something odd about them. The smell coming from them is warm, dominant and powerful. It makes you feel calm and dizzy and obedient, though you\'re slowly starting to get used to it now. It seems Mikhail has been using these socks as a theft-deterrant. They might serve you well in situations where you need people to find you more agreeable.',
                        "outcomes": [
                            {
                                "parameter": "mikhail_socks",
                                "change": "add",
                                "quantity": 1
                            }
                        ]
                    },
                    "fail": {
                        "text": 'You look around, make sure no one is looking, and then pull open one of the bags and grab something from inside. You pull it out, eager to see your loot, and are disappointed to see that it\'s just a soft cotton sock. As you\'re looking at it, you are suddenly shoved from behind. A powerful arm holds you against the wall, and you turn your head to see Mikhail, the shopkeeper, his dog face twisted in a snarl. </p>"A little thief, is it? You thought you could steal from this shop? You will replace the item you tried to sneak away with!" The powerful dog twists you around, and you find yourself falling to your knees in front of him. His grey-streaked shaggy muzzle looks down at you disdainfully, and his stocky body seems larger and stronger than it was before. You struggle to move, your body feeling strangely weak and floppy. As you\'re fighting to stay upright, Mikhail sits down on one of the boxes, and reaches down to tug off his heavy boot, revealing a footpaw that\'s covered with a sweat-soaked white sock, the soles gritty and stained with dirt. </p>You are forced to watch him slowly pull the sock down off his wide and powerful foot, and you can taste dry cotton in your mouth. Your skin feels rough and dry, and your insides feel empty and light. You flop forward, your limbs not responding, while your mouth stretches open, wide and round. </p>You are shrinking, the room around you seeming to stretch away into the distance, while Mikhail towers over you like a colossus. Your limbs feel like they\'re fusing together, melting into the cotton tube of your body, leaving you completely hollow inside. </p>The handsome old dog walks over to you, his bare paw next to your limp body, then leans down and picks you up. </p>You dangle in his grip, until he sits down, leans forward, and stretches your mouth over his toes. As your body slides over his foot, you can smell his manly, mature scent, and taste his hard-working sweat. His toes wiggle deep inside you as you are wrapped completely around the old dog\'s foot, and then your vision is plunged into darkness when he shoves you back into the sweaty, hot, humid darkness of his leather boot. </p>You are forced to taste and smell the dog\'s foot, feeling his weight press down on you with each step as he returns to work. No one will ever know that his dirty, sweaty sock is actually a trapped living being.',
                        "trapped_desc": "This is a dirty sock being worn by Mikhail.",
                        "trapped": 'You are just a dirty sock, trapped around the large and musky footpaw of a handsome old dog. In the dark prison of his boot you can only taste and smell his sweat helplessly.',
                        "outcomes": []
                    }
                }
            },{
                "id": "sock_random",
                "title": "Accept Your Fate",
                "subtitle": "You are warm comfortable socks. You should be proud to serve your owner.",
                "trapped": true,
                "type": "random",
                "requirements": [
                ],
                "icon": "inanimatefetish",
                "results": {
                    "socks_1": {
                        "text": 'It\'s particularly humid and sweaty inside your owner\'s boot today. Mikhail is doing a lot of work restocking the back room, and the sweat from his paw is soaking into your fabric and making you feel heavy and wet. Being sweat-soaked is a strange feeling. Your thoughts become slow and stupid, and you almost seem to get drunk on the stink and taste of your owner\'s feet. </p>As the day wears on, his hot, heavy foot stomps down on you over and over, his scent grinding into your fibres. His sweat is filling you completely, and the smell of him is inescapable. The sweat is filling you up so much that there feels like there is no room for your thoughts and memories. They are pushed away and drift aside, to make more room for stink, to make you a more absorbent, helpful sock. You don\'t remember growing up anymore, but you know you are being a good object, and that\'s what counts.',
                        "outcomes": []
                    },
                    "socks_2": {
                        "text": 'It\'s a quiet day in the store, and Mikhail doesn\'t have much to do. He lifts his feet up, and you feel yourself rise up as you are covering his paw. Then he reaches over and starts to pull off his boots. Air blows over you, for the first time in what feels like days. Your sweat-soaked cotton body can finally air out. You are so damp you can feel every curve of his toe as your body clings to his paw. </p>You take the opportunity to look around, since you rarely get to see anything but the dark insides of your owner\'s boot. You\'re resting on a rickety wooden stool in the store, and the door is closed. From here you can tell Mikhail has turned the sign on it to say \'Closed\'. </p>He reaches down, bending over to touch you, and his fingers slide under your hem and stretch you slightly. He pulls you down, peeling you from his foot, and you dangle from his grip, empty and cold and helpless. Without your owner\'s foot inside you, you feel completely wrong. So hollow and weak and light. You are not left like that for too long, though. Mikhail pulls you down towards his crotch, and you smell and taste his thick and powerful cock as it slides up inside you. </p>His hand squeezes around you, closing your fabric around his dick as he starts to pump you up and down. Pre soaks your former head, and you are helpless to do anything but go along for the ride. Before long, his cock throbs inside you, and you taste his hot, sticky cum, as it splatters all over your insides. The musky mess soaks your fibres, and you are forced to taste and smell it constantly. Then, he pulls you back over his foot, and returns you to your dark prison, now with the musky aroma of cum to go with your daily sweaty torment.',
                        "outcomes": []
                    }
                }
            },{
                "id": "resist_socks",
                "trapped": true,
                "title": "Resist Your Transformation",
                "subtitle": "You are not an object! You can fight this!",
                "type": "statcheck", //or random
                "stat": "magic",
                "difficulty": 5,
                "requirements": [
                ],
                "icon": "default",
                "results": {
                	"rareSuccess": {
                		"text": 'You must resist this strange imprisonment. Your whole body may just be sweat-soaked cotton wrapped around the muscular furry foot of a mature dogman, but your mind is still the mind of an adventurer! You don\'t belong in the dark, humid stink of this leather boot prison. You focus on your emotions and memories, refusing to allow the smell to soak into your brain the way it is soaking into your body. When your owner walks around his shop and his weight crushes into your body, you block out all thoughts except remembering walking around yourself, with your own legs, in the sky. When his sweat soaks into you, you think about getting drinks at Grizz\'s bar. You are not about to end your adventuring career in here!</p>It actually starts to work. You can feel your limbs, even though it\'s just ghostly sensations at certain areas of your fabric body. You can wiggle, and move, and Mikhail starts to notice. He pulls you out from his boot, and flexes his toes inside you. You stubbornly refuse to think about how good that feels. He observes you for a moment, then reaches down and slowly peels you off his foot. For a moment you feel hollow, and empty, but you ignore that and focus instead on what you\'re supposed to look like.</p>Your sock body stretches and moves. Arms emerging from the sides, the bottom splitting and growing into legs. Your fabric sealing up, your insides getting solid and firm. Slowly you grow and stretch, as your sweaty material turns back into flesh and bone. You are left panting and exhausted on your knees in front of Mikhail, every inch of you stinking of his feet. He crosses his arms. "Consider that you being grounded. Try any funny business again, and I doubt you\'ll be coming back from it."',
                		"freeTrap": true,
                		"outcomes": []
                	},
                    "success": { 
                        "text": 'You must resist this strange imprisonment. Your whole body may just be sweat-soaked cotton wrapped around the muscular furry foot of a mature dogman, but your mind is still the mind of an adventurer! You don\'t belong in the dark, humid stink of this leather boot prison. You focus on your emotions and memories, refusing to allow the smell to soak into your brain the way it is soaking into your body. When your owner walks around his shop and his weight crushes into your body, you block out all thoughts except remembering walking around yourself, with your own legs, in the sky. When his sweat soaks into you, you think about getting drinks at Grizz\'s bar. You are not about to end your adventuring career in here!</p>It almost seems to be working, too. Your mind is more focused, you are able to block out the scents and tastes. Right up until you feel your owner\'s boot sliding down off you, and the fresh air hitting your damp body. The surprise of it makes your focus waver for a second. Then Mikhail\'s fingers and thumbs press into you. They push and rub you as he starts to massage his paw. You feel incredible, orgasmic pleasure when he rubs up and down his sole. Your whole body is flushed with relief and pleasure when he flexes his feet and squeezes his paws. Fuck it feels amazing. You love being a sock. You love making your master comfortable. You can...you can change back next time...',
                        "outcomes": [
                        ]
                    },
                    "fail": { 
                        "text": 'Being trapped inside Mikhail\'s boot is somehow worse than him just sending you to prison. His leather boots are your cell, and it\'s a cell you\'re always sharing with his huge sweaty foot and powerful canine stink. What\'s worse, something about this ever-present stink, and the salty taste of his paws, is making it hard to even remember what you were before you were a sock. You fear that if you stay this way, you might not be able to ever turn back.</p>You try to focus and remember that you are not a sock. You are an adventurer! Then Mikhail takes a step, and the weight of his massive powerful foot crushes down on you, the power of your owner, that you exist to be worn by and make comfortable. You...you are a person. Another step, another shake and scramble of your brain. You are...something? Step. Step. Movement of his toes inside your sock body, the scent and taste of his feet. You are a sock. You belong to Master.',
                        "outcomes": []
                    }
                }
            },{
                "id": "backshop_random",
                "title": "Loiter",
                "subtitle": "There is specifically a sign that says no loitering. But screw the rules!",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "sweatrag_adventurer": {
                        "text": 'Mikhail is organising his stock today. It must be tiring work, because he is shirtless, revealing his powerful musclegut, and sweat is dripping from his armpits. He hefts a heavy box up to a high shelf, then wipes his forehead. "Where did I put that one lad?" he says quietly, and slides around some bottles on a shelf. He finds one and pulls it out, and you see that a naked, tiny human is curled up inside. </p>Mikhail pops the cork and snaps his fingers over the top, causing the human to squish and twist like fluid as he emerges from the bottle. As he is warped, his skin turns white and soft, and his limbs and features merge together into fluffy cloth. What lands in his hand is a clean cloth, which the dog wipes across his face, then rubs in his pits to soak up his musky sweat. Once the cloth is dripping and dirty with dog musk, he tosses it aside and goes back to work.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "mayor_stockcheck": {
                        "text": 'You are surprised to see Mayor Maine here today, taking notes of the contents of Mikhail\'s stockroom and writing something on a long scroll. He smiles at you when you enter. "Hello young man! Just doing some administration, checking for contraband and whatnot. Not that I mistrust our dear friend Mikhail, of course! Just a generic checkup." he says. He comes to a box of socks, and his eyes gleam. "Oh my! I wonder if these used to be poor, unfortunate humans." he says. </p>He lifts one out, which twitches and wriggles in his grip. "Looks like this fellow still has some spirit!" he chuckles. He leans down, wriggling one of his wide soft paws as he stretches the sock over it, then flexes his toes inside the living fabric. With each twitch it gives, he stomps against the wooden floorboards and presses down his heavy weight. It doesn\'t take long before the living sock stops struggling, and the mayor returns him to the box, with a very obvious bulge in his suit trousers.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "underwear_swap": {
                        "text": 'You sense movement in the storeroom, and look carefully around the darkness before you notice a black anthro rat, skulking in the corner. He slips his pink hand into a box and pulls out a pair of white briefs, and you are about to call out thief, but then he jerks back and falls to his rear. </p>The briefs bulge and swell, stretching wider and larger as they become full and heavy. Meanwhile, the rat whimpers and struggles, his body flattening and hollowing out. His limbs shrink down and away, and his fur flattens to cotton. Meanwhile, the briefs form fur, and limbs, and start to stand up as a bulge appears and slowly resolves into a long rodent head. The former briefs blinks his new eyes and touches his muzzle experimentally, while the rat\'s own head opens up wide, becoming just the waistband of the pair of lifeless black underwear he is becoming. </p>The new white rat picks up the black boxers, and Mikhail shouts from the next room. "You can have those on the house! Have fun being a living being!" he yells. The new rat grins happily and pulls the unfortunate thief up around his crotch, then gives his big rat balls a stroke through the fabric before leaving.',
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
        ]
    }