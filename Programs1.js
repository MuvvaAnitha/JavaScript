var message = 'Hello World';
console.log(message);

// generating  a random number
const a = Math.random();
console.log(a);

// generating a random number
const ac = Math.floor(Math.random() * (10.5 - 1)) ;
console.log(`Random value between 1 and 10 is ${ac}`);

//This will show integer output between 1 (inclusive) to 10 (exclusive), i.e. (1 to 9).
// Here, Math.floor() is used to convert decimal to integer value.

// input from the user
const prompt = require("prompt-sync")();
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));

// generating a random number
const b = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(`Random value between ${min} and ${max} is ${b}`);

//========================program to find the largest among three numbers===================//

//take input from the user
const n1 = parseFloat(prompt("Enter first number: "));
const n2 = parseFloat(prompt("Enter second number: "));
const n3 = parseFloat(prompt("Enter third number: "));
//parseFloat() is used to convert numeric string to number. If the string is a floating number,
// parseFloat() converts the string into floating point number.

const largest = Math.max(n1, n2, n3);

// display the result
console.log("The largest number is " + largest);

//Note:-
// Math.max() returns the largest number among the provided numbers.
// You can use Math.min() function to find the smallest among the numbers.

