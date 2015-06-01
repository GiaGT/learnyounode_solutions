var app = function() 
{

	var http = require('http');
	var url = require('url');

	var serverResponder = function(resp, res)
	{
		switch(resp.code)
		{
			case 200:
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.write(JSON.stringify(resp.text));
			break;

			case 404:
			res.writeHead(404, { 'Content-Type': 'text/html' });
			res.write("404 - Error - ");
			res.write(resp.text);
			break;
		}	
		res.end();
	}

	var isoDate = function(thisDate)
	{
		return ( (isNaN(new Date(thisDate).getTime())) ? false : new Date(thisDate)  );
		
	}

	var parseTime = function(isoVal)
	{
		var isoTime = isoDate(isoVal);
		return {
			hour: isoTime.getHours(),
			minute: isoTime.getMinutes(),
			second: isoTime.getSeconds(),
		}
	}

	var unixTime = function(isoVal)
	{
		return {
			unixtime: isoDate(isoVal).getTime(),
		}
	}

	var router = function(req)
	{
		var requestArray = url.parse(req, true);
		var isoVal = requestArray.query['iso'];
		var finalValue = "";

		if ((!isoVal) || (!isoDate(isoVal)))
		{
			return { 
				code: 404, 
				text: 'Iso value is not valid' 
			};
		} 

		switch(requestArray.pathname)
		{
			case "/api/parsetime":
			return { 
				code: 200, 
				text: parseTime(isoVal),
			};
			break;

			case "/api/unixtime":
			return { 
				code: 200, 
				text: unixTime(isoVal),
			};
			break;

			default:
			return { 
				code: 404, 
				text: 'File not found',
			};
			break;
		}
	}


	var startServer = function(port)
	{
		var server = http.createServer();
		
		server.on("request", function(req, res){
			serverResponder(router(req.url), res);
		});
			
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
