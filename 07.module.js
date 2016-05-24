module.exports = function(dir, ext, callback) {
    var fs = require('fs');
    var path = require('path');
    fs.readdir(dir, function(err, list) {
        if (err)
            return callback(err);
        var filtered = [];
        list.forEach(function(file) {
            if (path.extname(file) == ('.'+ext))
                filtered.push(file);
        });
        callback(null, filtered);
    });
};