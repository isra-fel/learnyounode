var http = require('http');
var bl = require('bl');
http.get(process.argv[2], function(res) {
    res.pipe(bl(function(err, data) {
        console.log(data.toString());
        http.get(process.argv[3], function(res) {
            res.pipe(bl(function(err, data) {
                console.log(data.toString());
                http.get(process.argv[4], function(res) {
                    res.pipe(bl(function(err, data) {
                        console.log(data.toString());
                    }));
                });
            }));
        });
    }));
});