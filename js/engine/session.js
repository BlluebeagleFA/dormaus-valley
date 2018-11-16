// Responsable for maintaining a session for the user with all their data in it for reading and writing
// Return false if the session is no longer valid and requires a login

DV = typeof(DV) === 'undefined' ? {} : DV;
DV.Session = (function(){ // start of module namespace

    if(typeof(DV.WebServices) === 'undefined'){
        console.warn("Module DV.Session depends on DV.WebServices, make sure web_services.js is included before session.js");
    }

    // Settings
    const SYNC_INTERVAL = 5 * 60 * 1000;
    const SYNC_ON_CLOSE = true;
    const CLEAR_ON_ERROR = true;

    // Objects
    var in_session = false;
    var in_sync = false;
    var local_db = {};
    var lambda;
    var sync_timer;

    var Session = {
        get _lambda() {return lambda;},
        get _local_db() {return local_db    ;},
        get username() {
            return local_db["username"];
        },
        set save(data) {
            local_db["save"] = data;
            localStorage.setItem("dv_data",JSON.stringify(local_db));
        },
        get save() {
            return save_data_proxy(local_db["save"]);
        }
    }

    function save_data_proxy(obj){
        return new Proxy(obj,{
            get: function(target, name, receiver) {
                if(typeof target[name] == 'object' && target[name] != null)
                    return save_data_proxy(target[name]);
                return target[name];
            },
            set: function(target, name, value) {
                target[name] = value;
                local_db["save"]["last_updated"] = new Date().getTime();
                localStorage.setItem("dv_data",JSON.stringify(local_db));

                in_sync = false;
                console.log("SET SAVE DATA: " + name);
                console.log(target[name]);
            }
        });
    }

    function get_session(callback) {

        if(in_session){
            callback(null,Session);
            return;
        }

        var local_store = localStorage.getItem("dv_data");
        if(local_store) {
            try {
                local_db = JSON.parse(local_store);
            } catch (e) {
                console.error("Error parsing the local session data in localStorage");
                if(CLEAR_ON_ERROR){
                    console.warn("Clearing localStorage.");
                    localStorage.clear();
                }
                callback(e);
                return;
            }

            if(!local_db["username"]){
                if(CLEAR_ON_ERROR){
                    console.warn("Clearing localStorage.");
                    localStorage.clear();
                }
                callback(new Error("Invalid Session: No username found in localStorage"));
                return;
            }
            if(!local_db["token"]){
                if(CLEAR_ON_ERROR){
                    console.warn("Clearing localStorage.");
                    localStorage.clear();
                }
                callback(new Error("Invalid Session: No auth token found in localStorage"));
                return;
            }

            DV.WebServices.lambda_create(local_db["username"],local_db["token"],function(err,result){
                if(err){
                    console.error("Error creating session with webservices.");
                    if(CLEAR_ON_ERROR){
                        console.warn("Clearing localStorage.");
                        localStorage.clear();
                    }
                    callback(err);
                }

                lambda = result;
                DV.WebServices.dyna_get(lambda,local_db["username"],function(err,db_result){
                    if(err){
                        console.error("Error with database request.");
                        if(CLEAR_ON_ERROR){
                            console.warn("Clearing localStorage.");
                            localStorage.clear();
                        }
                        callback(err);
                    }

                    try {
                        var userdata = JSON.parse(JSON.parse(db_result.Payload)).Item.save;
                        if(local_db["save"]  && typeof local_db["save"] == 'object'){
                            if(userdata["last_updated"]){
                                if(userdata["last_updated"] > local_db["last_updated"]){
                                    console.warn("Database has newest last updated value, overwriting local copy.");
                                    local_db["save"] = userdata;
                                }else{
                                    console.warn("Local copy of database has newest last updated value, using local copy instead");
                                }
                            }else{
                                console.warn("No last updated value on the server, using local copy instead");
                            }
                        }else{
                            console.log(typeof local_db["save"]);
                            console.warn("No local save data, starting session with database copy.");
                            local_db["save"] = userdata;
                        }
                    } catch (e) {
                        // this indicates an empty save or an invalid save
                        console.warn("Invalid save state on the database, this is fine with new users, bad with old ones!");
                        console.log(e);
                        console.log(db_result);

                        if(local_db["save"] && typeof local_db["save"] == 'object'){
                            console.warn("No data recived from database, using local copy instead.");
                        } else {
                            console.warn("No local save data, and none recived from database, starting session with empty data.");
                            local_db["save"] = {};
                        }
                    }

                    sync_timer = setInterval(sync_session,SYNC_INTERVAL);
                    in_session = true;
                    callback(null,Session);
                    return;
                });
            });

        } else {
            callback(new Error("No local storage detected."));
            return;
        }
    }

    function clear_session() {
        console.warn("Clearing all session data.");
        if(sync_timer){
            clearInterval(sync_timer);
            sync_timer = null;
        }
        localStorage.clear();
        lambda = null;
        in_session = false;
        in_sync = false;
    }

    function create_session(username,password,callback) {

        DV.WebServices.cog_authenticate(username,password,function(err,result){

            if(err){
                callback(err);
                return;
            }

            clear_session();

            var dv_data = {
                username : result.username,
                token : result.auth_data.refreshToken.token
            }

            localStorage.setItem("dv_data",JSON.stringify(dv_data));

            get_session(callback);
        });

    }

    function sync_session(callback) {
        DV.WebServices.dyna_set(lambda,local_db["username"],local_db["save"],function(err){
            if(err){
                callback(err);
                return;
            }
            console.log("Database sync");
            callback(null);
        });
    }

    return {
        get_session: get_session,
        create_session : create_session,
        clear_session : clear_session,
        sync_session : sync_session
    }

})();