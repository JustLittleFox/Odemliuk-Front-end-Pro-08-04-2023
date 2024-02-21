// string
var str = "Hello, World!";
console.log(str);
// number
var num = 42;
console.log(num);
// boolean
var bool = true;
console.log(bool);
// null
var nul = null;
console.log(nul);
// undefined
var undef = undefined;
console.log(undef);
// object
var obj = { name: "John", age: 30 };
console.log(obj);
// any
var anyVar = "I can be anything";
console.log(anyVar);
// void
var voidVar = undefined;
console.log(voidVar);
// unknown
var unknownVar = "I can be anything";
console.log(unknownVar);
// never
function error(message) {
    throw new Error(message);
}
var person = {
    name: "Biba Boba",
    age: 15,
    hobbies: ["gaming", "reading", "working"]
};
console.log(person);
//Function
var sum = function (x, y) {
    return x + y;
};
console.log(sum(5, 7));
//Enum 
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Monday"] = 0] = "Monday";
    Weekday[Weekday["Tuesday"] = 1] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 2] = "Wednesday";
    Weekday[Weekday["Thursday"] = 3] = "Thursday";
    Weekday[Weekday["Friday"] = 4] = "Friday";
    Weekday[Weekday["Saturday"] = 5] = "Saturday";
    Weekday[Weekday["Sunday"] = 6] = "Sunday";
})(Weekday || (Weekday = {}));
var today = Weekday.Monday;
console.log(today);
console.log(Weekday[today]);
