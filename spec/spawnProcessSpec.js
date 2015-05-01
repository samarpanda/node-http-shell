var spawnProcess = require("../app/spawn_process.js");

describe('Spawn Process', function(){
	it('Run temp.sh', function(done){
		spawnProcess.result("sh shell_scripts/temp.sh", function(child){
			child.stdout.on('data', function(data){
				expect(data.toString()).toMatch("shell_script");
			});
			child.stderr.on('data', function(data){
				console.log("stderr >> ", data);
			});
			child.on('close', function(code){
				expect(code).toBe(0);
				done();
			});
		});
	});
});