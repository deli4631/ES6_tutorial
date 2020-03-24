"use strict";
// arrow function -> provide a short and concise syntax
// for writing function 
// they also simplified the behavoiour of the this keyword 
var getRegvalue = function () {
    return 10;
};
console.log(getRegvalue());
// const getArrowValue = () => {
//     return 10;
// }
// const getArrowValue = () => 10;
// const getArrowValue = (m: any) => m*10;
// const getArrowValue = m => m*10;
var getArrowValue = function (m, bonus) { return m * 10 + bonus; };
console.log(getArrowValue(5, 10));
console.log(typeof getArrowValue);
//# sourceMappingURL=tutorial10.js.map