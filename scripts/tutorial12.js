"use strict";
// let percentBonus = 0.1
// function call
var percentBonus = function () { return 0.1; };
// let getValue = function(value = 10, bonus = value*0.1){
//     console.log(value + bonus)
// }
var getValue = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = value * percentBonus(); }
    console.log(value + bonus);
    console.log(arguments.length);
};
getValue();
getValue(20);
getValue(20, 30);
// getValue(undefined, 30);
//# sourceMappingURL=tutorial12.js.map