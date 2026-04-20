// Kata : Phone Directory — 5kyu
// Objectif : réordonner la strings et trouver par tel (num) : s = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"
// phone(s, "1-541-754-3010") should return "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St."

function phone(string, num) {
    const addresses = string.split("\n");
    const result = addresses.map(el => {
        let list = "";
        const phoneRegex = /\+\d{1,2}-\d{3}-\d{3}-\d{4}/ig;
        const nameRegex = /<([^>]+)>/ig;

        if (el.match(phoneRegex)) {
            list += "Phone => " + el.match(/\d{1,2}-\d{3}-\d{3}-\d{4}/ig) + ",";
        }

        if (el.match(nameRegex)) {
            list += " Name => " + el.match(nameRegex)[0].replace(/<|>/ig, "") + ",";
        }

        list += " Address => " + el
            .replace(phoneRegex, "")                        // tel
            .replace(nameRegex, "")                         // name
            .replace(/[^\w\s.<>-]/g, '')                    // caractères
            .replace(/\s+/g, ' ')                           // double espace
            .replace(/_/g, ' ')                             // underscore
            .trim();                                        // espace début/fin

        return list;
    }).filter(el => el.includes(num));

    if (result.length > 1) return `Error => Too many people: ${num}`;
    if (result.length === 0) return `Error => Not found: ${num}`;
        

    return result.toString();
}

console.log("-------------");
const dr = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010\n"
    + "+1-541-984-3012 <P Reed> /PO Box 530; Pollocksville, NC-28573\n :+1-321-512-2222 <Paul Dive> Sequoia Alley PQ-67209\n"
    + "+1-741-984-3090 <Peter Reedgrave> _Chicago\n :+1-921-333-2222 <Anna Stevens> Haramburu_Street AA-67209\n"
    + "+1-111-544-8973 <Peter Pan> LA\n +1-921-512-2222 <Wilfrid Stevens> Wild Street AA-67209\n"
    + "<Peter Gone> LA ?+1-121-544-8974 \n <R Steell> Quora Street AB-47209 +1-481-512-2222\n"
    + "<Arthur Clarke> San Antonio $+1-121-504-8974 TT-45120\n <Ray Chandler> Teliman Pk. !+1-681-512-2222! AB-47209,\n"
    + "<Sophia Loren> +1-421-674-8974 Bern TP-46017\n <Peter O'Brien> High Street +1-908-512-2222; CC-47209\n"
    + "<Anastasia> +48-421-674-8974 Via Quirinal Roma\n <P Salinger> Main Street, +1-098-512-2222, Denver\n"
    + "<C Powel> *+19-421-674-8974 Chateau des Fosses Strasbourg F-68000\n <Bernard Deltheil> +1-498-512-2222; Mount Av.  Eldorado\n"
    + "+1-099-500-8000 <Peter Crush> Labrador Bd.\n +1-931-512-4855 <William Saurin> Bison Street CQ-23071\n"
    + "<P Salinge> Main Street, +1-098-512-2222, Denve\n";

console.log(phone(dr, "48-421-674-8974")); // "Phone => 48-421-674-8974, Name => Anastasia, Address => Via Quirinal Roma"
console.log(phone(dr, "1-921-512-2222")); // "Phone => 1-921-512-2222, Name => Wilfrid Stevens, Address => Wild Street AA-67209"
console.log("-------------");