var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

var uniqueNumbers = [...new Set(numbers)];
console.log("Unique numbers:", uniqueNumbers);

var largestNumber = Math.max(...uniqueNumbers);
console.log("Largest number:", largestNumber);

