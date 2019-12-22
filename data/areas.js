DV = typeof(DV) === 'undefined' ? {} : DV;
DV.Data = typeof(DV.Data) === 'undefined' ? {} : DV.Data;

DV.Data.areas = {
	"bar_rooms": "./data/area/bar_rooms.js", //DORMAUS VILLAGE HERE
	"bar": "./data/area/bar.js",
	"dormaus_streets": "./data/area/dormaus_streets.js",
	"dormaus_entrance": "./data/area/dormaus_entrance.js",
	"shop": "./data/area/shop.js",
	"shop_rooms": "./data/area/shop_rooms.js",
	"fountain": "./data/area/fountain.js",
	"marketplace": "./data/area/marketplace.js",
	"costume_store": "./data/area/costume_store.js",
	"mayors": "./data/area/mayors.js",
	"hotel": "./data/area/hotel.js",
	"hotel_rooms": "./data/area/hotel_rooms.js",
	"hotel_alder": "./data/area/hotel_alder.js", //Alder's Room. Accessible after his main scenario is over.
	"churchyard": "./data/area/churchyard.js",
	"church": "./data/area/church.js",
	"resetshrine": "./data/area/resetshrine.js",
	"alley": "./data/area/alleyway.js",
	"pumpkins": "./data/area/pumpkins.js",
	"backstreets": "./data/area/backstreets.js",
	"art_store": "./data/area/art_store.js",
	"catacomb_entrance": "./data/area/catacomb_entrance.js",
	"contributor_1": "./data/area/contributor_1.js",
	"contributor_1_1": "./data/area/contributor_1_1.js",
	"contributor_1_2": "./data/area/contributor_1_2.js",
	"farmpath": "./data/area/farmpath.js", //FARM STARTS HERE
	"farmhouse": "./data/area/farmhouse.js",
	"farmfield": "./data/area/farmfield.js",
	"farmsouth": "./data/area/farmsouth.js",
	"northplains": "./data/area/northplains.js", //NORTH_OF_VILLAGE
	"northwoods": "./data/area/northwoods.js",
	"cavernentrance": "./data/area/cavernentrance.js", //CAVERNS
	"quartzcavern": "./data/area/quartzcavern.js",
	"wetcavern": "./data/area/wetcavern.js",
	"darkcavern": "./data/area/darkcavern.js",
	"deepestcavern": "./data/area/deepestcavern.js",
	"top_valley": "./data/area/top_valley.js", //OTTERTON
	"down_valley": "./data/area/down_valley.js",
	"beside_river": "./data/area/beside_river.js",
	"eastwoods_entrance": "./data/area/eastwoods_entrance.js",
	"grease_lot": "./data/area/grease_lot.js",
	"greasepit": "./data/area/greasepit.js",
	"dragon_vore": "./data/area/dragon_vore.js",
	"windy_path": "./data/area/windy_path.js",
	"jacks_hideout": "./data/area/jacks_hideout.js",
	"otterton_hill": "./data/area/otterton_hill.js",
	"otterton": "./data/area/otterton.js",
	"otterton_dock": "./data/area/otterton_dock.js",
	"witch_peak": "./data/area/witch_peak.js",
	"lionquest_harem": "./data/area/lionquest_harem.js", //MAKARNAQUEST
	"lionquest_throne": "./data/area/lionquest_throne.js",
	"lionquest_sea": "./data/area/lionquest_sea.js",
	"lionquest_glowscale": "./data/area/lionquest_glowscale.js",
	"lionquest_westwood": "./data/area/lionquest_westwood.js",
	"lionquest_acecock": "./data/area/lionquest_acecock.js",
	"lionquest_aceboot": "./data/area/lionquest_aceboot.js",
	"under_graveyard": "./data/area/under_graveyard.js", //BONACIEUX QUEST
	"catacombs": "./data/area/catacombs.js",
	"above_abyss": "./data/area/above_abyss.js",
	"abyss": "./data/area/abyss.js",
	"wolf_choice": "./data/area/wolf_choice.js",
	"hornloft_1": "./data/area/hornloft_1.js", //PRISON
	"hornloft_2": "./data/area/hornloft_2.js",
	"hornloft_3": "./data/area/hornloft_3.js",
	"hornloft_4": "./data/area/hornloft_4.js",
	"hornloft_4_2": "./data/area/hornloft_4_2.js",
	"hornloft_5": "./data/area/hornloft_5.js",
	"tundra": "./data/area/tundra.js", //TUNDRA
	"kristoph_sled": "./data/area/kristoph_sled.js",
	"makarna_training": "./data/area/makarna_training.js", //MAKARNA
	"makarna_market": "./data/area/makarna_market.js",
	"makarna_silk_market": "./data/area/makarna_silk_market.js",
	"makarna_dockyard": "./data/area/makarna_dockyard.js",
	"maze_1": "./data/area/maze_1.js", //MAZE
	"maze_deep": "./data/area/maze_deep.js",
	"maze_dragon": "./data/area/maze_dragon.js",
	"maze_light": "./data/area/maze_light.js",
	"belly": "./data/area/belly.js", //OTHER
    "patrons": "./data/area/patrons.js"
}

