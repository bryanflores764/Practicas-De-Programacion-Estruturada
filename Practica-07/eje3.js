/*
===========================================
EJERCICIO PRÁCTICO 3: Recorrer arreglo de nombres (FOR...OF)
===========================================
Enunciado:
Cree un arreglo con al menos 5 nombres. Usando FOR...OF, recorra el arreglo 
y muestre cada nombre junto con la cantidad de letras que tiene. Además, 
indique cuál nombre es el más largo.
===========================================
*/

// Arreglo con 5 nombres
let nombres = ["Juan", "Alejandra", "Maria", "Cristobal", "Ana"];

// Variables para el nombre más largo
let nombreMasLargo = "";
let longitudMaxima = 0;

console.log('=== LISTA DE NOMBRES ===');

// Bucle FOR...OF para recorrer el arreglo de nombres
for (let nombre of nombres) {
    // Mostrar cada nombre con su cantidad de letras
    console.log(nombre + ' tiene ' + nombre.length + ' letras');
    
    // Verificar si es el nombre más largo hasta ahora
    if (nombre.length > longitudMaxima) {
        longitudMaxima = nombre.length;
        nombreMasLargo = nombre;
    }
}

// Mostrar el nombre más largo
console.log('\n=== NOMBRE MAS LARGO ===');
console.log('El nombre mas largo es: ' + nombreMasLargo + ' (' + longitudMaxima + ' letras)');