var https = require('https');
//var Address = require('../model/address.model');

module.exports.search = function (searchString) {

	var optionsget = {
	    host : 'api.edq.com',
	    port : 443,
	    path : '/capture/address/v2/search' + searchString + '&query=experian+data+quality&take=7&auth-token=72821f89-b6be-4447-a039-3c382a201b27', 
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

module.exports.parse = function(model) {
	console.log(model);
};