// • The number of characters received from the server. 
// • The second line should contain the complete String of characters sent by the server.

var restModule =  require('./rest_module.js'), 
            bl = require('bl')

url = process.argv[2];
returnData = function(response){
    // do something to data set...
    var sanitizeData = function(err, data){
        console.log(data.toString().length);
        console.log(data.toString());
    }

    response.pipe(bl(sanitizeData));
}

restModule.returnResponse( url, returnData);
