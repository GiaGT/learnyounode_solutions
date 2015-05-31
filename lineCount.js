var app = function() 
{
	var fs = require('fs');

	// Private methods
	var getFileName = function()
	{
		var fileName = process.argv[2];
		if (fs.existsSync(fileName))
		{
			return fileName;
		}
		else
		{
			return false;
		}
	}

	// Public methods
	var lineCount = function()
	{
		var fileName = getFileName();

		if(fileName)
		{
			var fileBuffer = fs.readFileSync(fileName);
			var content = fileBuffer.toString()
			
			var lines = content.split("\n");
			console.log(lines.length - 1);
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
