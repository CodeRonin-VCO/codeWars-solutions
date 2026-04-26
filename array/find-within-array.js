// Kata : Find within array — 6kyu
// Objectif : Your function will iterate through the members of the sequence in order until the provided function returns true;
// at which point your function will return that item's index.
// If the function given returns false for all members of the sequence, your function should return -1.

function findInArray(array, iterator) {
    return array.findIndex((el, i) => iterator(el, i));
};





console.log("-------------");
let trueIfEven = function (v, i) { return v % 2 === 0; }
let neverTrue = function (v, i) { return false; }
let trueIfValueEqualsIndex = function (v, i) { return v === i; }
let trueIfLengthEqualsIndex = function (v, i) { return v.length === i; }

console.log(findInArray([], trueIfEven), -1);
console.log(findInArray([1, 3, 5, 6, 7], trueIfEven), 3);
console.log(findInArray([2, 4, 6, 8], trueIfEven), 0);
console.log(findInArray([2, 4, 6, 8], neverTrue), -1);
console.log(findInArray([13, 5, 3, 1, 4, 5], trueIfValueEqualsIndex), 4);
console.log(findInArray(["one", "two", "three", "four", "five", "six"], trueIfLengthEqualsIndex), 4);
console.log(findInArray(["bc", "af", "d", "e"], trueIfLengthEqualsIndex), -1);
console.log("-------------");