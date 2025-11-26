function fatorial(numero) {
    let fatorial = 1;
    while (numero > 1) {
        fatorial = fatorial * numero;
        numero--;
    }
    return fatorial;
}

module.exports = fatorial;
