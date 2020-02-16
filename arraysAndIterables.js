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

// you can create an array from an array-like object by using Array.from(). The same can be used for an iterable
let validArray = Array.from(arrayLikeObj);
for (let val of validArray) {
    console.log(val);
}

// you can also apply an optional mapping function for each element. You can pass 'this' in to the function with the third property
// Array.from(obj[, mapFn, thisArg])

function Range(from, to) {
    this.from = from;
    this.to = to;
    this[Symbol.iterator] = function() {
        this.current = this.from;
        // instead of returning a new iterator object, we can simply return the entire range object as long as it implements next()
        return this;
    };
    this.next = function() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    };
}

// our goal is to transform the range into an array whose elements are each element of the range squared
let squaredRange = Array.from(new Range(0, 10), num => Math.pow(num, 2));
console.log("Squared range: ", squaredRange);
