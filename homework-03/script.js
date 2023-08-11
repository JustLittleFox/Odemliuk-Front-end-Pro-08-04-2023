//////// First task
const userInput1 = prompt('First value:');
const userInput2 = prompt('Second value:');
const userInput3 = prompt('Third value:');

const result = userInput2 + userInput3 + userInput1;

alert('Result:  ' + result + '');
console.log(`${userInput2 + userInput3 + userInput1}`);


/////// Second task
const userNumbers = prompt('Enter a five - digit number:');
const number = userNumbers;

const result2 = userNumbers.split('').join(' ');

alert(`Is it your number? 
` + number + ``);
alert(result2);
console.log(result2);
