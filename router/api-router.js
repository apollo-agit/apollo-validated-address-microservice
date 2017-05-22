express = require('express');
var wsRouter = express.Router();
qas = require('../service/experian.qas.js');

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
    .get(function (req, res) {
        res.json([
                    {
                      "addressLine1": "690 Regal Lane",
                      "addressLine2": "Back yard",
                      "city": "Aurora",
                      "state": "IL",
                      "county": "Kane",
                      "country": "United States"
                    },
                    {
                      "addressLine1": "690 Melrose Ave",
                      "addressLine2": "",
                      "city": "Montgomery",
                      "state": "IL",
                      "county": "Kendall",
                      "country": "United States"
                    },
                    {
                      "addressLine1": "690 Manchester Lane",
                      "addressLine2": "Apt 56",
                      "city": "Aurora",
                      "state": "IL",
                      "county": "Kane",
                      "country": "United States"
                    }              
                  ]
                  );     
    });


wsRouter.route('/address/testing')
    .get(function (req, res) {
      qas.search(null);
      res.status(200).send('sweet');
});


module.exports = wsRouter;