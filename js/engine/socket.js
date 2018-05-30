DV = typeof(DV) === 'undefined' ? {} : DV;

// Constructor
DV.Socket = function(session){ 

    if(typeof(DV.WebServices) === 'undefined'){
        console.warn("Class DV.Socket depends on module DV.Session, make sure session.js is included before socket.js");
    }

    if(!session._lambda || !session.username){
        throw "Invalid session";
    }

    this.lambda = session._lambda;
    this.username = session.username;
    this.client = null;
    this.disconnect_handler = function () {};
    this.packet_handler = function () {};
};

DV.Socket.prototype.connect = function(callback) {

    var socket = this;

    var pullParams = {
        FunctionName : 'signed-url',
        InvocationType : 'RequestResponse',
        LogType : 'None',
        Payload: JSON.stringify({identity: AWS.config.credentials.identityId})
    };
      
    socket.lambda.invoke(pullParams, function(error, data) {
        if (error) {
            callback(error);
            return;
        }

        var requestUrl = JSON.parse(data.Payload);
        var clientId = socket.username;

        socket.client = new Paho.MQTT.Client(requestUrl, clientId);

        socket.client.onConnectionLost = function() {socket.disconnect_handler()};
        socket.client.onMessageArrived = function(msg){
            try {
                var payload = JSON.parse(msg.payloadString);
                if(!payload.type){
                    var err = new Error("Packet has no type.");
                    err.e = e;
                    err.raw_packet = msg;
                    err.packet = payload;
                    socket.packet_handler(err);
                    return;
                }
                socket.packet_handler(null,payload);
            } catch (e) {
                var err = new Error("Incomming packet could not be parsed")
                err.e = e;
                err.raw_packet = msg;
                err.packet = null;
                socket.packet_handler(err);
                return;
            }
        };

        socket.client.connect({
            onSuccess: function () {
                console.log("Socket connected!");

                // subscribe to global channel
                socket.client.subscribe("global");

                callback(null);
            },
            useSSL: true,
            timeout: 3,
            mqttVersion: 4,
            onFailure: function (err) {
                callback(err);
            }
        });

    });

}

DV.Socket.prototype.send = function(channel,type,payload){
    var packet = payload;
    packet.type = type;
    var message = new Paho.MQTT.Message(JSON.stringify(packet));
    message.destinationName = channel;
    this.client.send(message);
}

DV.Socket.prototype.subscribe = function(channel){
    this.client.subscribe(channel);
}

DV.Socket.prototype.unsubscribe = function(channel){
    this.client.unsubscribe(channel);
}

Object.defineProperty(DV.Socket.prototype,"on_disconnect", {
    set: function(handler) {
        this.client.onConnectionLost = handler;
    }
});

Object.defineProperty(DV.Socket.prototype,"on_packet", {
    set: function(handler) {
        this.packet_handler = handler;
    }
});