//* Asynchronous Programming

//* ASYNC & AWAIT

//* You order 🍅 tomato soup
//* Meanwhile you continue your convo with a friend
//* RESOLVED - Your server brings you soup 🥣
//* REJECTED - No soup today ❌

//* PROMISE(OBJECT) - represents the eventual completion(or failure) of an asynchronous operation
//* and its resulting value

// const orderSoup = () => console.log("soup is ready");
// // console.log("You start the convo with your 👧");

// //* Start your request
// setTimeout(orderSoup, 5000); //* 2000ms is 1s
// console.log("Still speaking");

const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		isReady = [true, false][Math.floor(Math.random() * 2)];
		isReady ? resolve("🥣 soup is ready") : reject("❌ NO soup today!");
	}, 5000);
});

//* RESOLVEDif waiter brings you soup
//* tip the waiter
//* you pay for soup

//* REJECTED - leave a bad review, no tip
const getSoup = async () => {
	//* null or undefined
	const data = { rating: null, tip: null, pay: null, review: null };

	try {
		const soup = await promise1;
		console.log(soup);
		data.rating = 5;
		data.tip = 0.2;
		data.pay = 10;
		data.review = 5;
		return data;
	} catch (error) {
		console.log(error);
		data.rating = 1;
		data.tip = 0;
		data.pay = 0;
		data.review = 1;
		return data;
	}
};

// ? ONLY way to get VALUE from PROMISE ?
//* console.log(await getSoup()) <---Have to turn into a function
//*                         OR
//* getSoup().then(value) => console.log(value)
getSoup().then((value) => console.log(value));

const sum = async (a, b) => a + b;
console.log(
	sum(1, 2).then((value) => console.log(value)),
	"sum"
);

// console.log(
// 	promise1
// 		.then((success) => console.log({ success }))
// 		.catch((error) => console.log({ error }))
// );

// console.log(
// 	"fetch:",
// 	fetch("https://dog.ceo/api/breeds/image/random") //* PROMISE
// 		.then(
// 			(response) =>
// 				response
// 					.json() //* PROMISE
// 					.then((data) => console.log(data)) //* ACCESS TO ACTUAL DATA
// 		)
// );

/** //!RULES! for async / await
 * *1. You must create a function
 * *2. You must use the keyword async
 * *3. Use the word await(2x)
 */
const getDog = async () => {
	const url = "https://dog.ceo/api/breeds/image/random";
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
};

//getDog();
