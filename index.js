//funcion de prueba

function obtenerFactorial(n) {
    if (n == 0) {
        return 1;
    }
    return n * obtenerFactorial(n - 1);
}

console.log(obtenerFactorial(4));