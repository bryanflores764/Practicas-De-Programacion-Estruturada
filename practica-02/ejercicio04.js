// Fecha actual: Obtenga la fecha actual y muestre el día, mes y año de forma personalizada (Ej: 26/8/2026)
let fecha = new Date();

let dia = fecha.getDate();
let mes = fecha.getMonth()+1;
let anio = fecha.getFullYear();

console.log(`La fecha actual es: ${dia}/${mes}/${anio}`);
