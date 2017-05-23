"use strict"
const querystring = require('querystring');

var Query = function(json) {
	this.suggestionQuery;

	this.parseJson(json);
}

Query.prototype.parseJson = function(json) {
	for (var prop in json) this[prop] = json[prop];
};

Query.prototype.toUrlString = function() {
	var urlArgs = '?country=gbr&query=';
	if(this.suggestionQuery)
		urlArgs += querystring.escape(this.suggestionQuery);

	return urlArgs;
};

module.exports = Query;