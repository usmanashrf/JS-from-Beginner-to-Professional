/*
we will cover the following topics:
• Arrays and their properties
• Array methods
• Multidimensional arrays
• Objects in JavaScript
• Working with objects and arrays
 */

//=> Arrays:
//Arrays are lists of values. These values can be of all data types and one array can 
//even contain different data types.

//creating array
arr1 = new Array("purple", "green", "yellow");
arr2 = ["black", "orange", "pink"];

//console.log(arr1,arr2)


arr3 = new Array(10);
arr4 = [10];
console.log(arr3);
console.log(arr4);
/*They do not both create an array with 
one value, 10. The second one, arr4, does. The first option creates an array with 10 
undefined values. */

let arr = ["hi there", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);


/*
The last array fun fact we will go over here is what happens if you define an array 
using const. You can change the values of a constant array, but you cannot change 
the array itself. Here is a piece of code to demonstrate: */

const arr31 = ["hi there"];
arr31[0] = "new value";
console.log(arr31[0]);

//arr31 = ["nope, now you are overwriting the array"];
//above line throw error
//Assignment to constant variable

cars = [ 'Tesla', 'Renault', 'Volkswagen' ]
cars[-1] = "Fiat"
cars[-9] = "mn"
console.log(cars)
//it'll print
//[ 'Tesla', 'Renault', 'Volkswagen', '-1': 'Fiat', '-9': 'mn' ]


//Built-in length property:

colors = ["black", "orange", "pink"]
booleans = [true, false, false, true];
emptyArray = [];
console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of empty array:", emptyArray.length);

lastElement = colors[colors.length - 1]
console.log(lastElement); //print last element of list



numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length); //it'll print 6
console.log(numbers);// numbers [ 12, 24, 36, <2 empty items>, 48 ]
//Because we added an element, 48, at index 5, it also created 2 elements at index 
//positions 3 and 4 containing empty values.



//=> Array methods:

//Adding and replacing elements

favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine"); //add at the end of list
console.log(favoriteFruits)

//The value gets added to the end of the array. The push method returns the new 
//length of the array, four in this case. You can store this length in a variable like this:

let lengthOfFavoriteFruits = favoriteFruits.push("lime");
console.log(lengthOfFavoriteFruits) //print 5

/*
This was easy right? But what if you would want to add elements at a certain index? 
You can use the splice() method.
 */

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);
/*
As you can see, the square and trapezoid get inserted on index 2. The rest of the 
array is shifting to the right. The splice() method takes multiple parameters. The 
first parameter, 2 in our case, is the index of the array on which we want to start 
inserting. The second parameter, 0 in our case, is the number of elements we want to 
delete starting at our previously defined starting index. The parameters after these 
first two, square and trapezoid in our case, are whatever should be inserted starting 
at the start index.
 */
arrOfShapes.splice(2, 2, "square", "trapezoid");
console.log(arrOfShapes);
//it'll replace rectangle and pentagon with square, trapezoid

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
//console.log(arr7);

//This concat() method can do even more! We can use it to add values as well. We can 
//add a single value, or we can comma-separate multiple values:

let arr8 = arr7.concat(7, 8, 9);
//console.log(arr8);



//Deleting elements :

arr8.pop(); //remove form end
//console.log(arr8)

//Deleting the first element can be done with shift(). This causes all other indices to 
//be reduced by one:

arr8.shift();
//console.log(arr8)

/*
Remember splice()? This is a very special method because we can also use it to 
delete values. We specify the index from where we want to start deleting, and then 
the number of elements we want to delete
*/
arr8.splice(1, 3);
//it'll print [ 2, 6, 7, 8 ]

delete arr8[0]; // change the value of a certain position of the array to undefined
// it will make array like this [ <1 empty item>, 6, 7, 8 ]


//=> Find value in array

/* find()
This function will be executed on every element in the array until it finds 
a match, and if it does not, then it will return undefined
*/

arr8 = [ 2, 6, 7, 8 ];
let findValue = arr8.find(function(e) { return e === 6});
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2);
//print 6 and undefine

/*you do not only want to find the element, but you want to know what 
position it is on. This can be done with the indexOf() method */

//This method returns the index on which the value is found. If a value occurs in an 
//array more than once, it will return the first occurrence. If the value is not found, 
//it will return -1


arr8 = [ 2, 6, 7, 6,8 ];
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2);


/*
If you want to find the next occurrence of the specified number, you can add a 
second argument to indexOf(), specifying from which position it should start 
searching:
*/
arr8 = [ 2, 6, 7, 8 ];
let findIndex3 = arr8.indexOf(6, 2);
console.log(findIndex3)
//In this case, the value of findIndex3 will be -1, because 6 cannot be found starting 
//from index 2.


//The last occurrence can also be found. This is done with the lastIndexOf() method:
let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
console.log(lastDog)
//it will print 4

//=> Sorting
// It sorts numbers from small to high and strings A-Z.
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
console.log(names)

//=> Reversing
//note it'll not do in decending order it's just print arrays value from backward
names.reverse();
console.log(names)


//=> Multidimensional arrays

let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrOfArrays = [someValues1, someValues2, someValues3];
console.log(arrOfArrays)
//this will be 2D array
let value1 = arrOfArrays[0][1];
console.log(value1)


// => Objects in JavaScript:

let arrr = [0, 1, 2];
console.log(typeof arrr);
//print Object


//Object
let dog = { dogName: "JavaScript", 
 weight: 2.4, 
 color: "brown", 
 breed: "chihuahua", 
 age: 3, 
 burglarBiter: true
 };

//  We can access the properties of this object in a very similar way as we would 
//  with the array. This time, we are not using the index number, but the name of the 
//  property, to get the value:
 let dogColor1 = dog["color"];
 let dogColor2 = dog.color;

 //Updating objects

 dog["color"] = "blue";
dog.weight = 2.3;

let variable = "age";
console.log(dog[variable]);


//=> Objects in objects

let company = { companyName: "Healthy Candy",
 activity: "food manufacturing",
 address: {
 street: "2nd street",
 number: "123",
 zipcode: "33116",
 city: "Miami",
 state: "Florida"
 },
 yearOfEstablishment: 2021
 };


//  To access or modify one of the properties of the address here, we can use two 
// approaches:
company.address.zipcode = "33117";
company["address"]["number"] = "100";

// array in object
company = { companyName: "Healthy Candy",
 activities: ["food manufacturing", 
"improving kids' health", "manufacturing toys"],
 address: {
 street: "2nd street",
 number: "123",
 zipcode: "33116",
 city: "Miami",
 state: "Florida"
 },
 yearOfEstablishment: 2021
 };

 let activity = company.activities[1];


 //Objects in arrays

 let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
    },
    {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
    }];

    let streetName = addresses[0].street;


    const myArr3 = [3,6,8,9,3,55,553,434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]);
//undefine

