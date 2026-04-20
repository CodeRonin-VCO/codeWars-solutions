// Kata : Concatenating functions — 5kyu
// Objectif : concaténer deux fonctions en utiliisant les prototypes (Function.prototype)

// Example
var addOne = function(e) {
    return e + 1;
};

var square = function(e) {
    return e * e;
};

// Exercice
Function.prototype.pipe = function (fn) {
    const currentFn = this;

    return function (arg) {
        return fn(currentFn(arg));
    }
}


console.log("-------------");
var result = [1, 2, 3, 4, 5].map(addOne.pipe(square)) //-> [4,9,16,25,36]
console.log(result);
console.log("-------------");