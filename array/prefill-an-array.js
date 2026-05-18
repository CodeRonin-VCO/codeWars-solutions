// Kata : Prefill an Array — 6kyu
// Objectif : Create the function prefill that returns an array of n elements that all have the same value v

function prefill(n, v) {
    const nIsNumber = Number(n);

    if (typeof n === "boolean" || !Number.isInteger(nIsNumber) || nIsNumber < 0) {
        throw new TypeError(`${n} is invalid`);
    }

    if (nIsNumber === 0) return [];

    return Array.from({ length: nIsNumber }).fill(v);
}

console.log("-------------");
console.log(prefill(3, 1), [1, 1, 1]);
console.log(prefill(2, 'abc'), ['abc', 'abc']);
console.log(prefill('1', 1), [1]);
console.log(prefill(3, prefill(2, '2d')), [['2d', '2d'], ['2d', '2d'], ['2d', '2d']]);
console.log(prefill(true, 1), "TypeError: true is invalid");
console.log("-------------");