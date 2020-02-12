$(document).ready(function() {

	iconSelect = new IconSelect("icon", 
        {'selectedIconWidth':50,
        'selectedIconHeight':75,
        'selectedBoxPadding':5,
        'iconsWidth':50,
        'iconsHeight':75,
        'boxIconSpace':3,
        'vectoralIconNumber':16,
        'horizontalIconNumber':6});

	var selectedIcon = 'aceicon';

    var icons = [];
	icons.push({'iconFilePath':'img/aldericon.png', 'iconValue':'aldericon'});
	icons.push({'iconFilePath':'img/aldericon_g.png', 'iconValue':'aldericon_g'});
	icons.push({'iconFilePath':'img/aldericon_r.png', 'iconValue':'aldericon_r'});
    icons.push({'iconFilePath':'img/aceicon.png', 'iconValue':'aceicon'});
    icons.push({'iconFilePath':'img/aceicong.png', 'iconValue':'aceicong'});
    icons.push({'iconFilePath':'img/anonicon.png', 'iconValue':'anonicon'});
    icons.push({'iconFilePath':'img/bloodstone.png', 'iconValue':'bloodstone'});
    icons.push({'iconFilePath':'img/bonaciuex_b.png', 'iconValue':'bonaciuex_b'});
    icons.push({'iconFilePath':'img/bonaciuex_g.png', 'iconValue':'bonaciuex_g'});
    icons.push({'iconFilePath':'img/boots1.png', 'iconValue':'boots1'});
    icons.push({'iconFilePath':'img/bullet_1.png', 'iconValue':'bullet_1'});
    icons.push({'iconFilePath':'img/candleofglory.png', 'iconValue':'candleofglory'});
    icons.push({'iconFilePath':'img/caticon.png', 'iconValue':'caticon'});
    icons.push({'iconFilePath':'img/chipsicon.png', 'iconValue':'chipsicon'});
    icons.push({'iconFilePath':'img/cigarette.png', 'iconValue':'cigarette'});
    icons.push({'iconFilePath':'img/comb.png', 'iconValue':'comb'});
    icons.push({'iconFilePath':'img/contributor.png', 'iconValue':'contributor'});
    icons.push({'iconFilePath':'img/crossicon.png', 'iconValue':'crossicon'});
    icons.push({'iconFilePath':'img/cruel.png', 'iconValue':'cruel'});
    icons.push({'iconFilePath':'img/curseicon.png', 'iconValue':'curseicon'});
    icons.push({'iconFilePath':'img/dominant.png', 'iconValue':'dominant'});
    icons.push({'iconFilePath':'img/dumbpotion.png', 'iconValue':'dumbpotion'});
    icons.push({'iconFilePath':'img/exploreicon.png', 'iconValue':'exploreicon'});
    icons.push({'iconFilePath':'img/fancyhat.png', 'iconValue':'fancyhat'});
    icons.push({'iconFilePath':'img/feet.png', 'iconValue':'footfetishicon'});
    icons.push({'iconFilePath':'img/fishbones.png', 'iconValue':'fishbones'});
    icons.push({'iconFilePath':'img/flute_b.png', 'iconValue':'flute_b'});
    icons.push({'iconFilePath':'img/flute_g.png', 'iconValue':'flute_g'});
    icons.push({'iconFilePath':'img/flute_r.png', 'iconValue':'flute_r'});
    icons.push({'iconFilePath':'img/fluteshirt.png', 'iconValue':'fluteshirt'});
    icons.push({'iconFilePath':'img/foxicon.png', 'iconValue':'foxicon'});
    icons.push({'iconFilePath':'img/gender.png', 'iconValue':'gender'});
    icons.push({'iconFilePath':'img/grissicong.png', 'iconValue':'grissicong'});
    icons.push({'iconFilePath':'img/grizzicon.png', 'iconValue':'grizzicon'});
    icons.push({'iconFilePath':'img/gropotion.png', 'iconValue':'gropotion'});
    icons.push({'iconFilePath':'img/guilticon.png', 'iconValue':'guilticon'});
    icons.push({'iconFilePath':'img/horseson.png', 'iconValue':'horseson'});
    icons.push({'iconFilePath':'img/inanimate.png', 'iconValue':'inanimate'});
    icons.push({'iconFilePath':'img/jack_b.png', 'iconValue':'jack_b'});
    icons.push({'iconFilePath':'img/jack_g.png', 'iconValue':'jack_g'});
    icons.push({'iconFilePath':'img/kind.png', 'iconValue':'kind'});
    icons.push({'iconFilePath':'img/leatherjacket.png', 'iconValue':'leatherjacket'});
    icons.push({'iconFilePath':'img/leonar_r.png', 'iconValue':'leonar_r'});
    icons.push({'iconFilePath':'img/lin_b.png', 'iconValue':'lin_b'});
    icons.push({'iconFilePath':'img/magicaxe.png', 'iconValue':'magicaxe'});
    icons.push({'iconFilePath':'img/magicboots.png', 'iconValue':'magicboots'});
    icons.push({'iconFilePath':'img/magichelm.png', 'iconValue':'magichelm'});
    icons.push({'iconFilePath':'img/mailboxicon.png', 'iconValue':'mailboxicon'});
    icons.push({'iconFilePath':'img/mayorb.png', 'iconValue':'mayorb'});
    icons.push({'iconFilePath':'img/mayorg.png', 'iconValue':'mayorg'});
    icons.push({'iconFilePath':'img/mikhail_b.png', 'iconValue':'mikhail_b'});
    icons.push({'iconFilePath':'img/mikhail_g.png', 'iconValue':'mikhail_g'});
    icons.push({'iconFilePath':'img/mrbat.png', 'iconValue':'mrbat'});
    icons.push({'iconFilePath':'img/muscat_1.png', 'iconValue':'muscat_1'});
    icons.push({'iconFilePath':'img/navigate_icon.png', 'iconValue':'navigate_icon'});
    icons.push({'iconFilePath':'img/nosering.png', 'iconValue':'nosering'});
    icons.push({'iconFilePath':'img/oldhat.png', 'iconValue':'oldhat'});
    icons.push({'iconFilePath':'img/oldsword.png', 'iconValue':'oldsword'});
    icons.push({'iconFilePath':'img/outcasticon.png', 'iconValue':'outcasticon'});
    icons.push({'iconFilePath':'img/painicon.png', 'iconValue':'painicon'});
    icons.push({'iconFilePath':'img/pawmusk.png', 'iconValue':'pawmusk'});
    icons.push({'iconFilePath':'img/pie_1.png', 'iconValue':'pie_1'});
    icons.push({'iconFilePath':'img/playericon.png', 'iconValue':'playericon'});
    icons.push({'iconFilePath':'img/prisonshirt.png', 'iconValue':'prisonshirt'});
    icons.push({'iconFilePath':'img/raccoonicon.png', 'iconValue':'raccoonicon'});
    icons.push({'iconFilePath':'img/robby_b.png', 'iconValue':'robby_b'});
    icons.push({'iconFilePath':'img/robby_g.png', 'iconValue':'robby_g'});
    icons.push({'iconFilePath':'img/rufo.png', 'iconValue':'rufo'});
    icons.push({'iconFilePath':'img/saberhagen_b.png', 'iconValue':'saberhagen_b'});
    icons.push({'iconFilePath':'img/saberhagen_g.png', 'iconValue':'saberhagen_g'});
    icons.push({'iconFilePath':'img/shrinkpotion.png', 'iconValue':'shrinkpotion'});
    icons.push({'iconFilePath':'img/size.png', 'iconValue':'size'});
    icons.push({'iconFilePath':'img/skullmask.png', 'iconValue':'skullmask'});
    icons.push({'iconFilePath':'img/smartpotion.png', 'iconValue':'smartpotion'});
    icons.push({'iconFilePath':'img/socks.png', 'iconValue':'socks'});
    icons.push({'iconFilePath':'img/speciesicon.png', 'iconValue':'speciesicon'});
    icons.push({'iconFilePath':'img/stoneshield.png', 'iconValue':'stoneshield'});
    icons.push({'iconFilePath':'img/submissive.png', 'iconValue':'submissive'});
    icons.push({'iconFilePath':'img/supplies.png', 'iconValue':'supplies'});
    icons.push({'iconFilePath':'img/suppliesg.png', 'iconValue':'suppliesg'});
    icons.push({'iconFilePath':'img/thefticon.png', 'iconValue':'thefticon'});
    icons.push({'iconFilePath':'img/thevoid.png', 'iconValue':'thevoid'});
    icons.push({'iconFilePath':'img/time.png', 'iconValue':'time'});
    icons.push({'iconFilePath':'img/transformation.png', 'iconValue':'tffetish'});
    icons.push({'iconFilePath':'img/turner_b.png', 'iconValue':'turner_b'});
    icons.push({'iconFilePath':'img/turner_g.png', 'iconValue':'turner_g'});
    icons.push({'iconFilePath':'img/uselessraccoon.png', 'iconValue':'uselessraccoon'});
    icons.push({'iconFilePath':'img/vore.png', 'iconValue':'vorefetish'});
    icons.push({'iconFilePath':'img/watercloth.png', 'iconValue':'watercloth'});
    icons.push({'iconFilePath':'img/watervine_1.png', 'iconValue':'watervine_1'});
    icons.push({'iconFilePath':'img/westwood.png', 'iconValue':'westwood'});
    icons.push({'iconFilePath':'img/wineicon_2.png', 'iconValue':'wineicon_2'});
    icons.push({'iconFilePath':'img/wineicon.png', 'iconValue':'wineicon'});
    icons.push({'iconFilePath':'img/witch_lotus.png', 'iconValue':'witch_lotus'});
    icons.push({'iconFilePath':'img/wolficon.png', 'iconValue':'wolficon'});
    
    
    iconSelect.refresh(icons);

	iconSelect2 = new IconSelect("npcicon", 
        {'selectedIconWidth':50,
        'selectedIconHeight':75,
        'selectedBoxPadding':5,
        'iconsWidth':50,
        'iconsHeight':75,
        'boxIconSpace':3,
        'vectoralIconNumber':16,
        'horizontalIconNumber':6});

	var selectedNpcIcon = 'aceicon';
    
    iconSelect2.refresh(icons);

	document.getElementById('icon').addEventListener('changed', function(e){
       selectedIcon = iconSelect.getSelectedValue();
    });

	document.getElementById('npcicon').addEventListener('changed', function(e){
       selectedNpcIcon = iconSelect2.getSelectedValue();
    });

    $("#submitevent").on("click", function() {
		var title = adjustText($("#title").val());
		var description = adjustText($("#description").val());
		var icon = selectedIcon;
		var descdata = $(".outcometext").val();
		var requirementatts = [];
		var requirementtypes = [];
		var requirementvalues = [];
		
		$(".reqattribute").each(function(index) {
			requirementatts.push($(this).val());
		});
		$(".reqdata:checked").each(function(index) {
			requirementtypes.push($(this).val());
		});
		$(".reqquantity").each(function(index) {
			requirementvalues.push($(this).val() || 0);
		});

		var requirements = [];
		for (var i = 0; i < requirementatts.length; i++) {
			requirements.push({
				attribute: requirementatts[i],
				comparison: requirementtypes[i],
				value: requirementvalues[i]
			});
		}

		var typeCheck = $(".typedata:checked").val();
		var type;
		if (typeCheck == "Random") {
			type = "random";
		} else {
			type = "statcheck";
		}
		var typeatt = $("#attribute").val();
		var typenum = $("#quantity").val();
		var adjustedDesc = adjustText(descdata);
		var outcometitles = [];
		var outcometexts = [];
		var outcomemoves = [];
		var outcometrapclear = [];
		var outcometrapdesc = [];
		var outcometrapblock = [];
		$(".outcometitle").each(function(index) {
			outcometitles.push(adjustText($(this).val()));
		});
		$(".outcometext").each(function(index) {
			outcometexts.push(adjustText($(this).val()));
		});
		$(".outcomemove").each(function(index) {
			outcomemoves.push($(this).val());
		});
		$(".outcomecleartrap").each(function(index) {
			if ($(this).is(':checked')) {
				outcometrapclear.push(true);
			} else {
				outcometrapclear.push(false);
			}
		});
		$(".outcometrapdesc").each(function(index) {
			outcometrapdesc.push(adjustText($(this).val()));
		});
		$(".outcometrapblock").each(function(index) {
			outcometrapblock.push(adjustText($(this).val()));
		});
		var outcomes = [];
		for (var i = 0; i < outcometitles.length; i++) {
			var outcome = {
				title: outcometitles[i],
				description: outcometexts[i]
			};
			if (outcomemoves[i] != 'None') {
				outcome.move = outcomemoves[i];
			}
			if (outcometrapclear[i]) {
				outcome.trapclear = true;
			}
			if (outcometrapdesc[i]) {
				outcome.trapdesc = outcometrapdesc[i];
				outcome.trapblock = outcometrapblock[i];
			}
			var changes = [];
			var changeObjects = $($(".changecontainer")[i]).children();
			for (var j = 0; j < changeObjects.length; j++) {
				var changeatt = $(changeObjects[j]).find(".changeattribute").val();
				var changequant = $(changeObjects[j]).find(".changequantity").val();
				var changetype = $(changeObjects[j]).find(".changedata:checked").val();
				changes.push({
					attribute: changeatt,
					quantity: changequant,
					type: changetype
				})
			}
			outcome.changes = changes;
			outcomes.push(outcome);
		}
		var result = {
			title: title,
			description: description,
			icon: icon,
			requirements: requirements,
			type: type,
			outcomes: outcomes
		}
		if (type == "statcheck") {
			result.attribute = typeatt;
			result.quantity = typenum;
		}
		$("#result").val(JSON.stringify(result));
	});

	$("#submitnpc").on("click", function() {
		var title = adjustText($("#npctitle").val());
		var description = adjustText($("#npcdescription").val());
		var icon = selectedNpcIcon;
		var topicqs = [];
		var topicas = [];
		
		$(".question").each(function(index) {
			topicqs.push(adjustText($(this).val()));
		});
		$(".response").each(function(index) {
			topicas.push(adjustText($(this).val()));
		});

		var topics = [];
		for (var i = 0; i < topicqs.length; i++) {
			topics.push({
				topic: topicqs[i],
				response: topicas[i]
			});
		}

		var result = {
			title: title,
			description: description,
			icon: icon,
			topics: topics
		}
		$("#resultnpc").val(JSON.stringify({
		    desc: description
		}));
	});

	function adjustText(text) {
		return text.replace(/(?:\r\n|\r|\n)/g,"</p>")
	}

	$("#randombutton").on("click", function() {
		$(".checkfields").addClass("hidden");
	});
	$("#checkbutton").on("click", function() {
		$(".checkfields").removeClass("hidden");
	});

	$(".outcomes").on("click", ".addchange", function() {
	
//	$(".addchange").on("click", function() {
		$($(this).parent().children()[0]).append('<div class="outcomechange">'+
							'<label>Attribute</label>'+
							'<select class="changeattribute">'+
							'<option value="turner_interest">turner_interest</option>'+
							'<option value="turner_connection">turner_connection</option>'+
							'<option value="grizz_interest">grizz_interest</option>'+
							'<option value="grizz_connection">grizz_connection</option>'+
							'<option value="flute_interest">flute_interest</option>'+
							'<option value="flute_connection">flute_connection</option>'+
							'<option value="saberhagen_interest">saberhagen_interest</option>'+
							'<option value="saberhagen_connection">saberhagen_connection</option>'+
							'<option value="flute_master">flute_master</option>'+
							'<option value="leonar_master">leonar_master</option>'+
							'<option value="robby_spell">robby_spell</option>'+
							'<option value="jack_spell">jack_spell</option>'+
							'<option value="jack_friend">jack_friend</option>'+
							'<option value="mikhail_interest">mikhail_interest</option>'+
							'<option value="mikhail_connection">mikhail_connection</option>'+
							'<option value="species">species</option>'+
							'<option value="gender">gender</option>'+
							'<option value="submissiveness">submissiveness</option>'+
							'<option value="dominance">dominance</option>'+
							'<option value="westwood">westwood</option>'+
							'<option value="digger_progress">digger_progress</option>'+
							'<option value="digger">digger</option>'+
							'<option value="kind">kind</option>'+
							'<option value="cruel">cruel</option>'+
							'<option value="intelligence">intelligence</option>'+
							'<option value="pisscurse">pisscurse</option>'+
							'<option value="magicuser">magicuser</option>'+
							'<option value="time">time</option>'+
							'<option value="contributor">contributor</option>'+
							'<option value="wine_1">wine_1</option>'+
							'<option value="wine_2">wine_2</option>'+
							'<option value="gro_potion">gro_potion</option>'+
							'<option value="shrink_potion">shrink_potion</option>'+
							'<option value="smart_potion">smart_potion</option>'+
							'<option value="dumb_potion">dumb_potion</option>'+
							'<option value="chips_1">chips_1</option>'+
							'<option value="bullet_1">bullet_1</option>'+
							'<option value="muscat_1">muscat_1</option>'+
							'<option value="fish">fish</option>'+
							'<option value="pie_1">pie_1</option>'+
							'<option value="watervine_1">watervine_1</option>'+
							'<option value="lotus_1">lotus_1</option>'+
							'<option value="bloodstone">bloodstone</option>'+
							'<option value="supplies">supplies</option>'+
							'<option value="magic_boots">magic_boots</option>'+
							'<option value="paw_musk">paw_musk</option>'+
							'<option value="cowboy_boots">cowboy_boots</option>'+
							'<option value="leather_jacket">leather_jacket</option>'+
							'<option value="cigarette">cigarette</option>'+
							'<option value="candle_glory">candle_glory</option>'+
							'<option value="dwarf_axe">dwarf_axe</option>'+
							'<option value="nosering">nosering</option>'+
							'<option value="fancyhat">fancyhat</option>'+
							'<option value="iron_helm">iron_helm</option>'+
							'<option value="skull_mask">skull_mask</option>'+
							'<option value="stone_shield">stone_shield</option>'+
							'<option value="ace_boots">ace_boots</option>'+
							'<option value="mikhail_socks">mikhail_socks</option>'+
							'<option value="slutty_shirt">slutty_shirt</option>'+
							'<option value="prison_shirt">prison_shirt</option>'+
							'<option value="water_cloth">water_cloth</option>'+
							'<option value="old_sword">old_sword</option>'+
							'<option value="magic_hat">magic_hat</option>'+
							'<option value="comb">comb</option>'+
							'<option value="useless_raccoon">useless_raccoon</option>'+
							'<option value="horse_son">horse_son</option>'+
							'<option value="pain">pain</option>'+
							'<option value="outcast">outcast</option>'+
							'<option value="guilt">guilt</option>'+
							'<option value="curse">curse</option>'+
							'<option value="might">might</option>'+
							'<option value="magic">magic</option>'+
							'<option value="charm">charm</option>'+
							'<option value="stealth">stealth</option>'+
							'<option value="other">OTHER</option>' +
							'</select>'+
							'<div class="flex">'+
								'<label>Add</label>'+
								'<input type="radio" class="radio changedata" name="changetype" value="Add" checked>'+
								'<label>Subtract</label>'+
								'<input type="radio" class="radio changedata" name="changetype" value="Subtract">'+
								'<label>Set To</label>'+
								'<input type="radio" class="radio changedata" name="changetype" value="Set">'+
							'</div>'+
							'<label>Quantity</label>'+
							'<input class="changequantity" type="number" name="changequantity">'+
						'</div>');
	});
	$(".clearchanges").on("click", function() {
		$($(this).parent().children()[0]).empty();
	});

	$("#addtopic").on("click", function() {
		$("#topiccontainer").append('<label>Question</label>'+
						'<input class="question" type="text" name="title">'+
						'<label>Response</label>'+
						'<input class="response" type="text" name="title">');
	});
	$("#cleartopics").on("click", function() {
		$("#topiccontainer").empty();
	});

	$("#addoutcome").on("click", function() {
		$("#outcomecontainer").append('<div class="outcome">'+
        '<label>Title</label>'+
        '<input class="outcometitle" type="text" name="title">'+
        '<label>Description Change</label>'+
        '<input class="outcomedescchange" type="text" name="title">'+
        '<label>Move To</label>'+
        '<select class="outcomemove">'+
            '<option value="none">None</option>'+
            '<option value="alleyway">Alleyway</option>'+
            '<option value="art_store">Art Store</option>'+
            '<option value="backstreets">Backstreets</option>'+
            '<option value="bar_rooms">Bar Rooms</option>'+
            '<option value="bar">Bar</option>'+
            '<option value="belly">Belly</option>'+
            '<option value="beside_river">Beside River</option>'+
            '<option value="cavernentrance">Cavern Entrance</option>'+
            '<option value="church">Church</option>'+
            '<option value="churchyard">Churchyard</option>'+
            '<option value="contributor_1">Contributor 1</option>'+
            '<option value="darkcavern">Dark Cavern</option>'+
            '<option value="deepestcavern">Deep Cavern</option>'+
            '<option value="dormaus_entrance">Dormaus Entrance</option>'+
            '<option value="dormaus_streets">Dormaus Streets</option>'+
            '<option value="down_valley">Down the Valley</option>'+
            '<option value="dragon_vore">Dragon Vore Choice</option>'+
            '<option value="farmfield">Farm Field</option>'+
            '<option value="farmhouse">Farm House</option>'+
            '<option value="farmpath">Farm Path</option>'+
            '<option value="farmsouth">Farm South</option>'+
            '<option value="fountain">Fountain</option>'+
            '<option value="hotel_rooms">Hotel Rooms</option>'+
            '<option value="hotel">Hotel</option>'+
            '<option value="jacks_hideout">Jack\'s Hideout</option>'+
            '<option value="lionquest_aceboot">Ace\'s Boot</option>'+
            '<option value="lionquest_acecock">Ace\'s Cock</option>'+
            '<option value="lionquest_glowscale">Glowscale (Quest)</option>'+
            '<option value="lionquest_harem">Harem (Quest)</option>'+
            '<option value="lionquest_sea">Pirate Ship (Quest)</option>'+
            '<option value="lionquest_throne">Throne Room (Quest)</option>'+
            '<option value="lionquest_westwood">Westwood (Quest)</option>'+
            '<option value="marketplace">Marketplace</option>'+
            '<option value="mayors">Mayor\'s Office</option>'+
            '<option value="otterton_dock">Otterton Dock</option>'+
            '<option value="otterton_hill">Otterton Hill</option>'+
            '<option value="otterton">Otterton</option>'+
            '<option value="pumpkins">Pumpkins</option>'+
            '<option value="quartzcavern">Quartz Cavern</option>'+
            '<option value="resetshrine">Reset Shrine</option>'+
            '<option value="shop_rooms">Shop Rooms</option>'+
            '<option value="shop">Shop</option>'+
            '<option value="tartarus">Tartarus</option>'+
            '<option value="top_valley">Top Valley</option>'+
            '<option value="wetcavern">Wet Cavern</option>'+
            '<option value="windy_path">Windy Path</option>'+
            '<option value="witch_peak">Witch Peak</option>'+
            '<option value="makarna">Makarna</option>'+
        '</select>'+
        '<div></div>'+
        '<label>Remove Trap (Remove inanimate status)</label>'+
        '<input class="outcomecleartrap" type="checkbox" value="clear">'+
        '<label>Trap Description Change (Description while trapped)</label>'+
        '<input class="outcometrapdesc" type="text" name="title">'+
        '<label>Trap Block (Text when trying to move while trapped)</label>'+
        '<input class="outcometrapblock" type="text" name="title">'+
        '<label>Text</label>'+
        '<textarea class="outcometext" rows="4" cols="50"></textarea>'+
        '<div></div>'+
        '<div class="changes">'+
            '<div class="changecontainer">'+
            '</div>'+
            '<input class="addchange" type="button" value="Add Change">'+
            '<input class="clearchanges" type="button" value="Clear Changes">'+
        '</div>'+
    '</div>');
	});
	$("#resetoutcome").on("click", function() {
		$("#outcomecontainer").empty();
		$("#outcomecontainer").append('<div class="outcome">'+
			'<label>Title</label>'+
			'<input class="outcometitle" type="text" name="title">'+
			'<label>Text</label>'+
			'<textarea class="outcometext" rows="4" cols="50"></textarea>'+
		'</div>');
	});

	$("#addrequirement").on("click", function() {
		$("#requirementcontainer").append('<div class="requirement">'+
							'<label>Attribute</label>'+
							'<select class="reqattribute">'+
							'<option value="turner_interest">turner_interest</option>'+
                            '<option value="turner_connection">turner_connection</option>'+
                            '<option value="grizz_interest">grizz_interest</option>'+
                            '<option value="grizz_connection">grizz_connection</option>'+
                            '<option value="flute_interest">flute_interest</option>'+
                            '<option value="flute_connection">flute_connection</option>'+
                            '<option value="saberhagen_interest">saberhagen_interest</option>'+
                            '<option value="saberhagen_connection">saberhagen_connection</option>'+
                            '<option value="flute_master">flute_master</option>'+
                            '<option value="leonar_master">leonar_master</option>'+
                            '<option value="robby_spell">robby_spell</option>'+
                            '<option value="jack_spell">jack_spell</option>'+
                            '<option value="jack_friend">jack_friend</option>'+
                            '<option value="mikhail_interest">mikhail_interest</option>'+
                            '<option value="mikhail_connection">mikhail_connection</option>'+
                            '<option value="species">species</option>'+
                            '<option value="gender">gender</option>'+
                            '<option value="submissiveness">submissiveness</option>'+
                            '<option value="dominance">dominance</option>'+
                            '<option value="westwood">westwood</option>'+
                            '<option value="digger_progress">digger_progress</option>'+
                            '<option value="digger">digger</option>'+
                            '<option value="kind">kind</option>'+
                            '<option value="cruel">cruel</option>'+
                            '<option value="intelligence">intelligence</option>'+
                            '<option value="pisscurse">pisscurse</option>'+
                            '<option value="magicuser">magicuser</option>'+
                            '<option value="time">time</option>'+
                            '<option value="contributor">contributor</option>'+
                            '<option value="wine_1">wine_1</option>'+
                            '<option value="wine_2">wine_2</option>'+
                            '<option value="gro_potion">gro_potion</option>'+
                            '<option value="shrink_potion">shrink_potion</option>'+
                            '<option value="smart_potion">smart_potion</option>'+
                            '<option value="dumb_potion">dumb_potion</option>'+
                            '<option value="chips_1">chips_1</option>'+
                            '<option value="bullet_1">bullet_1</option>'+
                            '<option value="muscat_1">muscat_1</option>'+
                            '<option value="fish">fish</option>'+
                            '<option value="pie_1">pie_1</option>'+
                            '<option value="watervine_1">watervine_1</option>'+
                            '<option value="lotus_1">lotus_1</option>'+
                            '<option value="bloodstone">bloodstone</option>'+
                            '<option value="supplies">supplies</option>'+
                            '<option value="magic_boots">magic_boots</option>'+
                            '<option value="paw_musk">paw_musk</option>'+
                            '<option value="cowboy_boots">cowboy_boots</option>'+
                            '<option value="leather_jacket">leather_jacket</option>'+
                            '<option value="cigarette">cigarette</option>'+
                            '<option value="candle_glory">candle_glory</option>'+
                            '<option value="dwarf_axe">dwarf_axe</option>'+
                            '<option value="nosering">nosering</option>'+
                            '<option value="fancyhat">fancyhat</option>'+
                            '<option value="iron_helm">iron_helm</option>'+
                            '<option value="skull_mask">skull_mask</option>'+
                            '<option value="stone_shield">stone_shield</option>'+
                            '<option value="ace_boots">ace_boots</option>'+
                            '<option value="mikhail_socks">mikhail_socks</option>'+
                            '<option value="slutty_shirt">slutty_shirt</option>'+
                            '<option value="prison_shirt">prison_shirt</option>'+
                            '<option value="water_cloth">water_cloth</option>'+
                            '<option value="old_sword">old_sword</option>'+
                            '<option value="magic_hat">magic_hat</option>'+
                            '<option value="comb">comb</option>'+
                            '<option value="useless_raccoon">useless_raccoon</option>'+
                            '<option value="horse_son">horse_son</option>'+
                            '<option value="pain">pain</option>'+
                            '<option value="outcast">outcast</option>'+
                            '<option value="guilt">guilt</option>'+
                            '<option value="curse">curse</option>'+
                            '<option value="might">might</option>'+
                            '<option value="magic">magic</option>'+
                            '<option value="charm">charm</option>'+
                            '<option value="stealth">stealth</option>'+
                            '<option value="other">OTHER</option>' +
							'</select>'+
							'<div class="flex">'+
								'<label>Greater Than</label>'+
								'<input type="radio" class="radio reqdata" name="eventtype" value="Greater" checked>'+
								'<label>Less Than</label>'+
								'<input type="radio" class="radio reqdata" name="eventtype" value="Less">'+
								'<label>Equal To</label>'+
								'<input type="radio" class="radio reqdata" name="eventtype" value="Equal">'+
								'<label>Not Equal To</label>'+
								'<input type="radio" class="radio reqdata" name="eventtype" value="Nequal">'+
							'</div>'+
							'<label>Quantity</label>'+
							'<input class="reqquantity" type="number" name="reqquantity">'+
						'</div>');
	});
	$("#clearrequirements").on("click", function() {
		$("#requirementcontainer").empty();
	});


});
