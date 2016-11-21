var net    = require( 'net' );
var moment = require( 'moment' );

var server = net.createServer( function ( socket ) {
	var today = moment().format( 'YYYY-MM-DD HH:mm' );
	socket.write( today + '\n' );
	socket.end();
} );

server.listen( process.argv[2] );