"use strict"
const querystring = require('querystring');
const Canonical = require('./canonical.model');

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
 
};

UKAddress.prototype.transformToCanonical = function() {
	return new Canonical(this.addressLine1,
		this.addressLine2,
		this.town,
		null,
		this.postCode,
		this.country);
}


module.exports = UKAddress;