// Kata : Pack Some Chocolates — 6kyu
// Objectif : The function should return the number of small chocolates required to achieve the goal. The function should return -1 only if the goal cannot be achieved by any possible combination of big chocolates and small chocolates.
// small : 2gr
// big: 3gr

function makeChocolates(small, big, goal) {
  let maxBig = Math.min(big, Math.floor(goal / 5));

  for (let b = maxBig; b >= 0; b--) {
    const remaining = goal - b * 5;

    if (remaining % 2 === 0 && remaining / 2 <= small) {
      return remaining / 2;
    }
  }

  return -1;
}


console.log("-------------");
console.log(makeChocolates(4, 1, 13), 4);
console.log(makeChocolates(4, 1, 14), -1);
console.log(makeChocolates(2, 1, 7), 1);
console.log(makeChocolates(3, 1, 6), 3);
console.log(makeChocolates(8, 0, 7), -1);
console.log(makeChocolates(8, 0, 7), -1);
console.log("-------------");