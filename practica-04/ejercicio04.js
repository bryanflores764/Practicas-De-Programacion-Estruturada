/*
===========================================
EJERCICIO 4: Calificación por letra
===========================================
Enunciado:
Solicite una calificación numérica (0-100). Usando Switch, convierta a calificación 
por letra según: A (90-100), B (80-89), C (70-79), D (60-69), F (0-59). 
Muestre la calificación en letra. 
Ayuda: use Math.floor(calificacion / 10) para obtener el rango.
===========================================
*/

// Importar el módulo readline para solicitar datos al usuario
const readline = require('readline');

// Crear la interfaz de lectura para entrada y salida de datos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar la calificación numérica al usuario
rl.question('Ingrese la calificación numérica (0-100): ', (calificacion) => {
    // Convertir la entrada a número decimal
    let nota = parseFloat(calificacion);
    let letra; // Variable para almacenar la calificación en letra
    
    // Validar que la calificación esté en el rango 0-100
    if (nota < 0 || nota > 100) {
        console.log('Error: La calificación debe estar entre 0 y 100');
    } else {
        // Obtener el rango de la calificación usando Math.floor(nota / 10)
        // Esto agrupa: 90-99 → 9, 80-89 → 8, 70-79 → 7, 60-69 → 6, 0-59 → 0-5
        let rango = Math.floor(nota / 10);
        
        // Estructura Switch para evaluar el rango de la calificación
        switch (rango) {
            case 10: // Caso especial para 100
            case 9: // Para calificaciones 90-99
                letra = 'A';
                break;
            case 8: // Para calificaciones 80-89
                letra = 'B';
                break;
            case 7: // Para calificaciones 70-79
                letra = 'C';
                break;
            case 6: // Para calificaciones 60-69
                letra = 'D';
                break;
            default: // Para calificaciones 0-59
                letra = 'F';
        }
        
        // Mostrar el resultado
        console.log('Calificación: ' + nota + ' → ' + letra);
    }
    
    // Cerrar la interfaz de lectura
    rl.close();
});