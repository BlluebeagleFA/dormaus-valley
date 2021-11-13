{
   "title":"catacombs",
   "header":"Deep Catacombs",
   "nomap":"You are on the hunt, and have no time to delay.",
   "subheader":"These ancient halls are a maze of twisty stone passages, all alike. The only light comes from Bonacieux\\'s torch. The walls are like long stone bookshelves, only in place of books are the dusty, cobweb-covered remains of ancient skeletons.",
   "events":[
      {
         "id":"allout",
         "title":"Out of Supplies",
         "subtitle":"Bonacieux is completely out of supplies. You cannot continue at this rate - clearly he misjudged what was needed for the trip.",
         "type":"random",
         "requirements":[
            {
               "parameter":"b_supplies",
               "value":0,
               "comparison":"equal"
            }
         ],
         "icon":"supplies",
         "results":{
            "footstool_1":{
               "text":"You try to insist that you can carry on regardless, but he shakes his head. \"No, absolutely not. If I ran out then that means that I underestimated the dangers lurking down here. To progress on at this point would be to throw caution to the wind. We will return to the church and regroup\", he demands.</p>You reluctantly concede, and the two of you gradually return to the surface. The sun feels extremely calming and safe after the unsettling gloom beneath the earth.",
               "area":"churchyard",
               "outcomes":[
                  {
                     "parameter":"b_supplies",
                     "quantity":2,
                     "change":"set"
                  },
                  {
                     "parameter":"priest_quest",
                     "quantity":1,
                     "change":"set"
                  }
               ]
            }
         }
      },
      {
         "id":"replenish",
         "title":"Replenish Bonacieux",
         "subtitle":"His supplies are running low. You could stop for a moment and use some of your own to help him out.",
         "type":"random",
         "requirements":[
            {
               "parameter":"b_supplies",
               "value":0,
               "comparison":"greater"
            },
            {
               "parameter":"b_supplies",
               "value":2,
               "comparison":"less"
            },
            {
               "parameter":"supplies",
               "value":1,
               "comparison":"greater"
            }
         ],
         "icon":"supplies",
         "results":{
            "footstool_1":{
               "text":"You ask Bonacieux to stop and set up camp so that you can restore your energy. He looks reluctant, until you demonstrate that you have brought ample extra supplies. He raises one eyebrow. \"Goodness! You certainly came prepared. I made the right decision in asking you to assist, my child\", he says.</p>He helps you gather up stones and tinder from the ruined brickwork to construct a campfire pit, and you use some fire logs from your pack of supplies to set up the fire. You struggle initially with your flint and tinder to start up the wood in these dark, damp catacombs, but Bonacieux assists you by snapping his fingers and summoning a gleaming white light that rapidly engulfs the wood. \"Sorcery isn\\'t my specialty, but you pick up a few tricks here and there if you spend any time in the valley\", he explains.</p>Once the fire is up, Bonacieux removes his jacket and relaxes near the warmth. You can\\'t help but notice the hard, strong working muscles in his arms under his thick grey fur, and the stout and powerful body barely concealed by his peculiar armour. His age has not made him any less strong, it would seem. His long, bare grey paws turn gently by the fire, and you notice a thin scratch along the base of his left foot. He sees you looking, and makes a dismissive wave of his hand. \"Just a minor annoyance. Some of the stone around here is sharper than it appears. Well worth it to not be constrained by boots in the event that I need to really push my abilities\", he explains.</p>You grab some cleansing oil and a bandage from your pack, and he briefly protests by saying it\\'s really not necessary. He doesn\\'t resist, though, when you pour out a capful of the oil and begin to massage it into his foot. His paw is long and strong, and you can feel the tense, powerful muscles under his fur as you stroke and squeeze his foot with your thumbs and fingers. You rub the oil over his thick black pawpads, feeling the smooth bulging flesh and stroking away all the dust and grime of the trip. You then take a small amount of gauze and wrap it around the scratch, and he flexes his clawed toes.</p>\"You make a very tender nurse, I see. Perhaps you could help me with this bone, it\\'s been throbbing quite severely since you started rubbing my paw\", he says. You look up to see both his big toothy grin, and the thick red cock between his legs, which he has pulled out from his pants and is slowly stroking with his large furry hand. You move up closer to him, and he strokes the firm warm flesh of his canine cock against your cheek. Pre oozes from the pointed tip, and slides slowly down your face, as he marks you with his scent.</p>He pulls his hand away, and you take over, holding onto his thick veiny shaft and sliding your hand up and down it, feeling the weight and girth of the older wolf\\'s manhood. His base starts to throb and swell, bulging out into the hard, large shape of a powerful knot. You use one hand to hold his shaft, and the other to stroke and squeeze his knot as you lower your mouth over the tip of his cock.</p>It is warm, and musky, but clean as you suck him. His salty pre oozes over your tongue and down your throat, and he bucks and thrusts a little, starting to pant with pleasure as you service him. You slide your head down further, feeling his cock slide down past the back of your tongue and into your throat. His hand presses down onto your head, pushing you further as he grunts and pants. You let him take charge, pushing and pulling your head, and thrusting deep into your throat as he gets closer to orgasm. Finally, he growls and snarls, as he thrusts so deep that your lips kiss against his knot. His cock stiffens, and you feel his hot, thick cum rush into your throat. Thick loads fill you deeply, one after the other in hot, sticky ropes. Gradually, the flow of cum lessens, and he releases his grip and allows you to pull your head free. He chuckles. \"It seems age has not lessened my libido, nor your attraction to me. Now, let us clean ourselves up and get back to work, I am feeling greatly refreshed!\"",
               "outcomes":[
                  {
                     "parameter":"b_supplies",
                     "quantity":1,
                     "change":"add"
                  },
                  {
                     "parameter":"supplies",
                     "quantity":2,
                     "change":"sub"
                  }
               ]
            }
         }
      },
      {
         "id":"mystery",
         "title":"Examine a fresco",
         "subtitle":"One of the walls is unlike the others. Instead of skeletons, there is a large, faded mural. You can make out the shape of a large creature with its arms open, and above it are six colourful shapes.",
         "type":"random",
         "requirements":[
            {
               "parameter":"mystery_dragons",
               "value":1,
               "comparison":"less"
            }
         ],
         "icon":"mysterydragons",
         "results":{
            "footstool_1":{
               "text":"You ask Bonacieux about the mural. He is carefully looking at the floor for traces of your prey when you speak, and he turns to look. \"Oh, goodness, I believe I recognise this\", he says. He stands, and brings the torch closer, revealing the colours better. You can see that the six shapes are colourful dragons, flying above a range of mountains and seas that are emerging from the lower creature\\'s arms. He grins happily. \"This appears to be a religious fresco...on etiological themes!\", he says. He seems to be quite excited, almost as though he has momentarily forgotten about the mission at hand. He coughs. \"Ah, that means \\'about how things came to be\\'\". You are aware of the worshippers of the First Dragon? That would be this lower figure. One of the older forms of that religion also worshipped six lesser dragons, who were created by the first dragon in order to watch over and maintain the world we live in now\", he explains. Now that you know what to look for, you can see that the lower figure does look a bit like an ambiguous dragon shape. </p>You ask Bonacieux what caused people to stop believing in the other six dragons. \"An interesting question, probably more appropriate for a history lesson than a cave dive. Sufficed to say, in the past they were worshipped quite fervently, but over time the religion was simplified and updated. I would love to discuss it at a more appropriate time. I am a scholar of religious studies after all\", he finishes. You nod, and get back to the mission at hand.",
               "outcomes":[
                  {
                     "parameter":"mystery_dragons",
                     "quantity":1,
                     "change":"set"
                  }
               ]
            }
         }
      },
      {
         "id":"deeper",
         "title":"Accursed Beast",
         "subtitle":"You begin to wander deeper into the catacombs, following Bonacieux\\'s lead. His powerful nose and honed tracking senses allow him to notice the slightest traces of claw marks and faded scents, which lead you closer to your target.</p>However, it is you that notices the creature first. You can sense it somehow, like a prickling feeling on your skin in one direction. It is staying back, out of the light of the torch, and moving slowly as it closes in on you. You motion to Bonacieux, and he nods. \"Accursed\", he whispers. It looks like you have a fight on your hands.",
         "type":"statcheck",
         "stat":"might",
         "difficulty":20,
         "requirements":[
            {
               "parameter":"b_supplies",
               "value":0,
               "comparison":"greater"
            },
            {
               "parameter":"priest_quest",
               "value":2,
               "comparison":"equal"
            }
         ],
         "icon":"default",
         "results":{
            "success":{
               "text":"You take up a fighting stance, and Bonacieux presses his back against the wall, before drawing a stub-nosed shotgun from a holster concealed under his jacket. The creature moves and shuffles, unwilling to enter into the light cast by the torch, but finally begins to crawl forward. Its skin glistens and shines in the light.</p>It appears to be a stag man. He prowls on all fours like a beast, but as he gets closer, he shifts up, standing on his hooves and staring towards you. He is covered in huge, rippling muscles, and his antlers are enormous. They curve and arch above his head, scraping against the stone walls as he moves. Every inch of his body, including his antlers, is an unnatural pitch black, which gleams and shines in the light, like oil. His enormous cock is rock hard between his legs, hanging rigid over his smooth black balls. His eyes, however, are bright shining white, without pupils.</p>He pauses in the torchlight, his enormous head turning left and right for a moment. Then, with no warning, he bursts forward with inhuman speed. You dodge aside with barely an inch to spare, his deadly antlers arcing through the space you had been only a moment before. He hits the wall and bounces back, turning for another blow. You duck under him, anticipating his trajectory, and unleash a bone-cracking blow directly to his exposed chest. His skin seems to sag and crunch like a sack of grain, and he grunts. You follow up with another hit to his face, sending it snapping backwards. With the creature\\'s neck exposed, Bonacieux swipes in and shoves his gun beneath its chin. With one loud, ear-ringing blast, it is all over.</p>The remains of the accursed slowly collapse into black slime, and begin to disappear. You look over to Bonacieux, and he shakes his head. \"This is not the presence I sensed. Our quarry lies yet deeper\", he says.",
               "outcomes":[
                  {
                     "parameter":"priest_quest",
                     "quantity":3,
                     "change":"set"
                  }
               ]
            },
            "fail":{
               "text":"You take up a fighting stance, and Bonacieux presses his back against the wall, before drawing a stub-nosed shotgun from a holster concealed under his jacket. The creature moves and shuffles, unwilling to enter into the light cast by the torch, but finally begins to crawl forward. Its skin glistens and shines in the light.</p>It appears to be a stag man. He prowls on all fours like a beast, but as he gets closer, he shifts up, standing on his hooves and staring towards you. He is covered in huge, rippling muscles, and his antlers are enormous. They curve and arch above his head, scraping against the stone walls as he moves. Every inch of his body, including his antlers, is an unnatural pitch black, which gleams and shines in the light, like oil. His enormous cock is rock hard between his legs, hanging rigid over his smooth black balls. His eyes, however, are bright shining white, without pupils.</p>He pauses in the torchlight, his enormous head turning left and right for a moment. Then, with no warning, he bursts forward with inhuman speed. You try to dodge, but despite your honed reactions, you cannot outpace this creature. Its antlers smash into you and knock you onto your belly, and then he is atop you, pinning your arms down at your sides as his smooth, shiny black head leers down atop you. You feel a long, thick tongue slide out from his mouth and slide over your head, tasting and touching you. Within moments, his thick black cock shoves its way into your ass, penetrating and stretching you. You feel his smooth slippery black body pressing down over you, engulfing and spreading over your skin.</p>His antlers move down from his skull like they are melting off, and begin to attach themselves to yours, as your eyes begin to glow. You grin, and pant, pushing yourself up with hands that are rapidly being coated in thick, firm rubberlike goo. You stand atop your mighty hooves and feel the weight of your enormous antlers as you snort. There is a wolf in front of you, making strange gestures with his hands. Predator. He thinks he can take you? You are superior. You will show him! You lunge forward, and the wolf twists his hand and pushes his palm towards you. You judder and gasp, suddenly frozen in place. \"Leave this form, beast! I, by the power of the wind and sky, command you to depart!\", he roars. You snarl and shake, but you feel your mighty black cock rise and harden. You grunt and pant as you start to cum, erupting enormous thick ropes of glistening black seed. They spurt and splatter in front of you, load after load, making you feel weaker and dizzier with every one. Gradually, the goo covering your arms and head recedes, as it is forced out from the beast\\'s black cock and rendered helpless and inert. You collapse to your knees as the stag\\'s cock itself rushes out and disappears in a rush of cum. Bonacieux takes your arm and lifts you up, a look of relief on his face. \"I am glad I was able to force the creature out of you in time. You appear unharmed, though I had to use up almost all of my magical components\", he says. You thank him, and try not to look at the enormous gleaming puddle of black cum that almost consumed you.",
               "outcomes":[
                  {
                     "parameter":"priest_quest",
                     "quantity":3,
                     "change":"set"
                  },
                  {
                     "parameter":"b_supplies",
                     "quantity":1,
                     "change":"sub"
                  }
               ]
            }
         }
      },
      {
         "id":"deeper_yet",
         "title":"A Complication",
         "subtitle":"As you navigate deeper into the catacombs, you see something you haven't experienced before. Emerging from the stone walls like the roots of some abominable tree are huge, glistening black tentacles. They twist and turn over the ceiling and disappear into another hole in the wall. Beyond it, more of the strange tentacles are visible.",
         "type":"statcheck",
         "stat":"stealth",
         "difficulty":20,
         "requirements":[
            {
               "parameter":"b_supplies",
               "value":0,
               "comparison":"greater"
            },
            {
               "parameter":"priest_quest",
               "value":3,
               "comparison":"equal"
            }
         ],
         "icon":"default",
         "results":{
            "success":{
               "text":"Bonacieux pauses as you approach the strange tentacles. He looks extremely concerned. \"Abominable. I cannot believe I underestimated the extent of the corruption so badly\", he whispers. They remind you of the tentacles you saw in the flooded caves east of the village, and you tell him so. He nods. \"Yes, I suspect they are the same. That is why I sealed off those caves in the first place. I was furious when the mayor began allowing people inside. This substance is concentrated magic, but polluted and corroded by being forcibly compressed. The accursed must have done this. We must not touch it\", he says.</p>You nod. The tentacles are huge and they hang chaotically through the corridors, but they move only very slowly. You are fairly certain you can handle this.</p>Bonacieux goes first, falling onto all fours and prowling through the tendrils with the slow, deliberate steps of a born predator. You follow as well, being cautious and on the lookout for any hidden or concealed tendrils. They get tighter and more dense as you descend, until finally, mercifully, they recede.</p>Beyond, is a vision from a painting of hell. The earth has been hollowed out to form an enormous round pit, surrounded by countless glistening tentacles. And around them in the distance, are innumerable hundreds of accursed, crawling over and around them. Bonacieux motions you to be silent. You are in grave danger.",
               "area":"above_abyss",
               "outcomes":[
                  
               ]
            },
            "fail":{
               "text":"Bonacieux pauses as you approach the strange tentacles. He looks extremely concerned. \"Abominable. I cannot believe I underestimated the extent of the corruption so badly\", he whispers. They remind you of the tentacles you saw in the flooded caves east of the village, and you tell him so. He nods. \"Yes, I suspect they are the same. That is why I sealed off those caves in the first place. I was furious when the mayor began allowing people inside. This substance is concentrated magic, but polluted and corroded by being forcibly compressed. The accursed must have done this. We must not touch it\", he says.</p>You nod. The tentacles are huge and they hang chaotically through the corridors, but they move only very slowly. You are fairly certain you can handle this.</p>Bonacieux goes first, falling onto all fours and prowling through the tendrils with the slow, deliberate steps of a born predator. You follow as well, ducking and weaving through the thick tentacles easily. You do not notice the tiny, small one that uncurls from the ground and slips up your leg. Not until it presses against your rear, and suddenly slides inside you.</p>Your eyes open wide in shock, but then slowly lid over as a warm, constant pleasure flows through you. You smile as you continue to move, not bothering to avoid the tentacles now. They feel cool and pleasant under your skin, leaving you be as they recognise you are already under their thrall. Bonacieux has quite the handsome ass, you think. You can see it moving and swaying as he crawls deeper. That big fluffy grey tail practically begging you to take him. You wonder how it would feel to rape him right now. Lunge forward when he isn\\'t looking, tear off those robes and slam him down against the tentacles as you pound his ass. Watch him get taken in every hole by the wonderful, sexy corruption, until he\\'s your whining, barking obedient slave.</p>You\\'d probably keep him on a leash, at your feet. Licking and nuzzling your gleaming, black shiny corrupted body. A stupid, sexy pet that you can do anything you want to. You grin and your eyes glow, making up your mind. As soon as he stands up, you are going to crush his mind and make him yours.</p>You crawl forward, out beyond the tentacles, but Bonacieux isn\\'t there. You look around with confusion, and suddenly something wraps a narrow cord around your neck from behind. \"Did you think a wolf would be unable to sense a predator at his rear?\", he growls. The cord starts to glow and feel hot. You struggle and squirm, trying to call out to your fellow accursed, to make them join you and put this worm in his place. As the heat grows more intense, you start to cough and gag. Something thick and slimy oozes out of your mouth, and Bonacieux crushes it under one paw. You blink and feel utterly sick. Bonacieux looks at you and grunts. \"It is fine. The corruption draws upon our unwanted inner thoughts. Had it afflicted me, I would likely have thought similar things. Let us continue\", he says. You nod, following but worrying that somewhere, deep inside, you still can feel a desire to rape and conquer him.",
               "area":"above_abyss",
               "outcomes":[
                  {
                     "parameter":"b_supplies",
                     "quantity":1,
                     "change":"sub"
                  },
                  {
                     "parameter":"cruel",
                     "quantity":1,
                     "change":"add"
                  }
               ]
            }
         }
      }
   ],
   "npcs":[
      {
         "id":"bonacieux",
         "name":"Bonacieux",
         "description":"Bonacieux is a tall and imposing grey wolf. In place of his usual robes he is wearing a tough and sturdy duster jacket, beneath which is a set of padded leather armour. You notice the design of the armour is unusual. It has long straps and ropes with strangely shaped reverse buckles, almost like it is designed to pop open if pushed from within.</p>Despite his otherwise sensible combat clothing, his large grey paws are still completely bare.",
         "icon":"priesticon",
         "dialogue":[
            {
               "input":"What is an accursed?",
               "output":"Some people call them demons, but I consider that to be applying needlessly supernatural themes to what is fundamentally an illness. When one abuses magic, particularly magic beyond the limits of what one\\'s body is trained to handle, it leaves a sort of residue inside a person. Not a physical residue mind you, more a sort of aura corruption that can be detected by magic. Traditionally this is called \"curse\", or \"malice\". Over time it can build up to the point where it begins to warp the body and unbalance a person\\'s mind. At this point it becomes a sort of reinforcement spiral of abusing magic and becoming more deranged, which causes more magical abuse.</p>Severely affected accursed in this area are usually imprisoned in these old catacombs, to prevent them from lashing out and hurting innocent people. Sadly, I know of no cure for the ailment."
            },
            {
               "input":"How did you find out about this?",
               "output":"I have been travelling the countryside for many years, searching for more information about the accursed. I have become something of a well-known hunter of the creatures, and I am proud to say that I have saved many people from the rampages of out-of-control beasts. I settled down here in Dormaus Valley because I believe something about this place is connected to the affliction. Perhaps something in the soil, or the air. I have yet to nail down any concrete information on the matter, but I am an expert in detecting the presence of powerful accursed, and I am sure there is a serious power developing beneath us."
            },
            {
               "input":"Where did these catacombs come from??",
               "output":"Oh you must not tempt me, I would love nothing more than to go into great detail on the burial practices of pre-Muscat Dormaus civilizations. Long story short, the people here believed that the dead, if buried unprotected in the soil of Dormaus Valley, would be cursed by a spirit of the earth to wander his kingdom forever, instead of passing on as they should. They called this mythical kingdom \"Tartarus\". These catacombs are made of thick, magic-resistant stone, carved further with magic resistant runes. They believed that interring the dead in such a place would protect them from the grip of the \"Lord of Bugs\". Over time it grew enormous and labyrinthine, and Dormaus Kingdom was built atop it. Until it all sank into the earth anyway."
            },
            {
               "input":"Do you do this sort of thing often?",
               "output":"Not as often as I used to! Age catches up with us all, I\\'m afraid. I had been intending to settle down and really focus on my ecclesiastical research, perhaps even try to make headway on a cure for the accursed. Of course, when I realised the extent of the danger below us, I had to reconsider my retirement."
            },
            {
               "input":"After this will you please just turn me into a wolf already?",
               "output":"Bonacieux bursts out laughing and covers his muzzle with his hand. \"Oh goodness! I am terribly sorry, I must seem like such a tease. Particularly for a person like yourself, I have noticed you seem to take to new forms with surprising ease\", he says. He pats your back. \"However, I do have a few old-fashioned ideas about the matter. For me, turning someone into a wolf is something you only do for people who are joining your pack, becoming a member of your family on a permanent basis. To do it for someone who does not intend to take on the soul of a wolf is considered disrespectful\", he continues. He strokes his chin. \"However, if you are serious about this, and considering your eagerness and bravery in agreeing to assist me, perhaps after this we could discuss the steps needed to become a wolf? Not temporarily, or with a sexual spell. For real, forever.\""
            }
         ]
      }
   ]
}