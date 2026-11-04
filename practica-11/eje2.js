/*
 * ENUNCIADO:
 * Cree un arreglo con 5 precios de productos. 
 * Use map para aplicar un impuesto del 13% (IVA) a cada precio y 
 * devuelva un nuevo arreglo con los precios finales.
 */

// Arreglo original con 5 precios de productos
const precios = [10.00, 25.50, 5.99, 100.00, 45.30];

// Usamos map para transformar cada precio sumándole el 13% de IVA
// El nuevo arreglo guarda los precios finales
const preciosConIVA = precios.map(precio => precio * 1.13);

// Mostramos el arreglo original
console.log("Precios originales: " + precios);

// Mostramos el nuevo arreglo con el IVA aplicado (redondeado a 2 decimales para mejor lectura)
const preciosRedondeados = preciosConIVA.map(p => p.toFixed(2));
console.log("Precios finales con IVA (13%): " + preciosRedondeados);