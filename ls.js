var app = function() 
{
	var fs = require('fs');

	// Public methods
	var lsFilter = function()
	{
		var fileName = "";
		var index = 0;

		fs.readdir(process.argv[2], function(err, file)
		{
			for(index in file)
			{
				if((file[index].split(".").pop() == process.argv[3]) && (file[index].split(".").length > 1))
				{
					console.log(file[index]);
				}
			}
		});		
	}	

	return {
	lsFilter: lsFilter,
	}
}()

app.lsFilter();
