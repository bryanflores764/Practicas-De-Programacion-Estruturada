/*
===========================================
EJERCICIO PRÁCTICO 3: Serie de Fibonacci
===========================================
Enunciado:
Solicite al usuario cuántos términos de la serie Fibonacci desea ver. 
Usando un bucle FOR, genere y muestre la serie. 
La serie comienza: 0, 1, 1, 2, 3, 5, 8, 13...
===========================================
*/

// Importar el módulo readline
const readline = require('readline');

// Crear interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar la cantidad de términos
rl.question('¿Cuántos términos de la serie Fibonacci desea ver?: ', (cantidad) => {
    // Convertir la entrada a número entero
    let n = parseInt(cantidad);
    
    // Variables para los dos primeros términos
    let a = 0; // Primer término
    let b = 1; // Segundo término
    let serie = ''; // Cadena para almacenar la serie
    
    // Bucle FOR para generar los n términos
    for (let i = 1; i <= n; i++) {
        // Agregar el término actual a la serie
        serie = serie + a;
        
        // Agregar coma si no es el último término
        if (i < n) {
            serie = serie + ', ';
        }
        
        // Calcular el siguiente término
        let siguiente = a + b;
        a = b;        // El segundo pasa a ser el primero
        b = siguiente; // El siguiente pasa a ser el segundo
    }
    
    // Mostrar la serie completa
    console.log('\n=== SERIE FIBONACCI ===');
    console.log('Primeros ' + n + ' términos:');
    console.log(serie);
    
    // Cerrar la interfaz
    rl.close();
});