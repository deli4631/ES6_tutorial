"use strict";
// when to use let vs when to use const
// recomended using const over let as much 
// as possible because most of the 
// vars we use usally requre a one time 
// intialization and are never really reassigned  
// also by using the const key word, helps us to 
// identify vars which are getting reassigned, when really 
// that wasn't our intention 
// use let when reassignment is expected 
// use const when a new value assignemtn is not expected 
// quick idea: calucating the area of a circle
var PI = 3.14; // never really going to change 
var MAX_SIZE = 100;
var a = 5;
var b = 10;
a = a + b;
b = a - b;
a = a - b;
//# sourceMappingURL=tutorial9.js.map