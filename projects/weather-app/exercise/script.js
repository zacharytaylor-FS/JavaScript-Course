const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "3d578e8917msh515049c07152fc7p123361jsne7827357076e",
		"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
	},
};

fetch(
	"https://weatherapi-com.p.rapidapi.com/forecast.json?q=Radford&days=3",
	options
)
	.then((response) => response.json())
	.then((data) => console.log(data.location["name"]))
	.catch((err) => console.error(err));
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

// API_KEY for maps api
let API_KEY = "3d578e8917msh515049c07152fc7p123361jsne7827357076e";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
	const URL =
		"https://weatherapi-com.p.rapidapi.com/forecast.json?q=Radford&days=3";
	//HINT: Use template literals to create a url with input and an API key

	//CODE GOES HERE
};

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
	const city = document.getElementById("city-input").value;
	// CODE GOES HERE
};

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
	//CODE GOES HERE
};
