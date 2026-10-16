/*
 Cree una función recursiva que calcule el factorial de un número entero positivo.
 Pruebe con los valores 0, 5 y 7. Recuerde que factorial(0) = 1.
*/

// Función recursiva que calcula el factorial de un número entero positivo
function factorial(n) {
    // Caso base: si n es 0 o 1, el factorial es 1 y se detiene la recursión
    if (n === 0 || n === 1) {
        return 1;
    }
    // Llamada recursiva: multiplica n por el factorial de n-1
    return n * factorial(n - 1);
}

// Prueba con el valor 0 (caso base)
console.log("factorial(0) = " + factorial(0)); // 1

// Prueba con el valor 5
console.log("factorial(5) = " + factorial(5)); // 120

// Prueba con el valor 7
console.log("factorial(7) = " + factorial(7)); // 5040