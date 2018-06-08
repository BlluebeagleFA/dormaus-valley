var area = {
        "title": "marketplace",
        "position": [0.33,0.71],
        "header": "Dormaus Marketplace",
        "subheader": 'The marketplace is busy every time of day. Traders walk through, leading strange beasts of burden laden with goods, from walking birds to four-legged armored monsters. Colourful tents ring the marketplace, and between them, merchants hawk their wares from carpets or hand baskets.',
        "events": [
            {
                "id": "guest_fursuit",
                "title": "The Fursuit Store",
                "subtitle": 'You find yourself in front of an unfamiliar building, unsure of how you got there and feeling a vague sense of Deja Vu. The street you are on is eerily quiet, not a single other person around you for as far as you can see. All the other buildings around you feeling very empty and devoid of life. The building in front of you resembles some sort of store, with large windows and a glass door with a “We are Open” sign hanging on the inside. When you try to glance through the windows, you find the inside of the store to be quite dim and through the glass you can make out what looks like suits or costumes hanging from some racks. You back up and notice a sign above the door, which you can almost swear was not there before. The sign has text in a comic sans font which says “Fur-Real Costume Shop” and below the text is a picture of a really exaggerated blue cartoon fox winking. Do you decide to enter the shop?',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 7,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "default",
                "results": {
                    "grizzsex": {
                        "text": 'You decide to sate your curiosity and enter the unusual shop. When you open the door a bell above you rings, and you walk forward into the dimly lit shop. All around you, you see mascot costumes hanging from the racks. They are really colorful ranging from bright neon blues and reds to dimmer brown and whites. The heads of the costumes appear to be on some shelves on the left side of the store. Their eyes blankly stare at you with perpetual smiles on their faces. You decide to walk around to shop to see if you can find the store owner or a desk, but all you find, other than more of the costumes, is an intricate gilded mirror in the back of the store.</p>After a while of waiting in the store, you decide to leave, confident that no store clerk or owner is going to arrive. You make it all the way across the store and start to open the door when you hear a large crash behind you. When you turn around you see one of the costumes, fallen on the ground. </p>Out of common courtesy you go to put the costume back where it belongs. However when your hand touches the surprisingly soft fur, you instantly have an urge to try the suit on. You pick it up and start to look at it. It is a blue and white furred costume with a tail in the back and attached arm and leg paws. You check a tag on the bottom of the tail and realize that the costume is meant to be an arctic fox. You look around to make sure no one is around and with the suit in your hands you walk toward the mirror. You hesitate for a second, staring into the smooth inside of the suit not sure why you are doing this, but nevertheless you begin to slip on the suit. The inside feels warm and smooth to the touch, and it slides perfectly onto your body. </p>Zipped up, the suit fits perfectly upon your body, almost as if it was made specifically for you. You look in the mirror and move around, seeing how it looks on you. Other than your head, which is contrasting with the rest of your body, you think that you look great. Everything below looks like a larger than life fox. Your “paws” are slightly oversized, your “tail” is extremely bushy and sways almost lifelike when you move, and the white and blue color palette accentuates the suit on your body. </p>You start to lose track of the time as you keep posing and turning with the suit on your body, it becoming an obsession. After a while you decide it is finally time to take off the suit and you attempt to pull down the zipper. As you do, you find that it is stuck and you can’t pull it down. No matter how hard you pull down, it doesn’t budge an inch. You keep trying, slight panic swelling up from within you.</p>Then a calm thought, not entirely your own, enters your mind. “The suit is not complete…” At this you realize what was off all along. You were missing your head. You immediately run to the rack of heads you saw before and search for yours. It doesn’t take long, the right one standing out as bright as day. In the middle of the shelves, it is blue and white, like the rest of your body. The large cartoon eyes and gleaming smile practically telling you to put it on then and there. And so you do. You close your eyes and take the mask off the shelf, slipping it onto your head. It fits perfectly, like the rest of the suit, and slipping it on makes you feel a comfort you never felt before. Unknown to you, the head of the suit merged with the suit’s body, becoming one over your own.</p>At this you finally feel complete and whole, the suit filling the emptiness inside you. Conversely, your body begins to disappear under the suit, becoming a void beneath the cloth of the costume. Your “body” becomes lighter and hollower, just as it always was meant to be. You open your “eyes” and look around the shop. Then you look down at the zipper which confounded you earlier, and pull it down with ease. Inside your suit there is nothing but the inner black lining, and you feel happy. After a while you leave the shop content, but slightly confused why you went to a costume shop since as far as you can remember you can remember, you were always a walking fursuit. [Guest event from CJMPinger]',
                        "descriptionchange": 'This adventurer is a living fursuit. Inside they are hollow and lined with fabric, and outside they are a cartoonish white and blue arctic fox with large eyes, paws, and a bushy tail.',
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 7,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "market_random",
                "title": "Wander the Market",
                "subtitle": "There are many peddlers selling their wares, along with a number of brick-and-mortar stores selling odd things.",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "Slave Market": {
                        "text": 'You are shocked to see a wooden platform erected in the market square today, atop which are three men, naked except for their chains and collars. A human, a wolf, and a chubby, short cat. A crowd in front is shouting auction prices, and you realise this is a slave market! You are thinking about whether you should try to stop this, when a price is decided for the tall and muscular wolf. </p>It looks like a human adventurer has bought him, and the adventurer climbs up the platform, and then, strangely, strips naked. He opens the wolf\'s collar and places it around his own neck, while the wolf takes the man\'s armor and puts it on, then leads his new slave away on a chain. It looks like this is an auction to take the slave\'s place! What an odd town this is.',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "Furniture Store": {
                        "text": 'There\'s a furniture stall in the market today. A satyr, with a muscular brown-skinned chest but the lower body of a furry goat, is selling wooden chairs and tables and other items. An adventuer asks whether he can buy one of the chairs on layaway. The satyr frowns, and says that he can\'t help with that, but the human could pay a sort of deposit now, then get the chair in a month or two. </p>The adventurer agrees, and the satyr toots a strange, lilting tune on his panpipes. The human looks dizzy and confused, and starts to slowly remove his clothing with slow, zombie-like motions. Once he is naked, he gets on his knees, and the satyr starts to adjust him, moving his legs and straightening his back, and pressing his arms to his sides. The man\'s body hardens, and forms wood-like swirls and patterns. His limbs stiffen and become square and hard edged, as his lower body becomes four wooden legs. His back becomes a straight, firm wooden chair back, and his face just a carved pattern in the wood. Soon, there is just an ornate, handsome wooden chair. </p>The satyr grins. "There ya go. Two months and I turn you back and give ya the chair for free – unless someone buys ya before then!"',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "Saberhagen's Secret": {
                        "text": 'Saberhagen is organising his stall, carrying huge stacks of books to and fro and trying to jam them into shelves. You wonder what the books are for, when his magic is bakery-based, and take a quick peek. "Nine Love Lives", "Fifty Shades of Chameleon", "Love on a Hot Tin Roof", "Cat Love Amongst the Pigeons". These are romance novels! Saberhagen clearly has a secret vice. He turns and sees you looking, and his face turns pink with a blush. </p>"How rude! To spy upon my correspondence. I know just the punishment.", he says. He waves his hand, and your vision is suddenly filled with swirls and colours. Your body goes slack as you droop forward, your face stretching into a stupid, drooling smile. Saberhagen good kitty. Saberhagen master. Do what kitty says. For the rest of the day, the cat uses you to carry his books around and clean his stall, and you follow him like a big puppy, your mind filled with simple, happy thoughts. He eventually restores your free will and lets you go, but you get the feeling your intelligence didn\'t quite come back all the way yet. Nice kitty...',
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "The Hood": {
                        "text": 'While in the marketplace, you spot a young dog, possibly one of Mikhail’s many sons, talking to Flute. In Flute’s right arm are a few purple and blue hoodies, looking quite out of place in this rural fantasy environment. The one on top looks almost custom made for the dog, with extensions on the hood to accommodate for his ears. On the hood there is also yellow eyes that almost seemed to glow and little cloth teeth on the brim. The dog seems very eager, a small bag of gold in his hand and his tail wagging behind him.</p>Flute eagerly takes the gold out of the dog’s hands and tosses him the hoodie from the top of the pile. “Enjoy the purchase, and you know what? Have the rest on the house!” Flute tosses the rest of the hoodies onto the ground nearby and walks away, counting the money in the bag. The dog quickly and happily puts on the article of clothing, his tail wagging even more. He zips it up, leaving the hood down and looks at it on his body. It fits snug, and comfortably on him. He smiles and emphatically exclaims “This stange garment is cool!”</p>While the dog admires his new hoodie jacket, you spot the hood oddly move up on its own. With a single soft FWIP, the hood completely covers all of the dog’s face except for the mouth. “AH!! What the?!” yells the dog. He starts to pull at the hood panicking, trying to get it off. The “eyes” of the hood begin to glow even brighter with an unearthly light. The strings of the hood pull down further, all on their own, tightening the hood to his head. Soon you see the dog hunched over, his tail no longer wagging and his arms hanging down. In a matter of seconds, all struggling was over. You then see him walk slowly toward the pile of hoodies. He picks them up one by one, slowly his arms move as he was a zombie. When he finally picks all of them up, he starts walking by you and you hear in a deeper monotone “I… Obey… The … Hood…” </p>After he passes by, you resolve to yourself to not buy any strange pieces of clothing from flute, or wear one of those hoods. [Guest event by CJMPinger]',
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
                "id": "saberhagen",
                "name": "Saberhagen",
                "description": "Saberhagen is a male black cat, wearing a wide-brimmed pointed hat. He is constantly checking his store and pulling baked goods out of the oven, or arranging his shelves.",
                "icon": "saberhagenicon",
                "dialogue": [
                    {
                        "input": "What is your name?",
                        "output": '"My name is Saberhagen, sorceror of the Tower Spiral. I am here to purchase spell components and do research."'
                    },
                    {
                        "input": 'What is your job?',
                        "output": '"I am a scholar and a sorceror, one who commands the art of magic. I am currently using my skills to earn some money down here amongst the people, to fund my studies."'
                    },
                    {
                        "input": 'Is there anything you\'d like to buy?',
                        "output": '"If you could find me some witch lotus from the south of the valley, I would be greatly appreciative. Or anything that has a lot of ambient magic stored inside it."'
                    },
                    {
                        "input": 'What spells do you know?',
                        "output": '"Why, I know hundreds of spells, of course! At the Tower Spiral, I was one of the top students. Unfortunately, away from the tower I am a little more limited in what I can cast. I\'m trying to perfect my spellbread right now, which should help a great deal."'
                    },
                    {
                        "input": 'What is spellbread?',
                        "output": '"You have not heard of spellbread? The art of the baker is the most magical and potent of all. They store the power of the cosmic spiral in the whirls of their soft dough. You see, only living beings can store the patterns of magical spells, so we use the yeast in bread to store spells in physical form. In short, eating spellbread teaches you magic."'
                    },
                    {
                        "input": 'How is your cock?',
                        "output": 'The cat blinks with surprise, and then his cheeks turn pink. "I...I suppose it is fine. Th-thank you. I am not accustomed to this country\s open and eager affections."'
                    },
                    {
                        "input": 'How are your paws?',
                        "output": '"You are a peculiar adventurer. My paws are well, thank you for your concern. Their appearance? Long and black, I suppose?"'
                    }
                ]
            }
        ]
    }