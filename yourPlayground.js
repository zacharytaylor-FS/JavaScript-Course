// *Variables(var, const,let)
// *NEVER use var
// let uname = "Peter Pan";
// console.log(uname);

// let sentence = "How are you doing today";

// * user input

// /** //*data types (string, numbers)
//  * *numbers 👉🏾 1,5,10,100,2.5
//  * *strings 👉🏾 'hello', "What is up"
//  * *arrays 👉🏾 []
//  * *objects 👉🏾 {}
//  * *boolean 👉🏾 true/false
//  */

// /** //* Math Operations
//  * *Mutiply *
//  * *Divide /
//  * *Exponents **
//  * *Modulo/Remainder % 5%2 = 1
//  * *Add +
//  * *Subtract -
//  */

// /** //* Math.Methods
//  * *Floor-Rounds Up
//  * *Ceil-Rounds Down
//  * *Random- give you a random number-----Math.random()*3___get number between 3
//  */

// // *Baby weather app (CONDITIONALS)
// /** //TODO if rain 'grab your umbrella '
//  * *else 'Wear your sunglasses'
//  */

// // let weather = prompt("How is the weather?");
// // if (weather == "rainy") {
// // 	console.log("Grab your Umbrella ☔️");
// // } else {
// // 	console.log("Wear your sunglasses 😎");
// // }

// // *Functions
// // *function is called 'sayMyName'
// // * and it has 0 arguments
// // *does: it logs out your name to console
// function sayMyName() {
// 	// console.log("Leah");
// }
// // sayMyName();

// /**
//  * * Function is called 'sayMyName2'
//  * * @param uname
//  * *does: logs name to console log
//  */

// function sayMyName2(uname) {
// 	// console.log("uname");
// }
// //sayMyName2();
// function greeting(uname) {
// 	greet = `hi ${uname}, nice to meet you!`;
// 	// console.log(greet);
// }

// // greeting("Zac");

// // function sum(a, b) {
// // 	return a + b;
// // }

// // num1 = sum(1, 2);
// // console.log(num1);

// function calculateFoodTotal(food, tip) {
// 	const tipPercentage = tip / 100;
// 	const tipAmount = food * tipPercentage;
// 	const total = sum(food, tipAmount);
// 	return total;
// }

// // console.log(calculateFoodTotal(300, 20));

// // *ES6
// // Arrow Functions =>
// // Arrow Function w/ explicit return
// const sumArrow4 = (a, b) => {
// 	return a + b;
// };

// // Arrow Function w/ implicit return
// // Automatically returns -- NO {}
// const sumArrow3 = (a, b) => a + b;

// // console.log(sumArrow3(10, 50));

// *Arrays
////  const groceries = ["bananna", "apple", "blueberry", "pear"];
//console.log(groceries);

// *Grab the 2nd index
//console.log(groceries[2]);

// *Array Methods (slice, push, indexOf, length)
////groceries.push("cookie", "orange");
// //console.log(groceries);

// *Array Slice
// *Start from 0 INCLUSIVE and UP to 6 [0,1,2,3,4,5]
//ToDo   console.log(groceries.slice(0, 6));

//*Start from 2 UP to #
//ToDo   console.log(groceries.slice(1, 4));

// * Array indexOf
//* Gives you the index value of the array
// TODO   console.log(groceries.indexOf("apple"));

// * Array length
// * Show you number of items in an array
//console.log(groceries.length);

// * OBJECTS
// *Property-- One of the key:value pairs
// const person = {
// 	// * <---Object
// 	name: "Leonardo",
// 	shirt: "White",
// };

// *dot notation
// console.log(person.name); // .notation
// console.log(person["name"]); // [""]notation

//* bracket notation
// console.log(person.name);
// console.log(person.shirt);

// person.phone = "1-222-234-4444";
// console.log(person["phone"]);

// console.log(person);

// const person2 = {
// 	name: "Zac",
// 	shirt: "White",
// };

// console.log(person2["shirt"]);

// * Has 2 Arguments
// *
// function welcomeMsg(name, shirt) {
// 	return `Welcome ${name}, I like your ${shirt} shirt!!`;
// }

// *ES6--ARROW FUNCTIONS=>(2 Arguments)
//*OBJECT
//*Template Literals``
// * METHODS-- a property containing a function--Math.floor()
const introducer = (name, shirt) => {
	const person = {
		name: name,
		shirt: shirt,
		assets: 100000,
		liability: 3000,
		// !networth:(assets-liability),-- will NOT work since EVERYTHING is happening at the same time
		//TODO you can create functions within OBJECTS
		networth: function () {
			//*METHOD
			return this.assets - this.liability;
		},
	};

	const intro = `Hi, my name is ${person.name} and the color of my shirt is ${
		person.shirt
	} and my networth is $ ${person.networth()}`; //* call is by using--property.METHOD()

	return intro;
};

console.log(introducer("zac", "white"));

//*FOR LOOPS
//?Print All Data
const fruits = [
	"bananna",
	"apple",
	"blueberry",
	"pear",
	"bananna",
	"apple",
	"blueberry",
	"pear",
	"bananna",
	"apple",
	"blueberry",
	"pear",
];

// ? (let i=0;) <------INDEX
// ? (i < fruits.length;) <------CONDITION for the loop to run 0 for ALL fruits
// ? (i++); <------Adds 1 to i each time it runs
// for (let i = 0; i < fruits.length; i++) {
// 	console.log(fruits[i]); //*<----(i,array.length;i++),,appends number before value
// }

// *fruits <------is the ARRAY
// *fruit <-------When looping it changes with the index[] until it has printed the WHOLE ARRAY
// for (const fruit of fruits) {
// 	console.log(fruit.length);
// }

const numbers = [1, 2, 3, 4, 5, 6];

// *sum up all numbers in ARRAY

// for (let i = 0; i < numbers.length; i++) {
// 	console.log(numbers[i]);
// }

//*Function for doubling numbers in an ARRAY
const double = () => {
	let result = [];
	for (const number of numbers) {
		// console.log(number * 2); //*times the number in the ARRAY by 2
		result.push(number * 2); //*Get a NEW ARRAY an print to console with result
	}
	return result;
};
console.log(double([1, 2, 3, 4, 5, 6, 7])); //*<----Make sure to put outside on LOOP so it doesnt run again
