var request = require("request");
var base_url = "http://localhost:3000/";

describe("HTTP Pixel log server is configured", function(){
	describe("GET /", function(){
		it("Returns status code 200", function(done){
			request.get(base_url, function(err, res, body){
				if(err != null){
					// console.log(err);
				}else{
					expect(res.statusCode).toBe(200);
					done();
				}
			});
		});
		it("Returns data", function(done){
			request.get(base_url, function(err, res, body){
				if(err != null){
					// console.log(err);
				}else {
					expect(body).not.toBeNull();
					done();
				}
			});
		});
	});
});

describe("Execute command and return in http request", function(){
	it("Get result shell_script result via http", function(done){
		request.get(base_url+"test-exec", function(err, res, body){
			if(err != null){

			}else {
				expect(res.statusCode).toBe(200);
				expect(body).toMatch("shell_script");
				done();
			}
		});
	});
});