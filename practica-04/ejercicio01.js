/*
===========================================
EJERCICIO 1: Día de la semana
===========================================
Enunciado:
Solicite un número del 1 al 7. Utilizando Switch, muestre el día de la semana 
correspondiente (1=Lunes, 7=Domingo). Si el número no está en ese rango, 
muestre "Día no válido".
===========================================
*/

// Importar el módulo readline para solicitar datos al usuario
const readline = require('readline');

// Crear la interfaz de lectura para entrada y salida de datos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar al usuario que ingrese un número del 1 al 7
rl.question('Ingrese un número del 1 al 7: ', (numero) => {
    // Convertir la entrada a número entero
    let dia = parseInt(numero);
    
    // Estructura Switch para evaluar el número ingresado
    switch (dia) {
        case 1: // Si el número es 1
            console.log('Lunes');
            break; // Salir del Switch
        case 2: // Si el número es 2
            console.log('Martes');
            break;
        case 3: // Si el número es 3
            console.log('Miércoles');
            break;
        case 4: // Si el número es 4
            console.log('Jueves');
            break;
        case 5: // Si el número es 5
            console.log('Viernes');
            break;
        case 6: // Si el número es 6
            console.log('Sábado');
            break;
        case 7: // Si el número es 7
            console.log('Domingo');
            break;
        default: // Si el número no está en el rango 1-7
            console.log('Día no válido');
    }
    
    // Cerrar la interfaz de lectura
    rl.close();
});