"use strict"

var Suggestion = function(suggest, formatUrl) {
	this.suggest = suggest;
	this.formatId = this.parseId(formatUrl);
};

Suggestion.prototype.parseId = function(url) {
	var pos = url.lastIndexOf("id=") + 3;
	return url.slice(pos, url.length);
};

module.exports = Suggestion;