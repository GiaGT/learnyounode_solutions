var app = function() 
{

	var http = require('http');
	var map = require('through2-map');

	var startServer = function(port)
	{
		var server = http.createServer();

		server.on("request", function(req, res){
			 if (req.method != 'POST')
			 {	
			 	res.writeHead(418, { 'Content-Type': 'text/plain' });
			 	res.write("418 Error - I'm a Teapot (RFC 2324) - I'll accept POST requests only.\n");
			 	res.end();
        		return false;
        	 }

		    req.pipe(map(function (chunk) {
		      return chunk.toString().toUpperCase();
		    })).pipe(res);
	    })

	    server.listen(port);
	}

	var init = function()
	{
		var port = process.argv[2];

		if((!port) || (parseInt(port) < 1024))
		{
			console.log("Usage: node http_server.js [server_port]");
			console.log("Where [server_port] > 1024");
			return false;
		}

		startServer(port);
	}	

	return {
	init: init,
	}
}()

app.init();
