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
                "id": "festival_rhino",
                "title": "Help Flute Gather Wood",
                "subtitle": "You see Flute walking through the streets, towing a cart behind him. It's stacked with wooden scraps. Pieces of broken furniture, old boards, twigs and branches, and other such things. \"Greetings friend! Care to purchase some wood for the Rebel's Bonfire? All who contribute to the fire will have good fortune all the coming year, and this year is going to be a particularly large one! We have an unprecedented quantity of travellers from the Horn region passing through for the changing seasons, and I anticipate an uproariously good time!\", he says. You politely decline to buy any, but ask if there's any way you can help out. His eyes gleam and he strokes his long chin. \"Actually, there is something you could help with. I have a plan to gather some spare wood, but it requires a friend. Someone willing to become big, brutish and...horny.\"",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 48,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "grizzsex": {
                        "text": "Flute claps his hands together and grins when you agree. \"Perfect! I've had this scam - I mean, business plan - in the back of my mind for a few weeks. Here you are, my friend!\", he says. He tosses you a small vial of glowing green fluid, which you catch. \"Simply drink this, and leave the rest to me.\"</p>You shrug and uncork the vial. There is about a teaspoon of liquid inside, but even from the tiny bottle it has a powerful, dizzying stink. It smells of deep, sandy plains, of powerful heavy muscular bodies, of sweat and power and weight. You lift it to your mouth and gulp it down. Your whole body tingles and flushes with heat and sensation, as you start to feel sluggish and slow.</p>You rub your head, panting as your brain feels like it's struggling through molasses. You snort, your breath coming out as hot steam as your skin starts to feel heavy and rough and thick. Your feet pressing down into the dirt as your body grows taller and heavier, your shoulders getting broader and your bones creaking as they push your whole body up and out. Your skin starts to get rougher as it turns grey and darkens, turning splotchy and dusty and thick. You feel your face pushing forward, while your ears twist and roll into little pointy soft ones that move up atop your head. Your vision is fully occupied as something starts to grow and rise in front of you, a thick and heavy horn forming on the end of your broad and powerful muzzle. It is joined by a second, smaller horn further up your face, giving an enormous weight to your head that feels like it's dragging your brain down with it.</p>Your feet stiffen and harden toes fusing together into two large, rough hoof-like toes on each foot, and you rub your rough, thick hands over your belly as it swells and grows, becoming round and firm like a heavy barrel. You look down at Flute, your mouth partly open as you struggle to think anything at all in your tiny, shrunken brain. He pats your side and grins. \"Fear not, my large and cognitively challenged friend! Simply follow me and we will make you feel real good, I promise\", he says. He reaches up and ties a rope around your neck, then pulls you along gently. It takes a few tugs before you realise what he wants, and you lumber after him slowly.</p>He guides you gradually to a row of houses, and then knocks politely on one. The door opens, and a slender canine looks out at you suspiciously. Flute gives his brightest smile. \"Door to door stud delivery! A special festival offer, only for my most beloved clients. For a mere two gold pieces, this fine, enormous beast will show you the time of your life!\", he says. He pats your side, and you snort more hot steaming breath. The dog looks a little hesitant, but then he get a sniff of your thick, powerful sexual musk. His tail starts to wag, and he blushes. \"W-well, two gold is pretty cheap...alright!\", he says. Flute pushes you forward, and you grunt as you enter the dog's house.</p>The dog is nervous and hesitant at first, but he soon starts to press against you, and rub his padded hands over your chest. Stroking and sliding along your belly and torso, and then pressing his wet, cold nose against your skin. He breathes in deeply, his tail wagging madly, and soon he is panting and drooling with desire. You let him lick and nuzzle you, his eager tongue and nose sniffing you all over, until finally you can hold it in no longer. You grab him by the shoulders, and shove him down onto a table. Your huge hand rips off his pants, revealing his short, rock-hard cock. He wiggles with a nervous blush. \"G-go for it! Show me who's boss!\", he yelps. You snort again, and press yourself down atop him as you finally get the chance to relieve the lust and desire that is soaking your slow brain with need.</p>The thrusting and pounding of your fucking can be heard from two doors down. You slam the dog onto his table, your sex wrecks his chairs. All around his house the two of you fuck, with you always on top and calling the shots. He cums over and over, his face flushed with desire and need, until finally, hours later, he is lying on top of you, weak and covered in his own cum. There is a knock at the door, and Flute opens it easily, since the lock was broken during one of your many sessions. \"Time's up, friend! Oh, and look at this. You know, for a small fee, I can remove all this broken wood for you...\", he says.</p>You leave him to his scam, and lumber out past him, your mind and new body still craving more rough, hard pounding.",
                        "descriptionchange": 'This adventurer is a massive, brutish-looking rhinocerous. Their skin is thick, leathery and grey, and their limbs are stocky and powerful. Their huge head bears gigantic and heavy horns.',
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 48,
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
                "id": "trapbox",
                "title": "A Broken Fucktoy",
                "subtitle": "Flute is standing by the side of the marketplace, poking at what looks like an empty box. When you get closer he scratches his chin, and then notices you. \"Ah! Greetings friend, you find me in a bit of a predicament. I recovered this fine artifact from the rag-and-bone-man's cart for mere pennies, as I recognise an old Gran Campion Pleasurebox when I see one! It doesn't seem to actually work though. I've been fiddling with it all day to no avail. I can pay you a small stipend if you have any ideas on how to restore it?\", he says.",
                "type": "random",
                "requirements": [
                ],
                "icon": "inanimatefetish",
                "results": {
                    "grizzpay": {
                        "text": "You take a look at the box. There doesn't seem to be any obvious mechanical components to it. It's about the size of a footstool, and the outside is smooth, sleek red leather, while the interior is glossy and black, almost rubbery. There is a narrow hole on two opposite ends, sealed with a sort of rubbery orifice, but otherwise nothing. You try poking and rolling it around, but the hinged lid doesn't even seem to have any obvious catch or way of staying closed. Flute watches you for a few minutes, before getting impatient. \"Well, I have other business to attend to. I'll return in an hour or so, if you have any luck with it. No damaging it though, or you will be paying for it!\", he says. He then leaves you alone with the box.</p>You toy with it a little longer, before you notice something glint in the inside of the box. When you try reaching in for it, you can't quite get your hand into the far corner where you saw it. You place the box on the ground, and crawl into it partway, before taking a closer look and touching it. It's some sort of silvery button. As soon as your finger brushes against it, the box suddenly lurches. It flips onto its side, causing you to fall with your face against the slick, rubbery interior. Rubbery tendrils emerge from the sides, wrapping around your wrists and dragging your legs into the box. The lid closes, trapping you in darkness as it locks closed with a \"click\".</p>You feel the tendrils wrapping around you more and more, as you are squeezed down into a curled up, uncomfortable position. Your face is forced against the side of the box, your lips pressed around one of the holes you saw earlier. Any attempt to speak out is muffled and made helpless, as the hole seems to extrude a large cylinder into your mouth to keep it forced open. The tendrils pull and tug at your clothes, dragging them up over you and scrunching them up against your sides, almost like stuffing for the small amount of empty space left in the box. You feel your rear adjust as it is pushed against the other hole, before the rubber finally seals and becomes solid, trapping you in position.</p>You are completely unable to move, and unable to speak or even wiggle with smooth, slippery latex pressed skintight to every part of your body. You have no idea what is happening outside of your box, or any way to escape.</p>After an hour of waiting in your dark cramped prison, you hear footsteps approach. \"Hello? Anyone there?\", someone says. It's Flute's voice, and he is getting closer. You feel yourself roll slightly and lift up, before being placed back down. \"Yikes! It's so heavy! Ah, it is fixed! What a peculiar adventurer, to leave without pay. I wonder how it feels…\"</p>You are lifted up again, and dragged over to something. You then feel a warm, thick object begin to push against the hole, and it slides through past the rubbery orifice before slipping into your mouth. It oozes salty, dripping fluid, and thrusts down past your tongue and deep into your throat. You taste musk and sweat, as a long hard cock slides in and out of your mouth, thrusting harder and deeper as its owner gets more and more excited and aroused. \"Oh fuck, it feels so real! I almost want to keep it for myself\", Flute says, his voice panting and breathless. With a loud grunt, he thrusts in again, and again, shaking your box prison as he gets wilder and more aroused. Finally, with a shuddering gasping moan, his cock throbs in your mouth and gushes thick, hot cum deep into your throat. Splattering your insides with his creamy seed, before slowly pulling free.</p>You feel yourself move again, before you distantly hear the sound of crowds and people moving around. \"Yes that's right, a genuine Gran Campion pleasure box! I guarantee its abilities myself. Only one thousand coins!\", Flute says. He has put you on sale, and no one knows you are trapped inside!",
                        "trapped_desc": "There is a large cube for sale at Flute's store, which he claims is a pleasure box.",
                        "trapped": 'You are trapped helplessly in the grip of the pleasure box, and can do nothing but accept the cocks of anyone that wants to fuck you in either end.',
                        "outcomes": []
                    }
                }
            },{
                "id": "dominateflute",
                "title": "Flute's Weakness",
                "subtitle": "The special paw scent you bought is having quite an effect on both you and the people around you. Walking around town barefoot, constantly smelling your own ripe, thick dominant scent, is causing you to subconsciously swagger more, strut while you walk, and generally feel incredibly confident. The townspeople move aside as you pass, some of them blushing, and some others staring at your feet as you go.</p>None are more obvious with this than Flute, though. He looks pained and awkward, sweat dripping down his forehead and his cheeks flushed. His usual jovial patter comes out as a strangled stammer when he tries to speak. You could use this to your advantage.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "dominance",
                        "value": 1,
                        "comparison": "greater" //default greater
                    },{
                        "parameter": "paw_musk",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "domicon",
                "results": {
                    "thing": {
                        "html": "data/active/FluteDom.html",
                        "outcomes": [
                            
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
                    "buys": ["ace_boots", "mikhail_socks", "stallion"],
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