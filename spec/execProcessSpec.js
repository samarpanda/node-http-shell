var execProcess = require("../app/exec_process.js");

describe("Exec Process", function(){
	it("Run temp.sh", function(){
		execProcess.result("sh shell_scripts/temp.sh", function(err, res){
			expect(err).toBe(null);
			expect(res).toMatch("shell_script");
		});
	});
});