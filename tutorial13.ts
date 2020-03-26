// rest operator 
// rest parameter syntax -> rep. indefnit number of arguments
// as an array. 
let displayColors = function (message: String, ...colors : String[]) {
    // console.log(message) get mutliple repeats because the message is part of the arugment object 
    console.log(message)
    console.log(colors)
    console.log(arguments.length)
    for(let i in colors){
        console.log(colors[i])
    }
}// can add as many param without effecting the loop


let message = "List of Colors"

// don't have a parameters, but we are passing param
// how does that work? and using use of the arguments object
// consdier this scenerio:
/**
 * we want to display a messAge, 
 * before we display the list of colors 
 */

displayColors(message, 'Red');
displayColors(message, 'Red', 'Blue');
displayColors(message, 'Red', 'Blue', 'Green');