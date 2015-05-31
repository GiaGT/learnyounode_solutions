var app = function() 
{

	var net = require('net');

	var addZero = function(num)
	{
		return ( (num>9) ? num : ("0" + num) );
	}

	var startServer = function(port)
	{
		var server = net.createServer(function (socket) {
	     	var date = new Date();
	     	socket.write(
	     		date.getFullYear() + "-" + 
	     	 	addZero(date.getMonth()+1) + "-" + 
	     	 	addZero(date.getDate()) + " " + 
	     	 	addZero(date.getHours()) + ":" + 
	     	 	addZero(date.getMinutes()) + "\n"
	     	 	);
	     	
	     	socket.end();
	    });
    	
    	server.on('error', function(e) {
    		console.log("Error: " + e);
    	})
    	
    	server.listen(port);

	}

	var init = function()
	{
		var port = process.argv[2];
		if((!port) || (parseInt(port) < 1024))
		{
			console.log("Usage: node time_server.js [server_port]");
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
