//* Fetch data from api
//* https://dog.ceo/api/breeds/image/random <----API URL
//* .then -  acts as a Promises
//* ASYNCHRONOUS programming <---When grabbing DATA from somewhere else it becomes ASYNCHRONOUS

// !stuff you don't have to wait for
console.log("run 1st");

const dogImageDiv = document.getElementById("dogImage");
const dogButton = document.getElementById("dogButton");

// ! stuff you have to wait for
const getNewDog = () => {
	fetch("https://dog.ceo/api/breeds/image/random") //* JavaScript PROMISE -- Return Data Back
		.then((response) => response.json()) //* grab data then turn into JSON
		.then((json) => {
			console.log(json.message);
			dogImageDiv.innerHTML = `<img src='${json.message}' height:300 width:300;>`;
		}); //* console.log JSON
};

dogButton.onclick = () => getNewDog();
