// let percentBonus = 0.1
// function call
let percentBonus = () => 0.1;
// let getValue = function(value = 10, bonus = value*0.1){
//     console.log(value + bonus)
// }

let getValue = function(value = 10, bonus = value  * percentBonus()){
    console.log(value + bonus);
    console.log(arguments.length);
}

getValue();
getValue(20);
getValue(20, 30);
// getValue(undefined, 30);


