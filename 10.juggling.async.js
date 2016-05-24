var http = require('http');
var recv = '';
http.get(process.argv[2], function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data) { recv += data; });
    res.on('end', function() {
        console.log(recv);
        recv = '';
        http.get(process.argv[3], function(res) {
            res.setEncoding('utf8');
            res.on('data', function(data) { recv += data; });
            res.on('end', function() {
                console.log(recv);
                recv = '';
                http.get(process.argv[4], function(res) {
                    res.setEncoding('utf8');
                    res.on('data', function(data) { recv += data; });
                    res.on('end', function() {
                        console.log(recv);
                    });
                });
            });
        });
    });
});

        