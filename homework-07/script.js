////////////////////////////////////////////// TASK 1
let nNums = '';

for (let i = 20; i <= 30; i++) {
    nNums += i;
    if (i < 30) {
        nNums += `, ${i}.5, `;
    }
}
alert(nNums);

////////////////////////////////////////////// TASK 2
let dollar = '';

for (let i = 10; i <= 100; i++) {
    if (i % 10 === 0) {
        dollar += `\n27 ₴ * ${i} $ = ${27 * i} ₴`;
    }
}
alert(dollar);

////////////////////////////////////////////// TASK 3
let square = '';
let numN = 481;

for (let i = 1; i <= 100; i++) {
    if (i * i <= numN) {
        square += `\n${i} * ${i} = ${i * i} < ${numN}`;
    }
}
alert(square);

////////////////////////////////////////////// TASK 4
let divNum = '';

for (let i = 1; i <= 50; i++) {
    let isSimple = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isSimple = false;
        }
    }

    if (isSimple) {
        divNum += `${i}, `;
    }
}
alert(divNum);

////////////////////////////////////////////// TASK 5
let userNumber = prompt(`Enter a number:`);

for (userNumber = userNumber; userNumber > 1;) {
    if (userNumber % 3 !== 0) {
        alert(`You cannot get this number by raising 3 to a power`);
        break;
    }
    userNumber /= 3;
}
if (userNumber === 1) {
    alert(`You can get this number by raising 3 to a power`);
}
