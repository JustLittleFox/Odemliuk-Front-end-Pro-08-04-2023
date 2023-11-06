////////////////////////////////////////////// TASK 1
let nNums = '';

for (let a = 10; a <= 20; a++) {
    nNums += a;
    if (a < 20) {
        nNums += ', ';
    }
}
alert(nNums);

////////////////////////////////////////////// TASK 2
let square = '';

for (let b = 10; b <= 20; b++) {
    if (b < 20) {
        square += `${b * b}, `;
    }
}
alert(square);

////////////////////////////////////////////// TASK 3
let subSeven = '';

for (let c = 1; c <= 10; c++) {
    subSeven += `\n7 * ${c} = ${7 * c}`
}
alert(subSeven);

////////////////////////////////////////////// TASK 4
let add = 0;
let messageAdd = '';

for (let d = 1; d <= 15; d++) {
    add += d;
    messageAdd += d;
    if (d <= 14) {
        messageAdd += ` + `;
    }
}
alert(`${messageAdd} = ${add}`);

////////////////////////////////////////////// TASK 5
let sub = 15;
let messageSub = '';

for (let d = 15; d <= 35; d++) {
    sub *= d;
    messageSub += d;
    if (d <= 34) {
        messageSub += ` * `;
    }
}
alert(`${messageSub} = ${sub}`);

////////////////////////////////////////////// TASK 6
let summ = 0;

for (let e = 1; e <= 500; e++) {
    summ += e;
}

let average = summ / 500;

alert(`${summ} / 500 = ${average}`);

////////////////////////////////////////////// TASK 7
let div = 0;
let messageDiv = '';

for (let f = 30; f <= 80; f++) {
    if (f % 2 === 0) {
        div += f;
        messageDiv += f;

    } else if (f <= 79) {
        messageDiv += ' + ';
    }
}
alert(`${messageDiv} = ${div}`);

////////////////////////////////////////////// TASK 8
let divOnThree = '';

for (let g = 100; g <= 200; g++) {
    if (g % 3 === 0) {
        divOnThree += g;
        divOnThree += ', ';
    }
}
alert(divOnThree);

////////////////////////////////////////////// TASK 9, 10, 11
let nNum = 24; /////// YOU CAN CHANGE THIS NUMBER AND SCRIPT WILL BE WORKS GOOD
let nMessage = ' ';
let evenDivisors = 0;
let evenDivisorsAdd = 0;

for (let h = 1; h <= nNum; h++) {
    if (nNum % h === 0) {
        nMessage += h + ', ';

        if (h % 2 === 0) {
            evenDivisors++;
            evenDivisorsAdd += h;
        }
    }
}
alert(`nNum: ${nNum} \nallDivisors: ${nMessage} \nevenDivisors: ${evenDivisors} \nevenDivisorsAdd: ${evenDivisorsAdd}`);

////////////////////////////////////////////// TASK 12
for (let j = 1; j <= 10; j++) {
    for (let k = 1; k <= 10; k++) {
        const resultTable = j * k;
        document.write(`${j} * ${k} = ${resultTable}<br>`);
    }
    document.write(`<br>`);
}