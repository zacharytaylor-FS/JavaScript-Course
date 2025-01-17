/**  
*  * 🌟 APP: Tip Calculator

* ToDo These are the 3 functions you must use 👇
* !    =========================================
* ? calculateBill()
* ? increasePeople()
* ? decreasePeople()

* !! These functions are hard coded in the HTML. So, you can't change their names!!

* * These are all the DIV ID's you're gonna need access to 👇
* ! ========================================================
* ? #1 ID 👉 'billTotalInput' = User input for bill total
* ? #2 ID 👉 'tipInput' = User input for tip
* ? #3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
* ? #4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// ToDo---> Get global access to all inputs / divs here (you'll need them later 😘)
// ToDo---> bill input, tip input, number of people div, and per person total div
const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");

// * Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
	//* Getting value from bill Input
	const bill = Number(billInput.value);

	//* Get Tip from user & convert to decimal
	const tipPercentage = Number(tipInput.value) / 100;

	//* Get the Tip Amount
	const tipAmount = bill * tipPercentage;

	//* Get the Total
	const total = tipAmount + bill;

	//* Calculate per person total
	const perPersonTotal = total / numberOfPeople;

	perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
};

const increasePeople = () => {
	numberOfPeople += 1;

	numberOfPeopleDiv.innerText = numberOfPeople;

	calculateBill();
};

// ** Splits the bill between fewer people **
const decreasePeople = () => {
	// guard clause
	// if amount is 1 or less simply return
	// (a.k.a you can't decrease the number of people to 0 or negative!)
	if (numberOfPeople <= 1) {
		return;
	}

	numberOfPeople -= 1;

	numberOfPeopleDiv.innerText = numberOfPeople;

	calculateBill();
};
