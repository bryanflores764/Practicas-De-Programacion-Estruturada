// Validar número positivo: Solicite un número al usuario. 
// Verifique si es positivo, negativo o cero, y muestre un mensaje correspondiente.

const readline = require('readline')

const rl = readline.createInterface({

    input:process.stdin,
    output:process.stdout,

})

rl.question("Ingrese un numero: " ,(numero)=>{

    if(numero>=1){
        console.log("Su numero es positivo");
    }else if(numero<=-1){
        console.log("Su numero es negativo");
    }else{
        console.log("Su numero es 0:")
    }

    rl.close()

})