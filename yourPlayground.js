// console.log("Welcome World");

// *Variables(var, const,let)
// !NEVER use var
// let uname = "Peter Pan";
// console.log(uname);

// let sentence = "How are you doing today";

// * user input

/** //*data types (string, numbers)
 * *numbers 👉🏾 1,5,10,100,2.5
 * *strings 👉🏾 'hello', "What is up"
 * *arrays 👉🏾 []
 * *objects 👉🏾 {}
 * *boolean 👉🏾 true/false
 */

/** //* Math Operations
 * *Mutiply *
 * *Divide /
 * *Exponents **
 * *Modulo/Remainder % 5%2 = 1
 * *Add +
 * *Subtract -
 */

/** //* Math.Methods
 * *Floor-Rounds Up
 * *Ceil-Rounds Down
 * *Random- give you a random number-----Math.random()*3___get number between 3
 */

// *Baby weather app (CONDITIONALS)
/** //TODO if rain 'grab your umbrella '
 * *else 'Wear your sunglasses'
 */

// let weather = prompt("How is the weather?");
// if (weather == "rainy") {
// 	console.log("Grab your Umbrella ☔️");
// } else {
// 	console.log("Wear your sunglasses 😎");
// }

// *Functions
// *function is called 'sayMyName'
// * and it has 0 arguments
// *does: it logs out your name to console
function sayMyName() {
	console.log("Leah");
}
// sayMyName();

/**
 * * Function is called 'sayMyName2'
 * * @param uname
 * *does: logs name to console log
 */

function sayMyName2(uname) {
	console.log("uname");
}
//sayMyName2();
function greeting(uname) {
	greet = `hi ${uname}, nice to meet you!`;
	console.log(greet);
}

// greeting("Zac");

// function sum(a, b) {
// 	return a + b;
// }

// num1 = sum(1, 2);
// console.log(num1);

function calculateFoodTotal(food, tip) {
	const tipPercentage = tip / 100;
	const tipAmount = food * tipPercentage;
	const total = sum(food, tipAmount);
	return total;
}

console.log(calculateFoodTotal(300, 20));

// *ES6
// Arrow Functions =>
// Arrow Function w/ explicit return
// const sumArrow = (a, b) => {
// 	return a + b;
// };

// Arrow Function w/ implicit return
// Automatically returns -- NO {}
const sumArrow3 = (a, b) => a + b;

console.log(sumArrow3(10, 50));
