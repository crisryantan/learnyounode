var fs   = require( 'fs' );
var http = require( 'http' );

var port     = process.argv[2];
var filename = process.argv[3];


var server = http.createServer( function ( req, res ) {
	fs.createReadStream( filename ).pipe( res );
} ).listen( port );
