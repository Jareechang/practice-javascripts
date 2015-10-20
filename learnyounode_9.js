var async  = require('async'),
     restModule =  require('./rest_module.js'),
     bl = require('bl');

url1 = process.argv[2];
url2 = process.argv[3];
url3 = process.argv[4];

var callbackglobal = null;

var returnData = function(response){    	     
    
    var sanitizeData = function(err, data){
        // store the Result in the Async Series callback
        callbackglobal(null, data.toString()); 
    }

   response.pipe(bl(sanitizeData));
}

 async.series([
    function(callback){
        callbackglobal = callback;
        restModule.returnResponse( url1, returnData);
     },
     function(callback){
        callbackglobal = callback;
        restModule.returnResponse( url2, returnData);	 
     },
    function(callback){
        callbackglobal = callback;
        restModule.returnResponse( url3, returnData);
    }
 ],
 // optional callback

 function(err, results){     
    for (var i = 0; i < 3; i++){
        console.log(i);
        console.log("---------------------");
    	console.log(results[i]);
        console.log("---------------------");
    }     
 });

