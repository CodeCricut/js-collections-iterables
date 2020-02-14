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
    console.log(arr[i]);
}

// use a for...or loop if the index in unneccessary
for (let fruit of fruits) {
    console.log(fruit);
}

// you can technically use a for...in loop as arrays are objects, but it is slower and can have unexpected behavior
for (let key in arr) {
    console.log(arr[key]); // Apple, Orange, Pear
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

// Copy by reference

// since arrays are objects, they will only be copied by reference
let fruit = ["apples", "bannanas"];
let shoppingCart = fruit; // simply copies the reference
shoppingCart.push("pears");
console.log(fruit.length); // 3

// Array.splice()

// splice can remove elements from an array
function removeElementsFromIndex(array, i, n) {
    let removed = array.splice(i, n); // from index i remove n elements;
    return array;
}

// splice can remove elements then replace them
function removeAndReplaceElements(array, i, n, ...elements) {
    array.splice(i, n, ...elements);
    return array;
}

// splice can remove elements from an array and return them
function removeAndReturnRemoved(array, i, n) {
    return array.splice(i, n);
}

// Array.slice()

// slice can return a new array between two indexes
function sliceBetween(array, start, end) {
    return array.slice(start, end);
}

// slice can return the rest of the array from a position
function sliceFrom(array, from) {
    return array.slice(from);
}

// slice can be easily used to copy an array
function copyWithSlice(array) {
    return array.slice();
}

// Array.concat()

// concat creates a new array that includes values from another array and appends additional items
function concatArray(array, ...items) {
    return array.concat(items);
}

// array.forEach()

// forEach applies a function to each element
function applyFuncToEachElement(array, func) {
    array.forEach(func);
}

// Searching

// indexOf returns the first occurance of item in array, starting the search at from
function findIndexOf(array, item, from = 0) {
    return array.indexOf(array, item, from);
}

// same, but search from right to left
function findLastIndexOf(array, item, from = 0) {
    return array.lastIndexOf(array, item, from);
}

// find can be used to find the first element that fits a specific condition
function findByCondition(array, func) {
    // array.find((item, index, arr) => { }
    const firstMatch = array.find(func);
    return firstMatch;
}

// filter returns all elements that match a condition
function findAllByCondition(array, func) {
    // array.find((item, index, arr) => { }
    const allMatches = array.filter(func);
    return allMatches;
}

// Transforming

// map performs an operation on each element and returns an array of results
function transformArray(array, func) {
    return array.map(func);
}

// you can split a string into an elements based on a delimiter
function splitByDelimiter(string, delim) {
    return string.split(delim);
}

// you can join an array's elements into a string with a delimiter inbetween each element
function glueWithDelimiter(array, delim) {
    return array.join(delim);
}
