// class body and methods
class Person {
// class body and es2015 and not typescript 
// a typescript can only contain methods
// constrcutor -> creating intalzing object, every class there can only be one costructor 
    constructor(name){
        this.name = name;
        console.log(this.name + " Constructor")
    }
    // static method, can be called without instaniating the class
    static staticMethod(){
        console.log("Static Method")
    }
    // 3rd type is the prototype method 
    greetPerson(){
        console.log("Hello" + this.name)
    }
}

let p = new Person("Chandler");
Person.staticMethod();
p.greetPerson();
