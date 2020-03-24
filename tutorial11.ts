// this

var employee = {
    id: 1,
    greet: function(){
        //work around
        var self = this; 
        setTimeout(function(){console.log(self.id);}, 1000); //undefined
        // why is that? when you create a function it is going to create its own 
        // context for this keyword, so this in the console.log is bound to the function 
        // does not have the context of the outer function 
        
        // the work around works, but wiht arrow function there is an easy way!
        setTimeout(() => {console.log(this.id)}, 100);
        // so how does this work? 
        // when you an arrow fucntion it does not cereate its own this,
        // this is going to be ref to its parent
    }
};

employee.greet();

// benefits of arrow function:
// 1. reduce code
// 2. we are resolcing the cost of using this inside a function 