## node-http-shell [![Build Status](https://travis-ci.org/samarpanda/node-http-shell.svg?branch=master)](https://travis-ci.org/samarpanda/node-http-shell)

> Get shell script output in browser

```cmd
$ npm install
$ npm start
```

## Usage 1
Pretty easy to modify and implement. Look for configuration file `app/http.json`.

1. `type` -> Options `exec` & `spawn`
2. `cmd`  -> Run the specified command
3. `url`  -> url to publish the output

And you are good to go.

## Usage 2
For larger and streaming output

```js
var app = require('express')();
var spawnProcess = require("../app/spawn_process.js");
var commandStr = "sh shell_scripts/temp.sh";//Shell script command will be executed.

app.get("test-spawn", function(req, res){
	spawnProcess.result(commandStr, function(child){
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
});

```
Browser output

[http://localhost:3000/test-spawn](http://localhost:3000/spawn-exec)
```html
<html>
    <head></head>
    <body>shell_script</body>
</html>
```

## Usage 3

```js
var app = require('express')();
var execProcess = require("../app/exec_process.js");
var commandStr = "sh shell_scripts/temp.sh";//Shell script command will be executed.

app.get("/test-exec", function(req, res){
    execProcess.result(commandStr, function(err, response){
        if(!err){
            res.send(response);//Output of shell script sent to browser
        }else {
            res.send("Error: ", err);
        }
    });
});
```

Browser output

[http://localhost:3000/test-exec](http://localhost:3000/test-exec)
```html
<html>
    <head></head>
    <body>shell_script</body>
</html>
```

## Demo URL

Don't miss to check out the [demo](https://banana-surprise-1671.herokuapp.com/test-exec)
