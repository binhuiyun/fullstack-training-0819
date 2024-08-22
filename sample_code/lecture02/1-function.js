// Function declaration
function greet(name) {
    return "Hello, " + name;
}
// Function expression
var greet2 = function(name){
	return "Hello, " + name;
}
// arrow function (ES6)
const greet3 = (name) => "Hello, " + name;

// Function call
let message = greet3("John"); // "Hello, John"
console.log(message);