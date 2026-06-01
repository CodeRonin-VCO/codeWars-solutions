// Kata : Simple Web Framework #1: Create a basic router — 6kyu
// Objectif : The router should accept bindings for a given url, http method and an action.
// Then, when a request with a bound url and method comes in, it should return the result of the action.

class Router {
    constructor() {
        this.routes = new Map();
    }

    #key(url, httpMethod) {
        return `${httpMethod}:${url}`;
    }

    bind(url, httpMethod, action) {
        this.routes.set(this.#key(url, httpMethod), action);
    }

    runRequest(url, httpMethod) {
        const action = this.routes.get(this.#key(url, httpMethod));
        return action ? action() : 'Error 404: Not Found';
    }
}


console.log("-------------");
let router = new Router;

router.bind('/hello', 'GET', function () { return 'hello world'; });
router.bind('/login', 'GET', function () { return 'Please log-in.'; });

console.log(router.runRequest('/hello', 'GET'), '| hello world');
console.log(router.runRequest('/login', 'GET'), '| Please log-in.');
console.log(router.runRequest('/login', 'POST'), '| Error 404: Not Found');

// Should modify existing routes
router.bind('/page', 'GET', function () { return 'First binding.'; });
router.bind('/page', 'GET', function () { return 'Modified binding.'; });

console.log(router.runRequest('/page', 'GET'), 'Modified binding.');
console.log("-------------");