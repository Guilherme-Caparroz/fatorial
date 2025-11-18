function fatorial(numero) {
    let f = 1;
    while (numero > 1) {
        f *= numero;
        numero--;
    }
    return f;
}

module.exports = fatorial;