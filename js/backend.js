/**
 ** backend.js  **
 ** author: Rin **

 * This is the backend services file, there is absolutely no good reason you should be messing with this unless we changed backends
 * If you find something in here not listed in my guide, its private, forget about it, its not for you

 AUTH SERVER
 ===========
  
  dv_backend.authenticate(username,password,callback)
  ------------------------------------------------
 
    username [string] = username of the player, pretty self explanitory
    password [string] = password of the player, ^^^^^^^^^^^^^^^^^^^^^^^
    callback [function(err,result)] = return callback for this function

    err [null/exception] = will always be null unless the provided data is wrong, or the server is fucked
    result [object] =  {
        username [string] = hopefully the same as the one you gave it
        access_token [string] = auth token for use with other services 
        data [object] = the raw data returned from the api call, dont use this unless you have to
    }
   
  dv_backend.register(username,password,email,callback)
  ------------------------------------------------
 
    username [string] = username of the player, pretty self explanitory
    password [string] = password of the player, ^^^^^^^^^^^^^^^^^^^^^^^
    email    [string] = email for the player (TODO: should probably get some checks on this)
    callback [function(err,result)] = return callback for this function

    err [null/exception] = will always be null unless the provided data is wrong, or the server is fucked
    result [object] = the raw data returned from the api call, dont use this unless you have to

**/


var dv_backend = {};

(function() {

    var _loaded = false;
    function loaded() {return _loaded;}

    // Amazon service constants
    const poolData = { 
        UserPoolId : 'us-west-2_c9VPyQ3gL',
        ClientId : '6qnp4g8i6v8b0nk41dsis6dple'
    };

    // Amazon service objects
    var userPool;
    var cognitoUser;
    var lambda;
    var client;
    var attributeList = [];

    var user_token;
    var authenticated = false;
    var on_packet = function() {};

    function init() {

        _loaded = true;

        if(typeof dv_data == 'undefined' || dv_data == {} || !dv_data.loaded()){
            console.error("dv_backend.js requires dv_data.js to be included before it!");
            return;
        }

        userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        user_token = dv_data.get("token");
        var username = dv_data.get("username");
        if(user_token){

            console.log("Authenticating with server.");

            var userData = {
                Username : username,
                Pool : userPool
            };
            cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

            AWS.config.update({region: 'us-west-2'});
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId : 'us-west-2:631ff6aa-ce57-4118-b253-8c6c7c262941',
                Logins : {
                    'cognito-idp.us-west-2.amazonaws.com/us-west-2_c9VPyQ3gL' : user_token
                }
            });

            lambda = new AWS.Lambda({region: 'us-west-2', apiVersion: '2015-03-31'});
            authenticated = true;

        } else {
            console.warn("There is no token in memory. This is fine if we are at the login screen, otherwise not so much...");
            return;
        }
    }

    function authenticate(username,password,callback) {

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
                cognitoUser.getUserAttributes(function(err, result) {

                    if (err && err.statusCode != 200) {
                        callback(err);
                        return;
                    }

                    var auth_data = {
                        username: username,
                        access_token: accessToken,
                        data: result
                    }

                    callback(null,auth_data);
                });
            },

            onFailure: function(err) {
                callback(err);
            },

        });
    }

    function register(username,password,email,callback) {
        var dataEmail = {
            Name : 'email',
            Value : email
        };
        
        var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
        
        attributeList.push(attributeEmail);
        
        userPool.signUp(username, password, attributeList, null, function(err, result){
            if (err) {
                callback(err);
                return;
            }

            callback(null,result);
        });
    }

    function ws_connect(callback) {

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
            } else {

                var requestUrl = JSON.parse(data.Payload);
                var clientId = dv_data.get("username");

                if(!clientId){
                    callback(new Error("Could not get a username from the current session."));
                    return;
                }

                client = new Paho.MQTT.Client(requestUrl, clientId);

                client.onConnectionLost = ws_disconnect;
                client.onMessageArrived = ws_recv;
                client.connect({
                    onSuccess: function () {
                        console.log("Socket connected!");

                        // subscribe to global channel
                        client.subscribe("dv/global");

                        callback(null);
                    },
                    useSSL: true,
                    timeout: 3,
                    mqttVersion: 4,
                    onFailure: function (err) {
                        callback(err);
                    }
                });
            }
        });
    }

    function ws_recv(msg) {
        console.log(message);
        console.log("Message arrived");
        try {
            var payload = JSON.parse(msg.payloadString);
            if(!payload.type){
                console.error("Packet missing type!");
                console.log(payload);
                return;
            }
            on_packet(payload);
        } catch (e) {
            console.error("Bad packet error!");
            console.log(e);
            console.log(msg);
        }
    }

    function ws_subscribe(channel){
        return client.subscribe(channel);
    }

    function ws_unsubscribe(channel){
        return client.unsubscribe(channel);
    }

    function ws_send(channel,packet) {
        if(!client){
            console.error("Youre trying to use the socket before its connected!");
            return;
        }
        message = new Paho.MQTT.Message(JSON.stringify(packet));
        message.destinationName = channel;
        client.send(message);
    }

    function ws_disconnect() {
        console.error("Lost websocket connection!");
        // TODO: Should probably handle this better...
        return;
    }

    function set_packet_handler(callback) {
        if(typeof callback != 'function'){
            console.error("You have to set the packet handler to a function!");
            return;
        }
        on_packet = callback;
    }

    function fetch_db(callback) {

        if(!authenticated){
            console.error("cannot fetch the database before being authenticated!");
            callback(null);
            return;
        }

        if(dv_data.valid()){
            var restorePayload = {
                "action": "restore",
                "userid": dv_data.get("username")
            };
            var pullRestoreParams = {
                FunctionName : 'dormaus-saves',
                InvocationType : 'RequestResponse',
                LogType : 'None',
                Payload: JSON.stringify(restorePayload)
            };

            lambda.invoke(pullRestoreParams, function(restError, restData) {
                if (restError) {
                    console.log(restError);
                    callback(null);
                   return;
                } else {
                    if (restData && restData.Payload && JSON.parse(restData.Payload) 
                        && JSON.parse(JSON.parse(restData.Payload))
                        && JSON.parse(JSON.parse(restData.Payload)).Item 
                        && JSON.parse(JSON.parse(restData.Payload)).Item.save) {
                        var userdata = JSON.parse(JSON.parse(restData.Payload)).Item.save;
                        console.log(userdata);
                        callback(userdata);
                        return;
                    }
                }
            });
        }else{
            console.error("Cannot fetch server data without a valid session!");
            callback(null);
            return;
        }
    }

    function update_db(data) {
        var payload = {
            "action": "save",
            "userid": dv_data.get("username"),
            "save": data
          }
          var pullParams = {
            FunctionName : 'dormaus-saves',
            InvocationType : 'RequestResponse',
            LogType : 'None',
            Payload: JSON.stringify(payload)
          };
          // create variable to hold data returned by the Lambda function
          var pullResults;
          
          lambda.invoke(pullParams, function(error, data) {
              if (error) {
                console.error(error);
              } else {
                console.log("Updated the database!");
              }
          });
    }

    dv_backend = {
        loaded: loaded,
        init: init,
        authenticate : authenticate,
        register : register,
        msg_callback : set_packet_handler,
        open_channel : ws_subscribe,
        close_channel : ws_unsubscribe,
        fetch_db : fetch_db,
        update_db : update_db,
        ws_connect : ws_connect,
        ws_send : ws_send,
        set_packet_handler : set_packet_handler
    }

})();

$(document).ready(dv_backend.init);