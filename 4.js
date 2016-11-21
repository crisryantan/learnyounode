var fs = require( 'fs' );

fs.readFile( process.argv[2], 'utf-8',function(err, content){
	console.log( content.trim().split( '\n' ).length - 1 );
} );




