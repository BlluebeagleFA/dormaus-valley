{
   "title":"bar_rooms",
   "position":[
      0.72,
      0.71
   ],
   "header":"The Fur and Feather Stalls",
   "subheader":"From here, you can look down at the main area of the bar, past a wooden banister. This raised area is up the stairs and slightly darker. Several wooden tables are arranged below the mounted heads of strange beasts.",
   "events":[
      {
         "id":"bar_gamble",
         "title":"Gamble With Ace",
         "subtitle":"Ace the coyote is sitting at his usual spot, one of his boots up on the table. He has a pack of playing cards fanned out on the stained wood of the table, and he nudges up his cowboy hat as you approach, before giving you a wink. </p>\"Howdy partner. Up for a little wager?\" he says in his masculine drawl.",
         "type":"statcheck",
         "stat":"charm",
         "difficulty":10,
         "requirements":[
            {
               "parameter":"chips_1",
               "value":9,
               "comparison":"greater"
            },
            {
               "parameter":"ace_missing",
               "value":1,
               "comparison":"less"
            }
         ],
         "icon":"chips_1",
         "results":{
            "success":{
               "text":"For hand after hand, you keep your poker face calm. You use what you know of people to watch Ace carefully, and you notice that his ear wiggles slightly when he has a good hand. After that, you are soon victorious. Ace grins with surprise, and props his boots up on the table. You notice something a little different about them. One of his boots is white with black dalmation stripes, and the other is tiger-print. He grins when you notice. </p>\"Don\\'t worry, they had it coming. Don\\'t spill beer on a man\\'s boots.\" he says. </p>You see the boots wiggle and twitch slightly. From the rumors you\\'ve heard about Ace\\'s legendarily rank and smelly paws, you imagine those two are regretting their rudeness. The coyote tosses you something, and you catch a dusty, muddy pair of leather cowboy boots. They are soaked in booze, but the stink of ale is overpowered by a musky, masculine stench of sweat and hard work. It\\'s so potent that you feel quite dizzy, though you have a bizarre urge to shove your nose in them and breathe deep. </p>\"You can keep these old ones, partner. Should cover the cost of my chips. They were two folks too, once, but after a while they fade and turn to good, brown leather. Perfect for adventurers like us.\" he says. You take them, and leave with mixed feelings about such a \\'punishment\\'.",
               "outcomes":[
                  {
                     "parameter":"ace_boots",
                     "quantity":1,
                     "change":"add"
                  }
               ]
            },
            "fail":{
               "text":"At first, you think you are doing well. You win a few hands, and lose a few, but you\\'re holding your own. That is, until Ace props his boots up on the table. A scent starts to flow across the table. It\\'s thick, and musky, and sweaty. A ripe stink of masculine power and dirty unwashed drifter feet. Only a little is oozing from his boots, but it\\'s enough to constantly drag your attention away.</p>You\\'re staring at his boots when he snaps his fingers and grins at you. \"Looks like you\\'ve run dry, partner\", he says. You realise you just lost your entire stake.",
               "outcomes":[
                  {
                     "parameter":"chips_1",
                     "quantity":10,
                     "change":"sub"
                  }
               ]
            }
         }
      },
      {
         "id":"bar_gamble2",
         "title":"Gamble Without Chips",
         "subtitle":"Ace the coyote is sitting at his usual spot, one of his boots up on the table. He has a pack of playing cards fanned out on the stained wood of the table, and he nudges up his cowboy hat as you approach, before giving you a wink. </p>\"Howdy partner. Up for a little wager?\" he says in his masculine drawl.",
         "type":"random",
         "requirements":[
            {
               "parameter":"species",
               "value":3,
               "comparison":"nequal"
            },
            {
               "parameter":"ace_missing",
               "value":1,
               "comparison":"less"
            }
         ],
         "icon":"chips_1",
         "results":{
            "mousetf":{
               "text":"You agree, and take a seat opposite from the tall canine. He lowers his boots and deals you some cards, sending them sliding across the table with graceful flicks of his wrist. </p>\"Texas hold \\'em. I got no need for money, so I think we\\'ll bet...height! You lose, you shrink.\" The grin on his long muzzle suggests that he knows something you don\\'t know. You look at your cards, a two and a five. Naturally, Ace has two aces. Then on the next hand, you have a pair of fours, and Ace gets a straight. </p>Over and over, the coyote gets a perfect high-value hand, and you get trash. With each hand, you shrink a little more, your clothes becoming baggy and loose on your diminished body. </p>When you shrink below three feet tall, your skin starts to tingle and itch as it grows soft white fur. Your ears widen and stretch, becoming round and large atop your head. You squeak with indignation, and have to clamber up onto the table to be able to see the cards. A long tail starts to grow from your rear, pink and furless, and your face pushes out into a pointy little muzzle. </p>You look down at yourself, a cute, naked little white mouse, with small pink paws, a long tail and twitching whiskers, and you kick one of the cards in frustration. You accuse Ace of cheating, and he laughs. </p>\"And whatcha\\' gonna do about it, partner?\" He leans forward, grabs you by the tail, and dangles you over his muzzle as you kick and struggle in the air, helpless in his grip. Just when you fear he might open his mouth and swallow you whole, he tosses you to the floor, and you have no choice but to leave in your tiny new form.",
               "descriptionchange":"This adventurer is a tiny white mouse.",
               "outcomes":[
                  {
                     "parameter":"species",
                     "quantity":3,
                     "change":"set"
                  }
               ]
            }
         }
      },
      {
         "id":"cockvore",
         "title":"Bet Your Body With Ace",
         "subtitle":"Perhaps if you don\\'t want to risk your chips, Ace would take your body as collateral? If you lose, you\\'re lunch.",
         "type":"random",
         "requirements":[
            {
               "parameter":"ace_missing",
               "value":1,
               "comparison":"less"
            }
         ],
         "icon":"vorefetish",
         "results":{
            "grizzpay":{
               "text":"You sit down, and start playing poker with Ace once more. The cards fly, the river runs, and you\\'re doing well. So well, in fact, that you give Ace a cocky grin, slam your cards down, and tell him you\\'re so confident that you\\'d be willing to bet your entire body against him in this hand. If you lose, he can eat you. The coyote grins widely, his teeth gleaming. \"Is that so, partner? Turns out I just had some food. Cock food, that is. Nice little corgi by the name a\\' Zeke.\", he says with a smug drawl. He leans back on his chair, revealing what he\\'s been hiding under the table. His pants are off, and his furry coyote balls are enormously swollen. They\\'re bulging as big as watermelons, and as you watch, they bulge and shift a little, like something inside is struggling and moving. Slowly, the struggles subside, and his balls shrink a little more. \"Ah reckon he\\'s just about done though, so I think I got room for you too\", he says.</p>You suddenly feel a little less confident about this bet, but it\\'s too late to back down now. You reveal your cards - an ace and a king, going with the cards on the table making that two pairs. A good hand, to be sure. Then Ace reveals his own cards; two jacks. One pair versus two, surely you\\'re in luck. Then he turns over the final card on the table...to reveal a jack. \"Bad luck, partner. Three of a kind beats two pair. Looks like there\\'s another pair in your future - a pair of my balls\", he says with a chuckle.</p>The coyote steps up onto the table and walks over the cards, looming over you. You stammer and try to back away, but as you look up at the thick, heavy cotote cock and pendulous musky furry balls above you, you start to feel light headed and slow. The powerful, beastly stink of Ace\\'s balls flows over you, the strong masculine smell of a powerful predator. It makes you freeze up like a rabbit under the glare of a fox. Ace grabs you by your shoulders, and pulls you in closer to his crotch. His cock pushes against your head, and starts to grow and stretch as his slit opens up and slowly engulfs your head. Thick, slippery pre oozing from his bulging cock lubricates the way, as your face is pushed into slimy wet darkness. You feel his cock sliding down over your shoulders, pinning your arms to your sides. You are tugged in deeper, and deeper, squeezed tightly on all sides as you are devoured. Pre soaks your face and chest, and you feel your hips and legs get drawn in too. Soon, your whole body is engulfed by Ace\\'s cock, and you are forced deeper and deeper inside him. You feel yourself sliding down into his body, until you are pushed out into a new space, one that stretches and grows heavy and huge to fit you. You are curled up tightly in a ball inside the warm, dark caverns of Ace\\'s ballsack. Cum is all around you, soaking into your body, covering your face and getting into your mouth and in every crevice of your body.</p>You feel Ace sitting back down, and spreading his legs aside his new heavily swollen balls. His hands pushes against the outside of his ballsack, massaging and rubbing against you. You feel yourself starting to feel sticky and weak. Cum seems to be oozing out of you from every pore in your body. You can taste it in the back of your throat, and in your nose. Your flesh is turning whiter and paler, your entire body slowly digesting and transforming into more hot, thick sticky coyote cum. You try to struggle, but your limbs are goopy and soft. The more you move, the more you just sink and mix yourself into the cum all around you, splooshing it around and losing more of your definition. Your legs and arms melt and gloop down, falling apart into cum. Finally your face starts to lose its shape, and you struggle and gasp once more before all you can see, and think, is cum.</p>With your entire body now just mindless, sticky cum, Ace keeps you around for a few hours, enjoying the fullness in his balls. Then he starts to stroke and pump his cock, feeling his massive balls jiggle and bounce. The dirty coyote grunts and flexes his toes in his boots, before growling and panting with lust, as he unloads an enormous gushing jet of cum that arcs up into the air and splatters down over the floor and walls in bucketloads. Load after load slams over the room, coating everything in dripping musky jizz, until finally he\\'s pumped out every last drop of you, leaving you nothing but a mess in the bar room casino.",
               "trapped_desc":"The walls of this room are stained with massive amounts of cum.",
               "trapped":"You are nothing but a messy splatter of cum dripping down the walls.",
               "outcomes":[
                  
               ]
            }
         }
      },
      {
         "id":"bar_random",
         "title":"Watch the Gamblers",
         "subtitle":"People come and go at the gambling tables regularly.",
         "type":"random",
         "requirements":[
            {
               "parameter":"ace_missing",
               "value":1,
               "comparison":"less"
            }
         ],
         "icon":"default",
         "results":{
            "Bandit Dog":{
               "text":"There\\'s a new visitor to the bar today. A tall and hairy human, with a scar over his eye and a huge beard. His belly is round and large, but rock hard, and his shirtless torso is covered in thick, dark body hair. He\\'s talking with a gruff voice to a thin and scrawny guy, and you catch the end of it as you approach. \"Yarr, can\\'t have a bandit who falls asleep on duty, lad! Yer gettin\\' demoted, permanently.\" he says. </p>The other man tries to protest, but all that comes out is a loud, deep bark. He covers his face in shock as his mouth and nose pushes forward into a furry muzzle. His ears grow larger and flop down, and brown fur begins to flow over his skin. He barks again, stumbling on his feet as they grow longer, and then falls to all fours. His hands clutch together and shift, forming claws and pads as they become dog\\'s paws. His wriggles and struggles cause him to slip free of his clothes, and a furry tail grows from his rear. He whimpers and whines, but the huge bandit grabs him by the scruff of his neck and drags him forward, shoving his sensitive nose into his sweaty crotch. </p>The dog looks shocked for a moment, then his tail starts to wag as his eyes darken into big, brown, ordinary dog eyes. \"There. Loyal mutts don\\'t fall asleep on duty.\", the bandit says. You wonder if his crotch musk has that effect on humans, too. He won\\'t be needing his spare chips, so you grab them.",
               "outcomes":[
                  {
                     "parameter":"chips_1",
                     "quantity":5,
                     "change":"add"
                  }
               ]
            },
            "Dog Poker":{
               "text":"It looks like Ace is playing poker with an entire team of adventurers. A male and female warrior, and a tall mage, are all chatting together and dealing chips while they play. You watch for a moment, and see that the humans\\' ears are starting to stretch up, growing pointed and developing fur. Their skin sprouts hairs all over, thickening into pelts. Grey, brown, and orange. They don\\'t seem to notice, even as they push forward their chips with hands that are becoming clawed and the palms padded with black pawpads. One of them barks and howls, and you see tails pushing out from the holes in the backs of the chairs and start to wag. </p>In a few minutes, there are four canines all playing poker together, and you are reminded a little of a painting you once saw. Ace winks at you and tosses you a few spare chips to keep quiet.",
               "outcomes":[
                  {
                     "parameter":"chips_1",
                     "quantity":5,
                     "change":"add"
                  }
               ]
            }
         }
      },
      {
         "id":"ace_piss",
         "title":"Ace's Piss",
         "subtitle":"Ace keeps glancing towards the bathroom.",
         "type":"random",
         "requirements":[
            {
               "parameter":"pisscurse",
               "value":0,
               "comparison":"greater"
            },
            {
               "parameter":"ace_missing",
               "value":1,
               "comparison":"less"
            }
         ],
         "icon":"aceicon",
         "results":{
            "grizzpay":{
               "text":"Ace is shifting uncomfortably in his seat, and glancing over to the bathroom. When he does though, he sees you, and a grin stretches across his muzzle. “Howdy, you are just what I need. How about a game? Loser has to drink the winner\\'s piss.” he says in his southern drawl. You try to refuse that absurd gamble, but instead your mouth opens up and you find yourself shouting yes, with obvious desperation. You sit down at the table, shaking slightly, as Ace deals the cards. By the time the river has been played, you can see that you have an almost unbeatable hand. A royal flush! Thinking of flush just makes you think of hot, wet piss, flowing down over your face, however. By the time you shake your thoughts back to normal, you realise you have folded and surrendered the game. Ace chuckles, and reveals that his own hand was worthless trash. “Guess I bluffed ya, partner. Now get under the table, I got me a barrel to empty.” he says.</p>You get on your knees and crawl under the table, until your face is next to Ace\\'s dirty leather breeches. You unbuckle his belt and pull them down, allowing his thick and warm cock to flop out, where it lands against your face. You inhale his sweaty coyote stink, before opening your mouth and sliding it over his shaft, with your face pressed firmly into his furry crotch. He holds one of his gloved hands on your head, and sighs as he relieves his swollen bladder. You gulp down his hot, steaming piss, every drop of it nasty and sharp on your tongue. He doesn\\'t let you move until you drink every bit of it though, using you as his own portable urinal. When he pulls free and buckles his pants back up, you are left with a belly that is gurgling and sloshing with coyote piss.",
               "outcomes":[
                  
               ]
            }
         }
      },
      {
         "id":"meek_1",
         "title":"Ace Cuddle (Contributed by Meek)",
         "subtitle":"An unmistakable scuzzball is sipping a drink in a shadowed corner of the bar. When he catches you looking, Ace tips his hat up to look back. When he does you can immediately tell he’s had more than a few drinks. “Now there’s a pretty picture,” he whistles at you crudely. “C’mon to papa.”",
         "type":"random",
         "requirements":[
            {
               "parameter":"ace_connection",
               "value":2,
               "comparison":"greater"
            }
         ],
         "icon":"aceicon",
         "results":{
            "success":{
               "text":"Not wanting to catch more stares than you are already, you sit in the booth next to Ace. He grins and scoots so you’re touching shoulders. “Thank ya darlin,” he drawls. “If ya took any longer... I would’ve used my feet to call ya instead.” He grins, every breath smelling like whiskey. Emphasizing the point, he strokes one of his boots against your leg.</p></p>“I’ve been thinkin’ about ya,” he continues. “I’m real glad you’re here...” The foot brushing your leg turns into a clingy coyote pushing himself into your lap. You don’t know how it happened, but Ace has his arms draped over your shoulders and his legs straddling you.</p>Ace’s cool nose presses against your neck. You can feel the slight dog slobber from his lips and chin.</p></p>Seriously, what the hell is going on? </p></p>You look to Grizz for explanation but the bear’s busy doing his job. Ace rumbles and keeps his whole body tightly against you. His fur isn’t soft, but it feels good in its own way. The texture reminds you this isn’t some domesticated dog--the coyote is a wild animal.</p></p>By your adventures you’ve learned to sense when something’s abnormal. While you unsuccessfully try to peel him away, you ask if everything’s okay. Ace growls like a puppy losing his favorite toy. “Uh-huh,” Ace replies. “I’m good...” He breathes your scent in. “I’m not that drunk... Relax.” He says, trying to sound as not plastered as he can.</p></p>You find yourself cuddling up with the coyote. His arms are snaked around you and yours hug him tightly. Ace’s ears remain folded against his head while he squeezes you. He’s warm, like the desert of his hometown. There’s a definite comfort in the embrace. You want to ask Ace what the problem is, but you realize he may be getting the same solace from you.</p></p>Don’t press the issue. It’s not like you have anything else to do, and Ace isn’t keen on stopping either. It’s nice. Enjoy it. If he wants to talk, he will.</p></p>Its easy to keep the coyote satisfied with drunken cuddles, but for your troubles, Grizz passes you a free drink. Whether that or Ace’s signature musk, you find yourself relaxing. The coyote grumbles and nuzzles you with inebriated need. A bit of time passes, but you do get some information out of Ace.</p></p>“I’m so fucking scared,” Ace says, half-asleep. That certainly catches your attention, but not wanting to make it worse, you ask about it gently.  Ace shakes his head blearily, eyes bloodshot from the booze. “If I...” He grips tighter, closing those tired eyes. “It’s not me... It’s not me...”</p></p>He repeats those incoherent murmurs for a bit. You ask Ace what he means, but the coyote’s passed out in the bar booth.</p></p>He snores like a dipshit. Grizz’s words, not yours. The bear uses his barbaric strength to easily separate you from Ace, and says he’ll have Ace escorted to a room next door. You ask about what Ace was saying, but Grizz’s face remains ever-stoic.</p></p>“Every day someone’s itchin’ to change ya.” Grizz grunts. “Body and mind.” He exits with the dozing coyote in his burly arms. </p></p>The bar is unattended. You watch a sneaky squirrel slip behind the counter, but when he tries to sip from the beer hose, it comes to life and coils him. The squirrel struggles and gurgles as the alcohol tube blasts into his mouth, expanding his belly like a water balloon. In no time, the squirrel’s eyes are glossy and unthinking. He drinks mindlessly. Soon his beer belly outgrows him.</p></p>Grizz must’ve been including himself in what he said. Hrm.",
               "outcomes":[
                  
               ]
            }
         }
      }
   ],
   "npcs":[
      {
         "id":"ace",
         "name":"Ace",
         "requirements":[
            {
               "parameter":"ace_missing",
               "value":1,
               "comparison":"less"
            }
         ],
         "description":"Ace is a coyote with a long smirking muzzle. His face is obscured by his cowboy hat, and sometimes he likes to toy and juggle with a gleaming knife.",
         "icon":"aceicon",
         "dialogue_html":"data/active/Ace_Conversation.html",
         "dialogue":[
            {
               "input":"What is your name?",
               "output":"\"Folks round here call me Ace.\""
            },
            {
               "input":"What is your job?",
               "output":"\"This and that. Not got anythin\\' in particular at the moment. Guess you could call me a professional gambler.\""
            },
            {
               "input":"See you later.",
               "output":"He gives you a wink as you leave."
            },
            {
               "input":"Can I see your cock?",
               "output":"The coyote chuckles, and one of his gloved hands strokes down his thigh. \"You ain\\'t seein\\' that partner, not unless I lost my clothes in a poker game. And I never lose.\""
            },
            {
               "input":"Can I touch your paws?",
               "output":"The coyote\\'s boots are crossed atop his table, and he raises an eyebrow at you when you ask. \"I don\\'t give folks what they want for free, partner. Sides, a wanderin\\' guy like me don\\'t get a chance to bathe much. You don\\'t wanna smell these dogs.\""
            }
         ]
      }
   ]
}