// destrcuter objects

let employee = {
    fname : "chandler",
    lname : "Bing",
    gender: "male"

};

let {fname: f, lname: l, gender: g} = employee;

console.log(f);
console.log(l);
console.log(g);