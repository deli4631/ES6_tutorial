// spread operator 

let displayColors = function (message: String, ...colors : String[]) {

    console.log(message)
    console.log(colors)
    console.log(arguments.length)
    for(let i in colors){
        console.log(colors[i])
    }
}


let message = "List of Colors"

let colorArray = ['Orange', 'Yellow', 'Indigo'];

displayColors(message, ...colorArray)

// spread looks similar to the rest operator, 
// but the only difference, rest -> specified in fucntion 
// spread is specifed during function call 

// displayColors(message, 'Red');
// displayColors(message, 'Red', 'Blue');
// displayColors(message, 'Red', 'Blue', 'Green');