var area = {
        "title": "beside_river",
        "header": "Beside the River",
        "nomap": "You don't know your way around this area yet. You'll have to navigate on foot.",
        "subheader": 'You are standing beside the bend of a river, whos babbling waters flow clear and fast. The river comes down from the mountains to the east and flows down, before bending as it hits the bottom of the valley, then flowing down towards the sea.',
        "events": [
            {
                "id": "windy_north",
                "title": "Travel further North",
                "subtitle": "There's still a long way back to Dormaus.",
                "type": "statcheck", //or random
                "stat": "might",
                "difficulty": 20,
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You climb further up the valley, still far from visible civilization.",
                        "area": "down_valley",
                        "outcomes": []
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'You start climbing up the valley, but you are bruised and achey from the long journey, and still with no civilization in sight.',
                        "area": "down_valley",
                        "outcomes": [{
                            "parameter": "pain",
                            "quantity": 1,
                            "max": 1,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "windy_west",
                "title": "Travel to the Western Woods",
                "subtitle": "The woods are dense and dark to the west, and they go all the way up the mountainside",
                "type": "statcheck", //or random
                "stat": "might",
                "difficulty": 20,
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You walk into the woods, the light around you fading as you get deeper.",
                        "area": "eastwoods_entrance",
                        "outcomes": []
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'You walk into the woods, the light around you fading as you get deeper. You are nicked and cut by branches and brambles as you travel.',
                        "area": "eastwoods_entrance",
                        "outcomes": [{
                            "parameter": "pain",
                            "quantity": 1,
                            "max": 1,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "windy_south",
                "title": "Travel further South",
                "subtitle": "The coast is gleaming on the horizon.",
                "type": "statcheck", //or random
                "stat": "might",
                "difficulty": 20,
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You climb down the valley, following the river.",
                        "area": "windy_path",
                        "outcomes": []
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'You climb down the valley, but twist your ankle on the soft and loose ground by the riverside.',
                        "area": "windy_path",
                        "outcomes": [{
                            "parameter": "pain",
                            "quantity": 1,
                            "max": 1,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "lizard_feet",
                "title": "Lizard Feet",
                "subtitle": 'As you walk along the glittering river, you see another adventurer sit down on the bank. He is a tall green lizard, with firm rugged scales on his back and softer, pale yellow scales down his belly. He sighs, his long thick tail swaying on the grass, and starts to tug on his large brown boots. They come off with some difficulty, revealing wide and powerful scaly feet, which he gently rests in the flowing water. He stretches and splays his toes, and looks very relieved to be giving them a rest. Do you want to go over and help him with those?',
                "type": "random",
                "requirements": [
                    
                ],
                "icon": "footfetish",
                "results": {
                    "grizzpay": {
                        "text": 'You take a seat on the grass bank next to the lizard, and he smiles at you with his short but thick muzzle. He\'s not wearing a shirt, and sweat glistens on his muscular chest. "Hey there. Just wanderin\' down the valley, and thought I\'d take a break. Walkin\' all day in these boots has left my talons achin\'", he says, before lifting one of his large feet from the river and stretching it. Before he can return it to the water, you take hold of his ankle and lift his foot onto your lap. He blinks in surprise, but then grins. "Oooh, I see what this is", he says, and turns to rest his back on a tree trunk before placing both of his dripping wet feet in your lap.</p></p>Each of the lizard\'s feet has three large, chubby toes, tipped with thick black claws. The tops of them are firm and rough with green scales, but the undersides are soft and warm. You rub your fingers through his soft soles, squeezing and rubbing your thumbs into them to relax and calm him. He growls and shudders a little with pleasure, and when you begin to rub and squeeze his toes, he reaches his hand into his pants and starts to stroke himself. You rub and massage him more, your fingers moving between his large toes, around the sides, and up and down the underside of his feet. You then lift his foot to your face, and press your mouth into it, feeling his toes curl around your head and his warm, damp foot cover your mouth and nose. </p></p>Pulling his foot down a little, you suck on one of his clawed toes, feeling the blunt black claw tease along your tongue. Your own tongue then slides between his toes, where his foot is warmest. Your face and crotch are soaked with the water from the river, but it was worth it for the experience. The lizard shudders, and lifts both of his feet to press them on your cheeks, trapping you in a warm prison of musky lizard paw. When he finishes panting, he pulls his hand free from his pants to show it is dripping with cum. "Wow, thanks. The people here sure are friendly. You can lick my feet any time, friend!", he says, before collecting his things and walking off, leaving you some coins as thanks.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 10,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "hungry_dragon",
                "title": "A Sleeping Dragon",
                "subtitle": "As you walk along the banks of the river, you feel the ground rumbling. The reason for it is quite clear – to your surprise, there is an enormous dragon sleeping right here on the grass! He is clearly male, because his fat pear-shaped body is resting on his side, with his enormous cock flopping softly between his legs. His massive scaly muzzle is slightly open as he snores, and the sound of his mighty snoring is causing the ground tremors. His thick, fat green tail is dangling behind him, and his enormous soft clawed feet are twitching in his sleep. You find yourself confusingly aroused at the thought of offering yourself up to be this fat beast\'s meal. Do you give in to your desires?",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "vorefetish",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You don't realise of course that this dragon's hypnotic musk is designed to ensnare prey like you. But how will you feed yourself to him? Time for a decision.",
                        "area": "dragon_vore",
                        "outcomes": []
                    }
                }
            },{
                "id": "festival_otter",
                "title": "Help Robbie with Deliveries",
                "subtitle": "You notice something bobbing on the water, slowly heading down the river. On closer inspection, it appears to be a large crate. A few bubbles emerge from behind it, and then with a sudden splash, Robbie the otter hops out from the water, and rests his arms atop the floating crate. He gives you a cheerful grin. \"Oh hey! You're a sight for sore eyes. Want to keep me company? I've got to transport a bunch of these crates down to Otterton before the festival starts!\"",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 24,
                        "comparison": "nequal" //default greater
                    },{
                        "parameter": "robby_spell",
                        "value": 4,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "grizzsex": {
                        "text": "You agree to tag along, and Robbie dives under the water, then reappears on the other side of the crate. He nudges it sideways until it is bobbing against the side of the riverbank. \"Hop on, cuz!\", he says. You carefully step onto the crate, feeling it bounce and sink a little in the water, before you manage to clamber aboard.</p>Robbie continues pushing the crate, which gradually returns to the middle of the river as he floats it down. \"So, you been up to any exciting adventures lately?\", he asks. You start to tell Robbie about what you've been doing recently, but while you talk, his whiskered face seems to hover around your feet. He reaches up and starts to pull off your shoes and socks, then strokes his padded hands over your bare soles. You look down at him as he pulls your bare feet into the water, and he gives you an innocent smile. \"Go on! I'm totally listening, cuz. Just thought you might enjoy the water!\"</p>You poke the otter on his muzzle with your dripping wet foot, and carry on talking while he nuzzles his tickly, whiskered muzzle over your sole. He pulls your feet under the water again, and you feel your soles growing tough and firm under his touches and strokes. A strange feeling spreads up between your toes, and you pull your feet back out, to see dark black webbing between your toes, even as your toenails sharpen and stretch out into small black claws. Robbie's eyes twinkle as he licks your new webs, and you feel a tingly, warm sensation flow up your skin from your feet upwards. Soft, smooth brown fur begins to grow over your new paws, up your legs and gradually up to the rest of your body. He grips your paw in one of his clawed hands and squeezes your toe. \"You know, the water feels pretty good today. I bet this delivery would go even faster with two people pushing\", he says.</p></p>The otter may be cute, but he's not subtle. You pull your shirt up over your head, and shuffle out of your pants before leaving them both folded atop the crate. Robbie whistles appreciatively at your naked body, and you give him a playful shove on his head with your foot. He responds by sinking down in the water, then lunging up, wrapping his furry arms around your chest, and falling back as he drags you into the water with him. You feel the water surge up around your body, as the smooth sleek fur of your changing form spreads up your chest and arms. Robbie's hands stroke down your back and squeeze your rear, and you feel your tailbone shifting and growing. It stretches out, thickening with muscle and strength as it becomes a strong, sleek rudder tail just like his.</p>His whiskered face presses to yours, and you feel his cold nose poking against your own as he starts to kiss you. His tongue slides against your own, and you feel his sharp, short teeth against your tongue as you twirl and twist under the water.</p>You flex your tail, and push yourself up to the river's surface. You feel yourself breach, sending water twinkling and splashing through the air. Robbie rises up in front of you, and pins you against the crate, his arms at your sides. You kiss him first this time, feeling your face stretching into a streamlined furry muzzle, your own sharp otter teeth growing in, and your own sensitive whiskers sprouting from your cheeks. His slender furry chest presses against your own, and you nuzzle and cuddle with him as the last of your changes settle in.</p>Once you feel yourself fully returned to your otter shape, you give Robbie a playful lick, and then duck down under his arms, before emerging next to him. With both of you pushing and flexing your powerful tails, the crate speeds along the river at a rapid pace. Robbie has such a wide grin and cheerful look that you find yourself compelled to ask why he always wants to turn you into an otter. He looks surprised for a moment, then glances away as he thinks. \"Oh! I'm not sure, really. I guess I just always thought it would be nice to have, like...a family, I guess?\", he says. You wouldn't have noticed if you hadn't spent so much time around him, but just for a moment his happy look faltered very slightly. You switch the conversation to more cheerful topics instead, and the two of you reach Otterton in what feels like no time at all.",
                        "area": "otterton_dock",
                        "descriptionchange": 'This adventurer is a short otter, with a slender, lithe body, and a thick brown rudder tail.',
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 24,
                                "change": "set"
                            },{
                                "parameter": "festival_time",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "river_random",
                "title": "Relax by the river",
                "subtitle": "The cool fresh water is perfect for travellers who need to stock up between Otterton and Dormaus",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "Cursed Pole": {
                        "text": 'You notice a boat floating lazily on the river, just out of reach. Inside it, a human is relaxing with a strange fishing pole. It doesn\'t look like he\'s getting many bites though. You see a ripple in the water, and suddenly an otter\'s head pops up from the depths, holding a fish in his teeth. The otter\'s eyes are swirling and spinning with colours, as he climbs into the boat and drops the fish at the human\'s feet. The human then swishes his multicoloured pole, and the otter dives back into the water to fetch him more. It looks like the pole is magic, and is hypnotising the otter into serving the fisher\'s desires.</p></p>However, there seems to be a catch with the magic. With every extra fish his otter slave brings him, the human starts to change. He kicks off his boots, and flexes his toes as they form dark webs between them. Sleek brown fur starts to grow all over his body, and he pushes down his pants, not seeming to notice the long thick rudder tail forming from his rear. Whiskers sprout from his face, and his ears become round and furry. When the otter returns to add another fish to the pile, the fisherman\'s own eyes start to glow and swirl, and he dives into the water, before nuzzling and kissing his former slave. The two of them swim away, with the fisherman leaving his boat, his pole, and his life behind.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 9,
                                "change": "add"
                            }
                        ]
                    },
                    "Cursed Wishfish": {
                        "text": 'You see a man standing in the water among the reeds, with a fishing pole in his hands. He is pulling and relaxing his line, making a colourful little lure bob and bounce on the water. Suddenly, the lure sinks with a splash, and he quickly tugs on his pole and draws in his prize. You see him reach into the water and pull out an enormous trout, with gleaming, glittering golden scales. As the fish wriggles and thrashes in his hands, it speaks aloud. "Please free me sir, and I will grant you any one wish!", it cries. The fisherman grins widely. "I got you at last, magic fish! I wish for the perfect lover who will satisfy all my needs!", he replies. </p></p>He then tosses the fish back, and rubs his hands eagerly. But as soon as the fish hits the water, the fisherman starts to change. His hands get thinner, and spread out into fins, while his skin starts to shine and glimmer. It cracks into scales, each golden and shiny, and he starts to gasp for air. He struggles into the water, his clothing falling off as his legs fuse together, with his feet turning into another fin. Finally he struggles free of his clothes and splashes into the water, as his body shrinks and transforms into a strong, streamlined golden trout. He bubbles with confusion in the river, until the other fish returns, and rubs against him. The two of them swim off, with the former human\'s eyes slowly turning dark and fishlike as he swims. It seems that someone certainly got their perfect lover.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 9,
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