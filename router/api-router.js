express = require('express');
var wsRouter = express.Router();

wsRouter.route('/address/id/:id')
    .get(function (req, res) {
        res.status(501).send("get not implemented");   
    }.post(function (req, res) {
         res.status(501).send("post not implemented");
    }.put(function (req, res) {
         res.status(501).send("put not implemented");
    }.delete(function (req, res) {
        res.status(501).send("delete not implemented");
});

wsRouter.route('/address/list')
    .get(function (req, res) {
        Profile.find(function (err, episodes){
          if(err) res.status(500).send('ERR->' + err); else res.json(episodes);  
        });    
    });
});

module.exports = wsRouter;