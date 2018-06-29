var area = {
        "title": "otterton",
        "header": "Otterton",
        "nomap": "You don't know your way around this area yet. You'll have to navigate on foot.",
        "subheader": 'Otterton is a tiny and quaint village, existing mostly just to service the little-used port at the southern end. A few brightly-painted shops and stands surround a cicular plaza that makes up the town center, with some residential cottages down one road. The cry of seagulls and salty sea air makes the atmosphere bright and welcoming.',
        "events": [
            {
                "id": "otterton_n",
                "title": "Travel North to the old stone wall",
                "subtitle": "Leaving Otterton is the first step on the road back north to Dormaus.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
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
                    "success": { //success and fail, rare success, rare fail, or random
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
                    "success": { //success and fail, rare success, rare fail, or random
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
            }
        ],
        "npcs": [
            
        ]
    }