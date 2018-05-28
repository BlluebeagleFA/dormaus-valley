$(document).ready(function() {

    if(dv_data.valid()){
        console.log("Session found, bringing to main page");
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
    		dv_backend.authenticate(username,password,function(err,result){

                if(err){
                    console.error(err);
                    console.log("Oh shit");
                    return;
                }

	            var accessToken = result.access_token;
				console.log('access token + ' + accessToken);
				
				localStorage.clear();
                
                dv_data.set("username",result.username);
                dv_data.set("token",accessToken);
                
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
    		dv_backend.register(username,password,email,function(err,result){
	            if (err) {
	                console.log(err);
	                return;
	            }
	            $("#right").append("<p>Registration email sent. Please don't forget to check your spam folder</p>");
	        });
    	}
    });
});
