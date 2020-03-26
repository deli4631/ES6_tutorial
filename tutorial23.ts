// extend key word inhereit from parent class

class Person{
    constructor(name){
        console.log(name + " Person Constructor")
    }
    getID(){
        return 10;
    }
};

class Employee extends Person{
    constructor(name){
        super(name);
        console.log(name + "Employee constrcutor");
    }

    getID(){
        // return 50;
        return super.getID();
    }

};

let e = new Employee("Chandler");
console.log(e.getID());

