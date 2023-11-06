////////////////////////////////////////////// TASK 1
function calculateAverage(arr) {
    filteredNumbers = arr.filter((n) => typeof n === 'number');
    sum = filteredNumbers.reduce((sum, n) => sum + n, 0);
    return sum / filteredNumbers.length;
}
const arr = [5, 'a', 10, true];
const average = calculateAverage(arr);
alert(`average num elements: ${average}`);

////////////////////////////////////////////// TASK 2
function doMath(x, znak, y) {
    x = parseFloat(x);
    y = parseFloat(y);

    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        case '^':
            return Math.pow(x, y);
    }
}
const x = prompt(`enter a first number:`);
const znak = prompt(`what do you want to do: (+, -, *, /, %, ^):`);
const y = prompt('enter a second number:');
const result = doMath(x, znak, y);
alert(`result: ${result}`);

////////////////////////////////////////////// TASK 3
function fill2DArray(rows, cols) {
    const result = [];
    for (let i = 0; i < rows; i++) {
        const insideArray = [];
        for (let j = 0; j < cols; j++) {
            const value = prompt(`enter value for element (r: ${i}, c: ${j}):`);
            insideArray.push(value);
        }
        result.push(insideArray);
    }
    return result;
}
const rows = prompt('enter number of rows:');
const cols = prompt('enter number of columns:');
const twoDArray = fill2DArray(parseInt(rows), parseInt(cols));
console.log(twoDArray);

////////////////////////////////////////////// TASK 4
function removeChars(inputString, charsToRemove) {
    const charSet = new Set(charsToRemove);
    const result = inputString.split('').filter(char => !charSet.has(char)).join('');
    return result;
}

const inputString = prompt(`enter a string:`);
const charsToRemove = prompt(`enter a sumbols to del (without spasebar):`);
const resultString = removeChars(inputString, charsToRemove);
console.log('string after delete symbols:', resultString);