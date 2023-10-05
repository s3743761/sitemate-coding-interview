const { convertTimeToWords } = require("./index");

describe("Time to words", () => {
	it("Handles midnight", () => {
		const timeInWords = convertTimeToWords("0:00");
		expect(timeInWords).toBe("midnight");
	});

	it("Handles midday", () => {
		const timeInWords = convertTimeToWords("12:00");
		expect(timeInWords).toBe("midday");
	});

	it("Handles two o clock", () => {
		const timeInWords = convertTimeToWords("2:00");
		expect(timeInWords).toBe("two o'clock");
	});

    it("Handles three past two", () => {
		const timeInWords = convertTimeToWords("2:03");
		expect(timeInWords).toBe("three past two");
	});

    it("Handles eleven past two", () => {
		const timeInWords = convertTimeToWords("2:11");
		expect(timeInWords).toBe("eleven past two");
	});

    it("handles quarter past two", () => {
		const timeInWords = convertTimeToWords("2:15");
		expect(timeInWords).toBe("quarter past two");
	});

    it("handles twenty nine past 8", () => {
		const timeInWords = convertTimeToWords("8:29");
		expect(timeInWords).toBe("twenty nine past eight");
	});

    it("handles twenty nine to 9", () => {
		const timeInWords = convertTimeToWords("8:31");
		expect(timeInWords).toBe("twenty nine to nine");
	});


	it("Handles 30 - 8:30", () => {
		const timeInWords = convertTimeToWords("8:30");
		expect(timeInWords).toBe("half past eight");
	});

	it("Handles times after 30 mins - 2:45", () => {
		const timeInWords = convertTimeToWords("2:45");
		expect(timeInWords).toBe("quarter to three");
	});
});
