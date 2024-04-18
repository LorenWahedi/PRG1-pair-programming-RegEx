//Some sample Regular expressions to have a play with

const validWholeNumberRegEx = /^[0-9]+$/;
const validPositiveWholeDecimalNumber = /^(?:\d+|\d*\.\d+)$/;
const validAlphabeticString = /^[A-Za-z]+$/;

// Use the test method to check whether something matches the rules. 
// console.log(validWholeNumberRegEx.test(456))

// Create three functions which check user input for three pieces of data.
// 1. Their name; 2. Their age; 3. Their height. 

function nameChecker(name) {
    return validAlphabeticString.test(name); 
}

function ageChecker(age) {
    return validWholeNumberRegEx.test(age);
}

function heightChecker(height) {
    return validPositiveWholeDecimalNumber.test(height);
}

console.log(nameChecker("Loren"));
console.log(ageChecker("30"));
console.log(heightChecker("5.10"));