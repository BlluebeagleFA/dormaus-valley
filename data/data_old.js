var datafile = {
    "areas": {
        "base": {
            "title": "Something",
            "position": [0,0],
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
                                "change": "add"
                            }]
                        }
                    }
                },{
                    "id": "Event_1",
                    "title": "Event 1",
                    "subtitle": "Event information",
                    "type": "statcheck", //or random
                    "stat": "stat1",
                    "difficulty": 2,
                    "requirements": [
                        {
                            "parameter": "something",
                            "value": 0,
                            "comparison": "greater" //default greater
                        }
                    ],
                    "icon": "default",
                    "results": {
                        "success": { //success and fail, rare success, rare fail, or random
                            "text": "abc",
                            "outcomes": [
                                {
                                    "parameter": "something",
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
    }
}