// adding the data type 'number' is a typescript feature

// Basic types: Defining primitve types in TypeScript

let id: number = 5;

let company: string = 'Google';

let isOpen: boolean = true;

let x:any  = 'hello' // any is a type that can be anything and can return true or false. This means you'll not get an error 

let age: number ;
age = 50; // you can also initialize types in TypeScript*/

// Arrays
let ids: number[] = [1,2,3,4,5]; 
/* you can set the type of values that ill be in the array
to do this, set the type and add square brackets to let TypeScript 
know it's an array */

let arr: any [] = [1, 'Google', true]
/* you can also add the any type to the arryay if you want 
to add any value or array */

//Tuple
let person: [number, string, boolean] = [1, "Google", true, ]
/*Tuples contains different data types. You have to add the exact datatype
to the array in the exact order to avoid getting errors */

//Tuple Array. You first define the tuple, then the array
let people: [number, string] [] 

people = [
    [25, 'catherine'],
    [30, 'hellen'],
]

// Union. A union type describes a value that can be of several types
let world: string | number = 20;
world = 'hello', 20

/* Enumberated types (Enum). This lets us define a set of named 
constants (numeric or strings) */
enum numbers {
    one,
    two,
    three,
    four,
    five,
}
// console.log(numbers.five);

enum strings {
    one = 'one',
    two = 'two',
    three = 'three',
    four = 'four',
    five = 'five',
}
console.log(strings.five);

// Objects
type User = {
    id: number;
    name: string;
}
let user: User = {
    id: 10,
    name: 'catherine'
}