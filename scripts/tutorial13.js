"use strict";
// rest operator 
// rest parameter syntax -> rep. indefnit number of arguments
// as an array. 
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    // console.log(message) get mutliple repeats because the message is part of the arugment object 
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
    for (var i in colors) {
        console.log(colors[i]);
    }
}; // can add as many param without effecting the loop
var message = "List of Colors";
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
//# sourceMappingURL=tutorial13.js.map