const fatorial = require("./fatorial");

function assert(condicao) {
    if (!condicao) {
        throw new Error("Assert falhou!");
    }
}

let resultado = fatorial(5);

assert(resultado === 120);

console.log("Sabonete");