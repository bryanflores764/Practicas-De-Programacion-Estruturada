/*
===========================================
EJERCICIO 2: Calculadora de operaciones
===========================================
Enunciado:
Solicite dos números y un operador (+ , - , * , /). Usando Switch, realice la 
operación correspondiente y muestre el resultado. Si el operador no es válido, 
muestre un mensaje de error.
===========================================
*/

// Importar el módulo readline para solicitar datos al usuario
const readline = require('readline');

// Crear la interfaz de lectura para entrada y salida de datos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar el primer número
rl.question('Ingrese el primer número: ', (num1) => {
    // Solicitar el segundo número
    rl.question('Ingrese el segundo número: ', (num2) => {
        // Solicitar el operador matemático
        rl.question('Ingrese el operador (+, -, *, /): ', (operador) => {
            // Convertir los valores ingresados a números decimales
            let numero1 = parseFloat(num1);
            let numero2 = parseFloat(num2);
            let resultado; // Variable para almacenar el resultado
            
            // Estructura Switch para evaluar el operador ingresado
            switch (operador) {
                case '+': // Si el operador es suma
                    resultado = numero1 + numero2;
                    console.log(numero1 + ' + ' + numero2 + ' = ' + resultado);
                    break;
                case '-': // Si el operador es resta
                    resultado = numero1 - numero2;
                    console.log(numero1 + ' - ' + numero2 + ' = ' + resultado);
                    break;
                case '*': // Si el operador es multiplicación
                    resultado = numero1 * numero2;
                    console.log(numero1 + ' * ' + numero2 + ' = ' + resultado);
                    break;
                case '/': // Si el operador es división
                    // Validar que no se divida entre cero
                    if (numero2 === 0) {
                        console.log('Error: No se puede dividir entre cero');
                    } else {
                        resultado = numero1 / numero2;
                        console.log(numero1 + ' / ' + numero2 + ' = ' + resultado);
                    }
                    break;
                default: // Si el operador no es válido
                    console.log('Error: Operador no válido');
            }
            
            // Cerrar la interfaz de lectura
            rl.close();
        });
    });
});