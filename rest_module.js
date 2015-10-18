'use strict';

// Require the http core modules
var http = require('http');

/*  
*  REST module 
*         
*/

var restModule = (function(){

    var attribute = {};
    
    function validated(request){
        
        if (typeof request == 'undefined') { return; }

        var pattern =  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
        var stringValid = request.match(pattern); 

        return stringValid ? true : false;  // Check if string is a valid request 
    }

    function _callback(res){    

        attribute.get(res);                                  

        res.setEncoding('utf8');
        
        res.on('data', function(data){   
            
            // console.log(data);  // for logging the data 
        });                

        res.on('error', function(e) {
            console.log('problem with request: ' + e.message);
        });
    }

    
    function sentGetRequest(request) {
        
        if( validated(request) ){ http.get(request, _callback); }

        else {
            console.log("Request invalid, please remember to pass in third argument with proper protocol" +
                        "(http://) along with proper domain (google.com)");
        }
    }        

    function returnResponse(request, callback) {
        
        attribute.get = callback;

        sentGetRequest(request);

    }

    // Return the API Interface to interact with module
    return {
        get: sentGetRequest,
        returnResponse: returnResponse            
    };

})(http);


//Exporting module
module.exports = restModule;


    