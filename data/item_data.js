DV = typeof(DV) === 'undefined' ? {} : DV;
DV.Data = typeof(DV.Data) === 'undefined' ? {} : DV.Data;
DV.Data.item_data = {
	//Attributes
	//Note: inventory not showing correct description choice
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
        icon: "jackicon_g",
        title: "Jack [Friend]",
        description: ["You have befriended a crude, smelly jerk of a raccoon."]
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
            "You are a scruffy, short and dirty raccoon, with long and dextrous paws" //28
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
    digger_progress: {
        type: "attribute",
        icon: "suppliess",
        title: "Dig Progress",
        description: ["You are progressing down in a digger delve."]
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
    pisscurse: {
        type: "attribute",
        icon: "thevoid",
        title: "Curse [Piss]",
        description: ["You are cursed with an uncontrollable love of urine."]
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
	bloodstone: {
        type: "item",
        icon: "bloodstone",
        title: "Bloodstone",
        value: 100,
        description: ["A rare, smooth gem. It is dark in colour, but shot through with glistening red veins. It forms only in areas of deep magical concentration."]
    },
    supplies: {
        type: "item",
        icon: "supplies",
        title: "Supplies",
        value: 50,
        description: ["Digger supplies, everything you need to delve into caves, ruins and ancient temples."]
    },
	//Equipment
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