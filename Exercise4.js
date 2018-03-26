var fs = require('fs');

var content;

var data = fs.readFile(process.argv[2], 'utf8', callback);


function callback (err, data) 
{
	if (err) {
		return console.log(err);
	}
	content = (data.split('\n').length) - 1;
	console.log(content);
}

