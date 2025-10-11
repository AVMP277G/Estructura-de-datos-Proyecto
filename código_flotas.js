import data from './data/gestionFlotas.json' assert { type: 'json' };

console.log("Proyecto:", data.proyecto);
console.log("Módulo:", data.modulo);
console.log("Descripción:", data.descripcion);

console.log("Reporte de Uso de Vehículos:");
console.log("Periodo:", data.reportes.usoVehiculos.periodo);
console.log("Horas Operativas:", data.reportes.usoVehiculos.horasOperativas);
console.log("Productividad:", data.reportes.usoVehiculos.productividad);

console.log("Próximo Mantenimiento:");
console.log("Vehículo:", data.entidades.vehiculo.tipo);
console.log("Fecha:", data.entidades.vehiculo.proximoMantenimiento);
console.log("Responsable:", data.entidades.mantenimiento.responsable);