$(document).ready(function() {
	var poolData = { 
        UserPoolId : 'us-west-2_c9VPyQ3gL',
        ClientId : '6qnp4g8i6v8b0nk41dsis6dple'
    };
	
	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    var attributeList = [];
	
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
    		var authenticationData = {
	            Username : username,
	            Password : password,
	        };
	        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
	        
	        var userData = {
	            Username : username,
	            Pool : userPool
	        };
	        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
	        cognitoUser.authenticateUser(authenticationDetails, {
	            onSuccess: function (result) {
	                var accessToken = result.idToken.jwtToken;
	            	console.log('access token + ' + accessToken);

	                cognitoUser.getUserAttributes(function(err, result) {
	                    if (err) {
	                        alert(err.message || JSON.stringify(err));
	                        return;
	                    }
	                    var userdata = "{}";
	                    for (i = 0; i < result.length; i++) {
	                    	if (result[i].getName() == "userjson") {
	                    		userdata = result[i].getValue();
	                    	}
	                        console.log('attribute ' + result[i].getName() + ' has value ' + result[i].getValue());
	                    }
	                    
	                    localStorage.setItem("dormaus-login", JSON.stringify({
	                    	username: username,
	                    	userdata: userdata,
	                    	token: accessToken
	                    }));
	                    
//	                    AWS.config.update({region: 'us-west-2'});
//	            		AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//	                        IdentityPoolId : 'us-west-2:631ff6aa-ce57-4118-b253-8c6c7c262941', // your identity pool id here
//	                        Logins : {
//	                            // Change the key below according to the specific region your user pool is in.
//	                            'cognito-idp.us-west-2.amazonaws.com/us-west-2_c9VPyQ3gL' : accessToken
//	                        }
//	                    });
//	            		
//	            		AWS.config.credentials.refresh((error) => {
//		                    if (error) {
//		                         console.error(error);
//		                    } else {
//		                        console.log("In lambda") 
//		                    	// Instantiate aws sdk service objects now that the credentials have been updated.
//		                         // example: var s3 = new AWS.S3();
//		                    	var lambda = new AWS.Lambda({region: 'us-west-2', apiVersion: '2015-03-31'});
//			            		// create JSON object for parameters for invoking Lambda function
//			            		var pullParams = {
//			            		  FunctionName : 'signed-url',
//			            		  InvocationType : 'RequestResponse',
//			            		  LogType : 'None'
//			            		};
//			            		// create variable to hold data returned by the Lambda function
//			            		var pullResults;
//			            		
//			            		lambda.invoke(pullParams, function(error, data) {
//			            			if (error) {
//			            			    console.log("Error: %j", error);
//			            			} else {
//			            		        pullResults = JSON.parse(data.Payload);
//			            		        console.log(pullResults);
//			            			}
//			            		});
//		                    }
//		                });
	                    window.location.replace("/main.html");
	                });
	                
	              //POTENTIAL: Region needs to be set if not already set previously elsewhere.
//	                AWS.config.region = 'us-west-2';
//
//	                AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//	                    IdentityPoolId : 'us-west-2:631ff6aa-ce57-4118-b253-8c6c7c262941', // your identity pool id here
//	                    Logins : {
//	                        // Change the key below according to the specific region your user pool is in.
//	                        'cognito-idp.us-west-2.amazonaws.com/us-west-2_c9VPyQ3gL' : result.getIdToken().getJwtToken()
//	                    }
//	                });
//
//	                //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
//	                AWS.config.credentials.refresh((error) => {
//	                    if (error) {
//	                         console.error(error);
//	                    } else {
//	                         // Instantiate aws sdk service objects now that the credentials have been updated.
//	                         // example: var s3 = new AWS.S3();
//	                         console.log('Successfully logged!');
//	                    }
//	                });
	            },

	            onFailure: function(err) {
	            	console.log("Oh shit");
//	                alert(err.message || JSON.stringify(err));
	            },

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
    		var dataEmail = {
	            Name : 'email',
	            Value : email
	        };
	        
	        var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
	        
	        attributeList.push(attributeEmail);
	        
	        userPool.signUp(username, password, attributeList, null, function(err, result){
	            if (err) {
	                alert(JSON.stringify(err));
	                return;
	            }
	            cognitoUser = result.user;
	            console.log('user name is ' + cognitoUser.getUsername());
	            $("#right").append("<p>Registration email sent. Please don't forget to check your spam folder</p>");
	        });
    	}
    });
});
