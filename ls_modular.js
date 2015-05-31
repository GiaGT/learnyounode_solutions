var app = function() {

	var myModule = require('./ls_modular2.js');

	var main = function()
	{
		var index = "";

		myModule(process.argv[2], process.argv[3], function(err, data) {  
			if (err) 
			{
				return console.error('There was an error: ', err);
			}
			else 
			{
				for (index in data)
				{
					console.log(data[index]);
				}
			}
			
		})
	}

	return {
		main: main,
	}

}()

app.main();