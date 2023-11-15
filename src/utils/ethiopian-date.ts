class EthiopianDate extends Date {
    // Constructor
    constructor() {
        super();
    }

    // Method to convert to Ethiopian Date
    toEthiopianDate(): string {
        // Get the Gregorian date
        const day = this.getUTCDate();
        const month = this.getUTCMonth() + 1; // months are 0-indexed in JavaScript Date
        const year = this.getUTCFullYear();

        // Calculate the Ethiopian Year
        let ethiopianYear = year - 8;
        if (month < 9 || (month === 9 && day < 11)) {
            ethiopianYear -= 1; // Adjust for Ethiopian New Year
        }

        // Calculate Ethiopian month and day
        let newYearDay = new Date(year, 8, 11); // September 11 or 12
        if (year % 4 === 3) { // Adjust for leap year
            newYearDay.setDate(newYearDay.getDate() + 1);
        }

        // Calculate the difference in days from the New Year
        const differenceInDays = Math.floor((this.getTime() - newYearDay.getTime()) / (1000 * 3600 * 24));

        // Ethiopian months have 30 days each
        let ethiopianMonth = Math.floor(differenceInDays / 30) + 1;
        let ethiopianDay = (differenceInDays % 30) + 1;

        return `${ethiopianDay}/${ethiopianMonth}/${ethiopianYear}`;
    }
}

// Usage
let currentDate = new EthiopianDate();
console.log(currentDate.toEthiopianDate()); // Output: Ethiopian Date