DV.Data.areacoordinates = [{
    "header": "The Fur and Feather Stalls",
    "position": [0.72, 0.71],
    "title": "bar_rooms"
}, {
    "header": "The Fur and Feather Bar",
    "position": [0.76, 0.74],
    "title": "bar"
}, {
    "header": "The Streets of Dormaus",
    "position": [0.74, 0.79],
    "title": "dormaus_streets"
}, {
    "header": "Dormaus Gates",
    "position": [0.84, 0.85],
    "title": "dormaus_entrance"
}, {
    "header": "The Want of a Nail General Store",
    "position": [0.66, 0.77],
    "title": "shop"
}, {
    "header": "The Want of a Nail Back Rooms",
    "position": [0.61, 0.72],
    "title": "shop_rooms"
}, {
    "header": "Fountain Plaza",
    "position": [0.24, 0.8],
    "title": "fountain"
}, {
    "header": "Costume Store",
    "position": [0.42, 0.71],
    "title": "costume_store"
}, {
    "header": "Town Hall",
    "position": [0.15, 0.71],
    "title": "mayors"
}, {
    "header": "The Two Feathers Inn",
    "position": [0.94, 0.73],
    "title": "hotel"
}, {
    "header": "The Two Feathers Inn: Bedroom",
    "position": [0.93, 0.65],
    "title": "hotel_rooms"
}, {
    "header": "Alder's Room",
    "mapId": "dormausvillage.jpg",
    "position": [-1, -1],
    "title": "hotel_alder"
}, {
    "header": "Churchyard",
    "position": [0.74, 0.57],
    "title": "churchyard"
}, {
    "header": "Temple of the First Dragon",
    "position": [0.77, 0.54],
    "title": "church"
}, {
    "header": "Temple of Memory",
    "mapId": "dormausvillage.jpg",
    "position": [-1, -1],
    "title": "resetshrine"
}, {
    "header": "Alleyway",
    "position": [0.25, 0.6],
    "title": "alley"
}, {
    "header": "Pumpkin Patch",
    "position": [0.3, 0.53],
    "title": "pumpkins"
}, {
    "header": "Hue Upon Stone Art Store",
    "position": [0.35, 0.64],
    "title": "art_store"
}, {
    "header": "Catacombs",
    "title": "catacomb_entrance"
}, {
    "header": "The Chamber",
    "mapId": "dormausvillage.jpg",
    "position": [-1, -1],
    "title": "contributor_1"
}, {
    "header": "The Crevasse",
    "mapId": "dormausvillage.jpg",
    "position": [-1, -1],
    "title": "contributor_1_1"
}, {
    "header": "Underground Pool",
    "mapId": "dormausvillage.jpg",
    "position": [-1, -1],
    "title": "contributor_1_2"
}, {
    "header": "Farm Path",
    "mapId": "worldmap.jpg",
    "position": [0.51, 0.24],
    "title": "farmpath"
}, {
    "header": "Morgan Farmhouse",
    "mapId": "worldmap.jpg",
    "position": [0.51, 0.29],
    "title": "farmhouse"
}, {
    "header": "Scrubby Farmland",
    "mapId": "worldmap.jpg",
    "position": [0.57, 0.29],
    "title": "farmfield"
}, {
    "header": "Farm South Exit",
    "mapId": "worldmap.jpg",
    "position": [0.49, 0.31],
    "title": "farmsouth"
}, {
    "header": "Northern Plains",
    "mapId": "worldmap.jpg",
    "position": [0.53, 0.12],
    "title": "northplains"
}, {
    "header": "Approaching the Woods",
    "mapId": "worldmap.jpg",
    "position": [0.45, 0.02],
    "title": "northwoods"
}, {
    "header": "Entry to a Dark Cavern",
    "title": "cavernentrance"
}, {
    "header": "Quartz Cavern",
    "title": "quartzcavern"
}, {
    "header": "Wet Cavern",
    "title": "wetcavern"
}, {
    "header": "Dark Cavern",
    "title": "darkcavern"
}, {
    "header": "Deepest Caverns",
    "title": "deepestcavern"
}, {
    "header": "Top of the Valley",
    "mapId": "worldmap.jpg",
    "position": [0.45, 0.36],
    "title": "top_valley"
}, {
    "header": "Down the Valley",
    "mapId": "worldmap.jpg",
    "position": [0.42, 0.49],
    "title": "down_valley"
}, {
    "header": "Beside the River",
    "mapId": "worldmap.jpg",
    "position": [0.44, 0.65],
    "title": "beside_river"
}, {
    "header": "The Eastwoods",
    "mapId": "worldmap.jpg",
    "position": [0.29, 0.65],
    "title": "eastwoods_entrance"
}, {
    "header": "Grease Pit Lot",
    "mapId": "worldmap.jpg",
    "position": [0.27, 0.67],
    "title": "grease_lot"
}, {
    "header": "The Grease Pit",
    "title": "greasepit"
}, {
    "header": "Decision: Lunchtime",
    "title": "dragon_vore"
}, {
    "header": "Windy Path",
    "mapId": "worldmap.jpg",
    "position": [0.44, 0.75],
    "title": "windy_path"
}, {
    "header": "Jack's Hideout",
    "title": "jacks_hideout"
}, {
    "header": "Hill Above Otterton",
    "mapId": "worldmap.jpg",
    "position": [0.41, 0.81],
    "title": "otterton_hill"
}, {
    "header": "Otterton",
    "mapId": "worldmap.jpg",
    "position": [0.41, 0.85],
    "title": "otterton"
}, {
    "header": "Otterton Dock",
    "mapId": "worldmap.jpg",
    "position": [0.43, 0.87],
    "title": "otterton_dock"
}, {
    "header": "Witch's Peak Bluff",
    "mapId": "worldmap.jpg",
    "position": [0.39, 0.89],
    "title": "witch_peak"
}, {
    "header": "The Harem of Makarna",
    "title": "lionquest_harem"
}, {
    "header": "The Throne of Makarna",
    "title": "lionquest_throne"
}, {
    "header": "The Deck of the Jolly Wolfpits",
    "title": "lionquest_sea"
}, {
    "header": "Glowscale Docks",
    "title": "lionquest_glowscale"
}, {
    "header": "Outlaw Hills",
    "title": "lionquest_westwood"
}, {
    "header": "In Ace's Pants",
    "title": "lionquest_acecock"
}, {
    "header": "On Ace's Feet",
    "title": "lionquest_aceboot"
}, {
    "header": "Beneath the Graveyard",
    "title": "under_graveyard"
}, {
    "header": "Deep Catacombs",
    "title": "catacombs"
}, {
    "header": "Approach to an Abyss",
    "title": "above_abyss"
}, {
    "header": "Abyssal Chamber",
    "title": "abyss"
}, {
    "header": "Decision: The Howl",
    "title": "wolf_choice"
}, {
    "header": "Hornloft Prison",
    "title": "hornloft_1"
}, {
    "header": "Hornloft Prison",
    "title": "hornloft_2"
}, {
    "header": "Hornloft Prison",
    "title": "hornloft_3"
}, {
    "header": "Hornloft Prison",
    "title": "hornloft_4"
}, {
    "header": "Hornloft Prison",
    "title": "hornloft_4_2"
}, {
    "header": "Hornloft Prison",
    "title": "hornloft_5"
}, {
    "header": "Lost",
    "title": "tundra"
}, {
    "header": "Reindeer Sled",
    "title": "kristoph_sled"
}, {
    "header": "Makarna Training Yard",
    "title": "makarna_training"
}, {
    "header": "Sea Gate Road",
    "title": "makarna_market"
}, {
    "header": "Silk Market",
    "title": "makarna_silk_market"
}, {
    "header": "The Port of Makarna",
    "title": "makarna_dockyard"
}, {
    "header": "Memory Maze",
    "title": "maze_1"
}, {
    "header": "Deep Memory",
    "title": "maze_deep"
}, {
    "header": "Dragon's Nest",
    "title": "maze_dragon"
}, {
    "header": "Memory Maze",
    "title": "maze_light"
}, {
    "header": "Someone's Stomach",
    "title": "belly"
}, {
    "header": "The Patron's Ballroom",
    "mapId": "dormausvillage.jpg",
    "position": [-1, -1],
    "title": "patrons"
}, {
    "header": "Dormaus Marketplace",
    "position": [0.33, 0.71],
    "title": "marketplace"
}, {
    "header": "Backstreets",
    "position": [0.4, 0.6],
    "title": "backstreets"
}]