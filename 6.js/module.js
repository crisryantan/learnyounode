module.exports = function ( dirName, exName, callback ) {
	var fs = require( 'fs' );

	fs.readdir( dirName, function( err, list ) {
		if ( err ) return callback ( err )
		var newArray = [];
		list.forEach( function ( item ) {
			if ( item.indexOf( '.' + exName) !== -1 ) {
				newArray.push( item )
			}
		} );
		callback( null, newArray );
	} );

}

