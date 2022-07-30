console.log("Sum solution");
(function () {
	document.getElementById("btn").addEventListener("click", showMath);
	console.log("Random Number");
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	console.log(getRandomInt(0, 100));

	function add(num1, num2) {
		return num1 + num2;
	}

	function clothesTotal(item1, item2) {
		const taxPercentage = div(5, 100);
		const beforeTax = add(item1, item2);
		const totalWithTax = add(beforeTax, taxPercentage);
		return totalWithTax;
	}

	const sub = (num1, num2) => num1 - num2;
	//Subtract function

	function div(num1, num2) {
		return num1 / num2;
	}

	const mul = (num1, num2) => num1 * num2;
	//Multiply function here

	function showMath(e) {
		console.log("Here are the results for the math equations.");
		console.log(
			`+ Using a function where it takes two arguments 120 & 230 :  ${add(
				120,
				230
			)}`
		);
		console.log(
			`- Take a random number from getRandomInt and subtract 5:  ${parseInt(
				sub(Math.random() * 250, 5)
			)}`
		);
		console.log(
			`/ Taking two arguments 50 / 120 :  ${Math.ceil(div(50, 120))}`
		);
		console.log(`* Mutiply two numbers using 100 + 3 :  ${mul(100, 3)}`);
		console.log(`Your total for 2 items plus tax : ${clothesTotal(20, 12.99)}`);
	}
})();
