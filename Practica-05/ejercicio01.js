/*
===========================================
EJERCICIO PRÁCTICO 1: Sistema de calificación con bonificación
===========================================
Enunciado:
Solicite al usuario su nombre, su calificación final (0-100) y si entregó todos los trabajos (si/no). 
- Si la calificación es >= 90 y entregó todos los trabajos, su nota final 
  se incrementa en 5 puntos (sin pasar de 100).
- Si la calificación es >= 70 pero < 90, y entregó todos los trabajos, 
  su nota se incrementa en 3 puntos.
- Si la calificación es < 70, no hay bonificación.
Muestre: nombre, calificación original, bonificación aplicada y calificación final.
===========================================
*/

// Importar el módulo readline para solicitar datos al usuario
const readline = require('readline');

// Crear la interfaz de lectura para entrada y salida de datos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar el nombre del estudiante
rl.question("Ingrese su nombre: ", (nombre) => {
    // Solicitar la calificación final
    rl.question("Ingrese su calificación (0-100): ", (calificacion) => {
        // Solicitar si entregó todos los trabajos
        rl.question("¿Entregó todos los trabajos? (si/no): ", (respuesta) => {

            // Convertir la calificación a número decimal
            let calificacionp = parseFloat(calificacion);
            // Convertir la respuesta a minúsculas para comparar
            let respuestal = respuesta.toLowerCase();
            // Variable para la bonificación
            let bonificacion = 0;

            // Validar que la calificación esté en el rango correcto
            if (calificacionp < 0 || calificacionp > 100) {
                console.log("La calificación tiene que estar entre 0 y 100");
            } else {
                // Aplicar bonificación si entregó todos los trabajos
                if (respuestal === "si") {
                    if (calificacionp >= 90) {
                        bonificacion = 5;
                    } else if (calificacionp >= 70) {
                        bonificacion = 3;
                    }
                }

                // Calcular la nota final sin pasar de 100
                let notaF = calificacionp + bonificacion;

                if (notaF > 100) {
                    notaF = 100;
                }

                // Mostrar los resultados
                console.log("\n=== SISTEMA DE BONIFICACIÓN ===");
                console.log("Nombre: ", nombre);
                console.log("Calificación sin bonificación: ", calificacionp);
                console.log("Su bonificación es: +", bonificacion);
                console.log("Calificación final: ", notaF);
            }

            // Cerrar la interfaz de lectura
            rl.close();
        });
    });
});