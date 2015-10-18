// • The number of characters received from the server. 
// • The second line should contain the complete String of characters sent by the server.

restModule = require('./rest_module.js');

url = process.argv[2];

returnData = function(data){
    // do something to data set...
    console.log(data);
}

restModule.returnResponse( url, returnData);
