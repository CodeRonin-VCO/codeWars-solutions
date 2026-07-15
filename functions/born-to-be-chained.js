// Kata : Born to be chained — 4kyu
// Objectif : implement a chain function that allows us to perform this by applying a fluid style: c.sum(4, 5).sum(5).minus(4).sum(7).addOne().double().double().execute();
function chain(functions = {}) {

    function createLink(queue = []) {
        const link = {
            execute: () => {
                const [premier, ...reste] = queue; // traiter le premier élément différemment du reste (cf: sum(4,5).sum(5)) → initialValueE
                const initialValue = premier.fn(...premier.args);
                return reste.reduce((acc, n) => n.fn(acc, ...n.args), initialValue);
            }
        };

        Object.keys(functions).forEach((name) => {
            link[name] = (...args) => {
                const newOp = [...queue, { fn: functions[name], args }]
                return createLink(newOp);
            };
        });
        return link;
    }
    return createLink([]);
}


console.log("-------------");
function sum(x, y) {
  return x + y;
}

function double(x) {
  return sum(x, x);
}

function minus (x, y) {
  return x - y;
}

function addOne(x) {
  return sum(x, 1);
}

const c = chain({sum, minus, double, addOne});
console.log(c.sum(3, 4).execute()); //7
console.log(c.sum(1, 2).execute()); //3
console.log(c.sum(4, 5).sum(5).minus(4).sum(7).addOne().double().double().execute()); // 72
console.log("-------------");
