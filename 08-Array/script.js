let length = prompt(`Enter the lenght of array:`);
let array = [];

for (let i = 0; i < length; i++) {
    let element = prompt(`Enter the element of array №${i + 1}:`);
    array.push(element);
}

let output = `${array.join(', ')}`;
alert(`Unsorted array: [${output}]`);
console.log(array);


array.sort();
alert(`Sorted array: [${array}]`);
console.log(array);

array.splice(2, 3);
alert(`Deleted index (2, 3, 4) result: [${array}]`);
console.log(array);