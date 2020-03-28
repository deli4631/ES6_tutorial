// set is a data structure contain a list of values that are unique
// to cerate a new set we new it

let mySet = new Set();

let ob1 = {};
let ob2 = {};

mySet.add("Hello");
mySet.add(5);
mySet.add(5); // will ignore this value
mySet.add(ob1);
mySet.add(ob2);
// because object are not convereted to strings
// the two objects are unique 
console.log(mySet.size);

// can italize an array during the creation of a set
let newSet = new Set([1,2,3,4,5,5,5,]);
console.log(newSet.size)

let chainSet = new Set().add("hello").add("world")
console.log(chainSet.size)

console.log(newSet.has(5));
console.log(newSet.has(6));
console.log(newSet.delete(1));
console.log(newSet.has(1));
console.log(newSet.size)