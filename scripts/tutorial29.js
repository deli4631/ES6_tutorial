"use strict";
// a set is a list of values, but list cannot contain duplicate
// unlike arrays where we acess the indvidual elements, in sets we just
//  check if a value is present or not
// don't access the value 
var mySet = Object.create(null);
mySet.id = 0;
if (mySet.id) {
    console.log("ID exists");
}
// are we acutally chewcking to see if a value exist
// or are we checking to see if the value is non zero?
// confsuing with es5
// maps
// a collection of key-value pairs, so with es5 to have 
// key value pairs
var myMap = Object.create(null);
myMap.name = "Chandler";
var val = myMap.name;
console.log(val);
// unlike sets, where we were just chekcing if a value exists,
// with maps we acutally want to retrice the value 
myMap[100] = "Hello";
console.log(myMap["100"]); // object prop is strings
myMap.joke = "HAHA";
var val1 = myMap.joke;
console.log(val1);
var ob1 = {}; // string rep is the same 
var ob2 = {};
myMap[ob1] = "World";
console.log(ob1.toString());
console.log(ob2.toString());
//# sourceMappingURL=tutorial29.js.map