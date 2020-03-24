function greetPerson(name: string){
    if(name == "Chandler"){
        var greet = "Hello Chandler";
    } else {
        var greet = "hi there";
    }
    console.log(greet);
}
// hoisting, behind the scenes, JS is rewritten
// to have a single declartion of the varaible 
// @ the top ignoring any duplicate decloration 

// functional scope:
// var declartion has a fucntional scope it doesn't 
// matter if you are declarign it w/in an if block else block
// or for loop or while loop 
// the value is going to be accessible, within the function 
// so functional scope

// because of hositing and functional scope
// more decloration seems a bit tricky 
// this is why es6 intorduce let keyword
greetPerson("Chandler");