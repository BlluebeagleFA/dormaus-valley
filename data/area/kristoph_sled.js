var area = {
        "title": "kristoph_sled",
        "header": "Reindeer Sled",
        "nomap": "There is nowhere to go. You can only wait on the sled until you reach your destination.",
        "subheader": "You are travelling across the barren, frozen steppes with a herd of reindeer. They pull you along with them in an ornate wooden sled. Your only companion on the journey is Kristoph, a huge bearlike human with a massive white beard.</p>The days pass by simple and repetitive. Travelling on the sled, caring for the reindeer, and sleeping in a small tent with the huge hairy man by your side.",
        "events": [
            {
                "id": "leave_tundra",
                "title": "The Long Ride Home",
                "subtitle": "It will take many weeks of travel, but Kristoph and the reindeer make more pleasant company than you might expect. It should feel like it passes in no time at all.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "Over the next few days, you accompany Kristoph in his journey and lifestyle. He shows you how to dig holes in the ice and fish, how to find shelter in the frozen steppes, and how to care for the reindeer. The reindeer themselves are able to seek out what little grass and greenery is available this far north, and as you travel further and further south, more snow-covered trees and rolling hills start to come into view.</p>The routine is repetitive and simple, but calming. While Kristoph mans the reins, you ride in the sled and help darn clothes or brush the furs. Once you stop, you have meals of milk or fish, sitting with the older man in a ring of reindeer. Their thick smell starts to feel comforting and warm once you get used to it.</p>Then it's time to check on the reindeer, brush them, and make sure their hooves and antlers are healthy. Sometimes Kristoph will have you help him gather plants from under the snow or you will wait at a hole for fish, and then more travelling. By night, he sets up a small tent and you sleep close to him, his huge powerful body pressed against yours and keeping you warm.</p>As you are helping Kristoph brush and milk one of the reindeer one day, you notice mountains rising up to the south, just starting to be visible from your current position. Kristoph stands up, a bucket of milk in his hand, and wipes frost from his forehead. \"Looks like we're getting close now. That's the start of the Horn mountains. They carry on south for a long way down the big valley. Looks like our journey will be ending soon\", he says.</p>You feel a little sad at that. While this life was simple and quiet, you were starting to get used to it. The day after you spot the mountains, Kristoph pulls the sled up next to a snow-covered wooden building. An old lady pulls open a shutter and peeks out. \"Kristoph, dear? Is that you? I haven't seen you in over a year!\", she says. He nods to her, and then picks you up in his massive arms and carries you over to the post, smiling as he does. \"I have some very important post, Granny\", he says with a chuckle, before placing you down.</p>He and the old lady catch up briefly, and then he gives you a brief, tight hug. \"Travel safely. Promise me you will not stop until you return to your safe little village, friend\", he says. You nod, and he mounts back into his sled and turns to leave. The old lady pats your hand and pulls you into the building next to the fire.</p>Later that day, the mail carriage arrives, and you climb aboard the back with the small number of letters and post that need to travel south. It is a long, bumpy ride down south, and for most of it you carefully hide under the canvas sheets to avoid the eyes of guards and officials in the Horn area. The mailman ignores this behaviour, presumably used to people staying clear of gryphon guards.</p>Weeks later, after travelling down mountain paths, forests, and long fields, you finally return to Dormaus Village.",
                        "area": "dormaus_entrance",
                        "outcomes": []
                    }
                }
            },{
                "id": "k_0_m",
                "title": "Try to get closer to Kristoph",
                "subtitle": "The huge hairy old man is gentle, but very strong. In your time with him, sitting behind him on the sled and sleeping close to him at night, you have found yourself starting to feel an attraction towards him. You resolve to try something with him tonight, when you are together in the tent.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "kristoph_friend",
                        "value": 0,
                        "comparison": "equal" //default greater
                    },{
                        "parameter": "gender",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "kristophb",
                "results": {
                    "grizzsex": {
                        "text": "That night, when Kristoph sets up the tent, you can't help but admire his strength. Heaving the parts up, hauling on the ropes to tighten the tent, his leather clothes creaking as his muscles move. You stand close to him, feeling his warmth and breathing in his masculine, mature scent. He notices your closeness, and glances at you, but doesn't say anything.</p>Once he has checked on the reindeer, you both climb into the tent together. As usual, he doesn't remove his clothing. You press gently against him, and look up into his eyes, before telling him you find him very attractive. His arm slides around you, and squeezes you gently against his wide, round chest. \"You are very attractive too\", he says in a deep, warm voice. He slowly leans in, pressing his face to yours. His thick white beard is soft as it brushes over your face, and his moustache tickles your lips as he begins to kiss you. You feel his gloved hand stroke over your chest and along your sides, and the warmth of his body through his clothes as he squeezes you close.</p>You reach forward and try to unlace his tunic, but he takes your hand and pushes it away slightly. \"I am sorry, but you must not touch my bare body. It is complicated. For now, could we just stay like this?\", he asks. You nod, and he climbs up atop you. His weight pressing down on you, as he kisses and nuzzles at your cheek and neck. He lifts your jacket, and starts to kiss at your chest, his moustache stroking down your body and touching at your bare skin, making you shiver and gasp a little. You squeeze tightly onto the fur blankets as he slowly pulls down your pants, revealing your hard, twitching cock. He leans down and kisses it, licking slowly along your shaft and brushing his beard against your crotch with teasing gentle motions. He then opens his mouth and begins to suck on your shaft, his powerful hand pressed onto your leg as he takes his time tasting and pleasing you. You shiver and thrust a little, but he holds you in place, taking this at his own pace. Gradually, you start to leak and dribble into his mouth, and he begins to speed up. He holds onto your sides with both hands and sucks up and down more, faster and faster, before then pressing his face firmly against your crotch. You gasp and start to cum, your cock spurting deep into his throat over and over.</p>He lifts his head up, and licks your shaft again, before lying atop you and wrapping his arms around you. He nuzzles his face against yours until you both fall asleep in eachother's arms.",
                        "outcomes": [
                            {
                                "parameter": "kristoph_friend",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "k_0_f",
                "title": "Try to get closer to Kristoph",
                "subtitle": "The huge hairy old man is gentle, but very strong. In your time with him, sitting behind him on the sled and sleeping close to him at night, you have found yourself starting to feel an attraction towards him. You resolve to try something with him tonight, when you are together in the tent.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "kristoph_friend",
                        "value": 0,
                        "comparison": "equal" //default greater
                    },{
                        "parameter": "gender",
                        "value": 2,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "kristophb",
                "results": {
                    "grizzsex": {
                        "text": "That night, when Kristoph sets up the tent, you can't help but admire his strength. Heaving the parts up, hauling on the ropes to tighten the tent, his leather clothes creaking as his muscles move. You stand close to him, feeling his warmth and breathing in his masculine, mature scent. He notices your closeness, and glances at you, but doesn't say anything.</p>Once he has checked on the reindeer, you both climb into the tent together. As usual, he doesn't remove his clothing. You press gently against him, and look up into his eyes, before telling him you find him very attractive. His arm slides around you, and squeezes you gently against his wide, round chest. \"You are very attractive too\", he says in a deep, warm voice. He slowly leans in, pressing his face to yours. His thick white beard is soft as it brushes over your face, and his moustache tickles your lips as he begins to kiss you. You feel his gloved hand stroke over your chest and along your sides, and the warmth of his body through his clothes as he squeezes you close.</p>You reach forward and try to unlace his tunic, but he takes your hand and pushes it away slightly. \"I am sorry, but you must not touch my bare body. It is complicated. For now, could we just stay like this?\", he asks. You nod, and he climbs up atop you. His weight pressing down on you, as he kisses and nuzzles at your cheek and neck. He lifts your jacket, and starts to kiss at your breasts, his moustache stroking down your body and touching at your bare skin, making you shiver and gasp a little. He licks your nipples and his beard teases between your cleavage. You squeeze tightly onto the fur blankets as he slowly pulls down your pants, revealing your wet, warm pussy. He leans down and kisses it, licking slowly along your lips and brushing his beard against your crotch with teasing gentle motions. He then opens his mouth and begins to slide his tongue deeper inside you, licking and kissing at you, his powerful hand pressed onto your leg as he takes his time tasting and pleasing you. You shiver and thrust a little, but he holds you in place, taking this at his own pace. Gradually, you start to leak and dribble into his mouth, and he begins to speed up. He holds onto your sides with both hands and his tongue slides against your inner walls, kissing and touching and licking at you. His face presses firmly against your crotch, licks and suckles on your clit, and pleasures you over every inch of your femininity. You gasp and start to orgasm, feeling pleasure rushing through your body as you moan in delight.</p>He lifts his head up, and kisses your crotch again, before lying atop you and wrapping his arms around you. He nuzzles his face against yours until you both fall asleep in eachother's arms.",
                        "outcomes": [
                            {
                                "parameter": "kristoph_friend",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "k_1",
                "title": "A Tiny Village",
                "subtitle": "You have come close to a very small hamlet of squat, snow-covered cottages. The late night is drawing in, and Kristoph says that he should make a visit and do any healing that is necessary.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "kristoph_friend",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "kristophb",
                "results": {
                    "grizzsex": {
                        "text": "Kristoph takes you along with him, your boots both crunching through the snow as you walk to the small houses. Small lanterns are hanging from the doors of each house, so you can find your way even as the long dark night draws in. He walks past the first two houses, towards one with a flickering red light in the lantern.</p>When he taps on the door, it is answered by a young child. The boy appears human, but to your slight surprise, his bare feet end in large, flat hooves. He takes Kristoph's gloved hand and pulls him inside, and you follow. The house is very small, with furs on the floor and a small hearth burning. A woman is tending to a man lying in bed, who's breathing is ragged and pained. She looks up with teary eyes. \"Kristoph! You came! Please, Erik was hurt badly by a falling tree. He needs your help\", she says.</p>Kristoph nods and pulls his gloves off, something you have seen him do only once before. He places his hands gently on the man's head, then strokes down his body, moving in small circles like he is looking for something. He then nods and presses his palm firmly on the man's lower chest, before closing his eyes.</p>Slowly, the man's pained breathing becomes calmer and more even. His clenched hands relax and open up as he sighs in relief. You are surprised to see something else, though. Two bumps are forming on his head, starting to grow and bulge out. They push out through the skin, stretching taller and arching above his head. When they bump against the headboard, he grunts and sits up, before reaching up to feel the bony protrusions as they split and grow into branching white antlers. Kristoph pulls his hand away, and nods. \"You are well, now. I would advise greater care when chopping trees in future, Erik, unless you want to join the herd early\", he says.</p>Erik laughs and shivers, before lying back down to rest and sleep. The rest of the family thank Kristoph profusely, and the mother gives you a large bag of preserved food before you go on your way.</p>He checks on the other houses before you go, but no one else needs anything more than a brief touch on the forehead for a chill. As you return to the sled, he explains. \"I have the healing hands, but it does come at a price. A child is born rarely in these steppes who's touch can heal any wound or injury, at the cost of humanity itself. Anyone I touch will slowly become a healthy, ordinary reindeer. The people of the villages here accept that as a way of life. They know when they grow old they will join my herd and live out their twilight years as simple beasts. This is why I couldn't let you touch me. My face is safe enough, but anywhere else and you would join our herds too early, my friend\", he says.</p>You give that some thought as you walk back to the sled.",
                        "outcomes": [
                            {
                                "parameter": "kristoph_friend",
                                "quantity": 2,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "k_2_m",
                "title": "Accept the curse",
                "subtitle": "You do not care that it will turn you partially into a reindeer. You want to be close to Kristoph, even if it costs you some of your humanity.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "kristoph_friend",
                        "value": 2,
                        "comparison": "equal" //default greater
                    },{
                        "parameter": "gender",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "kristophb",
                "results": {
                    "grizzsex": {
                        "text": "You have decided that just one night close to Kristoph would be worth gaining some fur and antlers. That night in the tent together, you cuddle up close to him again. His arms wrap around you, holding you tightly as you kiss and nuzzle into his thick soft beard. You pull off your clothes, lying on the furs with him naked and feeling hims kiss over your chest and nuzzle you gently. You reach down, stroking across his strong round belly, and begin to pull on the laces of his tunic again. Once again he stops you, but this time you tell him that you understand the risk, and you want this.</p>He thinks carefully for a moment, then squeezes you. \"I want this too. I will do everything I can to ensure you don't go all the way\", he says, his voice deep and needy. He sits up and reaches down, pulling on his thick leather boots, slowly revealing the wide strong feet within. You lean down and pull off his damp, musky socks to see his large, muscular bare feet. The tops are dusted with soft white hair, and you squeeze and massage his soles, making him grunt and sigh with delight.</p>His cheeks redden under his beard, and he starts to pull off his tunic. \"I haven't been touched for a very long time\", he rumbles</p>As you squeeze and stroke his feet, you feel your own toes start to stiffen and feel hard. The skin there darkens, and your toes begin to merge and fuse together, clacking as they become hooves. He takes your wrists and pulls you up away from his feet, and you slide your hands into his unfastened tunic and pull it up over his head. His huge round belly is bare, and covered in curly white hair. You stroke and massage it, lifting and squeezing into it as you press yourself into his warm body. His pecs are chubby but firm, with extra thick fur that you press your face into as he hugs you tightly. You feel tingling on your own chest and face, and he pulls you up and kisses you. His gloved hand strokes across your chest as it slowly becomes furry and soft and shaggy, and you feel your face beginning to push out, the bones reshaping and shifting into a muzzle.</p>He finally pushes down his pants, tugging them down off his wide strong legs, and kicking them away. His crotch is covered in a thick furry forest of soft white hair, from which his large hairy balls and his fat, heavy cock stand proud and firm. Slowly, and hesitantly, he pulls off his gloves and places them aside, then pulls you up onto him so that your bare chest is against his own. He shudders in pleasure as he strokes and squeezes you, and you start to kiss and rub against his chest. Your hands stiffen, your fingers becoming firm and hard as the tips turn brown and hooflike. More fur spreads up your arms and down your legs, becoming thicker and shaggier.</p>You get down on your knees, and press your growing face into Kristoph's musky, furry crotch. You kiss and lick along his balls, rubbing and pressing yourself firmly against him. He shudders and gasps, his fat uncut cock oozing and twitching as pre dribbles and gushes out from the swollen head. Some of the pre drips onto your growing furry muzzle, and the scent of it drives you wild with need. You open your mouth and take his cock inside, sucking and tasting it eagerly. Your nose darkens and widens as it becomes a soft, sensitive reindeer nose, buried deep in Kristoph's hairy crotch. You feel his wide cock stretch your jaw and bounce in the back of your throat as he thrusts and presses into you.</p>You feel your head aching and pulsing, as hard nubs start to form. They stretch and bulge, growing larger and wider, before they burst from your head and arch up. Bony new antlers splitting and growing, forming a strange weight atop your head. Kristoph holds onto him and thrusts firmly into your mouth, using them like handlebars as his cock pounds into your throat.</p>He pulls you up, and presses you down onto the furs. You snort, your ears getting longer and furrier, and your body almost completely covered in fur. He lifts your legs up, holding them under his armpits as he guides his hard, dripping cock to your rear. With a firm, powerful thrust, he pushes it into your hole, and you gasp in pleasure. Your insides stretch out against the older man's girthy cock, and you feel every inch of it as it slides into you and fills you. He thrusts and pounds into your ass, while you feel your tailbone stretch and grow furry, becoming a fuzzy reindeer tail. Finally, he moans and pants and grunts, shuddering with lust. His massive hairy belly bounces and wobbles, as he growls and thrusts in hard and deep. You feel his hot, thick cum rush up inside you, and your own hard cock follows suit, spraying down your chest with musky dripping reindeer cum.</p>He sighs with relief, before pulling out, and backing away gently. \"That was incredible. Thank you, it was a wonderful experience. I only wish I could kiss every inch of your beautiful body, but I fear any further touch would leave you nothing more than a beast\", he says sadly. You nod, still awash with the afterglow, and keep a careful distance as he puts his clothes back on. That night you dream of spending your life at Kristoph's side, pulling his sled and being one of his beloved herd.</p>The following morning, Kristoph squeezes you firmly to him in a hug. \"I think it is time for you to head home, my friend. I have loved our time together but I would not forgive myself if you were to become a simple animal because of me\", he says.</p>You understand, but part of you wants to stay here forever. Perhaps one day you will return and show him you have chosen to be a reindeer of your own free will.",
                        "descriptionchange": "This adventurer is a shaggy, furry reindeer, with a long wide snout. They have large branching antlers and wide, strong cloven hooves.",
                        "outcomes": [
                            {
                                "parameter": "kristoph_friend",
                                "quantity": 3,
                                "change": "set"
                            },{
                                "parameter": "species",
                                "quantity": 51,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "k_2_f",
                "title": "Accept the curse",
                "subtitle": "You do not care that it will turn you partially into a reindeer. You want to be close to Kristoph, even if it costs you some of your humanity.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "kristoph_friend",
                        "value": 2,
                        "comparison": "equal" //default greater
                    },{
                        "parameter": "gender",
                        "value": 2,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "kristophb",
                "results": {
                    "grizzsex": {
                        "text": "You have decided that just one night close to Kristoph would be worth gaining some fur and antlers. That night in the tent together, you cuddle up close to him again. His arms wrap around you, holding you tightly as you kiss and nuzzle into his thick soft beard. You pull off your clothes, lying on the furs with him naked and feeling hims kiss over your chest and nuzzle you gently. You reach down, stroking across his strong round belly, and begin to pull on the laces of his tunic again. Once again he stops you, but this time you tell him that you understand the risk, and you want this.</p>He thinks carefully for a moment, then squeezes you. \"I want this too. I will do everything I can to ensure you don't go all the way\", he says, his voice deep and needy. He sits up and reaches down, pulling on his thick leather boots, slowly revealing the wide strong feet within. You lean down and pull off his damp, musky socks to see his large, muscular bare feet. The tops are dusted with soft white hair, and you squeeze and massage his soles, making him grunt and sigh with delight.</p>His cheeks redden under his beard, and he starts to pull off his tunic. \"I haven't been touched for a very long time\", he rumbles</p>As you squeeze and stroke his feet, you feel your own toes start to stiffen and feel hard. The skin there darkens, and your toes begin to merge and fuse together, clacking as they become hooves. He takes your wrists and pulls you up away from his feet, and you slide your hands into his unfastened tunic and pull it up over his head. His huge round belly is bare, and covered in curly white hair. You stroke and massage it, lifting and squeezing into it as you press yourself into his warm body. His pecs are chubby but firm, with extra thick fur that you press your face into as he hugs you tightly. You feel tingling on your own chest and face, and he pulls you up and kisses you. His gloved hand strokes across your breasts as they are covered in soft, warm fur, and you feel your face beginning to push out, the bones reshaping and shifting into a muzzle.</p>He finally pushes down his pants, tugging them down off his wide strong legs, and kicking them away. His crotch is covered in a thick furry forest of soft white hair, from which his large hairy balls and his fat, heavy cock stand proud and firm. Slowly, and hesitantly, he pulls off his gloves and places them aside, then pulls you up onto him so that your bare chest is against his own. He shudders in pleasure as he strokes and squeezes you, and you start to kiss and rub against his chest. Your hands stiffen, your fingers becoming firm and hard as the tips turn brown and hooflike. More fur spreads up your arms and down your legs, becoming thicker and shaggier.</p>You get down on your knees, and press your growing face into Kristoph's musky, furry crotch. You kiss and lick along his balls, rubbing and pressing yourself firmly against him. He shudders and gasps, his fat uncut cock oozing and twitching as pre dribbles and gushes out from the swollen head. Some of the pre drips onto your growing furry muzzle, and the scent of it drives you wild with need. You open your mouth and take his cock inside, sucking and tasting it eagerly. Your nose darkens and widens as it becomes a soft, sensitive reindeer nose, buried deep in Kristoph's hairy crotch. You feel his wide cock stretch your jaw and bounce in the back of your throat as he thrusts and presses into you.</p>You feel your head aching and pulsing, as hard nubs start to form. They stretch and bulge, growing larger and wider, before they burst from your head and arch up. Bony new antlers splitting and growing, forming a strange weight atop your head. Kristoph holds onto him and thrusts firmly into your mouth, using them like handlebars as his cock pounds into your throat.</p>He pulls you up, and presses you down onto the furs. You snort, your ears getting longer and furrier, and your body almost completely covered in fur. He lifts your legs up, holding them under his armpits as he guides his hard, dripping cock to your wet, needy pussy. With a firm, powerful thrust, he pushes it inside you, and you gasp in pleasure. Your insides stretch against the older man's girthy cock, and you feel every inch of it as it slides into you and fills you. He thrusts and pounds into you, while you feel your tailbone stretch and grow furry, becoming a fuzzy reindeer tail. Finally, he moans and pants and grunts, shuddering with lust. His massive hairy belly bounces and wobbles, as he growls and thrusts in hard and deep. You feel his hot, thick cum rush up inside you, and your whole body flushes with warmth and heat as a rush of orgasmic bliss fills you.</p>He sighs with relief, before pulling out, and backing away gently. \"That was incredible. Thank you, it was a wonderful experience. I only wish I could kiss every inch of your beautiful body, but I fear any further touch would leave you nothing more than a beast\", he says sadly. You nod, still awash with the afterglow, and keep a careful distance as he puts his clothes back on. That night you dream of spending your life at Kristoph's side, pulling his sled and being one of his beloved herd.</p>The following morning, Kristoph squeezes you firmly to him in a hug. \"I think it is time for you to head home, my friend. I have loved our time together but I would not forgive myself if you were to become a simple animal because of me\", he says.</p>You understand, but part of you wants to stay here forever. Perhaps one day you will return and show him you have chosen to be a reindeer of your own free will.",
                        "descriptionchange": "This adventurer is a shaggy, furry reindeer, with a long wide snout. They have large branching antlers and wide, strong cloven hooves.",
                        "outcomes": [
                            {
                                "parameter": "kristoph_friend",
                                "quantity": 3,
                                "change": "set"
                            },{
                                "parameter": "species",
                                "quantity": 51,
                                "change": "set"
                            }
                        ]
                    }
                }
            }
        ],
        "npcs": [
            {
                "id": "kristoph",
                "name": "Kristoph",
                "description": "Kristoph is a massive man, both in height and girth. He towers over you, and his huge round belly is hard and heavy. His arms bulge with muscle despite his advanced age, and his boots are enormous. He is usually quiet, but behind his thick white beard and fluffy moustache there is always a friendly and comforting smile.",
                "icon": "kristophb",
                "dialogue": [
                    {
                        "input": "Can you tell me about yourself?",
                        "output": "Kristoph strokes his beard and thinks for a moment after you ask that. \"I suppose there is not much to tell. I live here with my reindeer, I take them to food, help them when they are sick, and in exchange they pull me along and keep me company. It is a quiet life, but it is the one for me I think\", he says. He pulls off one of his gloves, and stretches his rough, weathered hands. \"When I was young, they told me I had the healing hands. It is very rare, even here where the magic is strong and wild. Sometimes I will visit the little villages and use my healing, in exchange for a little food or trinkets and so forth. Other than that, people leave me be, and I leave them be as well\""
                    },
                    {
                        "input": 'Why do you live so far north?',
                        "output": "Kristoph grunts and glances away when you ask that. \"I have my reasons. Here in the steppes is where my ancestors lived, and that is good enough for me. I do miss company every now and then, but staying away from people for the most part is...safer\", he says. \"I am not completely alone, I have my reindeer, and there are hamlets and cottages I stop by at to make sure people are doing alright and help out if need be. It is enough for me.\""
                    },
                    {
                        "input": 'I felt a presence calling to me before, far away towards the north. Do you know what that might have been?',
                        "output": "\"I know of many dangerous things in the snow. Could be a wendigo, calling with the voice of the dead to lure you out so you will perish in the cold and it can devour you. A frost lady, perhaps, seeking a lover to sate the loneliness but never able to connect to another before they die at her frosty touch. Maybe even just a lonely polar bear calling out for a mate\", he says. You try to explain how it felt, how it was like there was a horrible booming voice in your skull, beating at your thoughts and dragging you along like a puppet on a string. A massive force miles to the north pulling on you like a gravity well. You realise he is staring at you, and looks alarmed. \"I...don't know any monsters that sound like that. But it sounds like very bad news to me. My advice would be to stay away from the steppes in future. Some people are born more sensitive to spirits and fey creatures and are always in danger of getting too close. Could be that you got in touch with something very unpleasant.\""
                    },
                    {
                        "input": 'What is your cock like?',
                        "output": "Kristoph laughs, the sound of it booming and echoing across the ice. \"Feisty one, aren't you? I better watch out that libido of yours doesn't melt all this snow! Well I'm not one to brag but it's doing fine, thank you. Not like I'm about to pull it out in this weather unless you want to see an icicle, though!\""
                    },
                    {
                        "input": 'Can I see your feet?',
                        "output": "\"Am I right in guessing that you'd like to give them a rub, traveller? I can't say I wouldn't enjoy having someone massage and squeeze them, but I can't be expecting you to do that after I've had them cooped up in these big boots for weeks on end!\""
                    }
                ]
            }
        ]
    }