/*
===========================================
EJERCICIO PRÁCTICO 4: Recorrer objeto de estudiante (FOR...IN)
===========================================
Enunciado:
Cree un objeto que represente a un estudiante con las propiedades: nombre, 
edad, carrera, promedio y universidad. Usando FOR...IN, recorra el objeto 
y muestre cada propiedad con su valor. Además, si el promedio es mayor o 
igual a 8, muestre "Estudiante destacado".
===========================================
*/

// Objeto que representa a un estudiante
let estudiante = {
    nombre: "Carlos Martinez",
    edad: 21,
    carrera: "Ingenieria en Sistemas",
    promedio: 8.7,
    universidad: "UNIVO"
};

console.log('=== DATOS DEL ESTUDIANTE ===');

// Bucle FOR...IN para recorrer las propiedades del objeto
for (let propiedad in estudiante) {
    // Mostrar cada propiedad con su valor
    // Se usa estudiante[propiedad] para acceder al valor dinámicamente
    console.log(propiedad + ': ' + estudiante[propiedad]);
}

// Verificar si el estudiante es destacado
console.log('\n=== EVALUACION ===');
if (estudiante.promedio >= 8) {
    console.log('Estudiante destacado');
} else {
    console.log('Estudiante regular');
}