var cluster = require('cluster');

cluster.setupMaster({exec: './app.js'});

for (var i = 0; i < 4; i++) {
    cluster.fork();
}

cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
});
