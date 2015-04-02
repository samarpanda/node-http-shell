var app = require('express')();
var execProcess = require("../app/exec_process.js");
var port = process.env.PORT || 3000;

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

// var http = app.listen(3000);
var http = app.listen(port);
exports.http = http;