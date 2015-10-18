// • The number of characters received from the server. 
// • The second line should contain the complete String of characters sent by the server.

restModule = require('./rest_module.js');

requestEndPoint = process.argv[2];

console.log( restModule.sentGetRequest(requestEndPoint) );