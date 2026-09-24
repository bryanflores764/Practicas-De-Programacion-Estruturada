/*
===========================================
EJERCICIO PRÁCTICO 2: Suma de números pares e impares
===========================================
Enunciado:
Solicite un número N. Usando un bucle FOR, recorra del 1 al N y calcule 
por separado la suma de los números pares y la suma de los impares. 
Muestre ambos resultados.
===========================================
*/

// Importar el módulo readline
const readline = require('readline');

// Crear interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar el número N
rl.question('Ingrese un número N: ', (numero) => {
    // Convertir la entrada a número entero
    let n = parseInt(numero);
    
    // Variables para acumular las sumas
    let sumaPares = 0;
    let sumaImpares = 0;
    
    // Bucle FOR del 1 al N
    for (let i = 1; i <= n; i++) {
        // Verificar si el número es par
        if (i % 2 === 0) {
            sumaPares = sumaPares + i;
        } else {
            // Si no es par, es impar
            sumaImpares = sumaImpares + i;
        }
    }
    
    // Mostrar resultados
    console.log('\n=== RESULTADO ===');
    console.log('Rango del 1 al ' + n);
    console.log('Suma de números pares: ' + sumaPares);
    console.log('Suma de números impares: ' + sumaImpares);
    
    // Cerrar la interfaz
    rl.close();
});