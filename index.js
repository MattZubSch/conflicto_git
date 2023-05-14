//funcion de prueba

function obtenerFactorial(num) {
    if (num == 0) {
        return 1;
    }
    return num * obtenerFactorial(num - 1);
}

console.log(obtenerFactorial(4));