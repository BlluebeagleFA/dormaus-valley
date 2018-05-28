
var dv_data = {};

(function(){

    var _loaded = false;
    function loaded() {return _loaded;}

    // time until the local save syncs with the database
    // a sync will also be attempted on a page close
    const db_sync_timeout = 5 * 60 * 1000;

    // flag to determine if the data copies need to be synced
    // if in sync on timeout then schedule another check in one minute
    // otherwise update and reset the counter
    var in_sync = false;
    var valid = false;

    // TODO: replace all this with a variable that stores the last time you synced with the server
    // use that variable everytime you call set, if an update isnt pinned already then schedule one for 5 minutes - (current time - last sync time)

    var local_db = {};

    function init() {
        _loaded = true;

        var local_storage = localStorage.getItem("dv_data");
        if(local_storage){
            try {
                local_storage = JSON.parse(local_storage);
                local_db = local_storage;
                console.log("Local save loaded!");
                console.log(local_db);
            } catch (e) {
                console.error("User data storage is corrupted!");
                localStorage.clear();
                console.log(e);
                location.reload();
                return;
                // TODO: Warn the user of this somehow
            }
        }else{
            console.warn("No userdata entry yet, this is fine if we are not logged in, but really really bad otherwise...");
            return;
        }
    }

    function is_valid_session() {
        if(!local_db["username"]){
            console.warn("no username stored in the local_db");
            return false;
        }
        if(!local_db["token"]){
            console.warn("no token stored in the local_db");
            return false;
        }
        if(!local_db["last_modified"]){
            console.warn("no last_modified date stored in the local_db");
            return false;
        }
        return true;
    }

    function get(name) {
        return local_db[name];
    }

    function set(name,value) {
        local_db[name] = value;
        localStorage.setItem("dv_data",JSON.stringify(local_db));
        in_sync = false;
        local_db["last_modified"] = new Date().getTime();
    }

    function push() {
        dv_backend.update_db(local_db["save"]);
        in_sync = true;
    }

    function refresh(callback) {
        if(is_valid_session()){
            dv_backend.fetch_db(function(remote_db){
                if(remote_db == null){
                    callback(new Error("Invalid data returned from database fetch!"));
                    return;
                }
                console.log("Save data set from server.");
                console.log(remote_db);
                local_db["save"] = remote_db;
                localStorage.setItem("dv_data",JSON.stringify(local_db));
                in_sync = true;
                callback();
            });
        }else{
            callback(new Error("Cannot refresh the save data with and invalid session!"));
            return;
        }
    }

    dv_data = {
        loaded: loaded,
        init: init,
        get: get,
        set: set,
        valid: is_valid_session,
        refresh : refresh
    }

})();

$(document).ready(dv_data.init);