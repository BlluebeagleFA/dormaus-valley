{
   "title":"contributor_1_1",
   "header":"The Crevasse",
   "mapId":"dormausvillage.jpg",
   "position":[
      -1,
      -1
   ],
   "subheader":"This part of the caverns is unusually thin and narrow, barely allowing passage through the cold, dark stone. There is a slight breeze going through it. On each side, the flickering light of fire can be dimly seen.",
   "events":[
      {
         "id":"entrance_sousdfsdfth",
         "title":"Squeezing Through to the Chamber",
         "subtitle":"The only ways through the crevasse are back and forward, and so you try to squeeze your way into the chamber that housed the demon and angel, facing the same perils as before.",
         "type":"statcheck",
         "stat":"stealth",
         "difficulty":15,
         "requirements":[
            
         ],
         "icon":"navigateicon",
         "results":{
            "success":{
               "text":"Having already gone one way through the crack, you find the trek through to be easier and uneventful. In no time at all you pop into the chamber, with nary a scratch on you.",
               "area":"contributor_1",
               "outcomes":[
                  
               ]
            },
            "fail":{
               "text":"Despite already going through here once before, your confidence gets the better of you. Going through, you are quite sure that you already know of everything. Because of this cockiness, you forget about the especially sharp rock near the end. Going through fast, you feel the cut along your arm and grimace in pain. You still end up on the other side, but with new scars for your troubles.",
               "outcomes":[
                  {
                     "parameter":"pain",
                     "quantity":1,
                     "max":1,
                     "change":"add"
                  }
               ]
            }
         }
      },
      {
         "id":"entrance_south",
         "title":"East Out the Crevasse",
         "subtitle":"You can see a flickering light on the other side of the crevasse, indicating there is more to this cave system on the other side. You think that you may be able to squeeze through to the other side.",
         "type":"statcheck",
         "stat":"stealth",
         "difficulty":20,
         "requirements":[
            
         ],
         "icon":"navigateicon",
         "results":{
            "success":{
               "text":"While squeezing through, you realize the this part of the caves are less structurally sound than you thought. As you move through, some parts of the cavern walls begin to crack, dust falling overhead. Because of this you begin to move more cautiously. Such caution proves to be warranted as you barely dodge a large rock that falls down from above. After a few moments the cave begins to calm down, and you finally make your way to the other side.",
               "area":"contributor_1_2",
               "outcomes":[
                  
               ]
            },
            "fail":{
               "text":"While squeezing through, you realize the this part of the caves are less structurally sound than you thought. As you move through, some parts of the cavern walls begin to crack, dust falling overhead. You begin to move forward cautiously. You then hear a large scraping like sound from above you. You try to look up to see the source of the noise but before you can fully raise your gaze, you feel something hard hit your head. From then it is only darkness and silence. You come to only a few minutes later, your head aching fiercely, but your progress seemingly undone as you lay back holding your injured head in the crevasse.",
               "outcomes":[
                  {
                     "parameter":"pain",
                     "quantity":1,
                     "max":1,
                     "change":"add"
                  }
               ]
            }
         }
      },
      {
         "id":"become_pfffumpkin",
         "title":"The Basilisk's Friend",
         "subtitle":"While trying to squeeze through the crevasse you begin to hear an odd sound emanating behind you. A peculiar sort of chirping with an undertone of a hiss getting louder and closer. Your fight or flight instincts begin to flare up into panic mode. You get the unnerving feeling that no matter what you shouldn't turn around, but do you ignore your instincts and face whatever is behind you?",
         "type":"random",
         "requirements":[
            {
               "parameter":"species",
               "value":41,
               "comparison":"nequal"
            }
         ],
         "icon":"inanimate",
         "results":{
            "grizzpay":{
               "text":"You turn around, peering into the dark, seeing what looks like red eyes staring back at you. Instantly you freeze up. Despite the panic you feel, you can't move an inch. Every muscle in your body is frozen, almost as if your body had turned to stone. In the darkness, you can only see those eyes, staring at you. You then feel something wet wrap around you, beginning to lift you up. You then realize that it must be its tongue.</p>The thing lifts you up easily, holding you up in the air above it. It then starts to climb up the crevasse walls. You realize that there is more space up here that you couldn't see in the darkness. It sets you down on the ground and then turns you around. In front of you, you can see rows and rows of marble stone statues all showing faces of pure pleasure. Each looks so detailed that you know that they must have been alive.</p>From behind you, you hear the creature begin to chirp softly in your ear. It then circles around you, clearly eyeing up and analyzing it's \"new catch\". It steps behind you and moves in close to your ear. \"Wel…come…to my… abode…\" it says in a slow, deep voice, the clicking not even stopping while it, rather he, talks. \"Des…pite… all my… friends… I am…… lonely…\" You then hear a loud \"click!\" in your ear, and you can move your head again. Despite the little taste of freedom, you do not move your gaze away from in front of you, a mix of both fear and pleasure stopping you from looking back at the creature and having your head freeze again.</p>After a few long seconds you hear him speak again. \"Will… you… be my… friend… We will… be… best… fri…ends…for…ever…Oh…will you…please?\" You can easily assume that all the statues before you were given the same offer. At first, the offer seems dangerous and ludicrous. To become this monster's friend would mean your demise. But then, before you say your refusal, intrusive thoughts enter your mind. 'He's just lonely, isn't he?' \"He just needs a friend, I don't have to do anything other than listen…' 'Yeah, I'll just listen…' For a few moments you don't respond, instead listening to those thoughts and the background noise of clicking. Then, almost weakly, you respond with a \"Yes.\"</p> \"Oh…thank…you…oh…thank…you…\" the creature repeats, clearly ecstatic with your acceptance of his offer. You hear shuffling behind you and then he appears fully in your dim view, his movements only being able to be described as a weird form of dancing. With these movements, you can finally see him in his entirety. His body looks lanky and lizard like, with dull dark brown scales flowing along its entirety. The oddest thing about him is his head, which is proportionally tiny to the rest of its body except for the comically large red eyes on the top of his head and the round, clicking mouth which has an extremely long pink tongue flowing out.</p>He then turns to you, his mouth in a weird but wide smile, and begins to walk toward you. His large red eyes begin to glow brighter and the clicking growing quieter and quieter. Your head remains not paralyzed, but you can't bear to look away from him. You realize, you can't bear to look away from your new friend. He reaches you and puts your scaly arms around you in a hug. \"Fri…ends…For…ever..!\"</p>You feel a calm come awash over you. \"You are safe…\" dimly rings the thoughts in your head, \"You belong here… with your best friend…\" Your feet are the first to feel cold but oddly pleasurable. You know deep down that you are becoming a stone statue, like the ones currently behind the creature, but you can't bring yourself to worry about it. Instead you are happy, \"Anything for your friend…\" The petrification slowly moves up your legs, the feeling in them going away as well. He continues to hug you tightly, pleased he could make a new friend.</p>The feeling of the stone overtaking you continues to creep up, now covering your shoulders. The creature then releases you from the hug and looks at you with a large amount of concern. He then says sullenly, \"Oh… no… not… again…\" You are perplexed by why your friend is unhappy, for you are here and going to stay. You try to ask what you could do to help him, you yourself slightly concerned now, but you realize you can move your mouth at all anymore. It is stuck in a happy, pleased smile. While you think perplexed on this, the cold, hard stone finally overtakes the final fringes of your body, leaving only a stone statue.</p>The creature picks up the statue with his tongue and puts it in a row with the rest. He then sits down staring at all his \"friends\". A single tear drop falls on to the stone floor, \"I…am…lonely…again…\"",
               "trapped_desc":"You are a statue, waiting around to listen to your friend\\'s troubles and worries.",
               "trapped":"For a split second thoughts return to the lifeless statue, but soon they say,\"Even if you could move, why would you, your friend is here, you don\\'t want to abandon him in this lonely world.\" And so in time they fade again.",
               "outcomes":[
                  
               ]
            }
         }
      },
      {
         "id":"become_pumpkin",
         "title":"A Useless Raccoon's Find",
         "subtitle":"As you continue exploring you notice that your companion, the little blue raccoon that keeps getting in your way, seems to have gone missing. Normally he is always nearby, either tripping you up or offering his particular brand of 'help'. He isn't malevolent as far as you can tell, but he certainly has been a hindrance in your journey. You consider looking for him, as it is quite possible he somehow got himself in trouble and would need saving. As you mull upon this predicament, you hear the raccoon call out to you from somewhere in the darkness. \"I found something, come look, come look!\" You try to look to where his voice is coming from but all you see in front of you is darkness and stone. You move over to where you thought you heard his voice and look at the cavern wall. Then, almost comically, his head pops through the wall, passing through as if the stone of said wall isn't there. \"Through here, you should take a look at this.\"</p>You could investigate whatever your companion has found behind this illusory wall, but it might just be better to ignore it as he has misled you in the past…",
         "type":"random",
         "requirements":[
            {
               "parameter":"useless_raccoon",
               "value":0,
               "comparison":"greater"
            },
            {
               "parameter":"species",
               "value":41,
               "comparison":"nequal"
            }
         ],
         "icon":"tffetish",
         "results":{
            "grizzpay":{
               "text":"You decide to follow the raccoon through the illusory wall, curious on what he found. You step through, the wall providing no sense of touch as you just slip through, it fading away to show what lies on the other side. Before you is a plain white room, the walls smooth and featureless, almost creating the optical illusion of a white void. Behind you is the rippling of the fake stone wall, looking smoky and murky with you barely being able to see back into the crevasse. And, in front of you, on the other side of the room, is plain oak wood door with a rusty brass handle breaking up the pure white of the walls. On the door is an engraving in blocky text that says \\'NO TRESPASSING.\\' Said door looks almost fake in this pure white back drop. Your raccoon companion runs over and points at it, \"There must be something behind this if it is hidden so well, right?\" You walk forward to the door, your steps echoing in the room as if the floor was marble, and then slowly turn the rusty doorknob to find out what is behind.</p>The door opens surprisingly smoothly despite the rust of the doorknob and hinges, revealing a small room. This room is almost as nondescript as the previous one except for two things. One being a single person sized bed that looks recently slept in, the covers not made and a pillow on the ground next to it; the other being a large table with what looks to be a diorama on it.  With a slight feeling of disappointment at the find you go over to look at the diorama. Upon closer observation, the diorama looks extremely intricate and detailed. It displays a cavern system that leads out into a forest surrounded hamlet with near lifelike figurines of people and creatures populating the set. You study the set for a bit, wondering who would have left this in such an odd location and then something catches your eye. Near the back of the model is a reddish room with a demon and angel figurine that looks awfully familiar, making it quite clear what this is a diorama of. </p>You stand there staring and thinking about the diorama for a few moments until you decide that you should go and either find whoever has been living in this hidden room or leave before said person can catch you. However, this thought is interrupted. \"EEP!\" The raccoon is soon pulling your arm to catch your attention, so you turn around to see the door close with a locking click and a new figure in the room with you. In front of the door stands a naked brown anthropomorphic wolf, average in appearance except for his neck scruff which has two horizontal white lines going around except the throat. \"You aren\\'t supposed to be in here.\"</p>You are about to give an excuse of how and why you are here but then you see a paintbrush appear in his hand. A strong feeling of dizziness and nausea comes over you, causing you to fall to your knees, you don\\'t know what he has done to you. You didn\\'t see him move or anything, but you know he must have done something. You look up and notice that the raccoon is experiencing the same thing whilst the wolf just sighs and walks past you two. He sits on his bed and then looks like he is thinking. After a few long moments of dizziness, he finally speaks, \"You two clearly saw the sign, no trespassing, what do I even do with you...\" More silence then as an out loud thought, \"Ugh, this keeps happening, I should probably move the door to a more discreet location but that\\'d take too much effort…\" A few more moments of silence passes, as he sits there thinking. You try to crawl toward the door despite the overwhelming feeling making you feel like you are about to barf. Then you hear him exclaim loudly as he rapidly stands up, \"I got it! It\\'ll solve both of my problems so easily!\"</p>He walks over to your companion briskly and crouches beside him, looking down at the raccoon. The wolf then takes the paintbrush still in his hand and touches the bristled end to the raccoon\\'s head. You see an immediate sense of relief come over his face, giving you the conclusion that your captor must have dispelled whatever was causing that nausea for the raccoon. While for you, the feeling only seems to grow, your escape attempt already halted before you could get halfway, leaving you to watch on. You see his expression then change from relief to confusion then almost contentedness. \"That was easier than expected… Heh, I won\\'t even need a medium to maintain the role I\\'ll give you…\" says the wolf as he then lifts up the raccoon with one hand, who in turn doesn\\'t give a single bit of resistance.  The wolf puts his paintbrush into his mouth and then begins to pull at the raccoon in his hands which stretches oddly like taffy or rubber. The wolf proceeds to continue to stretch and compress the raccoon, as he does so the coon shrinks and becomes less like a person and more a blob of putty being shaped. After awhile the wolf finally claps his hands together and opens them. In place of what used to be your companion is a blue leather collar, the only sign that it was once the raccoon that traveled with you being a tag on the front displaying a facsimile of his face in a goofy content grin.</p>The wolf takes the brush out of his mouth and then holds the collar up, appraising it for a few seconds and then looks toward you. \"It is your turn, I think I need a good guard dog and it\\'ll just be easier to use you than make one or summon one.\" He walks over to you and crouches next to you in a similar fashion to before and he touches the brush to your forehead. You become awash in a feeling of relief and comfort, the nausea and dizziness gone as if you never felt it. However, this feeling of relief is soon lost as while you are distracted by the sudden feeling of comfort you hear a slight click and feel something tight around your neck. You raise your hand to your neck, feeling the surprisingly warm leather and look up at the wolf.</p>\"Sit boy,\" he says commandingly. Instantly you scramble to sit like a dog, your body moving independent of your own thoughts. You look up at the wolf and find your mind to be even more scrambled. \\'My owner… No, I need to get… Be a good… What is he… Master… This collar it\\'s… Obey… Hard to… Submit… No wait…\\' The thoughts continue in a cycle, your mind fighting against itself. Then, the wolf… no, Master… touches you with his hand and your thoughts disappear. All that matters is his hand on your head, patting you. \"Good boy.\" A feeling of elation fills you, you are good. Master is praising you! \"Good boys don\\'t think for themselves, do they? Now stay still while I shape you into the perfect guard dog…\" And you do stay still, while his hands rub along your body with a tingling sensation following it.</p>As his hands go over you, you feel yourself tingle and change somehow, but your mind isn\\'t on that, it is entirely on staying still. Any resistance brute-forced away by the collar and wolf. If you could see yourself you would notice yourself becoming more and more featureless, wisps of a foggy light coming off of your body where his hands touch you. Master is thorough, is hands rubbing everywhere: back, head, crotch, everywhere flattened down into a pale white as if your body was smooth clay. After some time, Master stands back and looks at the figure before him. \"Genderless, Featureless, Mindless, a Perfect Base…\" He then walks off towards his bed, and rummages underneath it until he picks up a small clay figurine, lacking features like you. He then sits down on his bed and holds up the little figurine. \"Now what kind of dog do I want…?\"</p>He sits there for a few long moments thinking, tapping the other end of the brush to his chin. Then he gets a look of inspiration and puts the brush to the figurine, similar wisps of light from before flowing from the brush into the figurine. Instantly, the body that was you feels a connection, as if the figurine being held was you. Master begins to start moving the brush on the figurine as if he was painting without paint, but the figurine begins to shift. He starts with the feet, the brush moving across the figurines and the feeling entering you. As the brush moves across them, they seem to almost fade into orange-red paws with black pads and sharp black claws. The brush proceeds to move up the legs, yours becoming more muscular and covered in more coarse orange-red fur. The new legs tense a little, a strange background instinct to be ready to pounce if Master said so. The brush then moves up further along the legs stopping at the waist. He then moves the brush off of the figurine, looking at you appraisingly. He then addresses you, as if he\\'s making sure of something, \"Answer me, what are you?\" </p>Master asked you something, you feel like you have to answer, but when you try you can\\'t, no mouth, no vocal cords, so you just tilt your blank head towards him. He then facepalms, \"Of course you can\\'t answer, you don\\'t even have a mouth, I\\'m such a ditz.\" He turns back to the figurine in his hand and starts painting the head. In appears a dog muzzle filled with sharp white teeth, proceeded by two pointed canine curled down in a submissive manner, which is then followed by two glowing red eyes showing a pure unadulterated need to serve. On top of your head sit two slightly curled horns, revealing what type of guard dog he chose to make. He looks back up at you and then commands, \"Answer.\" You feel compelled to again, and this time you can. However, at first you only say in an almost growl, \"Arf!\" You look confused for a second, and then as if the feeling of talking is unnatural, you begin to speak with a slow guttural voice, \"I am your loyal Hound, Master…\" He looks a little more relaxed and responds, \"Good, it is working. Now stay still till I am done, and I may have a treat for you.\"</p>You rigidly stand still, except for the semi new state of breathing, your breath heated and closer to panting. Master goes back to painting the figurine, this time on the chest. Your own chest grows muscular, barely hidden by the sprouted fur, a lighter orange making up the belly and chest fur. The brush moves to the arms, making them firm, the hands having dark black pads and the fingers tipped off with long sharp claws. They feel strong, immediately tensing up like your legs did before, even though you are relaxed by master\\'s presence. Then with almost a kind of flourish, he adds the finishing touches: A fluffy tail that begins to wag immediately on formation; flames that start to build up within your breath, the feeling that if you roared they would spew out feeling prevalent, and a final thing that requires him to get hands on. He stands up walking toward you, looking at his handiwork. A semi feral, semi anthropomorphic hellhound sitting before him giving him a gaze of adoration like a loyal dog. Then with a smile he exclaims, \"Now, since you\\'ve been such a good boy, I think it is time to give you a treat.\"</p>You beam at being called a good boy again by the Master, you have been a good boy, a really good boy, behaving and staying still like master asked you to. \"Roll over boy.\" And so, you turn over, laying on your back panting happily. Once he reaches you he gets down on his knees and starts giving you rubs. The feeling putting you in a state of near nirvana, your tail wagging as much as it can. His rubs, starting near your belly, begin to go lower and lower until he has started to rub at where your crotch used to be, instead a fluff of fur being there. However, at his touch, the area begins to tingle pleasurably. Like how everything else began to shift into the new form, a sizeable sheath and balls begin to appear. Your owner continues to rub along the new sheath. You whine at the teasing touch, your new canine cock poking out at the pleasurable sensation.</p>The wolf continues to rub at the sheath, occasionally teasing at the balls until your dick becomes mostly hard. When he is sure you are sufficiently hard and teased, he then grips your penis with one hand lightly and starts to stroke it slowly. He looks at you in the eyes and smiles a hungry grin, as if he wants to see how far he can take this. He continues to stroke steadily, occasionally teasing the tip with his thumb. As he teases more, you begin to whine more, whereas the rubbing was pleasurable this is overwhelming. Every stroke feels better than the last, and with each stroke a need for it to continue grows. He whispers attempts at teasing remarks to you, but ones that inevitably will shape your mind. \"You are such a horny loyal hound, aren\\'t you? You want me to keep going, touching your bone just like this.\" You whine more in response, despite whatever you would have desired before, you need this and don\\'t want it to ever stop.</p>Your canine master continues in his talking, all while he picks of the pace of the stroking. \"You\\'ll become addicted to this, a slave to your pleasure and to me…\" He then smirks a little, enjoying seeing how helpless you are to his machinations. \"And if you ever have, let\\'s say, bad boy thoughts, just paw at your new favorite toy and they\\'ll just disappear. Good Boy…\" It doesn\\'t take long for the words and stroking to bring you to the edge, in a state of wanting this to never end but the climax so close that you can\\'t stop yourself from going over the edge. With one final stroke from Master you blow, a stream of hot white cum spews forth accompanied by a roar of flames erupting from your mouth. Globs of it shoot out onto your chest, some even ending up around your maw which you eagerly lick in between heavy panting. Master then stands, his own erection now becoming quite evident. He wipes his spunk covered hand on your leg as he stands and smiles a warm smile down at you. \"Stay here boy, Master is gonna go visit another one of his creations, remember to behave while I am gone.\" And so he leaves you alone, his content guard dog.",
               "trapped_desc":"The Master's Guard Dog is ever watchful for intruders.",
               "descriptionchange":"This adventure large, muscular Hellhound. Their fur is an orange-red color and their eyes glow an intimidating red.",
               "trapped":"Your place is to guard the Master\\'s room as his ever-loyal Hound. Thinking of leaving was a bad thought so you begin to paw at yourself to drive the bad thoughts away and be the goodest boy you can be.",
               "outcomes":[
                  {
                     "parameter":"species",
                     "quantity":41,
                     "change":"set"
                  },
                  {
                     "parameter":"gender",
                     "quantity":1,
                     "change":"set"
                  },
                  {
                     "parameter":"useless_raccoon",
                     "quantity":1,
                     "change":"sub"
                  },
                  {
                     "parameter":"useless_collar",
                     "quantity":1,
                     "change":"add"
                  }
               ]
            }
         }
      },
      {
         "id":"save_me_batty",
         "title":"Save me Mr Bat!",
         "trapped":true,
         "subtitle":"A tall bat in a cloak bumps into you, and blinks with surprise. \"Oh my! Do you require assistance?\"",
         "type":"random",
         "requirements":[
            {
               "parameter":"species",
               "value":41,
               "comparison":"nequal"
            }
         ],
         "icon":"mrbat",
         "results":{
            "success":{
               "text":"The bat adjusts his glasses and takes a close look at you. He strokes his chin for a moment, then opens up his long cloak. From within, he draws out a small black book and reads it thoughtfully. \"Here you are, this should resolve your problem, my friend\", he says. He touches the page and quickly mutters a long string of complex syllables. The words seem to spin and twirl around you, and for a moment your body feels completely fluid. There is a crackle and pop of electricity, and then with a sudden SNAP, the curse binding you is undone! </p>As you look down at yourself, your form restored, the bat gives you a little bow. \"I am glad I found myself lost so that I could provide you assistance, my friend. Until we meet again!\"",
               "freeTrap":true,
               "outcomes":[
                  
               ]
            }
         }
      },
      {
         "id":"resist_pumpkin",
         "trapped":true,
         "title":"Guard the Master",
         "subtitle":"Your job is the to defend the Master's private room from any intruders that would defile its sanctity. You wait here adamantly on his orders. Occasionally bad thoughts enter your mind, but you don't listen to them. Instead you take care of them like how your Master requested. Though sometimes they can influence your actions…",
         "type":"statcheck",
         "stat":"magic",
         "difficulty":30,
         "requirements":[
            {
               "parameter":"species",
               "value":41,
               "comparison":"equal"
            }
         ],
         "icon":"default",
         "results":{
            "rareSuccess":{
               "text":"Master has been gone for quite a while this time, before he left you think you heard him murmur something about a valley and food. Whatever his reason for going, you have been left alone longer than usual. During this time, no intruders seem to come in and there is nothing to do. You begin to grow a bit bored with this alone time and begin to pace around the chamber. Eventually you stop next to the table with the diorama and look down at the statuettes populating it. You notice that Master has added more figurines and expanded the world a little, but what catches your eye is instead a familiar little hound in a white room near the back.</p>Absentmindedly you extend your arm toward it and then suddenly stop. Master wouldn\\'t want you to touch his stuff like this, this is wrong… You feel the need to purge these bad thoughts, you are being a bad boy. But somehow you resist this urge, you feel like something about that figurine is important. You know he made you with it but, where did you come from before? Was there a before? The answer seems to be in front of you, you just have to try and grasp it in your hands. You begin to shakily extend your hand forward inch by inch, the very act of ignoring that growing need to stop growing harder. You want to obey, to just stop and submit, stay your Master\\'s hound, but that fresh need for the truth just barely proves stronger. Your paw grasps around it, the feeling of it in your hand almost hot. Then you hear a loud, \"CRACK!\"</p>You watch with abject horror as the figurine instantly grows damaged at your touch, a wispy light shining through the spiderweb like cracks quickly covering it. You panic, Master might get angry, you don\\'t want him to be angry with you, somehow you need to fix it. But you don\\'t get your chance to. The figurine bursts with energy. Instantly that energy flies towards you and hits into you, without any physical force but its effects easily felt. You can remember who you once were. You were an Adventurer. You need to get back to Dormaus, or at least get out of here. You drop the white stone pieces that once was the figurine and look at the door, your exit. You begin to move to run out, but a feeling of weakness then comes over you. Thoughts, not your own play in your mind, \\'Submit, stop fighting, submit, wait for master, SUBMIT.\\' You realize that these thoughts are being forced onto you by the collar that once was your friend, so you struggle to take it off. And walk to the exit. Your hand hesitates a little when it nears the knob, but with a deep breath, you leave the room and the painter, hopefully forever.",
               "freeTrap":true,
               "outcomes":[
                  
               ]
            },
            "success":{
               "text":"Master is away and uncharacteristically you start to begin thinking a little. Like where did you come from before Master made you? Why are you so loyal to Master, did he do something to get your loyalty? Why do I… I… You realize that these thoughts are Bad. You can't figure out where they came from, but you do not want to be a bad boy. But you remembered what master said, you just need to do one thing to get rid of pesky thinking. You then touch at your cock, and almost like a wave you feel a burst of pleasure flow through you. All of your unwanted thoughts disappear like that, nothing else matters now, just pumping your cock. You continue slowly, stroking, a light whine escaping your maw. Your pace begins to speed up, in turn with an increasing need, until you are pumping at your cock with a kind of desperation. A small stream of pre escapes the tip, creating a natural lubrication making it even more pleasurable and smooth. You get closer and closer until you finally shoot out into the air. Ropes of come fly out and land back on you. And so you sit there, post orgasm, happy and dumb. Basking in the scent betraying your recent action, and your once again proven loyalty to Master.",
               "outcomes":[
                  
               ]
            },
            "fail":{
               "text":"You are waiting around guarding your master's chamber when you immediately hear the door open. The smell is not master's, instead being the scent of a stranger. Instantly you are in a state of alert and look at the door. You see it begin to creak open, someone's arm pushing it outward. You tense up, ready to react to whatever appears. In walks a robed man, you can't make out any details about him under the dark, heavy clothing; however, you don't need to. Instead you roar out immediately upon seeing him, flames spewing forth from your maw and enveloping the trespasser. He screams out and moves his arms in a vain attempt to try and block the flames, but you don't stop. You keep breathing it out onto him until you are satisfied they had done their work.</p>When the smoke and dust settles, you spy your handiwork. Instead of a charred corpse as the flames would suggest, instead where the man stood is a small anthropomorphic black rabbit freshly transformed and panicking in the ashes of his former robes. You smile a hungry smile at your new prey, Master keeps you well fed and satisfied but it is always good to enjoy playing with those that decide to break the sanctity of Master's home. The rabbit is terrified and begins to bolt back to the door, but you are so much faster. You pounce forward and slam the door shut, blocking off the rabbit's escape. The intruder grows more scared at the situation and dashes to another direction, in which you jump in front of.</p>You continue playing around with the poor intruder for awhile until he grows tired of running. The rabbit, worn down, looks up at you with a pleading face. He squeaks out, his ability to talk robbed by the flames, but the sounds clearly him begging for his life. You decide to taunt him a little more and open your maw as if you are about to swallow him full. The scarred little man screams in terror, however instead of eating the man you lick hm once and laugh. You then proceed to pick him up and open the door to the room and throw him to the outside world, sure that he will never return.",
               "outcomes":[
                  
               ]
            },
            "rareFail":{
               "text":"Master seems to be doing something magical in the room this time. You watch as he paints a red circle on the ground, lined with complex symbols that are beyond you. In fact, what he is doing doesn\\'t matter so much as the fact that he is here with you. Despite this you watch intently, maybe Master will need you for something. When he finishes drawing the circle, you see him go back to where he rummaged out the figurine used to shape you and goes back to sit down next to the circle. He the concentrates on the blank figurine and starts to paint it with his brush. </p>You watch as he shifts the figurine into a reptilian form, shining green scales covering it from the top to bottom. He paints powerful looking claws, and a horned reptilian head that looks like it is in the middle of roaring. He then turns over the figurine and paints in a long, spiked tail and two leathery wings unfurled. He then holds out the figurine, appraising the details he just painted one and then sighs. He proceeds to place the figurine on the painted line of the circle and the circle begins to glow a deep red. The wolf then drops his brush, which dissipates before it could hit the ground, and stands to the edge, looking as if he is about to psych himself up for what is to follow.</p>He takes a deep breath and then quietly, almost as a whisper, you hear him chant something. For most of it you can\\'t make out a word, it sounds like incomprehensible garble. But whatever these words are, they seem to have an effect within the circle. A swirling form seems to appear within, vaguely in the shape of the figurine. Your Master\\'s chanting seems to grow louder and a bit more stressed as the figure becomes more and more corporeal. You can now make out some phrases breaking up the gibberish in the chanting, \"… come to me… those spirits spurned and lost… shape into what I desire… AND BECOME AN IMPERSONATION OF THOSE THAT ACT AS GODS, THE DRAGONS!\"</p>At those last clear words, the figure in the circle seems to burst into existence with a flash of red light, the room shaking as if an immense amount of power has been released. Dust enters your eyes and it becomes hard for you to see so you look away. Once everything settles you look up see what is in the circle. Instead of the regal and intimidating being you expected, you instead see something that can only be described as dopey. Where at least a draconic being should have stood, instead a chubby green lizard sits, it\\'s legs to short to allow it to even stand. On its back, there seems to be the shape of what should hold the wings, but they also are too tiny and lack the leathery membrane. Its tail a nub pointed directly up. And its face stares at the wolf with a goofy smile, the \"dragon\\'s\" tongue lolling out of the side of his mouth. </p>You look at your Master and notice that he looks very angry and disappoint. \"Damnit! Why can\\'t I ever get dragons to work, they either are too weak or just not a friggin dragon?! It\\'s not like I am limited by whether they exist or not, I can fucking make demons, angels, mythological beasts that just don\\'t exist! I MADE A WORLD! So why can\\'t make a dragon…?!\" He then yells out an incomprehensible fit of anger and kicks at the figurine, breaking the circle and punting the tiny statuette at the wall. It breaks in half and all of the added detail magically fades from the two fractured pieces. Instantly you see the dragon dissipate into a burst of energy, swirls of smoky light flying out every which way. </p>However, your concern isn\\'t the now gone dragon or magical spirits flying away but your disgruntled Master. You go over to him and sit like a dog next to him. After a few moments he calms down murmuring, \"I just need more practice, it shouldn\\'t be impossible, maybe in my approach I could…\" He stops his murmuring when he notices you right there. He looks down at you with a waned smile, \"It\\'s ok boy, just some minor setbacks. Nothing for you to concern yourself with.\" He then scratches behind your ears, and you trust him, for whenever is Master wrong?",
               "outcomes":[
                  
               ]
            }
         }
      }
   ],
   "npcs":[
      
   ]
}