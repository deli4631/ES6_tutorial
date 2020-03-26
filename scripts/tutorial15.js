"use strict";
// object literals p1
var firstName = "Chandler";
var lastName = "Bings";
var person = {
    firstName: firstName,
    lastName: lastName
};
function createPerson(firstName, lastName, age) {
    var fullName = firstName + " " + lastName;
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        isSenior: function () {
            return age > 60;
        }
    };
}
var p = createPerson("Ross", "Geller", 110);
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
console.log(p.isSenior());
// console.log(person.firstName)
// console.log(person.lastName) 
//# sourceMappingURL=tutorial15.js.map