module.exports = function(directory, ext, callback) 
{
	var fs = require('fs');

	var fileName = "";
	var index = 0;
	var files = [];

	fs.readdir(directory, function(err, file)
	{	
		if(!err)
		{
			for(index in file)
			{
				if((file[index].split(".").pop() == ext) && (file[index].split(".").length > 1))
				{
					files.push(file[index]);
				}
			}
			callback(null, files);
		}
		else
		{
			callback(err, null);
		}
	})			
}


