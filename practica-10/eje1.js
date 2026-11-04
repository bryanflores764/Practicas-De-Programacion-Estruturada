// Función para analizar ventas: Cree una función que reciba un arreglo de números (ventas del día). 
// Usando un bucle for, calcule el total,
//  el promedio y cuente cuántas ventas fueron mayores a $50. Retorne un objeto con los tres resultados.


function CalculoVentas(ventas){
    let total = 0;
    let mayoresA50 =0;
    let ventasNu = ventas.length

    ventas.forEach(ventas => {
        total += ventas
        if(ventas > 50){
            mayoresA50++
        }
        
    });

    let promedio = total / ventasNu

    let ventas_dia ={
        descripcion:"Informacion de las ventas",
        promedio:promedio,
        total:total,
        ventas_mayores_A_50:mayoresA50
    }

    console.log(ventas_dia)

}
let ventas =[10,20,40,56,20]
CalculoVentas(ventas)
