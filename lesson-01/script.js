'use strict' // Rules for reading JavaScript

// console.log('Start');
// var errorStatent;  // error statement
// console.log('End');


// JavaScript === ECMAScript 5
// var age; // Declaration 
// var userName = 'Bob'; // Assignment 
// userName = 'John'; // Reassingment 

// ECMAScript (6) 2015 
// let weight; // Declaration 
// let occupation = 'teacher'; // Assignment 
// occupation = 'programmer'; // Reassingment 

// const length; // Error
// const heigh = '10px'; // Declaration 
// const obj = {}; // Assignment
// // obj[]; // Reassingment 
// obj.name = 'Body';

// console.log('Top is: ', laptop);
// var laptop = 10; // undefined
// var laptop = 10;
// console.log('Top is after: ', laptop); // === var - HUJNIA I NE ISPOLZUJUT

// hoisting

// var boc;
// boc = 10;
// console.log(boc, boc);

//  Types 

// let userName = 'Bob';
// userName = 20;
// userName = true;

// Primitive types
// String 
const BASE_API = 'https://...';
const emptyString = '';
const doubleQuotes = "";
const templateString = `${BASE_API}google.com${userId}`;
const multiLine = `
hello`;

// Boolean
const isLoading = true;
const canUse = false;
const isAllowed = false;

// Number 
const age = 100; // integer
const PI = 3.14; // float 
const notANumber = 'Bob' * 3; // NaN
const divideByZero = 0 / 0 // NaN

// Undefined 
let empty; // undefined 

// Null 
let initialState = null; // empty 

// BigInt (ECMAScript 2015+)
const bigInt = 100000000000000000n; // BigInt

// Symbol 
const uniqueToken = Symbol();

// Reference type

// Set, WeakSet, Map, WeakMap


// Object 
const config = {
    base: 'https',
    isAdmin: false
};

const options = config;

const userName = 'Bob';
const bob = userName;

// variable name // value
// userName ------  Bob
// Bob ------  Bob
// config --------  <0xBD83624>
// options --------  <0xBD83624>


// mamory table
// refernce ------- table
// <0xBD83624>
