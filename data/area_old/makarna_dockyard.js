{
        "title": "makarna_dockyard",
        "header": "The Port of Makarna",
        "nomap": "You don't know your way around this area yet. You'll have to navigate on foot.",
        "subheader": 'This busy port sits at the estuary of an enormous river that opens out to sea. Many long wooden decks have been constructed that stand over the water, and they are clustered with ships that form a forest of masts standing from the sea. Past them, the water is undisturbed far into the distance. Workers are bustling to and fro, making deals with ships and loading or unloading goods. To the north, a road leads up to the tall walls of the city itself, one end of which hangs precariously over the edge of the river. The enormous gates of the dock entrance hang invitingly open.',
        "events": [
            {
                "id": "entermarket",
                "title": "Head east to the city",
                "subtitle": "There is a large gate allowing passage deeper into the city",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { 
                        "text": "You head through the gate into the bustling crowds of the city.",
                        "area": "makarna_market",
                        "outcomes": []
                    }
                }
            },{
                "id": "dragonslave",
                "title": "Loading Cargo",
                "subtitle": "There is a ship preparing for launch at the end of the dock. It's a large, dark-painted vessel, and there are a number of crates being loaded into it by burly dockworkers. As you get closer, you see that many of the crates are actually wooden cages, with hissing, struggling scaly creatures inside.</p>A heavy-set, one-eyed orc is leaning against a pillar, and notices you watching. He puffs on a cigar and grunts at you. \"Hey, if you're gonna watch, then help us load up. We're already past shippin' off time. Got a couple coins in it for ya if you do.\", he grunts.",
                "type": "statcheck", //or random
                "stat": "magic",
                "difficulty": 40,
                "requirements": [
                ],
                "icon": "tffetish",
                "results": {
                    "success": { 
                        "text": "You agree to help, and move towards one of the big crates. The orc grabs your shoulder and shakes his head. \"Nah lubber, need ya to help on the ship. These lion boys already got this lot sorted. Here, grab this an' help the lot in the cargo bay get those drakes herded into their cages. Make sure you wear it or else they'll bite yer fingers off!\", he says.</p>He hands you a heavy, rather smelly garment. It's made of thick green scaly leather, with a hood at the top that sticks out in the front like a muzzle. As you pull it on, it drapes over your shoulders and hangs heavily. The inside of the hood feels uncomfortably warm and sticky.</p>You walk forward across the gangplank into the ship, which is swaying and moving slightly. The ship is very dark inside, and there's a thick, rank smell of animals within. You find yourself struggling to stand upright in the narrow passageway down to the cargo bay, and as the ship lurches, you fall forward onto all fours. That seems easier, so you carefully make your way down the steps. The long cloak-like scaly thing you're wearing drapes down over your back, and you start to feel sweaty and sticky as it clings to your body. The end of it drags on the floor like a long tail, and as you move, it starts to twitch and wiggle. Your hands and feet feel weird on the wooden boards, as they seem to get rougher, and your nails click and scrape against the floor. It's so dark that you can barely see anything, but then the hood seems to slide further down over your face, letting you look through a pair of eyeholes.</p>To your surprise, you can see much better this way. You blink slowly, the dark room lit up in a weird orange night-vision way. You crawl forward a bit more, as it doesn't seem to occur to you to try to stand up. Looking in the cages, you get a better view of the creatures in here. They're four legged scaly green lizards, with large leathery wings and pointed, toothy muzzles. Their orange eyes glow as they stare at you curiously, cocking their heads to the side and not reacting with violent anger like you saw them do on the dock.</p>These creatures...their scent is making you feel dizzy, and confused. Their big leather scales, their long snouts and stupid faces. No, this isn't right! You look down at your huge, scaly hands, and force yourself to stand up. The stupid cloak is cursed! You rip it off with great difficulty, struggling as the fabric clings to you like glue. Then you toss it aside, watching it wriggle and twitch before going dormant. The scent in the room is still making it hard to think, but at least your mind is slowly coming back now.</p>You look down at yourself, seeing the swamp-green scales covering your arms and chest. Your thick, clawed fingers, and your feet now huge scaly lizard feet with toes spread across the floor. A long tail is dragging behind you, and your face is stretched into a toothy muzzle. The cloak clearly had a strong effect before you managed to fight off its mental control.</p>You take a moment to rest against the side of the wall and gather your bearings, but it is at that point that you hear someone coming down the stairs. You press yourself into the dark corner out of sight. The orc from earlier crouches down and enters, peering at the cages and looking around. A rush of anger flows through you, making your eyes glow as a beastlike rage takes over. At the exact moment you lunge at him, he spots the discarded cloak, and manages to twist out of the way. Your tackle goes wide, and you land on all fours a few inches from him.</p>He quickly kicks out with his massive rough green foot, and manages to strike you on your scaly nose. You snarl, but then start to feel dizzy. The faint whiff of his manly, sweaty pirate scent is making you confused, and you back away a little.</p>The orc pulls a cutlass from his belt and takes a defensive stance. \"Well well well. A real mage, out here in the fuckin' desert? And here I thought this mana-cursed city would be a safe place to pull my little scam. Looks like you didn't get away untouched though, eh wizard?\", he says in a threatening growl. With his free hand, he pulls on his belt and lets his pants fall to the ground, then kicks them aside. His muscular, hairy green legs and thick fat bulging orc cock are totally bare. The sweaty scent of the unwashed pirate gets stronger, and you start to drool.</p>\"That little trick o' mine ain't just physical, it puts a little hitch in yer brain too. Makes these dumb lizards want to obey me, an' I think it got you too, bucko. So how about we call this even. You walk away, no harm no foul, an' we never have to see eachother again\", he says. Your eyes are staring at his fat green cock, watching it sway, and you reluctantly agree. You can tell that if it comes to close combat now, you'll end up nuzzling those fat sweaty orc balls and kissing his feet like an obedient puppy.</p>Carefully, you back away up the stairs, getting the hang of your changed body. Once you are out into the open air, you do a four-legged jump off the ship and onto the dock, making the nearby sailors yell in surprise. You stalk off, still shaking off thoughts of that hot orc's sexy sweaty body.",
                        "descriptionchange": "This adventurer is a scaly, stocky green lizard man, with a brutish, almost feral face, and thick heavy hide.",
                        "outcomes": [
                            {
                                "parameter": "species",
                                "quantity": 52,
                                "change": "set"
                            },{
                                "parameter": "watervine_1",
                                "quantity": 5,
                                "change": "add"
                            }
                        ]
                    },
                    "fail": { 
                        "text": "You agree to help, and move towards one of the big crates. The orc grabs your shoulder and shakes his head. \"Nah lubber, need ya to help on the ship. These lion boys already got this lot sorted. Here, grab this an' help the lot in the cargo bay get those drakes herded into their cages. Make sure you wear it or else they'll bite yer fingers off!\", he says.</p>He hands you a heavy, rather smelly garment. It's made of thick green scaly leather, with a hood at the top that sticks out in the front like a muzzle. As you pull it on, it drapes over your shoulders and hangs heavily. The inside of the hood feels uncomfortably warm and sticky.</p>You walk forward across the gangplank into the ship, which is swaying and moving slightly. The ship is very dark inside, and there's a thick, rank smell of animals within. You find yourself struggling to stand upright in the narrow passageway down to the cargo bay, and as the ship lurches, you fall forward onto all fours. That seems easier, so you carefully make your way down the steps. The long cloak-like scaly thing you're wearing drapes down over your back, and you start to feel sweaty and sticky as it clings to your body. The end of it drags on the floor like a long tail, and as you move, it starts to twitch and wiggle. Your hands and feet feel weird on the wooden boards, as they seem to get rougher, and your nails click and scrape against the floor. It's so dark that you can barely see anything, but then the hood seems to slide further down over your face, letting you look through a pair of eyeholes.</p>To your surprise, you can see much better this way. You blink slowly, the dark room lit up in a weird orange night-vision way. You crawl forward a bit more, as it doesn't seem to occur to you to try to stand up. Looking in the cages, you get a better view of the creatures in here. They're four legged scaly green lizards, with large leathery wings and pointed, toothy muzzles. Their orange eyes glow as they stare at you curiously, cocking their heads to the side and not reacting with violent anger like you saw them do on the dock.</p>You sniff the air, and detect an odd, spicy aroma. It draws you over to one corner, with a larger cage. The lizard inside is bigger than the others, with powerful muscular forelegs and a scarred, dark muzzle. He sniffs at you, and pushes his face to the bars. You find yourself crawling closer and looking into his stern, glowing eyes. He starts to sway his head from side to side, and tap his claws against the ground. You feel yourself blushing and growing warm and tingly. As he dances and sways, you realise this is a courting dance, and that makes you feel even stranger. The cloak seeming to cling to you tighter, wrapping around your belly. Your arms and legs getting thicker and scalier, as your growing claws dig against the boards. Your face pushes forward into a muzzle, and your thick, heavy tail sways behind you.</p>The creature gives you a smug look, and then with a fluttering sound, a crest on his head rises up, showing off a thick and tall flap of colourful patterned scales. It's so manly and powerful! You swoon and wriggle, wanting desperately to be this mature, experienced creature's mate!</p>You push your muzzle against the bars too, letting him lick and nuzzle against you. You barely notice or care when the orc from before clomps down the stairs and presses one of his large, rough green feet to your head to hold you in place. He unlocks the cage and opens it a little, then shoves you inside, before locking it again.</p>You don't care. You just cuddle up to your big powerful mate, pressing to his side as he places one strong arm around you. You both growl and chitter to eachother, while the ship lurches and pushes off to its destination.",
                        "trapped_desc": "There is a large dumb lizard creature here, awaiting transport to be sold.",
                        "trapped": 'You are a large, scaly lizard creature. A form of riding drake, designed to be trained and rode by warriors who need to glide through the air. Your scales are heavy and your wings are strong, but you are just a dumb, stubborn beast.',
                        "outcomes": []
                    }
                }
            },{
                "id": "staydragon",
                "title": "Caged and Horny",
                "subtitle": "The ship under you sways and rocks. It's irritating, and makes it hard to sleep. You crave a cave of your own, where you and your mate can make a nest and rest together. The smell of the orcs and ship are annoying. You are a wild beast! You sometimes dream you used to be something else, but that is wrong. You are an animal.",
                "trapped": true,
                "type": "random",
                "requirements": [
                ],
                "icon": "tffetish",
                "results": {
                    "pumpkin_1": {
                        "text": "You wake up, and stretch out as best you can in your small cage. Instinctively, you prowl around the edges of your wooden cage, and shove at the bars with your foreclaws, but there is still no clear means of escape.</p>You hear your mate stirring as he wakes up. His long tail slides across the wooden floor and his eyes open, glowing in the gloomy darkness of the cabin. The large lizard stands up, and walks over towards you. His broad, scaly muzzle nuzzles and strokes against your side, and his thick clawed forepaw strokes and presses against your back. You turn to look at him, and see the scaly crest on his head rising up. Your mate is in a coupling mood.</p>Your instincts start to kick in, the scent of his aroused pheromones flowing into your nose and making you shiver and feel needy and warm. You roll over onto your back, exposing your softer underbelly, and the big brutish lizard crawls forward and starts to bump and nuzzle his head between your legs. His long, flicking tongue strokes and teases over your slit, making you twitch and growl slightly as you feel it touching your sensitive parts. He sniffs you, smelling your willingness, and then starts to crawl up over you. His heavy, rough body presses down on yours, his claws digging into the wooden deck as he becomes more excited. You feel his hot, fish-stink breath blow over your face as the huge dumb beast presses down on you, and then slides his ridged shaft inside you. You feel his hard cock stretch your insides and thrust in and out of you. He rams forward forcefully, his cock pulsing and throbbing. His eyes turn a brighter yellow, rolling up in his head and leaving his gaze pupil-less as he succumbs to his basest desires. You twine your tail around his and pull him in closer, until you feel him starting to grunt and shake with pleasure.</p>Soon, a rush of heat flows up inside you, as your mate fills you with cum. You growl and snarl, feeling the pleasure of his seed fill you and prepare you for making lizard eggs. What little of your mind still remains starts to crumble and fade. You need to breed, to mate. You are a simple beast, and you must serve your mate forever.",
                        "outcomes": []
                    },
                    "pumpkin_2": {
                        "text": "You are unsure how long you have been in this cage. The swaying of the ship lulls you into a sort of dull complacence, and whenever your mind begins to spark and twitch with thought, you are quickly shoved down back into the instinctual brain of a beast by your mate's powerful scent, or his huge rough body atop you.</p>Today is one such day, where you blink and yawn, starting to feel the rough edges of normal thoughts returning to you. You look down at your stubby clawed forepaws, and shake your heavy quadrupedal body. Something feels different.</p>You reach down, touching and rubbing your belly, and then you feel it. Your stomach is bulging and round, swollen large by something. With some difficulty, you roll onto your back, and touch it with both foreclaws. You can feel large, firm objects in your belly. They are vaguely rounded, and they feel like they are pushing a firm pressure between your legs.</p>You hear the heavy steps of your mate walking closer. His broad muzzle sniffs and nuzzles at your belly, and one of his claws strokes your cheek. He is looking at your swollen bulge with what almost seems like dumb, lizardly affection.</p>Your sluggish lizard brain finally manages to realise what's happening. You are pregnant, with his eggs. The realisation comes with a second one; they are coming out. You growl and shudder, as you are forced to push and strain. The bulging round objects slowly start to squeeze down inside you. You feel them stretching out your tight, sensitive inner walls. You spread your legs, the pressure building worse and worse, until finally with a rush of relief, a wet and slick white egg slides out from your cloaca. Your mate gently rolls it aside, and nuzzles his head against yours.</p>The relief is only temporary, as you still have two more to go. You strain again, already exhausted, but with no other choice. You push and breathe deeply, feeling the next egg force its way down you, and slowly, unbearably, make its way out into the air. Your mate's warm breath blows over your face, and you look up into his glowing, simple beast eyes.</p>He seems so happy. Even with the pain and exhaustion, as you push out this next egg and look up at him, you feel a strange warm sense of pride and happiness. You and he are making new life together. The final egg slowly slides out into the world, and you flop back, utterly drained.</p>You awaken some time later, and turn to see your mate. He's curled around your three eggs, keeping them safe against his body. You stare at them, feeling your heart pound. Maybe...being a simple beast forever wouldn't be all bad...",
                        "outcomes": []
                    }
                }
            },{
                "id": "lionslave",
                "title": "A Larger, Dumber Lion",
                "subtitle": "Some of the porters working at the docks are a little different from the others. For the most part, the only manual workers you have seen have been other species, with lions just being the guards and overseers. There are a very small number of lion workers, but they are huge and muscular, wearing only rough breeches and being ordered around by other lions.</p>You go up to one lion guard on break, who is leaning against the gate and smoking. You ask him what's up with the big lions, and he rolls his eyes. \"Out of towners, always asking questions. Those are criminals. We don't send lions up to Hornloft, lions are Makarnan problems. Any lion who can't be redeemed, we make them do the ritual of beastmind, turn them into a dumb drooling moron and use them for labour. They don't even remember what they did wrong\", he says.</p>You watch the big lion getting shoved around and ordered to lift more by his overseer, and feel a pang of sympathy. He must be exhausted. Maybe you could sneak him some care and attention.",
                "type": "statcheck", //or random
                "stat": "stealth",
                "difficulty": 40,
                "requirements": [
                    {
                        "parameter": "kind",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "footfetish",
                "results": {
                    "success": { 
                        "text": "First, you decide to organise a distraction. You aren't going to be able to get close to the slave lion so long as his overseer is watching. You walk around the docks, casing the area and getting a good look at what's where. It doesn't take you long to notice one rope holding a bunch of lopsided crates together, which is straining rather dangerously.</p>You wait for a moment when the guards and overseer are distracted, then leap from one jetty to the other. You catch onto the side of the plank and pull yourself up before any of the river crocodiles get the wrong idea, then carefully untie one of the knots on the crates.</p>You duck out of sight, and wait. In only a few moments, the crates start to teeter and wobble, from where the dumb lion slave didn't stack them neatly. The overseer notices, and yelps in panic. He and two guards rush to the crates and struggle to keep them from falling into the river.</p>While they are distracted, you sidle behind them and over to the big lion. He's staring confused at the other lions, so he doesn't pay you much mind. You whisper to him to follow you, and he looks at you with a glazed, dull expression, before following you slowly to the end of the dock. You get him to sit down with you, so you can get a good look at him.</p>The lion is enormous. He's over seven feet tall, and stacked with muscle. Huge burly arms, powerful pecs and enormous feet, every part of him is massive. He is only wearing cheap, rough brown pants held up by a rope belt, and he is dripping with sweat, and smells like a barn. You suspect he doesn't understand how to clean himself properly anymore. His huge, handsome face is surrounded by a messy mane, and he has a vacant, innocent expression. You ask him if he knows why he is here. He blinks at you, and replies slowly in a calm voice. \"Work hard\", he says. You ask him if there's anything he needs, and he looks around slowly. \"Tired\", he eventually mutters.</p>You feel bad for the big dumb lion. Whatever he did before, the person he is now didn't do anything to deserve this. There's not a lot you can do for him, but you could at least pamper him a bit. You take hold of one of his massive, wide paws, and lift it up. He wiggles and flexes his toes, and you begin to massage his foot. You stroke your hands along the sole, pressing against the wide, flat pink pawpads. Sweat drips over your fingers, but you ignore both that and the rank, dirty stench as you focus on squeezing at his tight muscles and the knots of stress in his feet.</p>He sighs and grins a big, stupid grin. \"Feels good\", he says. You squeeze firmer, and stroke up and down along his sole, then rub your thumbs into his rough dirty pawpad. You feel his foot starting to vibrate, and it takes you a moment to realise he is purring, with a low loud rumble that makes his whole body shake.</p>You squeeze down on each of his toes, making sure they get rubs and attention too, before moving to his other foot. By now your hands are stained with grime and sweat, and the smell is making you lightheaded. The big lion looks so happy though, and he pushes his foot against you eagerly. You rub and pamper that one too, stroking between his toes when he spreads them, and making sure every inch of him gets a gentle squeeze and firm massage.</p>Finally, it seems like your time is up, as the overseer is looking around for his slave. The big lion leans forward, and pulls you in close before giving you an almost bone-crushing hug. \"Friend!\", he says happily, and licks your face messily. He then places you back down, and gets up to go back to work. Feels nice to do a good deed!",
                        "outcomes": [{
                            "parameter": "slave_connection",
                            "quantity": 1,
                            "change": "add",
                            "max": 2
                        }]
                    },
                    "fail": { 
                        "text": "First, you decide to organise a distraction. You aren't going to be able to get close to the slave lion so long as his overseer is watching. You walk around the docks, casing the area and getting a good look at what's where. It doesn't take you long to notice one rope holding a bunch of lopsided crates together, which is straining rather dangerously.</p>You wait for a moment when the guards and overseer are distracted, then leap from one jetty to the other. You catch onto the side of the plank and pull yourself up before any of the river crocodiles get the wrong idea, then carefully untie one of the knots on the crates.</p>You duck out of sight, and wait. In only a few moments, the crates start to teeter and wobble, from where the dumb lion slave didn't stack them neatly. The overseer notices, and yelps in panic. He and two guards rush to the crates and struggle to keep them from falling into the river.</p>While they are distracted, you sidle behind them and over to the big lion. He's staring confused at the other lions, so he doesn't pay you much mind. You whisper to him to follow you, and he looks at you with a glazed, dull expression. While you are trying to pull him over to a less conspicuous part of the dock, one of the guards notices you, and shouts. Before you can escape, three guards have surrounded you and grabbed your arms.</p>You are dragged up to the guard station, and thrown to the floor. The three lions interrogate you and ask what you were up to, and you try to explain that you were just hoping to help the slave lion feel better.</p>One of the guards, a tall and broad-shouldered one with a thick black mane, chuckles. \"Well, why didn't you say so? Lads, this little criminal just wanted to help a dirty hard working lion relax! Well, we are hard working aren't we? Sounds like we can give him what he wants!\", he growls. The three lions grin, and then start to unbuckle their thick leather sandals, before tossing them aside. Each of them has large, wide paws, which are dripping with sweat from them being on their feet patrolling all day.</p>The black lion lifts his paw, and shoves it down on your chest, pressing you to the ground. He flexes his toes on your chest, smearing dirt and sweat onto your body, while the musky, thick scent of his feet flows over you. Another guard pulls up some chairs, and they all take a seat around you, then rest their feet on your body. Three pairs of huge, sweaty lion feet, rubbing over your chest, against your cheeks, over your face. Sweaty dirty toes slide and stroke along you, the heat and smell getting more and more overpowering as your face is smeared with lion stink.</p>The black lion pushes his toes against your mouth, and when you do not open immediately, he flexes and lets his thick, large claws stroke against your face. You open your mouth after that, and let him slide his toes inside. \"Lick. You want to serve tired lions, don't you?\", he growls. You obediently lick at his rough paw pads, tasting the sweat and dirt from his long patrol. \"Don't forget between the toes. That's where it gets the most rank\", he says. He spreads his toes and makes you slide your tongue between them, tasting the sweaty and dirty space between each huge furry digit.</p>The other two lions demand service after that too, pushing their paws against eachother in their eagerness to make you kiss and lick their rough feet. By the time they finally let you leave, your face is covered in sticky lion sweat, and your mouth is dry and sticky with dirt.",
                        "outcomes": [{
                            "parameter": "guilt",
                            "quantity": 1,
                            "change": "add"
                        }]
                    }
                }
            },{
                "id": "lionslave2",
                "title": "Return of the Slave Lion",
                "subtitle": "You hear the sound of a whip cracking from one end of the pier. You wander over for a closer look, and see the slave lions being driven to carry heavy cargo. Including the one you met before. Perhaps, as a lion, you could bribe the slave driver to let you take him for a moment.",
                "type": "statcheck", //or random
                "stat": "charm",
                "difficulty": 50,
                "requirements": [
                    {
                        "parameter": "slave_connection",
                        "value": 0,
                        "comparison": "greater" //default greater
                    },{
                        "parameter": "watervine_1",
                        "value": 19,
                        "comparison": "greater" //default greater
                    },{
                        "parameter": "species",
                        "value": 14,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "footfetish",
                "results": {
                    "success": { 
                        "html": "data/active/DumberLion.html",
                        "outcomes": [
                            
                        ]
                    },
                    "fail": { 
                        "html": "data/active/DumberLionFail.html",
                        "outcomes": [
                            
                        ]
                    }
                }
            },{
                "id": "lionslave3",
                "title": "Gift from a Lion",
                "subtitle": "The slave lions are being led through the street, hauling heavy crates and barrels. One familiar one turns to look at you as he passes.",
                "type": "random",
                "requirements": [
                    {
                        "parameter": "slave_connection",
                        "value": 1,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "lotus_2",
                "results": {
                    "reluctant_horse": {
                        "text": "The lion you befriended smiles as he sees you. He grunts, and places down the enormous barrel he has been carrying atop his shoulder. Sweat drips from his bulging muscles.</p>The slavemaster lion at the back yells as he sees that, and runs forward. He cracks a long leather whip at the slave lion. \"Back to work!\", he demands.</p>The whip wraps around the slave lion's wrist as he lifts his arm up. Then, he yanks it forward, dragging the whip out of the slavemaster's grip, and almost knocking him over. The fat lion whimpers, and flees to find a guard.</p>The slave lion looks down at you, and reaches over. When his enormous hand opens up, you see a small, vibrant red flower. It has long yellow stalks in the center, and smells like incense. You take it from him, and he sighs.</p>\"Makarna...together...\", he mumbles, with difficulty. Then his eyes cloud over again, and he picks up his barrel and moves back over with the other lions.",
                        "outcomes": [
                            {
                                "parameter": "lotus_2",
                                "quantity": 1,
                                "change": "add"
                            }
                        ]
                    }
                }
            },{
                "id": "crocs_m",
                "title": "The River Crocodiles",
                "subtitle": "The jetties of the dock jut out across the wide and powerful river that bisects Makarna. Large, slow-moving creatures float along like logs in the water. One of them floats over near you, then turns around, revealing the belly and grinning face of an enormous crocodile.</p>\"Hey there cutie!\", he says in a deep rumbling voice. He pats his massive brown belly and belches. His mature, gruff face is stretched with a lecherous smile, as water drips from a thick and bushy moustache atop his snout. He continues to stroke his large hand slowly down his big, smooth belly as he talks. \"Wanna come for a swim?\"",
                "type": "statcheck", //or random
                "stat": "might",
                "difficulty": 40,
                "requirements": [
                    {
                        "parameter": "gender",
                        "value": 1,
                        "comparison": "equal" //default greater
                    }
                ],
                "icon": "vorefetish",
                "results": {
                    "success": { 
                        "text": "The look on the crocodile's face gives you the impression that his mind is more occupied with dinner than with swimming. Even so, with the guards at the gates of the dock keeping an eye on everything, surely they wouldn't stand by if you were at risk of being eaten?</p>You pull off your shoes and climb down by the side of the river. When you test the slow-moving deep waters, they are surprisingly cool despite the oppressive heat of the harsh Makarnan sun. The crocodile sinks down into the water, then rises up again in front of you. Water cascades from his huge body, as he leans in towards you. His belly presses against your body, and his thick moustache tickles your face as he leans his long snout in for a kiss. As his tongue slides against yours, he wraps his powerful scaly arms around you, then pushes away from the dockside. You are held atop his belly as he floats in the water, his thick fingers stroking along your body and pushing your clothes aside.</p>He pulls off your shirt and pants, and tosses them over onto the dock. His hands are rough as he touches along your chest, squeezing and stroking you, and then feels down your legs and thighs. His face pushes against your neck, his brushlike moustache strange and tickly compared to the leathery roughness of his thick brown scales on the rest of his body. It tickles your belly and moves further down, making you blush as he opens his mouth and very slowly slides his long tongue from between your legs, all the way up your chest.</p>As you sit atop him, you feel his bare crotch starting to bulge. A thick, glistening pink shaft emerges from a slit between his legs, growing thicker and larger as it stretches out into the air. It pushes up against you, sliding warm and wet along your legs, and you feel the crocodile dad take hold of you and start to push you down against it. His ridged tip presses against your rear, and he pushes his kiss in deeper as he slowly presses you down onto it. You shiver as you feel yourself stretched by his fat cock, which pushes firmly inch by inch deeper inside you. Everyone on the docks can see you clearly, floating on the water as this big fat crocodile dad grunts and pants, pushing himself deeper into you and then beginning to thrust and fuck you. He pounds in and out, his ridged reptilian cock feeling so odd as it pops in and out of you. His deep, manly voice rumbles as he whispers to you.</p>\"You know, we crocodiles have our own laws so long as we stay in the water, you sexy little morsel. I haven't had so much fun playing with my food in years...\", he says. His maw starts to open up, but as it does, you quickly reach up and wrap your hands around the tip of his snout. He blinks and then opens his eyes wide in surprise as you squeeze down tightly, slamming his mouth closed and holding it like that. He tries to open it, but despite his size and strength, he can't seem to pull his jaws apart with you holding them. You feel his cock pulse and gush with pre inside you, and you slowly pull yourself off it. His ridged shaft emerging from your rear as he squirms and wriggles, clearly incredibly close to orgasm. One guard up on the docks laughs as he sees you taking charge, and gives you an appreciative whistle.</p>You climb further up the crocodile's body, and press your crotch to his face. Your shaft bobs and bounces against his moustache, and you give him a stern warning look before loosening your grip and letting him open his mouth again.</p>\"Ok, daddy likes this...\", he says, almost laughing. He licks your crotch slowly, his tongue lapping against your balls and wrapping around your throbbing shaft. You push your cock into his mouth, and he sucks on it eagerly. You thrust against him, feeling his moustache tickling against your thighs, and soon you are starting to pant and feel pleasure rushing up through you. You shove firmly into his mouth, and begin to unload your own thick, hot ropes of musky cum deep into the old croc's throat. As he gulps it down, you feel something sticky and hot splatter and blast onto your back. You turn and see his huge cock pulsing and unloading as it sprays cum all over you.</p>He sighs with pleasure, and leans back into the water. For a moment you think he is about to go under, but he just pushes himself back over to the dock and allows you to step off him like he is a boat.</p>\"I like you a lot, young'un. You got spunk! I'll remember you\", he says. He then gives you a wink and sinks slowly down into the water, out of sight.",
                        "outcomes": [{
                            "parameter": "croc_connection",
                            "quantity": 1,
                            "change": "add"
                        },{
                            "parameter": "watervine_1",
                            "quantity": 5,
                            "change": "add"
                        }]
                    },
                    "fail": { 
                        "text": "The look on the crocodile's face gives you the impression that his mind is more occupied with dinner than with swimming. Even so, with the guards at the gates of the dock keeping an eye on everything, surely they wouldn't stand by if you were at risk of being eaten?</p>You pull off your shoes and climb down by the side of the river. When you test the slow-moving deep waters, they are surprisingly cool despite the oppressive heat of the harsh Makarnan sun. The crocodile sinks down into the water, then rises up again in front of you. Water cascades from his huge body, as he leans in towards you. His belly presses against your body, and his thick moustache tickles your face as he leans his long snout in for a kiss. As his tongue slides against yours, he wraps his powerful scaly arms around you, then pushes away from the dockside. You are held atop his belly as he floats in the water, his thick fingers stroking along your body and pushing your clothes aside.</p>He pulls off your shirt and pants, and tosses them over onto the dock. His hands are rough as he touches along your chest, squeezing and stroking you, and then feels down your legs and thighs. His face pushes against your neck, his brushlike moustache strange and tickly compared to the leathery roughness of his thick brown scales on the rest of his body. It tickles your belly and moves further down, making you blush as he opens his mouth and very slowly slides his long tongue from between your legs, all the way up your chest.</p>As you sit atop him, you feel his bare crotch starting to bulge. A thick, glistening pink shaft emerges from a slit between his legs, growing thicker and larger as it stretches out into the air. It pushes up against you, sliding warm and wet along your legs, and you feel the crocodile dad take hold of you and start to push you down against it. His ridged tip presses against your rear, and he pushes his kiss in deeper as he slowly presses you down onto it. You shiver as you feel yourself stretched by his fat cock, which pushes firmly inch by inch deeper inside you. Everyone on the docks can see you clearly, floating on the water as this big fat crocodile dad grunts and pants, pushing himself deeper into you and then beginning to thrust and fuck you. He pounds in and out, his ridged reptilian cock feeling so odd as it pops in and out of you. His deep, manly voice rumbles as he whispers to you.</p>\"You know, we crocodiles have our own laws so long as we stay in the water, you sexy little morsel. I haven't had so much fun playing with my food in years...\", he says. Before you can react, his mouth stretches open wide, revealing his pink, wet maw and rows of teeth. He pushes forward, sliding his mouth over your head and forcing you into the steamy darkness of his throat. All the while he holds you firmly, pumping and fucking you even as he bends forward more, pushing his mouth down over your shoulders and chest. Your head forced into his tight, wet throat, while his cock is forced into your tight ass.</p>He grunts and shudders, and you feel him thrust deep into you once more, before his cock unloads a thick, messy eruption of sticky hot cum. It floods deep into your rear, and he pulls up on you as he cums. Pulling you free of his spurting, dribbling cock, and raising his neck high into the air as he gulps and swallows you down.</p>You are dragged deep into the crocodile's throat, your rear still dripping with his cum, and forced down into the bulging hot cavern of his belly. He licks his lips and belches, before submerging himself back into the river waters with a satisfied smile.",
                        "area": "belly",
                        "outcomes": []
                    }
                }
            },{
                "id": "crocs_f",
                "title": "The River Crocodiles",
                "subtitle": "The jetties of the dock jut out across the wide and powerful river that bisects Makarna. Large, slow-moving creatures float along like logs in the water. One of them floats over near you, then turns around, revealing the belly and grinning face of an enormous crocodile.</p>\"Hey there cutie!\", he says in a deep rumbling voice. He pats his massive brown belly and belches. His mature, gruff face is stretched with a lecherous smile, as water drips from a thick and bushy moustache atop his snout. He continues to stroke his large hand slowly down his big, smooth belly as he talks. \"Wanna come for a swim?\"",
                "type": "statcheck", //or random
                "stat": "might",
                "difficulty": 40,
                "requirements": [
                    {
                        "parameter": "gender",
                        "value": 1,
                        "comparison": "nequal" //default greater
                    }
                ],
                "icon": "vorefetish",
                "results": {
                    "success": { 
                        "text": "The look on the crocodile's face gives you the impression that his mind is more occupied with dinner than with swimming. Even so, with the guards at the gates of the dock keeping an eye on everything, surely they wouldn't stand by if you were at risk of being eaten?</p>You pull off your shoes and climb down by the side of the river. When you test the slow-moving deep waters, they are surprisingly cool despite the oppressive heat of the harsh Makarnan sun. The crocodile sinks down into the water, then rises up again in front of you. Water cascades from his huge body, as he leans in towards you. His belly presses against your body, and his thick moustache tickles your face as he leans his long snout in for a kiss. As his tongue slides against yours, he wraps his powerful scaly arms around you, then pushes away from the dockside. You are held atop his belly as he floats in the water, his thick fingers stroking along your body and pushing your clothes aside.</p>He pulls off your shirt and pants, and tosses them over onto the dock. His hands are rough as he touches along your chest, squeezing and stroking you, and then feels down your legs and thighs. His face pushes against your neck, his brushlike moustache strange and tickly compared to the leathery roughness of his thick brown scales on the rest of his body. It tickles your belly and moves further down, making you blush as he opens his mouth and very slowly slides his long tongue from between your legs, all the way up your chest.</p>As you sit atop him, you feel his bare crotch starting to bulge. A thick, glistening pink shaft emerges from a slit between his legs, growing thicker and larger as it stretches out into the air. It pushes up against you, sliding warm and wet along your legs, and you feel the crocodile dad take hold of you and start to push you down against it. His ridged tip presses against your rear, and he pushes his kiss in deeper as he slowly presses you down onto it. You shiver as you feel yourself stretched by his fat cock, which pushes firmly inch by inch deeper inside you. Everyone on the docks can see you clearly, floating on the water as this big fat crocodile dad grunts and pants, pushing himself deeper into you and then beginning to thrust and fuck you. He pounds in and out, his ridged reptilian cock feeling so odd as it pops in and out of you. His deep, manly voice rumbles as he whispers to you.</p>\"You know, we crocodiles have our own laws so long as we stay in the water, you sexy little morsel. I haven't had so much fun playing with my food in years...\", he says. His maw starts to open up, but as it does, you quickly reach up and wrap your hands around the tip of his snout. He blinks and then opens his eyes wide in surprise as you squeeze down tightly, slamming his mouth closed and holding it like that. He tries to open it, but despite his size and strength, he can't seem to pull his jaws apart with you holding them. You feel his cock pulse and gush with pre inside you, and you slowly pull yourself off it. His ridged shaft emerging from your rear as he squirms and wriggles, clearly incredibly close to orgasm. One guard up on the docks laughs as he sees you taking charge, and gives you an appreciative whistle.</p>You climb further up the crocodile's body, and press your crotch to his face. Your labia strokes against his moustache, giving you a ticklish tingle and you give him a stern warning look before loosening your grip and letting him open his mouth again.</p>\"Ok, daddy likes this...\", he says, almost laughing. He licks your crotch slowly, his tongue lapping against your pussy and along your sensitive lips. You push forward meaningfully, and he takes the hint as he slides his tongue inside you, like a warm, wet fat shaft. You thrust against him, feeling his moustache tickling against your thighs, and soon you are starting to pant and feel pleasure rushing up through you. You shove firmly against his mouth, and hold firmly onto his face as you orgasm. Pleasure sends shocks of tingling sensation from your head to your toes, and you even gush fluid all over the croc's tongue. As he gulps it down, you feel something sticky and hot splatter and blast onto your back. You turn and see his huge cock pulsing and unloading as it sprays cum all over you.</p>He sighs with pleasure, and leans back into the water. For a moment you think he is about to go under, but he just pushes himself back over to the dock and allows you to step off him like he is a boat.</p>\"I like you a lot, young'un. You got spunk! I'll remember you\", he says. He then gives you a wink and sinks slowly down into the water, out of sight.",
                        "outcomes": [{
                            "parameter": "croc_connection",
                            "quantity": 1,
                            "change": "add"
                        },{
                            "parameter": "watervine_1",
                            "quantity": 5,
                            "change": "add"
                        }]
                    },
                    "fail": { 
                        "text": "The look on the crocodile's face gives you the impression that his mind is more occupied with dinner than with swimming. Even so, with the guards at the gates of the dock keeping an eye on everything, surely they wouldn't stand by if you were at risk of being eaten?</p>You pull off your shoes and climb down by the side of the river. When you test the slow-moving deep waters, they are surprisingly cool despite the oppressive heat of the harsh Makarnan sun. The crocodile sinks down into the water, then rises up again in front of you. Water cascades from his huge body, as he leans in towards you. His belly presses against your body, and his thick moustache tickles your face as he leans his long snout in for a kiss. As his tongue slides against yours, he wraps his powerful scaly arms around you, then pushes away from the dockside. You are held atop his belly as he floats in the water, his thick fingers stroking along your body and pushing your clothes aside.</p>He pulls off your shirt and pants, and tosses them over onto the dock. His hands are rough as he touches along your chest, squeezing and stroking you, and then feels down your legs and thighs. His face pushes against your neck, his brushlike moustache strange and tickly compared to the leathery roughness of his thick brown scales on the rest of his body. It tickles your belly and moves further down, making you blush as he opens his mouth and very slowly slides his long tongue from between your legs, all the way up your chest.</p>As you sit atop him, you feel his bare crotch starting to bulge. A thick, glistening pink shaft emerges from a slit between his legs, growing thicker and larger as it stretches out into the air. It pushes up against you, sliding warm and wet along your legs, and you feel the crocodile dad take hold of you and start to push you down against it. His ridged tip presses against your rear, and he pushes his kiss in deeper as he slowly presses you down onto it. You shiver as you feel yourself stretched by his fat cock, which pushes firmly inch by inch deeper inside you. Everyone on the docks can see you clearly, floating on the water as this big fat crocodile dad grunts and pants, pushing himself deeper into you and then beginning to thrust and fuck you. He pounds in and out, his ridged reptilian cock feeling so odd as it pops in and out of you. His deep, manly voice rumbles as he whispers to you.</p>\"You know, we crocodiles have our own laws so long as we stay in the water, you sexy little morsel. I haven't had so much fun playing with my food in years...\", he says. Before you can react, his mouth stretches open wide, revealing his pink, wet maw and rows of teeth. He pushes forward, sliding his mouth over your head and forcing you into the steamy darkness of his throat. All the while he holds you firmly, pumping and fucking you even as he bends forward more, pushing his mouth down over your shoulders and chest. Your head forced into his tight, wet throat, while his cock is forced into your tight ass.</p>He grunts and shudders, and you feel him thrust deep into you once more, before his cock unloads a thick, messy eruption of sticky hot cum. It floods deep into your rear, and he pulls up on you as he cums. Pulling you free of his spurting, dribbling cock, and raising his neck high into the air as he gulps and swallows you down.</p>You are dragged deep into the crocodile's throat, your rear still dripping with his cum, and forced down into the bulging hot cavern of his belly. He licks his lips and belches, before submerging himself back into the river waters with a satisfied smile.",
                        "area": "belly",
                        "outcomes": []
                    }
                }
            },{
                "id": "tootter",
                "title": "Travel to Otterton",
                "subtitle": "You find the same ship you travelled on, which luckily is just preparing to head out. They are happy to have you on board again for some more work, and you take your place again.</p>Time passes. You are waiting on the boat, as you have been for days, when you hear the cawing and screeching of seagulls. You pull yourself up and look out across the sea, and on the northern horizon you see the distant mountains of Dormaus Valley. \"Land ho!\", someone calls out, and not long after that you are pulling back in to the ports of Otterton.",
                "type": "random", //or random
                "requirements": [
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { 
                        "text": "You board the ship, and hunker down to swabbing the decks to pay for your long journey to the southern continent.</p>Much later, from above you, in the crow's nest, there is a bellowing cry of \"Land ho!\". After weeks of travel, you are approaching Makarna! The hot sun beats down on you as you look out to the shore. High stone walls of yellow-bronze brick stand tall, growing larger as the ship gets closer. Beyond them, you can see many buildings in unusual shapes and configurations. Ziggurats, like pyramids with stepped tiers, jut out into the sky, and smaller blocky buildings cluster at their feet like servants bowing to a giant. The land beyond the huge city is a gleaming golden hue, a flat plain going on seemingly forever. The ship is approaching the mouth of an enormous river, the delta of which stains the golden plains a dark, fertile black. The river bisects the city in two, but each half is larger than any other city you have seen on this world. When the ship pulls into port, you are hit by the sounds and smells of a huge and bustling metropolis. A scurry of workers swarm the long docks, tying up and preparing the boat, while others drag up carts and wheelbarrows. All of them move aside to allow passage to several tall and well-dressed lions, who start to approach the ship when the gangplank is lowered.</p>You and the other workers are forced to stay back while the captain discusses his travel passes with the lion nobles, before finally they depart and allow you to leave and walk into the hot, bustling air of the city of Makarna.",
                        "area": "otterton_dock",
                        "outcomes": []
                    }
                }
            },{
                "id": "teleotterton",
                "title": "Teleport to Otterton",
                "subtitle": "Use your magic to warp to Otterton",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "teleportation",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { 
                        "text": "You draw magic around you like a cloak, and in an instant you find yourself rushing through the sky to your destination...",
                        "area": "otterton",
                        "outcomes": []
                    }
                }
            },{
                "id": "teledorm",
                "title": "Teleport to Dormaus",
                "subtitle": "Use your magic to warp to Dormaus",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "teleportation",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { 
                        "text": "You draw magic around you like a cloak, and in an instant you find yourself rushing through the sky to your destination...",
                        "area": "dormaus_entrance",
                        "outcomes": []
                    }
                }
            },{
                "id": "telenorth",
                "title": "Teleport to the North",
                "subtitle": "Use your magic to warp to the strange voice calling to you in the deep, frozen north",
                "type": "random", //or random
                "requirements": [
                    {
                        "parameter": "teleportation",
                        "value": 0,
                        "comparison": "greater" //default greater
                    }
                ],
                "icon": "navigateicon",
                "results": {
                    "success": { 
                        "text": "You focus on the tug you felt from the north when you were initially learning to teleport. It takes very little effort to find it again, and you are quickly swept away by its call. Called north. Where it fell...",
                        "area": "tundra",
                        "outcomes": []
                    }
                }
            }
        ],
        "npcs": [
        ]
    }