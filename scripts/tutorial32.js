"use strict";
// maps association between information and values
// - ordered list of key value pairs
// - in maps both the key and the value 
// can bet of any type 
// unlike objects where the type of the property is 
// always a string 
var myMap = new Map();
myMap.set("fname", "Chalnder"); // add values to the amp
myMap.set("age", 30);
// retrieve value 
console.log(myMap.get("fname"));
var ob1 = {};
var ob2 = {};
myMap.set(ob1, 10);
myMap.set(ob2, 20);
console.log(myMap.get(ob1));
console.log(myMap.size);
console.log(myMap.has("fname"));
console.log(myMap.delete(ob1));
console.log(myMap.get(ob2));
console.log(myMap.size);
console.log(myMap.has("fname"));
// clear method that removes everythihng
console.log(myMap.clear());
console.log(myMap.size);
//# sourceMappingURL=tutorial32.js.map