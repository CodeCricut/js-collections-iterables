// Goal: Create an object that can be iterated using a for..of loop. The object should
// return an infinite sequence of random numbers.

// constructor function allows us to create a blueprint, much like a class
function RandomGenerator(min, max) {
    // we must set the Symbol.iterator property to use a for..of loop
    this[Symbol.iterator] = function() {
        // we can return an iterator object...
        return {
            // ...which should implement next()
            next() {
                // we could put other code here to calculate what is returned. In this case, we always want to return a random number
                return {
                    done: false,
                    value: Math.random() * (max - min) + min
                };
            }
        };
    };
}

const MIN = 2;
const MAX = 10;
for (let rand of new RandomGenerator(MIN, MAX)) {
    if (rand > MAX - MIN / 10) {
        console.log(`Reached end of random generator with value ${rand}`);
        break;
    }
    console.log(rand);
}

// Goal: create a function that iterates a string and prints each char. Do with a for..of loop, then explicitly

let str = "hello";

console.log("Printing each char of 'hello' using a for..of loop ...");
for (let char of str) {
    console.log(char);
}

console.log(
    "Printing each char of 'hello' using the Symbol.iterator property ..."
);

// we must invoke the property to get the iterator object
let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}
