'use strict';

var map = require('through2-map'),
    http = require('http');

var port = Number(process.argv[2]);

http.createServer(function(req, res){

    if(req.method != 'POST'){
        return res.end('Send post request'); 
    }

    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res)

}).listen(port);
