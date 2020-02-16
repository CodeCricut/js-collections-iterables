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
