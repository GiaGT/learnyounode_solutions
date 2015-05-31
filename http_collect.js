var app = function()
{
	var http = require('http');
	var streamCount = 0; var resp = "";
	
	var getData = function(url)
	{
		var req = http.get(url, function(res) {
		 
		  res.setEncoding('utf8');
		  res.on("data", function (data) 
		  	{ 
		  		streamCount = streamCount + data.length;
		  		resp += data;
		  	})

		  res.on('end', function () {
		  	console.log(streamCount);
		  	console.log(resp);
		  })

		});

		req.on('error', function(e) {
		  console.log("Got error: " + e.message);
		});
	}

	var init = function()
	{
		var url = process.argv[2];

		if (!url) 
		{ 
			console.log("Usage: node http_collect.js [url]"); return 0; 
		}
		else
		{
			getData(url);
		}
	}

	return {
		init: init,
	}
}()

app.init();