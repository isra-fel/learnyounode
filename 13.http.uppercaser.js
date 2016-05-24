var http = require('http');
var map = require('through2-map');
http.createServer(function (req, res) {
    if (req.method != 'POST')
        return res.end('send me a POST!\n');
    req.pipe(map(function (trunc) {
        return trunc.toString().toUpperCase();
    })).pipe(res);
}).listen(Number(process.argv[2]));