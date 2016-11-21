var mymodule = require('./module.js');

function mycallback ( err, list ) {
	if ( err ) return err;
	list.forEach(function(item){
		console.log(item);
	});
}

mymodule( process.argv[ 2 ], process.argv[ 3 ], mycallback )

