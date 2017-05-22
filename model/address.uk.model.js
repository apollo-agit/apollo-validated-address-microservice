"use strict"
const querystring = require('querystring');

var UKAddress = function(json) {
	this.addressLine1;
	this.addressLine2;
	this.town;
	this.postCode;
	this.country;

	this.parseJson(json);
};

UKAddress.prototype.parseJson = function(json) {
	for (var prop in json) this[prop] = json[prop];
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