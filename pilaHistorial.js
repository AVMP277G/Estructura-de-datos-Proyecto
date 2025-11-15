let pilaHistorial = [];

// Operación push
pilaHistorial.push("Vehículo registrado: Camión");
pilaHistorial.push("Mantenimiento agregado");
pilaHistorial.push("Reporte generado");

// Mostrar pila completa
console.log("Pila actual:");
console.log(pilaHistorial);

// Operación peek (ver el último elemento)
console.log("Última acción realizada:");
console.log(pilaHistorial[pilaHistorial.length - 1]);

// Operación pop (deshacer última acción)
console.log("Deshaciendo acción...");
let accionDeshecha = pilaHistorial.pop();
console.log("Acción eliminada:", accionDeshecha);

// Mostrar pila luego de pop
console.log("Pila después del pop:");
console.log(pilaHistorial);
