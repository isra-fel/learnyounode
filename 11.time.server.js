var net = require('net');
var strftime = require('strftime');
var serv = net.createServer(function (socket) {
    var tm = strftime('%F %H:%M', new Date());
    socket.end(tm);
});
serv.listen(Number(process.argv[2]));