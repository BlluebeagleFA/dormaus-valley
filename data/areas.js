DV = typeof(DV) === 'undefined' ? {} : DV;
DV.Data = typeof(DV.Data) === 'undefined' ? {} : DV.Data;

DV.Data.areas = {
	"bar_rooms": "./data/area/bar_rooms.json", //DORMAUS VILLAGE HERE
	"bar": "./data/area/bar.json",
	"dormaus_streets": "./data/area/dormaus_streets.json",
	"dormaus_entrance": "./data/area/dormaus_entrance.json",
	"shop": "./data/area/shop.json",
	"shop_rooms": "./data/area/shop_rooms.json",
	"fountain": "./data/area/fountain.json",
	"marketplace": "./data/area/marketplace.json",
	"costume_store": "./data/area/costume_store.json",
	"mayors": "./data/area/mayors.json",
	"hotel": "./data/area/hotel.json",
	"hotel_rooms": "./data/area/hotel_rooms.json",
	"hotel_alder": "./data/area/hotel_alder.json", //Alder's Room. Accessible after his main scenario is over.
	"churchyard": "./data/area/churchyard.json",
	"church": "./data/area/church.json",
	"resetshrine": "./data/area/resetshrine.json",
	"alley": "./data/area/alleyway.json",
	"pumpkins": "./data/area/pumpkins.json",
	"backstreets": "./data/area/backstreets.json",
	"art_store": "./data/area/art_store.json",
	"catacomb_entrance": "./data/area/catacomb_entrance.json",
	"underground_ruins": "./data/area/underground_ruins.json",
	"contributor_1": "./data/area/contributor_1.json",
	"contributor_1_1": "./data/area/contributor_1_1.json",
	"contributor_1_2": "./data/area/contributor_1_2.json",
	"ping_cavern": "./data/area/ping_cavern.json",
	"ping_farmland": "./data/area/ping_farmland.json",
	"ping_forest": "./data/area/ping_forest.json",
	"ping_camp": "./data/area/ping_camp.json",
	"farmpath": "./data/area/farmpath.json", //FARM STARTS HERE
	"farmhouse": "./data/area/farmhouse.json",
	"farmfield": "./data/area/farmfield.json",
	"farmsouth": "./data/area/farmsouth.json",
	"northplains": "./data/area/northplains.json", //NORTH_OF_VILLAGE
	"horseball_inn": "./data/area/horseball_inn.json",
	"horseball_inside": "./data/area/horseball_inside.json",
	"northwoods": "./data/area/northwoods.json",
	"titancottage": "./data/area/titancottage.json",
	"titansplinter": "./data/area/titansplinter.json",
	"riverford": "./data/area/riverford.json",
	"glatisant": "./data/area/glatisant.json",
	"cavernentrance": "./data/area/cavernentrance.json", //CAVERNS
	"quartzcavern": "./data/area/quartzcavern.json",
	"wetcavern": "./data/area/wetcavern.json",
	"darkcavern": "./data/area/darkcavern.json",
	"deepestcavern": "./data/area/deepestcavern.json",
	"top_valley": "./data/area/top_valley.json", //OTTERTON
	"down_valley": "./data/area/down_valley.json",
	"beside_river": "./data/area/beside_river.json",
    "otterton_drizzlefin": "./data/area/otterton_drizzlefin.json",
	"eastwoods_entrance": "./data/area/eastwoods_entrance.json",
	"grease_lot": "./data/area/grease_lot.json",
	"greasepit": "./data/area/greasepit.json",
	"dragon_vore": "./data/area/dragon_vore.json",
	"windy_path": "./data/area/windy_path.json",
	"jacks_hideout": "./data/area/jacks_hideout.json",
	"otterton_hill": "./data/area/otterton_hill.json",
	"otterton": "./data/area/otterton.json",
	"otterton_dock": "./data/area/otterton_dock.json",
	"witch_peak": "./data/area/witch_peak.json",
	"lionquest_harem": "./data/area/lionquest_harem.json", //MAKARNAQUEST
	"lionquest_throne": "./data/area/lionquest_throne.json",
	"lionquest_sea": "./data/area/lionquest_sea.json",
	"lionquest_glowscale": "./data/area/lionquest_glowscale.json",
	"lionquest_westwood": "./data/area/lionquest_westwood.json",
	"lionquest_acecock": "./data/area/lionquest_acecock.json",
	"lionquest_aceboot": "./data/area/lionquest_aceboot.json",
	"under_graveyard": "./data/area/under_graveyard.json", //BONACIEUX QUEST
	"catacombs": "./data/area/catacombs.json",
	"above_abyss": "./data/area/above_abyss.json",
	"abyss": "./data/area/abyss.json",
	"wolf_choice": "./data/area/wolf_choice.json",
	"hornloft_1": "./data/area/hornloft_1.json", //PRISON
	"hornloft_2": "./data/area/hornloft_2.json",
	"hornloft_3": "./data/area/hornloft_3.json",
	"hornloft_4": "./data/area/hornloft_4.json",
	"hornloft_4_2": "./data/area/hornloft_4_2.json",
	"hornloft_5": "./data/area/hornloft_5.json",
	"tundra": "./data/area/tundra.json", //TUNDRA
	"kristoph_sled": "./data/area/kristoph_sled.json",
	"grancampion_workhouse": "./data/area/grancampion_workhouse.json", //GRANCAMPION
	"grancampion_slums": "./data/area/grancampion_slums.json",
	"grancampion_market": "./data/area/grancampion_market.json",
	"grancampion_store": "./data/area/grancampion_store.json",
	"silver_babylon_west": "./data/area/silver_babylon_west.json",
	"silver_babylon_foot": "./data/area/silver_babylon_foot.json",
	"silver_babylon_east": "./data/area/silver_babylon_east.json",
	"traders_road": "./data/area/traders_road.json",
	"makarna_training": "./data/area/makarna_training.json", //MAKARNA
	"makarna_market": "./data/area/makarna_market.json",
	"makarna_silk_market": "./data/area/makarna_silk_market.json",
	"makarna_dockyard": "./data/area/makarna_dockyard.json",
	"maze_1": "./data/area/maze_1.json", //MAZE
	"maze_deep": "./data/area/maze_deep.json",
	"maze_dragon": "./data/area/maze_dragon.json",
	"maze_light": "./data/area/maze_light.json",
	"belly": "./data/area/belly.json", //OTHER
    "patrons": "./data/area/patrons.json",
	"sesman_farm": "./data/area/sesman_farm.json",
	"teleportation": "./data/area/teleportation.json"
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
    "header": "Underground Ruins",
    "position": [0.40, 0.40],
    "title": "underground_ruins",
    "requirements": [
        {
            "parameter": "asong",
            "value": 3,
            "comparison": "equal" //default greater
        }
    ]
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
},{
    "header": "Titan's Cottage",
    "mapId": "worldmap.jpg",
    "position": [0.55, 0.02],
    "title": "titancottage",
    "requirements": [
        {
            "parameter": "titan_connection",
            "value": 0,
            "comparison": "greater" //default greater
        }
    ]
},{
    "header": "Ruins of Riverford",
    "mapId": "worldmap.jpg",
    "position": [0.60, 0.04],
    "title": "riverford" 
}, {
    "header": "Entry to a Dark Cavern",
    "title": "cavernentrance"
}, {
    "header": "The Glatisant",
    "title": "glatisant"
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
	"mapId": "makarna.jpg",
    "position": [0.61, 0.67],
    "title": "makarna_market"
}, {
    "header": "Silk Market",
	"mapId": "makarna.jpg",
    "position": [0.51, 0.65],
    "title": "makarna_silk_market"
}, {
    "header": "The Port of Makarna",
	"mapId": "makarna.jpg",
    "position": [0.81, 0.91],
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
},{
    "header": "The Horseball Inn",
    "title": "horseball_inn"
},{
    "header": "The Horseball Within",
    "title": "horseball_inside"
},{
    "header": "Titan Enslaved",
    "title": "titansplinter"
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
},{
    "header": "Teleportation Circle",
    "title": "teleportation"
},{
    "header": "Sesman's Farm",
    "title": "sesman_farm"
},{
    "header": "Silver Babylon Pass: West",
    "mapId": "worldmap.jpg",
    "position": [0.80, 0.04],
    "title": "silver_babylon_west" 
},{
    "header": "Foot of Silver Babylon",
    "mapId": "grancampion.jpg",
    "position": [0.19, 0.35],
    "title": "silver_babylon_foot" 
},{
    "header": "Silver Babylon Pass: East",
    "mapId": "grancampion.jpg",
    "position": [0.20, 0.34],
    "title": "silver_babylon_east" 
},{
    "header": "Trader's Road",
    "mapId": "grancampion.jpg",
    "position": [0.25, 0.38],
    "title": "traders_road" 
},{
    "header": "Gran Campion Workhouse",
    "mapId": "grancampion.jpg",
    "position": [0.4, 0.58],
    "title": "grancampion_workhouse" 
},{
    "header": "Gran Campion Slums",
    "mapId": "grancampion.jpg",
    "position": [0.39, 0.60],
    "title": "grancampion_slums" 
},{
    "header": "Gran Campion Market",
    "mapId": "grancampion.jpg",
    "position": [0.38, 0.54],
    "title": "grancampion_market" 
}]