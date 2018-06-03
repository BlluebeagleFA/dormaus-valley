$(document).ready(function() {

    if(localStorage.getItem("dv_data")){
        console.log("Session found, bringing to main page.");
        window.location.replace("./main.html");
    }
	
	$("#login").click(function() {
    	var username = $("#loginuser").val();
    	var password = $("#loginpass").val();
    	
    	if (!username) {
    		$("#loginuser").addClass("error");
    	}
    	if (!password) {
    		$("#loginpass").addClass("error");
    	}
    	
    	if (username && password) {
    	    $("#loginloader").removeClass("hide");
    		DV.Session.create_session(username,password,function(err,result){
    		    $("#loginloader").addClass("hide");
                if(err){
                    console.error(err);
                    $("#loginerror").text(err.message);
                    $("#loginerror").removeClass("hide");
                    return;
				}
				                
               window.location.replace("./main.html");
            });
    	}
    });
    
    $("#register").click(function() {
    	var username = $("#reguser").val();
    	var password = $("#regpass").val();
    	var email = $("#regemail").val();
    	
    	if (!username) {
    		$("#reguser").addClass("error");
    	}
    	if (!password) {
    		$("#regpass").addClass("error");
    	}
    	if (!email) {
    		$("#regemail").addClass("error");
    	}
    	
    	if (username && password && email) {
    	    $("#registerloader").removeClass("hide");
    		DV.WebServices.cog_register(username,password,email,function(err,result){
    		    $("#registerloader").addClass("hide");
	            if (err) {
	                console.log(err);
	                $("#registererror").text(err.message);
                    $("#registererror").removeClass("hide");
	            } else {
	                $("#right").append("<p>Registration email sent. Please don't forget to check your spam folder</p>");
	            }
	        });
    	}
    });
});
