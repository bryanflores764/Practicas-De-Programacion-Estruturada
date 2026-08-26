// Conversión número a texto: Solicite un número de referencia de 8 dígitos. Conviértalo 
// a texto y extraiga los primeros 4 dígitos.

let numero = 12345678;

let numeroTexto = numero.toString();
console.log('Su variable es de tipo: '+ typeof numeroTexto);
console.log("Los primeros 4 digitos son: "+numeroTexto.slice(0,4));