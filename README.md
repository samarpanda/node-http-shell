## node-http-shell [![Build Status](https://travis-ci.org/samarpanda/node-http-shell.svg?branch=master)](https://travis-ci.org/samarpanda/node-http-shell)

> Get shell script output in browser

```cmd
$ npm install
$ npm start
```

## Usage

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


## Browser output

[http://localhost:3000/test-exec](http://localhost:3000/test-exec)
```html
<html>
    <head></head>
    <body>shell_script</body>
</html>
```

## Demo URL

Don't miss to check out the [demo](https://banana-surprise-1671.herokuapp.com/test-exec)
