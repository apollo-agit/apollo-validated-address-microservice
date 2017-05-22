express = require('express');
var wsRouter = express.Router();
qas = require('../service/experian.qas.js');
var UKAddress = require('../model/address.uk.model');

wsRouter.route('/address/id/:id')
    .get(function (req, res) {
        res.status(501).send("get not implemented");   
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
      console.log(req.body);
      var urlArgs = address.toUrlString();
      console.log(urlArgs);
      qas.search(urlArgs).then(results => {
        res.status(200).send(results);
      });      
});


module.exports = wsRouter;