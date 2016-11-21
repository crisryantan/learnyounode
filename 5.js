var fs = require( 'fs' );

fs.readdir( process.argv[ 2 ], function( err, list ) {
	list.forEach( function ( item ) {
		if ( item.indexOf( '.' + process.argv[ 3 ] ) !== -1 ) {
			console.log( item )
		}
	} );
} );