var area = {
        "title": "contributor_1",
        "header": "The Chamber",
        "subheader": 'This room is much different from the rest of the caves. The walls are red and emit an unnatural warmth. In the center of the room is a brazier with a massive supernatural flame burning out from. The strangeness of the flame stems from how it\'s left half has the appearance of purple tendrils of fire, and the right a light yellow burning extremely bright, the two creating weird dancing shadows in the chamber. Lastly, on the left of the brazier is a throne made of twisting black metal with engravings of screaming faces of pain and terror that almost seem like they are moving in the dancing shadows. And on the right is a simple golden bench with a blue suede cushion on the top. [All content in this room came from CJMPinger]',
        "events": [
            {
                "id": "entrance_south",
                "title": "Crack in the Wall",
                "subtitle": "You spy a crack in the eastern side of the chamber wall, breaking through the homogeneous structure. With some maneuverability you think that you might be able to squeeze through.",
                "type": "statcheck", //or random
                "stat": "stealth",
                "difficulty": 20,
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "With some clever footwork you are able to get through, avoiding catching yourself on some sharp edged stones. For your troubles you find yourself in a dark crevasse.",
                        "area": "contributor_1_1",
                        "outcomes": []
                    },
                    "fail": { //success and fail, rare success, rare fail, or random
                        "text": "While trying to squeeze through, your foot slips on a bit of wet stone. You fall back and feel a slash at your side, it hurts greatly, as if you were stabbed with something. You then resolve to go back, the wound at your side hurting too much for you to realistically go forward. When you finally crawl out to the light, you see the gash at your side. It is not as deep as it could be, but it takes a bit of effort to stop the bleeding. And so you sit there for some time, recuperating from the severity of your wound. ",
                        "outcomes": [{
                            "parameter": "pain",
                            "quantity": 1,
                            "max": 1,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "imp_tf",
                "title": "Corruption of Fire",
                "subtitle": 'Asmodeus stands walking towards you, his commanding presence further filling the room. The burning scent of sulphur fills your nostrils, slowly going from a scent that brings about disgust to one that brings about arousal. As he moves toward you, you find it near impossible to avert your gaze from between his legs. His demonic cock growing rapidly to nearly double of the size from before. He finally stands before you, his erection at full mast in front of you. You then hear a single guttural command ressonates through your being, "Suck." Do you obey the monster before you?',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 15,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "default",
                "results": {
                    "grizzsex": {
                        "text": 'You ignore the feeling of wrongness that starts to bubble up within you and let his influence command your being. You feel yourself almost lose all control; your mind, body, and soul putty in his hands. Not entirely of your own accord, you mouth the word yes and lose yourself to his depravity.</p></p>You feel the clawed hand of the demon start gripping onto the back of your head, pushing you closer to that throbbing penis before you. Your lips pressed against the head and his scent overwhelming your nostrils. You open your mouth wide, barely enough to take in the girth before you as he thrusts in roughly, filling your mouth completely.</p></p>With the exception of the first thrust, he starts off surprisingly gentle. He moves slowly, letting every inch of the underside of his cock slide across your tongue. His precum smearing onto your tongue, sparking an immense need for more. A need to pleasure the demon and get your reward.</p></p>He starts getting a little faster, a little deeper, a little rougher. Bit by bit he slides further in. If you could look up, you would see a sly smile on his face, but you are far too obsessed with what\'s in your mouth as he continues humping. His speed and force begins to increase rapidly, all while pushing your head against him.</p></p>Soon his large cock is all the way down your throat, pumping in and out, ignoring any gag reflex you still may have. He continues thrusting, even harder than before, the rest of your face crushed against his groin. All pretense of care and gentleness are gone as the demon nears his climax. You feel as if your jaw and neck could break at any point, but they never do.</p></p>Then he bucks one last time forcefully into your mouth, and relaxes. Spurt after spurt of seed begins to flow out into your mouth, unable to swallow and helpless to contain it all no matter how much you try. Little streams of glowing red cum flow out of your mouth, hot enough to sear a person normally but leaves you unharmed. The demon then slides his cock out of your mouth, spraying a few weaker spurts on you, and goes back to sit on his chair to watch the coming changes.</p></p>You begin to feel extremely cold, despite all the burning seed inside and around you. It feels almost feezing, your body shivering with cold. And then you see a small ball of light exit out of your chest, and float toward the demon, his maw open wide. You try and weakly move your arm out and catch it, but you can barely move at all. It finally floats in and lands on the demons tongue, and with a single gulp it disappears, with one last shiver resonating through your body.</p></p>Then everything becomes hot, burning and searing throughout body, your screams echoing in the cave. Promptly this is followed by silence as your body begins to shift in size. All pain gone, you start to feel strong. Your mind and body becoming twisted. You stand with a smile, your skin already turning a deep shade of red.</p></p>You smile at your predicament, you know that you are changing quickly. You know that you are changing into something better, no... far superior, than everything else except Master Asmodeus. Tiny nubs of horns begin to grow out of your skull. All while you begin to become shorter.</p></p>From above your ass a long tail rapidly flings out, tipped with an almost Arrowhead like shape. From your back tiny wings unfurl, too tiny to allow you to fly more than a couple feet off the ground. Additionally you shrink more and more til you are less than a meter tall.</p></p>In the end, in the place you once stood, remains a pudgy little imp. Your belly slightly chubby and arms and legs lanky, all you do is grin  as your inflated ego tells you that you are better than everyone else. Except for Master Asmodeus, of course.',
                        "descriptionchange": "This adventurer is a short pudgy imp with bat wings and a demon tail.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 15,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "human_tf_male",
                "title": "A Definition of Purity",
                "subtitle": "While in the chamber you notice that Inarius is not on his bench as normal. Then from behind you, you hear his echoing voice say, \"Young one, you appear to have let yourself become the property of another...\" You turn around quickly but do not see him and then turn back to see him right in front of you, extremely close to your face. \"Your body has been tainted by a dark magic that obfuscates and ruins the sanctity of a pure human form, I can remove it if that is what you desire.\" You are about to argue with him because this is your body, why would you want to go back to being human, if you ever were one? In fact, his offer sounds almost like he hates other species under his veneer of kindness. However, his hand grabs your face and you feel your mind regress back to where it was when you began the journey, before any beings tried to mess with it. \"This is temporary young one, and I await for your answer.\" Would the old you accept his offer?",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 1,
                        "comparison": "nequal" //default greater
                    },{
                        "parameter": "gender",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "default",
                "results": {
                    "grizzsex": {
                        "text": "Inarius leads you to the bench and softly pushes you on it. He then lowers himself, his robe lifted up and his knees on the ground. You then see him draw a circle in front of your crotch, a blue circle appearing in the air from where his finger was. Once the circle was complete, it exploded into bright light and then disappeared. In its place a new feeling of sensitivity rose within you, centered directly upon your dick.</p>You look down at him and notice something odd, in his eyes gleam a hunger that was not there before. On his face is a deep red blush and he is licking his lips as if before him is a meal. He takes a deep breath and then blows onto your quickly hardening dick. The warm air rushing past it feels greater due to the sensitivity, making it quiver out of pure pleasure alone.</p>Seeing you squirm from just that alone spurns him on further, and so he moves his head down towards your dick. His lips touch the tip, the warmth of them feeling like a raging fire and the merest touch of them bringing you to the brink. His lips open and slowly he slides his mouth onto it, the tongue massaging along the underside tenderly. All of this overwhelming your senses and mind, you are unable to perceive anything other than the overload of sense and need for release radiating around your nether region.</p>He keeps moving his head down slowly and carefully, sliding his mouth further along. Before he even reaches the halfway point, your dick shudders and releases its first intense load. The feeling of the orgasm resonating through your body. But almost instantly after the release, the need for release returns even stronger than before. Even the sensitivity increases its intensity, all while the angel swallows the whole load and continues his work.</p>He starts going faster, spurned on even further by the orgasm. His mouth moves from the tip all the way to the base. For several minutes this goes on non-stop. Countless orgasm after orgasm, each one faster than the last until it becomes one continuous streak. All while the sensitivity goes to its peak. You can barely move save for the shudders from each ejaculation.</p>He stops moving and looks up at you, cum dripping out of the sides of the voracious angel's mouth. Finally, he lets your cock free of his mouth as it slides off his tongue, the cool air giving a very different sensation from the warmth and wetness from before. He then proceeds to give it a single light flick of his finger. Then it spasms wildly, the feeling forcing you to grip on the chair, cumming long and hard. Ropes of black liquid fly out and fall upon the ground, dissolving and disappearing with a fizzle before it can pool upon the ground. With each spurt, your form fades back to that of a human, as if your previous body was an illusion despite it being as real as any other.</p>You sit there tired and exhausted on the bench, your body weak from what has transpired. But you feel good. Like you were freed of something. That thought stays awhile in your mind as you lay there. After a few hours of resting, your strength returns, and you get up, thanking Inarius immensely for his service. Though as you go, you get the odd feeling that the angel didn't have to do it that way.",
                        "descriptionchange": "This adventurer is a normal human.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "human_tf_female",
                "title": "A Definition of Purity",
                "subtitle": "While in the chamber you notice that Inarius is not on his bench as normal. Then from behind you, you hear his echoing voice say, \"Young one, you appear to have let yourself become the property of another...\" You turn around quickly but do not see him and then turn back to see him right in front of you, extremely close to your face. \"Your body has been tainted by a dark magic that obfuscates and ruins the sanctity of a pure human form, I can remove it if that is what you desire.\" You are about to argue with him because this is your body, why would you want to go back to being human, if you ever were one? In fact, his offer sounds almost like he hates other species under his veneer of kindness. However, his hand grabs your face and you feel your mind regress back to where it was when you began the journey, before any beings tried to mess with it. \"This is temporary young one, and I await for your answer.\" Would the old you accept his offer?",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 1,
                        "comparison": "nequal" //default greater
                    },{
                        "parameter": "gender",
                        "value": 2,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "default",
                "results": {
                    "grizzsex": {
                        "text": "Inarius leads you to the bench and softly pushes you on it. He then lowers himself, his robe lifted up and his knees on the ground. You then see him draw a circle in front of your crotch, a blue circle appearing in the air from where his finger was. Once the circle was complete, it exploded into bright light and then disappeared. In its place a new feeling of sensitivity rose within you, centered directly inside and around your vagina.</p>You look down at him and notice something odd, in his eyes gleam a hunger that was not there before. On his face is a deep red blush and he is licking his lips as if before him is a meal. He takes a deep breath and then blows onto your clit. The warm air rushing past it feels greater due to the sensitivity, making it quiver out of pure pleasure alone.</p>Seeing you squirm from just that alone spurns him on further, and so he moves his head down towards your pussy. His lips touch the outside, the warmth of them feeling like a raging fire and the merest touch of them bringing you to the brink. His lips open and slowly he slides his tongue in, it massaging along the sides tenderly, reaching further until he gets the reaction he wishes from you to find your sweet spot. All of this overwhelming your senses and mind, you are unable to perceive anything other than the overload of sense and need for release radiating around your nether region.</p>He keeps moving his tongue around slowly and carefully. Before he even starts in earnest, your pussy shudders and releases its first orgasm into the angel's mouth. The feeling of the orgasm resonating through your body. But almost instantly after the release, the need for release returns even stronger than before. Even the sensitivity increases its intensity, all while the angel laps up all you have to offer before he continues his work.</p>He starts going faster, spurned on even further by the orgasm. His tongue prods all over your clitoris. For several minutes this goes on non-stop. Countless orgasm after orgasm, each one faster than the last until it becomes one continuous streak. All while the sensitivity goes to it's peak. You can barely move save for the shudders from each ejaculation.</p>He stops moving and looks up at you, cum dripping out of the sides of the voracious angel's mouth. Finally, he lets your hole free of his mouth as he slides his tongue out, the cool air giving a very different sensation from the warmth and wetness from before. He then proceeds to give the clit a single light tap of his finger. The feeling forcing you to grip on the chair, cumming long and hard. Streams of black liquid flow out and fall upon the ground, dissolving and disappearing with a fizzle before it can pool upon the ground. With each spurt, your form fades back to that of a human, as if your previous body was an illusion despite it being as real as any other.</p>You sit there tired an exhausted on the bench, your body weak from what has transpired. But you feel good. Like you were freed of something. That thought stays awhile in your mind as you lay there. After a few hours of resting, your strength returns, and you get up, thanking Inarius immensely for his service. Though as you go, you get the odd feeling that the angel didn't have to do it that way.",
                        "descriptionchange": "This adventurer is a normal human.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 1,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "market_random",
                "title": "Loiter Around The Chamber",
                "subtitle": "Something interesting may happen in such an odd location.",
                "type": "random",
                "requirements": [
                ],
                "icon": "default",
                "results": {
                    "Slave Market": {
                        "text": 'While looking around in the chamber you hear a whistling sound behind you, from where the angel and demon are sitting. You look over and see the demon appearing slightly smugger than usual, leaning back with his legs spread out showing off his pride, whilst the angel seems asleep somehow. Asmodeus then says commandingly, \"I\'m bored. SIT.\" He gestures to in front of him with one hand and with a snap of his fingers flames seem to quickly burst forth in the air and then dissipate. Where the flames were burning previously is now a jet-black table and chair occupying the space in front of him, despite their simplicity, the furniture seems to radiate a menacing aura as if they were just an extension of the evil creature in the room. He sees your reluctance, his smugness seeming to fade away to a cold commanding glare. "I said Sit."</p>You move forward, not entirely of your own will, and sit down in the chair. You feel nervous, very sure that the fiend has something planned for you. For nearly a minute you sit there in total silence, his dark eyes staring at you, a slight smile at his lips. For some reason as you sit there, you struggle to keep your gaze up at him, instead your eyes seem to wander down to his cock in full view from where you\'re sitting. So close that you see every detail, every pulse as blood rushes through the member, the glisten of pre on the- "I think we should play a game." That statement breaks the silence, scattering your thoughts. You look up at him taking a breath, the musk of him being close making you light headed for a second, your own arousal still slightly distracting you. You ask \'what\' weakly, having barely heard the question. He smiles, the showing of his teeth being unnaturally friendly and a bit unnerving, barely hiding his want to completely dominate your very existence behind a very thin veneer of playfulness. </p>"I said I wanted to play a game, surely you mortals have them, you have played one before, haven\'t you?" You nod yes, wondering why the demon would want to play games, or what type of game would he even want to play. Then, almost as if he read your mind, he says, "It gets very, well, boring being stuck in here with that stuffy prick over there." He points at Inarius, who has begun to snore lightly. "So, let\'s play a personal favorite of mine." He moves his arm slowly over the table and from below it with small puffs of smoke a game board and pieces appear, at this point you get a slight feeling that he is trying to show off, but you keep silent looking at the pieces that have appeared. For a few seconds you stare, not recognizing the lewd figurines strewn on the red and black checkered board. The front row is composed of what seems to be humans bound up in straps with barely contained hard-ons. The back however is inhabited by a row of what seems to be little figurines of demons having their way with humans, all said humans looking like they are in a state of mania as they submit to the various imps and devils on top of them. Then it hits you. This is just a stylized chess board. </p>He speaks, "I\'m sure you can guess the rules of what we are about to play, but before we start I\'d like to, how do you say it, spice things up a bit…" He grins that false friendly smile again. "So, I\'ll propose a bet, those always make any game better! If you win, I\'ll give you a part of my power, free for you to use, no strings attached. However, if I win, I get to own you. Mind, body, and soul, you will be mine and I will walk out of here in your body." You process the proposal, it already sounding like a bad idea but the thought of having his power or him possessing you seems to excite you despite your better judgement. You reluctantly nod yes. His smile then seems to fade for good and he replies in his normal commanding manner, "Why don\'t you make the first move?"</p>And so, you play, and as far as you can tell it is just normal chess. You two proceed to play in relative silence, with the only sounds being the snoring of Inarius, the taps of the pieces hitting the board, and your breathing. As the game continues, Asmodeus keeps leaving his pieces open and easy to take. You begin to clear the side of his board with only a few losses in pawns for you. He seems to sit there stone-faced throughout it all, you can\'t read him. As you begin to take more pieces, things start to feel more and more suspicious as if you are doing something wrong. \'Could he actually be bad at this?\' is a thought that crosses your mind. Then, a mere moments later you have him in checkmate. You feel a rush of victory and relief, you beat a demon at their own game! </p>"Heh, looks like I won." You are confused thinking \'Didn\'t I just win?‘ He grins hungrily at you. You loudly object, you checkmated him, so you should have won! He stands up, knocking over the table which disappears into smoke, the remaining pieces fading away before they touch the ground. "You never asked what game we were to play; the goal wasn\'t to capture your opponent but get captured." He kicks your chair down, knocking you onto the ground, it dissipates leaving you to hit the stone floor painfully. "I\'d like to think of it as Chess 2.0, all you mortals fall for it all too easily, such a stupid trick spelling your demise is very fitting wouldn\'t you say." </p>Asmodeus then puts his foot down on your chest, the weight of it against you pinning you to the ground helplessly. "Now a bet\'s a bet, and it is time for you to pay up." The large demon on top of you begins to stroke himself slowly. The dick before being a slight fixation, now being all that you can see. Back and forth, you see that hand move, it so close to you that you can almost taste it. Longer you lay there, your need growing as you watch the demon get off on top of you. He grunts loudly, his dick shuddering just a little as he orgasms onto you. Ropes of glowing red semen splatter on you, its heat feeling like it is burning into you. The cum keeps coming, every time you think it\'ll be done more keeps sputtering out, soaking into you.</p>As the torrent of jizz assails you and bocks your vision, you realize that you have stopped struggling under his foot. Why should you, you are just… just… What were you again? Asmodeus\'s… His what? His spare body…? Yeah that\'s right! Asmodeus\'s spare body. There\'s no reason for his spare body to have its own thoughts. In fact, it should be empty for Master Asmodeus to fill with his magnificence. An empty body… No thoughts… An empty body… No thoughts…</p>This process continues for a few minutes until you are just a silhouette covered from head to toes in glowing cum, your mind completely blank. Finally, Asmodeus stops, looking down, appraising the new drone before him. "Bah, could be better, but I can find some true slaves once I get out of this blasted cavern." Then, like the furniture from before, he begins to dissipate into a purplish smoke. However, this smoke doesn\'t disappear like the rest, instead it begins to form a large cloud over your body, floating unnaturally still in the air. Subsequently, as rapidly as he unformed, the smoke rushes into you from every orifice, the smoke filling your body.</p>The body is heavy, it rises slowly, weakly, as if the control over it is weakly. You tense your arms and legs, they feel like they could snap if you exerted yourself too much, you are too powerful for this weak thing. No matter, you will be able to abandon it once you are out of the cave, maybe shape it better to your desires, a position of lowly manservant would be a good reward for its service. You begin to stand, your legs strong but weak as they quake under your commands. Freedom is so close, you will step out of here and rule everything, and be rid of that terrible- "Whu… Did I fall asleep?" Fear fills you as you realize that the curse is breaking away, it should have lasted longer but that damnable angel is waking up way too soon. You begin to not care about how this body will fare, you need to get out of here fast. Before he can react. Before he can banish you from this body and leave you trapped in here for another eternity. You are running, almost to the edge, almost to freedom. "YOU DID SOMETHING DIDN\'T YOU?!" Panic fills you, you are too late. So close.</p>White light fills the room, bathing everything in a golden glow. You find yourself back to relative normalcy, sans the dull pain aching in your limbs and the liquid drenching you. Your mind feels much clearer, although trying to remember the last few moments gives a fuzzy ache. You pick yourself up from the ground, apparently haven fallen over when the demon left, rather, was forced out of your body. You look up to see the angel and demon bickering loudly, flames and flashes of power sparking off of the two, and so in the end you decide to steer clear of them and possibly take a bath later so that brimstone smell doesn\'t stay on you forever.',
                        "outcomes": [
                        ]
                    },
                    "Slave Market2": {
                        "text": 'As you loiter around the chamber you see Inarius rise from his seat and stand facing Asmodeus. "Devil, it is time for our sessions." His normally kind demeanor seems to be solemn and tired, as if him saying that has become routine and pointless. "Oh, don\'t pretend you don\'t enjoy these sessions angel." Asmodeus smirks. "And who knows, maybe you are making progress on \'purifying me\' as you\'ve like to put it, or maybe I\'m getting to you, you have been getting really into-" With a burst of light, a large golden band appears in the demon\'s mouth, muting and gagging him, its gleam glowing radiantly in the low light of the cave. At the comment Inarius seems annoyed at the demon, more so than you have ever see the normally calm being ever been. "You should really learn to shut up Fiend."</p> Then, with similar flashes of light as before, more gold bands appear around Asmodeus\'s arms, legs, and neck tightly binding him to his throne. Despite the sudden lack of control, Asmodeus doesn\'t seem like his normal indignant self. Instead he is visibly enjoying the bindings, his own dick rock hard and his expression one of pure need. For a few moments, this is how the situation stays, the angel looking down on the bound demon, denying him the pleasure that he expects. That is until Inarius speaks. "It is always the same isn\'t it? I try to purify that dark within you, but you never change. You can never leave unless I win you know." He then sighs deeply. "Might as well begin…"</p>Inarius takes a step forward, putting his hand on Asmodeus\'s cock, his palm rubbing along the shaft. It is then Inarius begins to stroke it slowly, teasing it carefully. His hand goes up and down, bringing it closer and closer to a helpless edge. Pre forms at his tip as Asmodeus begins to hump into the teasing hand, a strange sort of desperation being shown. It doesn\'t take long for it to reach the point where you are sure the demon will blow any moment now. It is at that moment you hear a large groan from Asmodeus, his apparent Orgasm being an intense one. However, no cum spews forth, instead a little more pre flows out. "You already know the rules, no cumming until we are done."</p>Inarius then turns to where you are standing, looking at you directly, a slight amount of shame in his eyes. "I am sorry young one, but you have witnessed enough. I am afraid an observer\'s presence may be a bad influence on this process." Without warning the angel raises his arm, and with a flash of light everything grows dark and silent. You wake up later, not sure how long it has been since you were knocked out, with the only evidence of what transpired being a surprisingly large puddle of jizz at the base of Asmodeus\'s chair and a tiny stain at the front of Inarius\'s robe, leaving you to wonder what fully transpired.',
                        "outcomes": [
                        ]
                    },
                    "Furniture Store": {
                        "text": 'While wandering around the chamber you hear a thud coming from the wall that you came in through, where the painting connects to this place. You look over and see a skinny raccoon man. He looks just like anyone you\'d find in Dormaus, wearing some adventurer\'s leather armor and having a small dagger at his belt. You conclude he must have just wandered in like you had, through the painting in the art gallery. However, it quickly becomes apparent that his situation is quite unlike yours. He begins to bang on the wall that is your exit. While you can normally just walk through it, it rippling at your touch as if it was just an illusion, for him it is just a solid wall.</p>He kicks the wall hard, and then grips his footpaw in pain. "Fucking Painting, I knew it would a bad idea to try and steal from this gallery. Why did I listen to that fucking fox?!" He turns around and begins to look around the room, when his gaze moves to face where you are, you wave to him hoping to catch his attention. However, he doesn\'t react to your presence, instead he continues to scan the room, a look of desperation beginning to form on his face. "There\'s nobody here…" You look at him very confused, you are right there before him, how can\'t he see you? You then look over and notice that both Asmodeus and Inarius haven\'t noticed the racoon before you, the situation getting weirder and weirder.</p>You resolve to get this guy\'s attention, if nothing else to figure out what is going. You sprint over to him, thinking maybe touching him could do something. He is still standing there gawking; up close he looks a bit rougher and his worry is clear on his face. You move your hand to put it on his shoulder to perhaps shake him. This attempt proves to be futile however, your hand passing through him as if there was just air there. He doesn\'t react to this, instead he begins to walk in a direction mumbling, "I need to find a way out of here…" As he walks, he begins to fade away from your vision, returning to the nothing that is there, leaving you confused at what you saw and its possible implications.',
                        "outcomes": [
                            
                        ]
                    }
                }
            }
        ],
        "npcs": [
            {
                "id": "asmodeus",
                "name": "Asmodeus",
                "description": "Asmodeus is a towering demon with glowing red lines running down his muscular dark blue body. On his head are large, ornate, curved horns ending with small purple flames on the tips, and his arms and legs end in sharp beastial claws.",
                "icon": "anonicon",
                "dialogue": [
                    {
                        "input": "What is your name?",
                        "output": '"I will forgive your rudeness for not immediately going on your knees to worship my cock, for now, and introduce myself to one as misinformed of their position as you. I am Asmodeus, Prince of Lust. Your rightful place is down on the ground before me."'
                    },
                    {
                        "input": 'What is your job?',
                        "output": '"My "job" as you put it is to rule over over all of this realm. You mortals will soon learn to worship me and submit to the depravity with their souls, or perish." You then hear him growl deeply and angrily, "But for now I am stuck in this pitiful cave because of him..."'
                    },
                    {
                        "input": 'See you later.',
                        "output": '"Then begone from my sight mortal! But know that I can see within you, and my influence is undeniable."'
                    },
                    {
                        "input": 'Can I see your cock?',
                        "output": 'He stands up from his throne, his height towering above you. He walks up to you and the entire girth and length of his cock hangs in front of you. His sulphuric musk burns in your nostrils, but in only a few seconds it begins to starts to smell good. You then move your head in to lick the head, but he then swiftly turns around and goes back to his chair. He then stares at you with a smirk, "You will worship it in time."'
                    },
                    {
                        "input": 'What are your paws like?',
                        "output": 'He lifts one leg up with a devious smile, showing the dark padded underfoot of his clawed feet. He the lowers it again and says smugly, "I quite enjoy those who take being beneath my feet literally, it\'s so refreshing."'
                    },
                    {
                        "input": 'What are demons?',
                        "output": '"We are the sins you commit. The darkness born within your hearts. The corruption that grows within the ranks of man. And we will rule you all."'
                    },
                    {
                        "input": 'What is corruption?',
                        "output": '"Haven\'t you seen it all around you? Every dick you\'ve sucked, every cock in your ass, every man and woman in these lands have it." His tone shifts from boasting to anger, "If I could leave this forsaken cave, every lesser being around me would be my loyal slave."'
                    }
                ]
            },{
                "id": "inarius",
                "name": "Inarius",
                "description": "Inarius is a winged angel. Most of his body looks like an average sized, beautiful human male with golden blond hair. Draped on his body is a flowing white robe, modestly hiding the physique and assets below. Out of his back are gold feathered wings, spreaded out and gloriously emanating golden light from him into the room.",
                "icon": "anonicon",
                "dialogue": [
                    {
                        "input": "What is your name?",
                        "output": 'In a soft but reverberant voice he responds, "Young one, I am Inarius, archangel of love and protection." Then with a kind nod he says, "Pleased to make your acquaintance.""'
                    },
                    {
                        "input": 'What is your job?',
                        "output": '"My purpose, given to me by those above, is to keep the demon next to me from spreading his corruption of lust and debauchery, and to prevent him from gaining Dominion of these lands. And so I have confined us both to this cave." You decide to not mention that in the outside world, lust and debauchery is the norm.'
                    },
                    {
                        "input": 'See you later.',
                        "output": '"Far thee well young one, and leave with my blessings for I will surely pray for your future safety."'
                    },
                    {
                        "input": 'Can I see your cock?',
                        "output": 'His face goes from a kind smile to a frown of pity and sadness and simply says, "I will pray for your Salvation young one."'
                    },
                    {
                        "input": 'What are your paws like?',
                        "output": '"I am unaware of why you would ever want to see my feet but I will oblige, Young one." He then lifts his robe enough to allow is foot to be visible and lifts it for you to see. It is clean and smooth, as fair as the rest of the angel. He then lowers his foot back down and looks at you quizzically for a few seconds, clearly confused by the request.'
                    },
                    {
                        "input": 'Why do you keep calling me young?',
                        "output": 'You ask the angel why he keeps calling you young one and he responds simply, "All beings are young compared to the infinity of the Angels."'
                    },
                    {
                        "input": 'What are you?',
                        "output": '"We are an eternal group of benevolent beings. Most never come down to the realms of mankind, as our true purpose is to protect you from those that would exploit or destroy you all, and not to interfere directly in the machinations of man." He pauses for a second, thinking, then carefully he says, "We are also known for our abilities to purify mortals of their sins, and teach it to those who still have some good in their heart."'
                    }
                ]
            }
        ]
    }