/*
===========================================
EJERCICIO PRÁCTICO 2: Menú interactivo (DO...WHILE)
===========================================
Enunciado:
Cree un menú que se repita hasta que el usuario elija salir. 
Opciones: 1) Saludar, 2) Mostrar fecha actual, 3) Salir. 
Use Switch dentro del DO...WHILE. Si el usuario ingresa una opción no válida, 
muestre un mensaje y vuelva a mostrar el menú.

⚠️ Requiere: npm install readline-sync
===========================================
*/

// Importar readline-sync para entrada de datos síncrona
const readlineSync = require('readline-sync');

// Variable para controlar si el usuario desea salir
let salir = false;

// Bucle DO...WHILE: se ejecuta al menos una vez y se repite hasta salir
do {
    // Mostrar el menú
    console.log('\n=== MENU PRINCIPAL ===');
    console.log('1. Saludar');
    console.log('2. Mostrar fecha actual');
    console.log('3. Salir');
    
    // Solicitar la opción al usuario
    let opcion = parseInt(readlineSync.question('Seleccione una opcion (1-3): '));
    
    // Estructura Switch para ejecutar la opción seleccionada
    switch (opcion) {
        case 1:
            console.log('¡Hola! Bienvenido al sistema.');
            break;
        case 2:
            // Mostrar la fecha y hora actual del sistema
            let fecha = new Date();
            console.log('Fecha actual: ' + fecha.toLocaleDateString());
            console.log('Hora actual: ' + fecha.toLocaleTimeString());
            break;
        case 3:
            console.log('Saliendo del programa... ¡Hasta luego!');
            salir = true;
            break;
        default:
            console.log('Opcion no valida. Intente de nuevo.');
    }
} while (!salir);   // Condición del DO...WHILE