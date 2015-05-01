var app = require('express')();
var httpJson = require('../config/http.json');
var handle_process = require('../app/handle_process.js');
var port = process.env.PORT || 3000;

app.get("/", function(req, res){
	res.send("Server configured.");
});

/**
 * Convert JSON to Array
 */
var httpArr = Object.keys(httpJson).map(function(k){
	return httpJson[k];
});

/**
 * Prepare http enpoints looping through array items
 * Map http enpoint to a shell script
 */
httpArr.map(function(o){
	app.get(o["url"], function(req, res){
		handle_process.result(o, req, res);
	});
});

var http = app.listen(port);
exports.http = http;