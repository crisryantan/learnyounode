var http = require( 'http' );
var map  = require( 'through2-map' );

var port     = process.argv[2];
var filename = process.argv[3];


var server = http.createServer( function ( req, res ) {
	if ( req.method !== 'POST' ) {
		return res.end('send me a POST\n');
	}
	req.pipe( map( function ( currString ) {
		return currString.toString().toUpperCase();
	} ) ).pipe( res );
} ).listen( port );

// req - readable
// res - writeable

// bl - writeable stream
// prefer streams.. not buffer