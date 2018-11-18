var area = {
        "title": "greasepit",
        "header": "The Grease Pit",
        "nomap": "You don't know your way around this area yet. You'll have to navigate on foot.",
        "subheader": 'This rickety, dirty bar stinks of smoke and sweat. The floor is sticky, the walls are covered in strange mechanical objects, and sitting at the beer-stained tables are a variety of rough, untrustworthy-looking bandits and thugs.',
        "events": [
            {
                "id": "windy_south",
                "title": "Leave",
                "subtitle": "You are done here.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You quickly leave, dodging past a tavern brawl on the way out.",
                        "area": "grease_lot",
                        "outcomes": []
                    }
                }
            },{
                "id": "alder_01",
                "title": "Lone Panther",
                "subtitle": "Sitting by his lonesome, there’s a leather-clad panther having a quiet smoke. While the entire bar reeks of smoke, there’s a different scent of smoke emanating from him, though you can’t quite put a finger on why that is. [Guest scenario by Shaddura]",
                "type": "random", //or random
                "requirements": [
					{
						"parameter": "alder_interest",
                        "value": 0,
                        "comparison": "equal"
					},{
						"parameter": "alder_connection",
                        "value": 0,
                        "comparison": "equal"
					},{
						"parameter": "gender",
                        "value": 1,
                        "comparison": "equal"
					}
				],
                "icon": "aldericon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "You stand around in the middle of the bar, not quite sure where to sit. While there are a few empty tables, all of them are far too close to another rowdy table for your comfort. You decide to sit down at the bar, hoping you won’t attract too much attention. As you’re about to sit down, the leather-clad panther beckons you over with a cigarette in his hand. “Are you new here? I haven’t seen your face before.” You nod in response as you take a seat beside him instead. Now that you’re up close, you notice his vibrant amber eyes, accompanied by a warm smile that feels out of place for this establishment. “Let me warn you; places like these aren’t safe alone. Next time you go to a new place, do bring a friend.” You can’t help but nod meekly once again, taken back by his amiability. “Anyhow… May I ask your name?” Once again, you’re caught off guard by how direct he was; you can’t help but stutter as you give him your name. “That is quite a nice name. You can call me Alder. It’s nice to meet you.” He brought his paw forwards — the only part besides his face not covered in leather — and you shook hands, keeping your eye contact with the panther however difficult it was.</p>He begins asking you a few questions such as ‘What do you do’ and ‘What got you to come here.’ With each question, you found yourself more confident speaking, and you had a jolly chat together, though in the back of your mind there was an odd itching; you couldn’t quite get why.“Do you smoke, friend?” the panther asked out of the blue, “You’ve been looking strangely at my cigarette this entire time. You want a smoke?” Truth be told, while you had tried your best to ignore it, there had been an ever-present scent that seemed to ensnare your mind. You had, of course, enjoyed your time with the panther so far, but somewhere in the back of your mind, you felt as if that wasn’t the sole thing keeping you here. “Or were you bothered by the smoke? I can put it out if you-” you interrupted the panther as he was about to stuff the butt into an ashtray, insisting that you just didn’t smoke often. Of course, that was a lie, but it felt as if it’d be the right thing to say.</p>Whether the panther saw through your lie didn't matter. His voice was cheerful, nonetheless, as he grinned, “I’m glad! I should’ve offered you sooner it seems — how rude of me!” He took out a cigarette and lit it, placing it on your lips. You’d never smoked before, yet it came so naturally to you as you took a long drag of the cigarette. Relaxing your shoulders and slumping down, your entire system calmed in an instant. “You were looking nervous before - you just needed a smoke, didn’t you?” The panther patted your shoulder for a short while, breaking any remaining personal space between you. “You like it, friend?” You’re almost lost in bliss, his ever-so-warm words only barely bringing you to a conscious state of mind. “I feel like I’m on cloud nine...” you utter thoughtlessly, blowing a cloud of smoke back into the panther’s face, who's seemingly unfazed.</p>You continue your conversation for another hour or so, bumming a few more smokes throughout that time, which the panther seemed not to mind one bit. “So, where do you come from, friend?” the panther asked. You tell him that while you sleep most nights in Dormaus, you’re an adventurer, unbound by the notion of a home. He grinned at the mention of Dormaus, and soon began to speak, “That’s where I come from too!” he exclaimed in a raised voice, “though I sold my house after I got my bike — I spent most of my time on the road from that point onwards. A happy village life just isn’t for me.” You both chatter for a while, asking each other mundane questions.</p>Uncharacteristically, he averts his gaze away from you, his eyes widening as he coughed to halt the conversation. “It’s getting really late. Do you need a lift home?” You look behind yourself; a large mechanical clock on the wall shows that it’s far past midnight. You appreciate the offer, but you tell him that you’re just fine walking; an adventurer is always prepared for anything. However, he insists, “I wouldn’t feel good letting you go on your own. You look as if you could fall asleep at any moment.” He blows a gentle puff of smoke straight into your face. You admit that you do feel tired, and take him up on his generous offer. The panther smiles warmly and places a hand on your shoulder. “Just come outside with me then. I only have one helmet, but I promise I’ll drive carefully, my friend.” You both walk out of the bar, having spent the entire night without ordering a single item. The wolverine bartender didn’t seem to mind, though; a bit of quiet was probably worth more than any coin you could give to him.</p>He seats you up on his bike, and not long after, you are riding along a path through the woods, straight back to Dormaus. While the night air is sharp and cold, you feel none of it; with your arms wrapped around Alder, you feel warm and at ease, soon dozing off cuddled up close to him. You wake up to rays of sunlight coming from a window. Opening your eyes, you find yourself in a room inside the Two Feathers Inn, laying on a bed with clothes on. It takes you a few moments to gather yourself before remembering what transpired last night. You realize you never asked him where he lived or where to find him. The rest of your morning was relatively uneventful. Most of it was spent thinking about Alder. Whenever you closed your eyes, all you could see was his warm smile. Something deep inside of you assured you that you’d meet him again soon, and that put you in a good mood for the rest of the day.",
                        "area": "hotel_rooms",
                        "outcomes": [
							{
								"parameter": "alder_interest",
								"quantity": 1,
								"change": "set"
							}
						]
                    }
                }
			},{
                "id": "alder_02",
                "title": "Familiar Panther",
                "subtitle": "As you look around the room, your eyes quickly catch a familiar figure sitting by the bar. Just as last time, he’s clad in leather from head to toe, with a pleasantly smelling cloud of smoke originating from the lit cigarette in his mouth.",
                "type": "random", //or random
                "requirements": [
					{
						"parameter": "alder_interest",
                        "value": 1,
                        "comparison": "equal"
					},{
						"parameter": "alder_connection",
                        "value": 0,
                        "comparison": "equal"
					},{
						"parameter": "gender",
                        "value": 1,
                        "comparison": "equal"
					}
				],
                "icon": "aldericon",
                "results": {
                    "success": { //success and fail, rare success, rare fail, or random
                        "text": "With no hesitation, you walk over to the bar and take a seat by your friend Alder. At first, he doesn’t seem to notice you at all, his eyes closed and his body relaxed as puffed on his cigarette. Without opening an eye, he speaks out in a cold, intimidating voice. “What’re you looking at? You got a problem?” Fear strikes down your body — had you actually gone up to a complete stranger that just happened to look like him? You apologize nervously as you stand up again. The panther turns towards you and flicks your nose as he laughs audibly throughout the bar, bringing at least a few eyes peering over towards you.</p>“I’m jesting, my friend! Just relax and have a seat; I will do you no harm.” He kept on chuckling, hardly able to contain himself.“Since I gave you such a scare, I’ll make up for it.” He coughed before calling out using a voice louder than the one he’d speak to you with, “Bartender, get my friend a mug of the good stuff.” The wolverine bartender nodded, and by the time you realized who Alder was speaking to, a heavy mug was almost slammed down in front of you, its contents a pale amber color. “Have a drink; it’s on me.” He grinned as you took a big gulp of the beverage in front of you. It wasn’t particularly strong, though it gave a nice, mild buzz that helped drown out the remaining embarrassment that lingered from the panther’s previous prank.</p>“How have you been since we met last? I hope I dropped you off in the right room.” As always, the moment he began to speak, he directed all his attention at you, his voice gentle and relaxing. You assured him everything went well — that he had nothing to worry about. “I see. That is a relief! I was afraid I might have caused you trouble.” You shake your head to insist once more. You move on to tell him how you'd been, though you left out the part about how you haven't been able to stop thinking about him every now and then.</p>“May I ask you then, why you came here alone again? I thought I had warned you not to go to seedy places like this alone... unless you came here expecting to find me? Is that it?” A cheeky smile found its place on his face, clearly bantering with you now. “I won't blame you. I have that effect on people. I'm glad you came so we could meet again.” You felt your cheeks flush a little. Though you attempted to hide it by taking another swig from your mug, it didn't take a genius to realize that nothing would get past Alder's attentive gaze.</p>As you placed down your beverage on the table and looked back at your friend, you could see him fidgeting with a small pack, taking out a cigarette and holding it out towards you. “Want a smoke? You still seem a little stiff.” You could've sworn you hadn't felt anything, yet the moment he mentioned it, your hands and feet felt slightly tingly; your mouth felt dry — more importantly, you found yourself unable to relax at all. You accepted the cigarette with a smile and thanked him. Your hand went down into your pocket to search for your lighter — did you even have one?</p>Alder handed you a lighter with a faint chuckle. “Here, my friend. Feel free to keep it too — think of it as a present.” You nodded, placing the cigarette on your lips and lighting it. As if on instinct, you took a long, deep drag, feeling the buzz hit you like waves on a beach. Your shoulders eased down, and the tension in your muscles all faded away in the span of seconds. With your eyes closed, you blew out a cloud of smoke straight into the panther's face. Usually, you'd apologize for it, yet with Alder, you felt at ease. He just reciprocated it with his own smoke. “You look much better now, friend. Another time, don't hesitate to bum off of me, I mind not one bit.” The rest of the night was spent chattering and smoking. The first few times you tried to be humble and reject his offers, but he insisted on giving you a cigarette each time you finished the last one. You caved in every time; it was hard to say no to his smile.</p>“So, have you ever had any relationships? You may be an adventurer, but surely you’ve had at least a crush on someone, no?” You explain that you’ve indeed had a few crushes and a couple of short-lived relationships, but that you’ve mostly been delegating yourself to one-night stands and such. You inquire him about his own experiences, not wanting to be the only one to share embarrassing topics about yourself. “There was a guy I crushed on when I lived in Dormaus,” he began speaking softly as his cheeks flushed faintly, “we always disagreed about whether pipes or cigarettes were better, but we always had a great time together. I never told him; the age difference was too big back then...  nowadays it might be different.” It came as a bit of a surprise to you that Alder was into men — though, in hindsight, that wasn’t too uncommon around here, you’d just been far too used to every gay person you met attempting to flirt with you or transform you.</p>Your chatters get drowned out by a loud ruckus, a group of bears slams open the door and walk up to the bar, taking up most of the seats. While sure, the bar was not a quiet place before, they were the loudest and most obnoxious people to enter all night by a long shot, and at least most of the louder groups kept to the tables, rather than the bar. Not long after places Alder a hand on your shoulder and leans in close to speak with you. “It’s getting pretty late. I think it’s best that we leave, don’t you think my friend?” He eyes at the bears, hoping you’d get the hint. You both stand up and head out of the bar, his arm wrapped around your shoulder as if protecting you.</p>The air outside was cold and refreshing, a much-needed change from the stuffy bar. Your amber eyes dilating in the dark. You’d felt sluggish just few moments before, yet energy circulated back as you walked over to Alder’s bike. You could’ve sworn it was much harder finding it last time, though perhaps he’d just parked it in the same place as last. The two of you jump up on his bike, your arms wrapped around his chest to keep you on it, and not long after are you driving through the woods back towards Dormaus yet again. You feel awake and more alive than ever, and unlike last time, you spend most of the time chatting, continuing where you had been interrupted before, though you hadn’t many interesting topics left, so you mostly talked about the scenery.</p>One thing was unchanged from last time though — you kept close to him as you clung on, feeling his radiating warmth protect you from the wind brushing off your skin. At the speed he was driving at, you’d find yourself badly scraped if you fell off, and that’s ignoring instant death from a head injury. Despite that, you felt safe with Alder, however irrational that might be. “Are you alright back there? You’re hugging me pretty tightly. Should I go slower?” Your face went red in embarrassment — you could swear the panther saw it and was grinning, despite how unfeasible that’d actually be. “I’ll get you back in one piece, don’t you worry. We’re almost there.” His words soothed and calmed you, just as they always did. For the rest of the ride, you didn’t speak much, and after a short while Alder caught on and allowed you to focus on the view, the sound of the motorcycle’s engine revving remaining as the only sound to be heard.</p>About five minutes later, you’re driving past the gates of Dormaus. The town feels much different at this time of night. The streets which are usually lively instead devoid of people, barring the occasional adventurer or foreigner unaware of the dangers of walking alone at night. As you reach the inn, you jump off, and he parks the bike along one of the walls. “Whoo, I don’t think I’ve enjoyed a ride this much in ages.” Alder laughed as he took off his helmet. “Well, here we are. You do have enough to pay for a room, right?” You nod quietly. “That’s good. I’ll be staying at a friend’s place here tonight. Perhaps we could meet at the fountain in the morning and have breakfast together?” You smile and accept the offer.</p>As you’re about to say your farewells, he hands you a half-emptied pack of cigarettes. “I’ve got another pack left in my pocket so you can have the rest in this one.” He jumps back up on his bike and drives away as you wave. He’s quickly gone into the night, and you enter the inn and walk up the stairs to your room. You place the lighter and the cigarettes on the table and start undressing. Falling asleep came to be a difficult task as you tossed and turned; you ended up spending quite a while staring at the ceiling deep in thought. “Perhaps I should have a smoke? Today was pretty wild after all…” you pondered with yourself, “I’ll just have one to relax and then go to bed” You took out a cigarette from the pack and lit it, opening a window so as to not stink up the room.</p>As you sat there on your bed with moonlight shining in from the window, you felt at ease. Each inhalation of smoke replaced stress you didn’t even know you had. This was the first quiet moment you’d had all day since you entered the bar. Everything was so quiet you could hear the faint sounds of the night — crickets chirping, the occasional footsteps of a passerby walking outside. You think to yourself, “I can see why he likes them so much…” as you take another drag of smoke. Once the cigarette’s burned out, you toss the butt out of the window and lay yourself back in your bed. With your newfound state of relaxation, you were fast asleep.",
                        "area": "hotel_rooms",
                        "outcomes": [
							{
								"parameter": "alder_interest",
								"quantity": 2,
								"change": "set"
							}
						]
                    }
                }
			},{
                "id": "wolf_tf",
                "title": "The Grease Wolves",
                "subtitle": 'There is a gang of wolves clustered at one end of the bar. They\'re all dressed in leather jackets, and they keep glancing over to you and smirking at eachother.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 17,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "grizzsex": {
                        "text": "The barkeeper, a tall and stocky wolverine, raps the table and draws your attention. \"Hey, kid. This one's from the wolves\", he says. He slides a glass of whiskey towards you, and you pick it up hesitantly. The wolves are all staring at you with wide grins, their yellow eyes glowing in the dim light of this ratty bar. You get the impression that refusing their gift might be quite dangerous, so you hold your nose and gulp down the drink. It's sharp, and bitter, and tastes like you'd imagine gasoline to taste.</p>When you cough and put the glass down, you feel a tingling on the back of your neck. You turn around on your bar stool to see the three wolves standing right behind you. Now that you get a closer look, you can see they're all wearing very similar clothing. Heavy leather jackets, white vests, dark trousers, and boots. Their hair is slicked back with a curve in the front that juts out. \"Hey there, buddy. Enjoy the drink? You know you gotta pay us back now\", one of them says. They leer at you, and the one leaning against the bar pulls out a butterfly knife and starts to play with it idly.</p>You ask what they want from you, and they glance at eachother. \"Oh, nothin' much friend. We're just lookin' for a new member for our gang! Why don't you try it out, and if you don't like it, you can leave. No questions asked!\", he says. You reluctantly agree, and suddenly the lead wolf grabs you and yanks you forward. Your face is shoved firmly into his warm armpit, and you struggle and wriggle in his grasp. Your nose is forced into his furry, damp pits, with his leather jacket draped against the side of your cheek. One of the other wolves flicks open what looks like a switchblade, but actually turns out to be a comb. He begins to comb your hair as you struggle, slicking it back and curving it out. With each stroke of the comb, your hair becomes darker and shinier, becoming greased back just like theirs. Your ears start to stretch, becoming longer and pointier, and your face grows and pushes out into a long muzzle. You feel your nose bulging and turning dark, and the stink of musky, sweaty male wolf floods into your nostrils and makes you feel light headed and dizzy.</p>The wolf releases you, and you fall backwards, your head swimming and your long new muzzle feeling strange as you touch your teeth with your tongue. One of the wolves pulls your clothes off, his gloved hands stroking over your chest and back, then sliding down your legs. Where he touches you, your skin tingles and itches, as thick, soft black wolf fur starts to grow in, which his fingers brush and stroke through. His hands slide down your inner thighs and down to your feet. As he strokes and squeezes your feet in his grip, and you feel them start to stretch and grow, one of the other wolves pulls off his huge, dusty leather boots. The other wolf wriggles out of his pants, and together they hold you down as they force the dark pants up your body, the tight fabric squeezing around your stronger, thicker legs. Then, they push the heavy boots onto your feet, and you feel your bare paws sliding into the dark, damp leather and pressing down into them. It's almost like you're absorbing the musk and dirt and essence of your fellow gang members, as your feet stretch and grow to fill the boots, becoming large, clawed paws.</p>Two of them grab you by the arms and lift you up, and you look over at the other wolves, a grin starting to spread on your face. Your mind is confused and dizzy, and your expression almost doesn't feel like your own. The lead wolf slides his leather jacket down off his shoulders, and then pulls it over you. You push your arms into the heavy, creaking sleeves, and feel the weight of it around you. You shiver with pleasure as it strokes against your bare fur. Instinctively, you reach for a comb, and one of your gangmates presses one into your paw. You comb your hair, adjusting it until it's perfect, and smirk at them.</p>One of them slides his hand down and gropes your ass, and you growl with pleasure at the feeling. Your tailbone aches and stretches, pushing through a hole in the pants and growing, before developing thick, bushy fur. Your gang leader whistles with admiration as he sees your tail wag, and he pushes you against the bar, your ass in the air. \"Time to break in the new gang member, boys!\", he howls.</p>They pull down your pants and you lift your rear eagerly, as you feel your gang leader's huge, powerful body press against your back. His hot, musky form pushes against you, his muzzle growls and rumbles against your neck, and you feel his cock push against your tailhole. The pressure grows and builds, until finally, with a pop and a thrust, he penetrates you. You snarl and shudder as he starts to pump his cock into you, pounding in and out. Breaking you in. His thick red rocket shoves deep and almost knots you, but he grips onto his knot and squeezes it in his palm instead. His thick, hot cum gushes into your ass, filling you with heat, and he howls with pleasure.</p>Slowly, he pulls himself out, and before you can even get a chance to catch your breath, the next wolf wraps his arms around you, snarls, and shoves his cock into your slippery, cum-soaked ass. You see now why he didn't want to knot you.</p>The three wolves take turns using your ass all night. By the time the third is done, the first is ready to try out your new muzzle, and it carries on like that until daybreak, when you are left panting, sweaty and soaked in jizz. You love your new gang.",
                        "descriptionchange": "This adventurer is a scruffy black wolf, with a long muzzle and thick bushy tail. Their body is lean and muscular.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 17,
                                "change": "set"
                            }
                        ]
                    }
                }
            },{
                "id": "suborc_tf",
                "title": "A Gang of Orcs",
                "subtitle": 'This bar seems to attract a rougher and less cultured clientele. A group of three orcs are sitting at one table, loudly quaffing mead and discussing their many conquests, both in battle and in lust.',
                "type": "random",
                "requirements": [
                    {
                        "parameter": "species",
                        "value": 36,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "tffetish",
                "results": {
                    "grizzsex": {
                        "text": "One of the orcs stands up, and approaches you. His tall warrior body is bulging with muscle, and his thick green skin glistens from droplets of sweat. He says something to the bartender in a thick, growling voice, and the wolverine behind the bar slams down a dirty glass with a deep, swirling green drink in it.</p>The other two orcs get up and stand behind you. The leader grunts again, and his thick, huge tusks move as he speaks. \"Drink\", he commands.</p>You hesitate, and the orc nods to his companions. They grab your arms in their huge, rough green hands, and hold you back as the orc leader grabs the glass and forces it to your lips. You struggle, and much of it spills down your chin, but you end up swallowing a large portion of the burning, sharp liquid. You immediately begin to feel dizzy and confused, your vision starting to blur and split 50/50.</p>The orcs release you, and you struggle to your feet. Your skin feels hot and itchy. You start to rub and stroke over your chest and arms, as your body feels more and more intensely sensitive. Your skin flushes with deep, grassy colour, and you find yourself pushing at your clothes, desperate to not have them brushing agaisnt you right now. The orcs eagerly assist you, as they manhandle and grope you, pulling off your clothing and tossing it aside, until you are left naked and panting, with sweat running down your body as your skin is filled completely with that dark green shade just like theirs.</p>The lead orc pulls you up, and grips around your bare waist with his muscular, scarred arm as he holds you naked against him. You pant and squirm, struggling as every touch seems to make you throb with pleasure and desperation. \"This why orcs not wear clothes, new blood\", he grunts. Your brain feels foggy and slow and dizzy, but you vaguely realise that he's speaking in his guttural, brutish orc language, and yet you can understand him.</p>As he holds you, the other two orcs start to grope and tease you. Their hands stroke over your feet, making them grow thicker and wider, as your soles become tough and leathery and firm. They squeeze and rub your legs, making you moan and struggle, while your thighs and calves bulge and harden with thick, strong muscles. The lead orc uses his free hand to slap your ass, and then grasp it firmly, feeling it thicken and bulge into a big, soft round bubble butt. He pants and growls with a lusty, aroused sound, while your belly grows rounder and harder, like a tough green beer barrel. Your arms bulge, your biceps inflating as large as footballs, with an equally leathery skin. Finally, the lead orc grips and rubs his dirty hand over your face, making your jaw crack and jut forward, as your lower teeth stretch and thicken, curving out into big thick tusks.</p>The lead orc shoves you to the ground, and the others approach you with a dirty leather loincloth that stinks of musky orc balls, and a leather harness. They wrap the harness around your chest, and the loincloth around your wide green waist. \"Perfect look for new orc breeder\", one of them says.</p>You're still too dizzy to get up, managing only to push yourself up into a crawl, when your head suddenly pushes into the stinking, sweaty crotch of one of the orcs. His loincloth is gone, and his low-hanging green balls are shoved against your chin. His huge, thick green cock flops against your cheek, and rises as it hardens. The sweaty foreskin drawing back as his shaft inflates and grows out to its full length. He grips your face, and shoves his swollen dark-green cockhead into your mouth, before starting to vigorously and roughly fuck your throat. Your body feels hot and starts to throb with pleasure, as your confused and sluggish brain seems to focus on how good it feels to be used by manly warrior orcs.</p>The lead orc walks behind you, his huge bare feet stomping on the ground, and drops his own loincloth. He spits on his hand and rubs it over his gigantic dirty green cock, then grips your ass in both hands, and shoves forward. You gag on the cock in your throat as you feel your hole stretching to fit him, his length sliding deeper and deeper inside you and filling you from behind. He pulls out with a slick, wet sound, and then rams in, over and over, as you are used from both ends like the orc slut you are. They use you for what feels like hours, bruising and fucking you, as the stink of strong, dominant orcs fills the tavern. When the one fucking your mouth pulls out and you gasp for breath, you barely get a moment's rest before the other orc rams his way into you and they carry on. Finally, the orc in your mouth pushes in hard, grunts, and starts to unload thick ropes of hot, sticky cum deep into your throat. The lead orc leans over you and pants as you feel him cum too, releasing the heat of his seed deep into your ass. Finally, the third orc who is stroking and pumping his cock next to you, sprays your face and back with his dripping musky cum. \"You ours now, breeder orc\", the leader says, and the three of them leave you lying there covered and filled with orc seed.",
                        "descriptionchange": "This adventurer is a chubby, yet muscular orc, with deep green skin and a submissive and quiet demeanour despite their huge form.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 36,
                                "change": "set"
                            },{
                                "parameter": "submissiveness",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "become_toilet",
                "title": "Helping Out",
                "subtitle": 'The Grease Pit is often quite busy. You could try gathering glasses and assisting, and hope for a free drink. They don\'t seem like they would appreciate it, however. [Warning: Extreme TF. From Noway]',
                "type": "statcheck", //or random
                "stat": "stealth",
                "difficulty": 20,
                "requirements": [
                    {
                        "parameter": "pisscurse",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "inanimatefetish",
                "results": {
                    "success": {
                        "text": "At first, the wolverine bartender doesn't even notice that you are trying to help out. You wipe down some tables (which are immediately soaked by again by rowdy wolves), and you gather some glasses after the patrons using them over-indulge and transform into dumb donkeys.</p>You're attempting to sweep up the remains of a table damaged by a barfight, when the wolverine grabs you and snarls. \"I don't need help, dumbass. If I did, I would ask for it\", he commands. The wolverine's thick, muscular body stinks with a powerful and raunchy manly stench. You struggle to remain a clear head, and only barely manage to do so as the wolverine shoves a cheap bottle into your hands.</p>\"You can have this, but if you fuck around in here again you will regret it\", he says gruffly.",
                        "outcomes": [
                            {
                                "parameter": "wine_1",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    },
                    "fail": {
                        "text": "The wolverine bartender notices you trying to help quite quickly, as you mostly just get in everyone's way and cause a commotion. He strides over to you, his face twisted into an annoyed grimace. \"What, hoping to get a drink without paying?\", he grunts. \"Fine, I'll get you a drink. Follow me.\"</p>You follow the muscular wolverine into a room near the back of the grungy biker bar. You realise what the room is before entering, because it stinks of piss and sweat. You hesitate before going forward, but your curse starts to rise up, making you drool as you think you might be getting to taste the wolverine's hot piss. You nervously take another step, only for the wolverine to grab you and suddenly shove you down into an empty toilet stall. You end up stumbling on the broken ceramic remains of what was probably a toilet, smashed in the aftermath of a transformation or a bar brawl.</p>\"Here you go, free drink\" the wolverine grunts. His thick, sweaty black cock is already pointed at you, and he grips it in his rough hand before starting to relieve himself. As acrid, stinking piss flows over your face, you find yourself opening your mouth and letting him direct the stream directly over your tongue. The wolverine's piss is acrid and sharp, and the stench of it stings your nostrils.</p>You find yourself gulping down mouthfuls of the wolverine's piss, the vile taste of it starting to grow on you moment by moment. It warms and fills your stomach, and you find yourself feeling dizzy and tired. You have no idea how long the ram spends pissing on you, but finally he leaves without giving you a second glance.</p>You try to stand up and follow him, but your body doesn't respond. Your skin feels cold, and your limbs are stiff. You try to gasp out a cry for help, but your voice just gurgles and bubbles. A wolf enters the room, a chubby and heavy-set man in a jumpsuit. He doesn't seem to notice anything odd about you, and he nonchalantly pulls his thick musky wolf cock out from his fly and begins to piss into your still-open mouth. You find yourself unable to close it, and unable to stop yourself from swallowing his hot, salty urine. Your skin stiffens more, and begins to turn pale and smooth. Your rear starts to lean down against the ground, and the rusty remains of the previous toilet's plumbing pipe juts against your ass. You feel it slide up into you, and begin to fuse with your body. You desperate attempts to call out to the wolf go unheeded, as he leaves you in the filthy bathroom.</p>Your mouth and head change more, as they stretch out into a large bowl, and some of the remains of the wolf's urine sits at the back of your throat. It would seem you will be helping out in this bar after all - as a toilet.</p>The next person to enter the bathroom is a fat, hairy biker pig. You can barely do anything but bubble and gurgle at him, which he does not notice at all. He pulls out his fat, short cock from his leather pants, and begins to piss. His stream is messy and sprays all over your skin, leaving yellow stains. Despite your mouth now being lifeless ceramic, you can taste every drop of his rancid, dark-yellow piss. His massive boot slides over and shoves down on your crotch, and there is a loud flushing sound as you are forced to swallow. When he pulls his boot away, your crotch is left as a normal foot-pedal flushing device.</p>It seems your fate is sealed, as there is nothing left to distinguish you from any other toilet in this dirty run-down place. At the end of the day, the wolverine returns. He looks down at you, piss filling your bowl and staining your porcelain. \"Told ya you would get the drinks you needed, dumbass\", he says. He grips his sweaty cock and starts to pump it in his rough, dirty hand. The scent of his musk and arousal fills the room, and he pants and growls. Finally, cum begins to spurt and spray from his cock, splattering over the back of your throat and dripping down your rim.</p>Briefly, you hope that it will transform you into something else. Even the wolverine's obedient slut would be better than this. Unfortunately, that is not the case. You are just a toilet. \"Keep up the good work\", he says with a chuckle, and leaves you to your fate.",
                        "trapped_desc": "This toilet is covered in stains and is clearly well-used, but very rarely cleaned.",
                        "trapped": 'You are nothing but a filthy toilet trapped in the back of the grungiest, nastiest bar in the valley. You will be suffering through the growing stains and stenches of these rough thugs\' piss for a long time.',
                        "outcomes": []
                    }
                }
            },{
                "id": "greasepit_random",
                "title": "Loiter at the Grease Pit",
                "subtitle": "This isn't the sort of place where hanging around is a safe and smart idea",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "westwood",
                        "value": 0,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "default",
                "results": {
                    "Cursed Pole": {
                        "text": "You look over to one of the booths in the back of the bar, and see a tall and heavy-set wolf with shaggy, thick black fur. He's wearing a thick leather vest, and leaning back confidently as he smokes a cigarette. One of his feet is up on the table, next to the boot that he clearly just took off. A human man is rubbing his face against the wolf's huge, gritty, dirty footpaw. The man is furiously stroking and pumping his cock, leaking pre all over his hands, as well as panting and gasping with desire.</p>The wolf idly stretches and flexes his toes, and watches as the human adoringly licks between his filthy claws and worships his sweat-soaked footpaw. The man's face is covered in grime and sweat. He's clearly been obsessively kissing the wolf's foot for quite some time, and he starts to pant and whimper, before he shoves his face hard against the wolf's padded feet, as his cock erupts cum all over his chest, making a huge mess.</p>The human slowly leans back, his expression changing as he seems to come to his senses. He stammers and whimpers. \"P-please Borus, let me go, I didn't mean to...insult...you\", he says, but Borus is already pulling his other huge leather boot off, and resting his other foot on the table too. The human's terrified expression is slowly replaced by a stupid and horny look of obedient lust, as his cock stiffens and hardens again, and he shoves his face into the wolf's other massive, sweaty footpaw.",
                        "outcomes": [
                            {
                                "parameter": "muscat_1",
                                "quantity": 9,
                                "change": "add"
                            }
                        ]
                    }
                }
            }
        ],
        "npcs": [
            
        ]
    }