$(document).ready(function() {

    function de(b){var a,e={},d=b.split(""),c=f=d[0],g=[c],h=o=256;for(b=1;b<d.length;b++)a=d[b].charCodeAt(0),a=h>a?d[b]:e[a]?e[a]:f+c,g.push(a),c=a.charAt(0),e[o]=f+c,o++,f=a;return g.join("")}
    
    function validateSave(save) {
        if (save.area && save.description && save.equipment && save.stats 
            && save.statprogress && save.items && save.suffering) {
            return true;
        }
        return false;
    }
    
    if(localStorage.getItem("dv_data")){
        $("#register").removeAttr("disabled");
    }
	
	$("#login").click(function() {
    	var username = $("#loginuser").val();
    	var password = "nothing";
    	
    	if (!username) {
    		username = "Worldwalker";
    	}
    	
    	DV.Session.create_session(username,function(err,result){
           window.location.replace("./main.html");
        });
    });
    
	$("#loadbutton").on("change", function(e) {
        var reader = new FileReader();

        f = this.files[0];
        
        // Closure to capture the file information.
        reader.onload = (function(theFile) {
            return function(e) {
              if (e && e.target && e.target.result) {
                  try {
                      var savefile = de(decodeURIComponent(e.target.result));
                      var savegame = JSON.parse(savefile);
                      
                      if (validateSave(savegame)) {
                          player = savegame;
                          
                          var savesessionfile = {
                              username : player.username || "Worldwalker",
                              save: player
                          }
                          
                          window.localStorage.setItem('dv_data', JSON.stringify(savesessionfile));
                          window.location.replace("./main.html");
                      } else {
                          $("#loadlabel").text("Bad save file");
                      }
                      
                  } catch (exc) {
                      console.log(exc);
                      $("#loadlabel").text("Bad save file");
                  }
              } else {
                  $("#loadlabel").text("Bad save file");
              }
            };
        })(f);

          // Read in the image file as a data URL.
        reader.readAsText(f);
    });
	
    $("#register").click(function() {
        window.location.replace("./main.html");
    });
});
