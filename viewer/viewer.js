var excludeEvents = [ // E.g. for impossible events
{
    area: "glatisant",
    event: "impossible"
}];

function generateEventTitle(event) {
    var genderRequirement = event.requirements.find(element => {
        return element.parameter == "gender";
    });
    var genderInnerString;
    if (genderRequirement != undefined) {
        if (genderRequirement.value == 1 && genderRequirement.comparison == "equal") genderInnerString = "Male";
        if (genderRequirement.value == 2 && genderRequirement.comparison == "nequal") genderInnerString = "Male";
        if (genderRequirement.value == 1 && genderRequirement.comparison == "nequal") genderInnerString = "Female";
        if (genderRequirement.value == 2 && genderRequirement.comparison == "equal") genderInnerString = "Female";    
    }
    var genderString = genderInnerString == undefined ? "" : (" (" + genderInnerString + ")")

    return event.title + genderString;
}

function generateAreaTitle(area) {
    return area.header + "<span class='grey'> (" + area.title + ")</span>";
}

function shouldBeExcluded(areaId, eventId) {
    var excluded = excludeEvents.find(element => {
        return element.area == areaId && element.event == eventId
    });
    return excluded != undefined;
}

function loadScript(url, callback, errorCallback){
    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
        script.onerror = function() {
            errorCallback();
        }
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function reportError(error) {
    document.getElementById("errorMessage").innerHTML = error;
}