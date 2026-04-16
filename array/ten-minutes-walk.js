// Kata : Take a Ten Minutes Walk — 6kyu
// Objectif : vérifier que le trajet fait exactement 10 blocs
// et ramène au point de départ (axe x et axe y doivent se compenser)

function isValidWalk(walk) {
    const x = walk.filter(el => el === "e" || el === "w").map(el => el === "e" ? 1 : -1).reduce((acc, n) => acc + n, 0);
    const y = walk.filter(el => el === "n" || el === "s").map(el => el === "n" ? 1 : -1).reduce((acc, n) => acc + n, 0);

    return walk.length === 10 && x === 0 && y === 0;
}



console.log("-------------");
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // true
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])); // false
console.log(isValidWalk(['w'])); // false
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // false
console.log("-------------");