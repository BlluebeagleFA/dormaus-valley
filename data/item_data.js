DV = typeof(DV) === 'undefined' ? {} : DV;
DV.Data = typeof(DV.Data) === 'undefined' ? {} : DV.Data;
DV.Data.item_data = {
	//Attributes
	//Note: inventory not showing correct description choice
    impossible: {
        max: 5,
        type: "attribute",
        icon: "impossible",
        title: "Impossible",
        description: ["By the decree of the World Machine, let World Four recognise a new Lord of Great Lords."]
    },
    turner_interest: {
        max: 5,
        type: "attribute",
        icon: "turnericon",
        title: "Turner [Interest]",
        description: ["You have been working on the farm with Turner."]
    },
    turner_connection: {
        type: "attribute",
        icon: "turnericong",
        title: "Turner [Friend]",
        description: ["Turner is fond of you."]
    },
	abernathy_connection: {
        type: "attribute",
        icon: "abernathy",
        title: "Abernathy [Friend]",
        description: ["You are cultivating friends in high places."]
    },
    reputation_actaeon: {
        type: "attribute",
        icon: "actaeon",
        title: "House Actaeon [Reputation]",
        description: ["You are cultivating a reputation as reliable with House Actaeon, the noble house of hooves."]
    },
	reputation_alabaster: {
        type: "attribute",
        icon: "alabaster",
        title: "House Alabaster [Reputation]",
        description: ["You are cultivating a reputation as reliable with House Alabaster, the noble house of pale fur."]
    },
    reputation_striate: {
        type: "attribute",
        icon: "alba",
        title: "House Alba [Reputation]",
        description: ["You are cultivating a reputation as reliable with House Alba, the noble house of stripes."]
    },
    ace_missing: {
        max: 1,
        type: "attribute",
        icon: "aceicon_r",
        title: "Ace [Missing]",
        description: ["Ace hasn't been seen around town for longer than usual..."]
    },
    ace_connection: {
        max: 1,
        type: "attribute",
        icon: "aceicon",
        title: "Ace [Connection]",
        description: ["Ace considers you his pathetic, obedient paw slave.",
            "Ace considers you a fellow digger.",
            "Ace harbours growing feelings for you."]
    },
    grizz_interest: {
        max: 5,
        type: "attribute",
        icon: "grizzicon",
        title: "Grizz [Interest]",
        description: ["Grizz has been watching you at work."]
    },
    grizz_connection: {
        type: "attribute",
        icon: "grizzicong",
        title: "Grizz [Friend]",
        description: ["Grizz is fond of you."]
    },
	purd_connection: {
        type: "attribute",
        icon: "purd",
        title: "Purd [Friend]",
        description: ["You have met a slow-witted cat named Purd."]
    },
	purd_self: {
        type: "attribute",
        icon: "purd",
        title: "Purd",
        description: ["You are Purd, a slow-witted cat from the Tower Spiral who has a difficult-to-control cloning power."]
    },
    doom_connection: {
        type: "attribute",
        icon: "dooms",
        title: "Doom [Friend]",
        description: ["Doom is keeping an eye on you."]
    },
    flute_interest: {
        type: "attribute",
        icon: "fluteicon",
        title: "Flute [Interest]",
        description: ["You have been working hard as Flute's assistant."]
    },
    flute_connection: {
        type: "attribute",
        icon: "fluteicong",
        title: "Flute [Connection]",
        description: ["Flute has started to change you to suit his desires."]
    },
    saberhagen_interest: {
        type: "attribute",
        icon: "saberhagenicon",
        title: "Saberhagen [Interest]",
        description: ["You have been working with Saberhagen at the bakery."]
    },
    saberhagen_connection: {
        type: "attribute",
        icon: "saberhagenicong",
        title: "Saberhagen [Connection]",
        description: ["Saberhagen has a rapidly-growing crush on you."]
    },
    gon_connection: {
        type: "attribute",
        icon: "gonicong",
        title: "Gon [Friend]",
        description: ["Gon is friend!"]
    },
    scent_obsession: {
        type: "attribute",
        icon: "everett_b",
        title: "Scent Obsession",
        description: ["You are becoming addicted to the garlicky stink of skunk musk"]
    },
    vicious_connection: {
        type: "attribute",
        icon: "viciousiconr",
        title: "Vicious [Connection]",
        description: ["Vicious is slowly forming a strange, deranged obsession with you."]
    },
    rufo_connection: {
        type: "attribute",
        icon: "rufo",
        title: "Rufo [Connection]",
        description: ["Rufo, the captain of the guard in Makarna, has feelings for you."]
    },
	alder_interest: {
        type: "attribute",
        icon: "aldericon_g",
        title: "Alder [Friend]",
        description: [
						"You and Alder are friends. His image is still fresh in your mind.",
						"You and Alder are great friends. It’s hard not to smile thinking about him."]
    },
    alder_connection: {
        type: "attribute",
        icon: "aldericon_r",
        title: "Alder [Boyfriend]",
        description: [
						"You and Alder are in a budding relationship. You feel a flutter in your stomach when you think about seeing him again.",
						"You and Alder are boyfriends. You smile whenever you think of him, and every time you sleep by yourself, you feel a little more lonely than usual; the thought of seeing him again makes you feel warm all over though, so it's not too bad."]
    },
    titan_connection: {
        type: "attribute",
        icon: "titan_b",
        title: "Titan [Connection]",
        description: ["You have met a kind, cautious boar who lives alone in the woods",
            "Titan considers you a close friend",
            "You found a worrying necromantic item in Titan's cottage. You should show it to a magician, like Saberhagen",
            "You suspect Titan is putting himself in serious danger. You should get to him, fast",
            "You rescued Titan from a terrible fate."]
    },
    titan_training: {
        type: "attribute",
        icon: "titan_b",
        title: "Titan [Training]",
        description: ["You are training Titan to be your horny little slut."]
    },
    dracolich_connection: {
        type: "attribute",
        icon: "dracolich_titan",
        title: "Dracolich [Servitude]",
        description: ["You allowed Titan to merge with the Dracolich, becoming a new and evil entity."]
    },
    black_splinter: {
        type: "attribute",
        icon: "curse",
        title: "Black Splinter",
        description: ["Diabolical. Total mind control over some, invisible to most."]
    },
    white_splinter: {
        type: "attribute",
        icon: "curse",
        title: "White Splinter",
        description: ["Puritanical. Total mind control over some, invisible to most."]
    },
    drizzlefin_connection: {
        type: "attribute",
        icon: "drizzlefin",
        title: "Connection [Drizzlefin]",
        description: ["You have are getting to know the orca fisherman Drizzlefin"]
    },
    maelstrom_time: {
        type: "attribute",
        icon: "maelstrom",
        title: "Maelstrom",
        description: ["The dark side of Drizzlefin has emerged"]
    },
    croc_connection: {
        type: "attribute",
        icon: "crocicon",
        title: "Reputation [Crocodiles]",
        description: ["You have earned some respect from the crocodile tribe in Makarna city"]
    },
    merc_connection: {
        type: "attribute",
        icon: "wolfwarrior",
        title: "Reputation [Mercs]",
        description: ["You have earned some respect from the Dormaus Valley mercenaries"]
    },
    rogue_connection: {
        type: "attribute",
        icon: "vagabond",
        title: "Reputation [Rogues]",
        description: ["You have earned some respect from the Dormaus Valley rogues"]
    },
    slave_connection: {
        type: "attribute",
        icon: "slaveicon",
        title: "Reputation [Slaves]",
        description: ["You have earned a reputation for kindness among the slave class in Makarna city"]
    },
    flute_master: {
        type: "attribute",
        icon: "fluteiconr",
        title: "Flute [Master]",
        description: ["Flute is your master. You will do anything he says."]
    },
    leonar_master: {
        type: "attribute",
        icon: "leonar_r",
        title: "Leonar [Master]",
        description: ["You met a hypnotically handsome lion, and he commanded you to come to his hotel room.", "You have a collar locked around your neck, declaring that you are a harem slave."]
    },
    robby_spell: {
        type: "attribute",
        icon: "robbyicon",
        title: "Otter Spell",
        description: ["You have a long, thick muscular furless otter tail, which Robby assures you is only temporary.", "You have a long, thick otter tail, and a short otter-like furless muzzle with sharp white teeth. All temporary, according to the otter that did this to you.", "You have a long thick otter tail, a sleek otter shaped muzzle, and your hands and feet are webbed with dark skin. You can go back at any time though, it's not like you're addicted to otterdom.", "You have fully turned into an otter, the perfect twin of Robby. You have a strong crush on the other otter."]
    },
    jack_spell: {
        type: "attribute",
        icon: "jackicon",
        title: "Raccoon Spell",
        description: ["You have a pair of flexible, furry footpaws, with dark tough soles.", "You have clawed raccoon paws, and a long striped raccoon tail. Your accent is rough and you keep swearing.", "You have a short scrawny body, with fur all over it. Your short scruffy muzzle, clawed paws, and stripy tail makes you almost a full raccoon.", "You are a raccoon, but more importantly you are a dirty criminal, with no morality and a filthy mouth that is constantly swearing and insulting people."]
    },
    jack_friend: {
        type: "attribute",
        icon: "jackicong",
        title: "Jack [Friend]",
        description: ["You have befriended a crude, smelly jerk of a raccoon.", "Jack has asked you to get him some socks from a Horn law enforcement official and bring them to his base.", "Jack has agreed to show you some of the secrets in Hornloft prison as thanks for giving him those socks."]
    },
    kristoph_friend: {
        type: "attribute",
        icon: "kristophb",
        title: "Kristoph [Friend]",
        description: ["You are getting closer to Kristoph, a healing hermit in the deep northern tundra."]
    },
    mikhail_interest: {
        max: 5,
        type: "attribute",
        icon: "mikhailicon",
        title: "Mikhail [Interest]",
        description: ["Mikhail appreciates you working at the store."]
    },
    mikhail_connection: {
        type: "attribute",
        icon: "mikhailicong",
        title: "Mikhail [Friend]",
        description: ["Mikhail is fond of you."]
    },
    seven_connection: {
        type: "attribute",
        icon: "sevenicon",
        title: "Dragon [Connection]",
        description: ["You met a dragon, in a place that might not really exist."]
    },
    trapped: {
        type: "attribute",
        icon: "inanimatefetish",
        title: "Bad End",
        description: ["Your adventure ends here...or does it?"
            //1: Bull sheath
            //2: Ram
            //3: turner's dick,
            //4: Bull fucktoy
            //5: balloon
            //6: broken balloon
            //7: Hookah smoke
            //8: mercs dog
            //9: bandits dog
            //10: urinal
            //11: sock prisoner
            //12: Titan's fox
            //13: Fog in riverford
            //14: saberhagen's dog
            //15: ritter's butler
            //16: rubber pawn
            //17: rat tail
            //18: moss
            //19: toe ring
            //20: pet seal
            //21: inflatable thing
            //22: hunted deer
            //23: bramblehound
            //24: slave statue
            //25: sperm
            //26: maelstroms blubber
            //27: maelstroms waste
            //28: maelstroms cockr
            //29: maelstroms cum
            //30: beer
			//31: barrel
			//32: in the army
			//33: mikhail's dick
			//34: shadow
			//35: desert rock
			//36: elephant cum
			//37: elephant buttplug
			//38: elephant cocksleeve
			//39: genie cock
			//40: genie slave
			//41: genie shadow
			//42: genie paw
			//43: genie ring
			//44: jackal slave
			//45: topiary
			//46: camel
			//47: seer's tattoo
        ]
    },
    species: {
        type: "attribute",
        icon: "speciesicon",
        title: "Species",
        description: [
            "You are an ordinary human.", //1
            "You are a big furry bear.", //2
            "You are a scrawny little mouse.", //3 
            "You are a furry, eager dog.", //4
            "You are a tall, winged stone gargoyle.", //5
            "You are a soft small living teddy bear.", //6
            "You are a living blue fox fursuit, made of fabric.", //7
            "You are a furry orange fox with a bushy tail", //8
            "You are a big chubby pink pig", //9,
            "You are a tall and muscular horse", //10
            "You are a slimy slug creature made of goo", //11
            "You are a powerful naga, with a snake for a lower body", //12
            "You are a monstrous tentacled illithid", //13
            "You are a sleek, golden lion", //14,
            "You are a short pudgy imp", //15
            "You are a lizard-shaped faceless crystal drone", //16
            "You are a mighty, proud wolf", //17
            "You are a skunk with a big black striped tail", //18
            "You are a lithe, magical black cat", //19
            "You are a short muscular dwarf with a thick moustache", //20
            "You are a muscular gorilla, with long hairy arms and tough grey skin", //21
            "You are a drider, a sinister creature with a huge spider for a lower half", //22
            "You are a half-wyvern, a humanoid creature with scaly skin and huge batlike wing arms", //23
            "You are a cute furry otter with a lithe and slender body", //24
            "You are a chubby seal with a round belly and smooth grey skin", //25
            "You are a cute little fruitbat with a leaf-shaped nose", //26
            "You are a fishlike creature, with webbed feet and smooth slippery skin", //27
            "You are a scruffy, short and dirty raccoon, with long and dextrous paws", //28
            "You are a soft small rabbit with strong legs and long fuzzy paws", //29
            "You are a chubby frog with long green legs and a smooth slippery belly", //30
            "You are a cow with a spotted black and white flank and large thick horns", //31
            "You are a squeaky rubber tiger with painted stripes", //32
            "You are a wooly sheep with thick curly fur and cloven hooves", //33
            "You are a slinky thin pine marten with a long fuzzy tail", //34
            "You are a scrawny rat with a long pink tail", //35
            "You are a mighty orc, a green-skinned warrior with huge tusks.", //36
            "You are a short and fuzzy flying squirrel.", //37
            "You are a donkey, with long ears and cute, scruffy fur.", //38
            "You are a horse-satyr, with your lower body transformed into the two legs of an anthro horse.", //39
            "You are a strange purple rabbit made of flickering light, with a crystal replacing your crotch.", //40
            "You are a monstrous red-furred hellhound.", //41
            "You are a smelly and brutish gnoll.", //42
            "You are an elegant arctic fox with beautiful white fur.", //43
            "You are a twitchy short and thin ermine, with a long white body.", //44
            "You are a massive, powerful polar bear, with a huge belly.", //45
            "You are a tall black panther, with a long and slender tail.", //46
            "You are a squeaky rubber panther, with a long and shiny tail.", //47
            "You are a massive grey rhinocerous with huge muscles and a heavy horn.", //48
            "You are a stocky, fuzzy badger with striped fur and a portly round belly.", //49
            "You are a living piñata, a horselike being with paper strips for fur.", //50
            "You are a large shaggy reindeer, with powerful branching antlers.", //51
            "You are a smooth, scaly lizard creature, with a long powerful tail.", //52
            "You are a mixed up chimera creature with various mismatched body parts.", //53
            "You are a gleaming golden golem, a metal lion made from solid metal with bejewelled eyes.", //54
            "You are a royal boar, a rare breed of soft-furred boar with fluffy paws", //55
            "You are a bluejay, your blue feathers soft and pretty. Your wings aren't big enough to fly, though.", //56,
            "You are a flamingo with bright pink feathers.", //57
            "You are a binturong with dark brown fur.", //58
            "You are a vaguely humanoid smoke creature.", //59
            "You are now a middle-aged stocky mole, who looks nearly identical to the image that possessed you.", //60
            "You are now a rubber cow drone, your will having been bent to a tiny bell.", //61
            "You are now a fat and hungry boar.", //62
            "You are now a half goat, half man Satyr, with a desire to party and enjoy what life has to give.", //63
            "You are a noble and agile deer.", //64
            "You have turned into a plant-based creature designed to sniff and hunt down prey.", //65
            "You are a magnificent and mystical white-furred kitsune.", //66
            "You are a smooth and agile orca.", //67
			"You are a mighty desert behemoth.", //68
			"You are a walking, talking, sculpted bush made of thin branches and green leaves, vaguely designed to look like a canine.", //69
			"You are a soft-furred skunk colored like a beautiful rainbow. The flowers that cover your big, bushy tail smell irresistible.", //70
			"You are a rugged spotted hyena with a mohawk-like mane.", //71
			"You are a short, fluffy bunny rabbit.", //72
			"You are a short, heavily armoured desert armadillo.", //73
			"You are a scaly yellow bearded lizard with spiny scales and a thick tail.", //74
			"You are a huge grey elephant with a long trunk.", //75
            ]
    },
    gender: {
        type: "attribute",
        icon: "gendericon",
        title: "Gender",
        description: ["You have male genitals.", "You have female genitals.", "You have both male and female genitals.", "You have no genitals at all."]
    },
    submissiveness: {
        type: "attribute",
        icon: "subicon",
        title: "Submissive",
        description: ["You prefer to be submissive and obedient."]
    },
    dominance: {
        type: "attribute",
        icon: "domicon",
        title: "Dominant",
        description: ["You prefer to be dominant and in control."]
    },
    westwood: {
        type: "attribute",
        icon: "westwoodicon",
        title: "Westwood Native",
        description: ["You were born in the dusty arid western deserts past Westwood."]
    },
    grancampion: {
        type: "attribute",
        icon: "campion",
        title: "Gran Campion Native",
        description: ["You were born in the wretched and miserable slums of Gran Campion."]
    },
    digger_progress: {
        type: "attribute",
        icon: "suppliess",
        title: "Dig Progress",
        description: ["You are progressing down in a digger delve."]
    },
    priest_quest: {
        type: "attribute",
        icon: "priesticong",
        title: "Hunting with Bonacieux",
        description: ["Bonacieux wants your help to defeat a monster beneath the church."]
    },
    mystery_dragons: {
        type: "attribute",
        icon: "mysterydragons",
        title: "Mystery: The Six Dragons",
        description: ["You have learned about the old religion that worshipped six colourful dragons who maintained the world. It is no longer widely believed in, but you feel like there is something important about it, hidden just below the surface.",
            "In an ancient tomb dating from the time of the original dragons, you found another mural. This one had a seventh, black, dragon painted on it. Your head itches, like there is something important you are forgetting."]
    },
    mystery_sin: {
        type: "attribute",
        icon: "thesin",
        title: "Mystery: The Sin",
        description: ["What depths would you sink to, in order to become a god?"]
    },
    mystery_sky: {
        type: "attribute",
        icon: "beneath",
        title: "Mystery: The Iron Sky",
        description: ["You caught a glimpse of something important. Something that was found buried in the snow.",
		"A gryphon named Drum found the legacy of ancient dragons, and in his form a dragon walked the world once more."]
    },
    mystery_chains: {
        type: "attribute",
        icon: "lycaeon",
        title: "Mystery: The King Without Chains",
        description: ["You caught a glimpse of something important. Something that was found for the very first time."]
    },
    makarnapolitics: {
        type: "attribute",
        icon: "makarnaicon",
        title: "Makarnan Politics",
        description: ["King Leorath was supposedly killed by tiger assassins.",
            "A tiger assassin has told you that they could not have killed King Leorath"]
    },
    asong: {
        type: "attribute",
        icon: "garethflower",
        title: "Memory of a Song",
        description: ["When you were abandoned in deep darkness, someone took care of you.",
            "A dreamlike memory has led you to a massive ruin hidden beneath Dormaus village.",
            "You are aquainted with King Gareth, the once mighty ruler of the lost Dormaus Kingdom."]
    },
    gareth_connection: {
        type: "attribute",
        icon: "gareth_g",
        title: "King Gareth [Connection]",
        description: ["You have learned the first lesson that a regent must know, the lesson of elegance.",
            "You have learned the second lesson that a regent must know, the lesson of ruthlessness."]
    },
    digger: {
        type: "attribute",
        icon: "suppliesg",
        title: "Digger",
        description: ["You are an officially licensed Digger."]
    },
    kind: {
        type: "attribute",
        icon: "kind",
        title: "Kind",
        description: ["You have a soft heart, deep down."]
    },
    cruel: {
        type: "attribute",
        icon: "cruel",
        title: "Cruel",
        description: ["You have a cold and wicked heart."]
    },
    intelligence: {
        type: "attribute",
        icon: "smart_potion",
        title: "Intelligence",
        description: ["Your intelligence and ability to reason and think."]
    },
    muskycum: {
        type: "attribute",
        icon: "smellypotion",
        title: "Musky Cum",
        description: ["A collection of warm, stinking cum."]
    },
    pisscurse: {
        type: "attribute",
        icon: "thevoid",
        title: "Curse [Piss]",
        description: ["You are cursed with an uncontrollable love of urine."]
    },
    magicuser: {
        type: "attribute",
        icon: "thevoid",
        title: "Magician",
        description: ["You can cast spells using the multiplayer chat menu. Befox (/fox username), Berabbit (/rabbit username)",
            "You can cast spells using the multiplayer chat menu. Befox (/fox username), Berabbit (/rabbit username), Vore (/vore username)"]
    },
	spiritguide: {
        type: "attribute",
        icon: "thevoid",
        title: "Spirit Guide?",
        description: ["You are carrying around a hyena spirit curse."]
    },
    oldcurse: {
        type: "attribute",
        icon: "thevoid",
        title: "Old Curse",
        description: ["You are afflicted by a strange lingering curse"]
    },
	quieted: {
        type: "attribute",
        icon: "thevoid",
        title: "Quieted",
        description: ["You have been subjected to the gryphon's Quieting ritual at least once. Your mind feels slightly dulled and content."]
    },
    sparkle: {
        type: "attribute",
        icon: "thevoid",
        title: "Sparkle",
        description: ["You have learned the spell Sparkle. It is almost completely useless, but you can use it on someone in chat by typing /sparkle username"]
    },
    teleportation: {
        type: "attribute",
        icon: "thevoid",
        title: "Teleportation",
        description: ["You have learned the spell Teleportation. With this knowledge, you can cross great distances, but only at the boundaries of cities and towns"]
    },
    time: {
        type: "attribute",
        icon: "time",
        title: "Time",
        description: ["Time is passing..."]
    },
    escape_plan: {
        type: "attribute",
        icon: "time",
        title: "Escape Plan",
        description: ["If you can unlock the unguarded door to the garbage collection point, you can slide down it to freedom without worrying about the anti-life bayonets that would kill a normal person.",
            "You have gotten your hands on a thick, tough soap bar. It will make a perfect mould for a key...",
            "You have managed to take a mould pressing of the garbage collection key, in your secret bar of soap.",
            "You have forged a very brittle and fragile key. It will probably only work once. Now you need to ensure you can survive the harsh weather outside.",
            "You have a key, and cold protection. It's time to make your escape."]
    },
    festival_time: {
        type: "attribute",
        icon: "festival",
        title: "The Festival",
        description: ["The night of the festival is getting closer."]
    },
    contributor: {
        type: "attribute",
        icon: "contributor",
        title: "Contributor",
        description: ["You contributed to the resurrection of Dormaus Valley. Thank you!"]
    },
//Items
	wine_1: {
		type: "item",
		icon: "wine_1",
		title: "Cheap Wine",
		value: 1,
		description: ["Cheap wine. Whatever transformation it had has worn off, so it's only good for getting drunk."]
	},
	wine_2: {
		type: "item",
		icon: "wine_2",
		title: "Expensive Wine",
		value: 10,
		description: ["Fancy imported wine from an Otterton vineyard. Some rich folks pay extra for this wine, even though it has no magic effect."]
	},
	gro_potion: {
		type: "item",
		icon: "gro_potion",
		title: "Growth Potion",
		value: 50,
		description: ["A potion of growth, made from ogre sweat. It almost seems to bulge out from its bottle."]
	},
	shrink_potion: {
		type: "item",
		icon: "shrink_potion",
		title: "Shrinking Potion",
		value: 50,
		description: ["A potion of shrinking, made from dwarf sweat. It almost seems to clench into its bottle."]
	},
	smart_potion: {
		type: "item",
		icon: "smart_potion",
		title: "Intelligence Potion",
		value: 50,
		description: ["A potion made from quickness fluid. Quickness fluid is a black, oily drink that gleams like a rainbow. It twitches rapidly with the slightest movement of the glass."]
	},
	dumb_potion: {
		type: "item",
		icon: "dumb_potion",
		title: "Stupidity Potion",
		value: 50,
		description: ["A potion made from horse milk. Horse milk is a creamy, swirling white fluid. It moves so slowly and thickly that you feel slow just looking at it."]
	},
	chips_1: {
		type: "item",
		icon: "chips_1",
		title: "Poker Chips",
		value: 1,
		description: ["Worn and scuffed poker chips, with playing card icons on them. On the back is the word 'Glowscale'"]
	},
	bullet_1: {
		type: "item",
		icon: "bullet_1",
		title: "Old Bullets",
		value: 5,
		description: ["Most of the people of this land call these 'Westwood Coins', but they are clearly old fashioned revolver bullets."]
	},
	muscat_1: {
		type: "item",
		icon: "muscat_1",
		title: "Muscat Guilders",
		value: 2,
		description: ["These old, tarnished coins are commonly used for bartering in Dormaus Valley. They are some of the last holdovers from the once mighty Muscat Kingdom."]
	},
	fish: {
        type: "item",
        icon: "fish",
        title: "Fish Bones",
        value: 1,
        description: ["Places that trade with the sea kingdom often have stocks of fish bones lying around. The sea people use particularly smooth and healthy fish bones as currency."]
    },
	pie_1: {
		type: "item",
		icon: "pie_1",
		title: "Pumpkin Pie",
		value: 15,
		description: ["A popular dessert in the valley, baked fresh from Dormaus Town pumpkins and preserved with enchantments."]
	},
	pie_2: {
        type: "item",
        icon: "pie_1",
        title: "Ice Cream Pie",
        value: 15,
        description: ["An ice cram pie, a Makarnan delicacy. It won't last long in the heat."]
    },
    slip: {
        type: "item",
        icon: "writ",
        title: "Servant's Writ",
        value: 30,
        description: ["An officially signed and marked seal of approval, marking the bearer as having performed adequately in service of the noble families of Gran Campion."]
    },
    writ: {
        type: "item",
        icon: "writ",
        title: "Paper Slip",
        value: 1,
        description: ["A fake servant's writ. If you obtained this, it was a bug. Please report it."]
    },
    strength: {
        type: "item",
        icon: "might",
        title: "Strength",
        value: 1,
        description: ["You are bulging with muscles. If you obtained this, it was a bug. Please report it."]
    },
    watervine_1: {
		type: "item",
		icon: "watervine_1",
		title: "Watervine",
		value: 15,
		description: ["Watervines are commonly used as currency in the sandy land of Makarna. These tough vines absorb water from the air and store it in leathery grapes."]
	},
	lotus_1: {
		type: "item",
		icon: "lotus_1",
		title: "Witch Lotus",
		value: 50,
		description: ["This rare flower grows only in places that have been suffused with a sense of great loss. Their shimmering petals pulse with magical power."]
	},
	lotus_2: {
        type: "item",
        icon: "lotus_2",
        title: "Makarnan Fire Aloe",
        value: 100,
        description: ["This flower grows in the bitter dry savannah of Makarna. In such a dry country, a flower like this is a precious rarity."]
    },
    rose_muscat: {
        type: "item",
        icon: "rose_muscat",
        title: "The Rose of Muscard",
        value: 500,
        description: ["This flower was thought lost when Dormuas Castle fell. For all these centuries, the last descendants of the royal family have kept these flowers growing, deep within the northern woods, never knowing their own heritage."]
    },
	bloodstone: {
        type: "item",
        icon: "bloodstone",
        title: "Bloodstone",
        value: 100,
        description: ["A rare, smooth gem. It is dark in colour, but shot through with glistening red veins. It forms only in areas of deep magical concentration."]
    },
	desert_supplies: {
        type: "item",
        icon: "supplies",
        title: "Desert Supplies",
        value: 10,
        description: ["Water, food and camping supplies, for adventurers braving the Makarnan wilds."]
    },
	desert_treasure: {
        type: "item",
        icon: "loot",
        title: "Desert Treasure",
        value: 60,
        description: ["Various goods and treasures obtained from your travels in the Makarnan wilds."]
    },
	canteen_empty: {
        type: "item",
        icon: "canteen",
        title: "Canteen (Empty)",
        value: 50,
        description: ["A canteen for holding water. It is empty."]
    },
	canteen_full: {
        type: "item",
        icon: "canteen",
        title: "Canteen (Full)",
        value: 50,
        description: ["A heavy canteen filled with refreshing water."]
    },
	backpack_empty: {
        type: "item",
        icon: "backpack",
        title: "Backpack (Empty)",
        value: 100,
        description: ["A heavy-duty backpack, ideal for filling with treasure."]
    },
	backpack_full: {
        type: "item",
        icon: "backpack",
        title: "Backpack (full)",
        value: 100,
        description: ["A heavy-duty backpack, filled to bursting with loot."]
    },
    supplies: {
        type: "item",
        icon: "supplies",
        title: "Supplies",
        value: 50,
        description: ["Digger supplies, everything you need to delve into caves, ruins and ancient temples."]
    },
    b_supplies: {
        type: "item",
        icon: "priesticon",
        title: "Bonacieux's Supplies",
        value: 1,
        description: ["Bonacieux is well supplied with all of the tools he needs for this trip. He should be able to bail you out at least once if trouble arises."]
    },
	ritter_cigarette: {
        type: "item",
        icon: "cigarette",
        title: "Cigaritter",
        value: 1500,
        description: ["A cigarette rolled by Ritter. The tobacco is infused with magic that helps your body recover from most wounds. Smoking can damage your lungs and cause cancer… but it’s magical; surely that won’t happen, right?"]
    },
	//Equipment
    magic_boots: {
        type: "item",
        icon: "magicboots",
        title: "Magic Boots",
        value: 500,
        slot: "feet",
        attributes: {
            magic: 2,
        },
        description: ["These light, soft fabric boots are enchanted with magical patterns that move and swirl faintly on their own."]
    },
    paw_musk: {
        type: "item",
        icon: "pawmusk",
        title: "Paw Musk",
        value: 500,
        slot: "feet",
        attributes: {
            charm: 2,
        },
        description: ["This small bottle of magic potion will cause your feet to emit a very powerful, hypnotic scent."]
    },
    cowboy_boots: {
        type: "item",
        icon: "boots_1",
        title: "Cowboy Boots",
        value: 500,
        slot: "feet",
        attributes: {
            might: 2,
        },
        description: ["These dirty boots are heavy and thick. The tips are metal-plated, and the insides are sweaty and humid with a rank, manly stench of unwashed wolf paws."]
    },
    leather_jacket: {
        type: "item",
        icon: "leatherjacket",
        title: "Leather Jacket",
        value: 300,
        slot: "clothes",
        attributes: {
            might: 1,
            charm: 1
        },
        description: ["A well-made leather jacket, both serviceable to protect you from harm, and also quite attractive. It has patches sewn into the sleeves, and the front is broken so it always hangs open and shows off your chest."]
    },
    skunk_scent: {
        type: "item",
        icon: "smellypotion",
        title: "Skunk Scent",
        value: 1800,
        slot: "clothes",
        attributes: {
            charm: 3
        },
        description: ["The scent of a horny skunk, and nothing but your bare body."]
    },
    heat_perfume: {
        type: "item",
        icon: "smellypotion",
        title: "In-Heat Perfume",
        value: 2000,
        slot: "clothes",
        attributes: {
            charm: 3,
            submissiveness: 1
        },
        description: ["The scent of a lusty, needy bitch, and nothing but your bare body."]
    },
    cigarette: {
        type: "item",
        icon: "cigarette",
        title: "Magic Cigarette",
        value: 500,
        slot: "head",
        attributes: {
            charm: 2
        },
        description: ["This foul-smelling cigarette is enchanted to never burn out. It stains your teeth and fingers yellow, yet the noxious stink makes people strangely attracted to you."]
    },
    candle_glory: {
        type: "item",
        icon: "candleofglory",
        title: "Candle of Glory",
        value: 500,
        slot: "weapon",
        attributes: {
            stealth: 2
        },
        description: ["This enchanted black candle will make your movements silent as long as you are holding it."]
    },
    paper_lantern: {
        type: "item",
        icon: "paperlantern",
        title: "A Fragile Lantern",
        value: 500,
        slot: "weapon",
        attributes: {
            might: -1,
            charm: 3
        },
        description: ["This lantern is made of a polished wooden frame and carefully painted paper stretched over it. The paintings are simple silhouettes of people and beings wearing unfamiliar clothing, giving gifts to one another. When you hold it, you feel strangely connected to the people around you, but you must be careful not to break it."]
    },
    everlasting_pitcher: {
        type: "item",
        icon: "wine_2",
        title: "Everlasting Pitcher",
        value: 500,
        slot: "weapon",
        attributes: {
            might: 3,
            charm: 5,
            magic: -2,
            stealth: -2
        },
        description: ["A bronze pitcher of wine gifted to you by a Satyr. It never runs out of high-quality wine, and you find that people tend to listen to you more after a drink or two, whether it is you or them who drink it."]
    },
    dwarf_axe: {
        type: "item",
        icon: "dwarfaxe",
        title: "Dwarven Axe",
        value: 1000,
        slot: "weapon",
        attributes: {
            might: 3
        },
        description: ["This axe is forged with the finest dwarven craftsmanship. The metal is titan ore, and it gleams with light even in the darkest depths of the earth."]
    },
    goodsword: {
        type: "item",
        icon: "goodsword",
        title: "Red Rapier",
        value: 1000,
        slot: "weapon",
        attributes: {
            might: 6
        },
        description: ["An ancient rapier, with a golden hilt. You recovered it from the body of the Glatisant. Any blade that could wound the Glatisant must have belonged to a hero of truly inconquerable might."]
    },
    goodstaff: {
        type: "item",
        icon: "goodstaff",
        title: "Golden Staff",
        value: 1000,
        slot: "weapon",
        attributes: {
            magic: 6
        },
        description: ["An ancient golden staff, taken from the body of the Glatisant. It held one last hope within its body for hundreds of years, waiting for the one who could use it."]
    },
    goodpicks: {
        type: "item",
        icon: "goodpicks",
        title: "Ivory Picks",
        value: 1000,
        slot: "weapon",
        attributes: {
            stealth: 6
        },
        description: ["A set of thief's tools, made with masterful craftsmanship from some sort of gleaming, uncorroded bronze. You stole it from the body of the Glatisant itself, and you feel like it could open any door."]
    },
    goodharp: {
        type: "item",
        icon: "goodharp",
        title: "Haunting Harp",
        value: 1000,
        slot: "weapon",
        attributes: {
            charm: 6
        },
        description: ["A beautiful harp, taken somehow from the Glatisant itself. The strings never seem to need tuning, and each vibrating tone it makes fills you with deep, bittersweet melancholy."]
    },
	funtentacle: {
        type: "item",
        icon: "default",
        title: "Tsitra's Tentacle",
        value: 1000,
        slot: "weapon",
        attributes: {
            charm: 2,
			submissiveness: 1			
        },
        description: ["A souvenir from when a charming fox left you cuffed to a bed. When you shove its ridiculous length inside you, you can’t help but remember his brilliant smile."]
    },
    nosering: {
        type: "item",
        icon: "nosering",
        title: "Minotaur Nose Ring",
        value: 100,
        slot: "head",
        attributes: {
            dominance: 1
        },
        description: ["This ornate nose ring was pawned off by a minotaur beserker. Some of his dominant essence seems to remain in the metal."]
    },
    fancyhat: {
        type: "item",
        icon: "fancyhat",
        title: "Fancy Hat",
        value: 500,
        slot: "head",
        attributes: {
            charm: 2
        },
        description: ["This big floppy hat is incredibly expensive. People tend to react favourably to people wearing expensive hats."]
    },
	desert_helm: {
        type: "item",
        icon: "magichelm",
        title: "Desert Helmet",
        value: 1000,
        slot: "head",
        attributes: {
            might: 6
        },
        description: ["An odd pith helmet, supposedly to assist with desert exploration."]
    },
    iron_helm: {
        type: "item",
        icon: "magichelm",
        title: "Muscat Helmet",
        value: 500,
        slot: "head",
        attributes: {
            might: 2
        },
        description: ["This is one of the helmets that used to be given to captains in the military of the Dormaus kingdom. It is very high quality."]
    },
	purdhat: {
        type: "item",
        icon: "purdhat",
        title: "Purd's Hat",
        value: 500,
        slot: "head",
        attributes: {
            magic: -20,
			charm: 5
        },
        description: ["Your hat was made for you by your dad, The Archivist. It seals some of your more powerful abilities, and is very jaunty."]
    },
    silver_key: {
        type: "item",
        icon: "silverkey",
        title: "Silver Key",
        value: 500,
        slot: "head",
        attributes: {
            magic: 3,
            might: -1
        },
        description: ["A key on a silver chain, designed to represent your power over Saberhagen. He wasn't entirely sober when he agreed to it, so the magic is not complete, but it still glows with a faint connection to his enormous reserves of magical energy."]
    },
    skull_mask: {
        type: "item",
        icon: "skullmask",
        title: "Ritual Mask",
        value: 1200,
        slot: "head",
        attributes: {
            magic: 3,
            charm: 1,
            might: 1
        },
        description: ["This bone mask is shaped like a large lizard's skull. It is clearly ancient, and it hums with incredible magical power. When you wear it, you hear faint echoes of the past."]
    },
    stone_shield: {
        type: "item",
        icon: "stoneshield",
        title: "Stone Shield",
        value: 800,
        slot: "weapon",
        attributes: {
            magic: 1,
            might: 2
        },
        description: ["This ancient stone tablet is engraved with a long-forgotten language. It has an aura of danger, and can be wielded as a shield, if you hold it with both hands."]
    },
    half_key: {
        type: "item",
        icon: "halfkey",
        title: "Half Key",
        value: 500,
        slot: "weapon",
        attributes: {
            charm: 1,
            might: 1,
            stealth: 1,
            magic: 1
        },
        description: ["A peculiar key, given to you in a drunken haze by Jack. You should probably return it to him eventually when you think of a way to do so that won't embarrass him too much. Despite looking like gold, the material is sturdy and scratch resistant. It seems like there is a missing piece to it. At the top is engraved the words 'THE WORLD'. It makes you feel strange when you hold it."]
    },
    ace_boots: {
		type: "item",
		icon: "boots_1",
		title: "Ace's Old Boots",
		value: 10,
		slot: "feet",
		attributes: {
			might: 1,
			stealth: -1
		},
		description: ["Ace's scuffed and dirty old cowboy boots. They make you feel tough, but the stink is going to make it hard to be stealthy."]
	},
	mikhail_socks: {
		type: "item",
		icon: "socks_1",
		title: "Mikhail's Socks",
		value: 20,
		slot: "feet",
		attributes: {
			charm: 1
		},
		description: ["These warm socks smell strongly of Mikhail the dog's warm, masculine scent. They wiggle and move very slightly, suggesting they may have once been adventurers. The scent is strangely appealing."]
	},
	vicious_socks: {
        type: "item",
        icon: "socks_1",
        title: "Vicious's Socks",
        value: 20,
        slot: "feet",
        attributes: {
            might: 1
        },
        description: ["Vicious's socks, torn from his claws and splattered with blood. They make you feel like a scary psycho just like him."]
    },
	slutty_shirt: {
		type: "item",
		icon: "shirt_1",
		title: "Slutty Shirt",
		value: 1,
		slot: "clothes",
		attributes: {
			outcast: 1,
			submissiveness: 1
		},
		description: ["This loud pink shirt proclaims to everyone around that you are a slut for foxes, or possibly that you are a slutty fox. It's incredibly embarrassing."]
	},
	prison_shirt: {
        type: "item",
        icon: "prisonshirt",
        title: "Prison Shirt",
        value: 100,
        slot: "clothes",
        attributes: {
            stealth: 1
        },
        description: ["This shirt was thrown away by an escaped convict from Hornloft prison. Some of his sneakiness seems to have rubbed off on it."]
    },
    water_cloth: {
        type: "item",
        icon: "watercloth",
        title: "Falling Water Robe",
        value: 500,
        slot: "clothes",
        attributes: {
            magic: 2
        },
        description: ["This shimmering, smooth silken fabric moves almost like water falling through the air. It is woven with great magical skill."]
    },
	old_sword: {
		type: "item",
		icon: "sword_1",
		title: "Knight's Sword",
		value: 100,
		slot: "weapon",
		attributes: {
			might: 1
		},
		description: ["This old sword used to belong to one of the Knights of Muscat, when Dormaus Valley was one huge kingdom. It's been reforged a lot since then."]
	},
	magic_hat: {
		type: "item",
		icon: "magic_hat",
		title: "Conjurer's Hat",
		value: 100,
		slot: "head",
		attributes: {
			magic: 1
		},
		description: ["The shape and design of a wizard's hat is meant to channel magic into your head. This one is a bit old and the charm is tarnished, but it still works."]
	},
	comb: {
		type: "item",
		icon: "comb",
		title: "Ivory Comb",
		value: 100,
		slot: "weapon",
		attributes: {
			charm: 1
		},
		description: ["When you're wielding a fancy comb, you are always prepared for the challenge of a social engagement."]
	},
	pistol: {
        type: "item",
        icon: "duelpistol",
        title: "Engraved Pistol",
        value: 5000,
        slot: "weapon",
        attributes: {
            might: 5
        },
        description: ["A beautifully ornate pistol, inlaid with silver. The engraving reads 'For my little brother. I will always protect you. Deus.'"]
    },
	useless_raccoon: {
		type: "item",
		icon: "useless_raccoon",
		title: "Useless Raccoon",
		value: 25,
		slot: "ally",
		attributes: {
			might: -25,
			magic: -25,
			charm: -25,
			stealth: -25
		},
		description: ["This raccoon is completely useless. Just absolutely terrible at everything, and constantly getting in the way."]
	},
	useless_collar: {
        type: "item",
        icon: "uselesscollar",
        title: "Useless Collar",
        value: 1,
        slot: "head",
        attributes: {
            might: -250,
            magic: -250,
            charm: -250,
            stealth: -250
        },
        description: ["While wearing this blue leather collar you can not help but feel the need to just give up and submit to whatever would exert influence over you, on the front of it is a tag showing the smiling face of a familiar raccoon."]
    },
	horse_son: {
        type: "item",
        icon: "horseson",
        title: "Horse Son",
        value: 25,
        slot: "ally",
        attributes: {
            might: 1
        },
        description: ["This is your son, a strong and healthy colt. He's quite strong, just like his father."]
    },
    useful_raccoon: {
        type: "item",
        icon: "usefulraccoon",
        title: "Useful Raccoon",
        value: 1,
        slot: "ally",
        attributes: {
            might: 5,
            magic: 5,
            stealth: 5,
            charm: 5
        },
        description: ["This raccoon looks exactly like the useless raccoons, but he is unable to talk about anime all the time like they do, because he has an important deadline. While he clatters away on his laptop, the game will go more smoothly for you."]
    },
    stallion: {
        type: "item",
        icon: "horseson",
        title: "Black Stallion",
        value: 50,
        slot: "ally",
        attributes: {
            might: 3
        },
        description: ["A formerly mighty black stallion, bulging with muscle but still only a shadow of his formerly dominant self."]
    },
    saurus: {
        type: "item",
        icon: "saurus",
        title: "Saurus",
        value: 1000,
        slot: "ally",
        attributes: {
            might: 3
        },
        description: ["Your saurus is a large bipedal lizard. Its purple skin is smooth and firm, and its legs are enormous and muscular. Wide-splayed toes allow it to walk over the sand, and it's strong enough for you to ride on its back, using its large horn as a handle."]
    },
	tarragon: {
        type: "item",
        icon: "tarragon",
        title: "Tarragon",
        value: 50,
        slot: "ally",
        attributes: {
            charm: 1
        },
        description: ["Tarragon is your 'dragon' master. In truth he's just a normal tiny lizard who likes to sit on your shoulder, and order you around."]
    },
	slavetiger: {
        type: "item",
        icon: "slavetiger",
        title: "Tiger Slave",
        value: 50,
        slot: "ally",
        attributes: {
            might: 2,
            stealth: 1
        },
        description: ["This tiger warrior's will has been utterly crushed by black magic. He is obedient, but a shadow of his former self."]
    },
    slavewolf: {
        type: "item",
        icon: "hypnowolf",
        title: "Wolf Slave",
        value: 50,
        slot: "ally",
        attributes: {
            might: 2,
            charm: 1
        },
        description: ["This wolf was once a proud and mighty warrior. A cursed collar from the northern forest has degraded him to nothing but an obedient dog."]
    },
    goblins: {
        type: "item",
        icon: "goblin",
        title: "Goblin Gang",
        value: 50,
        slot: "ally",
        attributes: {
            stealth: 1,
            charm: -1,
            might: 1
        },
        description: ["A gaggle of obedient, stupid smelly goblins who desperately want to do everything you say."]
    },
    skin_beneath: {
        type: "item",
        icon: "beneath",
        title: "The Skin Beneath",
        value: 1,
        slot: "memory",
        attributes: {
            magic: 1,
            might: 1
        },
        description: ["We all place barriers between ourselves and the world. Shells of pretence and masks of actions and behaviours to trick the world that we are the person we want them to think we are. Yet under it all, even the hardest and strongest of us are vulnerable."]
    },
    damaged: {
        type: "item",
        icon: "damaged",
        title: "Damaged",
        value: 1,
        slot: "memory",
        attributes: {
            might: 2,
            charm: -1
        },
        description: ["Beyond repair? Perhaps. We are all shaped by the scars of our past. Or perhaps only looking for someone, someone who's broken edges match with your own to make a whole."]
    },
    royal_knight: {
        type: "item",
        icon: "royalknight",
        title: "A Duty",
        value: 1,
        slot: "memory",
        attributes: {
            might: 2
        },
        description: ["Until the last of the Royal Line of Dormaus Valley leaves this world, you will serve and protect them. No matter what the cost."]
    },
    howl: {
        type: "item",
        icon: "howl",
        title: "The Howl",
        value: 1,
        slot: "memory",
        attributes: {
            magic: 1,
            charm: 1
        },
        description: ["Even over incredible distances, the people you love are still connected to you. You may not be able to see them, but if you close your eyes you can hear them in your heart."]
    },
	//Troubles
	pain: {
		type: "suffering",
		icon: "pain",
		title: "Pain: [Trouble]",
		description: ["You've got some scrapes and bruises.",
			"You are noticeably hurt. You should take it easy.",
			"You are badly injured. You should get some rest.",
			"You have suffered grievous wounds. You desperately need help.",
			"You are on the brink of death. You can barely move."]
	},
	outcast: {
		type: "suffering",
		icon: "outcast",
		title: "Outcast: [Trouble]",
		description: ["You've made a few flubs that people noticed.",
			"You are embarrassed by a number of mixups and bad choices.",
			"You are starting to get a bad reputation around town.",
			"You are humiliated by your constant mistakes, and it's hard to get respect.",
			"You are a laughing stock, and people are refusing to associate with you."]
	},
	guilt: {
		type: "suffering",
		icon: "guilt",
		title: "Guilt: [Trouble]",
		description: ["A few people suspect you are up to no good.",
			"You have committed a number of crimes and people are getting suspicious.",
			"You have a reputation for being someone who can't be trusted.",
			"You are known by everyone as being a lout and a criminal.",
			"You are a wanted criminal, and justice is hunting you down."]
	},
	curse: {
		type: "suffering",
		icon: "curse",
		title: "Curse: [Trouble]",
		description: ["Something has noticed you.",
			"Your skin itches and you are feeling paranoid.",
			"You are having nightmares of enormous shadowy creatures, hunting for you.",
			"You see strange shapes and shadows in the corner of your eye, everywhere.",
			"A terrible presence constantly feels right behind you, waiting to strike."]
	},
	//Addictions
	nicotine: {
		type: "attribute",
		icon: "nicotine",
		title: "Nicotine: [Addiction]",
		description: ["You’ve tried smoking once or twice. While it has left a good impression, you’re still skeptical.",
			"Smoking is becoming a habit for you. While it’s still hard for you to accept currently, you can feel your 	resistances weaken each time you feel the rush circulate through your body.",
			"You’re addicted to smoking. You are fond of the smell of a cigar or a cigarette, and just watching others smoke is enough to make your entire body tingle in need. While it’s an expensive and unhealthy habit, there’s not a single part of you that wants to quit."]
	},
	//Stats
	might: {
		type: "stat",
		icon: "might",
		title: "Might",
		description: ["Might describes your ability to handle yourself with physical force."]
	},
	magic: {
		type: "stat",
		icon: "magic",
		title: "Magic",
		description: ["Magic is your intelligence and control over magical energy."]
	},
	charm: {
		type: "stat",
		icon: "charm",
		title: "Charm",
		description: ["Charm is your ability to handle yourself in social situations."]
	},
	stealth: {
		type: "stat",
		icon: "stealth",
		title: "Stealth",
		description: ["Stealth describes your sneakiness and treacherousness."]
	}
};