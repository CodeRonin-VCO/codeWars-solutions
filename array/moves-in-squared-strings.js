// Kata : Moves in squared strings (III) — 6kyu
// Objectif : transformations of this square of strings.
// s = "abcd\nefgh\nijkl\nmnop"
//      Symmetry → "aeim\nbfjn\ncgko\ndhlp"
//      Clockwise → "miea\nnjfb\nokgc\nplhd"
//      selfieAndDiag1 → "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"

function diag1Sym(str) {
    const lines = str.split("\n");

    return lines[0].split("").map((_, colIdx) => lines.map(row => row[colIdx]).join("")).join("\n");
}
function rot90Clock(str) {
    const lines = str.split("\n");

    return lines[0].split("").map((_, colIdx) => lines.map(row => row[colIdx]).reverse().join("")).join("\n");
}
function selfieAndDiag1(str) {
    const lines = str.split("\n");

    return lines.map((el, i) => {
        return el + "|" + diag1Sym(str).split("\n")[i];
    }).join("\n");
}
function oper(fn, str) {
    return fn(str);
}


console.log("-------------");
console.log(diag1Sym("wuUyPC\neNHWxw\nehifmi\ntBTlFI\nvWNpdv\nIFkGjZ"), "weetvI\nuNhBWF\nUHiTNk\nyWflpG\nPxmFdj\nCwiIvZ", 'diag1Sym');
console.log(diag1Sym("qAdPMX\nkRIQKU\nJeoroo\nNwVbtn\nAmQUqi\nVguxub"), "qkJNAV\nARewmg\ndIoVQu\nPQrbUx\nMKotqu\nXUonib", 'diag1Sym');
console.log(rot90Clock("rgavce\nvGcEKl\ndChZVW\nxNWgXR\niJBYDO\nSdmEKb"), "Sixdvr\ndJNCGg\nmBWhca\nEYgZEv\nKDXVKc\nbORWle", 'rot90Clock');
console.log(rot90Clock("EFAxSN\nXbJObC\nMrNVyg\nUKqDsE\nrYnAfU\nnNjADZ"), "nrUMXE\nNYKrbF\njnqNJA\nAADVOx\nDfsybS\nZUEgCN", 'rot90Clock');
console.log(selfieAndDiag1("NJVGhr\nMObsvw\ntPhCtl\nsoEnhi\nrtQRLK\nzjliWg"), "NJVGhr|NMtsrz\nMObsvw|JOPotj\ntPhCtl|VbhEQl\nsoEnhi|GsCnRi\nrtQRLK|hvthLW\nzjliWg|rwliKg", 'selfieAndDiag1');
console.log(selfieAndDiag1("JAAn\nsrpa\nFngg\nmrVJ"), "JAAn|JsFm\nsrpa|Arnr\nFngg|ApgV\nmrVJ|nagJ", 'selfieAndDiag1');
console.log("-------------");