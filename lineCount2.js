var app = function() 
{
	var fs = require('fs');

	// Public methods
	var lineCount = function()
	{
		var fileName = process.argv[2];;

		if(fileName)
		{
			fs.readFile(fileName, function (err, data) {
			  if (err) throw err;  
			  	var content = data.toString();
				var lines = content.split("\n");
				console.log(lines.length - 1);
			});

			
		}
		else
		{
			console.log("Error, file doesn't exist");
		}
	}	

	return {
	lineCount: lineCount,
	}
}()

app.lineCount();
