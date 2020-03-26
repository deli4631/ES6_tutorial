"use strict";
// class body and methods
var Person = /** @class */ (function () {
    // class body and es2015 and not typescript 
    // a typescript can only contain methods
    // constrcutor -> creating intalzing object, every class there can only be one costructor 
    function Person(name) {
        this.name = name;
        console.log(this.name + " Constructor");
    }
    // static method, can be called without instaniating the class
    Person.staticMethod = function () {
        console.log("Static Method");
    };
    // 3rd type is the prototype method 
    Person.prototype.greetPerson = function () {
        console.log("Hello" + this.name);
    };
    return Person;
}());
var p = new Person("Chandler");
Person.staticMethod();
p.greetPerson();
//# sourceMappingURL=tutorial22.js.map