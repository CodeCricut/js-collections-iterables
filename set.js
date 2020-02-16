// A Set is a special type collection where each value may occur only once.

// create empty set
let emptySet = new Set();

// create set from array
let setFromArray = new Set([1, 2, 3, 4, 4, 4, 5]); // 1, 2, 3, 4, 5

// add/delete values
emptySet.add("val1");
emptySet.delete("val1");

// unique values
emptySet.add("unique val");
emptySet.add("unique val"); // won't affect set

// iteration
for (let val of setFromArray) console.log(val);
// returns values, for compatibility
for (let value of setFromArray.keyes()) console.log(val);
for (let value of setFromArray.values()) console.log(val);
// returns [value, value] for compatibility
for (let value of setFromArray.entries()) console.log(val);

setFromArray.forEach((value, valueAGAIN, set) =>
    console.log(
        "The second value is repeated for compatibilty with Maps. You can simply ignore it and name it _ (underscore)"
    )
);
