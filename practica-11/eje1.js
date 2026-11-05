/*
 * ENUNCIADO:
 * Cree una función llamada calcular que reciba dos números y un callback (la operación).
 * Pruebe pasándole diferentes funciones flecha para sumar, restar, multiplicar y dividir.
 * Muestre los resultados.
 */

// Función de orden superior: recibe dos números y una función (callback)
function calcular(a, b, operacion) {
    // Ejecuta la función callback pasándole los dos números
    return operacion(a, b);
}

// Definimos las operaciones usando funciones flecha (arrow functions)
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

// Pruebas pasando diferentes callbacks a la función calcular
console.log("Suma (10 + 5): " + calcular(10, 5, sumar));              // 15
console.log("Resta (10 - 5): " + calcular(10, 5, restar));            // 5
console.log("Multiplicación (10 * 5): " + calcular(10, 5, multiplicar)); // 50
console.log("División (10 / 5): " + calcular(10, 5, dividir));        // 2