const sum = (function () {
    let num = 0;
    return n => {
        num += n;
        return num;
    };
})();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

