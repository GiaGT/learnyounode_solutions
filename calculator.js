var app = function() 
{

	// Private methods
	var isNum = function(num)
	{
		if(!isNaN(num))
		{
			return Number(num);
		}
		else
		{
			return 0;
		}
	}

	// Public methods
	var calculator = function()
	{
		var counter = 0; var total = 0;

		for(counter = 2; counter < process.argv.length; counter++)
		{
			total = total + isNum(process.argv[counter]);
		}

		console.log(total);
	}	

	return {
	calculator: calculator,
	}
}()

app.calculator();
