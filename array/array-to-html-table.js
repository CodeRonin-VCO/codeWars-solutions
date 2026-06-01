// Kata : Array to HTML table — 6kyu
// Objectif : The task is simple - given a 2D array (list), generate an HTML table representing the data from this array.

function toTable(data, headers = false, index = false) {
    let result = "<table>";
    let countRow = 1;

    if (headers) {
        result += `<thead><tr>`;

        if (index) {
            result += "<th></th>";
        }

        data[0].forEach((el) => {
            result += `<th>${el}</th>`
        })

        result += `</tr></thead>`;
    }

    result += "<tbody>";

    const bodyData = headers ? data.slice(1) : data;

    bodyData.forEach(row => {
        result += "<tr>";
        if (index) {
            result += `<td>${countRow}</td>`;
            countRow++;
        }

        row.forEach(el => {
            result += `<td>${el ?? ""}</td>`;
        });
        result += "</tr>";
    })

    result += "</tbody></table>";
    return result;
}

console.log("-------------");
console.log(toTable([["lorem", "ipsum"], ["dolor", "sit amet"]], true, true)); // "<table><thead><tr><th></th><th>lorem</th><th>ipsum</th></tr></thead><tbody><tr><td>1</td><td>dolor</td><td>sit amet</td></tr></tbody></table>"
console.log(toTable([[1, 2, 3], [4, 5, 6], [7, 8, 9]], false, true));
console.log("-------------");