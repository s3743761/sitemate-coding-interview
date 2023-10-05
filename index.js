// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
	// TODO: real code goes here!
	if (time === "0:00") {
		return "midnight";
	}
	if (time === "12:00") {
		return "midday";
	}

	let hourToString = {
		1: "one",
		2: "two",
		3: "three",
		4: "four",
		5: "five",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine",
		10: "ten",
		11: "eleven",
		12: "tweleve",
		29: "twenty nine",
	};

	let times_split = time.split(":");
	let parsedHour = parseInt(times_split[1]);
	if (times_split[1] === "30") {
		return `half past ${hourToString[times_split[0]]}`;
	} else if (times_split[1] === "45") {
		let incrementHour = parseInt(times_split[0]) + 1;
		return `quarter to ${hourToString[incrementHour]}`;
	} else if (times_split[1] === "15") {
		return `quarter past ${hourToString[times_split[0]]}`;
	} else if (times_split[1] === "00") {
		return `${hourToString[times_split[0]]} o'clock`;
	} else if (times_split[1] < "30") {
		return `${hourToString[parsedHour]} past ${
			hourToString[times_split[0]]
		}`;
	} else {
		let remainingMinutes = 60 - parseInt(times_split[1]);
		let incrementHour = parseInt(times_split[0]) + 1;
		return `${hourToString[remainingMinutes]} to ${hourToString[incrementHour]}`;
	}
}

module.exports = { convertTimeToWords };
