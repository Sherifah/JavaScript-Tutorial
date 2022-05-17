/****HOISTING */


//Calling a function before declaring it-concept of hoisting
//Hoisting only works for functions declaration not expression


//Function declaration
/**calcAge(1920);

function calcAge(year) {
    console.log(2022 - year);
}

//Function expression
//Hoisting does not work

//retirement(1990);

var retirement = function(year) {
    console.log(65 - (2022 - year));
}

//Variables
//Hoisting does not work

console.log(age);
var age = 23; //This var get stored in the global execution context object


foo()
function foo() {
    var age = 32; //This var function here gets its own execution context
    console.log(age);
}
foo();
console.log(age);*/



//SCOPING AND SCOPE CHAIN -- where can we access a certain var?

//First scoping example

/*var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!' ;
        console.log(a + b + c);
    }
}
*/

//Execution stack is the order in which functions are called
//Scope chain is the order in which functions are written lexically\

/*var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!' ;
        third();
    }
}

function third() {
    var d = 'John';
    console.log(a + d); //throws undefined here because execution stack is different from scope chain
}
*/

//THE THIS VARIABLE
//Regular function call: the this keyword point at the global object
//Method call: the this variable point to the object that is calling the method
//The this keyword is not assigned a value until a function where it is defined is actually called

//console.log(this); Regular

/*calcAge(1997);

function calcAge(year) {
    console.log(2022 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1997,
    calcAge: function() {
        console.log(this);
        console.log(2022 - this.yearOfBirth);

        /*function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }

}

john.calcAge()

var mike = {
    name: 'Mike',
    yearOfBirth: 2001
}

mike.calcAge = john.calcAge;
mike.calcAge()*/