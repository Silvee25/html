//global scope
var fruit = 'apple'
console.log(fruit);        //apple

function getFruit(){
    console.log(fruit);    //fruit is accessible here
}

getFruit();

//Function Scope
//Whenever you declare a variable in a function, the variable is visible only within the function. You can't access it outside the function. var is the keyword to define variable for a function-scope accessibility.

function foo(){
    var fruit ='apple';
    console.log('inside function: ',fruit);
}

foo();                    //inside function: apple
console.log(fruit);

//Block Scope
//A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.

function foo(){
    if(true){
        var fruit1 = 'apple';        //exist in function scope
        const fruit2 = 'banana';     //exist in block scope
        let fruit3 = 'strawberry';   //exist in block scope

    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

foo();


//Lexical Scope
//Another point to mention is the lexical scope. Lexical scope means the children scope have the access to the variables defined in the parent scope. The children functions are lexically bound to the execution context of their parents.

function foo1(){
    var fruit1 = 'apple';        
    const fruit2 = 'banana';     
    let fruit3 = 'strawberry';
    function foo2(){
        console.log(fruit1);
        console.log(fruit2);
        console.log(fruit3);
    }
    foo2();
}

foo1();