
DV = typeof(DV) === 'undefined' ? {} : DV;
DV.Tracker = (function(){ // start of module namespace
    const TRACKER_URL = "https://script.google.com/macros/s/AKfycbxyoas4Iic7l4t5hoQCspj5GAJz_wW7EguzFg1KTQhFz7X7PY5b/exec";

    if(typeof($) === 'undefined'){
        console.warn("Module DV.Tracker depends on JQuery, make sure the JQuery libary is included before bug_tracker.js");
    }
    
    function submit(username,error_message,data){
        var payload = {Username : username, Error: error_message, Data: data};
        $.ajax({
            url: TRACKER_URL,
            method: "GET",
            dataType: "json",
            data: payload,
            complete : function(result,status){
                console.log(result);
                console.log(status);
            }
        });
    }

    return{
        submit: submit
    }
})(); // end of module namespace