{
        "title": "otterton",
        "header": "Otterton",
        "position": [0.41,0.85],
        "mapId": "worldmap.jpg",
        "subheader": 'Otterton is a tiny and quaint village, existing mostly just to service the little-used port at the southern end. A few brightly-painted shops and stands surround a cicular plaza that makes up the town center, with some residential cottages down one road. The cry of seagulls and salty sea air makes the atmosphere bright and welcoming.',
        "events": [
            {
                "id": "gotopatron",
                "title": "Go to the Patron's Lounge",
                "subtitle": "A mysterious door here leads to the patrons-only area.",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "contributor",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { 
                        "text": "You open the door, and walk through into a mysterious ballroom.",
                        "area": "patrons",
                        "outcomes": []
                    }
                }
            },{
                "id": "otterton_n",
                "title": "Travel North to the old stone wall",
                "subtitle": "Leaving Otterton is the first step on the road back north to Dormaus.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { 
                        "text": "You leave the small fishing village and begin climbing back up into the valley.",
                        "area": "otterton_hill",
                        "outcomes": []
                    }
                }
            },{
                "id": "otterton_w",
                "title": "Travel West out past the village to the cliffs",
                "subtitle": "The shore arches up to the west, becoming steep seaside cliffs.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { 
                        "text": "You climb up a twisty narrow path, travelling uphill and away from the village towards the cliffside.",
                        "area": "witch_peak",
                        "outcomes": []
                    }
                }
            },{
                "id": "otterton_e",
                "title": "Travel East to port",
                "subtitle": "The main hub of Otterton is its busy, thriving port.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { 
                        "text": "You weave past busy sailors and cargo-carriers towards the ports",
                        "area": "otterton_dock",
                        "outcomes": []
                    }
                }
            },{
                "id": "fishman",
                "title": "Otters Need Fish",
                "subtitle": 'You see a dejected-looking otter walking away from the port, with one of his hands in the large pockets of his overalls, and the other holding a fishing pole. He\'s tall and muscular, with firm athletic muscle under his soft fur. You ask him what\'s wrong, and he tells you that he was really looking forward to eating some fish today, but just couldn\'t catch anything. He then looks you up and down and smiles a bit, and you notice one of his fangs is crooked, and sticks up a bit from his lower jaw. "Hey, you could help me out with that if you want?" Do you want to assist the otter?',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 27,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "grizzsex": {
                        "text": 'The otter\'s eyes gleam as he takes your hand and pulls you down to the port. You assume he\'s going to get you to help him with fishing, and you follow him as he walks down some steps carved into the side of the quay, and down into the water. He\'s standing crotch-deep in a the shallow protrusion from the dock, and you follow him very carefully, your legs quickly getting soaked in the cold ocean water. You look around, and open your mouth to ask him what you need to do, when he suddenly leans forward and kisses you. His whiskers tickle your cheeks, and his furry muzzle bumps and rubs against you as his tongue rolls and licks around your own. His webbed hands grip your sides as he pulls you in close, and you can\'t help but kiss him back. As you do, your body starts to feel strange. </p></p>The water against your feet, previously cold and offputting, begins to feel comfortable and familiar. Your body cools down, and your flesh feels clammy and chilly, but in a strange way it feels good. The otter rubs his hands across your chest and your head, brushing at you, and then pulls his face away. You blink and blush, before you begin to realise something is different. You reach up to your head and feel cold, smooth skin all over your skull. Your body is completely hairless and smooth, with strange patterns in your skin almost like scales. The otter kisses your cheek, and you wriggle as your ears start to stretch and grow. They flare out and bend backwards, becoming thin and webbed as they transform into strange fins. Your face pushes out in the front, your nose and mouth becoming a sort of streamlined muzzle or beak. The otter takes your hand and kisses it, and you feel your fingers grow long and strong, before webbing grows between them. He lets himself fall back into the water, then tugs on your foot. You fall on your butt as he kisses and licks your feet, making them stretch out longer too. Webbing covers your toes as your skin becomes a greyish-blue, and you feel strange slits forming on your neck. The otter lifts your legs and pushes his head between them, where he slips his furry muzzle under your cheeks and kisses your rear. You feel your tailbone grow and shift, thickening and stretching out as it rapidly packs on flesh and muscle. It grows into a thick, long scaly protrusion, tipped with a fin, like the back-half of a trout.</p></p>Finally, the otter presses his face to your crotch. He looks up at you with a cheeky, lustful expression, as he starts to kiss and lick between your legs. You lean back and squirm, your tail and feet thrashing in the water. Your genitals feel bizarre, somehow warm and needy, yet also cold and scaly. You pant, looking down to see the otter\'s tongue lapping and licking at a strange, scaly slit between your legs. You barely have time to be shocked by your new anatomy though, because the pleasure of his ticklish whiskers and naughty tongue have driven you over the edge. Your slit erupts with white cum that fogs into the water like a cloud. The otter shoves his muzzle against you, licking and swallowing your aquatic fluids eagerly, while his tail thrashes behind him. He then leaves you panting and floating in the water, and wipes his muzzle before he winks at you. "Thanks, I told you I wanted to \'eat\' some fish!" he says, and chuckles as he swims away.',
                        "descriptionchange": 'This adventurer is a fishlike creature, with smooth scaly grey-and-blue skin. They have a long and thick tail like the rear of a fish, and their hands and feet are long and webbed. Their head has fins where the ears would be, and a set of frilly fins protrudes from their spine.',
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 27,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "stocks_rat",
                "title": "Rat Stocks",
                "subtitle": 'You notice that at one end of the plaza is a raised platform, on which is a pair of old-fashioned stocks. They\'re a little odd though, as they have two sets of holes each, and are low to the ground. Just as you are wondering what they are for, you see a white rat struggling as he is dragged along by a burly otter wearing a police shirt. "It\'s stocks for you, criminal. A few hours in here will teach you not to pilfer!", the otter says. He pulls up the stocks and forces the rat to bend over. His pink paws are forced into one set of holes, before his arms are placed in the other, and the whole contraption is locked up tight. The rat struggles and curses, but he\'s unable to escape. The otter then leaves him to his fate.</p></p>It occurs to you that the helpless rat couldn\'t do anything about it if you wanted to play with his exposed pink paws. Do you want to have some fun?',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 35,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "footfetish",
                "results": {
                    "grizzpay": {
                        "text": 'You walk up to the rat, and he looks up at you. "You here to help me out? All I did was steal some bread...and a few little rings and jewels, no one woulda missed em!", he says. You ignore his pleas, and sit down in front of his exposed paws. You take one of his feet into your hands and start to rub and stroke the warm sole, making his clawed toes wiggle and stretch. "H-hey! Whaddya doin\'?!", he cries out, but his struggling doesn\'t prevent you from having your fun. You massage your thumbs into his firm soles, and squeeze and tease his long toes, before stroking and tickling him, making him laugh and wheeze and struggle. </p></p>You press your face to his foot, sniffing it before taking a lick. Your tongue slides up and down his sole, pressing against the softer more padded parts, and slipping between his toes, making him laugh even more ticklishly. Once his feet are shiny and wet with your saliva, you press his warm paw to your crotch, and start to hump and grind against it. He blushes and squirms, but his wriggling just makes you enjoy it more. By the time you are done, he is red-faced and embarrassed, and when you walk away he calls you a weirdo, in a bashful mumble that makes you suspect he may have enjoyed himself more than he let on.',
                        "outcomes": [{
                            "parameter": "fish",
                            "quantity": 10,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "rat_tf",
                "title": "A Short Reprieve",
                "subtitle": 'The rat in the stocks gestures to you with his head, a desperate look in his eyes. "Hey! Buddy! Please, you gotta help me out. Take my place for just ten minutes would ya? I need to piss real bad!"',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 35,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "grizzsex": {
                        "text": "You approach the rat, and he grins eagerly. His head is covered in light brown fur, which forms markings like a hood down his neck, before transitioning into the soft white fur that covers the rest of his body. He looks up at you with a slightly nervous grin. \"Can you believe this? All I did was steal some bread! And like, one or two other things. They\'ve had me stuck in here for hours! Please, you gotta help me\", he says.</p>You ask him what you can do, and he glances aside nervously. \"So just like, agree to take my place for a bit? It\'ll only be ten minutes. You\'ll be me for a little while, I get to go take a quick piss, and then we change right back. Simple, right?\", he explains.</p>You look down at him, while he gives you a desperate smile. He is admittedly kind of cute. His pink paws are large and soft, and his tail is stretched out behind him and is equally smooth and pink. His body is lean, but not too thin, with soft cute white fur and a very noticeable pair of large furry rat balls. His long, ratty muzzle is very slightly crooked, and his front teeth are long and just out from his face.</p>You get the strong impression that he is trying to swindle you. Even so, you hesitantly agree. He looks legitimately shocked. \"Er, great! Just touch that symbol there on the front of the stocks, to show you\'re willing to take on my punishment. Temporarily\", he says. You kneel down, ignoring his large bare feet, and see the symbol he means. It\'s a painted sigil on the wood. You press your finger against the black paint, and immediately it starts to glow. The wooden stocks disappear, and the rat leaps up eagerly. He hops backwards as you find yourself dragged forward onto the platform. You are forced down onto your rear, and then you feel your body bend forward like someone is pushing on your back. The air in front of you glows, and the stocks reappear, surrounding your hands and feet and trapping you in this uncomfortable pose.</p>The first thing that changes is your feet. You feel them start to grow, your soles becoming softer and bulging out slightly. They feel very sensitive and smooth, and your toes stretch out, becoming longer and stronger. Small claws appear at the tips, and your hands start to change the same way. Your skin getting softer, your nails becoming short, sharp claws. Behind you, you feel your tailbone starting to grow. It stretches and shifts as it segments itself, growing out into a long, thin tail covered in smooth pink skin, with ridged areas like the body of a worm.</p>Your face pushes out, stretching and growing as it elongates into a rat\'s thin, long muzzle. There is a strange bending feeling for a moment, as you take on the rat\'s unusual kinked-muzzle shape. You feel your front teeth push out over your lips and stretch down, becoming open to the air. Whiskers sprout from your new rat face, and twitch as you smell the salty air around you more strongly than before. Your ears grow larger and rounder, while fur begins to spread down your body. It is smooth and white below your neck, covering your slender new form, but a darker brown over your head.</p>You look up at the former rat, as he shifts and changes. He strokes his face, feeling his altered form as he takes on your former appearance. \"Woah, I cannot believe someone fell for that\", he says in your own voice. You shrug, having basically expected this would happen. At least his punishment is only a few more hours. The most annoying part is that he was telling the truth about needing to piss, and judging by the uncomfortable swollen feeling behind your huge furry rat balls, you took that aspect of him too.</p>The former rat turns to leave, but he gets distracted, finding himself staring at your feet. You wiggle your toes and flex them, and he starts to drool. \"F-fuck, what the hell...do you have a foot fetish or something? I can\'t stop looking...\", he says. Whether you do have a foot fetish, or whether he\'s just in denial about his own, he finds himself kneeling in front of you.</p>He slowly strokes his finger down your long, smooth paw. It\'s extremely sensitive, and you squirm a little. He takes your foot in both his hands, and starts to rub his fingers and thumbs against your soft, bulging feet. He massages small circles along your sole, and squeezes and rubs your long toes. Before long, he\'s pressing his face into your feet, and sniffing and nuzzling them eagerly. He opens his mouth and starts to lick your bare paws, tasting every inch of them and even sliding his tongue between each toe. He slides one of your toes into his mouth, sucking it as he squeezes and rubs the sole, then moves on to your other foot to give it the same treatment. He services you like that for hours, only stopping when someone comes to set you free. As he sees your stocks getting unlocked, he quickly gets up, wipes your paw sweat off his face, and flees before you can get him back.",
                        "descriptionchange": "This adventurer is a scrawny white rat with smooth, soft pink feet and a slightly crooked, cute brown muzzle.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 35,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "rat_piss",
                "title": "A Different Reprieve",
                "subtitle": 'The rat in the stocks gestures to you with his head, a desperate look in his eyes. "Hey! Buddy! Please, you gotta help me out. Take my place for just ten minutes would ya? I need to piss real bad!" Your eyes gleam and you grin at the word "piss", and he starts to look nervous.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 35,
                        "comparison": "nequal" //default greater
                    },{
                        "parameter": "pisscurse",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "default",
                "results": {
                    "grizzpay": {
                        "text": "You walk up to the rat, and he grins nervously. \"H-hey, you\'re gonna help me out, right?\", he says. You ignore him, and walk around behind the stocks. He tries to turn and look at you, and struggles in his bindings. \"Hey! What are you doing?!\", he says with an increasingly panicked voice. You lie down, and slide yourself against him. He yelps and bounces up as your head pushes against his rear, which lets you get yourself underneath him. His huge, fuzzy rat balls rest on your neck, and his thick flaccid cock twitches in front of you. \"What the fuck are you doing, you lunatic?!\", he says. You just open your mouth, lean your head up, and slide his warm, soft cock into your mouth. It rests on your tongue, twitching and tasting faintly salty.</p>Eventually, he realises what you want. He groans, and struggles, but he can\'t get himself free from you. Finally, he relents. With a blush on his face, he closes his eyes and tries to relax. After a long pause, his cock bounces and he starts to unload a thick, hot stream of acrid piss. You guzzle it down eagerly, not wasting a single drop. Once he starts, the flow comes in earnest, as he unloads a swollen bladder full of stinky rat urine.</p>Eventually, he finishes, and you lick the last traces of piss from his cockhead. You climb out from under him, and he looks away, his cheeks red. You tell him you\'ll be back later when he needs to go again. \"Please don\'t\", he squeaks.",
                        "outcomes": [
                        ]
                    }
                }
            },{
                "id": "skunk_tf",
                "title": "Scent Store",
                "subtitle": "There is a market stall set up by the docks. It’s odd to see a merchant this close to the water not selling fish. When you walk by, you see a huge array of colourful and twisty perfume bottles for sale. The merchant is a familiar handsome skunk, stocky and grinning. His thick striped tail sways to and fro, blowing around the mixture of strange scents coming from the bottles and samples. “I see I’ve attracted a customer! Would you like to sample one of my perfumes? I have scents to fight the salty stench of the sea!” he says. Do you want to take a sniff? [Contributed by Reese Ikena]",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 18,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "mikhailsex": {
                        "text": "Surely there’s nothing wrong with a strange skunk offering you a strange bottle? You let him uncork a vial and waft it under your nose. It smells lovely, quite musky and libido-inducing, and it reeks of sweat. You find yourself drooling and blushing, your body tingling with a desperate need. When the skunk corks up the bottle again, you clutch the edge of his stand. Your mouth is dry, and you desperately need more. You reach out for the bottle, but the skunk pulls it away. \"Ah ah! Sorry hun, but I can’t just sell that to you. I can still help you out though! You can have a taste from the source.\" he says.  </p>The skunk stands up and drops his pants, revealing his large, black cock and a pair of heavy balls. You can’t stop yourself from walking around the stall and pressing your face into the skunk's junk. He uses a hand to press your face into his balls, his cock resting on your head. You start to lick his balls, nuzzling and lapping up his sweat as if you were dying of thirst. You happily taste the salty liquid, and your lungs are filled with the masculine scent. </p>As you continue to lick and rub your face against his balls, you start to change. Your face pushes forward into a muzzle with a pink nose and black and white striped fur. You barely feel the fur continuing down your entire body, giving you a beautiful striped coat. A tail pushes out of your spine, flowing out behind you. It grows large and becomes covered with the same fur as your body, including a lovely white stripe. As you grow soft, pink pads on your hands and feet, as well as tiny dark claws, you have become a skunk, just like the one you’re currently nuzzling. You don’t stop worshiping the skunk’s balls, not even when a little precum dribbles down your face, but eventually he finishes selling his goods and packs up to go. He frees you, gives you a flick on the nose, and heads on his way. You lie on the ground, still thinking about the sweaty taste of his balls, before you finally come to your senses and get up.",
                        "descriptionchange": "This adventurer is a furry black skunk, scented faintly of an odd musky perfume that flows around when they wave their enormous striped tail.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 18,
                                "change": "set"
                            },
                            {
                                "parameter": "scent_obsession",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "otterton_random",
                "title": "Explore the village",
                "subtitle": "There are small shops and food stands, along with a massive amount of fishing stores",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "Unlucky postbox": {
                        "text": 'You see a muscular beaver berating a short, scrawny weasel who is carrying a messenger bag. "You idiot! This is the wrong mail, AGAIN! Can you do nothing right?!", the beaver roars. The weasel offers a meek retort, but the beaver has clearly had enough. He picks up the shorter male by his sides and carries him to a wooden pole by the side of the street. He then rams him down roughly, and the weasel yelps loudly as the polished pole is forced up his tailhole and deep inside him. The beaver pulls off the postal worker\'s bag and starts to pull out envelopes, which he then shoves into the weasel\'s mouth. The more he shoves in, the more the weasel starts to change. </p></p>His slender body starts to compress and spread out, inflating and becoming boxy and strange. His hair smooths out, turning into two blocky slopes atop his head. His limbs start to melt into his torso, including his long fuzzy tail. His fur flattens and smooths out, as the brown and tan becomes a shiny artificial red. His struggles slow and finally cease, while his face disappears into his body and leaves only the square hole of his new mouth. As he stiffens and transforms into wood, he is left as nothing more than a shiny new postbox. "There, now you can actually be useful!", the beaver says, before leaving the weasel to his fate.',
                        "outcomes": [
                            {
                                "parameter": "fish",
                                "quantity": 10,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "telemakarn",
                "title": "Teleport to Makarna",
                "subtitle": "Use your magic to warp to Makarna",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "teleportation",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { 
                        "text": "You draw magic around you like a cloak, and in an instant you find yourself rushing through the sky to your destination...",
                        "area": "makarna_dockyard",
                        "outcomes": []
                    }
                }
            },{
                "id": "teledorma",
                "title": "Teleport to Dormaus",
                "subtitle": "Use your magic to warp to Dormaus",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "teleportation",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { 
                        "text": "You draw magic around you like a cloak, and in an instant you find yourself rushing through the sky to your destination...",
                        "area": "dormaus_entrance",
                        "outcomes": []
                    }
                }
            },{
                "id": "telenorth",
                "title": "Teleport to the North",
                "subtitle": "Use your magic to warp to the strange voice calling to you in the deep, frozen north",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "teleportation",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { 
                        "text": "You focus on the tug you felt from the north when you were initially learning to teleport. It takes very little effort to find it again, and you are quickly swept away by its call. Called north. Where it fell...",
                        "area": "tundra",
                        "outcomes": []
                    }
                }
            }
        ],
        "npcs": [
            
        ]
    }