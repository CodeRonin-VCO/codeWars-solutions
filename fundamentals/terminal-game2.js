// Class needed for tests
class Hero {
    constructor() {
        this.position = "00";
    }
}

// Kata : Terminal Game #2 — 7kyu
// Objectif : Adjust the hero's position by changing the position attribute. The level is a grid with the following values:
//      00 	01 	02 	03 	04
//      10 	11 	12 	13 	14
//      20 	21 	22 	23 	24
//      30 	31 	32 	33 	34
//      40 	41 	42 	43 	44

Hero.prototype.move = function (dir) {
    const startRow = parseInt(this.position[0]);
    const startCol = parseInt(this.position[1]);

    const directions = {
        up: (startRow - 1 >= 0) ? `${startRow - 1}${startCol}` : undefined,
        down: (startRow + 1 <= 4) ? `${startRow + 1}${startCol}` : undefined,
        left: (startCol - 1 >= 0) ? `${startRow}${startCol - 1}` : undefined,
        right: (startCol + 1 <= 4) ? `${startRow}${startCol + 1}` : undefined
    }

    if (directions[dir] === undefined) throw new RangeError("");

    this.position = directions[dir];
}


console.log("-------------");

const testHero = new Hero();
testHero.move('down');
console.log(testHero.position, '10');
testHero.move('right');
console.log(testHero.position, '11');
testHero.move('up');
console.log(testHero.position, '01');
testHero.move('right');
console.log(testHero.position, '02');
testHero.move('down');
console.log(testHero.position, '12');
testHero.move('down');
console.log(testHero.position, '22');
console.log("-------------");