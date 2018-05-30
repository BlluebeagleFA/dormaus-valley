// Provide internal functions to access all webservices
DV = typeof(DV) === 'undefined' ? {} : DV;
DV.WebServices = (function(){ // start of module namespace

    // Cognito Constants
    const COG_REGION = 'us-west-2';
    const COG_USERPOOL_ID = 'us-west-2_c9VPyQ3gL';
    const COG_IDENTITYPOOL_ID = 'us-west-2:631ff6aa-ce57-4118-b253-8c6c7c262941';
    const COG_CLIENT_ID = '6qnp4g8i6v8b0nk41dsis6dple';
    // Cognito Objects
    const UserPool = new AmazonCognitoIdentity.CognitoUserPool({
        UserPoolId : COG_USERPOOL_ID,
        ClientId : COG_CLIENT_ID
    });

    //Lambda Constants
    const LAMBDA_API_VERSION = '2015-03-31';

    function cog_authenticate(username,password,callback) {

        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
            Username : username,
            Password : password,
        });

        var cognitoUser = new AmazonCognitoIdentity.CognitoUser({
            Username : username,
            Pool : UserPool
        });

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (auth_result) {
                cognitoUser.getUserAttributes(function(err, attr_result) {

                    if (err && err.statusCode != 200) {
                        callback(err);
                        return;
                    }

                    var result = {
                        username: username,
                        auth_data: auth_result,
                        attr_data: attr_result
                    }

                    callback(null,result);
                });
            },
            onFailure: function(err) {
                callback(err);
            }
        });

    }

    function cog_register(username,password,email,callback) {

        var attributeList = [];
        
        var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute({
            Name : 'email',
            Value : email
        });
        
        attributeList.push(attributeEmail);
        
        UserPool.signUp(username, password, attributeList, null, function(err, result){
            if (err) {
                callback(err);
                return;
            }

            callback(null,result);
        });
    }

    function lambda_create(username,token,callback) {

        cognitoUser = new AmazonCognitoIdentity.CognitoUser({
            Username : username,
            Pool : UserPool
        });

        var refresh_token = new AmazonCognitoIdentity.CognitoRefreshToken({ RefreshToken: token });

        cognitoUser.refreshSession(refresh_token, (err, session) => {
            if (err) {
                callback(err);
                return;
            }

            var logins = {};
            logins['cognito-idp.' + COG_REGION + '.amazonaws.com/' + COG_USERPOOL_ID] = session.idToken.jwtToken;

            AWS.config.update({region: COG_REGION});
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId : COG_IDENTITYPOOL_ID,
                Logins : logins
            });
        
            var lambda = new AWS.Lambda({region: COG_REGION, apiVersion: LAMBDA_API_VERSION});
            callback(null,lambda)
        });
    }

    function dyna_get(lambda,username,callback) {

        var restorePayload = {
            "action": "restore",
            "userid": username
        };

        var pullRestoreParams = {
            FunctionName : 'dormaus-saves',
            InvocationType : 'RequestResponse',
            LogType : 'None',
            Payload: JSON.stringify(restorePayload)
        };

        lambda.invoke(pullRestoreParams, function(err, result) {
            if (err) {
                callback(err);
                return;
            }
            callback(null,result);
        });
    }

    function dyna_set(lambda,username,data,callback) {

        var payload = {
            "action": "save",
            "userid": username,
            "save": data
        }

        var pullParams = {
            FunctionName : 'dormaus-saves',
            InvocationType : 'RequestResponse',
            LogType : 'None',
            Payload: JSON.stringify(payload)
        };
        
        lambda.invoke(pullParams, function(err, result) {
            if (err) {
                callback(err);
            }
            callback(null,result);
        });
    }

    function iot_create(lambda,username,callback) {

        var pullParams = {
            FunctionName : 'signed-url',
            InvocationType : 'RequestResponse',
            LogType : 'None',
            Payload: JSON.stringify({identity: AWS.config.credentials.identityId})
        };
        
        lambda.invoke(pullParams, function(error, data) {
            if (error) {
                callback(error);
                return;
            }

            var requestUrl = JSON.parse(data.Payload);
            var client = new Paho.MQTT.Client(requestUrl, username);
            callback(null,client);
        });
    }

    return {
        iot_create          :   iot_create,
        dyna_get            :   dyna_get,
        dyna_set            :   dyna_set,
        lambda_create       :   lambda_create,
        cog_authenticate    :   cog_authenticate,
        cog_register        :   cog_register
    }
})(); // end of module namespace