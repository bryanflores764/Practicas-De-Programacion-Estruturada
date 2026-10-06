/*
===========================================
EJERCICIO PRÁCTICO 1: Calculadora con funciones
===========================================
Enunciado:
Cree una función para cada operación básica: sumar, restar, multiplicar y dividir. 
Solicite dos números y un operador al usuario. Según el operador, llame a la 
función correspondiente y muestre el resultado.
===========================================
*/

// Importar el módulo readline
const readline = require('readline');

// Crear interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Función para restar dos números
function restar(a, b) {
    return a - b;
}

// Función para multiplicar dos números
function multiplicar(a, b) {
    return a * b;
}

// Función para dividir dos números
function dividir(a, b) {
    if (b === 0) {
        return "Error: no se puede dividir entre cero";
    }
    return a / b;
}

// Solicitar el primer número
rl.question("Ingrese el primer número: ", (num1) => {
    // Solicitar el segundo número
    rl.question("Ingrese el segundo número: ", (num2) => {
        // Solicitar el operador
        rl.question("Ingrese el operador (+, -, *, /): ", (operador) => {
            
            // Convertir los números ingresados
            let a = parseFloat(num1);
            let b = parseFloat(num2);
            let resultado;
            
            // Estructura Switch para llamar a la función según el operador
            switch (operador) {
                case '+':
                    resultado = sumar(a, b);
                    break;
                case '-':
                    resultado = restar(a, b);
                    break;
                case '*':
                    resultado = multiplicar(a, b);
                    break;
                case '/':
                    resultado = dividir(a, b);
                    break;
                default:
                    resultado = "Operador no válido";
            }
            
            // Mostrar el resultado
            console.log("\n=== RESULTADO ===");
            console.log(a + " " + operador + " " + b + " = " + resultado);
            
            // Cerrar la interfaz
            rl.close();
        });
    });
});