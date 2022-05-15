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
    var age = 32; //This vfunction here gets its own execution context
    console.log(age);
}
foo();
console.log(age);*/



//SCOPING AND SCOPE CHAIN -- where can we access a certain var?
