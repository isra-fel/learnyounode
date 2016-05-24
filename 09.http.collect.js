var http = require('http');
var recv = '';

function listen() {
    http.get(process.argv[2], function(response) {
        response.on('end', function(data) {
            console.log(recv.length);
            console.log(recv);
        });
        response.setEncoding('utf8');
        response.on('data', function(data) {
            recv += data;
//            listen();
            //wtfffffffffffffff
        });
    });
}

listen();