describe("arrays", () => {
    let array = [2, 4, 8, 16];
    let element = 32;
    afterEach(() => {
        array = [2, 4, 8, 16];
        element = 32;
    });

    describe("getArrayElement", () => {
        it("index 0 should be 2", () => {
            assert.equal(getArrayElement(array, 0), 2);
        });
        it("index 1 should be 4", () => {
            assert.equal(getArrayElement(array, 1), 4);
        });
        it("index 3 should be 16", () => {
            assert.equal(getArrayElement(array, 3), 16);
        });
        it("index -1 should be undefined", () => {
            assert.equal(getArrayElement(array, -1), undefined);
        });
        it("index 4 should be undefined", () => {
            assert.equal(getArrayElement(array, 4), undefined);
        });
        it("index 'hello' should be undefined", () => {
            assert.equal(getArrayElement(array, "hello"), undefined);
        });
    });

    describe("modifyArrayElement", () => {
        for (let i = 0; i < array.length; i++) {
            it("element should reflect new value", () => {
                assert.equal(modifyArrayElement(array, i, element), element);
            });
        }
    });
    describe("pushElement", () => {
        it("last element should be equal to the pushed element", () => {
            assert.equal(pushElement(array, element), element);
        });
        it("last element should be equal to the pushed element, even for objects", () => {
            assert.equal(pushElement(array, array), array);
        });
        it("last element should be equal to the pushed element, even for NaN", () => {
            assert.isNaN(pushElement(array, NaN));
        });
    });
    describe("shiftElement", () => {
        it("shifted element should be equal to 2", () => {
            assert.equal(shiftElement(array), 2);
        });
        it("shifted element of empty array should return undefined", () => {
            assert.equal(shiftElement([]), undefined);
        });
    });
    describe("popElement", () => {
        it("popped element should be equal to 16", () => {
            assert.equal(popElement(array), 16);
        });
        it("popped element of empty array should return undefined", () => {
            assert.equal(popElement([]), undefined);
        });
        it("popped element should return newly pushed element", () => {
            pushElement(array, element);
            assert.equal(popElement(array), element);
        });
    });
});
