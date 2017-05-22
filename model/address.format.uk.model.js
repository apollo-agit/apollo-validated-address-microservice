"use strict"
const querystring = require('querystring');

var UKAddressFormat = function(id) {
	this.id = id;
};

UKAddressFormat.prototype.toUrlString = function() {
	var urlArgs = '?country=gbr&query=';
	if(this.id)
		urlArgs += '&id=' + querystring.escape(this.id);
	return urlArgs;
};

module.exports = UKAddressFormat;