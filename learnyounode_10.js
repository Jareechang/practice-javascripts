var net = require('net');
var strftime = require('strftime');

argv1 = process.argv[2];


var server = net.createServer(function (socket) {
    // socket handling logic
    date = new Date();
    if (argv1){        
        socket.write(strftime("%Y-%m-%d %H:%M",date));
    }else {
        socket.write("");
    }
    socket.end();
})

server.listen(argv1);

