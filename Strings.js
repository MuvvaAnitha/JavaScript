let day = ' Monday '
console.log(day.length)

let subDay=day.slice(0,3)
console.log(subDay)
console.log(day[1]) //0

// //Mon Day
let splitday= day.split("n")
console.log(splitday[1].length)
console.log(splitday[1].trim().length)

let date ='23'
let nextDate ='27'
let diff=parseInt(nextDate) - parseInt(date)
console.log(diff)
diff.toString()

let newQuote=day+ "is funday"
console.log(newQuote)
var val=newQuote.indexOf("day",5)
console.log(val)

//tuesday is funday
var value=newQuote.indexOf("day")
while(value!== -1)
{
    count++
    value =newQuote.indexOf("day",val+1)
}
console.log(count)

//String Length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

//String slice()
let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(7, 13);


//Replacing String Content
let text2 = "Please visit hyderabad";
let newText = text.replace("hyderabad", "india");

//The replace() method does not change the string it is called on.

//The replace() method returns a new string.

//The replace() method replaces only the first match

//Converting to Upper and Lower Case
let text3 = "Hello World!";
let text4 = text1.toUpperCase();

let text5 = "Hello World!";       // String
let text6 = text1.toLowerCase();  // text2 is text1 converted to lower

//String concat()
let text7 = "Hello";
let text8 = "World";
let text9 = text1.concat(" ", text2);

text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");

// String trim()
let text10 = "      Hello World!      ";
let text11 = text1.trim();

//String trimStart()
let text12 = "     Hello World!     ";
let text13= text1.trimStart();

//String trimEnd()
let text14 = "     Hello World!     ";
let text15= text1.trimEnd();

//String split()
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe

//String Search
//String indexOf()
let str1 = "Please locate where 'locate' occurs!";
str.indexOf("locate");

//String lastIndexOf()
var value = "Please locate where 'locate' occurs!";
text.lastIndexOf("locate");

//String search()
let str = "Please locate where 'locate' occurs!";
str.search("locate");


