// Kata : field chained HTML formatting  — 5kyu
// Objectif : You have to fix and improve upon the toString() method for arrays

function makeFormatter(tags = []) {
    
    function formatter(...args) {
        let result = args.join("");

        for (let i = tags.length - 1; i >= 0; i--) {
            const tag = tags[i];
            result = `<${tag}>${result}</${tag}>`
        }

        return result;
    }

    ['div', 'h1', 'p', 'span'].forEach(tag => {
        Object.defineProperty(formatter, tag, {
            get: () => makeFormatter([...tags, tag])
        });
    });

    return formatter;
}

const Format = makeFormatter();

console.log("-------------");
console.log(Format.div("Foo")) // `<div>Foo</div>`
console.log(Format.div.h1("Foo")) // `<div><h1>Foo</h1></div>`
console.log("-------------");
// const Format = { tags: ['div', 'h1', 'p', 'span'] }
