var area = {
        "title": "wolf_choice",
        "header": "Decision: The Howl",
        "nomap": "You should make your decision before leaving.",
        "subheader": 'Bonacieux wants to make you his mate. This is not a request he would make lightly.',
        "events": [
            {
                "id": "leave",
                "title": "Decline",
                "subtitle": "To Bonacieux, this clearly means something meaningful and important. You are not yet ready to make that commitment.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You shake your head, and Bonacieux nods understandingly. He adjusts his posture, and you lose sight of his sheath. You sit with him anyway, leaned against his warm and powerful body, as you listen to his soulful howling all through the night.</p>You don't realise when you fall asleep, but you awaken in the morning back in the village, in a freshly made bed. You look around and see a note on the cabinet. \"Thank you for spending the Feast with me. It seemed dangerous to let you sleep up there, so I carried you to the inn. Safe travels, my friend. Bonacieux\"",
                        "area": "hotel_rooms",
                        "outcomes": []
                    }
                }
            },{
                "id": "agree_m",
                "title": "Agree",
                "subtitle": "To Bonacieux, this clearly means something meaningful and important. You are willing to accept that, along with the implication of his arousal.",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "gender",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "priesticon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You nod, and he reaches down, his muzzle opening. His teeth close over your clothes, as he begins to tug them off you. Pulling them over your head, and pressing you down with one enormous forepaw as he bites and pulls your pants off. You are left naked beneath him, but with his huge body radiating heat, you do not feel cold. His breath is getting more heavy and hot as he looks down at you. \"I may lose control of myself. This form connects me deeper to the wolf spirit, and it is telling me that I must mate\", he says with a ragged, growling voice. You reach up and take hold of his enormous muzzle, and kiss him. Your mouth presses against his black lips as his tongue reaches out and slides over your naked body. He nods to you, and you see him stop resisting his desires. His shaking, slow movements become more natural, and powerful. Steamy hot breath washes over you, and his wet tongue strokes over your chest, then down between your legs. He tastes you all over, and your skin tingles and aches from his touch. Fur begins to grow from your body, soft and white and thick. It spreads down over your chest and across your limbs, covering your arms and moving down to your legs. You feel your muscles burning and aching, and your bones creak as you begin to grow. You roll over onto your belly, and push yourself up off the ground. You seem to keep pushing, and standing, as your limbs grow longer, and stronger. Your feet bulging and growing firm and hard on the soles, as your hands do the same. Fingers bending and shrinking, as with a twinge of sharp pain, new powerful claws grow from them. Bones shifting and adjusting, as your legs bend and reshape, and your chest barrels out and widens.</p>Your nose tingles with new scents and new feelings. The forest around you, pine sap and needles, creatures in the undergrowth. The cold frosty air of the mountains, crisp and clean. Yet vastly more urgent, is the musky, strong and powerful smell of the wolf before you. You can smell his desire for you, his loneliness, and his need. It drives a craving within you too, and you try to speak. However, your face cracks and shifts, pushing out and growing longer as your lupine muzzle stretches closer to his. He licks you, adjusting and fixing your white fur, lapping against your cheeks and along your ears as they grow pointed and tall and strong. Your tail stretches out behind you, flexing and twitching, and you feel it wagging faster and more intensely from the touch of the wolf before you.</p>You can see him now in scent and sight, in a new way. The wolf you know is Bonacieux restrained, holding in his desires and needs, keeping himself contained. This massive beast is the true Bonacieux. An unstoppable predator, a pack leader, a hunter and a protector. You turn from him, still feeling and smelling him all around you, and raise your tail. You feel him coming closer, his massive paws pressing into the soil, and then his body rising up as he climbs up onto you. His weight and heat pushing down atop you, and his muzzle sliding against yours. He opens his maw and closes his teeth at the back of your neck, pinning and holding you, before his massive thick red wolf cock slides against your tailhole, and then shoves inside. You can feel him entering you, his girth stretching your inner walls, and his heat and power pushing deep inside you. He begins to thrust, his gigantic body pounding and shoving into you over and over, as his breathing grows ragged and intense. Each thrust makes your knees weak with pleasure, each time his cock slides against your insides it feels like he is owning and bonding with you almost orgasmically.</p>Your ears twitch and bend, as you start to hear something. The echoing, crooning sounds of howls from beyond the mountains. Other wolves like you and your lover, howling about their lives and their joys and their connections. It stirs something deep inside you, a wish to be part of it, to be joined. With another thrust, you feel the huge, hard knot of Bonacieux's cock shove into you, knotting you together. Unbearable white-hot pleasure fills your whole body and washes your mind empty of all thoughts but lust. As your lover's cum floods into you, you both raise your heads, and open your muzzles, and howl out with adoration and love and pleasure, to let all wolves know that you and Bonacieux are one.</p>For the rest of the night you lie with him, connected and bonded, letting your wolf instincts guide you. You howl with the wolves, and they congratulate you and wish you good hunting. With Bonacieux's head resting atop yours, you know that you could do anything. In the morning, you awaken next to him, his arms around you. You are both naked, him returned to his mature grey bipedal wolf form, and you now finding yourself in the body of a strong, tall white wolf. He carries you down the mountainside in his arms, insisting that it is an old tradition, and kisses you. \"I look forward to spending much more time together\", he says, his eyes twinkling.",
                        "area": "eastwoods_entrance",
                        "descriptionchange": "This adventurer is a tall and strong white wolf. Their bearing is powerful and dignified, and their sleek fur is perfectly smooth. From the scent around them, any musk-sensitive species would know this is the mate of the wolf Bonacieux",
                        "outcomes": [
                            {
                                "parameter": "festival_time",
                                "quantity": 0,
                                "change": "set"
                            },{
                                "parameter": "howl",
                                "quantity": 1,
                                "change": "set"
                            },{
                                "parameter": "species",
                                "quantity": 17,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "agree_f",
                "title": "Agree",
                "subtitle": "To Bonacieux, this clearly means something meaningful and important. You are willing to accept that, along with the implication of his arousal.",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "gender",
                        "value": 2,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "priesticon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You nod, and he reaches down, his muzzle opening. His teeth close over your clothes, as he begins to tug them off you. Pulling them over your head, and pressing you down with one enormous forepaw as he bites and pulls your pants off. You are left naked beneath him, but with his huge body radiating heat, you do not feel cold. His breath is getting more heavy and hot as he looks down at you. \"I may lose control of myself. This form connects me deeper to the wolf spirit, and it is telling me that I must mate\", he says with a ragged, growling voice. You reach up and take hold of his enormous muzzle, and kiss him. Your mouth presses against his black lips as his tongue reaches out and slides over your naked body. He nods to you, and you see him stop resisting his desires. His shaking, slow movements become more natural, and powerful. Steamy hot breath washes over you, and his wet tongue strokes over your chest, then down between your legs. He tastes you all over, and your skin tingles and aches from his touch. Fur begins to grow from your body, soft and white and thick. It spreads down over your chest and across your limbs, covering your arms and moving down to your legs. You feel your muscles burning and aching, and your bones creak as you begin to grow. You roll over onto your belly, and push yourself up off the ground. You seem to keep pushing, and standing, as your limbs grow longer, and stronger. Your feet bulging and growing firm and hard on the soles, as your hands do the same. Fingers bending and shrinking, as with a twinge of sharp pain, new powerful claws grow from them. Bones shifting and adjusting, as your legs bend and reshape, and your chest barrels out and widens.</p>Your nose tingles with new scents and new feelings. The forest around you, pine sap and needles, creatures in the undergrowth. The cold frosty air of the mountains, crisp and clean. Yet vastly more urgent, is the musky, strong and powerful smell of the wolf before you. You can smell his desire for you, his loneliness, and his need. It drives a craving within you too, and you try to speak. However, your face cracks and shifts, pushing out and growing longer as your lupine muzzle stretches closer to his. He licks you, adjusting and fixing your white fur, lapping against your cheeks and along your ears as they grow pointed and tall and strong. Your tail stretches out behind you, flexing and twitching, and you feel it wagging faster and more intensely from the touch of the wolf before you.</p>You can see him now in scent and sight, in a new way. The wolf you know is Bonacieux restrained, holding in his desires and needs, keeping himself contained. This massive beast is the true Bonacieux. An unstoppable predator, a pack leader, a hunter and a protector. You turn from him, still feeling and smelling him all around you, and raise your tail. You feel him coming closer, his massive paws pressing into the soil, and then his body rising up as he climbs up onto you. His weight and heat pushing down atop you, and his muzzle sliding against yours. He opens his maw and closes his teeth at the back of your neck, pinning and holding you, before his massive thick red wolf cock slides against your pussy, and then shoves inside. You can feel him entering you, his girth stretching your inner walls, and his heat and power pushing deep inside you. He begins to thrust, his gigantic body pounding and shoving into you over and over, as his breathing grows ragged and intense. Each thrust makes your knees weak with pleasure, each time his cock slides against your insides it feels like he is owning and bonding with you almost orgasmically.</p>Your ears twitch and bend, as you start to hear something. The echoing, crooning sounds of howls from beyond the mountains. Other wolves like you and your lover, howling about their lives and their joys and their connections. It stirs something deep inside you, a wish to be part of it, to be joined. With another thrust, you feel the huge, hard knot of Bonacieux's cock shove into you, knotting you together. Unbearable white-hot pleasure fills your whole body and washes your mind empty of all thoughts but lust. As your lover's cum floods into you, you both raise your heads, and open your muzzles, and howl out with adoration and love and pleasure, to let all wolves know that you and Bonacieux are one.</p>For the rest of the night you lie with him, connected and bonded, letting your wolf instincts guide you. You howl with the wolves, and they congratulate you and wish you many healthy and strong cubs. That part makes you blush, but with Bonacieux's head resting atop yours, part of you finds the idea very comforting. In the morning, you awaken next to him, his arms around you. You are both naked, him returned to his mature  grey bipedal wolf form, and you now finding yourself in the body of a beautiful, strong white female wolf. He carries you down the mountainside in his arms, insisting that it is an old tradition, and kisses you. \"I look forward to spending much more time together\", he says, his eyes twinkling.",
                        "descriptionchange": "This adventurer is a tall and strong white wolf. Their bearing is powerful and dignified, and their sleek fur is perfectly smooth. From the scent around them, any musk-sensitive species would know this is the mate of the wolf Bonacieux",
                        "area": "eastwoods_entrance",
                        "outcomes": [
                            {
                                "parameter": "festival_time",
                                "quantity": 0,
                                "change": "set"
                            },{
                                "parameter": "howl",
                                "quantity": 1,
                                "change": "set"
                            },{
                                "parameter": "species",
                                "quantity": 17,
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