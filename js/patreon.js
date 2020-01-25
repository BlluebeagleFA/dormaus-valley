$(document).ready(function() {
//    DV.Session.get_session(main);
    
//    var itemparams = Object.keys(DV.Data.item_data);
//    var logthing = "";
//    for (var i = 0; i < itemparams.length; i++) {
//        logthing += '\'<option value="' + itemparams[i] + '">' + itemparams[i] + '</option>\'+\n';
//    }
//    console.log(logthing);
});

function main(err,session) {

    $("#mainloader").addClass("hide");

    // Check for errors getting a session
    if(err){
        console.error(err);

        // Do some bug tracking
        var username = "NULL";
        try{username = JSON.parse(localStorage.getItem("dv_data"))["username"];}
        catch(e){}

        DV.Tracker.submit(username,err.message,localStorage.getItem("dv_data"));

        // Clear their session and let them try to login agian 
//        DV.Session.clear_session();
        
        $("#main").text("Unable to detect session. Please log in to the game normally then try this again");
    } else {
        var username = session.username;

        var messageQueue = {
            global: []
        }
        
        // Cache the area data instead of fetching it everytime
        var area;
        
        var player = {
            area: "dormaus_entrance",
            dust: 0,
            description: "This adventurer is an ordinary human.",
            equipment: {
                head: null,
                clothes: null,
                weapon: null,
                feet: null,
                ally: null,
                memory: null
            },
            stats: {
                stealth: 1,
                might: 1,
                magic: 1,
                charm: 1
            },
            statprogress: {
                stealth: 0,
                might: 0,
                magic: 0,
                charm: 0
            },
            items: {},
            attributes: {},
            suffering: {
                pain: {
                    value: 0,
                    progress: 0
                },
                guilt: {
                    value: 0,
                    progress: 0
                },
                outcast: {
                    value: 0,
                    progress: 0
                },
                curse: {
                    value: 0,
                    progress: 0
                }
            }
        };
        
        var temporary_parameters = [];
        
        var savedKeys = Object.keys(session.save);
        for (var i = 0; i < savedKeys.length; i++) {
            player[savedKeys[i]] = session.save[savedKeys[i]];
        }
        console.log(player);

        player.attributes.contributor = {
                value: 1,
                progress: 0
        };
        
        session.save = player;
        player = session.save;
        
        $("#main").text("You should now be marked as a patron. You can re-do this at any time");
    }
    
}