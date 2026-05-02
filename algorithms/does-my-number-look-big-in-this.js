// Kata : Does my number look big in this? — 6kyu
// Objectif : find if the number is a narcissistic number
// 153 (3 digits), which is narcissistic → 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

function narcissistic(value) {
    const units = String(value).split("");
    const power = String(value).split("").length;
    const sumPower = units.map(el => el ** power).reduce((acc, n) => acc + n, 0);

    return value === Number(sumPower);
}


console.log("-------------");
console.log(narcissistic(7), "true", '7 is narcissistic');
console.log(narcissistic(153),"true", '153 is narcissistic');
console.log(narcissistic(1634),"true", '1634 is narcissistic');
console.log(narcissistic(12),"false");
console.log("-------------");