// Kata : Compose functions (T Combinator) — 5kyu
// Objectif : Let's make a function called compose that accepts a value as a parameter, as well as any number of functions as additional parameters.

var compose = function (value, ...params) {
    if (!params.length) {
        return value;
    }
    
    params.forEach(fn => {
        value = fn(value);
    });

    return value;
}


console.log("-------------");
var doubleTheValue = function (val) { return val * 2; }
var addOneToTheValue = function (val) { return val + 1; }

console.log(compose(), "Solution: undefined");
console.log(compose(42), "Solution: 42");
console.log(compose("Hello, world"), "Solution: Hello, world");
console.log(compose(5, doubleTheValue), "Solution: 10");
console.log(compose(5, doubleTheValue, addOneToTheValue), "Solution: 11");
console.log("-------------");