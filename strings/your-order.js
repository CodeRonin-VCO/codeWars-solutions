// Kata : Your order, please — 6kyu
// Objectif : Your task is to sort a given string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result.

function order(sentence) {
    const words = sentence.split(" ");
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return numbers.map(n => words.find(el => el.includes(n)) ?? "").join(" ").trim() ?? "";
}


console.log("-------------");
console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""), "", "empty input should return empty string")
console.log("-------------");