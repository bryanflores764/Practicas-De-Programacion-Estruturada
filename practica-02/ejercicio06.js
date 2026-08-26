// Información de estudiante: Solicite nombre, apellido, año de ingreso y promedio. Muestre 
// nombre y apellido en mayúsculas, primeras 3 letras del apellido, 
// últimos 2 dígitos del año y promedio con 2 decimales.

let nombre = 'carlos';
let apellido = 'lopez';
let anio = 2005;
let promedio = 9.8888;

console.log("Su nombre y apellido en mayusculas es: "+nombre.toUpperCase()+' '+apellido.toUpperCase());
console.log("Las primeras 3 letras del apellido son: "+apellido.slice(0,3));
console.log("Los 2 digitos del anio son: "+anio.toString().slice(2,4));
console.log("Su promedio con 2 decimales es: "+promedio.toFixed(2));