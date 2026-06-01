// Kata : Maze Runner — 6kyu
// Objectif : Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
//      0 = Safe place to walk
//      1 = Wall
//      2 = Start Point
//      3 = Finish Point

function mazeRunner(maze, directions) {
    const startRowIndex = maze.findIndex(el => el.includes(2));
    let currentRow = startRowIndex;
    let currentCol = maze[startRowIndex].findIndex(el => el === 2);

    for (const el of directions) {
        if (el === "N") { currentRow -= 1; }
        else if (el === "S") { currentRow += 1; }
        else if (el === "E") { currentCol += 1; }
        else { currentCol -= 1; };

        const outOfBounds = currentRow < 0 || currentCol < 0 || currentRow >= maze.length || currentCol >= maze[currentRow].length;
        const currentPosition = outOfBounds ? 1 : maze[currentRow][currentCol];

        if (outOfBounds || currentPosition === 1) return "Dead";
        if (currentPosition === 3) return "Finish";
    }

    return "Lost";
}

console.log("-------------");
const maze = [[1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 3],
[1, 0, 1, 0, 1, 0, 1],
[0, 0, 1, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 1],
[1, 2, 1, 0, 1, 0, 1]];

console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"]), "Finish", "Expected Finish");
console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "E", "E", "N", "N", "E"]), "Finish", "Expected Finish");
console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E", "W", "W"]), "Finish", "Expected Finish");
console.log(mazeRunner(maze, ["N", "N", "N", "W", "W"]), "Dead", "Expected Dead");
console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "S", "S", "S", "S"]), "Dead", "Expected Dead");
console.log(mazeRunner(maze, ["N", "E", "E", "E", "E"]), "Lost", "Expected Lost");
console.log("-------------");