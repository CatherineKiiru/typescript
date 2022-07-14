"use strict";
// adding the data type 'number' is a typescript feature
// Basic types: Defining primitve types in TypeScript
let id = 5;
let company = 'Google';
let isOpen = true;
let x = 'hello'; // any is a type that can be anything and can return true or false. This means you'll not get an error 
let age;
age = 50; // you can also initialize types in TypeScript*/
// Arrays
let ids = [1, 2, 3, 4, 5];
/* you can set the type of values that ill be in the array
to do this, set the type and add square brackets to let TypeScript
know it's an array */
let arr = [1, 'Google', true];
/* you can also add the any type to the arryay if you want
to add any value or array */
//Tuple
let person = [1, "Google", true,];
/*Tuples contains different data types. You have to add the exact datatype
to the array in the exact order to avoid getting errors */
//Tuple Array. You first define the tuple, then the array
let people;
people = [
    [25, 'catherine'],
    [30, 'hellen'],
];
// Union. A union type describes a value that can be of several types
let world = 20;
world = 'hello', 20;
/* Enumberated types (Enum). This lets us define a set of named
constants (numeric or strings) */
var numbers;
(function (numbers) {
    numbers[numbers["one"] = 0] = "one";
    numbers[numbers["two"] = 1] = "two";
    numbers[numbers["three"] = 2] = "three";
    numbers[numbers["four"] = 3] = "four";
    numbers[numbers["five"] = 4] = "five";
})(numbers || (numbers = {}));
// console.log(numbers.five);
var strings;
(function (strings) {
    strings["one"] = "one";
    strings["two"] = "two";
    strings["three"] = "three";
    strings["four"] = "four";
    strings["five"] = "five";
})(strings || (strings = {}));
console.log(strings.five);
let user = {
    id: 10,
    name: 'catherine'
};
