function checkLeapYear(year) {
    if (typeof year !== 'number' || year <= 0) {
        console.log("Please enter a valid positive year.");
        return;
    }

    
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}

module.exports = checkLeapYear;
