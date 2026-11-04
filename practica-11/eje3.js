/*
 * ENUNCIADO:
 * Cree un arreglo con edades de varias personas (ej. 12, 25, 17, 40, 15, 30). 
 * Use filter para obtener un arreglo solo con las personas mayores de edad (>= 18).
 */

// Arreglo original con las edades
const edades = [12, 25, 17, 40, 15, 30];

// Usamos filter para quedarnos solo con las edades que sean mayores o iguales a 18
const mayoresDeEdad = edades.filter(edad => edad >= 18);

// Mostramos los resultados
console.log("Todas las edades: " + edades);
console.log("Edades de mayores de edad (>= 18): " + mayoresDeEdad);