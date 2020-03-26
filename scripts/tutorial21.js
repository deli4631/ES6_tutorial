"use strict";
// let p = new Person(); this gives an error 
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () { };
    return Person;
}());
var p = new Person();
console.log(p.greet === Person.prototype.greet);
// console.log(typeof Person)
// classes unlike functions are not 
// hoisted 
// employee();
// function employee(){}
// employee();
// adding a method to the class is the same as adding
//  a method to the prototype object
// point:
// the class syntax is not introducting a new object method
// to javascript, it's only a syntaical sugar to the existing 
// prototype based inheritnace so 
//# sourceMappingURL=tutorial21.js.map