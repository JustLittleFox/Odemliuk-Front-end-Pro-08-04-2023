function cacheComplexCalculations() {
    const cache = new WeakMap();

    return function (object, complexCalculationFunction) {
        if (!cache.has(object)) {
            let result = complexCalculationFunction(object);
            cache.set(object, result);
        }
        return cache.get(object);
    };
}

let complexCalculation = function (obj) {
    return Math.pow(obj.value, 2);
};

let obj = { value: 5 };

let cachedCalculation = cacheComplexCalculations();

let result = cachedCalculation(obj, complexCalculation);

console.log(result);

result = cachedCalculation(obj, complexCalculation);

console.log(result); 