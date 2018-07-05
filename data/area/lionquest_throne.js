var area = {
        "title": "lionquest_throne",
        "header": "The Throne of Makarna",
        "nomap": "You are far from home and you don't know your way back.",
        "subheader": 'The golden throne and marble columns of this opulent chamber do not seem important right now. Instead, a question from a furious and wilful hyena woman is eating at your mind...',
        "events": [
            {
                "id": "freedom",
                "title": 'You are no mere toy',
                "subtitle": 'The fire of independence still flickers, however weak',
                "type": "random",
                "requirements": [
                ],
                "icon": "domicon",
                "results": {
                    "grizzsex": {
                        "text": 'Some spark of independance flickers within you. A faint memory of your previous life, exploring wherever you wished and doing as you please, not being trapped in a palace as a toy. The hyena smirks a little as she sees the beginnings of defiance in you. "Maybe there\'s hope for this country after all, if even his most brainwashed slaves are not completely lost", she says. After she and the other hyenas are guided away by guards, the original guard returns and leads you back to the harem. He looks disappointed, and annoyed. You ask him what is wrong, and he is surprised to see a harem slave speaking for themselves. "Leonar is...a difficult king. His father was just and kind. I hope that one day my king will be as great as he was", he says. He then bows, and leaves you be.',
                        "area": "lionquest_harem",
                        "outcomes": [
                            {
                                "parameter": "time",
                                "quantity": 4,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "slavery",
                "title": 'You belong to Master',
                "subtitle": 'There is no free will left inside you',
                "type": "random",
                "requirements": [
                ],
                "icon": "subicon",
                "results": {
                    "grizzsex": {
                        "text": 'You have no need for willpower! You belong to your king. It doesn\'t matter how he acts or what you get in return. You are just filled with joy and arousal when you make him happy. You exist solely to serve him. Ignoring the hyena, you nuzzle the edge of the throne and wait for your king to return. She snorts with disgust at your submissiveness, and leaves. After she and the other hyenas are guided away by guards, the original guard returns and leads you back to the harem. He looks disappointed by something.',
                        "area": "lionquest_harem",
                        "outcomes": [
                            {
                                "parameter": "time",
                                "quantity": 0,
                                "change": "set"
                            }
                        ]
                    }
                }
            }
        ],
        "npcs": [
            
        ]
    }