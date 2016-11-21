var http = require( 'http' );

http.get( process.argv[2],  function ( res ) {
	res.setEncoding( 'utf8' )
	var collectedData = '';
	res.on( 'data', function ( data ) {
		collectedData += data;
	} );
	res.on( 'end', function (  ) {
		console.log(collectedData.length);
		console.log( collectedData )
	} );
} );

// learnyounode solution from commandline
    // var http = require('http')
    // var bl = require('bl')

    // http.get(process.argv[2], function (response) {
    //   response.pipe(bl(function (err, data) {
    //     if (err) {
    //       return console.error(err)
    //     }
    //     data = data.toString()
    //     console.log(data.length)
    //     console.log(data)
    //   }))
    // })
