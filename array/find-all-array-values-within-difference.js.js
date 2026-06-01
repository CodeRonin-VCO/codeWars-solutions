// Kata : Find All Array Values That Fall Within a Given Difference — 5kyu
// Objectif : The goal is to find all the values in the array that are within a given range of each other.

class GroupByDifference {
    constructor(numbers) {
        this.numbers = numbers.sort((a, b) => a - b);
    }

    find(difference) {
        return this.numbers.filter((el, i) => {
            const next = this.numbers[i + 1] ?? Infinity;
            const prev = this.numbers[i - 1] ?? -Infinity;

            return next <= el + difference || prev >= el - difference;
        });
    }
}

console.log("-------------");
const numbers = [5, 32, 5, 1, 31, 70, 30, 8];
const newDiff = new GroupByDifference(numbers);

console.log(newDiff.find(100), [1, 5, 5, 8, 30, 31, 32, 70]);
console.log(newDiff.find(3), [5, 5, 8, 30, 31, 32]);
console.log(newDiff.find(2), [5, 5, 30, 31, 32]);
console.log(newDiff.find(0), [5, 5]);
console.log(new GroupByDifference([]).find(10), []);
console.log("-------------");