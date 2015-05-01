var spawn = require('child_process').spawn;

var result = function(str, cb){
	var obj = splitCommandParams(str);
	var command = obj.command,
		params = obj.params;

	var child = obj.hasParams ? spawn(command, params) : spawn(command);

	return cb(child);
}

function splitCommandParams(str){
	var splits = str.split(' ');
	if(splits.length === 1){
		return {
			command: str,
			params: '',
			hasParams: false
		};
	}
	return {
		command: splits.splice(0, 1).toString(),
		params: splits,
		hasParams: true
	};
}

exports.result = result;
