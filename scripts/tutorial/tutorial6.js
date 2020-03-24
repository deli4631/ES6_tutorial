"use strict";
// keyword for declaring vars, let 
// diff is that let declartion are not hoisted 
// and are block scope 
// block scope -> is any section of code in curly braces 
// if/else block, while, etc.
function greetPerson(name) {
    var greet;
    // even though we can't redeclare let vars
    // but we can do it inside blocks 
    if (name == "Chandler") {
        var greet_1 = "Hello Chandler";
    }
    else {
        var greet_2 = "hi there"; // however have 3 different greet declration 
    } // so when running this it will be undefined 
    console.log(greet);
    // let keyword, can't use 
    // after the code, must be before
    // if we move let greet here it will cause an error 
}
greetPerson("Chandler");
var a = 1;
var b = 2;
if (a == 1) {
    var a = 10;
    var b_1 = 20;
    console.log(a); // 10
    console.log(b_1); // 20
}
console.log(a); // 10
console.log(b); // 2
// let decolration cannot be re-declraed**
var c = 1;
var c = 2;
// let d = 1 this will cuse an erro
// let d = 2
//# sourceMappingURL=tutorial6.js.map