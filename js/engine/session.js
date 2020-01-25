// Responsable for maintaining a session for the user with all their data in it for reading and writing
// Return false if the session is no longer valid and requires a login

DV = typeof(DV) === 'undefined' ? {} : DV;
DV.Session = (function(){ // start of module namespace

		const CLEAR_ON_ERROR = false;

    // Objects
    var in_session = false;
    var local_db = {};

    var Session = {
        get _local_db() {return local_db; },
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
            
            callback(null,Session);

        } else {
            callback(new Error("No local storage detected."));
            return;
        }
    }

    function clear_session() {
        console.warn("Clearing all session data.");
        localStorage.clear();
        in_session = false;
    }

    function create_session(username,callback) {
            clear_session();

            var dv_data = {
                username : username,
                save: {}
            }

            localStorage.setItem("dv_data",JSON.stringify(dv_data));

            get_session(callback);

    }

    return {
        get_session: get_session,
        create_session : create_session,
        clear_session : clear_session
    }

})();
