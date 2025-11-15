let colaTurno = [];

// Entrada de vehículos a la cola
colaTurno.push("Camión VH001");
colaTurno.push("Excavadora VH002");
colaTurno.push("Volqueta VH003");

// Mostrar cola completa
console.log("Cola actual:");
console.log(colaTurno);

// Sale el primer vehículo
let atendido = colaTurno.shift();
console.log("Vehículo atendido:", atendido);

// Mostrar cola después de atender uno
console.log("Cola después del shift:");
console.log(colaTurno);
