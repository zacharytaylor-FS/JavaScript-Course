/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

const add = (num1, num2) => {
	return num1 + num2;
};

function sub(num1, num2) {
	return num1 - num2;
}

const div = (num1, num2) => num1 / num2;

const mul = (num1, num2) => num1 * num2;
console.log("hello from the SUM exercise");
/* 
TODO: create a function that console logs the result of any of the above operations.
*/

document.getElementById("btn").addEventListener("click", showMath);

function showMath(e) {
	console.log(add(5, 3));
	console.log(sub(3, 5));
	console.log(div(130, 7));
	console.log(mul(130, 7));
}
