// Kata : Common array elements — 6kyu
// Objectif : Given three arrays of integers, return the sum of elements that are common in all three arrays.

function common(a, b, c) {
    const A = new Map();
    const B = new Map();
    const C = new Map();

    for (const x of a) A.set(x, (A.get(x) || 0) + 1);
    for (const x of b) B.set(x, (B.get(x) || 0) + 1);
    for (const x of c) C.set(x, (C.get(x) || 0) + 1);

    let sum = 0;

    for (const [value, countA] of A) {
        if (B.has(value) && C.has(value)) {
            const minCount = Math.min(countA, B.get(value), C.get(value));

            sum += minCount * value;
        }
    }

    return sum;
}



console.log("-------------");
console.log(common([1, 2, 3], [5, 3, 2], [7, 3, 2])); // 5
console.log(common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2])); // 7
console.log("-------------");