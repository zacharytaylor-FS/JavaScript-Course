// Test you code by forking this repl:
// 👉 https://replit.com/@CleverLance/ConvertHoursToSeconds#solution.js

// https://www.loom.com/share/3de1aa5d007047ef82652530f04600b1

// Write a function that takes a parameter (hours) and converts
// it to seconds

/**
 *
 * * 1 hour = 60 min
 * * 1 minute = 60 seconds
 *
 * *  minute * 60 = seconds
 */

function howManySeconds(hours) {
	let seconds = minutes * 60;
	let minutes = hours * 60;

	// Your function should return an integer
	// of how many seconds are in the hour
	return seconds;
}

//Topics: Variables,functions, Math

console.log(howManySeconds(2));
