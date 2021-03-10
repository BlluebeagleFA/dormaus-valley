var area = {
        "title": "otterton_dock",
        "header": "Otterton Dock",
        "position": [0.43,0.87],
        "mapId": "worldmap.jpg",
        "subheader": 'This jetty is a series of wooden platforms extending out into the sea. The cries of terns can be heard overhead, and a cold sea wind blows through the air despite the warm sun above. A number of ships are moored to the platforms at the side of the docks.',
        "events": [
            {
                "id": "dock_w",
                "title": "Travel West back to the village square",
                "subtitle": "The road back to the village is a gentle stroll uphill.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You walk up the hill away from the dock, back into the village square.",
                        "area": "otterton",
                        "outcomes": []
                    }
                }
            },{
                "id": "drizzhouse",
                "title": "Visit a fisherman's house",
                "subtitle": "One of the shacks is welcomingly open.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You poke your head in to see if anyone's home.",
                        "area": "otterton_drizzlefin",
                        "outcomes": []
                    }
                }
            },{
                "id": "robby_0again",
                "title": "Otter Fishing (Repeat)",
                "subtitle": 'There is an otter sitting on the edge of the pier, with a fishing line around his tail. He\'s lounging on his back and looks very relaxed. He notices you, and asks if you\'d like to fish with him.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "robby_spell",
                        "value": 4,
                        "comparison": "equal" //default greater
                    },{
                        "parameter": "species",
                        "value": 24,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "robbyicon",
                "results": {
                    "grizzsex": {
                        "text": 'You ask the otter what he\'s doing, and he looks up at you, then grins. His lithe brown-furred body is completely naked, but he looks relaxed and comfortable like that. "I\'m fishing, bro. What\'s it look like?", he asks, then laughs. His tail twitches as something on the end of the line tugs at it. He flexes and pulls his tail, then yanks hard. A fish flies up into the air from the water, which he grabs in his muzzle in a sudden, agile flash. He places it down by his side, and offers you a pole. "Wanna join me?", he asks.</p>You take the pole, and sit down next to him. He remains lying on his back, and you can\'t help but look down over his smooth, furry chest, at his strong bronze-furred legs, and particularly the furry balls resting between them.</p>You wait for a long while, and the otter catches several more fish, but you have much less luck. When your pole twitches, you seem to react too slowly, and even when you do get it, you can\'t pull or tug the rod as well as the otter can. He notices your trouble, and waves at you. "Hey, bro. See this?", he says, pointing to his tail. He takes your hand and strokes it down the side of his wide rudder tail. You feel the firm muscles underneath it, the smooth streamlined shape of it, and the ultra soft fur. "If you had one of these, it\'d be way easier. You don\'t have to go all the way, but I mean, obviously everyone is better with an otter tail, right?", he says.</p>You blush, but realise that you have been admiring his tail, and you do feel envious. He grins and tells you to just relax. You lay down, like him, and let yourself enjoy the warm sun on your chest, and the cool sea breeze blowing over you. You feel your tailbone starting to grow, beginning to stretch and thicken. New muscle forms on it, making it grow stronger and longer. You slide your legs apart a little, letting it grow to full size, with all the strength and power of a full otter tail, though it lacks the smooth fur. Soon it\'s exactly the same size and width as the otter\'s, and he grins as he pulls the line off your fishing pole and ties it around your tailtip instead. "Relax with me, bro. You can call me Robby, by the way", he says. His green eyes gleam, and you feel strangely at home with him.</p>Your next few attempts at fishing go much better. Your sensitive tail picks up on every twitch of the line, and the thick muscles in it are perfect for hauling the fish up.',
                        "outcomes": [
                            {
                                "parameter": "robby_spell",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "robby_0",
                "title": "Otter Fishing",
                "subtitle": 'There is an otter sitting on the edge of the pier, with a fishing line around his tail. He\'s lounging on his back and looks very relaxed. He notices you, and asks if you\'d like to fish with him.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "robby_spell",
                        "value": 0,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "robbyicon",
                "results": {
                    "grizzsex": {
                        "text": 'You ask the otter what he\'s doing, and he looks up at you, then grins. His lithe brown-furred body is completely naked, but he looks relaxed and comfortable like that. "I\'m fishing, bro. What\'s it look like?", he asks, then laughs. His tail twitches as something on the end of the line tugs at it. He flexes and pulls his tail, then yanks hard. A fish flies up into the air from the water, which he grabs in his muzzle in a sudden, agile flash. He places it down by his side, and offers you a pole. "Wanna join me?", he asks.</p>You take the pole, and sit down next to him. He remains lying on his back, and you can\'t help but look down over his smooth, furry chest, at his strong bronze-furred legs, and particularly the furry balls resting between them.</p>You wait for a long while, and the otter catches several more fish, but you have much less luck. When your pole twitches, you seem to react too slowly, and even when you do get it, you can\'t pull or tug the rod as well as the otter can. He notices your trouble, and waves at you. "Hey, bro. See this?", he says, pointing to his tail. He takes your hand and strokes it down the side of his wide rudder tail. You feel the firm muscles underneath it, the smooth streamlined shape of it, and the ultra soft fur. "If you had one of these, it\'d be way easier. You don\'t have to go all the way, but I mean, obviously everyone is better with an otter tail, right?", he says.</p>You blush, but realise that you have been admiring his tail, and you do feel envious. He grins and tells you to just relax. You lay down, like him, and let yourself enjoy the warm sun on your chest, and the cool sea breeze blowing over you. You feel your tailbone starting to grow, beginning to stretch and thicken. New muscle forms on it, making it grow stronger and longer. You slide your legs apart a little, letting it grow to full size, with all the strength and power of a full otter tail, though it lacks the smooth fur. Soon it\'s exactly the same size and width as the otter\'s, and he grins as he pulls the line off your fishing pole and ties it around your tailtip instead. "Relax with me, bro. You can call me Robby, by the way", he says. His green eyes gleam, and you feel strangely at home with him.</p>Your next few attempts at fishing go much better. Your sensitive tail picks up on every twitch of the line, and the thick muscles in it are perfect for hauling the fish up.',
                        "outcomes": [
                            {
                                "parameter": "robby_spell",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "robby_1",
                "title": "Fish With Robby",
                "subtitle": 'Robby is here again today, and asks if you\'d like another fishing lesson.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "robby_spell",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "robbyicon",
                "results": {
                    "grizzsex": {
                        "text": 'Robby waves at you as you get close, and his tail twitches, sending the line in the water skitting to and fro. You wave back and lie down next to him, and he ties a fishing line to your new tail, which you then let trail in the water.</p>While you both relax, you decide to ask to Robby about himself. "Who, me? I\'m just a country boy otter, I like fishing and relaxing and not worrying about things! What could be better?", he says. You can\'t help but envy him a little. The life of a naked otter boy with no responsibilities doesn\'t seem half bad. Both your tails twitch, as your lines pick up on a fish in the water. You lash your tail to hook the fish, then tug it up. Robby catches his fish like he always does, with a perfect snap of his jaws, biting it out of the air. You, meanwhile, try to catch the fish in your hands. It is slippery and wet, and it flails and bounces out of your grip, before falling back into the water. Robby laughs and grins at your embarrassing situation. "Bro, that was shameful! Come on, you really need to step up your game. Don\'t you want some nice sharp chompers like mine?", he says. You look at his wide grin, with his thick sharp fangs, and cute furry muzzle with big whiskers. You\'re a little uncertain about giving up more of your body, but you would be lying if you said he wasn\'t cute.</p>You nod, and Robby walks up close to you, his chest pressed to your own. He leans forward, his whiskers brushing against your cheeks, and kisses you. Your tongue slides past his sharp teeth, and you feel his muzzle stroke against your face, while your own face starts to push out against it. Your skull reforms and reshapes, your teeth grow and sharpen, and you feel new sensitive whiskers sprout from just under your nose. When he pulls away, your head is shaped just like his, lacking only the fur. You even have the same cute little ears.</p>You both return to fishing, and the next time you pull up a fish, you grab it out of the air. Your teeth sink into it as you grab hold, and your tail twitches happily at how wonderful fresh, raw fish tastes. This is amazing!',
                        "outcomes": [
                            {
                                "parameter": "robby_spell",
                                "quantity": 2,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "robby_2",
                "title": "Advanced Fishing",
                "subtitle": 'Robby doesn\'t have his fishing line today. Instead he\'s doing stretches on the edge of the pier.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "robby_spell",
                        "value": 2,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "robbyicon",
                "results": {
                    "grizzsex": {
                        "text": 'You ask Robby whether he\'s still up for fishing today, and he nods, while bending over to touch his toes. "Of course I\'m fishing bro! I don\'t just set here all day for nothing, you know. Today is ADVANCED fishing though. I feel like really pushing my limits! Watch this!", he says. He stands up straight, aims for the water, and then suddenly dives in. His sleek, streamlined body slips into the water with barely a ripple, and you see the shadow of his body under the pier as he dashes and flicks to and fro. With a loud splash, he emerges from the water, with a fish flapping in his mouth. He grins at you, and your stomach rumbles with a desire to have some tasty fish of your own. "Gonna join me, bro?", he asks. Your growling belly gives only one answer to that question.</p>You quickly strip naked, and then hop into the water. Unlike Robby, your entry is with a rather louder splash. You turn in the dark water and swim after him, watching how he dashes and moves through the water with ease. You copy his tail movements, finding that you can propel yourself rapidly by swaying your thick otter tail to and fro. You see Robby dash after a fish, twist in the water, and grab it with his teeth. When you try it though, it doesn\'t quite work out. The dash you can do, and the bite, but when the fish flick and twist and turn, you can\'t adjust your movements fast enough to grab them. Eventually, you return to the pier, water dripping off your body. Robby hops up next to you, with that familiar cocky grin on his face. Without saying anything, he lifts up one of his feet, and flexes his toes, showing off the thick black webbing between each one. You blush and grumble a little, but you know what he\'s suggesting. Yes, you obviously are jealous of his cute webbed feet that make him so agile underwater. You nod, and close your eyes as he stretches his toes out and places his foot over your face. You feel his cool, wet sole rub up and down over your muzzle. He teases your nose by sliding it between his toes, then strokes both his feet over your cheeks. You feel his small claws tease gently against your skin, and your own feet start to stretch and ache. Your toes grow longer, and your feet morph and shift as they grow wider. Tough webbing forms between each toe, and claws start to emerge from the tips. You look down at your growing new otter feet, and while you are distracted, Robby suddenly shoves you into the water. Instinctively, you twist and flick yourself around, orienting yourself with your tail and your powerful new feet. You see a fish, and forget what you were doing. You dash after it, twist, and bite.</p>You burst up from the water, with a fish in your mouth and a huge grin on your face. Robby leaps down from the pier and grabs you, his own mouth biting at the fish as you both playfully fight over it. You both play together in the water until the sun sets, then swim up to shore and lie together looking at the stars coming out. Robby\'s hand slides over to yours, and he squeezes your fingers idly. "You\'re turning into the perfect partner, bro", he whispers.',
                        "outcomes": [
                            {
                                "parameter": "robby_spell",
                                "quantity": 3,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "robby_3",
                "title": "Pro Fishing",
                "subtitle": 'Robby is lazing in the water under the pier today. You are very tempted to join him.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "robby_spell",
                        "value": 3,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "robbyicon",
                "results": {
                    "grizzsex": {
                        "text": 'You don\'t even ask today, you just strip down and leap into the water, your dive almost as perfect as Robby\'s is. You swim under the pier and look around for him, but he\'s disappeared. Suddenly, there\'s a tug on your leg that drags you under the water. You blink with surprise, and see Robby grinning at you. He presses in for a kiss, and you wrap your arms around him, holding your bodies together. Your fingers stroke through his soft, handsome fur as your muzzles press and nuzzle against eachother.</p>You both dash off through the water, hunting for today\'s fish. You catch plenty, but you also spend a little time teasing Robby by sneaking up behind him for hugs or to tug on his tail. Over the days you\'ve spent together, you\'ve started to develop feelings for the relaxed otter, along with a deep envy for his laid back, carefree lifestyle. The two of you swim out beyond the shoreline, to the beach under the cliffs beyond the town. Robby shows you some of his favourite rocks, and you admit that they are pretty neat. You never thought smooth pebbles would appeal to you, but you probably also never thought you\'d be turning into an otter. You pull Robby close to you, holding his back against your chest, and tell him with a smile that you are jealous of his soft fur. He grins back at you. "Huh, I didn\'t even need to suggest that one! But if you\'re sure, bro...", he replies. He pushes you playfully, and you fall onto the sand, where he pounces on top of you and rubs your bodies together. You feel a prickling sensation all over your skin, as you cuddle and nuzzle the otter lovingly. His soft smooth fur seems to flow over your body too, covering you with your own handsome pelt. You slide your cheek against his and feel your whiskers bounce together, as fur covers your head, making you both look almost like twins. You pull him over to the side of the beach, and that night you learn more about him than just his favourite rocks.',
                        "descriptionchange": 'This adventurer is a short otter, with a slender, lithe body, and a thick brown rudder tail.',
                        "outcomes": [
                            {
                                "parameter": "robby_spell",
                                "quantity": 4,
                                "change": "set"
                            },
                            {
                                "parameter": "species",
                                "quantity": 24,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "sealtf",
                "title": "A Ship Entering Port",
                "subtitle": 'A ship has just pulled in to port, and several sailors are unloading crates from it. You could offer to assist?',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 25,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "grizzsex": {
                        "text": 'There are two sailors unloading from the ship, one a huge muscular horse, and the other a portly grey walrus. The horse is wearing only a pair of loose blue pants, and as you get closer, you notice his fur starting to recede. Slowly, he becomes smooth and pink all over. His huge hooves soften and stretch out into large, rough and dirty feet. His face shrinks down to a rugged human face, and he yawns as he places his latest crate down, with sweat pouring down his back. He looks over to the walrus. "Oy, Ryosh! Spell\'s over, contract\'s done. Pay up, bucko", he says. The walrus huffs in annoyance, but tosses the human a bulging sack of what you assume is coins. The human then walks off, leaving the ship only partly unloaded.</p>The walrus grumbles in annoyance, and starts to heave off the last few crates on his own. He is tall and muscular, though his muscles are covered by a thick layer of blubber under his tough grey-blue skin, that gives him a bulging round muscle gut and enormous powerful arms. He has a massive white moustache, thick and bushy, beneath which emerge two enormous white tusks. You offer to help him unload, but he just snorts at you. "This is seamen\'s work, lubber. Only for salty dogs like me!", he says in a rough, growly voice. His moustache twitches up at the side when he looks at you, in a hint of a grin. "Aye, but stick around a while. There is something you can help with", he continues. You watch for a while, seeing the walrus heave up the enormous crates with surprising ease, though he\'s sweating and puffing after each one. You also notice something more interesting - down the side of his leg is the shape of an enormous, twitching rod, as his cock bulges within his pants. It takes less time than you\'d expect for him to be finished, and he stops for a breather, his enormous chest heaving up and down. He then stands up, his back creaking as he takes a moment to rub it. He looks at you, and angles his head, inviting you inside to his cabin.</p>You follow him into the gloom of the small wooden room, where he unfastens his thick and heavy coat. It slides down off his arms, revealing a massive, muscular back criss-crossed with small pink scars in the gunship grey skin. He turns and sits down on the bed, before tugging off his boots with some difficulty. His feet are huge, and rough. The soles are a lighter shade of grey, and as you get closer, you can smell and feel his presence around you. The salty, rough smell of a strong old sailor. He reaches forward, and pulls you in towards him. You half-stumble onto the bed, landing your body against his massive round gut. You feel his enormous rough hand at the back of your head as he pushes you in towards his face for a kiss. His thick moustache tickles over your cheeks, so huge it almost covers your entire face, but from within it his firm lips press against your own, and his warm tongue slides and touches yours. Your face feels strange and tingly as you kiss him. You can feel something growing from your cheeks, long thin fibres that twitch sensitively in the air. Your face pushes forward a little against his, your nose and mouth forming into a smooth, streamlined short muzzle.</p>You feel his other arm reach down and push against his stiff breeches, sliding them down his legs and revealing his massive, veiny grey cock. It presses against you like a staff, and he uses the hand on your head to push you down towards it. Your face is pushed firmly, but gently, under his round gut, and you start to lick and kiss the sides of his shaft. It tastes like sea salt, and as you lick and tease him, it bounces and drips with thick, clear pre. As the pre dribbles over your cheek, your skin starts to darken, turning to a dark blue-grey, splotched with white. The colour slides and flows down your face and over your chest, making you feel smooth and slippery. He grumbles and pants a little. "Stop messing around lubber, and get it down your gob!", he orders. You open your mouth wide, and start to take the walrus\'s cock into your mouth. He pushes into you, clearly struggling to resist the urge to just thrust and fuck you, which must be a powerful desire after time at sea. You suck and slide your face back and forth, gradually taking in more and more of him, until you\'re feeling his cock slide down in and out of your throat.</p>As you service the old sea dog, your own body begins to feel strange. Your belly starts to bulge out, growing rounder and heavier, and your chest feels softer along with it. Your arms develop a layer of blubber too, and the walrus begins to stroke your head. Your hair recedes and begins to disappear, allowing him to stroke all the way down your head, neck and back, as your body becomes hairless and smooth and soft to the touch. Your fingers stick together briefly, and when you flex them back out again, they almost seem to stretch, leaving a thin webbing between each finger. Your toes do the same, growing longer and forming their own webs, as they become pawlike. The walrus starts to grunt and pant, and you feel his hot breath huffing over your smooth head, until he snorts loudly, and you feel his cock pulse in your throat. With a sudden rush of heat, his cum bursts down your throat in hot, thick gushes. Load after load spurts within you, seemingly weeks of pent-up seed, until finally he sighs and leans back against his bed. You pull your face free, and carefully touch your smooth, whiskered face. "Ort?", you say curiously, and he suddenly laughs in a deep, booming voice. "Aye, one cute little sea pup you make, lubber! Maybe I should take you along on my next trip as a pet!", he roars. You blush a little, and nuzzle up next to the big walrus until it\'s time to get back to adventuring.',
                        "descriptionchange": 'This adventurer is a chubby seal, with smooth grey splotched skin, and a cute puppy-like whiskered muzzle.',
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 25,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "plush_vore",
                "title": "Unusual Cargo",
                "subtitle": "Along with the usual crates and barrels at the side of the pier ready to be transported, there's one item that stands out. A huge teddy bear, practically the size of a real bear. It has thick soft fur and a grinning, slightly sinister looking face despite its big innocent glass eyes. It is flopped down next to a crate with a big ribbon around it...and there are piles of discarded clothing around its feet. Its huge muzzle looks sort of...hungry.",
                "type": "random",
                "requirements": [
                    
                ],
                "icon": "vorefetish",
                "results": {
                    "grizzpay": {
                        "text": "You walk up closer to the huge bear, feeling entranced by its softness and cute appearance. You stroke your hand across the thick plush fur, and wonder who it could be a gift for. The bear's massive round belly feels so good to touch. You press into it, rubbing and squeezing and stroking it as you feel the bouncy plush stuffing within. The plush's head leans down slightly against you, and you look up to see its grinning squishy muzzle open. It has thick, blunt plastic teeth and a massive pink fabric tongue. There is a loud, rumbling sound, and it suddenly belches. A pair of sailor boots, still with their socks, pop out from the bear's mouth and fall onto the planks along with the other discarded clothes.</p>The bear's huge mitten-like hands move around behind you, stroking over your back and squeezing you firmly against its belly. \"Not full yet, little stuffing. Still need some more lovely mindless fluffy plushness inside me\", the bear says. It's voice is deep and calm and cheerful, the tone completely mismatching with what it is saying. Does it want to...eat you? You try to back off, but the bear slowly licks its comfy soft tongue along your face. You feel dizzy and sleepy, and start to giggle as you lay down against its belly.</p>It's so warm and snuggly and cuddly. You feel filled with happiness and calm contentment, as the bear rubs and strokes your head with its massive plush hand. \"You'll be so comfy inside me, stuffing! Won't it be nice to give up all those worries and cares? No need to do anything anymore, no need to move around and think and tire yourself out. Just being snug inside me, letting yourself crumble apart into soft white fluff. No more thinking, no more cares. Such a nice lovely stuffing pile...\", the bear croons. You nod and squeeze tighter against the plush. It sounds nice...you want to be plush. You want to be eaten.</p>The bear pats your head, and you look up to see its mouth stretched wide and invitingly open. You crawl up, over its belly and start to push your head against its mouth. Feeling the fabric stretch a little as you wiggle and crawl deeper into its throat. The smooth teeth rubbing against you, while dark squishy comfort surrounds your body. Your chest wriggles over its tongue, and it uses its big plush hands to pat and rub your rump as it pushes you deeper inside. With most of your body tightly constricted by its fabric throat, the bear just needs to lift its head, and you feel yourself start to slip down, being dragged in by gravity.</p>You are squeezed from all sides, trapped in darkness as you are gulped down further and further. Your mind is fuzzy and dizzy, making it hard to even fully focus on what is happening. Soon, you feel yourself getting pushed out into a new space, your body falling into a huge pile of soft, thick fluffy cotton. The white fluffy material surrounds you completely, tickling against you and stroking over your body. You can feel something squish and push down on you, rubbing and stroking you as the bear massages you through its own belly with its huge paws. You sigh and relax, feeling like you're floating in a cloud. Your skin slowly starts to bleach out, losing all of its colour and hue as it turns fresh, linen white. You feel soft and fuzzy and dumb, your brain a mess of random feelings of comfort and contentment. Gradually, your flesh begins to get softer and softer, becoming fuzzy and frizzy at the edges as it transforms into cotton. Your insides feel light and soft, as you start to realise you are no longer breathing. Your heart is not beating, all of your organs are being consumed by the cotton and becoming indistinct fluffy stuffing.</p>Your body moves slower and starts to go numb, leaving you with just an endless warmth all through you. The cottony feeling spreads more, as your limbs fall apart and crumble. You close your eyes and sigh with bliss, as your facial features melt away into the fluffy stuffing, until finally there is nothing left but more fabric inside the big bear's belly.</p>After a few more moments of massaging and rubbing itself, the bear belches again, sending your clothes bouncing out from its mouth into the pile. It grins as it sees its big round body finally stretched out fully. \"There we go! Now I can be the perfect present!\", it giggles. It leans back against a crate and flops, its stretched grin becoming fixed and its body going limp, as it becomes just a massive normal cuddly toy...for now.",
                        "trapped_desc": "There is a huge cuddly plush toy here, its belly stretched out with stuffing.",
                        "trapped": 'You have been digested and transformed into an indistinct mass of soft plush stuffing.',
                        "outcomes": []
                    }
                }
            },{
                "id": "docks_random",
                "title": "Walk along the docks",
                "subtitle": "This is the busiest place in the village. If anything's happening, it happens here.",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "Sailor Cocks": {
                        "text": 'There is a large ship preparing to depart from the docks, one rather more fancy and well-painted than the rest. A lion in a gleaming blue coat with bright golden buttons, but no pants, is strutting to and fro in front of a row of saluting sailors, all of whom are also pantless and displaying full erections. "Alright, men! You know the rules. Last journey the lot of you spent more time rutting like wild beasts than you did maintaining the ship! I won\'t tolerate that sort of tomfoolery this time! I warned you I would do this if you didn\'t behave!", the lion roars. He stops in front of the first sailor, a lithe, tall rat. He reaches down, and wraps his thumb and finger behind the rat\'s bulging balls and long cock. A golden, shining light gleams for a moment, and then the rat\'s genitals simply fall off his crotch, and land in the lion\'s hand, still bulging and erect. The rat\'s crotch is left smooth and pink, with no injury at all. Judging by how he twitches and shivers when the lion squeezes his junk, he can still feel it completely. The lion places the cock and balls in a crate, then moves on to the next sailor, a white wolf. The wolf whimpers, but does not drop his salute as the lion starts to grip his cock. "S-sir I know you said to cum before this, but stuff happened and I haven\'t jizzed in a week and can I just have ten more minutes before-", the wolf whimpers, but the lion gives him a withering glare, and the wolf shuts up. Soon his cock separates from his crotch as well, leaving him with a large blush and a smooth groin. One by one the sailors are unmanned, until the lion has a full crate of twitching, oozing cocks. One of the sailors asks nervously if the lion will be removing his, too. "Of course not! Unlike the rest of you, I have some dignity and control over myself", the lion replies.</p>The crew morosely walks over the gangplank onto the ship. When none of them are looking, the lion slides the crate over with his foot, from the section with the crates to load onto the ship, into the section with the goods to be sold here in Otterton. You suspect he\'s going to end up with quite the harem of horny, desperate sailors who can only be satisfied with their captain\'s cock up their ass.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 10,
                                "change": "add"
                            }
                        ]
                    },
                    "Orca Restaurant": {
                        "text": 'There\'s a commotion at the edge of the dock today. You walk over for a better look, and see several people watching a small gathering near the water. Sitting on the edge of the dock are three naked people, each wearing a sign around their neck with a price written on it. Bobbing in the water in front of them is an enormous orca. His gleaming black and white body is muscular and powerful, and his smooth head alone must be three or four feet high. Behind the naked people stands a portly penguin, who bows deeply. "Is the menu to your satisfaction?", the penguin asks. The orca slowly nods, points to the naked cat on the left, and tosses up some coins to the penguin. The orca then opens his mouth wide, revealing his many gleaming white teeth, and the enormous dripping red cavern of his mouth. The cat, with a clear erection, pulls off his sign and then climbs down from the dock onto the orca\'s tongue. His paws slip and slide on the huge red tongue, before his ankles slide down into his tight throat. When he lets go of the dock, he quickly starts to slide down faster. The orca gulps and swallows, dragging the cat down bit by bit, until only the feline\'s blushing face is visible at the back of his throat. He then closes his maw, and licks his lips. A few moments later, he belches loudly, before saying something to the penguin in an unfamiliar language. He then turns and dives into the water, giving you one last glimpse of his bulging belly.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 10,
                                "change": "add"
                            }
                        ]
                    },
                    "Salty Sea": {
                        "text": 'You walk down the docks, and see a peculiar sight. Three sailors are standing on the edge of the dock facing the water, with their pants around their ankles. A tall wolf, a chubby beaver, and a muscular horse. Each of them has their hands around their cocks, and are pumping and stroking them vigorously. The wolf cums first, his thick red rocket bulging and finally unloading when he squeezes firmly around his knot. He sends several gushes of cum into the water, moments before the horse follows suit. His long, thick shaft unloads a spurting messy spray that lands half in the sea and half dripping down the sides of the dock. Finally, the beaver cums, but his fingers slip and he ends up making a mess all down his belly, when his shorter black cock bounces up and oozes a jet of jizz all over his fur. He wipes it down and flicks the cum into the ocean. You ask what they\'re doing, and the wolf looks at you disdainfully. "Ah, clearly a landlubber! You always gotta offer a gift to the ocean before a journey see? One when you get back too, as thanks for treatin\' you right! Why you think it\'s so salty? Hahaha!", he bellows. You leave the sailors to their ritual.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 7,
                                "change": "add"
                            }
                        ]
                    },
                    "Meek": {
                        "text": "You take your time walking through the busy docks of Otterton, where most of the goods in the land pass. Entire countries do business in this place. It makes Dormaus seem puny, with hundreds of people in ships or carts. The crowd is especially dense in one area, so you go to see what all the attention’s for.</p></p>In the center, there’s a tall human male with a huge ass. </p></p>Like, each-cheek-is-bigger-than-you ass. The man might’ve been human, but his proportions weren’t. He’s well-dressed and walks deliberately, eyeing the crowd. Wherever his gaze lands, people avert their eyes, until he happens to see someone he wants. “You. Come.” He calls to someone with a voice as deep and blackened as the lowest parts of the ocean.</p></p>Relief washes over the rest of them as they leave the scene or hop onto the nearest ship. The person chosen shakes with fear, trying to talk their way out. The human responds by turning around and pulling his loose pants down, exposing his giant ass to the poor soul. You couldn’t see it, but whatever was with that ass, it makes them freeze.</p></p>The man treats this as an expected outcome. “Join me,” he orders.</p></p>The victim is suddenly docile as they lean in, face-first. From there you can’t see what happens, but from the horrifying slurp noise and the way the victim suddenly disappears, you can assume the worst. (Contributed by Meek)",
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 7,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "tomakarna",
                "title": "Travel to Makarna",
                "subtitle": "Luckily for travellers, there is a small cargo ship travelling to and from Makarna for the next few weeks. They're happy to have more crew on board.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You board the ship, and hunker down to swabbing the decks to pay for your long journey to the southern continent.</p>Much later, from above you, in the crow's nest, there is a bellowing cry of \"Land ho!\". After weeks of travel, you are approaching Makarna! The hot sun beats down on you as you look out to the shore. High stone walls of yellow-bronze brick stand tall, growing larger as the ship gets closer. Beyond them, you can see many buildings in unusual shapes and configurations. Ziggurats, like pyramids with stepped tiers, jut out into the sky, and smaller blocky buildings cluster at their feet like servants bowing to a giant. The land beyond the huge city is a gleaming golden hue, a flat plain going on seemingly forever. The ship is approaching the mouth of an enormous river, the delta of which stains the golden plains a dark, fertile black. The river bisects the city in two, but each half is larger than any other city you have seen on this world. When the ship pulls into port, you are hit by the sounds and smells of a huge and bustling metropolis. A scurry of workers swarm the long docks, tying up and preparing the boat, while others drag up carts and wheelbarrows. All of them move aside to allow passage to several tall and well-dressed lions, who start to approach the ship when the gangplank is lowered.</p>You and the other workers are forced to stay back while the captain discusses his travel passes with the lion nobles, before finally they depart and allow you to leave and walk into the hot, bustling air of the city of Makarna.",
                        "area": "makarna_dockyard",
                        "outcomes": []
                    }
                }
            },{
                "id": "stayasplush",
                "title": "You are stuffing",
                "subtitle": "There is no need to think, no need to worry or care anymore. You are just mindless soft plush stuffing making a lovely bear very big and round. Give in and accept it.",
                "trapped": true,
                "type": "random",
                "requirements": [
                ],
                "icon": "inanimatefetish",
                "results": {
                    "pumpkin_1": {
                        "text": "It's another normal day on the pier, waiting to be delivered. You are just a small part of a big cuddly plush bear, and you don't need to think for yourself. When no one is looking, the bear lifts a soft plush hand and strokes his belly, pressing down and massaging where you are.</p>\"Part of you still thinking in there, stuffing? Isn't it nice and warm and lovely? No need to keep thinking. No need to experience or desire or worry. Just let yourself disappear completely. Don't you want your spirit to fall apart and crumble into lovely soft stuffing? Inside me forever and ever, nowhere else but soft and cuddly?\", he croons gently.</p>You feel yourself melting away more and more, your physical body already gone and your spirit following too, becoming fluffy and empty and silly. You stop thinking, and the bear is just rubbing its own belly now.",
                        "outcomes": []
                    },
                    "pumpkin_2": {
                        "text": "A sailor walks past on the deck, his heavy boots creaking on the wooden floorboards. He's a heavy-set, muscular trout man, and he checks a list in his hand and looks at the plush bear suspiciously. \"This ain't right\", he mutters, and leans down to pick up the bear by its shoulders.</p>The bear reaches up with huge squishy paws that are far stronger than they should be, and opens its soft-lined mouth to show off its rounded, silly plastic teeth. The sailor barely has time to yelp as he is shoved deep into the bear's throat, his whole body lifted up and guzzled down until he's just a huge, wiggly bulge inside the bear's distended belly.</p>You feel the sailor's smooth, naked body writhing and struggling against you. Your fluffy stuffing form is surrounding him completely, and his clothes have already been stripped and belched out by your master's strange power. You know what to do. You cuddle and squeeze. You relax, you squish softly. The sailor's face becomes dizzy and confused, and he slowly starts to smile. His smooth grey skin starts to turn white, and become soft and squishy. His limbs and features gradually lose their definition, and begin to fall apart into fluffy clumps of stuffing.</p>You squeeze him tightly and welcome him happily into mindlessness, as his face and the last of his body finally dissolves into cotton. For a few days, you feel his presence inside you, as a sort of confused happy awareness, but it gradually fades away, and disappears. The bear rubs his belly gently. \"Everything becomes stuffing. Body, mind...and everything else. Inside me forever, cuddly and safe...\", he whispers in a sing-song voice.",
                        "outcomes": []
                    }
                }
            }
        ],
        "npcs": [
            {
                "id": "robby",
                "name": "Robby",
                "description": "Robby is a slender, naked otter. He's lying on the docks, fishing idly and enjoying the sun on his smooth handsome body",
                "icon": "robbyicon",
                "shop": {
                    "trades": ["fish"],
                    "buys": [],
                    "sells": []
                },
                "dialogue": [
                    {
                        "input": "What is your name?",
                        "output": '"Hey there, name\'s Robby. But you can call me bro if you want!"'
                    },
                    {
                        "input": 'What is your job?',
                        "output": 'The otter laughs and grins with his shiny white teeth. "No job for me, bro. I just lounge around and enjoy life!".'
                    },
                    {
                        "input": 'See you later.',
                        "output": '"Have a great one, and don\'t work too hard bro."'
                    },
                    {
                        "input": 'Can I see your cock?',
                        "output": 'Robby spreads his legs slightly, and makes a gesture towards his crotch which you interpret as "go for it". He clearly has no shame or embarrassment about nudity. His soft, fluffy otter balls are nestled under a fluffy, fuzzy sheath. You are quite tempted to touch it.'
                    },
                    {
                        "input": 'Can I touch your paws?',
                        "output": 'The otter flexes his toes, and shows off the strong black webbing between each one. "Go for it, bro. Don\'t blame me if you get jealous and want some of your own, though!", he says. You lift one of his feet and stroke your fingers down the firm, smooth black pad that covers his sole. You are very tempted to press your face into his foot, and feel his damp webbed paw cover your face and press against your cheeks.'
                    }
                ]
            }
        ]
    }