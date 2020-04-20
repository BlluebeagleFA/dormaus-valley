var area = {
        "title": "titancottage",
        "header": "Titan's Cottage",
        "position": [0.55,0.02],
        "mapId": "worldmap.jpg",
        "subheader": "A narrow babbling brook crosses through this small clearing, running past a small cottage and back into the woods. Tall trees surround the clearing in a blanket of green. The cottage itself is a rickety but homely dwelling, built up against the side of a massive tree. The roof is thatched with straw, and a creaky wooden waterwheel attached to one wall turns along with the flowing water. A stone path leads up to the cottage door, and vibrant flowers of many colours blossom in the gardens around the building.",
        "events": [
            {
                "id": "feedpie",
                "title": "Bring Titan a Pie",
                "subtitle": "You have a pumpkin pie, and pie is often more enjoyable with friends. Titan probably doesn't get to experience food outside his forest often.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "pie_1",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "pie_1",
                "results": {
                    "pumpkin_1": {
                        "text": "You knock on the door of Titan's little cottage, and he cheerfully calls out for you to enter. When you walk in, you see him grinding up some herbs in a mortar and pestle. \"Hi there!\", he says. \"I'm just working on some new medicines. Oh my, what's that amazing smell?\"</p>You grin, and reveal the freshly-baked pie that you have brought. He almost starts salivating on the spot. \"That looks amazing! Oh my goodness, let me get a knife, we can split it!\", he says. You place the pie on the table, and he fetches a large serving knife from his kitchenette. He also grabs one of the paper bags on his shelf and brings them over.</p>\"I'm sure it won't be as nice as what you brought, but I've been working on some snacks of my own from what I've been foraging. I hope you like them!\", he says.</p>As he tucks in eagerly to the pumpkin pie, you take a look in the bag. They appear to be very small round biscuits, with a pleasing sort of savoury scent to them. You take one out and give it a taste. It's pretty good!</p>The strange, meaty little dried snacks are oddly addictive. You find yourself picking at them more and more, tossing them into your mouth and starting to neglect your share of the pie. Your skin feels tingly and strange, and you shake your head as a wave of dizziness washes over you.</p>As you reach for more of the snacks, you notice your sleeve is draping over your wrist. The table in front of you seems higher than before, too, and your legs are dangling down from your chair without touching the ground. When you shake your sleeves to free your hands, you see that your thumbs have started to shrink down against your wrists, and your palms are swelling and bulging up into pads. Small black claws grow from the tips of your fingers, as fur starts to sprout down your arms and across your belly. It's brown at your hands, russet orange all up your arms, and a soft peach colour on your belly.</p>Oddly, these changes don't seem all that interesting compared to the tasty food which is now moving out of your reach. You struggle and squirm in your clothes, freeing yourself from the oversized fabric, and hop up onto the table on all fours. Your spine stretches out behind you, growing out and developing a thick brush of fur. It sways happily behind you, and you chomp down eagerly on the remaining scattered snacks.</p>Titan jumps and looks at you, surprised, as you leap onto the table. He quickly stands up and looks at the paper bag he got the treats from, and makes an embarrassed yelp. \"Oh no! That's the wrong, bag, this is the mix I made for the foxes in the forest! I wanted to help them have healthy glossy fur...\", he mumbles.</p>He looks at you nervously, as your face pushes forward into a pointed muzzle, and your ears stretch up into large triangles above your head. Slowly and carefully, he moves his soft hand to your head, and begins to stroke you. His pudgy fingers slide along your back, and he rubs between your ears. You wave your tail happily, and look up at him. The cute boar gave you food! That makes him nice. You jump forward onto his lap, and he smiles nervously.</p>As he continues to pet you, you curl up on his lap. \"This should only last a week or so, I think...I'll take care of you until then, I promise\", he says. You yawn, and give him a \"more treats please\" look. He pops one of the snacks into your mouth. \"Ok, a little bit longer than a week. I gotta stop giving you these snacks…\"</p>After you fall asleep, he lifts you up and carefully places you on a cushion next to his workstation. He then hesitantly takes a blue ribbon, and ties it around your neck. His cheeks flush with a blush and a little smile as he leaves you to sleep.",
                        "trapped_desc": "You are Titan's pet fox. He is a very loving master, who gives you regular pets and rubs, though he is a bit too generous with the fox snacks.",
                        "trapped": "You are Titan's pet fox. He is a very loving master, who gives you regular pets and rubs, though he is a bit too generous with the fox snacks.",
                        "outcomes": [
                            {
                                "parameter": "pie_1",
                                "quantity": 1,
                                "change": "sub"
                            },
                            {
                                "parameter": "trapped",
                                "quantity": 12,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "stayasfox",
                "title": "Life of a pet",
                "subtitle": "Being a pet is the best. Free food, regular scritches, and a nice warm place to sleep. It's even better when you have an overly affectionate master who can be guilted very easily into giving you extra food.",
                "trapped": true,
                "type": "random",
                "requirements": [
                    {
                        "parameter": "trapped",
                        "value": 12,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "inanimatefetish",
                "results": {
                    "pumpkin_1": {
                        "text": "You wake up one morning and yawn, before looking around for your master. The cottage is oddly empty, but he has left you some food in a bowl under the table. It's not quite as good as your favourite fox snacks, but it's still very filling.</p>You chew down on your breakfast happily, but master still hasn't come back by the time you're finished. You hop up onto the countertop, and push open the window before walking out into the garden. You can smell him somewhere nearby, so you weave your way through the herbs and flowers, down a small path behind the house.</p>The fur on your back starts to stand on end as you smell something very unpleasant. Is master in danger? You bound forward quickly, towards the edge of the forest, when you see him. He is kneeling down, in front of a titanic, monstrous black beast.</p>The creature's body is so huge that it weaves through the deep woods like a snake, and you realise that what you first thought were deep shadows beyond the trees were actually part of its massive form. A thick, bulging neck weaves out towards the cottage, ending with a massive, malformed skull, dripping with black ichor.</p>The Glatisant. Your whole body freezes up in terror. But...it doesn't attack. Its muzzle presses up against Titan, and you see him rubbing something against it. He dips a white cloth into a bowl next to him, and then wipes one of the jagged wounds on the glatisant's cheek. He's...healing it?</p>Titan notices you, and gently motions you closer. You walk forward, your every instinct telling you to flee. The Glatisant ignores you, even as its wheezing, hissing breath fills the air with the sound of bellows.</p>\"It's ok\", Titan whispers. \"I am a healer, and I think it knows that. It's just an animal too, you know. Even big and scary animals need help sometimes\", he says. The glatisant's one good eye swivels towards you. The other one is completely covered by twisted, strange metal plating. A line of glowing light curls along the edges of the metal each time it breathes. As Titan finishes wiping up the wound, the massive beast slowly stands up, and then retreats back into the woods, disappearing like fog.</p>You walk up close to Titan, and see that he's trembling. He lets out a relieved sigh, and pets you with a shaking hand. \"That poor creature. I wonder what happened to it...\", he mumbles. He then picks you up and carries you back into the cottage.",
                        "outcomes": []
                    }
                }
            },{
                "id": "resist_fox",
                "trapped": true,
                "title": "Turning Back",
                "subtitle": "Finally, the effects of Titan's fox medicine is starting to wear off (despite your best efforts to get him to give you more). The boar looks extremely apologetic as you start to feel the change ending.",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "trapped",
                        "value": 12,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "default",
                "results": {
                    "rareSuccess": {
                        "text": "You stretch yourself out, feeling your small furry body starting to grow. Your forepaws flex, fingers becoming longer, paws becoming hands. The cottage around you seems to shrink as you get bigger and bigger, and a wave of vertigo washes over you.</p>You feel your mind recovering from the constant deluge of playful feral fox thoughts, and you rub your forehead dizzily. Looking down at yourself, you still appear to be a slender, cute orange fox, but at least you're an anthro one now. Titan, his eyes tightly closed, pushes your neatly-folded clothes towards you. \"I'm really sorry!\", he yelps.</p>You quickly get dressed and reassure him that this sort of thing happens to you all the time, and that there are no hard feelings. He still looks mortified though, so you promise him that you'll bring him more food some time to show you're still friends.</p>He pets the top of your head, and you close your eyes and wave your tail happily. Then he quickly pulls his hand away. \"Oh, sorry! I guess I got into a bit of a habit...\", he mumbles. You wink at him, and he blushes a little.</p>Being his pet wasn't that bad actually. Maybe you'll do it again some time.",
                        "freeTrap": true,
                        "outcomes": []
                    }
                }
            }
        ],
        "npcs": [
            {
                "id": "titan",
                "name": "Titan",
                "description": "Titan is a short, shy young boar. His fur is chocolate brown everywhere it's visible, except for a patch of white above his short muzzle. His tusks are stubby and rounded, and his ears flop down at the side of his head. He's wearing soft leather boots, and a slightly-too-large leather overcoat, the pockets of which are overflowing with bottles and herbs.",
                "icon": "titan_b",
                "dialogue": [
                    {
                        "input": "How did I get here?",
                        "output": "\"I found you in the forest. I'm really supposed to keep to myself, but you were passed out and it looked like you were in pain. I brought you here on my herb cart to fix you up a little. I am sorry if your clothes smell like wild onions now, I found a lot of those before I found you and some of them got a bit squished\", he says."
                    },
                    {
                        "input": 'How did you heal me?',
                        "output": "\"I'm sort of what you might call an alchemist, I guess? My grandma taught me how to make a lot of helpful tonics and extracts out of the plants in this forest. It's been passed down from my ancestors, all the way back to my like tenth great grandma. It's my first time trying it on someone who isn't just an animal though. I'm glad you didn't wake up only able to bark or anything like that\", he says."
                    },
                    {
                        "input": 'Do you live here on your own?',
                        "output": "Titan nods. \"It used to be me and my grandma, but...well, I'm not totally on my own. Lots of the animals I healed like to come check on me now and then. I just keep to myself mostly. You're the first person I've spoken to properly in, um. Well, in a long time\", he says."
                    },
                    {
                        "input": 'What do you do here?',
                        "output": "\"I mostly keep to myself, and forage in the woods. There's all sorts of helpful herbs and things in there, and hardly anyone ever comes here so there are plenty of things to find. I've been working on some special medicines too, I like to keep myself busy.\""
                    },
                    {
                        "input": 'Aren\'t you worried about the bandits?',
                        "output": "Titan shakes his head. \"I know there are lots of bad and dangerous people around, but they can't find me here. This cottage is special. My great great grandma was a really powerful witch, and no one can find this place unless I invite them in.\""
                    },
                    {
                        "input": 'Can I see your cock?',
                        "output": "Titan's cheeks turn bright pink, and he raises his gloves to cover his snout. \"Oh! Gosh, I mean, um, I'm very flattered. But I, I think I might only want to do that with someone really close to me...\", he mumbles.</p>He slowly lowers his hands and looks away shyly. \"I mean, even then...I'm not sure if that's something I really want, you know? I think I might just be the kind of person who'd rather cuddle...\""
                    },
                    {
                        "input": 'Can I see your paws?',
                        "output": "\"No!\", he yelps suddenly. He shakes and mumbles, his eyes suddenly wide and scared. \"I mean, why would you want that? I can't, I mean, I don't...I'm sorry...\", he mumbles. Something about that question seemed to really frighten the chubby little boar."
                    }
                ]
            }
        ]
    }