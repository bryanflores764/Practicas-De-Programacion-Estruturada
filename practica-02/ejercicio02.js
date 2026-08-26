// Extracción de datos: Solicite un código con formato "EST20260645". 
// Extraiga los primeros 3 caracteres y los últimos 4.

let codigo = 'EST20260645';

let codigo3Caracteres = codigo.slice(0,3);
let codigo4Caracteres = codigo.slice(7,11);

console.log("Los primeros 3 caracteres del codigo son: "+codigo3Caracteres);
console.log("Los ultimos 4 caracteres del codigo son: "+codigo4Caracteres);



