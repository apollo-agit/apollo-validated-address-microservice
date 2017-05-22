"use strict"
const querystring = require('querystring');

var UKAddress = function() {
	this.addressLine1;
	this.addressLine2;
	this.town;
	this.postCode;
	this.country;
};

UKAddress.prototype.parseJson = function(json) {
	for (var prop in json) this[prop] = json[prop];
};

UKAddress.prototype.toUrlString = function() {
	var urlArgs = '?country=gbr';
	if(this.addressLine1)
		urlArgs += '&addressLine1=' + this.addressLine1;
	if(this.addressLine2)
		urlArgs += '&addressLine2=' + this.addressLine2;
	if(this.town)
		urlArge += '&locality=' + this.locality;
	if(this.postCode)
		urlArgs += '&postalCode=' + this.postCode;

	return urlArgs.replace(' ', '%');
};

module.exports = UKAddress;