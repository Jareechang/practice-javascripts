/* 
 * Determing this :
 * 
 * review from YDKJS by kyle simpson 
 *  */

/*
 *  1 . is the function call with new (new binding) ? 
 *     - if so, the this refers to the newly constructed object
 *     ex. var foo = new bar(); 
 * */

var test = function(stuff){
    this.b = stuff;
}

var obj1 = {};
 
var something = test.bind(obj1);

// Use with `bind` to bind this to obj1 in test function
something(2);
console.log(obj1.b);

// Using New binding

var thing = new something(3);

console.log(obj1.b);
// results in a different `this` because new overide the binding of `this`
console.log(thing.b);

/*
 *  2. functions called with `call` or `apply` (explicit binding)
 * */

var test = function(stuff){
    this.b = stuff;
}

var obj3 = {};
var obj4 = {
    b: 5
}; 

/*
 *  subtle difference between `call` and `apply` is that apply takes an array of arugments  
 *   
 *   - `call` and `apply` are provided to all functions with the first argument as the binding of `this`
 */
var something1 = test.call(obj3, 10);

console.log(obj3.b);
console.log(obj4.b);

var something2 = test.apply(obj3, [15]);

console.log(obj3.b);
console.log(obj4.b);

/*
 *   3. Functions called with a context (implicit binding)? 
 *
 * */

  
var test = function(stuff){
    this.b = stuff;
}

var obj5 = {
    test: test
};

var something4 = obj5.test("this is obj5's b");

console.log(obj5.b);


/* 
 *     4. The default (fallback) of this belongs to the global object. In most browers, `this` would
 *       be the window object. However, in regular programs in strict mode, it will result in `undefined`.
 * */
