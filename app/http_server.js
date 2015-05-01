var app = require('express')();
var execProcess = require("../app/exec_process.js");
var port = process.env.PORT || 3000;
var httpJson = require('../config/http.json');

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
		execProcess.result(o["cmd"], function(err, response){
			if(!err){
				res.send(response);
			}else {
				res.send("Error: ", err);
			}
		});
	});
})

var http = app.listen(port);
exports.http = http;