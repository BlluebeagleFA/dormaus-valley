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
                        "text": "One of the orcs stands up, and approaches you. His tall warrior body is bulging with muscle, and his thick green skin glistens from droplets of sweat. He says something to the bartender in a thick, growling voice, and the ram behind the bar slams down a dirty glass with a deep, swirling green drink in it.</p>The other two orcs get up and stand behind you. The leader grunts again, and his thick, huge tusks move as he speaks. \"Drink\", he commands.</p>You hesitate, and the orc nods to his companions. They grab your arms in their huge, rough green hands, and hold you back as the orc leader grabs the glass and forces it to your lips. You struggle, and much of it spills down your chin, but you end up swallowing a large portion of the burning, sharp liquid. You immediately begin to feel dizzy and confused, your vision starting to blur and split 50/50.</p>The orcs release you, and you struggle to your feet. Your skin feels hot and itchy. You start to rub and stroke over your chest and arms, as your body feels more and more intensely sensitive. Your skin flushes with deep, grassy colour, and you find yourself pushing at your clothes, desperate to not have them brushing agaisnt you right now. The orcs eagerly assist you, as they manhandle and grope you, pulling off your clothing and tossing it aside, until you are left naked and panting, with sweat running down your body as your skin is filled completely with that dark green shade just like theirs.</p>The lead orc pulls you up, and grips around your bare waist with his muscular, scarred arm as he holds you naked against him. You pant and squirm, struggling as every touch seems to make you throb with pleasure and desperation. \"This why orcs not wear clothes, new blood\", he grunts. Your brain feels foggy and slow and dizzy, but you vaguely realise that he's speaking in his guttural, brutish orc language, and yet you can understand him.</p>As he holds you, the other two orcs start to grope and tease you. Their hands stroke over your feet, making them grow thicker and wider, as your soles become tough and leathery and firm. They squeeze and rub your legs, making you moan and struggle, while your thighs and calves bulge and harden with thick, strong muscles. The lead orc uses his free hand to slap your ass, and then grasp it firmly, feeling it thicken and bulge into a big, soft round bubble butt. He pants and growls with a lusty, aroused sound, while your belly grows rounder and harder, like a tough green beer barrel. Your arms bulge, your biceps inflating as large as footballs, with an equally leathery skin. Finally, the lead orc grips and rubs his dirty hand over your face, making your jaw crack and jut forward, as your lower teeth stretch and thicken, curving out into big thick tusks.</p>The lead orc shoves you to the ground, and the others approach you with a dirty leather loincloth that stinks of musky orc balls, and a leather harness. They wrap the harness around your chest, and the loincloth around your wide green waist. \"Perfect look for new orc breeder\", one of them says.</p>You're still too dizzy to get up, managing only to push yourself up into a crawl, when your head suddenly pushes into the stinking, sweaty crotch of one of the orcs. His loincloth is gone, and his low-hanging green balls are shoved against your chin. His huge, thick green cock flops against your cheek, and rises as it hardens. The sweaty foreskin drawing back as his shaft inflates and grows out to its full length. He grips your face, and shoves his swollen dark-green cockhead into your mouth, before starting to vigorously and roughly fuck your throat. Your body feels hot and starts to throb with pleasure, as your confused and sluggish brain seems to focus on how good it feels to be used by manly warrior orcs.</p>The lead orc walks behind you, his huge bare feet stomping on the ground, and drops his own loincloth. He spits on his hand and rubs it over his gigantic dirty green cock, then grips your ass in both hands, and shoves forward. You gag on the cock in your throat as you feel your hole stretching to fit him, his length sliding deeper and deeper inside you and filling you from behind. He pulls out with a slick, wet sound, and then rams in, over and over, as you are used from both ends like the orc slut you are. They use you for what feels like hours, bruising and fucking you, as the stink of strong, dominant orcs fills the tavern. When the one fucking your mouth pulls out and you gasp for breath, you barely get a moment's rest before the other orc rams his way into you and they carry on. Finally, the orc in your mouth pushes in hard, grunts, and starts to unload thick ropes of hot, sticky cum deep into your throat. The lead orc leans over you and pants as you feel him cum too, releasing the heat of his seed deep into your ass. Finally, the third orc who is stroking and pumping his cock next to you, sprays your face and back with his dripping musky cum. \"You ours now, breeder orc\", the leader says, and the three of them leave you lying there covered and filled with orc seed.",
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