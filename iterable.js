// Using for..of by providing a Symbol.iterator property

let range = {
    from: 1,
    to: 5,
    // we can iterate over an object with a for..of loop by providing the Symbol.iterator prop
    [Symbol.iterator]: function() {
        // it must return a self-contained iterator object
        return {
            // we must store these properties since we can't refence 'this' in next()
            current: this.from,
            last: this.to,

            // next() is called on each iteration by the for..of loop
            // it cannot reference 'this'
            next() {
                // it should return the value as an object {done:.., value :...}
                if (this.current <= this.last)
                    return { done: false, value: this.current++ };
                else return { done: true };
            }
        };
    }
};

for (let num of range) {
    console.log(num);
}

// Arrays and iteratables

// this is not an array because it is not iterable; it does not implement Symbol.iterator
let arrayLikeObj = {
    0: "hello",
    1: " world",
    length: 2
};

// this is an iterable, but not an array:
let arrayLikeIterable = {
    one: "one",
    two: "two",
    [Symbol.iterator]: function() {
        return {
            current: this.one,
            // the worst iterable ever ;)
            next() {
                if (this.current == "one") {
                    this.current = "two";
                    return { done: false, value: "one" };
                } else if (this.current == "two") {
                    this.current = "";
                    return { done: false, value: "two" };
                }
                return { done: true };
            }
        };
    }
};

for (let val of arrayLikeIterable) {
    console.log(val);
}

// Converting "array-like" to array

let validArray = Array.from(arrayLikeObj);
for (let val of validArray) {
    console.log(val);
}
