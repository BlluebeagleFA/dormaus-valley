var area = {
        "title": "jacks_hideout",
        "header": "Jack\'s Hideout",
        "nomap": "You don't know your way around this area yet. You'll have to navigate on foot.",
        "subheader": 'This underground space is scattered with random loot and stolen items. Dirty clothes cover the floor so much that you can\'t see the dirt below them. Chests and boxes are stacked around at random, and there\'s a climbing frame near the rear for practising on.',
        "events": [
            {
                "id": "jack_west",
                "title": "Travel West back to the rocky passage",
                "subtitle": "You remember the path Jack showed you that will keep you hidden as you move.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You climb up out of the hideout, and clamber over the rocks before dropping back down into the passage.",
                        "area": "windy_path",
                        "outcomes": []
                    }
                }
            },{
                "id": "jack_0repeat",
                "title": "Thief Training (Repeat)",
                "subtitle": 'Jack can\'t wait to start training his "newbie"',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "jack_spell",
                        "value": 4,
                        "comparison": "equal" //default greater
                    },{
                        "parameter": "species",
                        "value": 28,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "jackicon",
                "results": {
                    "grizzsex": {
                        "text": 'Your training starts immediately. First, Jack has you try to walk across his hideout without making any nose. It doesn\'t seem too hard, but the random clothes and objects secretly conceal a large amount of bells and jangly keychains that he\'s hidden underneath. He teaches you how to carefully place your feet, lifting and pressing them down in such a way so they don\'t move anything or make noise, but still let you move quickly. As you practice, your feet start to grow soft, dark fur. Your toes lengthen, and you feel claws grow from the ends, and your soles toughen and darken as black pads cover them completely. With your new feet, you seem to be able to place your steps more carefully, to stretch your toes and put your claws down where they will make the least noise. You also notice that the scent coming from your new raccoon feet is the same dirty aroma surrounding Jack.',
                        "outcomes": [
                            {
                                "parameter": "jack_spell",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "jack_0",
                "title": "Thief Training",
                "subtitle": 'Jack can\'t wait to start training his "newbie"',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "jack_spell",
                        "value": 0,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "jackicon",
                "results": {
                    "grizzsex": {
                        "text": 'Your training starts immediately. First, Jack has you try to walk across his hideout without making any nose. It doesn\'t seem too hard, but the random clothes and objects secretly conceal a large amount of bells and jangly keychains that he\'s hidden underneath. He teaches you how to carefully place your feet, lifting and pressing them down in such a way so they don\'t move anything or make noise, but still let you move quickly. As you practice, your feet start to grow soft, dark fur. Your toes lengthen, and you feel claws grow from the ends, and your soles toughen and darken as black pads cover them completely. With your new feet, you seem to be able to place your steps more carefully, to stretch your toes and put your claws down where they will make the least noise. You also notice that the scent coming from your new raccoon feet is the same dirty aroma surrounding Jack.',
                        "outcomes": [
                            {
                                "parameter": "jack_spell",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "jack_1",
                "title": "Thief Training",
                "subtitle": 'Your new feet are just the start. Jack insists you take this training seriously!',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "jack_spell",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "jackicon",
                "results": {
                    "grizzsex": {
                        "text": 'Your next lesson is to walk across the hideout silently again. Only this time with bells hanging from the ceiling on strings. With every one you hit, you curse and grumble, your voice becoming rougher and swearing seeming to come more naturally, as you seem to take on the same accent as Jack. It\'s a rough, sharp and lower-class accent, but it feels normal in your mouth. The training gets much harder when your tail starts to grow in. It stretches from your rear, developing fur with handsome dark stripes on it, and whenever it catches against a bell, it seems to get a little longer. It takes a while before you get the hang of it, and by then your legs and chest are starting to grow fur too, the brown raccoon fuzz spreading up your body. Your fur is scruffy and messy, just like Jack\'s.',
                        "outcomes": [
                            {
                                "parameter": "jack_spell",
                                "quantity": 2,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "jack_2",
                "title": "Thief Training",
                "subtitle": 'Jack\'s excitement for this next lesson makes you nervous. You are sure he has something tricky planned.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "jack_spell",
                        "value": 2,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "jackicon",
                "results": {
                    "grizzsex": {
                        "text": 'Jack pulls you over to the other side of his hideout, where the underground room is criss-crossed with wooden beams that lead to small crawlspaces and little tunnels. He clambers up the beams as easily as walking, and you follow him. The rough wood is uncomfortable on your palms, and you wince at the pokes of splinters, but as you climb up and squeeze through the gaps, your palms quickly start to toughen as your hands become dextrous clawed paws. Your body shrinks and gets thinner, making it easy to slip through and around the small spaces. Jack keeps messing with you though. You\'ll climb up one of his tunnels only to bump right into his rear, and get a faceful of his musky balls. Or you\'ll turn a corner, and his footpaws are waiting to smother over your face, and rub and tease you. The third time he does that, you shout abuse and profanity at him, calling him a dumbass and a dickweasel. He pulls on your face with his foot, stretching it out into a muzzle, then grabs your ears in his toes and tugs on them until they become pointed raccoon ears.</p>You finally crawl out from his tunnels back into the hideout. He pulls some pants on, but takes off his shirt, letting you look at his scruffy furry bare chest. You stand up and dust yourself off, feeling your own thin furry chest, long raccoon paws, and big fluffy tail.',
                        "outcomes": [
                            {
                                "parameter": "jack_spell",
                                "quantity": 3,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "jack_3",
                "title": "Final Training",
                "subtitle": 'Jack has one last lesson for you before you can join his gang.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "jack_spell",
                        "value": 3,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "jackicon",
                "results": {
                    "grizzsex": {
                        "text": '"Alright, last lesson! Pick my pocket, newbie!", Jack says. You walk up behind him silently, and slip your hand into his pocket. As you slide it down, you realise the pocket has been cut out from his pants. Your paw-hand moves right to his bare crotch, and you end up gripping his firm cock. He chuckles, and leans back, before kissing you with his scruffy and unkempt muzzle. Your fur ruffles together as you kiss, and you stroke his cock slowly while your tongues roll and slide against eachother. You feel your eyes tingle as a dark raccoon mask of fur appears on your face. You grin back at him, your teeth yellowed and dirty just like his. You shove him down onto the floor, and roll around with him in the dirty clothes. Your fur becomes scruffy and dirty, and your hair sticks up like his. He pants and pins you down, grinding his cock against yours as you become almost exactly his twin. Your face twists into a cocky, rude expression, as you feel all your inhibitions about crime fade away. Fuck society! You\'re out for yourself, and your hot-ass master is just the same!</p>"Welcome to the gang, newbie!", your fellow raccoon says.',
                        "descriptionchange": 'This adventurer is a short raccoon, with scruffy fur, a crooked grin, and a stink of criminality, both figurative and literal.',
                        "outcomes": [
                            {
                                "parameter": "jack_spell",
                                "quantity": 4,
                                "change": "set"
                            },
                            {
                                "parameter": "species",
                                "quantity": 28,
                                "change": "set"
                            }
                        ]
                    }
                }
            }
        ],
        "npcs": [
            {
                "id": "jack",
                "name": "Jack",
                "description": "Jack the raccoon is a short, smelly and scruffy criminal. He\'s always grinning in a way that shows off his protruding fang, and when he sees you looking, he gropes his crotch or winks.",
                "icon": "jackicon",
                "dialogue": [
                    {
                        "input": "What is your name?",
                        "output": '"I\'m Jack, obviously. Don\'t forget though, you\'re supposed to call me master!"'
                    },
                    {
                        "input": 'What is this job like?',
                        "output": '"Don\'t think of it as being a thief. It\'s more like an unlicensed road tax collector, and cleanup crew for things stupid suckers leave lying around!"'
                    },
                    {
                        "input": 'Can I see your cock?',
                        "output": 'Jack grins widely as he pulls down his pants, letting his cock flop out into the air. Despite his short stature, his cock is hefty and thick, and it bounces over his musky, furry balls as it hardens. "I knew it, newbie! You just want some of this hot sexy raccoon cock don\'t you? I know I\'m a fucking badass stud, but try to control yourself!"'
                    },
                    {
                        "input": 'Can I see your paws?',
                        "output": '"I knew you liked my feet, newbie. Go on, take a look!" He sits back and lifts up his paws, showing off the rough, dark soles that are completely covered with a firm black pawpad. He flexes his toes as the musk of his unwashed feet spreads over you.'
                    }
                ]
            }
        ]
    }