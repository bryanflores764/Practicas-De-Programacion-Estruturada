/*
===========================================
EJERCICIO PRÁCTICO 4: Pirámide de asteriscos
===========================================
Enunciado:
Solicite al usuario la cantidad de filas. Usando bucles FOR anidados, 
dibuje una pirámide de asteriscos. Ejemplo para 4 filas: 
primera fila un asterisco, segunda dos, tercera tres, cuarta cuatro.
===========================================
*/

// Importar el módulo readline
const readline = require('readline');

// Crear interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar la cantidad de filas
rl.question('Ingrese la cantidad de filas para la pirámide: ', (filas) => {
    // Convertir la entrada a número entero
    let n = parseInt(filas);
    
    console.log('\n=== PIRÁMIDE DE ASTERISCOS ===');
    
    // Bucle FOR externo: recorre cada fila
    for (let i = 1; i <= n; i++) {
        let linea = ''; // Cadena para construir cada fila
        
        // Bucle FOR interno: agrega los asteriscos de la fila
        for (let j = 1; j <= i; j++) {
            linea = linea + '*';
        }
        
        // Mostrar la fila construida
        console.log(linea);
    }
    
    // Cerrar la interfaz
    rl.close();
});