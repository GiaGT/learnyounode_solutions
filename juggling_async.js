var app = function()
{
	var http = require('http');
	
	var initResponseArray = function(urls)
	{
		var arr = [];
		urls.forEach(function() 
		{
			arr.push("");
		});

		return arr;
	}

	var getData = function(urls)
	{
		var resp = initResponseArray(urls);
		var cStatus = 0;

		urls.forEach(function(url) { 
			http.get(url, function(res) {
				  res.setEncoding('utf8');
				  
				  res.on("data", function(data) { 
				  	resp[url] += data;
				  });

				  res.on("end", function() {
				  	cStatus++; if(cStatus > 2) printAll(resp);
				  })	  	
		})
		});
	}

	var printAll = function(resp)
	{
		for (var i=0; i<3; i++)
		{
			console.log(resp);
		}
	}



	var init = function()
	{
		var url1 = process.argv[2];
		var url2 = process.argv[3];
		var url3 = process.argv[4];

		if ((!url1) || (!url2) || (!url3) )
		{ 
			console.log("Usage: node http_collect.js [url1] [url2] [url3]"); return 0; 
		}
		else
		{
			getData([url1, url2, url3]);
		}
	}

	return {
		init: init,
	}
}()

app.init();