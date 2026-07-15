// Kata: RGB To Hex Conversion - 5kyu
// Objectif: convertir un code rgb en hex

function rgb(r, g, b) {
    if (r < 0) r = 0;
    if (g < 0) g = 0;
    if (b < 0) b = 0;
    if (r > 255) r = 255;
    if (g > 255) g = 255;
    if (b > 255) b = 255;

    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');

    return (hexR + hexG + hexB).toUpperCase();
}

console.log("-------------");
console.log(rgb(0, 0, 0, '000000'));
console.log(rgb(0, 0, -20, '000000'));
console.log(rgb(300, 255, 255, 'FFFFFF'));
console.log(rgb(173, 255, 47, 'ADFF2F'));
console.log("-------------");