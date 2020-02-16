// maps are collections of keyed data types like objects, but allow any key type.

// create a new empty map
let emptyMap = new Map();

// create a map with any iterable of kvp
let initializedMap = new Map(["key1", "val1"], ["key2", "val2"]);

// create a map from the properties of an object
let myObj = { key1: val1 };
let objectIniMap = new Map(Object.entries(myObj));

// add arbitrary key-value pairs
map.set("myKey", "myValue");
map.set(2, 60065);

// although you can set a property like this, you shouldn't as it takes away all the advantages that maps have over reg. objects
map["badKey"] = "bad value";

// retrieve aribtrary values
let myVal = map.get("myKey");
let sixOhFive = map.get(2);

// check for keys
if (map.has("nonExistantValue")) console.log("something went wrong");

// delete kvp
map.delete("myKey");

// clear everything in map
map.clear();

// get size of map
map.size();

map.set("since .set() returns map,", " ")
    .set("you can chain .set() methods", " ")
    .set("super easily", "!");

// iteration
for (let key of emptyMap.keys()) {
    // stuff
}

for (let value of emptyMap.values()) {
    // stuff
}

// same as kvp of emtpyMap
for (let kvp of emptyMap.entries()) {
    // stuff
}

emptyMap.forEach((value, key, map) => {
    /* stuff */
});

// create an object from a map
let objFromMap = Object.fromEntries(emptyMap.entries());
