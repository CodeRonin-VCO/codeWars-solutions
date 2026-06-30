// Kata : groupBy — 6kyu
// Objectif : Implement an Array method groupBy that returns an array of non-empty arrays of elements that are equal according to the optional comparing function

Array.prototype.groupBy = function groupBy(eq) {
    let result = [];
    // let idxResult = 0;

    this.forEach((el, i) => {
        // if (i === 0) {
        //     result.push([el]);
        //     return;
        // }

        // if (!eq) {
        //     if (el !== this[i - 1]) {
        //         result.push([el]);
        //         idxResult++;
        //     } else {
        //         result[idxResult].push(el);
        //     }
        // } else {
        //     if (!eq(el, this[i - 1])) {
        //         result.push([el]);
        //         idxResult++;
        //     } else {
        //         result[idxResult].push(el);
        //     }
        // }

        // ? Refactorisation
        const isNewGroup = i === 0 || (eq ? !eq(el, this[i - 1]) : el !== this[i - 1]);

        if (isNewGroup) {
            result.push([el]);
        } else {
            result[result.length - 1].push(el);
        }
    });

    return result;
};

Object.defineProperty(Array.prototype, "groupBy", { enumerable: false });




console.log("-------------");
console.log([1, 1, 1].groupBy()) // [ [1,1,1] ]
console.log([0, 1, 1, 0, 0, 1].groupBy()) // [ [0], [1,1], [0,0], [1] ]

function eqOdd(m, n) { return m % 2 === n % 2; }
console.log([1, 3, 2, 2, 4, 1].groupBy(eqOdd)) // [ [1,3], [2,2,4], [1] ]

function eqSign(m, n) { return Math.sign(m) === Math.sign(n); }
console.log([-2, -1, 0, 1, 2, -2, -1, 0, 1, 2].groupBy(eqSign)) // [ [-2,-1], [0], [1,2], [-2,-1], [0], [1,2] ]

function eqLength(s, t) { return s.length === t.length; }
console.log(["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"].groupBy(eqLength)) //   [ ["zero"], ["one","two"], ["three"], ["four","five"], ["six"], ["seven","eight"], ["nine"] ]
console.log("-------------");