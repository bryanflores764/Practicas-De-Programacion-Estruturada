// Comparar dos números: Solicite dos números. Compare 
// cuál es mayor y muestre el resultado. Si son iguales, indíquelo.

const readline = require('readline')

const rl = readline.createInterface({

    input:process.stdin,
    output:process.stdout,

})

rl.question("Ingrese su primer numero: ",(numero1)=>{
    rl.question("ingrese su segundo numero: ",(numero2)=>{

        if(numero1>numero2){
            console.log("Su numero mayor es: ",numero1)
        }else if(numero2>numero1){
            console.log("Su numero mayor es: ",numero2)

        }else{
            console.log("Sus numeros son iguales",numero1 ,"=",numero2)
        }

        rl.close()

    })
})