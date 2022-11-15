//we'll cover the following topics:
// • Variables
// • Primitive data types
// • Analyzing and modifying data types
// • Operators



//=> variables:
firstname = "Maaike";
x = 2;


//let, var, and const

let nr1 = 12;
var nr2 = 8;
const PI = 3.14159;

//difference b/w var and let
// var has global scope and let has block scope.

// Remember, a block of code will always start with { and end with }

// const is used for variables that only get a value assigned once

const someConstant = 3; 
//someConstant = 4;
//If you try reassigning a value declared with const, you will get an error
//Uncaught TypeError: Assignment to constant variable.



//=> Primitive data types:
//javaScript has seven primitives:
// String, Number, BigInt, Boolean, Symbol, undefined, and null.

/*
=> 1, String:
There are different 
ways to declare a string:
• Double quotes
• Single quotes
• Backticks: special template strings in which you can use variables directly
*/

let singleString = 'Hi there!';
let doubleString = "How are you?";

/*
The main difference between single quotes and double quotes is that you can use 
single quotes as literal characters in double-quoted strings, and vice versa


In a string using backticks, you can point to variables and the variable's value will be 
substituted into the line. You can see this in the following code snippet
*/

let language = "JavaScript";
let message = `Let's learn ${language}`;
console.log(message);



// => Escape characters:

//the backslash can be used to ensure your interpreter doesn't see the 
// single or double quote marks and end either string too early:


let str = "Hello, what's your name? Is it \"Mike\"?";
console.log(str);
let str2 = 'Hello, what\'s your name? Is it "Mike"?';
console.log(str2);

//above result will be 
//Hello, what's your name? Is it "Mike"?
//Hello, what's your name? Is it "Mike"?


/* 
You can use it to create a line break 
with \n, or to include a backslash character in the text with \\:
 */

let str3 = "New \nline.";
let str4 = "I'm containing a backslash: \\!";
console.log(str3);
console.log(str4);

/* Reult will be
New 
line.
I'm containing a backslash: \!
*/


//2, Number:

/*
For all kind of number javascript use Number datatype
decimals, exponentials, octal, hexadecimal, and binary numbers
*/

let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;
let octNr = 0o10; //decimal version would be 8
let hexNr = 0x3E8; //decimal version would be 1000
let binNr = 0b101; //decimal version would be 5


//3, BigInt:
/*
The limits of the number data type are between 253-1 and -(253-1). In case you were to 
need a bigger (or smaller) number, BigInt comes into play. A BigInt data type can be 
recognized by the postfix n:
*/

let bigNr = 90071992547409920n;
//Let's see what happens when we start to do some calculations between our 
//previously made integer Number, intNr, and BigInt, bigNr

//let result = bigNr + intNr;

//it's give us error:
//TypeError: Cannot mix BigInt and other types, use explicit conversions

//4, Boolean:

let bool1 = false;
let bool2 = true;


//5, Symbol:
//Symbol is a brand new data type introduced in ES6

/*
Symbol can be used when it is 
important that variables are not equal, even though their value and type are the same 
(in this case, they would both be of the symbol type) */



let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
console.log("These two Symbols are the same:", sym1 === sym2);
//return: 
//These two Symbols are the same: false


//6, Undefined:

//JavaScript is a very special language. It has a special data type for a variable that has 
//not been assigned a value. And this data type is undefined
let unassigned;
console.log(unassigned);
//output will be:
//Undefined

let terribleThingToDo = undefined; //this is not a good practice

console.log(unassigned === terribleThingToDo);

//7. null:
let unknown = null;

console.log(typeof unknown);

/*In the output you can see that 
typeof null returns object, while in fact, null truly is a primitive and not an object. 
This is a bug that has been there since forever and now cannot be removed due to 
backward compatibility problems. */


//=> Converting data types:

let nr11 = 2;
let nr12 = "2";
console.log(nr11 * nr12);
//JavaScript does not just throw an error (as many languages would), but first tries to 
//convert the string value to a number. pront 4 in console

//But this is dangerous! Guess what this code snippet does:
let nr13 = 2;
let nr14 = "2";
console.log(nr13 + nr14);
// it'll print 22



// There are three conversion methods: String(), Number(), and Boolean().

let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);
let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr);
let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);




let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);
let strToNr1 = "";
strToNr1 = Number(strToNr1);
console.log("empty string", strToNr1, typeof strToNr1);
/* print in console
null 0 number
empty string 0 number */



let strToNr2 = "hello";
strToNr2 = Number(strToNr2);
console.log(strToNr2, typeof strToNr2);
//print in console
//NaN number
/*Here, we can see that anything that can't be interpreted as a number by simply 
removing the quotes will evaluate as NaN (not a number).
*/


let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2);
let strToBool1 = "";
strToBool1 = Boolean(strToBool1);
console.log(strToBool1, typeof strToBool1);
//result will be this
/*true boolean
false boolean */
/*This output shows that any string will return true when converted to a Boolean, 
even the string "false"! Only an empty string, null, and undefined will lead to a 
Boolean value of false.  */

//=> Operators
/*
1. Addition
2. Subtraction
3.Multiplication
4. division
 */


let nr21 = 20;
let nr22 = 4;
let str1 = "Hi";
let nr3 = 3;
let result1 = nr21 - nr22;
let result2 = str1 - nr3; // print NaN
console.log(result1, result2);
//out out will be: 16 NaN
console.log(str1 * nr3); //print NaN
console.log(str1 / nr3); //print NaN


//=> Exponentiation: (power)
let m=2;
let n = 3
console.log(m ** n);


//=> Modulus

let nr41 = 10;
let nr42 = 3;
let result11 = nr41 % nr42;
console.log(`${nr41} % ${nr42} = ${result11}`);



//=> Prefix and postfix operators 

/*
(x++) in which case we call 
this the postfix unary operator
 
(++x), which is the prefix 
unary operator. */

let nm = 2;
console.log(nm++);
console.log(nm);
/*
it's print
2
3 
*/

let na = 2;
console.log(++na);
/*
it's print
3 
*/


//what will be the output of this
let nr_1 = 4;
let nr_2 = 5;
let nr_3 = 2;
console.log(nr_1++ + ++nr_2 * nr_3++);

/*
It outputs 16. It will do the multiplication first, according to the basic mathematical 
order of operations. For multiplying, it uses 6 (prefix, so 5 is incremented before 
multiplying) and 2 (postfix, so 2 is only incremented after execution, meaning it 
won't affect our current calculation). This comes down to 12. And then nr1 is a 
postfix operator, so this one will execute after the addition. Therefore, it will add 12 
to 4 and become 16
 */


let a = "world";
let b = `Hello ${a}!`;
console.log(b);


let result = 3 + 4 * 2 / 8; 
console.log(result)
//result = 4
console.log(4 * 8 / 2)






