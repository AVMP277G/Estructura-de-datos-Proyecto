let pilaHistorial = [];

pilaHistorial.push("Vehículo registrado: Camión");
pilaHistorial.push("Mantenimiento agregado");
pilaHistorial.push("Reporte generado");

console.log("Pila actual:");
console.log(pilaHistorial);

console.log("Última acción realizada:");
console.log(pilaHistorial[pilaHistorial.length - 1]);

console.log("Deshaciendo acción...");
let accionDeshecha = pilaHistorial.pop();
console.log("Acción eliminada:", accionDeshecha);

console.log("Pila después del pop:");
console.log(pilaHistorial);
