/*
===========================================
EJERCICIO PRÁCTICO 4: Función para convertir temperaturas
===========================================
Enunciado:
Cree dos funciones: una que convierta de Celsius a Fahrenheit y otra de 
Fahrenheit a Celsius. Solicite al usuario el tipo de conversión y la temperatura, 
y muestre el resultado con 2 decimales.
===========================================
*/

// Importar el módulo readline
const readline = require('readline');

// Crear interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función que convierte de Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Función que convierte de Fahrenheit a Celsius
function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Mostrar el menú de conversión
console.log("=== CONVERSOR DE TEMPERATURAS ===");
console.log("1. Celsius a Fahrenheit");
console.log("2. Fahrenheit a Celsius");

// Solicitar el tipo de conversión
rl.question("Seleccione una opción (1-2): ", (opcion) => {
    // Solicitar la temperatura
    rl.question("Ingrese la temperatura: ", (temperatura) => {
        
        let op = parseInt(opcion);
        let temp = parseFloat(temperatura);
        let resultado;
        let unidadOrigen;
        let unidadDestino;
        
        // Estructura Switch para elegir la conversión
        switch (op) {
            case 1:
                resultado = celsiusAFahrenheit(temp);
                unidadOrigen = "°C";
                unidadDestino = "°F";
                break;
            case 2:
                resultado = fahrenheitACelsius(temp);
                unidadOrigen = "°F";
                unidadDestino = "°C";
                break;
            default:
                console.log("Opción no válida");
                rl.close();
                return;
        }
        
        // Mostrar el resultado con 2 decimales
        console.log("\n=== RESULTADO ===");
        console.log(temp + unidadOrigen + " equivale a " + resultado.toFixed(2) + unidadDestino);
        
        // Cerrar la interfaz
        rl.close();
    });
});