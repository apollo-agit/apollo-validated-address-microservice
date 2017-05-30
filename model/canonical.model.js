"use strict"

var Canonical = function(addressLine1, addressLine2, city, state, zip, country) {
	this.addressLine1 = addressLine1;
	this.addressLine2 = addressLine2;
	this.city = city;
	this.state = state;
	this.zipcode = zip;
	this.country = country;
};

module.exports = Canonical;