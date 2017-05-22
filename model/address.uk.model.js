"use strict"
const querystring = require('querystring');

var UKAddress = function(json) {
	this.addressLine1;
	this.addressLine2;
	this.town;
	this.postCode;
	this.country;

	if(json)
		this.parseJson(json);
};

UKAddress.prototype.parseJson = function(json) {
	for (var prop in json) this[prop] = json[prop];
};

UKAddress.prototype.transformJsonFromQAS = function(json) {
	
 for(var i=0, len=json.length; i<len; i++) {
 	var obj = json[i];
 	for(var key in obj) {
 		console.log("'" + key + "'");
 		console.log(obj[key]);
 	    if(key == 'addressLine1')
 	    	this.addressLine1 = obj[key];
 	    else if(key == 'addressLine2')
 	    	this.addressLine2 = obj[key];
 	    else if(key == 'locality')
 	    	this.town = obj[key];
 	    else if(key == 'postalCode')
 	    	this.postCode = obj[key];
 	    else if(key == 'country')
 	    	this.country = obj[key];
 	}
 }
	console.log(this);
};

UKAddress.prototype.toUrlString = function() {
	var urlArgs = '?country=gbr&query=';
	if(this.addressLine1)
		urlArgs += querystring.escape(this.addressLine1);
	if(this.addressLine2)
		urlArgs += querystring.escape(this.addressLine2);
	if(this.town)
		urlArge += querystring.escape(this.locality);
	if(this.postCode)
		urlArgs += querystring.escape(this.postCode);

	return urlArgs;
};

module.exports = UKAddress;