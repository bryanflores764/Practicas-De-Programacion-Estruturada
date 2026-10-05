/*
===========================================
EJERCICIO PRÁCTICO 1: Suma hasta superar 100 (WHILE)
===========================================
Enunciado:
Solicite números al usuario uno por uno y acumule su suma. El programa debe 
dejar de pedir números cuando la suma supere 100. Al final, muestre la suma 
total y cuántos números se ingresaron.

⚠️ Requiere: npm install readline-sync
===========================================
*/

// Importar readline-sync para entrada de datos síncrona
const readlineSync = require('readline-sync');

// Variables para la suma y el contador
let suma = 0;
let contador = 0;

console.log('=== SUMA HASTA SUPERAR 100 ===');

// Bucle WHILE: se repite mientras la suma no supere 100
while (suma <= 100) {
    // Solicitar un número al usuario

    let numero = parseFloat(readlineSync.question('Ingrese un numero: '));

    if(numero !=='number'){
        console.log("El dato debe ser numerico")
    
    }else {
          // Acumular la suma y aumentar el contador
    suma = suma + numero;
    contador++;
    // Mostrar el estado actual
    console.log('Suma actual: ' + suma);

    // Mostrar resultados finales
console.log('\n=== RESULTADO FINAL ===');
console.log('Suma total: ' + suma);
console.log('Cantidad de numeros ingresados: ' + contador);


    }
    
  
}


