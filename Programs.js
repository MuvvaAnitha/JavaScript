//========================print even numbers from 1 to 100 in javascript===================//

for (let i = 0; i < 100; i += 2) {
    console.log(i)
}

//========================print odd numbers from 1 to 100 in javascript===================//

//console.log(Array.from({ length: 50 }, (e, i) => (i * 2) + 1).join(' '))
for (i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);

    }
}

//========================print uppercase in javascript===================//

var str1 = "welcome to javascript"
console.log(str1.toUpperCase())


//========================Print prime numbers from 1 to 100 in javascript===================//

for (var i = 0; i <= 100; i++) {

    var notPrime = false;
    for (var y = 2; y <= i; y++) {
        if (i % y === 0 && y !== i) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
        console.log(i);
    }
}


//========================Print Sum of odd/even numbers===================//


var n = 6;
var oddSum = 0;
var evenSum = 0;
var i = 1; // initialization
while (i <= n) { // condition
    if (i % 2 == 0) {
        evenSum += i;
    } else {
        oddSum += i;
    }
    i++; // incrementation
}
console.log(oddSum, evenSum);   


//String reverse
const str = 'HELLO';
const reverseString = (str = '') => {
   let reverse = '';
   const { length: len } = str;
   for(let i = len - 1; i >= 0; i--){
      reverse += str[i];
   };
   return reverse;
};
console.log(reverseString(str));     //OLLEH


// const reverseStr = str => {
//     return str.split('').reverse().join('')
// }

// reverseStr('hello world!') // => !dlrow olleh

// function reverseString(str) {
//     return str;
//   }
  
//   reverseString("hello");

//   function reverseString(str) {
//     // Create a new variable to store the reversed string
//     // and set it equal to an empty string for now.
//     // This variable will eventually be our answer.
//     let reversedString = ''
//     // Write a for loop starting at the end of the input string
//     // by setting i equal to str.length - 1.
//     // Next, set the for loop to keep running as long as i is
//     // greater than or equal to 0.
//     // Finally, subtract one from i after each time the loop runs.
//     for (let i = str.length - 1; i >= 0; i--) {
//       // Each time the loop runs, add the letter at the index of
//       // the input string to our variable reversedString
//       reversedString += str[i]
//       // Each time the loop runs using "hello" as the input string: 
//       // First:    i = 4,   reversedString = "" + "o" = "o"
//       // Second:   i = 3,   reversedString = "o" + "l" = "ol"
//       // Third:    i = 2,   reversedString = "ol" + "l" = "oll"
//       // Fourth:   i = 1,   reversedString = "oll" + "e" = "olle"
//       // Fifth:    i = 0,   reversedString = "olle" + "h" = "olleh"
//     }
//     // return the reversed string as the answer
//     return reversedString
//   }
  
//   reverseString("hello");


//========================Print factorial of a number===================//


var number = 5
if (number < 0) {
    console.log('Error');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(fact);   //Output: 120
}


//   function factorialize(num) { 
//     factorialize(5);
//     if (num === 0 || num === 1) 
//       return 1;
//     for (var i = num - 1; i >= 1; i--) {
//       num *= i;
//     }
//     return num;
// }



//========================Check given number is a palindrome number===================//

//logic

//A number is said to be a Palindrome if the reverse of its digit is number itself. 
//For eg. 121, 959, 1441, etc.

const isPalindrome = (num) => {
    // Finding the appropriate factor to extract the first digit
    let factor = 1;
    while (num / factor >= 10){
       factor *= 10;
    }
    while (num) {
       let first = Math.floor(num / factor);
       let last = num % 10;
       // If first and last digit not same return false
       if (first != last){
          return false;
       }
       // Removing the first and last digit from number
       num = Math.floor((num % factor) / 10);
       // Reducing factor by a factor of 2 as 2 digits are dropped
       factor = factor / 100;
    }
    return true;
 };
 console.log(isPalindrome(123241));   //Output:-False
console.log(isPalindrome(12321));      //Output:-True
console.log(isPalindrome(145232541));   //Output:-True
console.log(isPalindrome(1231));        //Output:-False


//========================Check given number is a armstrong number===================//
//logic

//An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. 
//For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.


let sum = 0;

//const prompt = require("prompt-sync")();
const num = prompt('Enter a three-digit positive integer: ');

// create a temporary variable
let temp = num;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == num) {
    console.log(`${num} is an Armstrong number`);
}
else {
    console.log(`${num} is not an Armstrong number.`);
}

//========================program that checks if the number is positive, negative or zero===================//
 
// input from the user
const number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}

// check if number is 0
else if (number == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
     console.log("The number is negative");
}


//========================JavaScript program to swap two variables===================//

//take input from the users
const prompt = require("prompt-sync")();
let a = prompt('Enter the first variable: ');  
let b = prompt('Enter the second variable: ');

//create a temporary variable
let temp1;

//swap variables
temp1 = a;
a = b;
b = temp1;

console.log(`The value of a after swapping: ${a}`);  
console.log(`The value of b after swapping: ${b}`);

//OutPut
// Enter the first variable: 4
// Enter the second variable: 2
// The value of a after swapping: 2
// The value of b after swapping: 4
  
//Note:-
//prompt() is a method of the Global window object found in browsers. It's not part of the JavaScript language. 
//If you don't run your code in a browser or an environment that supports the Browser Object Model, 
//window won't be there and if window isn't there, neither will prompt() be. Run your code in a browser.


//========================program to find the largest among three numbers===================//


// take input from the user
//const prompt = require("prompt-sync")();
const num1 = parseFloat(prompt("Enter first number: "));

//parseFloat() is used to convert numeric string to number. If the string is a floating number,
// parseFloat() converts the string into floating point number.

const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
let largest;

// check the condition
if(num1 >= num2 && num1 >= num3) {
    //The numbers are compared with one another using greater than or equal to >= operator.
    //logical AND && is also used to check two conditions.
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// display the result
console.log("The largest number is " + largest);

///Another way

//take input from the user
const n1 = parseFloat(prompt("Enter first number: "));
const n2 = parseFloat(prompt("Enter second number: "));
const n3 = parseFloat(prompt("Enter third number: "));

//const largest = Math.max(n1, n2, n3);

// display the result
console.log("The largest number is " + largest);

//Note:-
// Math.max() returns the largest number among the provided numbers.
// You can use Math.min() function to find the smallest among the numbers.