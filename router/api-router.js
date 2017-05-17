express = require('express');
var wsRouter = express.Router();

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
                    }              
                  ]
                  );  
    
    });


module.exports = wsRouter;