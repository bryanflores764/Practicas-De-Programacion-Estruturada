/*
  Cree una función recursiva que reciba una cadena de texto y la devuelva invertida.
 Pruebe con "hola" y "javascript". Por ejemplo, invertir("hola") = "aloh".
 */

// Función recursiva que invierte una cadena de texto
function invertir(cadena) {
    // Caso base: si la cadena está vacía o tiene un solo carácter,
    // ya no hay nada que invertir y se devuelve igual
    if (cadena.length <= 1) {
        return cadena;
    }
    // Llamada recursiva: se toma el último carácter de la cadena
    // y se concatena con la inversión del resto (slice quita el último)
    return cadena[cadena.length - 1] + invertir(cadena.slice(0, -1));
}

// Prueba con "hola" → "aloh"
console.log("invertir('hola') = " + invertir("hola")); // aloh

// Prueba con "javascript" → "tpircsavaj"
console.log("invertir('javascript') = " + invertir("javascript")); // tpircsavaj