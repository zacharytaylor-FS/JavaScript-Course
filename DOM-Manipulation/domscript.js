let redDiv = document.getElementById("redBox");
let blueDiv = document.getElementById("blueBox");
let yellowDiv = document.getElementById("yellowBox");

// redDiv.onclick = () => console.log("It is RED"); //* <-----SHORTER WAY to right 'onclick' functions
// blueDiv.onclick = () => console.log("It is BLUE");
// yellowDiv.onclick = () => console.log("It is Yellow");

const squares = document.querySelectorAll(".colorSquare");
console.log(squares);

//* forEach

const timesClicked = { red: 0, yellow: 0, blue: 0 }; //* <----Object keeping track of how many times a button is clicked

squares.forEach((square) => {
	//* Loop through the squares
	square.onclick = () => {
		//* Event Listener for the button
		timesClicked[square.value] += 1; //* <---Updating the [key.values] and adding 1
		square.innerText = timesClicked[square.value]; //* Changing the innerText
	};
});

function clearScores() {
	timesClicked.red = 0;
	timesClicked.blue = 0;
	timesClicked.yellow = 0;
	squares.forEach((square) => {
		square.innerText = "";
	});
}
const clearGameBtn = document.getElementById("clearGame");
clearGameBtn.onclick = () => clearScores();
