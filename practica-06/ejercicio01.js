/*
===========================================
EJERCICIO PRÁCTICO 1: Tabla de multiplicar
===========================================
Enunciado:
Solicite un número al usuario y muestre su tabla de multiplicar del 1 al 10 
usando un bucle FOR. Formato: "5 x 1 = 5", "5 x 2 = 10", etc.
===========================================
*/

// Importar el módulo readline
const readline = require('readline');

// Crear interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar el número al usuario
rl.question('Ingrese un número para ver su tabla de multiplicar: ', (numero) => {
    // Convertir la entrada a número
    let n = parseInt(numero);
    
    console.log('\n=== TABLA DE MULTIPLICAR DEL ' + n + ' ===');
    
    // Bucle FOR del 1 al 10
    for (let i = 1; i <= 10; i++) {
        // Calcular y mostrar cada multiplicación
        console.log(n + ' x ' + i + ' = ' + (n * i));
    }
    
    // Cerrar la interfaz
    rl.close();
});