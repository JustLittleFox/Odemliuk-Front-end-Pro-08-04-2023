const action = prompt('What do you whant to do? (add, sub, mult, div)', '');
const firstValue = Number(prompt('Enter a first value'));
const secondValue = Number(prompt('Enter a second value'));
if (action === 'add') {
    alert(`Result: ${firstValue} + ${secondValue} = ${firstValue + secondValue}`);
} else if (action === 'sub') {
    alert(`Result: ${firstValue} - ${secondValue} = ${firstValue - secondValue}`);
} else if (action === 'mult') {
    alert(`Result: ${firstValue} * ${secondValue} = ${firstValue * secondValue}`);
} else if (action === 'div') {
    alert(`Result: ${firstValue} / ${secondValue} = ${firstValue / secondValue}`);
}








