/*
 Cree una función recursiva que reciba un número entero y devuelva la suma de sus dígitos.
 Pruebe con 1234 y 9876. Por ejemplo, sumaDigitos(1234) = 10.
 */

// Función recursiva que suma los dígitos de un número entero
function sumaDigitos(n) {
    // Caso base: si el número tiene un solo dígito, se devuelve él mismo
    if (n < 10) {
        return n;
    }
    // Llamada recursiva: se suma el último dígito (n % 10)
    // más la suma de los dígitos restantes (Math.floor(n / 10))
    return (n % 10) + sumaDigitos(Math.floor(n / 10));
}

// Prueba con 1234 → 1 + 2 + 3 + 4 = 10
console.log("sumaDigitos(1234) = " + sumaDigitos(1234)); // 10

// Prueba con 9876 → 9 + 8 + 7 + 6 = 30
console.log("sumaDigitos(9876) = " + sumaDigitos(9876)); // 30