// • The number of characters received from the server. 
// • The second line should contain the complete String of characters sent by the server.

restModule = require('./rest_module.js');

url = process.argv[2];

/* 
** 
    Callback function to read the variables upon 
    finishing the Get request to 'x' url
**
*/

returnData = function(data){
    // do something to data set...
    
}

restModule.returnResponse( url, returnData);
