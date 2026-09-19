// Ejercicio Práctico 3: Sistema de tarifas de estacionamiento
// Solicite el tipo de vehículo (1=Moto, 2=Auto, 3=Camioneta, 4=Bus) y la cantidad de horas estacionado.

// Calcule la tarifa base según el tipo de vehículo usando Switch: Moto $1.00/hora, Auto $2.00/hora, Camioneta $3.00/hora, Bus $5.00/hora.
// Aplique un descuento del 20% si el vehículo estuvo más de 5 horas.
// Si el tipo de vehículo no es válido, muestre un mensaje de error.
// Muestre: tipo de vehículo, horas, tarifa por hora, subtotal, descuento y total.

const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

console.log("ESTACINAMIENTO")
console.log("Moto");
console.log("Sedan");
console.log("Camioneta");
console.log("Bus");

rl.question("Ingrese su tipo de vehiculo (1/4)",opcion=>{
    rl.question("Ingrese las horas de estacinamiento: ",horas=>{
        let opcionI = parseInt(opcion);
        let horasP = parseFloat(horas);
        let tarifa =0;
        let tipoVehiculo = ''

        switch (opcionI) {
            case 1:
                tarifa=1;
                tipoVehiculo='Moto'
                
                break;
            case 2:
                tarifa=2;
                tipoVehiculo='Sedan'
                
                break;

            case 3:
                tarifa=3;
                tipoVehiculo='Camioneta'
                
                break;
            case 4:
                tarifa=5;
                tipoVehiculo='Autobus'
                
                break;
        
            default:
                console.log("Opcion no valida")
                rl.close()
                break;
        }

        if(tarifa>0){
            let subtotal = horasP*tarifa
            let descuento =0;

            if(horasP>5){
                descuento = subtotal*0.20
            }

            let total = subtotal -descuento;

            console.log("Factura")
            console.log("Tipo vehiculo: ",tipoVehiculo);
            console.log("Horas de parqueo: ",horasP);
            console.log("Tarifa por hora: ",tarifa);
            console.log("Subtotal: ",subtotal.toFixed(2));
            console.log("Descuento: ",descuento.toFixed(2));
            console.log("Total: ",total.toFixed(2));

            rl.close()





        }







    })
})