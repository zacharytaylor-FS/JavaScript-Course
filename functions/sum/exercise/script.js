/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(0, 100));

function add(num1, num2) {
	return num1 + num2;
}

const sub = (num1, num2) => num1 - num2;
//Subtract function

function div(num1, num2) {
	return num1 + num2 / 100;
}

const mul = (num1, num2) => num1 * num2;
//Multiply function here

function calculateFoodTotal(food, tip) {
	const tipPercentage = tip / 100;
	const tipAmount = food * tipPercentage;
	const total = sum(food, tipAmount);
	return total;
}

console.log("hello from the SUM exercise");
/* 
TODO: create a function that console logs the result of any of the above operations.
*/

document.getElementById("btn").addEventListener("click", showMath);

function showMath(e) {
	console.log("Here are the results for the math equations.");
	console.log(`+   ${add(120, 230)}`);
	console.log(`-   ${sub(Math.random() * 250, 5)}`);
	console.log(`/   ${div(50, 120)}`);
	console.log(`*   ${mul(100, 3)}`);
}
