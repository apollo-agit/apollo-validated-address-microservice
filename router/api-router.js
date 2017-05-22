express = require('express');
var wsRouter = express.Router();
qas = require('../service/experian.qas.js');
var UKAddress = require('../model/address.uk.model');
var UKAddressFormat = require('../model/address.format.uk.model');

wsRouter.route('/address/id/:id')
    .get(function (req, res) {

      var format = new UKAddressFormat(req.params.id);
      var urlArgs = format.toUrlString();
      console.log(urlArgs);
      qas.getAddressFormat(urlArgs).then(result => {
        res.status(200).send(result);
      }); 

    }).post(function (req, res) {
         res.status(501).send("post not implemented");
    }).put(function (req, res) {
         res.status(501).send("put not implemented");
    }).delete(function (req, res) {
        res.status(501).send("delete not implemented");
});


wsRouter.route('/address/list')
    .post(function (req, res) {
      var address = new UKAddress(req.body);
      var urlArgs = address.toUrlString();

      qas.search(urlArgs).then(results => {
        res.status(200).send(results);
      });      
});


module.exports = wsRouter;