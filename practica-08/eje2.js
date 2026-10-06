/*
===========================================
EJERCICIO PRÁCTICO 2: Funciones para validar números
===========================================
Enunciado:
Cree una función que determine si un número es par o impar, y otra función que 
determine si un número es primo. Solicite un número al usuario y muestre ambos 
resultados.
===========================================
*/

// Importar el módulo readline
const readline = require('readline');

// Crear interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función que determina si un número es par o impar
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

// Función que determina si un número es primo
function esPrimo(numero) {
    // Los números menores o iguales a 1 no son primos
    if (numero <= 1) {
        return false;
    }
    // Recorrer desde 2 hasta la raíz del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; // Si es divisible, no es primo
        }
    }
    return true; // Si no tuvo divisores, es primo
}

// Solicitar el número al usuario
rl.question("Ingrese un número: ", (numero) => {
    // Convertir la entrada a número entero
    let n = parseInt(numero);
    
    // Llamar a las funciones
    let tipo = esParOImpar(n);
    let primo = esPrimo(n);
    
    // Mostrar los resultados
    console.log("\n=== RESULTADO ===");
    console.log("El número " + n + " es " + tipo);
    
    if (primo) {
        console.log("El número " + n + " ES primo");
    } else {
        console.log("El número " + n + " NO es primo");
    }
    
    // Cerrar la interfaz
    rl.close();
});