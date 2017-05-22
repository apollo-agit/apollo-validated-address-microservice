var https = require('https');
Suggestion = require('../model/suggestion.model');

module.exports.search = function (searchString) {

	var optionsget = {
	    host : 'api.edq.com',
	    port : 443,
	    path : '/capture/address/v2/search' + searchString + '&take=7&auth-token=72821f89-b6be-4447-a039-3c382a201b27', 
	    method : 'GET'
	};

	return new Promise((resolve, reject) => {
		var reqGet = https.request(optionsget, function(res) {

		    res.on('data', function(raw) {
		    	var result = JSON.parse(raw);

		        var resultArr = new Array();
		        for(var i=0, len=result.results.length; i<len; i++) {
		        	var experian = result.results[i];
		        	resultArr.push(new Suggestion(experian.suggestion, experian.format));
		        }

		        return resolve(resultArr);
		    });
		 
		});

		reqGet.end();		
	});

	reqGet.on('error', function(e) {
	    console.log('big error', e);
	});
	
};
