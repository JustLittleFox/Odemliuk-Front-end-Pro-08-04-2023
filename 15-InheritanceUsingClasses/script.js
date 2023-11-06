class SuperArray extends Array {
    constructor(...elements) {
        super(...elements);
    }
    sum() {
        let total = 0;
        for (const el of this) {
            if (typeof el !== 'number') {
                throw new TypeError(`${el} is not a number`);
            }
            total += el;
        }
        return total;
    }
}
const names = new SuperArray('Bob', 'Jane');
console.log(names);

const nums = new SuperArray(10, 20, 30, 40, -100, 50);
const total = nums.sum();
console.log(total);
