//block of code can be executed together by wrapping them in a module called function.

// Why Functions?
// You can reuse code: Define the code once, and use it many times.

// You can use the same code many times with different arguments, to produce different results.




function add(a,b)
{
    return a+b
}
let sum =add(2,3)
console.log(sum)

//do not have name => anyonymus function -- function expressions

let sumofIntegers= function(c,d)
{
    return c+d
}

//=> fact by shorthand operator

let sumofnumbers=(c,d)=>c+d
console.log(sumofnumbers(2,3))

//Arrow Function: It is one of the most used and efficient methods to create a function in JavaScript
let function_name = (argument1, argument2 ,) => expression

//Function Parameters

	// Function definition
	function welcomeMsg(name) {
	console.log("Hello " + name +" welcome to javaScriptprograms");
	}
	
	// creating a variable
	var nameVal = "Admin";
	
	// calling the function
	welcomeMsg(nameVal);

    //Window print() Method




