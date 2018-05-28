var area_bar = {
        "title": "bar",
        "position": [0.76,0.74],
        "header": "The Fur and Feather Bar",
        "subheader": 'The bar is dim compared to the streets outside, but a roaring fire and many flickering candles gives it a homely and welcoming feeling. A massive dire-bear-skin rug lies next to the fireplace, and behind the bar, a dizzying array of colourful spirits are begging to be tasted.',
        "events": [
        	{
                "id": "pub_cleantables",
                "title": "Clean Tables",
                "subtitle": "Waiting tables isn't glamorous, but it pays the bills.",
                "type": "statcheck", //or random
                "stat": "stealth",
                "difficulty": 2,
                "requirements": [
                    {
                        "parameter": "grizz_interest",
                        "value": 5,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "wine_1",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "Grizz makes it clear that you must not disturb his clients. Many of them are busy with drinking powerful transformative alcohol, and no one likes to get distracted half way through their change. You sneak around past adventurers who are bulging out into muscular minotaurs, and snag their beer steins before they knock them to the ground. You slide extra servings of dumbing-down booze to guys who are half-donkey and already too dumb to realise it's a bad idea to drink more. At the end of the day, Grizz pays you with some of the extra bottles of wine that transformed customers left behind.",
                        "outcomes": [
                            {
                                "parameter": "wine_1",
                                "quantity": 5,
                                "change": "add"
                            },
                            {
                                "parameter": "grizz_interest",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": "Grizz warns you not to disturb his clients, or distract them from their transformations. You do well at first, but just as you're ducking under the flailing leg of a guy partway turning into a horse, you bump right into the table of another customer. One who's rapidly becoming a big, angry minotaur. He shoves you off his table, knocking the wine out of the hands of several other customers. After that, it turns into a full-on brawl. You manage to escape by scooting away, only to bump into a very angry Grizz. He gives you a pound on the head with his enormous handpaw for screwing up.",
                        "outcomes": [{
                            "parameter": "pain",
                            "quantity": 1,
                            "max": 2,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "pub_payday",
                "title": "Payday",
                "subtitle": "It's time for payment for working at the bar.",
                "type": "random",
                "requirements": [
                	{
                        "parameter": "grizz_interest",
                        "value": 4,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "grizzicong",
                "results": {
                    "grizzpay": {
                        "text": 'Grizz motions you over to him behind the bar. For a moment, it looks like he\'s going to say something to you, but then the big bear just shrugs and glances away. After a moment, his huge padded paw pats you on the head. Presumably in Grizz-talk, that means "Good job, kid". </p> The bear then leans down and pulls a crate out from under the bar, before sliding it over to you. It\'s stacked with dusty bottles of cheap wine, and you both drink a glass together in amicable silence before he leaves you with the crate and goes back to work.',
                        "outcomes": [
                            {
                                "parameter": "wine_1",
                                "quantity": 75,
                                "change": "add"
                            },
                            {
                                "parameter": "grizz_interest",
                                "quantity": 0,
                                "change": "set"
                            },
                            {
                                "parameter": "grizz_connection",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "pub_payday2",
                "title": "Payday?",
                "subtitle": 'As you enter the pub, the barkeeper looks over at you. His enormous furry body reaches up to the ceiling, and his deep voice seems to make the building rumble. </p>"Hey, shortie. Special on tonight. Bear Musk. New cocktail. You tryin\'?" The massive bear scratches his furry belly and gives you a dirty leer.',
                "type": "random",
                "requirements": [
                	{
                        "parameter": "grizz_connection",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },
                    {
                        "parameter": "species",
                        "value": 2,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "grizzicong",
                "results": {
                    "grizzsex": {
                        "text": 'The bear chuckles, then turns around. You hear a grunting and pumping, and he pants, one of his arms propping him up against the wall. Then there\'s a deep growl, and a sticky splashing noise. He turns back around, still panting a bit, and slides a shot glass over to you. It\'s filled with thick creamy goo, which is splattered all over it in a messy dripping load. The goo has a strong, musky and sexual aroma, which reminds you a lot of the huge shaggy smelly bear. </p>He grins widely at you as you gulp it down, swallowing the warm goo in one go. Immediately, you feel hot and flushed all over. Your skin itches as sweat starts to drip down your body, giving you a musky stink that has a deep, beastlike undertone to it, just like the barkeeper. You feel thick, bristly fur growing all over you, especially under your arms and around your crotch. The floorboards under you creak as you grow taller and wider, heavy with swelling muscles under your hairy skin. </p>As you pant and sweat at the bar, the barkeeper bear steps back, showing off that he\'s naked below the waist. Only the countertop was concealing his fat, dark cock and huge musky furry bear balls. He grips his shaft in one massive rough paw, and starts to pump and stroke it right in front of you. Your mouth waters as you watch his huge cockhead dribble and gush with slick precum. After a few minutes of pounding his cock, he growls, spurting a thick white stream of cum into a new shot glass. The dripping cum fills it up and makes a sticky mess all over his hand and the bartop. He then slides it over to you, and you grab and swallow it like a man dying of thirst. </p>With more bear cum in your belly, your changes accelerate. Your chest grows heavy and round, a layer of fat beginning to cover your rock-hard new muscles. Your palms and soles develop a dark, tough padding, and your fingernails transform to thick powerful black claws. Your face grows into a stocky muzzle, the bones creaking as they transform, making your jaw powerful and deadly. The intensity of the changes make you fall to your knees, clutching your furry gut with your clawed hands. </p>The barkeeper walks around and stands in front of you, his brick-thick cock in your face. You cannot resist, and you eagerly open your fanged muzzle to take in his sweaty, musky cock, so that you can suck down his powerful cum straight from the tap. Your furry face pushes against his crotch over and over, his heavy gut resting on your head, until he grabs your head and squashes you in firmly between his legs. Cum is pumped into your throat in messy spurts. </p>The more you drink, the more you change, and by the time the barkeep pulls his cock from your face, you are a huge hairy chubby bear just like him. A few last splatters of cum spray over your muzzle, before the big bear returns to his bar like nothing happened.',
                        "descriptionchange": "This adventurer is a huge, chubby and very furry bear.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 2,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "bar_random",
                "title": "Hang Out",
                "subtitle": "Interesting info can always be found at a bar, right?",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "Orc Absinthe": {
                        "text": '"Hello there, by any chance is there any green absinthe, barkeeper?", you hear an adventurer say. He\'s sitting at the bar, and Grizz grunts, before sliding over a tall bottle. The adventurer pours himself a bit, and takes a gulp. He shudders, and clutches his chest. He looks unwell - his skin is taking on a green, grassy tint. His jaw creaks forward, and his lower teeth start to thicken and jut out, becoming big curved tusks. "That was amaz- er, wonde-, errr...GOOD!" he says, in a deeper, slower voice. </p>He drinks more, his body thickening with muscle and the chair under him creaking as he grows taller and heavier. His clothes give way with a RIP, revealing a stacked, muscular green chest, and his boots explode open to show off gigantic green muscular feet. He snorts and grunts. "Me green. Drink good." he says, and Grizz just nods.</p>The new orc orders a round of drinks for everyone, including you.',
                        "outcomes": [
                            {
                                "parameter": "wine_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "Age Booze": {
                        "text": 'You settle down at the bar, nodding to Grizz and ordering a little something to wet your whistle. The bear goes to fill a glass, a stern growl and furrowed brow show his irritation. "I feel like I just changed this darn keg...be right back!"</p>You watch the bear trundle off go the backroom, scratching his belly as he grumbles in mild irritation. As soon as the door swings shut beside him you notice movement next to you. A spry young looking lion takes the seat next to you. </p>He has a big grin on his face as he makes a quiet, "Shhh..." motion with his finger. His red mane is short and still seems to be filling in around his golden tan fur. The young feline is reaching behind the counter trying to grab a bottle before you get back. You watch in in surprise, not sure if you should call Grizz or not.</p>"YOU!" A thunderous grumble silences the bar, all eyes falling on the thieving cat. His eyes wide with his arm behind the counter, like a kid caught with his paw in the cookie jar. He grins and tries to bolt. </p>Even with the keg on his shoulder the bear moves quick, quicker than you think a bear his size might. He grabs the lion by the scruff of the neck and bends him backwards over the bar. </p>"Don\'t move kid!" He growls, "I\'ve had it up to here with you. The legal age to drink is twenty-one, NOT eighteen! If you want a nip that bad, maybe Ol\' Grizz can help you out with that."</p>The lion is too scared to move under the watchful eye of the intimidating bear. You can\'t help but remain obediently rooted to your seat as well. The bear taps the keg on his shoulder with one angry fist, twisting the spigot on. Beer starts pouring into the young cat\'s mouth. The bear kicks up the bottle the cat was reaching for and uncorks it as well, pouring and adding it to the stream. Lastly the bear slides his cock into the lion\'s open maw. The two streams of alcohol pour over the bear\'s cock as he humps the lion\'s throat.</p>The lion struggles under Grizz, gagging on the fluids assaulting his throat. His shirt is pulled up due to how he\'s bent. You watch his trim golden belly grow a thick read treasure trail into his pants. The bulge in his trousers thickens and expands, soon the young lion is hard. His body continues to broaden. His chest becoming thicker, he gains a bit of a beer belly as the treasure trail grows thicker and richer. A wet stain forms in the lion\'s bulge, not sure if the drunk kid has wet himself like a drunk, or if he has cum. The scent of booze overwhelms. The thick red treasure trail gets flecks of silver. You look up and see the youthful teenage face of the lion is gone. Now there is a rugged older lion guzzling booze and bear cock like a champ, a full mane and beard on his strong jaw. It\'s a deep red with mature flecks of silver. As the keg taps out, Grizz pulls his cock free. The older lion gives a triumphant belch, looking down in surprise at the man he\'s become. </p>"Don\'t look so smug kid, you still gotta pay your tab!" Grizz gruffs with a smirk. The lion is good for his debts, and a few days later he comes around with some extra cash, which gives you a bonus from Grizz.(Guest event by Fahlma)',
                        "outcomes": [
                            {
                                "parameter": "wine_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "Drunk Mouse": {
                        "text": 'You see a small mouse sitting on the countertop, drinking from a thimble. He\'s leaning against a bowl of nuts and looks very drunk. "Stupid coyote cheated me.", he squeaks, and drowns his sorrows in more tiny quantities of ale. "S\'not all bad, though. Ale is cheap when you\'re this tiny!", he finishes. </p>With a drunken giggle, he stumbles and falls into the nuts, his own furry rodent balls resting atop two walnuts as he falls asleep. You snatch the little mouse up moments before a big tiger grabs a handful of nuts from the bowl, and Grizz pays you a few extra bottles for saving a paying customer.',
                        "outcomes": [
                            {
                                "parameter": "wine_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "Grizz Blowjob": {
                        "text": 'Grizz seems distracted today. He\'s not wiping his usual glass, and he is taking longer than usual to serve customers. Every now and then he grunts and moans, and his shaggy fur is damp with sweat. Someone asks for a bear musk, and he grunts that it\'s all been reserved for a special customer. </p>Curious, you lean over, looking past the bar under Grizz\'s massive furry gut. Sure enough, between his legs is a smaller bear with a huge grin on his face. The bear is bobbing his head back and forth on Grizz\'s enormous cock, and every time Grizz moans and pants, a spurt of cum escapes from the other bear\'s lips. Must be a special offer - straight from the tap. Grizz slides you over a few bottles to keep your mouth shut.',
                        "outcomes": [
                            {
                                "parameter": "wine_1",
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
                "id": "grizz",
                "name": "Grizz",
                "description": "Grizz is an enormous musclebound bear, his powerful muscles coated by soft blubber and thick, heavy fur.",
                "icon": "grizzicon",
                "shop": {
                	"trades": ["wine_1", "wine_2", "gro_potion", "shrink_potion", "smart_potion", "dumb_potion"],
                	"buys": [],
                	"sells": []
                },
                "dialogue": [
                    {
                        "input": "What is your name?",
                        "output": '"Name\'s Grizz."'
                    },
                    {
                    	"input": 'What is your job?',
                        "output": '"Barkeeper."</p>He stares at you like your question is incredibly stupid.'
                    },
                    {
                    	"input": 'See you later.',
                        "output": 'He just grunts at you.'
                    },
                    {
                    	"input": 'Can I see your cock?',
                        "output": 'He stares at you from under his hairy, brutish eyebrows, then reaches one hefty paw under the bar. With a grunt, he lifts up an enormous glistening black sausage of a cock, thicker than your arm. He drops it on the counter, the stink of bear crotch filling the bar, then pulls it back down between his legs.'
                    },
                    {
                    	"input": 'Can I touch your paws?',
                        "output": 'The bear grunts, and grabs a stool behind the bar, which he sits on. It creaks like it\s on the verge of snapping in half under his weight. He lifts one of his feet and drops it on the bartop with a heavy THUMP. His enormous foot is bigger than your face, the sole completely covered with a thick, dark black pawpad. His long claws stick out from shaggy fur, and his foot is glistening with dirt and sweat. He pulls it back down and stands up like nothing happened.'
                    }
                ]
            }
        ]
    }