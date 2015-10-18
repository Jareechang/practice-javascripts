 'use strict';
// People Module

var People = (function(){
					// Instance variables
				    var name = "Jerry"; 
					var age = 23;	
					
					// Instance methods
					function sayName(){
						console.log(name);
					}
					function getAge(){
						console.log(age);
					}

					// API for the people module
					return {
						sayName: sayName,
			    			getAge: getAge
					}	
			})()	 

People.sayName();
People.getAge();
