let colaTurno = [];

colaTurno.push("Camión VH001");
colaTurno.push("Excavadora VH002");
colaTurno.push("Volqueta VH003");

console.log("Cola actual:");
console.log(colaTurno);


let atendido = colaTurno.shift();
console.log("Vehículo atendido:", atendido);

console.log("Cola después del shift:");
console.log(colaTurno);
