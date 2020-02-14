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
            assert.deepEqual(shiftElement([]), undefined);
        });
    });
    describe("popElement", () => {
        it("popped element should be equal to 16", () => {
            assert.equal(popElement(array), 16);
        });
        it("popped element of empty array should return undefined", () => {
            assert.deepEqual(popElement([]), undefined);
        });
        it("popped element should return newly pushed element", () => {
            pushElement(array, element);
            assert.equal(popElement(array), element);
        });
    });

    describe("removeElementsFromIndex", () => {
        it("splice should remove correct items from an array", () => {
            assert.deepEqual(removeElementsFromIndex(array, 0, 1), [4, 8, 16]);
        });
        it("splice should remove correct items from an array", () => {
            assert.deepEqual(removeElementsFromIndex(array, 0, 2), [8, 16]);
        });
        it("splice should remove correct items from an array", () => {
            assert.deepEqual(removeElementsFromIndex(array, 1, 3), [2]);
        });
    });

    describe("removeAndReplaceElements", () => {
        it("splice should remove correct items and replace them", () => {
            assert.deepEqual(removeAndReplaceElements(array, 0, 1, 10), [
                10,
                4,
                8,
                16
            ]);
        });
        it("splice should remove correct items and replace them", () => {
            assert.deepEqual(
                removeAndReplaceElements(array, 0, 1, [-2, 0, 2]),
                [[-2, 0, 2], 4, 8, 16]
            );
        });
        it("splice should remove correct items and replace them", () => {
            assert.deepEqual(
                removeAndReplaceElements(array, 0, array.length, []),
                [[]]
            );
        });
        it("splice should remove correct items and replace them", () => {
            assert.deepEqual(
                removeAndReplaceElements(array, 0, array.length, [1, 2, 3]),
                [[1, 2, 3]]
            );
        });
    });

    describe("removeAndReturnRemoved", () => {
        it("splice should remove correct items from an array and return them", () => {
            assert.deepEqual(removeAndReturnRemoved(array, 0, 1), [2]);
        });
        it("splice should remove correct items from an array and return them", () => {
            assert.deepEqual(removeAndReturnRemoved(array, 0, 2), [2, 4]);
        });
        it("splice should remove correct items from an array and return them", () => {
            assert.deepEqual(removeAndReturnRemoved(array, 1, 3), [4, 8, 16]);
        });
    });

    describe("sliceBetween", () => {
        it("sliceBetween should return an array of the elements between start and end", () => {
            assert.deepEqual(sliceBetween(array, 0, 4), [2, 4, 8, 16]);
        });
        it("sliceBetween should return an array of the elements between start and end", () => {
            assert.deepEqual(sliceBetween(array, 0, 2), [2, 4]);
        });
        it("sliceBetween should return an array of the elements between start and end", () => {
            assert.deepEqual(sliceBetween(array, 2, 4), [8, 16]);
        });
    });

    describe("sliceFrom", () => {
        it("sliceFrom should return an array of the elements between start and end", () => {
            assert.deepEqual(sliceFrom(array, 0), [2, 4, 8, 16]);
        });
        it("sliceFrom should return an array of the elements between start and end", () => {
            assert.deepEqual(sliceFrom(array, 1), [4, 8, 16]);
        });
        it("sliceFrom should return an array of the elements between start and end", () => {
            assert.deepEqual(sliceFrom(array, 4), []);
        });
        it("sliceFrom should return an array of the elements between start and end", () => {
            assert.deepEqual(sliceFrom(array, -1), [16]);
        });
        it("sliceFrom should return an array of the elements between start and end", () => {
            assert.deepEqual(sliceFrom(array, -2), [8, 16]);
        });
    });

    describe("copyWithSlice", () => {
        it("copyWithSlice should return an identical array which doesn't simply reference the original array", () => {
            let copiedArr = copyWithSlice(array);
            copiedArr.push(1);
            assert.notEqual(array.length, copiedArr.length);
        });
    });

    describe("concatWithValues", () => {
        it("concatWithValues should return the original array if no additional items are provided", () => {
            assert.deepEqual(concatArray(array), array);
        });
        it("concatWithValues should return the original array plus concatinated items", () => {
            assert.deepEqual(concatArray(array, 1, 2, 3), [
                2,
                4,
                8,
                16,
                1,
                2,
                3
            ]);
        });
        it("concatWithValues should return the original array plus a concatinated array", () => {
            assert.deepEqual(concatArray(array, [1, 2, 3]), [
                2,
                4,
                8,
                16,
                [1, 2, 3]
            ]);
        });
    });

    describe("applyFuncToEachElement", () => {
        it("applyFuncToEachElement should transform the original array, but should not alter it if the func does nothing", () => {
            let ogArray = array;
            applyFuncToEachElement(array, (item, i, arr) => (arr[i] = item));

            assert.deepEqual(array, ogArray);
        });
        it("applyFuncToEachElement should transform the array into a new array that reflects the func", () => {
            applyFuncToEachElement(array, (item, i, arr) => (arr[i] = 0));
            assert.deepEqual(array, [0, 0, 0, 0]);
        });
    });

    describe("transformArray", () => {
        it("transformArray should return the array untouched if the func does nothing", () => {
            assert.deepEqual(
                transformArray(array, item => item),
                array
            );
        });
        it("transformArray should return the a new array with elements that reflect the func", () => {
            assert.deepEqual(
                transformArray(array, () => 0),
                [0, 0, 0, 0]
            );
        });
    });

    describe("splitByDelimiter", () => {
        it("splitByDelimiter should return an array", () => {
            assert.deepEqual(splitByDelimiter("0,1,2,3", ","), [
                "0",
                "1",
                "2",
                "3"
            ]);
        });
        it("splitByDelimiter should return an array", () => {
            assert.deepEqual(splitByDelimiter("hello", ""), [
                "h",
                "e",
                "l",
                "l",
                "o"
            ]);
        });
    });

    describe("glueWithDelimiter", () => {
        it("glueWithDelimiter should create a string based on an array with a delimiter inbetween each element", () => {
            assert.equal(glueWithDelimiter(array, ";"), "2;4;8;16");
        });
    });
});
