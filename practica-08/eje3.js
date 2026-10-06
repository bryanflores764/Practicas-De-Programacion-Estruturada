/*
===========================================
EJERCICIO PRÁCTICO 3: Funciones para arreglos
===========================================
Enunciado:
Cree tres funciones: una que reciba un arreglo y devuelva la suma de sus elementos; 
otra que devuelva el promedio; y otra que devuelva el número mayor. 
Cree un arreglo con al menos 6 números y muestre los tres resultados.
===========================================
*/

// Función que devuelve la suma de los elementos de un arreglo
function sumarArreglo(arreglo) {
    let suma = 0;
    for (let numero of arreglo) {
        suma = suma + numero;
    }
    return suma;
}

// Función que devuelve el promedio de los elementos de un arreglo
function promedioArreglo(arreglo) {
    let suma = sumarArreglo(arreglo);
    return suma / arreglo.length;
}

// Función que devuelve el número mayor de un arreglo
function mayorArreglo(arreglo) {
    let mayor = arreglo[0];
    for (let numero of arreglo) {
        if (numero > mayor) {
            mayor = numero;
        }
    }
    return mayor;
}

// Arreglo con 6 números
let numeros = [15, 8, 23, 4, 42, 16];

// Llamar a las funciones
let suma = sumarArreglo(numeros);
let promedio = promedioArreglo(numeros);
let mayor = mayorArreglo(numeros);

// Mostrar los resultados
console.log("=== ANÁLISIS DEL ARREGLO ===");
console.log("Arreglo: [" + numeros.join(", ") + "]");
console.log("Suma de elementos: " + suma);
console.log("Promedio: " + promedio.toFixed(2));
console.log("Número mayor: " + mayor);