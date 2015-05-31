var app = function() 
{

	var http = require('http');
	var fs = require('fs');

	var startServer = function(port, filename)
	{
		var server = http.createServer();

	    server.on("request", function(req, res){
	    	var theStream = fs.createReadStream(filename).pipe(res);
	    })
	    server.listen(port);
	}

	var init = function()
	{
		var port = process.argv[2];
		var filename = process.argv[3];

		if((!port) || (parseInt(port) < 1024) || (!filename))
		{
			console.log("Usage: node http_server.js [server_port] [filename]");
			console.log("Where [server_port] > 1024 and [filename] is a valid filename");
			return false;
		}

		startServer(port, filename);


	}	

	return {
	init: init,
	}
}()

app.init();
