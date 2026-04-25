// Kata : Range Extraction — 4kyu
// Objectif : takes a list of integers in increasing order and returns a correctly formatted string in the range format


function solution(list) {
    const groups = [];
    let i = 0;

    while (i < list.length) {
        let start = list[i];
        let end = start;

        // Vérifier si nombre consécutif
        while (i + 1 < list.length && list[i + 1] === list[i] + 1) {
            i++;
            end = list[i];
        }

        groups.push({ start, end });
        i++;
    }

    return groups.flatMap(({ start, end }) => {
        if (end - start >= 2) return [`${start}-${end}`]; // +3n
        if (end - start === 1) return [`${start},${end}`]; // 2n

        return [`${start}`]; // 1n
    }).join(",");
}


console.log("-------------");
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "Solution: -6,-3-1,3-5,7-11,14,15,17-20");
console.log("-------------");