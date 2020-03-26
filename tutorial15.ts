// object literals p1

let firstName = "Chandler";
let lastName = "Bings";

let person = {
    firstName,
    lastName
};

function createPerson(firstName, lastName, age) {
    let fullName = firstName + " " + lastName
    return {
        firstName, 
        lastName, 
        fullName,
        isSenior: function (){
            return age > 60;
        }
    }
}

let p = createPerson("Ross", "Geller", 110);
console.log(p.firstName)
console.log(p.lastName)
console.log(p.fullName)
console.log(p.isSenior())

// console.log(person.firstName)
// console.log(person.lastName) 
