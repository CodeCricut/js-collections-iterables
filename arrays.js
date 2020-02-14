"use strict";

const badArray = new Array(2); // create an empty array with length 2
const badArray2 = new Array(1, 2, 3); // creates [1, 2, 3]

let goodArray = []; // this is how you should create an empty array
let goodArray2 = [1, 2, 3]; // another good array

// demonstrates how to access an array element
function getArrayElement(array, index) {
    return array[index];
}

// demostrates how to modify/add an array element
function modifyArrayElement(array, index, value) {
    return (array[index] = value);
}

// demonstrates how to use an array like a queue
function pushElement(array, element) {
    array.push(element); // returns new length
    return array[array.length - 1];
}

function shiftElement(array) {
    return array.shift(); // returns first element
}

// demonstrates how to use an array like a stack
function popElement(array) {
    return array.pop(); // returns last element
}

// Loops
let arr = ["Apple", "Orange", "Pear"];

// you can use a for loop if you need the index
for (let i = 0; i < arr.length; i++) {
    alert(arr[i]);
}

// use a for...or loop if the index in unneccessary
for (let fruit of fruits) {
    alert(fruit);
}

// you can technically use a for...in loop as arrays are objects, but it is slower and can have unexpected behavior
for (let key in arr) {
    alert(arr[key]); // Apple, Orange, Pear
}

// Multidimensional arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let one = matrix[0][0];
let three = matrix[0][2];
let five = matrix[1][1];
let nine = matrix[2][2];
