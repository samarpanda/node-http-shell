var express = require('express');
var app = express();
var execProcess = require("../app/exec_process.js");

app.get("/", function(req, res){
	res.send("Server configured.");
});

app.get("/test-exec", function(req, res){
	execProcess.result("sh shell_scripts/temp.sh", function(err, response){
		if(!err){
			res.send(response);
		}else {
			res.send("Error: ", err);
		}
	});
});

app.get("/exec", function(req, res){
	execProcess.result("sh shell_scripts/tail_logs.sh", function(err, response){
		if(!err){
			res.send(response);
		}else {
			res.send("Error: ", err);
		}
	});
});

var http = app.listen(3000);
exports.http = http;