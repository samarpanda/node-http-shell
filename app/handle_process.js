var execProcess = require("../app/exec_process.js");
var spawnProcess = require("../app/spawn_process.js");

var result = function(jsonObj, req, res){
	if(jsonObj.type === "exec"){
		execProcess.result(jsonObj["cmd"], function(err, response){
			if(!err){
				res.send(response);
			}else {
				res.send("Error: ", err);
			}
		});
	}else if(jsonObj.type === "spawn"){
		spawnProcess.result(jsonObj["cmd"], function(child){
			child.stdout.on('data', function(data){
				res.write(data);
			});
			child.stderr.on('data', function(data){
				res.write(data);
				res.end();
			});
			child.on('close', function(code){
				// console.log(Date(),' child process exited with code : ', code);
				res.end();
			});
		});
	}
}

exports.result = result;