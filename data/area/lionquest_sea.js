var area = {
        "title": "lionquest_sea",
        "header": "The Deck of the Jolly Wolfpits",
        "nomap": "You are far from home and you don't know your way back.",
        "subheader": 'From here, the ocean seems to go on forever. The horizon is just a line in the infinite distance. The waves lift and crash, and the boat heaves along them. The sails above you are filled with wind, and you are making good time.',
        "events": [
            {
                "id": "cabin",
                "title": 'Serve in the Captain\'s Cabin',
                "subtitle": 'The captain has notoriously smelly boots, and the other pirates try to avoid his room because of that.',
                "type": "statcheck",
                "stat": "might",
                "difficulty": 30,
                "requirements": [
                    {
                        "parameter": "pain",
                        "value": 2,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "footfetish",
                "results": {
                    "success": {
                        "text": 'You enter the captain\'s room, and ask if there\'s anything you can help him with. He is a tall and muscular dingo, with unusual rust-red fur and a long lighter-brown muzzle. He\'s perusing a map and doing some measurements on it with a compass when you enter. He looks over to you, and scratches his scruffy muzzle. "Oh, yes, the stowaway. I suppose you could make yourself useful", he says in a gruff voice. He steps away from his map, and leans down to grab hold of the end of one of the thick leather boots he\'s wearing. He tugs on it, and slowly pulls it free from his paw. The musky stink of his huge dirty dingo feet emerges from the opening of the boot almost like steam. He pulls off the other one as well, and stands barefoot on the planks of his cabin, while he continues to look over his map.</p>You gulp as you get closer to the two boots. The brown leather is dirty and scuffed, and the tops of the boots are folded over, leaving a dark entrance from which the captain\'s thick, manly, rough stench wafts free. You hold your nose, and grab his boots, bracing them between your legs as you scrub over the leather with a rough brush. While you work, you do your best to breathe through your mouth and ignore the eye-watering musk, but you find yourself taking in a few breaths every now and then. At first, the stink of a sweaty pirate\'s filthy feet is appalling, but gradually your disgust begins to fade. You find yourself scrubbing harder, and getting closer to the leather. The captain SHOULD smell so strongly, you think. He works hard, and is a powerful, dominant pirate. He would have an overwhelming, manly stink to go with it! You want to be loyal and do what he says. You want to be a good pirate.</p>You realise that you have finished polishing the boots, and your head feels groggy and dizzy. You push the boots away, shaking your head and being thankful that your strength let you mostly resist the hypnotic effect of the dingo\'s feet. Even so, you find yourself unconsciously giving the pirate salute and staring at the captain\'s feet for the rest of your trip.',
                        "outcomes": [
                            {
                                "parameter": "time",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    },
                    "fail": {
                        "text": 'You enter the captain\'s room, and ask if there\'s anything you can help him with. He is a tall and muscular dingo, with unusual rust-red fur and a long lighter-brown muzzle. He\'s perusing a map and doing some measurements on it with a compass when you enter. He looks over to you, and scratches his scruffy muzzle. "Oh, yes, the stowaway. I suppose you could make yourself useful", he says in a gruff voice. He steps away from his map, and leans down to grab hold of the end of one of the thick leather boots he\'s wearing. He tugs on it, and slowly pulls it free from his paw. The musky stink of his huge dirty dingo feet emerges from the opening of the boot almost like steam. He pulls off the other one as well, and stands barefoot on the planks of his cabin, while he continues to look over his map.</p>You gulp as you get closer to the two boots. The brown leather is dirty and scuffed, and the tops of the boots are folded over, leaving a dark entrance from which the captain\'s thick, manly, rough stench wafts free. You hold your nose, and grab his boots, bracing them between your legs as you scrub over the leather with a rough brush. While you work, you do your best to breathe through your mouth and ignore the eye-watering musk, but you find yourself taking in a few breaths every now and then. At first, the stink of a sweaty pirate\'s filthy feet is appalling, but gradually your disgust begins to fade. You find yourself scrubbing harder, and getting closer to the leather. The captain SHOULD smell so strongly, you think. He works hard, and is a powerful, dominant pirate. He would have an overwhelming, manly stink to go with it! You want to be loyal and do what he says. Your face gets closer and closer to the opening of those boots, as your eyes half-close over and you begin to drool. The stench doesn\'t seem nasty to you any more. Well, it still does, but the nastiness is awesome and sexy. You press your face into the captain\'s boot, feeling the warm damp fabric over your nose and mouth, and the humid air inside flowing into your lungs like sweaty steam. You lick the sweat from inside, and lie back to feel his dirty boot resting over your face. He turns around, and grunts with surprise to see you eagerly nuzzling and shoving your face into his boots. "Stowaway! What are you doing?!", he demands. You try to stammer an explanation, but he grabs his footwear and kicks you out of the cabin.</p>After that, you get a reputation for being a paw slut. One chubby wolf pirate is swabbing the deck when he sees you, and he makes you get on your hands and knees and lick the dirt from the bottom of his wide, sweaty paws. The rat who sleeps on the hammock above you dangles his pink paws over the edge, and tells you to clean up the dirt from the day. You suck on his firm rough toes and lick his claws clean. Soon you\'re begging for the pirates to walk all over you and shove their feet on your face and belly, an experience that you find incredibly arousing, but also rather painful.',
                        "outcomes": [
                            {
                                "parameter": "pain",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "sharkman",
                "title": 'Go Fishing',
                "subtitle": 'The crew will appreciate some fish for dinner',
                "type": "statcheck",
                "stat": "might",
                "difficulty": 25,
                "requirements": [
                    {
                        "parameter": "pain",
                        "value": 2,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "default",
                "results": {
                    "success": {
                        "text": 'There is usually a pirate dangling a rod off the bow, hoping for something to augment dry biscuits and grog. You decide to give it a go yourself, and borrow a rod from a chubby wolf pirate in order to try it.</p>Your fishing rod trails in the water for a long time without a bite. You look off into the distance, seeing nothing but clear skies and calm seas, with not even any seabirds to break the endless sky. Suddenly, there is a twitch on your rod. You grip it firmly, and yank back. It feels like a hit! Something is wrong though, the fish on the other end is yanking and tugging at your line like it\'s as strong as an ox. You pull, and twist, turning the handle on your fishing rod and desperately straining against the line. Finally, you manage to heave back with all your might, and a huge fish bursts from the water and is pulled up onto the deck.</p>The other pirates whoop with delight as they see the size of your catch, and they give you a lot of scruffy, smelly hugs. Odd, though. The fish is big, but it doesn\'t look so big that it could have pulled with that much strength. For a moment, you think you see a fin break the water below the ship, before it slips away and disappears.',
                        "outcomes": [
                            {
                                "parameter": "time",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    },
                    "fail": {
                        "text": 'There is usually a pirate dangling a rod off the bow, hoping for something to augment dry biscuits and grog. You decide to give it a go yourself, and borrow a rod from a chubby wolf pirate in order to try it.</p>Your fishing rod trails in the water for a long time without a bite. You look off into the distance, seeing nothing but clear skies and calm seas, with not even any seabirds to break the endless sky. Suddenly, there is a twitch on your rod. You grip it firmly, and yank back. It feels like a hit! Something is wrong though, the fish on the other end is yanking and tugging at your line like it\'s as strong as an ox. You pull, and twist, turning the handle on your fishing rod and desperately straining against the line. No matter how much you pull, you can\'t seem to win this battle of strength. There is a sudden slack, and you almost fall backwards as something leaps from the water and lands on the edge of the deck.</p>You look up with shock to see water cascading from the body of an enormous black shark creature. His skin is gleaming and dark, his face is smooth and streamlined, with jagged white teeth, and his massive muscular arms and powerful legs are gripping the side of the ship, with hands and feet that are long and webbed. A massive tail thrashes behind him, and in his mouth is a huge fish...from which your line is emerging. "This. Is. Mine.", he says, in a slow, deep voice. You gulp as he takes a step towards you. His massive hand reaches out and grabs you, and you see two huge red throbbing cocks slowly emerge from between his legs. He turns you over roughly, and slams you down onto the deck. You feel his body press down atop you, and his hot fish-scented breath huff against your neck as his two cocks press against your rear, then slowly force your ass open and penetrate you. "You. Mine. Learn.", he says. You are helpless to resist as he shoves himself into you, thrusting deep and slamming in and out. His body drips seawater onto you, and pins you down under his rock-hard muscle and rough, hard skin. His breathing gets faster and harder as he pounds you more and more, until finally he growls and roars, unloading cum in two forceful blasts inside you. He slowly pulls out, leaving you dripping with his shark seed, before he turns and dives back into the water.',
                        "outcomes": [
                            {
                                "parameter": "pain",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "crowsnest",
                "title": 'Work in the Crow\'s Nest',
                "subtitle": 'It\'s boring, and the wind and sun will sting your skin, but it\'s less dangerous than most jobs here',
                "type": "statcheck",
                "stat": "might",
                "difficulty": 20,
                "requirements": [
                    {
                        "parameter": "pain",
                        "value": 2,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "default",
                "results": {
                    "success": {
                        "text": 'You decide to take a shift in the crow\'s nest. This job isn\'t for the faint of heart. The wind is fierce, there\'s no protection from the sun, and the swaying at the top can make even hardened sailors seasick. On the bright side, there\'s less physical strength required. You climb up the rope rigging, being careful not to look down, and take your position atop the mast. There\'s nothing in sight for miles around, but you diligently keep watch.</p>Hours later, you are doing pretty well. Your stomach isn\'t queasy and you are keeping your wits about you. As a result, you notice there is a white shape circling in the air above you. It slowly gets closer, moving silently and swooping in as it attempts to land behind you.</p>You turn quickly, and shove your elbow backwards. It rams into the soft chest of a tall white seagull. He gasps and staggers backwards, his flipper feet stumbling on the deck. You push him quickly, and he squawks and falls off the crow\'s nest. As he tries to flap his huge wingarms, he gets tangled in the rigging. The pirates notice, and two of them climb up to apprehend him.</p>Later, the captain calls you down and shows off the seagull, who is bound tightly with ropes around his chest and beak. "Great job, stowaway! This thief thought he could knock you out and then steal our supplies once the ship\'s guard was down. I\'ll be sure to deal with him", the captain says. The other pirates are very proud of you, and they give you double rations that night.',
                        "outcomes": [
                            {
                                "parameter": "time",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    },
                    "fail": {
                        "text": 'You decide to take a shift in the crow\'s nest. This job isn\'t for the faint of heart. The wind is fierce, there\'s no protection from the sun, and the swaying at the top can make even hardened sailors seasick. On the bright side, there\'s less physical strength required. You climb up the rope rigging, being careful not to look down, and take your position atop the mast. There\'s nothing in sight for miles around, but you diligently keep watch.</p>Hours later, you are not doing well. Your strength isn\'t quite up to the task as much as you thought it would be. Your skin is stinging, and you are very queasy and dizzy. You don\'t notice as a white shape circles the ship and lands silently behind you. A huge hand grabs your mouth from behind, and you are pulled back into the chest of someone. You see that the hand is covered in white feathers, and the fingers themselves are almost like long, thick feathers. "Make a noise, and I\'ll cut your throat", your attacker says. He pushes you down onto your knees, and walks around in front of you. You see a tall, thin seagull, with a wicked grin on his long beak. You kneel in front of his large orange flipper feet, and he reaches between his legs, pushing down his light loose pants to reveal his cock, which is starting to thicken and get erect. He pushes his fat cockhead against your mouth, and you feel him slide his length over your tongue and down your throat as he begins to fuck you. Your nose is pushed into his soft feathery pubes, and you gag on his dick as the thrusts and slams into you. He pants and breathes heavily, and his cock starts to twitch and harden more inside you, before he starts to cum. As his hot jizz gushes into your throat, he clenches his fist and punches you hard. You choke and snort seagull cum before passing out.</p>When you wake up, with jizz oozing from your nose and mouth, you discover the seagull stole some of the ship\'s supplies once you were unconscious. The captain is very disappointed in you.',
                        "outcomes": [
                            {
                                "parameter": "pain",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "pain",
                "title": 'Too Injured To Go On',
                "subtitle": 'The wolf pirates are worried. You\'re not recovering, and they are far from any healers. There is only one way to save you...',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "pain",
                        "value": 1,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "pain",
                "results": {
                    "success": {
                        "text": 'You clearly don\'t have the constitution to survive on a pirate ship. You are bruised and battered, and you pass out on the deck, falling unconscious as the ship sways beneath you. The pirates, worried about you, pick you up and carry you to the captain\'s cabin, where they rest you on his bed. You pass in and out of consciousness, only distantly aware of what they\'re talking about. "Found em passed out next to the mop bucket, cap\'n!", the chubby wolf says. A rat touches your forehead and makes a concerned noise. "Ain\'t gonna last much longer like this, captain. Can you do anything?", the rat says. The captain looks you over and shakes his head. "I\'m no healer, swabbies. Didn\'t bring any hoodoo onto the ship either. We can either accept losing our friend here to the cruel sea, or...we can try a spirit replacement", he says.</p>The pirates talk and argue about it for a while. With spirit replacement they could heal your injuries and make you better able to handle the journey, but your old life would be over. They\'d be calling on the essence of the ship to completely erase your old personality, replacing your memories, body and identity with that of a lifelong pirate. They don\'t want to do it, but in the end they decide that it\'s better than letting you die.</p>They start the ritual by removing all of your clothes, and taking your belongings. The chubby wolf packs them all up into a chest, and heaves it over the edge of the ship. The crew then dresses you up in new clothing, a piece from each of them. The chubby wolf pulls off his sweat-soaked bandana and ties it around your head. Another wolf drops his pants and pushes the dirty, rough material up over your legs, while two rats donate a cheap vest with all the buttons missing, and a pair of boots that are open at the toes. Finally, the captain pulls out an old cutlass he hasn\'t used in years, and ties it onto the sash around your new pants.</p>Your body starts to shift and change, moving and altering itself to fit the clothes. Your ears grow and push up, sliding under the headband and then over it, before growing large and round. Your face pushes forward, stretching into a pointed muzzle, before sprouting crooked, thin white whiskers. In the boots, your feet begin to stretch. Your toes grow longer, your soles toughen and harden like you\'ve been working on the high seas your whole life, and you grow short, sharp claws. A tail emerges from the hole in the back of your pants, growing longer and thicker as it snakes down the bed and along your leg, becoming a long rat\'s tail.</p>In your dreaming state, you find yourself recalling old memories. Something\'s not right, though. You can\'t seem to remember where you grew up. Instead, your memories are mixed and shuffled together with new ones. You remember being a kid on the streets of Makarna, an unwanted street rat. Captain Rock cuffed you when you tried to pick his pocket, but he took pity on you and took you to his ship to teach you to be a cabin boy.</p>Your memories of school and growing up are being crowded out by all the things you learned on Rook\'s ship. How to use a sword, and how to climb rigging and repair a sail. Hours upon hours of swabbing decks and cooking food for the rude and crude pirates. Also, though, the camaraderie and companionship of your shipmates, and trusting in the captain to look after you and do what\'s best.</p>You start to scratch at your skin in your sleep, feeling your hands become longer and rougher. You grow scruffy, dirty rat fur all over your body, and you squeak and moan as your mind and spirit feels confused and strange. You remember the cute fat wolf pirate, Barker. He had a crush on you, and you hooked up with him in the brig once, losing your virginity and taking his as you kissed his nervous muzzle and tasted his thick cock. The quiet gloomy tall rat Jericho, who taught you how to cheat at cards and thought of you as a little brother. The time you saved the captain during a boarding party, when an enemy pirate was about to stab him in the back, and you struck someone down for the first time with a knife in the back.</p>Outside, the other pirates get dizzy too, their own memories shifting to take you into them, the spirit of the ship changing the world to make you part of this one. You jerk awake, and sit up, looking around at the familiar confines of the captain\'s cabin. You ask what the fuck you\'re doing in here, and everyone looks equally confused about what just happened. The captain takes charge and orders everyone to get back to work. For a moment he looks at you curiously, before his expression is replaced by that mixture of stern leadership and fatherly affection you\'re used to. "I\'m glad you are well", he says, before returning to his work.',
                        "trapped_desc": 'This is Jack Salt, a short and somewhat scrawny rat pirate. He has a few scars on his pointed muzzle, and he looks underfed, but he\'s lived his whole life as a pirate and he is plenty dangerous when cornered. Under his rough clothes and dirty fur, the yellow colour of his fur indicates he was probably born somewhere in Makarna.',
                        "trapped": 'You are a cabin boy rat, a pirate on this ship. You have no intention of ever going anywhere else. This is where you\'ve lived all your life.',
                        "outcomes": []
                    }
                }
            },{
                "id": "savemebat",
                "trapped": true,
                "title": "Mister Bat? What are you doing here?",
                "subtitle": "One night on the ship, you find an unexpected visitor. A tall bat wearing a top hat is resting on the side of the boat, reading a book.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "mrbat",
                "results": {
                    "rareSuccess": {
                        "text": 'You approach the bat cautiously, one hand at the hilt of your cutlass. You would call an alarm, but somehow you feel like you know this man, even though you are certain you\'ve never met before. The bat turns to you and smiles with his gleaming fangs. "Hello friend! Got yourself into trouble again, I see?", he says. You blink at him in confusion, and tell him you\'ve never met.</p>He hops up onto the deck and bows to you, doffing his hat as you do so. You are so surprised by his actions that you don\'t react in time when he suddenly moves forward and wraps his wings around you like a cloak. You yell and shove and push at him, until suddenly you fall forward onto the deck. The bat is gone, but more bizarrely, your body is no longer that of a rat. You are back to your old self, like none of it ever happened.',
                        "freeTrap": true,
                        "outcomes": [
                            {
                                "parameter": "pain",
                                "quantity": 0,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "nextfromsea",
                "title": 'One More Pirate Before You Go',
                "subtitle": 'No matter how long you wait, the ship never seems to be any further along. You know you are moving quickly, and the wind is good, but the endless ocean makes distance impossible to guess. You need something to pass the time.</p>You are contemplating this when your nose prickles from a salty, sweaty and overpowering stink. You turn to see a sailor leaning on the side of the deck next to you. He\'s a wolf, his fur thick and shaggy, with big paws and a long but chubby snout, going with his round belly that peeks out from under his striped shirt. He stinks with a rough and dirty odor. He opens his muzzle and lolls his tongue happily at you. "Lookin\' for a good time? I can keep ya busy, cutie!" he barks.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "time",
                        "value": 1,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "pain",
                        "value": 2,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "navigateicon",
                "results": {
                    "grizzsex": {
                        "text": 'The chubby wolf makes a short, happy howling sound, before grabbing you and hugging you firmly. Your face is shoved into his soft belly, and the stink of his unwashed fur washes over you. His large hands stroke over your back and down your sides, before he presses his muzzle against your neck, chest and crotch. His sniffing, nuzzling muzzle is ticklish and affectionate. You feel his wet nose slide down your belly, savouring your scent before you jump a little when he shoves his face firmly into your crotch. His long tongue slides out and licks up your thighs and around your crotch, and his hands roll you over so that he can sniff your rear. His affections are so eager that you barely have time to respond. You just grunt when you feel his cold nose slide along your tailhole, and then shudder when his expert tongue licks your rear and teases your hole.</p>You are pressed down on the wooden deck, the chubby wolf pressing down atop you as he licks up and down your ass. You squirm when his tongue curls and presses against your rear, and then you moan and shudder when you feel his tongue slip briefly inside you. Once you are thoroughly lubricated and slippery, you feel his thick cock sliding between your cheeks. He starts to hump and slide it up and down, hotdogging you while his fat belly bounces on your back. You hear his claws scraping against the wooden planks when he starts to get more excited, and then he howls a long, happy sound. You feel his hot ropes of cum spray along your back, in thick and messy spurts that drip down your sides.</p></p>For the rest of the trip, the dirty and smelly wolf sailors are all over you. You are woken up in the morning with a wolf licking your feet, his tail wagging. You will be eating dinner when one will offer you to eat his ass or suck his fat cock. Several times when walking along the deck, a wolf will grab you and shove your face deep into his damp sweaty armpit, or beg you to rub and jiggle his fat belly. While you are getting an eager butt-licking from one of the wolves, he admits to you that the whole crew are actually pirates. They never actually hurt anyone, but a few armpit-shoves tend to knock out most opponents with musk overdose.</p>Eventually, after you are well aquainted with the pirates and their various unique musks, you reach your destination. The ship travels up a river, and the pirates drop you off at the docks before carrying on with their journey. A whole gang of chubby pirates waves you off as they leave, their tails wagging, and you realise you will miss your new friends.',
                        "area": "lionquest_glowscale",
                        "outcomes": [
                            {
                                "parameter": "time",
                                "quantity": 0,
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