/*
===========================================
EJERCICIO PRÁCTICO 2: Clasificador de triángulos
===========================================
Enunciado:
Solicite las longitudes de los tres lados de un triángulo.
- Primero valide que los lados puedan formar un triángulo 
  (la suma de dos lados debe ser mayor que el tercero).
- Si es válido, clasifíquelo usando Switch según su tipo:
  - Equilátero: los tres lados iguales
  - Isósceles: dos lados iguales
  - Escaleno: los tres lados diferentes
Muestre el tipo de triángulo y su perímetro.
===========================================
*/

const readline = require('readline');

// Crear interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar el primer lado
rl.question('Ingrese el lado 1: ', (lado1) => {
    // Solicitar el segundo lado
    rl.question('Ingrese el lado 2: ', (lado2) => {
        // Solicitar el tercer lado
        rl.question('Ingrese el lado 3: ', (lado3) => {
            // Convertir los valores a números
            let a = parseFloat(lado1);
            let b = parseFloat(lado2);
            let c = parseFloat(lado3);
            
            // Validar que formen un triángulo
            if ((a + b > c) && (a + c > b) && (b + c > a)) {
                let tipo; // Variable para el tipo de triángulo
                
                // Estructura Switch para clasificar el triángulo
                // Se usa el número de lados iguales como criterio
                if (a === b && b === c) {
                    tipo = 'Equilátero';
                } else if (a === b || a === c || b === c) {
                    tipo = 'Isósceles';
                } else {
                    tipo = 'Escaleno';
                }
                
                // Calcular el perímetro
                let perimetro = a + b + c;
                
                // Mostrar resultados
                console.log('\n=== RESULTADO ===');
                console.log('Tipo de triángulo: ' + tipo);
                console.log('Perímetro: ' + perimetro.toFixed(2));
            } else {
                console.log('Error: Los lados no forman un triángulo válido');
            }
            
            // Cerrar la interfaz
            rl.close();
        });
    });
});