var https = require('https');

module.exports.search = function (searchString) {
//"https://api.edq.com/capture/address/v2/search?country=gbr&query=experian+data+quality&take=7&auth-token=72821f89-b6be-4447-a039-3c382a201b27"

	var optionsget = {
	    host : 'api.edq.com',
	    port : 443,
	    path : '/capture/address/v2/search?country=gbr&query=experian+data+quality&take=7&auth-token=72821f89-b6be-4447-a039-3c382a201b27', 
	    method : 'GET'
	};
	console.log("search with: ", optionsget);


	var reqGet = https.request(optionsget, function(res) {
	    console.log("statusCode: ", res.statusCode);
 	 
	    res.on('data', function(d) {
	        console.log('GET result:\n');
	        process.stdout.write(d);
	        console.log('\n\nCall completed');
	    });
	 
	});

	reqGet.end();
	reqGet.on('error', function(e) {
	    console.log("big error", e);
	});

	
};