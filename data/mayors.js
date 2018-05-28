var area_mayors = {
        "title": "mayors",
        "position": [0.10,0.77],
        "header": "Town Hall",
        "subheader": 'The town hall is a small wooden building. On one wall, a notice board is holding a variety of messages and papers, advertising fairs or making requests. A ticking clock on the opposite wall stands above the clerk\'s desk and gives the room a businesslike ambience. The mayor\'s desk is behind a glass panel, in a slightly more cozy-looking room.',
        "events": [
        	{
                "id": "mayor_job",
                "title": "Work at the Town Hall",
                "subtitle": "The amount of paperwork in this office is enough to drown in. How does such a small town have so much?",
                "type": "statcheck", //or random
                "stat": "charm",
                "difficulty": 15,
                "requirements": [
                    {
                        "parameter": "outcast",
                        "value": 2,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "muscat_1",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'Mikhail leaves you in charge of the store for a day. His instructions are to listen to what customers need, and make sure they buy the most appropriate charm or item for their problems.</p>You wait and dust the counters for a little while, and soon an adventurer comes in. He\'s scrawny and thin, and barely fits in his armor. He asks for something to make himself big and tough, and you recommend an enchanted loincloth. It takes some convincing, but he eventually buys it and leaves. Next comes a guy who wants to blend in. Your recommendation of a colourful chameleon coat comes with some resistance, but he eventually takes it.</p>The next day, a massive burly minotaur bursts into the shop with a huge grin on his face, stinking of sweat and musk. "Me big! Me strong now!", he bellows, before shaking your hand. A few moments later, something taps you on the shoulder. You turn and look up to see a huge chameleon appear, his skin changing to green from its invisible hue. He grins and taps you with his tail again, while he dangles from the ceiling. "Excellent choice! Loving this new body, my friend", he says, before disappearing again. Seems like you\'re good at this!',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "change": "add"
                            }
                        ]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'Mayor Maine is here today, sorting through some paperwork. The tall cat is an older man, his belly large and round and heavy, and his orange fur forming a thick fluffy beard-like mane around his neck. He is sitting at his desk, with tall piles of papers stacked haphazardly beside him. He signs another paper, then looks up and notices you. He smiles in a gentle, fatherly way. </p>"Ah, the new assistant! It\'s a delight to have you around. I hate to put you out, but I don\'t suppose you would mind assisting me with this paperwork?" The cat is hard to refuse, and you take a stack of papers and start to sort them as per his instructions. The more you sort and order the files, the more orders the mayor gives you, his tone gradually becoming more aggressive and dominant. You look up to him after you have sorted your own pack, to see his eyes narrowed and an unusual grin on his face. He reaches a finger forward and knocks some papers to the floor. </p>"Whoops! Young man, get on your knees and pick those up." You hesitate for a moment, then get down under the mayor\'s desk. His large bare orange-furred paws are resting on the thick carpet, and when you try to grab the papers, he slides his foot along them, dragging them out of your reach. You reach forward again, and when you get closer, he shoves his foot forward, pressing his warm, furry sole across your face. The scent is masculine and appealing, and his fur is incredibly soft. You feel flushed with embarrassment, but his voice speaks out, deeper and more commanding. </p>"Stay where you are. I think you will be more helpful as a foot stool." The mayor strokes his foot along your cheek, then uses his legs to roll you onto your back. Then he rests one paw on your face, and the other on your crotch. Your predicament is clearly arousing the older man, as his suit pants are tenting with a clear erection. He strokes and gropes it as he wiggles his toes on your body, and you find yourself unable to resist his commands. Whenever you move to leave, he presses his weight down on you, and you know you are not going anywhere. Several visitors come and go from the office, and the mayor makes no attempt to conceal what you are doing. Being seen acting like an object is completely humiliating.</p>Hours later, when he has finished organising the last of his papers, he finally allows you to sit up, your hair mussed and your body covered in his scent. As you leave, he calls after you. "Good boy. Feel free to come back again soon. Maybe you can stay as a footstool forever."',
                        "outcomes": [{
                            "parameter": "outcast",
                            "quantity": 1,
                            "max": 2,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "shop_payday",
                "title": "Payday",
                "subtitle": "It's time for payment for working at the shop.",
                "type": "random",
                "requirements": [
                	{
                        "parameter": "mikhail_interest",
                        "value": 4,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "mikhailicong",
                "results": {
                    "grizzpay": {
                        "text": 'Mikhail slaps you firmly on the back while you\'re organising some products, and you bump into them and spill them everywhere. He picks you up, and sits you on his lap. "Hey there kid, you\'ve done a real good job lately. Got you some pocket money", he says in his deep gruff voice. He drops a heavy bag of coins into your hand, and then ruffles your hair affectionately. "Keep up the good work!"',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 75,
                                "change": "add"
                            },
                            {
                                "parameter": "mikhail_interest",
                                "quantity": 0,
                                "change": "set"
                            },
                            {
                                "parameter": "mikhail_connection",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "daddy_mikhail",
                "title": "Daddy Mikhail",
                "subtitle": 'As you browse the little shop, you start to notice little photographs tucked in between the goods and trinkets. They all contain the tall and distinguished dog shopkeeper, Mikhail, but he\'s with a different younger dog in each image. His stern grey-streaked moustache and silver-dusted fur is contrasted by the youthful energy of the other dogs, all the same breed as him, and all roughly in their twenties, with similar fur patterns and markings. </p>You get curious, and ask Mikhail what the photos are of. He looks up from a drawer he is organising, and smiles. </p>“Those are my sons, of course. I have many eager and loyal sons, and they\'d do anything for their daddy.” That last word makes you blush a little, and he raises one bushy eyebrow. </p>“Is something the matter, son?” he says, putting emphasis on the last word. His eyes stare between your legs, and a bit of a smirk makes his fluffy muzzle twitch. “If I didn\'t know better, I\'d think you wanted a daddy of your own, boy. Is that what you want? To come sit on daddy\'s lap?” </p>Do you admit your arousal to the handsome german shepherd?',
                "type": "random",
                "requirements": [
                	{
                        "parameter": "mikhail_connection",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "species",
                        "value": 4,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "mikhailicong",
                "results": {
                    "mikhailsex": {
                        "text": 'Mikhail sits down on a large leather armchair, spreads his legs, and pats his thigh. “Come on now, boy. Show your daddy some love.” You walk over nervously, and sit down carefully on the dog\'s lap, feeling the bulge of his cock pressing out from his pants. </p>He wraps his powerful arms around you, and presses you against his chest. You didn\'t realise how tall he was. He looks down at you through his glasses, and leans forward. His moustache tickles your face as his long red tongue slides into your mouth. As he kisses you, his furry arm strokes along your chest, up and down, teasing and stroking you. Then it slides down to his pants, and reaches inside, to slowly pull out his cock. It stands proud and erect in the air, long and firm. </p>“Tell me you want it, son. Say you want daddy\'s cock.” You gulp and pant, then find yourself saying it out loud. “I want daddy\'s cock”, you stammer, and he growls with lust as he lifts you up, then pulls you down as he plunges his cock into your ass. </p>Your rear stretches around the older dog\'s shaft, and he growls a little as he thrusts in and out, his cock throbbing within you. Your heart pounds and your face is flushed with the pleasure of his shaft ramming your ass. You can feel your tailbone start to twitch, wiggling as it grows. It lengthens out behind you, and starts to wag from side to side, before growing fluffy fur. That same fur spreads up your back, where Mikhail strokes his clawed hands through it, admiring the same patterns and colours as his own furry body. Your face grows, pushing into his kiss as you grow a muzzle of your own. Your ears grow longer, develop fur, then flop over like a dog\'s. Your hands and feet throb for a moment, forming rough pawpads, and your nails become hard and sharp as they transform into claws. </p>Your whole body is changing, taking on aspects of your daddy\'s form, as you become a dog, the spitting image of Mikhail as a younger man. </p>He chuckles, and grips your shaft, stroking and pumping it as it turns red and pointed. The base swells out and inflates, forming a doggy knot, which he squeezes firmly in his hand. You whimper and bark with lust, and he growls at you. </p>“Cum for your daddy, pup.” You cannot disobey. You howl and bark, your cock pulsing and spraying out a thick load of cum into the air, that splatters over his shirt and over your furry chest. Then he holds you firmly and growls, and you feel his own cock release its musky load as a rush of heat deep in your rear. </p>You are left panting and dizzy, until he carefully pulls his cock free from your rear and allows you to stand. </p>“Good boy, son. You make your daddy proud.” he says. Your tail wags happily to hear your dad\'s praise.',
                        "descriptionchange": "This adventurer is a furry, eager dog.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 4,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "mayor_random",
                "title": "Sit in the Waiting Room",
                "subtitle": "There are always several other people waiting to see the mayor. Some of them seem to have been waiting forever.",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "mayor_intern": {
                        "text": 'You enter the town hall to see Mayor Maine guiding around a new intern. The mayor is dressed in his usual business suit and sash, and a thin tiger with messy brown hair is following him around, looking stressed out. "Grab those papers", says the mayor, and the tiger nervously does. "Sign that form. Straighten your tie. Greet that adventurer", he moves on. Command after command hits the poor tiger in a never-ending stream, clearly fraying his nerves. Then the mayor leads him into his office, and takes a seat in his huge leather armchair. </p>"Put down those papers. Take off your shirt." says the mayor. The tiger does so, but his expression as he starts to unbutton his shirt and throw it away, revealing his white belly fur, is one of shock and surprise. "Good to see that you\'ve gotten so used to orders that you respond without thinking, boy" says the mayor, with a cruel and wide grin. "Take off your pants and get under my foot", he commands, and the tiger pushes down his pants and crawls over the carpet to get under the mayor\'s wide paw. Despite the fear-sweat on his face, clearly part of his is enjoying this, because he is quite erect. </p>The mayor presses down his foot over the top of the tiger\'s head, his toes spread wide, and starts to rock his footpaw back and forth. The tiger\'s body begins to shrink, and his flesh seems to shimmer and grow soft, allowing the mayor\'s foot to sink into his body. "Lift the left toe on my left foot", Maine says, and the tiger lifts his left arm then drops it. The mayor strokes his crotch as he pushes his feet deeper into the tiger\'s body, spreading his control all throughout his flesh. The tiger\'s head sinks into one of the mayor\'s toes, while his arms are sucked up into adjacent ones. His lower body disappears into the soft fur at the back of the mayor\'s foot, and the cat lifts his paw to show off the face on the underside of his toe. </p>He flexes his foot, as the tiger\'s features start to fade away. "Perfect. Obeying me as effortlessly as my own body part. You were a great intern, my boy" he says.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "complaint": {
                        "text": 'There is a commotion going on in the mayor\'s office today. You stand at the corner and peek in to look closer and see what\'s happening. A tall and burly adventurer is pounding his fists on Mayor Maine\'s desk, and shouting furiously at the cat. The mayor is just smiling under his fluffy moustache, looking completely unpeturbed. "My wizard is a pumpkin, my thief is some dog\'s sock, and now you\'re telling me that there\'s nothing you can do about it?! I\'m not letting you walk all over me, you fat fuck!" the adventurer roars. </p>The mayor strokes the tip of his moustache and smiles widely. "Oh I don\'t need you to let me, dear boy." he says, with a sinister purr. The mayor stands up, and presses one hand on the adventurer\'s chest, before shoving him firmly onto his back. The powerful human protests and struggles, but somehow the chubby cat is controlling him easily. He just lies on the floor helplessly as the mayor lifts his large furry paw and presses it down on the human\'s chest. "I\'ll be walking over you every day", the mayor says. The human pants and shivers as he starts to sink into the deep, plush and soft carpet. </p>His skin turns the same red and brown as the carpet pattern, as he looks almost hairier – except the hairs are growing, thickening carpet fibres. He struggles, but cannot escape. Each time the mayor steps on his body, walks over his chest and face, he is absorbed more and more. His limbs fall apart into plush carpet fabric. His features fade into the pattern, and his equipment disappears. Finally, the mayor is left walking through a thick and fluffy patch of carpet, which wiggles and moves as if it were alive.',
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
                "id": "maine",
                "name": "Mayor Maine",
                "description": "Mayor Maine is a very chubby and friendly cat. He wears a pair of small glasses, and his fluffy moustache is always twitched into a grin.",
                "icon": "maineicon",
                "dialogue": [
                    {
                        "input": "What is your name?",
                        "output": '"My name is Maine, traveller! It\'s always a delight to meet a new friend."'
                    },
                    {
                    	"input": 'What is your job?',
                        "output": '"Why, I am the mayor of this wonderful little town! I keep everything in order and organised. It is difficult work, but satisfying!"'
                    },
                    {
                    	"input": 'See you later.',
                        "output": '"I hope you have a wonderful time in my little town."'
                    },
                    {
                    	"input": 'How is your cock?',
                        "output": 'The cat laughs and winks at you. "Well, I might not be as long as some of these young bucks, but I promise I know how to use it!"'
                    },
                    {
                    	"input": 'What are your paws like?',
                        "output": 'The mayor\'s eyes suddenly gleam, and his ever-present smile stretches out into a huge grin. "My feet? Oh what a peculiar question! Why, I couldn\'t say how they are. Perhaps you could check them for me?" He leans back on his chair, and rests both his paws on his desk. The chubby toes are soft and look warm and touchable, and the soles are cushiony and a faint peach colour. His voice is suddenly deeper, and darker. "You like this, boy? I bet you are rock hard thinking of my feet on your face, holding you down on the floor where you belong." He sighs and puts his feet back on the ground. "Ahem. Do enjoy your stay in our town!"'
                    }
                ]
            }
        ]
    }