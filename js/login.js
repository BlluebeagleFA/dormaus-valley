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
    		DV.Session.create_session(username,password,function(err,result){

                if(err){
                    console.error(err);
                    console.log("Oh shit");
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
    		$("#loginuser").addClass("error");
    	}
    	if (!password) {
    		$("#loginpass").addClass("error");
    	}
    	if (!email) {
    		$("#regemail").addClass("error");
    	}
    	
    	if (username && password && email) {
    		DV.WebServices.cog_register(username,password,email,function(err,result){
	            if (err) {
	                console.log(err);
	                alert(err.message);
	            }
	            $("#right").append("<p>Registration email sent. Please don't forget to check your spam folder</p>");
	        });
    	}
    });
});
