/*
 Cree una función recursiva que devuelva el n-ésimo término de la serie de Fibonacci.
 Pruebe con n = 0, 1, 6 y 10. Recuerde que fib(0) = 0 y fib(1) = 1.
 */

// Función recursiva que devuelve el n-ésimo término de Fibonacci
function fibonacci(n) {
    // Caso base 1: fib(0) = 0
    if (n === 0) return 0;
    // Caso base 2: fib(1) = 1
    if (n === 1) return 1;
    // Llamada recursiva múltiple: suma de los dos términos anteriores
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Prueba con n = 0 (caso base)
console.log("fibonacci(0) = " + fibonacci(0)); // 0

// Prueba con n = 1 (caso base)
console.log("fibonacci(1) = " + fibonacci(1)); // 1

// Prueba con n = 6
console.log("fibonacci(6) = " + fibonacci(6)); // 8

// Prueba con n = 10
console.log("fibonacci(10) = " + fibonacci(10)); // 55