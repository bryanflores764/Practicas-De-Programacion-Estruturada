// Función generadora de tabla de multiplicar: Cree una función que reciba un número 
// y devuelva un arreglo con su tabla de multiplicar del 1 al 10
//  (usando for). Luego imprima el arreglo.

function tablaMultiplicar(numero){
    if(typeof numero!=='number'|| !Number.isFinite(numero)){
        console.log( 'Él dato debe ser un numero')
        return;
    }

    console.log(`La tabla de multiplicar del ${numero} es`)
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero}X${i}=${numero*i}`)
    }


}

tablaMultiplicar('haids')