express = require('express');
var app = express();
var port = process.env.PORT || 8082; 

var cors = require('cors');
app.use(cors());
bodyParser = require('body-parser');
app.use(bodyParser.json());


wsRouter = require('./router/api-router');

app.use('/api/', wsRouter);
app.use(express.static(__dirname + '/../public'));
app.listen(port);
console.log('Magic happens on port ' + port + ' '  + __dirname + '/../public');
module.exports = app;