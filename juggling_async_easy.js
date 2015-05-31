var app = function()
{
	var http = require('http');
	
	var getData = function(url)
	{
		var resp = ["","",""];
		var cStatus = 0;

		
		var req1 = http.get(url[0], function(res) {
				  res.setEncoding('utf8');
				  
				  res.on("data", function(data) { 
				  	resp[0] += data;
				  });

				  res.on("end", function() {
				  	cStatus++; if(cStatus > 2) printAll(resp);
				  })	  	
		})

		var req2 = http.get(url[1], function(res) {
				  res.setEncoding('utf8');
				  
				  res.on("data", function(data) { 
				  	resp[1] += data;
				  });	

				   res.on("end", function() {
				  	cStatus++; if(cStatus > 2) printAll(resp);
				  })	  	
		})

		var req3 = http.get(url[2], function(res) {
				  res.setEncoding('utf8');
				  
				  res.on("data", function(data) { 
				 	resp[2] += data;
				  });	

				   res.on("end", function() {
				  	cStatus++; if(cStatus > 2) printAll(resp);
				  })	  	
		})
	}

	var printAll = function(resp)
	{
		for (var i=0; i<3; i++)
		{
			console.log(resp[i]);
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