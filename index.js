//funcion de prueba

function obtenerFactorial(numero) {
    if (numero == 0) {
        return 1;
    }
    return numero * obtenerFactorial(numero - 1);
}
console.log(factorial(4));

function raizCuadrada(n) {
    return Math.sqrt(n);
}

console.log(raizCuadrada(4));

