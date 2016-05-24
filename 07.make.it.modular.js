var mdl = require('./07.module');
mdl(process.argv[2], process.argv[3], function(err, filtered) {
    filtered.forEach(function(file) {
        console.log(file);
    });
});