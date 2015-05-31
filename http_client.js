var app = function()
{
	var http = require('http');
	
	var getData = function(url)
	{
		http.get(url, function(res) {
		  res.setEncoding('utf8');
		  res.on("data", function (data) { console.log(data); })
		}).on('error', function(e) {
		  console.log("Got error: " + e.message);
		});
	}

	var init = function()
	{
		var url = process.argv[2];

		if (!url) 
		{ 
			console.log("Usage: node http_client.js [url]"); return 0; 
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