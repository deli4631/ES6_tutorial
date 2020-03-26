// destructing array -> to pull apart the elements 
// 
// to destruct generally means to
// destroy structure and dismantle
// 

// let employee = ["chandler", "bing", "M"];
let employee = ["chandler", "bing"];

// let [fname, lname, gender] = employee;
// let [, , gender] = employee; // if you jsut want the gender
// let [fname, ...elements] = employee; 
let [fname, lname, gender = "Unknown"] = employee;
 console.log(fname);
 console.group(lname);
//  console.log(elements);
 console.log(gender);
 
 // rest operator helps us to have a single var
 // that can contain a group of elements so let me replace
 //  last name 

 // can use destructing with default