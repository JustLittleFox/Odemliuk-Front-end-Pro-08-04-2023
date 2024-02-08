const processedObjects = new WeakSet();

function trackObjects(obj) {
    if (processedObjects.has(obj)) {
        return true;
    } else {
        processedObjects.add(obj);
        return false;
    }
}

let obj1 = { name: 'Object 1' };
let obj2 = { name: 'Object 2' };

console.log(trackObjects(obj1));
console.log(trackObjects(obj1));
console.log(trackObjects(obj2)); 