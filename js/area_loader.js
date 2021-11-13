DV = typeof(DV) === 'undefined' ? {} : DV;
DV.Data = typeof(DV.Data) === 'undefined' ? {} : DV.Data;
(function(){ // start of module namespace


    function load_data(url,name,callback) {

		console.log("URL:" + url);
		console.log("Name:" + name);

		fetch(url)
		.then(response => response.json())
		.then(data => {
		  callback(data)
		})
		.catch((error) => {
		  console.error('Error:', error);
		  callback()
		});


        /*var data_frame = document.createElement("iframe");
        document.body.appendChild(data_frame);

        data_frame.contentWindow.document.open();

        var frame_script = data_frame.contentWindow.document.createElement("script");
        frame_script.src = url;
        data_frame.contentWindow.document.appendChild(frame_script);

        data_frame.contentWindow.document.close();

        data_frame.onload = function() {
            callback(data_frame.contentWindow[name]);
            document.body.removeChild(data_frame);
        }*/
    }

    function get_area(area_name,callback){
        load_data(DV.Data.areas[area_name],"area",function(data){
            if(typeof(data) === 'undefined'){
                callback(
                    new Error("Could not load area data file. (area_name: '" + area_name + "' area_url: '" + DV.Data.areas[area_name] + "')")
                );
                return;
            }
            callback(null,data);
        });
    }

    DV.Data.load_data = load_data;
    DV.Data.load_area = get_area;
})();