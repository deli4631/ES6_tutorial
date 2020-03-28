
// default wihtout hjaving us to do it at the end
// can only defualt only one thing so usally igs going to be the 
// class that your file is defining 
export default class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
/***
 * wnat to export the different info about the 
 * user so that we can use it inside of our main.js
 * 
 * 2 different exports:
 *  default and standard 
 * 
 * 
 */
export function printName(user){
    console.log(`User's name is ${user.name}`)
}

export function printAge(user){
    console.log(`User is ${user.age} years old`)
}

/**
 * allowing import and export section of code 
 * from file to other files
 * allows you to break apart code into more smaller
 * grain files, easier to undertsgtand/ reason with 
 * 
 * 
 */

 // can defing at the ending

//  export default User
//  export{printName, printAge}