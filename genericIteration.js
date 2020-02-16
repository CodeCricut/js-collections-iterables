// For maps, we can use .keys(); .values(); and .entries(). We can kind of use these methods for regular objects, too

let myObj = {
    key1: val1,
    key2: val2,
    key3: val3
};

let myKeys = Object.keys(myObj); // [key1, key2, key3]
let myVals = Object.values(myObj); // [val1, val2, val3]
let myEntries = Object.entries(myObj); // [[key1, val1], [key2, val2], [key3, val3]]

// Transforming objects

// if we want to use methods such as map, filter, and others that apply to arrays,
// we must convert to an array then back to an object

let prices = {
    banana: 1,
    orange: 2,
    meat: 4
};

let doublePrices = Object.fromEntries(
    // convert to array, map, and then fromEntries gives back the object
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8
