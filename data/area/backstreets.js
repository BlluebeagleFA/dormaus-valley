var area = {
        "title": "backstreets",
        "position": [0.40,0.60],
        "header": "Backstreets",
        "subheader": 'The back streets of Dormaus are less busy than the rest. The ground here splits, one path rising up and the other moving down. On both, small cottages stand, each with horseshoes on the doors. At the bottom of the southern lane, a small village post office is open for business.',
        "events": [
            {
                "id": "flute_job_1",
                "title": "Practice Sales With Flute",
                "subtitle": 'Flute\'s "store" is a very eclectic collection of what looks a lot like random junk.',
                "type": "statcheck", //or random
                "stat": "charm",
                "difficulty": 15,
                "requirements": [
                    {
                        "parameter": "flute_connection",
                        "value": 1,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "theft",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'When you tell him you\'d like a job, Flute puts his arm around your shoulders and gives you a big grin. "Wonderful! Wonderful, my esteemed friend. Why, by my side we can both sucker these rubes for every guilder they have! I mean, we can give wonderful deals to all these discerning customers. For every guilder they have!", he says.</p>For your first tryouts in the cutthroat world of sales, Flute has you sell some of his cheaper potions. They\'re rank-smelling bottles of yellow fluid, which he tells you is "sand ship essence", which makes it easier to go without water in the desert.</p>You walk along the street, calling out your wares, but not having much luck until you encounter a man in long robes, who says he\'s from the city of Makarna. Water is a big deal there, so you manage to haggle him up to way over the price Flute instructed you to sell for.</p>The next day, a different man in similar clothing walks up to you, dragging a big stupid-looking camel on a lead behind him. The man grins at you and pats the camel\'s nose. "Ah, I finally found you! I wanted to give you thanks, friend merchant! My business partner here was so taken with your sales pitch, he drank that entire potion in one go. What do I find, but that my useless and arrogant partner is now a handsome, obedient camel! He will fetch a grand price when we return home. One hundred thanks to you!", he says with glee. He also hands you a few extra coins as a tip, which makes Flute\'s ears perk up when he hears the jingle of coins. He takes a big cut, of course, but you still get enough cash that it mostly makes up for the nagging feeling that you might be doing something immoral. After all, the guy really will find it easier to live in the desert now, right?',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 15,
                                "change": "add"
                            },
                            {
                                "parameter": "flute_interest",
                                "quantity": 1,
                                "change": "add",
                                "max": 5
                            }
                        ]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'When you tell him you\'d like a job, Flute puts his arm around your shoulders and gives you a big grin. "Wonderful! Wonderful, my esteemed friend. Why, by my side we can both sucker these rubes for every guilder they have! I mean, we can give wonderful deals to all these discerning customers. For every guilder they have!", he says.</p>For your first tryouts in the cutthroat world of sales, Flute has you sell some of his cheaper potions. They\'re rank-smelling bottles of yellow fluid, which he tells you is "sand ship essence", which makes it easier to go without water in the desert.</p>You walk along the street, calling out your wares, but not having much luck until you encounter a man in long robes, who says he\'s from the city of Makarna. Water is a big deal there, so you manage to haggle him up to way over the price Flute instructed you to sell for.</p>The next day, the man returns, looking furious and dragging a confused-looking camel behind him. The huge beast knocks over a lot of Flute\'s wares as the man confronts you. "You fiend! You thieving devil! I suspected something was amiss, and when I have my companion test the potion for me, he turns into this! A sand ship is a CAMEL!", he roars. He points at the big smelly camel, who starts chewing on the fabric of Flute\'s tent. A large argument ensues, during which Flute ends up having to instruct you on the first rule of salesmanship - distract them, and run!</p>You both clamber up onto a rooftop and scarper, while the traveller is stuck with his lumbering camel. Flute pats your back. "Don\'t worry my friend, we all make mistakes in our careers! I will make sure you pay me back later", he says, with a wink.',
                        "outcomes": [{
                            "parameter": "guilt",
                            "quantity": 1,
                            "max": 2,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "flute_1_male",
                "title": "Flute's Offer",
                "subtitle": 'You pass by Flute\'s tent and find it occupied, the front flap open and revealing the slender fox man lying down inside, counting his money. He notices you staring after a moment, and slides his coins aside with a grin. "Hello there friend! Yes even I, the amazing entrepeneurial Flute, must rest now and then. What is life without a little pleasure every now and then, yes?" He grins at you, and his bushy tail sways. </p>The pose of his body, with one leg bent and the other stretched out, along with the wide and slightly lewd grin on his handsome vulpine face, makes you feel like he might be flirting with you. </p>"It\'s a cold night tonight I hear, and I always have room in my tent for someone who would be willing to make it worth my while." Scratch that, he is definitely flirting with you. Sleeping with a guy like Flute is bound to have consequences though.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "submissiveness",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "species",
                        "value": 8,
                        "comparison": "nequal" //default greater
                    },
                    {
                        "parameter": "flute_interest",
                        "value": 1,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "flute_connection",
                        "value": 1,
                        "comparison": "less" //default greater
                    },
                    {
                        "parameter": "gender",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "fluteicon",
                "results": {
                    "grizzsex": {
                        "text": 'You kneel down, and climb forward under the thin cloth of Flute\'s makeshift home. He pokes the tent flap with his toe, and it closes, leaving you in the slightly dark privacy of his tent. It\'s very cramped, and the Fox\'s body is pressing against your own. His eyes seem to glow in the darkness, as do the white teeth in his muzzle. </p>"I have always wanted a blowjob from a beautiful vixen, personally, but I can certainly have fun with a handsome adventurer." he says, and you feel his warm, furry body press against your chest. His long muzzle strokes across your cheek, and then his mouth opens and his tongue slides into your mouth. He kisses you firmly and forcefully, one arm around your chest holding you close. </p>Despite his short and slender body, he is strong and in charge. He breaks the kiss, then starts to unlace his tunic, before dropping it to reveal his toned chest. The fur is pale white, in contrast to the russet orange of the rest of him. He then hooks one clawed thumb into his leather breeches, and starts to push them down. The white fur of his chest narrowd to a V shape between his legs, where it frames a long and handsome cock, above a pair of fluffy balls. </p>His manhood puts most humans to shame, and in this cramped tent, it is all you can focus on. You find yourself leaning down, wanting to take that shaft into your mouth and taste it, but he takes hold of your head and prevents you. </p>"Ah ah ah! I said that is for vixens, yes? But keep visiting the great Flute, and perhaps one day you will be one. For now though..." he takes hold of you, slides his naked body against you, and pushes you down onto the blankets laid out on the ground. You feel his weight atop you, pressing down on you. His masculine musk fills the small space of the tent as you feel his cock press against your rear. His strong hands hold your sides, and you hear him pant as his cock pushes inside you. </p>You don\'t think you can possibly take his entire length, but inch by inch he slowly guides it into you, filling you completely. Finally, you feel his balls against your ass, and you know from the hardness that you can feel up almost to your belly that he is fully inside you. He starts to pump, in and out, pulling out slowly only to force his way inside with a powerful thrust. </p>His cock inside you feels amazing, each motion is making you tremble with lust, and you can\'t get enough. His moans become yips and barks, and you start to realise that you are making the same noises. As his thrusting speeds up, your skin tingles and itches. Orange fur starts to grow, covering your body, while your panting face stretches out into a long pointy muzzle. Your ears grow larger and take on a pointed shape, while you feel your tailbone slide against Flute\'s chest as it grows longer and longer, before developing a fluffy brush of fur. </p>Flute\'s claws dig into your furry sides as he shudders and pants, and you feel heat rushing up inside you. The sticky, hot warmth of his cum filling you up. The pleasure is too much, and you dig your own claws into the blankets as your cock unloads too, making a messy splatter of cum that forms a hot sticky mess in your new fur. </p>You lie together for a while, sweaty and messy, before he slowly slides out of you and chuckles. You gather your things together, your head swimming, and thank him before turning to leave. </p>You notice something else besides your new body though – Flute somehow looks like the sexiest, most gorgeous creature you have ever seen in your life. It\'s all you can do not to fall to the ground and call him master. It seems this sneaky fox is changing more than your body.',
                        "descriptionchange": "This adventurer is a slender orange fox with a bushy soft tail.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 8,
                                "change": "set"
                            },
                            {
                                "parameter": "submissiveness",
                                "quantity": 1,
                                "change": "add"
                            },
                            {
                                "parameter": "dominance",
                                "quantity": 1,
                                "change": "sub"
                            },
                            {
                                "parameter": "flute_connection",
                                "quantity": 1,
                                "change": "set"
                            },
                            {
                                "parameter": "flute_interest",
                                "quantity": 0,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "flute_1_female",
                "title": "Flute's Offer",
                "subtitle": 'You pass by Flute\'s tent and find it occupied, the front flap open and revealing the slender fox man lying down inside, counting his money. He notices you staring after a moment, and slides his coins aside with a grin. "Hello there friend! Yes even I, the amazing entrepeneurial Flute, must rest now and then. What is life without a little pleasure every now and then, yes?" He grins at you, and his bushy tail sways. </p>The pose of his body, with one leg bent and the other stretched out, along with the wide and slightly lewd grin on his handsome vulpine face, makes you feel like he might be flirting with you. </p>"It\'s a cold night tonight I hear, and I always have room in my tent for someone who would be willing to make it worth my while." Scratch that, he is definitely flirting with you. Sleeping with a guy like Flute is bound to have consequences though.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "submissiveness",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "species",
                        "value": 8,
                        "comparison": "nequal" //default greater
                    },
                    {
                        "parameter": "flute_interest",
                        "value": 1,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "flute_connection",
                        "value": 1,
                        "comparison": "less" //default greater
                    },
                    {
                        "parameter": "gender",
                        "value": 2,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "fluteicon",
                "results": {
                    "grizzsex": {
                        "text": 'You kneel down, and climb forward under the thin cloth of Flute\'s makeshift home. He pokes the tent flap with his toe, and it closes, leaving you in the slightly dark privacy of his tent. It\'s very cramped, and the Fox\'s body is pressing against your own. His eyes seem to glow in the darkness, as do the white teeth in his muzzle. </p>"I have always wanted a blowjob from a beautiful vixen, personally, but I can certainly have fun with a beautiful adventurer of other races." he says, and you feel his warm, furry body press against your chest. His long muzzle strokes across your cheek, and then his mouth opens and his tongue slides into your mouth. He kisses you firmly and forcefully, one arm around your chest holding you close. </p>Despite his short and slender body, he is strong and in charge. He breaks the kiss, then starts to unlace his tunic, before dropping it to reveal his toned chest. The fur is pale white, in contrast to the russet orange of the rest of him. He then hooks one clawed thumb into his leather breeches, and starts to push them down. The white fur of his chest narrowd to a V shape between his legs, where it frames a long and handsome cock, above a pair of fluffy balls. </p>His manhood puts most humans to shame, and in this cramped tent, it is all you can focus on. You find yourself leaning down, wanting to take that shaft into your mouth and taste it, but he takes hold of your head and prevents you. </p>"Ah ah ah! I said that is for vixens, yes? But keep visiting the great Flute, and perhaps one day you will be one. For now though..." he takes hold of you, slides his naked body against you, and pushes you down onto the blankets laid out on the ground. You feel his weight atop you, pressing down on you. His masculine musk fills the small space of the tent as you feel his cock tease against your pussy, doggy-style. His strong hands hold your sides, and you hear him pant as his cock slides inside you. </p>You don\'t think you can possibly take his entire length, but inch by inch he slowly guides it into you, filling you completely. Finally, you feel his balls against your crotch, and you know from the hardness that you can feel up almost to your belly that he is fully inside you. He starts to pump, in and out, pulling out slowly only to force his way inside with a powerful thrust. </p>His cock inside you feels amazing, each motion is making you tremble with lust, and you can\'t get enough. His moans become yips and barks, and you start to realise that you are making the same noises. As his thrusting speeds up, your skin tingles and itches. Orange fur starts to grow, covering your body, while your panting face stretches out into a long pointy muzzle. Your ears grow larger and take on a pointed shape, while you feel your tailbone slide against Flute\'s chest as it grows longer and longer, before developing a fluffy brush of fur. </p>Flute\'s claws dig into your furry sides as he shudders and pants, and you feel heat rushing up inside you. The sticky, hot warmth of his cum filling you up. The pleasure is too much, and you dig your own claws into the blankets as you orgasm too, the pleasure making you moan and shudder as he drives his cock deep into the sensitive heat within you. </p>You lie together for a while, sweaty and messy, before he slowly slides out of you and chuckles. You gather your things together, your head swimming, and thank him before turning to leave. </p>You notice something else besides your new body though – Flute somehow looks like the sexiest, most gorgeous creature you have ever seen in your life. It\'s all you can do not to fall to the ground and call him master. It seems this sneaky fox is changing more than your body.',
                        "descriptionchange": "This adventurer is a slender orange fox with a bushy soft tail.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 8,
                                "change": "set"
                            },
                            {
                                "parameter": "submissiveness",
                                "quantity": 1,
                                "change": "add"
                            },
                            {
                                "parameter": "dominance",
                                "quantity": 1,
                                "change": "sub"
                            },
                            {
                                "parameter": "flute_connection",
                                "quantity": 1,
                                "change": "set"
                            },
                            {
                                "parameter": "flute_interest",
                                "quantity": 0,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "flute_job_2",
                "title": "Advanced Sales With Flute",
                "subtitle": 'You\'re starting to think Flute\'s store is a bit of a scam.',
                "type": "statcheck", //or random
                "stat": "charm",
                "difficulty": 20,
                "requirements": [
                    {
                        "parameter": "flute_connection",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "theft",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'Flute strokes his hand up your back, and his long fingers play with your fur. Your tail wags and twitches a little, as the scent and presence of him makes you feel embarrassed and strangely excited. "You are doing great my friend, so much so that I think it is time to move you up in my business plans! Take these", he says, pulling a handful of dented tin objects out of his pocket. You notice he is very careful not to touch them with his bare hands. You look down at one and see a round metal badge with a paw symbol on it. "Now, you\'re going to tell the lovely and trusting citizens of this town that these badges will make them big, strong and stompy. That\'s what so many people want, after all!", he continues. You look at them for a moment, and then up at his incredibly untrustworthy grin. Your doubts, however, are stopped when he strokes your belly fur and presses his long muzzle to yours. You want to make your boss happy.</p>You start walking the streets, using your growing talents in sales. Magical badges! Dug up from ancient ruins! Filled with the mysterious power of the ancients! You soon have a small crowd of interested customers, and you barely noticed that you were flat out lying about your product. You manage to pawn off every badge Flute gave you, and make a handy profit.</p>The next day, a few of your customers jump you in an alleyway. They\'re scruffy, with their fur sticking up, their clothes rumpled, and their faces smelling strongly of sweat and musk. "You scumbag little fox bastard!", one dog growls, as he shoves you against the wall. "This goddamn badge didn\'t make me stronger! It made me a paw slut!", he snarls, his muzzle dripping with saliva. Immediately, your inner salesfox kicks in. You quickly explain how deeply sorry you are for the mixup, how you have no idea how this happened, and ask them to get out the badges so you can give them a double refund. Your patter keeps them confused enough that when they do take the badges out of their pockets, they forget not to touch them directly. Immediately, their expressions become dizzy and confused. The dog lets go of you, and you sit down on a nearby crate and lift your long, furry fox paws. Here\'s your double refund, you tell them. As long worshipping your feet as they like!</p>Immediately, two of them get on their knees, drooling, and start to nuzzle and lick your paws. The third shoves one of them out of the way to get closer, and a tussle ensues as they fight over who loves your feet the most. During the commotion, you quietly slip away. You\'re finding it harder and harder to care about your obviously crooked deals these days.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 20,
                                "change": "add"
                            },
                            {
                                "parameter": "flute_interest",
                                "quantity": 1,
                                "change": "add",
                                "max": 5
                            }
                        ]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'Flute strokes his hand up your back, and his long fingers play with your fur. Your tail wags and twitches a little, as the scent and presence of him makes you feel embarrassed and strangely excited. "You are doing great my friend, so much so that I think it is time to move you up in my business plans! Take these", he says, pulling a handful of dented tin objects out of his pocket. You notice he is very careful not to touch them with his bare hands. You look down at one and see a round metal badge with a paw symbol on it. "Now, you\'re going to tell the lovely and trusting citizens of this town that these badges will make them big, strong and stompy. That\'s what so many people want, after all!", he continues. You look at them for a moment, and then up at his incredibly untrustworthy grin. Your doubts, however, are stopped when he strokes your belly fur and presses his long muzzle to yours. You want to make your boss happy.</p>You start walking the streets, using your talents in sales as best you can. Magical badges! Mysterious effect! Ignore the paw part! You find it hard to lie about the product, and you only get a few customers in the end, who you awkwardly tell it will make them ambiguously stronger.</p>The next day, a few of your customers jump you in an alleyway. They\'re scruffy, with their fur sticking up, their clothes rumpled, and their faces smelling strongly of sweat and musk. "You scumbag little fox bastard!", one dog growls, as he shoves you against the wall. "This goddamn badge didn\'t make me stronger! It made me a paw slut!", he snarls, his muzzle dripping with saliva. You stammer and squirm, and the dog growls louder. He and his tiger friend shove you to the ground, and toss the badges down onto you. They spark and sting where they touch you, and you feel dizzy and confused. When the dog lifts his huge, unwashed paws, you find yourself drooling and obsessing over them, despite the dirt and smell. You start to lick and nuzzle his feet, even as he shoves and kicks at you roughly. Despite the bruising and discomfort, you keep crawling back to nuzzle his pawpads and lick between his toes. The tiger joins in too, shoving his muscular feet into your belly, while the third friend, a goat, rubs his hooves between your legs. You service and worship all three of their feet all night, and by the morning, you are covered in sweat, dirt and bruises. You whimper as they walk away, still desperately craving their musky manly feet.',
                        "outcomes": [{
                            "parameter": "pain",
                            "quantity": 1,
                            "max": 2,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "flute_2_male",
                "title": "Flute's Second Offer",
                "subtitle": 'Once again, you find yourself walking through the back streets. You tell yourself you are not going anywhere specific, but your flaring vulpine nose picks up on the scent of horny and virile male fox, and your body knows where you\'re heading. When you come to Flute\'s tent, the sleazy fox is already pantsless, his cock erect in the air as he strokes it slowly. </p>He\'s so hot that you can barely contain yourself. You know it must be some trick or spell, but it doesn\'t change the shivers of arousal that you feel when you look at Flute lying there, waiting for you. </p>"Hello again my new fox friend. Can\'t get enough of this shaft, yes? I understand. You may look male, but you\'re a horny bitch underneath it, aren\'t you?" </p>Do you give in to your desires and enter his tent?',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "submissiveness",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "species",
                        "value": 8,
                        "comparison": "equal" //default greater
                    },
                    {
                        "parameter": "flute_interest",
                        "value": 1,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "flute_connection",
                        "value": 1,
                        "comparison": "equal" //default greater
                    },
                    {
                        "parameter": "gender",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "fluteicon",
                "results": {
                    "grizzsex": {
                        "text": 'Your tail curls between your legs as you nod, before getting on your knees and crawling into Flute\'s tent. The cramped space feels even more confining this time, and you end up sliding your body on top of Flute\'s. His gleaming eyes look up into yours as his wide grin shines white in the dark. </p>His scent is so powerful, it feels almost like it\'s clutching at your mind. So masculine, so sexual. He slowly pulls off his jerkin, revealing his soft furry chest, and you press your muzzle into it, sniffing and nuzzling him all over. His voice is sultry as he whispers into your pointed ear. </p>"My pheromones are potent, aren\'t they? Calling out into the world that I\'m a sexy stud, needing an obedient vixen to serve me. You\'re that vixen, aren\'t you, yes?" You couldn\'t resist even if you wanted to. Being this close to the gorgeous fox makes you want to do anything he says. You nod, and then you feel a strange power pulse through you. </p>Flute\'s furry paw strokes down your belly and between your legs, where he grips and squeezes your cock. "You don\'t need this.", he whispers. You start to pant and moan as your cock begins to shrink, dwindling in his grasp. </p>Despite your arousal and the hardness of your cock, it is becoming smaller and smaller, along with your furry white balls. Flute rolls you over and lies atop you, then starts to grind his long manhood against your crotch. Your own shrinking shaft is tiny by comparison now. </p>He starts to hump, and thrust, and soon your cock becomes so small it disappears completely into your soft fur. Then, with a strange, overpowering feeling of warmth and wetness, something new opens up between your legs. A tight, virgin passage, just for Flute. He pants with lust as he slowly guides his long dick into your new pussy. </p>With each thrust and stroke, your pussy gets deeper, and you take more of him in. The feeling is like nothing you\'ve ever felt before. You can sense his every motion inside you. He is owning you, mounting you. You are his. He starts to thrust faster and harder, making you moan and gasp in a feminine, girly voice. </p>His hands tease and stroke your chest, where your flesh is growing. A pair of perky, furry breasts for him to grope and squeeze, are forming on your chest. Your waist narrows, your features shifting. Flute is literally fucking you into a vixen. His vixen, that he always wanted. </p>You arch your back in lust as he thrusts in deeper and harder, his face growling and snarling. You can feel his cock pulse and harden, before he suddenly unloads his pent-up seed. Heat rushes up into your belly, the heat and power of your lover\'s cum as it fills you up. </p>Your whole body tingles with electric pleasure as you experience your first female orgasm, but your moans are silenced as Flute forces his muzzle onto yours, kissing you passionately. He looks deep into your eyes and smiles. </p>"What a beautiful woman you are." Once again he looks different to you. To your transformed body and mind, you realise you are looking at him with passionate, uncontrollable love. You would do anything for Flute. </p>You lie with him for as long as you can, while he strokes and enjoys your beautiful feminine body, before you gradually manage to recover enough of your mind to be able to stand up and prepare to leave. He lies on his back, his arms behind his head, naked, and he\'s so unbearably hot that you almost throw yourself back down to worship him some more. </p>You manage to resist – for now – and slip out of his tent, but his voice calls out after you. "Come back soon, gorgeous. Once you get a taste of this cock, you will never want to leave again.',
                        "descriptionchange": "This adventurer is a slender, pretty vixen with a bushy soft tail.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 8,
                                "change": "set"
                            },
                            {
                                "parameter": "submissiveness",
                                "quantity": 1,
                                "change": "add"
                            },
                            {
                                "parameter": "dominance",
                                "quantity": 1,
                                "change": "sub"
                            },
                            {
                                "parameter": "flute_connection",
                                "quantity": 2,
                                "change": "set"
                            },
                            {
                                "parameter": "flute_interest",
                                "quantity": 0,
                                "change": "set"
                            },
                            {
                                "parameter": "gender",
                                "quantity": 2,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "flute_2_female",
                "title": "Flute's Second Offer",
                "subtitle": 'Once again, you find yourself walking through the back streets. You tell yourself you are not going anywhere specific, but your flaring vulpine nose picks up on the scent of horny and virile male fox, and your body knows where you\'re heading. When you come to Flute\'s tent, the sleazy fox is already pantsless, his cock erect in the air as he strokes it slowly. </p>He\'s so hot that you can barely contain yourself. You know it must be some trick or spell, but it doesn\'t change the shivers of arousal that you feel when you look at Flute lying there, waiting for you. </p>"Hello again my new fox friend. Can\'t get enough of this shaft, yes? I understand. You may look like an adventurer, but you\'re a horny bitch underneath it, aren\'t you?" </p>Do you give in to your desires and enter his tent?',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "submissiveness",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "species",
                        "value": 8,
                        "comparison": "equal" //default greater
                    },
                    {
                        "parameter": "flute_interest",
                        "value": 1,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "flute_connection",
                        "value": 1,
                        "comparison": "equal" //default greater
                    },
                    {
                        "parameter": "gender",
                        "value": 2,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "fluteicon",
                "results": {
                    "grizzsex": {
                        "text": 'Your tail curls between your legs as you nod, before getting on your knees and crawling into Flute\'s tent. The cramped space feels even more confining this time, and you end up sliding your body on top of Flute\'s. His gleaming eyes look up into yours as his wide grin shines white in the dark. </p>His scent is so powerful, it feels almost like it\'s clutching at your mind. So masculine, so sexual. He slowly pulls off his jerkin, revealing his soft furry chest, and you press your muzzle into it, sniffing and nuzzling him all over. His voice is sultry as he whispers into your pointed ear. </p>"My pheromones are potent, aren\'t they? Calling out into the world that I\'m a sexy stud, needing an obedient vixen to serve me. You\'re that vixen, aren\'t you, yes?" You couldn\'t resist even if you wanted to. Being this close to the gorgeous fox makes you want to do anything he says. You nod, and then you feel a strange power pulse through you. </p>Flute\'s furry paw strokes down your belly and between your legs, where two of his fingers stroke against your pussy, before pushing up inside you and making you gasp. "This belong to me.", he whispers. You start to pant and moan as you feel hotter and hornier, your fox body developing something you never had before. Heat.</p>The raw feeling of it almost drives you wild. You desperately need to breed, need to be mounted. Flute rolls you over and lies atop you, then starts to grind his long manhood against your crotch. His cock seems so massive and sexy. It\'s all you can think about. </p>He starts to hump, and thrust, and soon you are moaning and gasping with delight. You feel like your pussy doesn\'t belong to you any more. It is just for one man, to make him feel good. Just for Flute. He pants with lust as he slowly guides his long dick into your pussy. </p>With each thrust and stroke, your pussy gets deeper, and you take more of him in, as you are reshaped to fit him perfectly. The feeling is like nothing you\'ve ever felt before. You can sense his every motion inside you, your inner walls the exact shape to pleasure his dick exactly. He is owning you, mounting you. You are his. He starts to thrust faster and harder, making you moan and gasp in a more feminine, girly voice than you had before. </p>His hands tease and stroke your breasts, which begin to grow thicker and heavier. The perfect pair of perky, furry breasts for him to grope and squeeze, the exact size he prefers. Your waist narrows, your features shifting. Flute is literally fucking you into his ideal girlfriend. His vixen, that he always wanted. </p>You arch your back in lust as he thrusts in deeper and harder, his face growling and snarling. You can feel his cock pulse and harden, before he suddenly unloads his pent-up seed. Heat rushes up into your belly, the heat and power of your lover\'s cum as it fills you up. </p>Your whole body tingles with electric pleasure as you experience the most intense orgasm of your life, but your moans are silenced as Flute forces his muzzle onto yours, kissing you passionately. He looks deep into your eyes and smiles. </p>"What a beautiful woman you are." Once again he looks different to you. To your transformed body and mind, you realise you are looking at him with passionate, uncontrollable love. You would do anything for Flute. </p>You lie with him for as long as you can, while he strokes and enjoys your beautiful feminine body, before you gradually manage to recover enough of your mind to be able to stand up and prepare to leave. He lies on his back, his arms behind his head, naked, and he\'s so unbearably hot that you almost throw yourself back down to worship him some more. </p>You manage to resist – for now – and slip out of his tent, but his voice calls out after you. "Come back soon, gorgeous. Once you get a taste of this cock, you will never want to leave again.',
                        "descriptionchange": "This adventurer is a slender, pretty vixen with a bushy soft tail.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 8,
                                "change": "set"
                            },
                            {
                                "parameter": "submissiveness",
                                "quantity": 1,
                                "change": "add"
                            },
                            {
                                "parameter": "dominance",
                                "quantity": 1,
                                "change": "sub"
                            },
                            {
                                "parameter": "flute_connection",
                                "quantity": 2,
                                "change": "set"
                            },
                            {
                                "parameter": "flute_interest",
                                "quantity": 0,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "flute_job_3",
                "title": "Crimes With Flute",
                "subtitle": 'Flute is a literal criminal, but you can\'t seem to stop thinking about him.',
                "type": "statcheck", //or random
                "stat": "charm",
                "difficulty": 25,
                "requirements": [
                    {
                        "parameter": "flute_connection",
                        "value": 1,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "theft",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'Flute comes up to you from behind, and wraps his arms around your waist. His muzzle slides against yours as he kisses and licks you, and teases your ear with his tongue. "So close now, my beautiful, delightful little vixen. Every day you get closer to being my perfect, loving little slave, forever", he whispers. You shudder and gasp a little, finding it hard to remember any reason why you wouldn\'t just want to spend the rest of your life doing everything your fox lover says. His hand gropes your breast for a moment, before he lets you go. "For now, however, we\'ve got money to make!", he says with a smile. You ask him what kind of product you\'re selling today, and he squeezes your rump. "Why, YOU, of course!", he says.</p>The plan is simple. Flute confiscates all of your clothes and gives you nothing but a few lacy veils to keep your modesty. Then, right in the middle of the street, he has you do a seductive dance. You spin and twirl, listening to his instructions. Sway more! Stick out that chest! Give the audience a wink! Command after command, and you do your best to make him happy. You start off embarrassed and shy, but soon the stares and glances from passers-by make you feel excited. You are beginning to enjoy their attention, and thinking of yourself more and more as a beautiful dancer. Meanwhile, any time a particularly horny male stops and stares at you, Flute sneaks behind them like a ghost, and his nimble hands swipe their coin pouches and valuables. They\'re all far too distracted to even notice.</p>By the time dusk comes, you are exhausted and tired, and Flute can barely conceal his enormous stash of ill-gotten valuables. He takes you by the wrist and pulls you into him, and you land against his chest. His long muzzle kisses yours, as his hands stroke up and down your body. You can feel his cock bulging out from his pants as he grinds against you and squeezes you possessively. "You are the truly the perfect partner, my lovely little foxglove", he whispers. You realise that right now, you can no longer remember ever wanting to be anything else.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 25,
                                "change": "add"
                            },
                            {
                                "parameter": "flute_interest",
                                "quantity": 1,
                                "change": "add",
                                "max": 5
                            }
                        ]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": 'Flute comes up to you from behind, and wraps his arms around your waist. His muzzle slides against yours as he kisses and licks you, and teases your ear with his tongue. "So close now, my beautiful, delightful little vixen. Every day you get closer to being my perfect, loving little slave, forever", he whispers. You shudder and gasp a little, finding it hard to remember any reason why you wouldn\'t just want to spend the rest of your life doing everything your fox lover says. His hand gropes your breast for a moment, before he lets you go. "For now, however, we\'ve got money to make!", he says with a smile. You ask him what kind of product you\'re selling today, and he squeezes your rump. "Why, YOU, of course!", he says.</p>The plan is simple. Flute confiscates all of your clothes and gives you nothing but a few lacy veils to keep your modesty. Then, right in the middle of the street, he has you do a seductive dance. You do you best, but you feel utterly humiliated. His instructions only confuse you more. Sway more! Stick out that chest! Give the audience a wink! Command after command, and you are totally overwhelmed. The stares and laughter from passers by is crushing, and you just want to stop. Flute is clearly frustrated. When someone watches you, he tries sneaks behind them and reach into their pockets, but you just aren\'t keeping their interest. </p>By the time dusk comes, you are exhausted and tired, and Flute has made no profit at all. He\'s about to give up, when a massive hairy boar walks up and gives you a lusty glance. His tongue licks his lips and teases his tusks as he asks Flute how much to plow you right here and now. Flute grins, and strokes his chin. The two of them start haggling over you, and you are increasingly nervous as you look over the massive muscular body of the boar, and his enormous heavy gut. Finally, Flute gets a price he\'s happy with, and leans back against the wall to watch. The boar\'s thick wide hands grab you and hold you firmly. He smells strongly of a manly, powerful aroma, much more rough and dirty and beastly than Flute\'s. You look down as he shoves his trousers, revealing a massively wide cock with a thick, heavy brown foreskin covering it. He pushes forward, past your veils as his cock presses into your pussy. You feel it stretch to fit his brick-wide shaft, and he snorts and pants, his tongue drooling as he starts to thrust and hump. His belly pushes against your chest, and his massive furry balls bounce as he thrusts over and over, pounding hard and fast. It seems to take forever, but finally he grunt, snorts and thrusts hard. You feel his hot, thick cum rush up inside you, but instead of pulling out, the boar shoves out and in again, his face stretching into a massive orgasmic grin. Another load rushes up into you, and another. Flute slides up to you as the boar continues to thrust. "Boars orgasm for hours, or so I\'ve been told. Do come catch up with me when you\'re finished! I must say, you look quite lovely like this", he says, before leaving you with the hairy pig. Despite the embarrassment, thinking of Flute stroking himself to you and this hairy boar makes you quite excited.',
                        "outcomes": [{
                            "parameter": "outcast",
                            "quantity": 1,
                            "max": 2,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "flute_3",
                "title": "Flute's Final Offer",
                "subtitle": 'You can\'t stop thinking about him. He\'s always in your thoughts, and your every desire seems to revolve around him. The perfect man, the gorgeous wonderful fox. You want him to own you forever. But if you take that last step, it might be irreversible.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "submissiveness",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "flute_interest",
                        "value": 1,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "flute_connection",
                        "value": 2,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "fluteicon",
                "results": {
                    "grizzsex": {
                        "text": 'Your clothes feel embarrassing and strange. When people look at you and read the text on the shirt, your face feels hot and flushed. Yet you wore them anyway, of your own free will. Now you are here, part of you telling yourself you came here just to explore, but another, increasingly louder part of yourself knowing exactly why you are here. Your vulpine nose is sniffing the air, tracking him down. Your heart flutters whenever you see orange fur or think you hear his voice.</p></p>You are in love with Flute. It may just be some curse he\'s cast on you, some trickery he did, but thinking of him makes you hot all over, and you can\'t seem to stop thinking of him. You adjust your shirt again, and then your ears perk up as you hear him. You dash along a side street and see Flute, your beloved fox, sitting down on a bag of goods and arguing with a sceptical-looking horse. "You don\'t LOOK like some sort of mighty wizard, fox." the horse says. Flute is about to reply, but then he notices you, and a wide grin spreads across his handsome muzzle.</p>"Oh don\'t I? Well, I\'ll have you know I always wanted a vixen to service my cock. A loyal, submissive fox girl who worshipped the ground I walked on and would do anything I say. So I found this adventurer, you know the type, deadly and powerful, and I cast a spell on them so strong they kept coming back to ME wanting to turn into my bitch more! Isn\'t that right, sweetheart?" he says. The last part he directs to you, and the horse\'s eyes widen as you walk forward towards them both. When he reads the words on your shirt, he chuckles with surprise, clearly impressed. Flute\'s own eyes are glowing in the dim alley, and this close, you can smell his manly, powerful aroma. </p>You can\'t drag your eyes away from his perfect body. He reaches down to his pants, and slides his claws into the fly. Then, slowly and teasingly, he draws out that long, perfect, rock-hard fox cock. It stands firm in the air, throbbing with power. Your mouth is watering.</p>"Now the spell\'s almost complete. I have my beautiful fox girl, exactly like I want her. All she needs to do is give me the blowjob I\'ve been craving, and her entire identity will be totally lost when she turns into my perfect, obedient little slave. Go ahead, sweetheart, I know you want it." he says. You barely hear it. Your master needs you. Your perfect beloved Flute. You fall to your knees and take hold of that long, hard cock. Your fingers stroke along the length, tease and rub just the right spots to make your master squirm and growl. Then you open your long muzzle, and slide it slowly into your mouth. </p>It\'s everything you ever wanted. Flute\'s scent and taste stroke along your tongue. The tip of his swollen cock bulges just slightly into your throat, your muzzle exactly the right size for him. Your tongue slides around his shaft, your mouth sucks and pleases him perfectly. Your mouth is designed perfectly to give your master the ultimate pleasure.</p>You are in heaven. You belong to Flute, completely. You could suck his gorgeous cock all day long and never tire of it. Your mind fades and empties out, your inhibitions drained. You don\'t care that you\'re blowing him in public, that the horse is watching all of this. You exist to please Flute. When he finally growls, and his cock unloads its creamy, hot gift into your mouth, it feels better than any orgasm you\'ve ever had, because you know you are serving your purpose. You swallow every drop, then pull your head away and lick Flute\'s cock clean with gentle motions of your tongue. He commands you to stay there and be quiet, then resumes his conversation with the horse. "As you can see, I am powerful enough to get anything I desire. So shall we make that deal?" he says. The horse eagerly agrees, and hands over a sack of gold for some vial of dust that Flute hands over, before he then dashes away with an excited expression. </p>Flute chuckles, and strokes your head. "It\'s worthless, of course. Enchanted, though, so he will think it worked and want to come back and buy more. I always get what I want." he says. He points at his lap, and you sit on it gently as he strokes your chest and fondles your breasts. He whispers in your ear. "Now, how about you be a good girl, and go make Master Flute some money? I\'ll be waiting here when you want to hand in your tribute, my slave." he whispers, his voice like tendrils of smoke in your ear. You nod, unable to resist, and think of how happy you will be to give your beloved master more of what he wants.',
                        "descriptionchange": "This adventurer is a slender, pretty vixen with a bushy soft tail.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 8,
                                "change": "set"
                            },
                            {
                                "parameter": "submissiveness",
                                "quantity": 1,
                                "change": "add"
                            },
                            {
                                "parameter": "dominance",
                                "quantity": 1,
                                "change": "sub"
                            },
                            {
                                "parameter": "flute_master",
                                "quantity": 1,
                                "change": "set"
                            },
                            {
                                "parameter": "flute_interest",
                                "quantity": 0,
                                "change": "set"
                            },
                            {
                                "parameter": "gender",
                                "quantity": 2,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "backstreets_random",
                "title": "Explore the back streets",
                "subtitle": "It's easy to get lost among the small buildings here.",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "Postage": {
                        "text": 'You see a dog and cat arguing about something in front of the town hall. You don\'t catch what they are complaining about, but when you get close, the dog slaps a large paper postage stamp on the cat\'s chest. The cat tries to tug it off, but it seems to be stuck. Brown paper starts to spread out from the stamp, wrapping around the cat\'s limbs with a papery scrape. </p>It spirals around his legs, making him fall over, and pins his arms to his chest. With a muffled yelp, the paper covers his face and head, then tightens as brown packing twine curls around the wrapped-up cat and leaves him wiggling and trapped. The dog kicks the cat-package over to a postbox and leaves, whistling.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "get_piss_curse",
                "title": "Cursed Bottle?",
                "subtitle": 'Flute is pawning off a strange bottle today [This will unlock watersports scenes].',
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "pisscurse",
                        "value": 0,
                        "comparison": "equal" //default greater
                    },{
                        "parameter": "muscat_1",
                        "value": 49,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "theft",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": 'Flute sees you and suddenly sidles in front of your path, while lifting a strange bottle and waving it at you. "Wait wait wait my friend, you cannot miss an opportunity like this! I have here in my hands a flask of water from that rarest and most magical of beings - a primordial dragon! Drink this, and untold powers will be yours!", he insists. You try to get away, but he keeps stopping you, and explaining how rare and magical this potion is. Finally you relent, and buy it. You look down at the bottle suspiciously. What\'s the worst that could happen?</p>You uncork the bottle of dragon piss, and hesitate for a moment before gulping it down. It burns as it goes down your throat, and you cough and gag at the vile taste. Yet despite that, you find yourself shaking the bottle, desperate for a few more drops. You drop it with shaking hands when you cannot get more piss from it, and realise you are now cursed with an insatiable lust for urine.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 50,
                                "change": "sub"
                            },
                            {
                                "parameter": "pisscurse",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    }
                }
            }
        ],
        "npcs": [
            {
                "id": "flute",
                "name": "Flute",
                "description": "Flute is a slender, sneaky fox male. He has a fetching grin and an even more fetching silver tongue.",
                "icon": "fluteicon",
                "shop": {
                    "trades": ["supplies", "slutty_shirt"],
                    "buys": ["ace_boots", "mikhail_socks"],
                    "sells": []
                },
                "dialogue": [
                    {
                        "input": "What is your name?",
                        "output": '"I am Flute of course! Merchant extraordinaire, nonpariel! One day I will be the richest fox in all the seven lands."'
                    },
                    {
                        "input": 'What is your job?',
                        "output": '"As a merchant of unparalleled alacrity, I wander these green and pleasant lands looking for trinkets and artifacts to sell to discerning adventurers like yourself."'
                    },
                    {
                        "input": 'See you later.',
                        "output": '"Next time come back with money, my friend!"'
                    },
                    {
                        "input": 'Why are you purchasing footwear?',
                        "output": 'Flute\'s eyes flicker to the left for a moment and he coughs. "I\'d rather not discuss that, if you would be so kind."'
                    },
                    {
                        "input": 'How is your cock?',
                        "output": 'The fox\'s eyes narrow and his grin grows extremely wide. "My manhood is the longest and finest you have ever seen! I love to have it served by obedient and beautiful creatures."'
                    },
                    {
                        "input": 'How are your paws?',
                        "output": '"My paws?" He lifts one long slender fox foot, and wiggles the toes. "They are, er, fine I think? I suppose you are one of those types, are you? Maybe I should find some boots to sell you. After I\'m done with them."'
                    }
                ]
            }
        ]
    }