//funcion de prueba

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(4));

function raizCuadrada(n) {
    return Math.sqrt(n);
}

console.log(raizCuadrada(4));