// Provide internal functions to access all webservices
DV = typeof(DV) === 'undefined' ? {} : DV;
DV.WebServices = (function(){ // start of module namespace
    function cog_authenticate(username,password,callback) {

        console.log("Deprecated")

    }

    function cog_register(username,password,email,callback) {

        console.log("Deprecated")
    }

    function lambda_create(username,token,callback) {

        console.log("Deprecated")
    }

    function dyna_get(lambda,username,callback) {

        console.log("Deprecated")
    }

    function dyna_set(lambda,username,data,callback) {

        console.log("Deprecated")
    }

    function iot_create(lambda,username,callback) {

        console.log("Deprecated")
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