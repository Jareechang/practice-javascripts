'use strict';

// Require the http core module
var http = require('http');

// var req = http.get(process.argv[2], callback);
// HTTP module  

    // Takes in a request from the command line, 
        // ––– Defined by EX. var request = process.argv[2];
        // ––– httpApi(request);

    var restModule = (function(){
        
        function validated(request){

            if (typeof request == 'undefined') {
                return;
            }

            var pattern =  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/                                                
            var stringValid = request.match(pattern); 

            return stringValid ? true : false;  // Check if string is a valid request 
        }

        function _callback(res){

            res.setEncoding('utf8');
            
            res.on('data', function(data){
                console.log(data);
            });                

            res.on('error', function(e) {
                console.log('problem with request: ' + e.message);
            });
        }
        
        function sentGetRequest(request) {
            
            if( validated(request) ){

                http.get(request, _callback);

            }else {

                console.log("Request invalid, please remember to pass in third argument with proper protocol (http://)\
                             along with proper domain (google.com)");

            }
        }        
        // Return the Interface to interact with module
        return {
            sentGetRequest : sentGetRequest
        };
    })(http);


//Exporting module
module.exports = restModule;


    