require("dotenv").config();

var bot = require('./bot');
require('./web')(bot);

var http = require("http");
//var https = require("https")
setInterval(function() {
    http.get("http://afternoon-garden-16503.herokuapp.com");
}, 300000);