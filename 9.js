var http    = require( 'http' );
var urlList = [];

var responses = [];
var complete_requests = 0;

process.argv.forEach( function ( url, index ) {
	if ( index > 1 ) {
		http.get( url,  function ( res ) {
			res.setEncoding( 'utf8' )
			var collectedData = '';
			res.on( 'data', function ( data ) {
				collectedData += data;
			} );
			res.on( 'end', function (  ) {
				responses.push( collectedData );
				complete_requests++;
				if ( complete_requests === urlList.length ) {
					responses.forEach( function ( res ) {
						console.log( res )
					} );
				}
			} );
		} );
	}
} );




// learnyounode solution from commandline
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }
