//funcion de prueba

function obtenerFactorial(numero) {
    if (numero == 0) {
        return 1;
    }
    return numero * obtenerFactorial(numero - 1);
}

console.log(obtenerFactorial(4));