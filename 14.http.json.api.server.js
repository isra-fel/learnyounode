var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
    if (req.method != 'GET')
        return res.end('give me a GET\n');
    var q = url.parse(req.url, true);
    var iso = q.query['iso'];
    if (iso == undefined)
        return res.end('url inappropriate\n');
    var date = new Date(iso);
    if (q.pathname == '/api/parsetime') {
        res.writeHead(200, {'Content-Type':'application/json'});
        res.write(JSON.stringify({
            'hour':date.getHours(),
            'minute':date.getMinutes(),
            'second':date.getSeconds()
        }));
        res.end();
    }
    if (q.pathname == '/api/unixtime') {
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify({ 'unixtime':date.getTime() }));
    }
}).listen(Number(process.argv[2]));