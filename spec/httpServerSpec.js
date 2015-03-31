require("../app/http_server.js");
var request = require("request");
var base_url = "http://localhost:3000/";

describe("HTTP Pixel log server : GET calls", function(){

	it("Returns status code 200", function(done){
		request.get(base_url, function(err, res, body){
			expect(err).toBeNull();
			expect(res.statusCode).toBe(200);
			done();
		});
	});

	it("Returns data", function(done){
		request.get(base_url, function(err, res, body){
			expect(err).toBeNull();
			expect(body).not.toBeNull();
			done();
		});
	});

	it("Get result shell_script result via http", function(done){
		request.get(base_url+"test-exec", function(err, res, body){
			expect(err).toBeNull();
			expect(res.statusCode).toBe(200);
			expect(body).toMatch("shell_script");
			done();
		});
	});
});