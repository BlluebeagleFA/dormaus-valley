var area = {
        "title": "glatisant",
        "header": "The Glatisant",
        "nomap": "No one can escape the Glatisant.",
        "subheader": "All around you, the forest has become a tangled web of glistening black coils. The enormous, terrible glatisant looms above you. Its glowing eye focuses on you, its body begins to tighten and form an inescapable trap. It is larger than even the most ancient trees, and deadlier than any natural beast.</p>Victory here is <i>impossible</i>. You must flee, and if you have both luck and heroic ability, perhaps you will escape unharmed.",
        "events": [
            {
                "id": "usemight",
                "title": "Escape Using Might",
                "subtitle": "You would need the might of a legendary hero to escape this alive.",
                "type": "statcheck", //or random
                "stat": "might",
                "difficulty": 100,
                "requirements": [
                    {
                        "parameter": "pain",
                        "value": 3,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "glatisant",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "In the corner of your vision you see something. A slight gap between the creature's coils, almost invisible in the gathering dark. You lunge towards it, crashing through the undergrowth as you desperately make for your one chance at escape.</p>Your body plunges into the narrow gap. The icy cold coils of the creature tighten around you. The massive weight pushes down, the flesh of the beast presses tighter, tighter. Your muscles heave as you push up on one coiled flank. Your bones strain and ache, you pant for breath - but you do it. You push it up above you, one small part of the creature heavier than a rhinocerous, but not too heavy for you.</p>You slip past it, and tumble into the bushes beyond. Far above you, the Glatisant turns and twists, adjusting itself.</p>You charge through the forest, knocking aside bushes, trees, rocks. The shadow of the Glatisant looms over you, keeping pace no matter how fast you move. The edge of the forest is getting closer and closer. If you can just keep this up for a few minutes more, you will make it.</p>Then, in one terrible, earth-shattering crash, the Glatisant's head smashes down on the forest in front of you. Trees crumble like dry twigs, and you are almost knocked off your feet. A mouth like a black abyss opens up before you, while the coiling body of the creature forms a prison in every direction.</p>Something stands out to you. One of the countless rusted, dented weapons bristling on the Glatisant's carapace. Instinctively, you reach out, and your hand clenches around a hilt. You wrench it out, dragging the object in a ragged line along the creature's body.</p>Impossibly, shockingly, it flinches. Blood gushes from the wound you've made, and in that one moment of weakness, you lunge past the monster's head, slide along its cheek, and launch yourself past the last few trees, beyond the forest.</p>The moment that you leave the forest, the strange darkness seems to fade. The Glatisant is gone, nothing but smoke and fog.</p>As you finally cross beyond the treeline, you fall to your knees, gasping for air. You did it. You survived against an unconquerable force. Every muscle in your body is aching from overexertion.</p>You look down at the weapon in your hand. It's a rapier, clearly ancient. The blade is dull and corroded, clearly not fit to cut anything, let alone a titan's scales like it just did. The hilt is intricate and golden, and a tattered red ribbon flutters from it for a moment, before crumbling into dust.",
                        "area": "northwoods",
                        "outcomes": [
                            {
                                "parameter": "goodsword",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": "Nothing you try seems to work. When you try to dodge or scramble past one part of the Glatisant's body, another twisting coil is simply revealed beyond it. Pushing against it, or striking its flesh, is like trying to push aside a mountain.</p>No spell answers your call, no words of help come from your gasping lips. To fight this creature is to defy the very nature of the world itself. The Glatisant is surely death incarnate, a beast from the deepest, most ancestral nightmares of living beings.</p>Bruised, battered and trembling with fear, you see the creature's mouth open wide. Ready to devour you once and for all.</p>Your vision blurs as you feel its body coil around you, crushing the life out of you. Surely this is the end…</p>Except, for just a moment, you hear a fearful voice cry out. \"No, please! Don't hurt them!\"</p>Is it just in your mind? You finally collapse into unconsciousness.</p>When you awaken, your body is badly wounded, yet the Glatisant is nowhere to be seen.",
                        "outcomes": [
                            {
                                "parameter": "pain",
                                "quantity": 4,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "usemagic",
                "title": "Escape Using Magic",
                "subtitle": "You would need the power of an archwizard to escape this alive.",
                "type": "statcheck", //or random
                "stat": "magic",
                "difficulty": 100,
                "requirements": [
                    {
                        "parameter": "pain",
                        "value": 3,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "glatisant",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You need to escape, quickly. You draw the magic of the forest to yourself, a thousand invisible glimmering sensations of the beasts and plants of the woods. The air is so thick with magic that you can almost choke on it, yet it resists and fights you as you try to cast. The eye of the Glatisant above you glows deeper. Is it controlling the magic too?</p>The gigantic head above you opens, revealing a terrifying, portcullis-sized mouth, which lunges down towards you. At the last moment, you wrench the forest's magic towards yourself, and your body becomes light and airy, transforming into fog. Your tendrils flow aside, and you reform a few feet away from the crater where the Glatisant struck the earth.</p>Gritting your teeth, you desperately place up layer after layer of magical shields, buying yourself what few precious seconds you can. Glimmering circles hover in the air where you place your palms, and you start to drag the magic in the air towards you once more. One teleportation spell, short range, that's all you need.</p>Once again, the earth rumbles as the Glatisant raises its head, and lunges forward. Your shields hold out for barely a second, before shattering and disappearing. It gives you only enough time to barely twist your body aside, and see the gigantic carapace of the creature smash past you into the trees.</p>You reach out desperately to catch your balance, and your hand closes around something. One of the weapons that cover the Glatisant's body, a relic of some ancient forgotten hero. You grip it tighter, and feel a sudden, desperate rush of power. Quickly, you look down, and see a magical staff in your hands. The golden circle at the end of it hums with power.</p>Some mage, some lost hero, filled this staff with magic. How many decades, centuries, has it waited here? Waited for that last desperate spell they were building up for, sustaining itself from the blood of the creature it was embedded in. You close your eyes, and draw it into yourself - and the world disappears.</p>You open your eyes, your whole body aching and sore. The light of the sun shines above you, in a blue sky. As you sit up, you see the forest, a mere dozen feet away. You did it, you teleported out! You survived!</p>You look down at the staff in your hands. The last dregs of the power within it are gone, leaving only a lifeless, but beautiful, golden stick. You squeeze it tightly, and give thanks to the long-gone hero that saved your life.",
                        "area": "northwoods",
                        "outcomes": [
                            {
                                "parameter": "goodstaff",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": "Nothing you try seems to work. When you try to dodge or scramble past one part of the Glatisant's body, another twisting coil is simply revealed beyond it. Pushing against it, or striking its flesh, is like trying to push aside a mountain.</p>No spell answers your call, no words of help come from your gasping lips. To fight this creature is to defy the very nature of the world itself. The Glatisant is surely death incarnate, a beast from the deepest, most ancestral nightmares of living beings.</p>Bruised, battered and trembling with fear, you see the creature's mouth open wide. Ready to devour you once and for all.</p>Your vision blurs as you feel its body coil around you, crushing the life out of you. Surely this is the end…</p>Except, for just a moment, you hear a fearful voice cry out. \"No, please! Don't hurt them!\"</p>Is it just in your mind? You finally collapse into unconsciousness.</p>When you awaken, your body is badly wounded, yet the Glatisant is nowhere to be seen.",
                        "outcomes": [
                            {
                                "parameter": "pain",
                                "quantity": 4,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "usestealth",
                "title": "Escape Using Stealth",
                "subtitle": "You would need the skill of a master thief to escape this alive.",
                "type": "statcheck", //or random
                "stat": "stealth",
                "difficulty": 100,
                "requirements": [
                    {
                        "parameter": "pain",
                        "value": 3,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "glatisant",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You need to escape. Escaping is what you do best. When the Glatisant looms above you, and then that gigantic monstrous head begins to descend, you do not move. You crouch your knees, narrow your eyes. This will require perfect timing. Its terrible mouth opens, a hole into oblivion, and moments before it reaches you, you leap.</p>It misses you by the width of a hair, as your foot rests down on top of its scaly, obsidian nose, and you run up along the top of its head. Its one gigantic eye tries to focus on you, and then its head rises up in the air, and it shakes and twists to dislodge you. The slippery, unnatural body offers little purchase for you to hold onto, and you fall.</p>That is no problem for you, though. You twist acrobatically in the air, and land on one of its coils. You flip and slide, gliding across its flank and down once more, bouncing and leaping from coil to twisting coil, as it spirals and twirls in the air to catch you.</p>You prepare to leap to freedom, when you realise quite how high the Glatisant has taken you. You are high, high in the air above the valley. You can see the forest as a tiny brush beneath you, and even see all the way to the glittering southern sea. You could never survive that fall.</p>So you don't fall. You launch yourself to the side, and begin sliding down the Glatisant's own body. Keeping on top of it without falling as it twists and turns takes heroic focus and skill, but you are ready for it. You plunge lower, lower, back down towards the ground - when suddenly you see the Glatisant's head in front of you.</p>It has twisted all the way around, and opened its mouth ready to catch you. You need to dodge, right now, but this slippery body offers no foothold, nothing to push against. Your desperate fingers touch against something, some small metal object embedded in the monster's flesh. You cling with your fingertips, and wrench yourself to the side.</p>You miss the Glatisant's head by an inch, and fall into the treetops below. You crash through branches and leaves, and then roll as you hit the ground. Only to see that you have just rolled right beyond the threshold of the forest. You pant for breath, the sun shining down onto you, and realise that the Glatisant has gone. Disappeared like smoke.</p>You look in your hand, at the small object that saved your life. It's a little ivory handle. Curiously, you touch the sides, and unfold a series of tiny glimmering objects. Narrow metal tools, with twisty, intricate tips. Thief's tools, made from some shining bronzelike metal.",
                        "area": "northwoods",
                        "outcomes": [
                            {
                                "parameter": "goodpicks",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": "Nothing you try seems to work. When you try to dodge or scramble past one part of the Glatisant's body, another twisting coil is simply revealed beyond it. Pushing against it, or striking its flesh, is like trying to push aside a mountain.</p>No spell answers your call, no words of help come from your gasping lips. To fight this creature is to defy the very nature of the world itself. The Glatisant is surely death incarnate, a beast from the deepest, most ancestral nightmares of living beings.</p>Bruised, battered and trembling with fear, you see the creature's mouth open wide. Ready to devour you once and for all.</p>Your vision blurs as you feel its body coil around you, crushing the life out of you. Surely this is the end…</p>Except, for just a moment, you hear a fearful voice cry out. \"No, please! Don't hurt them!\"</p>Is it just in your mind? You finally collapse into unconsciousness.</p>When you awaken, your body is badly wounded, yet the Glatisant is nowhere to be seen.",
                        "outcomes": [
                            {
                                "parameter": "pain",
                                "quantity": 4,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "usecharm",
                "title": "Escape Using Charm",
                "subtitle": "You would need the charm of a beautiful dream to escape this alive.",
                "type": "statcheck", //or random
                "stat": "charm",
                "difficulty": 100,
                "requirements": [
                    {
                        "parameter": "pain",
                        "value": 3,
                        "comparison": "less" //default greater
                    }
                ],
                "icon": "glatisant",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You see the coils of the Glatisant surrounding you, and its titanic, monstrous head blotting out the sun above. You cannot fight this, you cannot escape it or blast it away. But perhaps, just maybe, you could do something no one else has tried.</p>You shake away your fear, your pounding, drumming, heart, and begin to sing. Your voice starts out reedy, a little broken, but you soon feel yourself relax, and your voice deepens with rich, beautiful music. The Glatisant's head moves down, closer, but not to crush you, or devour you. It simply watches.</p>You don't know this song. It's not something you have ever practised, or trained. It comes from no sheets or book. You just let yourself sing from some deep, ancient well of emotion within you. You sing of love, of the beauty of creation. Of family, of joy, of the world as a beautiful myth. You sing also of betrayal, of suffering, of the darker side of the world, the fear of the prey, the pain of the vanquished. The dual beauty and cruelty of this strange world we live in.</p>The forest around you is perfectly silent. Not even the wind would dare to rustle the trees and interrupt this song. Your eyes closed, your whole heart yearning, you do not even think about the creature before you. Only the performance matters.</p>When you stop, your cheeks are wet with tears. You open your eyes, and the Glatisant is gone. Only a deep imprint on the grass shows where it stood, and where it slithered away to. In front of you, a gigantic oak is split in two, cracked from where the Glatisant slithered past it. Resting against the side of the broken tree is a harp. Was it knocked off, somehow, from the side of the Glatisant's monstrous body?</p>You pick it up, and for a moment, the strings hum with the echoes of the haunting tune you sang. Then it goes still.",
                        "area": "northwoods",
                        "outcomes": [
                            {
                                "parameter": "goodharp",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": "Nothing you try seems to work. When you try to dodge or scramble past one part of the Glatisant's body, another twisting coil is simply revealed beyond it. Pushing against it, or striking its flesh, is like trying to push aside a mountain.</p>No spell answers your call, no words of help come from your gasping lips. To fight this creature is to defy the very nature of the world itself. The Glatisant is surely death incarnate, a beast from the deepest, most ancestral nightmares of living beings.</p>Bruised, battered and trembling with fear, you see the creature's mouth open wide. Ready to devour you once and for all.</p>Your vision blurs as you feel its body coil around you, crushing the life out of you. Surely this is the end…</p>Except, for just a moment, you hear a fearful voice cry out. \"No, please! Don't hurt them!\"</p>Is it just in your mind? You finally collapse into unconsciousness.</p>When you awaken, your body is badly wounded, yet the Glatisant is nowhere to be seen.",
                        "outcomes": [
                            {
                                "parameter": "pain",
                                "quantity": 4,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "overwhelmed",
                "title": "Overwhelmed By Wounds",
                "subtitle": "You stumble on a root and lean against a tree to catch your breath. A sharp pain in your side forces you to clutch your stomach tightly. You have taken far too many injuries to be hiking through these dangerous woods. If you could just catch your breath for a moment...",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "pain",
                        "value": 2,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "pain",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You rest your back against the tree and slowly slide down to a sitting position. Your side aches with every breath, and you can see glowing spots in your vision. The deep woods are surprisingly noisy, when you rest and listen to them. The buzz of insects, rustling of leaves, the cracking of twigs and distant hoots and squawks. After a few minutes, you think you might have recovered enough to continue on. However, when you try to pull yourself back up, your chest and side suddenly stab at you with a blinding flash of agony. You fall to the ground, gasping, as your vision blurs.</p>Eventually, you find yourself slowing waking. Someone is humming a sad, lilting tune. You are lying on something soft and comfortable, with a warm blanket draped over you. You can hear the crackling of a log fire nearby, and you sit up and look around curiously. You are lying in a small bed, with a hand-carved wooden frame. This appears to be some sort of cottage, with wooden rafters and white plaster walls. Dried flowers, woven into wreaths and decorative rings, are hanging from most free corners. Over to the other side of the building, you can see the person humming. He turns and smiles as he looks at you. \"You're awake! I was getting quite worried\", he says. The man is a boar, wearing an oversized coat stuffed with unidentifiable bottles and herbs. He walks over to you, and gently touches your forehead with one of his surprisingly soft hands. \"It looks like that lotus ointment worked a charm! I hope you didn't have any strange dreams, though\", he says. His voice is gentle and hesitant, like he doesn't get the opportunity to talk much.</p>He startles suddenly, and hops from one foot to the other. \"Oh! Sorry! I didn't introduce myself! Um, I'm Titan. Yeah, I know, it's a weird name for a short guy...but my grandma wanted me to grow up big, I guess. I'm not really used to having patients who can talk. I mostly keep to myself and just heal things like foxes caught in traps or deer with broken legs, you know. Oh gosh, am I blathering? Please tell me if I talk too much\", he says.</p>Titan himself is, like he said, a little short for a boar, but his round and pudgy belly is not at all undersized. He looks around nervously and rubs his hands as he waits for you to speak.",
                        "area": "titancottage",
                        "outcomes": [
                            {
                                "parameter": "titan_connection",
                                "quantity": 1,
                                "change": "set"
                            },{
                                "parameter": "pain",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "impossible",
                "title": "Fight the Glatisant",
                "subtitle": 'This is impossible.',
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "impossible",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "impossible",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "The Glatisant is not supposed to be defeated. Forged from the power of a Great Lord, driven by the hate of an ancient, terrible evil. Enhanced further still by the cruelest and most powerful wizard to ever live.</p>There is no being from this world who can defeat the Glatisant, as it is now.</p>But that doesn't matter to something like you, does it?</p>The Glatisant strikes, in vain. Its enormous head, capable of turning citadels to rubble, passes through you like you were not even there. Your body moving, reshaping, becoming fog and then reappearing in a better position.</p>With a flick of a wrist, the many painful weapons covering its hide are dragged out. Lances, swords, axes, all of them stand as if wielded by a phantom army, and slice and strike at the beast.</p>It tries to coil together, to wrap around you and trap you. You hop effortlessly from coil to limb to branch, as if you were dancing between raindrops. Atop the tallest tree, the Glatisant faces you. It opens its mouth to swallow you whole, and you simply wrap your hands around its teeth, and stop it dead in its tracks.</p>Enough toying around. It is time to finish this. From beneath the earth, the wolfsteel emerges. Gigantic, whirring, cutting gears. The ground itself opens like a chasm to allow them to emerge, to slice through an unbreakable hide, to rip and tear and destroy. The trees unfold, opening like doors to reveal gleaming bronzelike chains and whips, which coil and bind and tear at the unstoppable beast.</p>The same metal from which my own chains are forged, the workpieces of the World Machine itself. Against such power, my lesser, weaker shadow stands no chance. The light in the Glatisant's eye fades and goes out, as its body starts to disappear. The black glistening body becoming smoke, curling up into the sky.</p>I cannot give you a physical reward for destroying it. If you came this far, I am sure you could reward yourself any way you please. I can give you something else, that will perhaps serve you better. I can give you the history.</p></p>When the boar king contacted me, his deepest wish was to unify the fractured tribes of this valley. A wish for unification, to be made whole - I had waited a long time for someone to make a wish like that.</p>Together, we were powerful, and glorious. With my gifts he could roll over the weaker tribes, the petty kings and minor dukes. I thought perhaps that once he was done, I could remember what it would be like to be whole again. Unfortunately, it was not to be. For the sake of his love, and of his child, he cast me out from his body. Such love and devotion are not something I can understand, but it is a power seemingly greater than my own. None of the other great lords rejected me in such a way. I should have expected  a betrayal, in all honesty. It seems my fate to be betrayed and cast down.</p>When he threw me out, atop the castle of Dormaus Kingdom, the part of us that was one became a new creature. A mighty creature, befitting the level of power I had given him, but one bereft of kindness or understanding. In its agonised throes, it crushed both him and his kingdom, and corrupted the city around it with tiny echoes of pain and misery.</p>The new creature, the Glatisant, lay dormant for some time. I no longer had any control over it, but I could feel it, distantly. It slithered in the underground, its body breaking apart and reforming, becoming fog or shadows and only rarely coalescing into the beast that you just fought. Every few decades, it would manage to take on physical form. Some great hero would fight it, usually die, and eventually it would retreat and disintegrate once more. It was not until hundreds of years later that it would take the shape you know now.</p>In their search for power, in the mountain citadel atop Horn, the greatest of unicorn mages discovered the beast. Their leader, so desperate for my blessing, thought perhaps that he could harness my shadow as a replacement. I had no interest in making him one of my lords - his wishes were cruel, and strange.</p>With their magical traps and strange technology, they corralled the beast in the mountains, and held it fast for a while within a cage of electricity and mana. They tried to enter into its mind, to enhance it with machines, to put a leash on its simple, confused brain.</p>They were unsuccessful. It broke free of the bindings, driven to even worse madness by the pain of their experiments. It fled to the forest, lashing out randomly whenever it could become lucid enough to understand there were other creatures nearby.</p>Such was the sad life of the mighty Glatisant. Its tale is less important than yours, now that you have come into your true power. If you can do impossible things, then perhaps...</p>It would probably be too much to hope...</p>That you could save me?",
                        "area": "northwoods",
                        "outcomes": [
                            
                        ]
                    }
                }
            }
        ],
        "npcs": [
            
        ]
    }