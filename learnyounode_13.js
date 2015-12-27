var http = require('http');
var url = require('url');

http.createServer(function(req,res){
    // step1 : how to get a specific route
    var reqUrlPath =  url.parse(req.url, true).pathname;
    var dateReq =  new Date(url.parse(req.url, true).query.iso);
    var result = false;

    if(reqUrlPath === "/api/parsetime"){
        result = {
            "hour": dateReq.getHours() ,
            "minute": dateReq.getMinutes(),
            "second": dateReq.getSeconds() 
        };
    }

    if (reqUrlPath === '/api/unixtime'){
        result = {
            unixtime: dateReq.getTime()
        };
    }

    if(result){
        res.writeHead(200, { 'Content-Type': 'application/json'  });
        res.end(JSON.stringify(result))
    }else {
        res.writeHead(404)
        res.end()
    } 
    
}).listen(Number(process.argv[2]));
