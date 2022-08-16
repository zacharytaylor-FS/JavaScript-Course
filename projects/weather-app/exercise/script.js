/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

//* DIVS I NEED
//* city-name
//* weather-type
//* temp
//* min-temp
//* max-temp

const app = document.getElementById("weather-app");
const temp = document.getElementById("");
const mintemp = document.getElementById("");
const maxtemp = document.getElementById("");
const dateOutput = document.getElementById("");
const timeOutput = document.getElementById("");
// const conditionOutput = document.getElementById("");
const cityOutput = document.getElementById("");
const cloudOutput = document.getElementById("");
const windOutput = document.getElementById("");
const humidityOutput = document.getElementById("");
let theLocation = document.getElementById("");

const options = {
	method: "GET",
	headers: {
		"Transfer-Encoding": "chunked",
		Connection: "keep-alive",
		Vary: "Accept-Encoding",
		"CDN-PullZone": "93447",
		"CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
		"CDN-RequestCountryCode": "GB",
		"CDN-ProxyVer": "1.02",
		"CDN-RequestPullSuccess": "True",
		"CDN-RequestPullCode": "200",
		"CDN-CachedAt": "08/15/2022 19:02:31",
		"CDN-EdgeStorageId": "946",
		"CDN-Status": "200",
		"CDN-RequestId": "25a1b59a02f2eeee4e84cdcc3116045f",
		"CDN-Cache": "MISS",
		"Cache-Control": "public, max-age=180",
		"Content-Type": "application/json",
		Date: "Mon, 15 Aug 2022 19:02:31 GMT",
		Server: "BunnyCDN-FR-946",
	},
};
// API_KEY for maps api
let API_KEY = "222e540a91b644dd80c183116221508";

const searchButton = document.getElementById("searchButton");

let /**
	 * Retrieve weather data from openweathermap
	 * HINT: Use fetch()
	 * HINT: URL should look like this:
	 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
	 */

	// getGeoLocation = () => {
	// 	const status = document.getElementById("status");
	// 	const mapLink = document.getElementById("mapLink");

	// 	mapLink.href = "";
	// 	mapLink.textContent = "";
	// 	console.log("button is working");
	// 	function success(position) {
	// 		const latitude = position.coords.latitude;
	// 		const longitude = position.coords.longitude;

	// 		status.textContent = "";
	// 		mapLink.href = `https:www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
	// 		mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
	// 	}

	// 	function error() {
	// 		status.textContent = "Unable to retrieve your location";
	// 	}

	// 	if (!navigator.geolocation) {
	// 		status.textContent = "GeoLocation is not supported by your browser";
	// 	} else {
	// 		status.textContent = "Locating...";
	// 		navigator.geolocation.getCurrentPosition(success, error);
	// 	}
	// };
	getWeatherData = async (city) => {
		const URL = "http://api.weatherapi.com/v1/forecast";

		const FULL_URL = `${URL}.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`;

		//HINT: Use template literals to create a url with input and an API key
		const weatherPromise = fetch(FULL_URL, options);
		const data = await weatherPromise;
		return await data.json();

		//CODE GOES HERE
	};

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
	const city = document.getElementById("userInput").value;

	let userInfo = document.getElementById("userLocation");
	let weatherImg = document.getElementById("weatherIcon");
	let wind = document.getElementById("wind");
	let conditionOuput = document.getElementById("conditionOuput");
	let localTemp = document.getElementById("temp");

	getWeatherData(city)
		.then((data) => {
			// showWeatherData(data);
			console.log(data);
			userInfo.innerHTML = `${data.location.name}, ${data.location.region} `;
			conditionOuput.innerHTML = `${data.current.condition.text}`;
			weatherImg.src = `${data.current.condition.icon}`;
			localTemp.innerHTML = `${data.current.temp_f} °`;
			wind.innerHTML = `Low Temp: ${data.forecast}`;
		})
		.catch((error) => {
			console.log(error);
			console.log("Something Happen");
		});

	// CODE GOES HERE
};

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
	//CODE GOES HERE
};
