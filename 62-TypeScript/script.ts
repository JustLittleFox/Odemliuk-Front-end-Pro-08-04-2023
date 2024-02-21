// string
let str: string = "Hello, World!";
console.log(str);

// number
let num: number = 42;
console.log(num);

// boolean
let bool: boolean = true;
console.log(bool);

// null
let nul: null = null;
console.log(nul);

// undefined
let undef: undefined = undefined;
console.log(undef);

// object
let obj: object = { name: "John", age: 30 };
console.log(obj);

// any
let anyVar: any = "I can be anything";
console.log(anyVar);

// void
let voidVar: void = undefined;
console.log(voidVar);


// unknown
let unknownVar: unknown = "I can be anything";
console.log(unknownVar);

// never
function error(message: string): never {
    throw new Error(message);
}
// error("This is an error!"); // Uncomment this to see 'ERROR'

//Person
interface Person {
    name: string;
    age: number;
    hobbies: string[];
}

let person: Person = {
    name: "Biba Boba",
    age: 15,
    hobbies: ["gaming", "reading", "working"]
};

console.log(person);

//Function
let sum: (x: number, y: number) => number = (x, y) => {
    return x + y
};

console.log(sum(5, 7));

//Enum
enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

let today: Weekday = Weekday.Monday;

console.log(today);
console.log(Weekday[today]);



