 // const -> keyword, used to create a read only 
 // named constants
 // block scope and are not hosted 
 // a val must be mandatorily set with const declartion and can't be changed
 // within the same scope 

 let num1; 
//  const num2; error need to be declared and intalize it
const num2 = 10;
// there is a catch when delcaring an ojbect with the const keyword let us see
// what that is

const obj1 = {
    name: "joatmon"
};

console.log(obj1.name);

/*
*  first thing that won't work, 
*  assigning a new ojbect to obj1
*  obj1 = {}; will not work 
or we have to remove the const and replace let
*/


obj1.name = "bob"; // we cann assign new values to the 
// property of the object

console.log(obj1.name);