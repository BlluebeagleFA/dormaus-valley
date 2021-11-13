{
   "title":"cavernentrance",
   "header":"Entry to a Dark Cavern",
   "nomap":"These caves twist and bend unnaturally. It feels like the walls are shifting.",
   "subheader":"The light from outside barely reaches into the darkness of these caverns. From deep within, the sound of water echoes, and the air is as cold as ice.",
   "events":[
      {
         "id":"cavern_leave",
         "title":"Leave the Cavern",
         "subtitle":"This place has a very bad aura",
         "type":"random",
         "requirements":[
            
         ],
         "icon":"navigateicon",
         "results":{
            "success":{
               "text":"You sigh with relief as you walk back into the sunlight outside.",
               "area":"farmfield",
               "outcomes":[
                  
               ]
            }
         }
      },
      {
         "id":"fastenter_1",
         "title":"Leave No Stone Unturned (3 Supplies)",
         "subtitle":"It will be harder, and cost more supplies, but you may find better rewards",
         "type":"statcheck",
         "stat":"might",
         "difficulty":30,
         "requirements":[
            {
               "parameter":"digger",
               "value":0,
               "comparison":"greater"
            },
            {
               "parameter":"supplies",
               "value":2,
               "comparison":"greater"
            }
         ],
         "icon":"supplies",
         "results":{
            "success":{
               "text":"While caution and efficiency are very important, you want to get the most out of this trip as possible. You stop every few meters, hammering in pistons and setting up ropes for easy travel. You mount braziers on the walls using your extra torches, and you even take the time to carve rough steps into the trickier parts of the cave. Your efforts will make travelling back and forth vastly easier for other diggers. In addition, your attention to detail means that you identify a number of valuable ore deposits in the stone. You even find strange markings and carvings that might indicate a civilization once used this place. The writing is illegible, and the spiralling, sinuous carved drawings are far too water-damaged to understand, but it is still of some historical interest.",
               "area":"quartzcavern",
               "outcomes":[
                  {
                     "parameter":"supplies",
                     "quantity":3,
                     "change":"sub"
                  },
                  {
                     "parameter":"digger_progress",
                     "quantity":3,
                     "change":"add"
                  }
               ]
            },
            "fail":{
               "text":"While caution and efficiency are very important, you want to get the most out of this trip as possible. You stop every few meters, hammering in pistons and setting up ropes for easy travel. You mount braziers on the walls using your extra torches, and you even take the time to carve rough steps into the trickier parts of the cave. Or at least, that\\'s your intention. Unfortunately it seems you\\'re not quite up to the task. Your torches end up right under leaky wet sections of the stone, and are ruined. Your attempt to carve steps only ends up making some of the holes larger. All in all, you spend a lot of time and many of your supplies, only to end up no better off than you were before.",
               "area":"quartzcavern",
               "outcomes":[
                  {
                     "parameter":"supplies",
                     "quantity":3,
                     "change":"sub"
                  }
               ]
            }
         }
      },
      {
         "id":"mediumenter_1",
         "title":"Proceed Slowly (2 Supplies)",
         "subtitle":"The more effort you put in, the better reward you will get",
         "type":"statcheck",
         "stat":"might",
         "difficulty":25,
         "requirements":[
            {
               "parameter":"digger",
               "value":0,
               "comparison":"greater"
            },
            {
               "parameter":"supplies",
               "value":1,
               "comparison":"greater"
            }
         ],
         "icon":"supplies",
         "results":{
            "success":{
               "text":"You want to be efficient, but these caves could also hold mysteries that would be of value or interest. As you move, you place markers and hammer pistons into the wall, so that you can find your way back and forth more easily. It\\'s dangerous, but will be more rewarding. You note with interest that there are crystals hidden in the stone. Sometimes when you hammer your pistons in, they are revealed and gleam appealingly. You make a careful note to fetch some on your way back.",
               "area":"quartzcavern",
               "outcomes":[
                  {
                     "parameter":"supplies",
                     "quantity":2,
                     "change":"sub"
                  },
                  {
                     "parameter":"digger_progress",
                     "quantity":2,
                     "change":"add"
                  }
               ]
            },
            "fail":{
               "text":"You want to be efficient, but these caves could also hold mysteries that would be of value or interest. As you move, you place markers and hammer pistons into the wall, so that you can find your way back and forth more easily. It\\'s dangerous, but will be more rewarding. Unfortunately, you overestimate your own skill. As you are hammering into one section of the wall, there is a threatening rumble from above. Cracks skitter across the stone, and you leap away for safety moments before rocks come crashing down from above. You\\'ve caused a cave in, and lost all of the supplies you had been holding while you hammered. You will have to backtrack and spend more supplies to make up the time.",
               "area":"quartzcavern",
               "outcomes":[
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
         "id":"lowenter_1",
         "title":"Just Get Through (1 Supplies)",
         "subtitle":"You won't get as good rewards, but you risk less",
         "type":"statcheck",
         "stat":"might",
         "difficulty":20,
         "requirements":[
            {
               "parameter":"digger",
               "value":0,
               "comparison":"greater"
            },
            {
               "parameter":"supplies",
               "value":0,
               "comparison":"greater"
            }
         ],
         "icon":"supplies",
         "results":{
            "success":{
               "text":"You start to descend into the caves. The stone is wet and cold, so you have to be careful where you place your feet, in case you slip. In addition, there are many sudden pitfalls that are hard to see in the gloom, even with your lights. You stop at one and set up a rope, before carefully grappeling down it. Before long, you find yourself in a new larger area, deep within the caves.",
               "area":"quartzcavern",
               "outcomes":[
                  {
                     "parameter":"supplies",
                     "quantity":1,
                     "change":"sub"
                  },
                  {
                     "parameter":"digger_progress",
                     "quantity":1,
                     "change":"add"
                  }
               ]
            },
            "fail":{
               "text":"You start to descend into the caves. The stone is wet and cold, and when you place your feet down, you find yourself slipping. You stumble and fall, sliding along a crevasse. You barely catch yourself just before you would have tumbled into a pitch-black abyss. Unfortunately, your supplies are not so lucky. Some of them fall from your pack and disappear into the darkness.",
               "area":"quartzcavern",
               "outcomes":[
                  {
                     "parameter":"supplies",
                     "quantity":1,
                     "change":"sub"
                  }
               ]
            }
         }
      },
      {
         "id":"slime_m",
         "title":"Mysterious Slime?",
         "subtitle":"Something drips from the ceiling, making a quiet plop sound. You turn to look, and for a moment see the shine of something green. There is another drip, and you look for the source. You find a strange sight – a patch of glistening, thick green slime, clinging to the ceiling. It shines in the dim light, and smells very odd. A sort of musky, sexual scent, like very thick cum. Do you get closer?",
         "type":"random",
         "requirements":[
            {
               "parameter":"species",
               "value":11,
               "comparison":"nequal"
            },
            {
               "parameter":"gender",
               "value":1,
               "comparison":"equal"
            }
         ],
         "icon":"tffetish",
         "results":{
            "mikhailsex":{
               "text":"You walk closer, and reach your hand up to gently touch the bulbous, thick part of the slime at the center. It is very soft and sticky, and it oozes along your finger. You withdraw it, and the slime stretches when you pull your hand back. When you shake it, hoping that it will fall off, it instead just spreads further, slowly moving along your hand and engulfing it completely in shiny green slime.</p>You start to feel concerned, and try to wipe the slime off with your other hand, but it just spreads to there too. It feels weird on your skin, like its clinging to you and growing warm. When you flex your hands, it covers your fingers perfectly, like your whole hand is made of green goo. In fact, you think you can see through your own palm! With trembling hesitation, you slowly push your finger against your hand. Slowly, your goo finger moves through your flesh, and out the other size. Your hand is completely slime!</p>All the while, the slime has been crawling up your arms. You feel wet and messy, and you shudder as it starts to cover your chest. The sexual stink of the slime is starting to turn you on, but your cock is acting oddly. Instead of getting hard, it\\'s just leaking enormous amounts of pre. You look down and smear the pre, only to see that it is thick, green slime. Your cock shrinks as it gushes slime, but the slime starts to stand up and rise into a glistening, bouncy green pillar. You squeeze the strange goo-cock, and gasp with pleasure.</p>It feels so much better than your old dick did! As you pump it, your human dick melts away into the slime. </p>You start to drool, your saliva thick and salty and musky. It\\'s soaking your chin and chest. You feel something like butterflies in your stomach, as your insides start to melt and turn to goo. Your heartbeat stops, your lungs no longer need to breathe. Your chest is a big pear-shaped shiny ball of slime. Your legs feel weak and wobbly, and they start to sink and melt, turning into an indistinct blob. You twist and adjust yourself, rising up on the blob in a shape sort of like a slug with a goopy human torso atop it.</p>The slime from your mouth starts to crawl around your head, sinking into your flesh, covering you completely. You close your eyes, and when you reopen them, everything is slightly green-tinted. Your feel two goo antennae pop and grow from the top of your head, and you grin a dumb, happy smile as your brain becomes just more sticky smelly happy slime.",
               "descriptionchange":"This adventurer is a huge slime creature. Sort of a slime-slug-centaur, they have a sluglike lower body made of green goo, with a humanoid torso atop it, made completely of see-through slime. Their head has two antennae, and they have a stupid happy grin on their face.",
               "outcomes":[
                  {
                     "parameter":"species",
                     "quantity":11,
                     "change":"set"
                  }
               ]
            }
         }
      },
      {
         "id":"slime_f",
         "title":"Mysterious Slime?",
         "subtitle":"Something drips from the ceiling, making a quiet plop sound. You turn to look, and for a moment see the shine of something green. There is another drip, and you look for the source. You find a strange sight – a patch of glistening, thick green slime, clinging to the ceiling. It shines in the dim light, and smells very odd. A sort of musky, sexual scent, like very thick cum. Do you get closer?",
         "type":"random",
         "requirements":[
            {
               "parameter":"species",
               "value":11,
               "comparison":"nequal"
            },
            {
               "parameter":"gender",
               "value":2,
               "comparison":"equal"
            }
         ],
         "icon":"tffetish",
         "results":{
            "mikhailsex":{
               "text":"You walk closer, and reach your hand up to gently touch the bulbous, thick part of the slime at the center. It is very soft and sticky, and it oozes along your finger. You withdraw it, and the slime stretches when you pull your hand back. When you shake it, hoping that it will fall off, it instead just spreads further, slowly moving along your hand and engulfing it completely in shiny green slime.</p>You start to feel concerned, and try to wipe the slime off with your other hand, but it just spreads to there too. It feels weird on your skin, like its clinging to you and growing warm. When you flex your hands, it covers your fingers perfectly, like your whole hand is made of green goo. In fact, you think you can see through your own palm! With trembling hesitation, you slowly push your finger against your hand. Slowly, your goo finger moves through your flesh, and out the other size. Your hand is completely slime!</p>All the while, the slime has been crawling up your arms. You feel wet and messy, and you shudder as it starts to cover your chest. The sexual stink of the slime is starting to turn you on, but your pussy is acting oddly. Instead of getting warm and wet, it\\'s just leaking enormous amounts of green goo. It spreads and coats your body, and becomes a sensitive, slippery hole inside you, desperate to be filled with slimy messy things. It feels strangely much more sensitive and pleasurable than your old one!</p>You start to drool, your saliva thick and salty and musky. It\\'s soaking your chin and chest. You feel something like butterflies in your stomach, as your insides start to melt and turn to goo. Your heartbeat stops, your lungs no longer need to breathe. Your chest is a big pear-shaped shiny ball of slime. Your legs feel weak and wobbly, and they start to sink and melt, turning into an indistinct blob. You twist and adjust yourself, rising up on the blob in a shape sort of like a slug with a goopy human torso atop it.</p>The slime from your mouth starts to crawl around your head, sinking into your flesh, covering you completely. You close your eyes, and when you reopen them, everything is slightly green-tinted. Your feel two goo antennae pop and grow from the top of your head, and you grin a dumb, happy smile as your brain becomes just more sticky smelly happy slime.",
               "descriptionchange":"This adventurer is a huge slime creature. Sort of a slime-slug-centaur, they have a sluglike lower body made of green goo, with a humanoid torso atop it, made completely of see-through slime. Their head has two antennae, and they have a stupid happy grin on their face.",
               "outcomes":[
                  {
                     "parameter":"species",
                     "quantity":11,
                     "change":"set"
                  }
               ]
            }
         }
      },
      {
         "id":"naga_m",
         "title":"A Serpentine Treasure...",
         "subtitle":"As you explore the cold caverns, you notice a dark crevice not visible from the entrance. When you try to focus your eyes to look inside, you see a flash of something almost golden and feel an intense desire to walk into the darkness. Do you follow your instincts and walk into the dark? (Guest event from CJMPinger)",
         "type":"random",
         "requirements":[
            {
               "parameter":"species",
               "value":12,
               "comparison":"nequal"
            },
            {
               "parameter":"gender",
               "value":1,
               "comparison":"equal"
            }
         ],
         "icon":"tffetish",
         "results":{
            "mikhailsex":{
               "text":"You start stepping forward into the cave almost mechanically, your legs moving on their own. When you get about halfway, you freeze. You stand there stiff as a board. Out of the darkness, slithers a large serpentine creature. As soon as you see it you feel an immense calmness. The serpent like creature in front of you resembles a cobra with black, almost light absorbing scales, and brightly reflective golden scales adorning into a curving, complex pattern flowing from the wide hood down to the end of the long body. In all ways it resembles an extremely large snake, except its “top half” which resembles a muscular human torso with large muscular arms. Below the torso, emerging from a scaly slit, are two large reptilian erections, each dripping with precum. But the only thing you truly notice is his enrapturing eyes. They are reptilian, with specks of gold, black, and purple around the slitted iris. You began to lose yourself in the depths of those eyes.</p>As you stare blankly into his eyes, a voice begins to speak in your head. “You are sssafe with me brother…” Before your mind barely even begins to comprehend what you heard, the Naga breaks eye contact and moves extremely fast, beginning to wrap you tight in his coils. When you feel the scales slide along your skin, you shudder as intense pleasure courses through you. Inside your mind, you hear more words reinforcing what you feel. “Thisss isss where you truly belong, sssibling. Wrapped sssafely in my ssstrong, protective coilsss…” You don’t even feel it when both of his cocks enter your asshole, or when his fangs bite into your shoulder injecting some sort of venom, leaving no pain and only a faint wound.</p>While wrapped in his coils, your body begins to change unawares to you. Your legs start stretching out much longer than anatomically possible. From the bite wound, the skin starts turning into smooth dark scales, the muscles underneath bulking up and becoming stronger. Your head starts reforming into a snake like visage with slitted eyes and a large hood. Below as the scales begins to reach the crotch, your dick, hard with lust, recedes into a newly formed slit. Seconds after it fully receded back a hemipenes slides out, more sensitive than before, reacting to the sliding scales against it with spurts of cum. The last of the changes to fall on your body, as the scales advance along the legs, is the merging of the legs. Slowly the legs blend together, until finally there is only a long prehensile tail covered in smooth scales.</p>While this all happens, the larger Naga continues pumping his hemipenes into you, shifting his coils as needed to let the changes continue. Inside your mind, you hear him speak more and more until your thoughts completely mirror his. “We are good sssiblingsss…” “We are perfect beingsss…” “Perfect ssspecimensss…” After about an hour of the larger Naga rutting inside of you, you feel him climax, and inside you feel happy. Warm cum flows out of you, and you lay exhausted upon the ground. The last thing you see before you fall asleep, is the hooded head of the other Naga looking down at you, smiling.</p>Hours later you awake, in the same cave before, but instead alone and cold in the dark. Your thoughts are back to being your own, but deep within you, you feel a loneliness of your brother abandoning you. The only signs that he was here that remained was the mess of dried, sticky cum on you and the ground, and your new scaly body. You try to lift yourself up and walk, or rather slither, out from this hiding place. It will take time to get used to this new body.",
               "descriptionchange":"This adventurer is a muscular naga, a powerful human with the lower body of a mighty snake. Their snake half is covered in beautiful, smooth scales.",
               "outcomes":[
                  {
                     "parameter":"species",
                     "quantity":12,
                     "change":"set"
                  }
               ]
            }
         }
      },
      {
         "id":"naga_f",
         "title":"A Serpentine Treasure...",
         "subtitle":"As you explore the cold caverns, you notice a dark crevice not visible from the entrance. When you try to focus your eyes to look inside, you see a flash of something almost golden and feel an intense desire to walk into the darkness. Do you follow your instincts and walk into the dark? (Guest event from CJMPinger)",
         "type":"random",
         "requirements":[
            {
               "parameter":"species",
               "value":12,
               "comparison":"nequal"
            },
            {
               "parameter":"gender",
               "value":2,
               "comparison":"equal"
            }
         ],
         "icon":"tffetish",
         "results":{
            "mikhailsex":{
               "text":"You start stepping forward into the cave almost mechanically, your legs moving on their own. When you get about halfway, you freeze. You stand there stiff as a board. Out of the darkness, slithers a large serpentine creature. As soon as you see it you feel an immense calmness. The serpent like creature in front of you resembles a cobra with black, almost light absorbing scales, and brightly reflective golden scales adorning into a curving, complex pattern flowing from the wide hood down to the end of the long body. In all ways it resembles an extremely large snake, except its “top half” which resembles a muscular human torso with large muscular arms. Below the torso, emerging from a scaly slit, are two large reptilian erections, each dripping with precum. But the only thing you truly notice is his enrapturing eyes. They are reptilian, with specks of gold, black, and purple around the slitted iris. You began to lose yourself in the depths of those eyes.</p>As you stare blankly into his eyes, a voice begins to speak in your head. “You are sssafe with me sssissster…” Before your mind barely even begins to comprehend what you heard, the Naga breaks eye contact and moves extremely fast, beginning to wrap you tight in his coils. When you feel the scales slide along your skin, you shudder as intense pleasure courses through you. Inside your mind, you hear more words reinforcing what you feel. “Thisss isss where you truly belong, sssibling. Wrapped sssafely in my ssstrong, protective coilsss…” You don’t even feel it when both of his cocks enter your asshole, or when his fangs bite into your shoulder injecting some sort of venom, leaving no pain and only a faint wound.</p>While wrapped in his coils, your body begins to change unawares to you. Your legs start stretching out much longer than anatomically possible. From the bite wound, the skin starts turning into smooth dark scales, the muscles underneath bulking up and becoming stronger. Your head starts reforming into a snake like visage with slitted eyes and a large hood. Below as the scales begins to reach the crotch, your pussy, dripping with a lust, changes. It becomes thinner and more sensitive, reacting to the scales rubbing against it with cum flowing out onto the ground. The last of the changes to fall on your body, as the scales advance along the legs, is the merging of the legs. Slowly the legs blend together, until finally there is only a long prehensile tail covered in smooth scales.</p>While this all happens, the larger Naga continues pumping his hemipenes into you, shifting his coils as needed to let the changes continue. Inside your mind, you hear him speak more and more until your thoughts completely mirror his. “We are good sssiblingsss…” “We are perfect beingsss…” “Perfect ssspecimensss…” After about an hour of the larger Naga rutting inside of you, you feel him climax, and inside you feel happy. Warm cum flows out of you, and you lay exhausted upon the ground. The last thing you see before you fall asleep, is the hooded head of the other Naga looking down at you, smiling.</p>Hours later you awake, in the same cave before, but instead alone and cold in the dark. Your thoughts are back to being your own, but deep within you, you feel a loneliness of your brother abandoning you. The only signs that he was here that remained was the mess of dried, sticky cum on you and the ground, and your new scaly body. You try to lift yourself up and walk, or rather slither, out from this hiding place. It will take time to get used to this new body.",
               "descriptionchange":"This adventurer is a muscular naga, a powerful human with the lower body of a mighty snake. Their snake half is covered in beautiful, smooth scales.",
               "outcomes":[
                  {
                     "parameter":"species",
                     "quantity":12,
                     "change":"set"
                  }
               ]
            }
         }
      }
   ],
   "npcs":[
      
   ]
}