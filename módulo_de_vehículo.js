// ===============================
// MÓDULO: GESTIÓN DE FLOTAS
// ===============================

// Clase Vehiculo: representa un vehículo de carga pesada
class Vehiculo {
  constructor(id, tipo, marca, modelo, capacidad, año, estado, ubicacion, kilometraje, consumo) {
    this.idVehiculo = id;
    this.tipo = tipo;
    this.marca = marca;
    this.modelo = modelo;
    this.capacidadToneladas = capacidad;
    this.añoFabricacion = año;
    this.estado = estado;
    this.ubicacionActual = ubicacion;
    this.kilometraje = kilometraje;
    this.consumoCombustibleLtHora = consumo;
    this.mantenimientos = [];
  }

  registrarMantenimiento(mantenimiento) {
    this.mantenimientos.push(mantenimiento);
  }

  obtenerUltimoMantenimiento() {
    if (this.mantenimientos.length === 0) return "Sin mantenimientos registrados.";
    return this.mantenimientos[this.mantenimientos.length - 1];
  }

  mostrarDatos() {
    return `${this.tipo} ${this.marca} (${this.modelo}) - Estado: ${this.estado}`;
  }
}

// Clase Conductor: almacena información del operador del vehículo
class Conductor {
  constructor(id, nombre, licencia, experiencia, contacto, estado) {
    this.idConductor = id;
    this.nombre = nombre;
    this.licencia = licencia;
    this.experienciaAños = experiencia;
    this.contacto = contacto;
    this.estado = estado;
  }

  mostrarInfo() {
    return `${this.nombre} (${this.licencia}) - Estado: ${this.estado}`;
  }
}

// Clase Mantenimiento: controla las fechas y tipos de servicios
class Mantenimiento {
  constructor(id, tipo, fecha, responsable, costo, estado) {
    this.idMantenimiento = id;
    this.tipo = tipo;
    this.fechaProgramada = fecha;
    this.responsable = responsable;
    this.costoEstimado = costo;
    this.estado = estado;
  }

  mostrarDetalle() {
    return `Tipo: ${this.tipo}, Fecha: ${this.fechaProgramada}, Costo: $${this.costoEstimado}`;
  }
}

// Clase Reporte: calcula indicadores de uso y costos
class Reporte {
  constructor(periodo, horas, inactivo, combustible, mantenimiento) {
    this.periodo = periodo;
    this.horasOperativas = horas;
    this.tiempoInactivo = inactivo;
    this.combustible = combustible;
    this.mantenimiento = mantenimiento;
  }

  calcularProductividad() {
    const total = this.horasOperativas + this.tiempoInactivo;
    const porcentaje = (this.horasOperativas / total) * 100;
    return porcentaje.toFixed(2) + "%";
  }

  calcularCostoTotal() {
    return this.combustible + this.mantenimiento;
  }

  mostrarReporte() {
    return `
      Periodo: ${this.periodo}
      Productividad: ${this.calcularProductividad()}
      Costo Total: $${this.calcularCostoTotal()}
    `;
  }
}

// Clase principal: GestionFlotas
class GestionFlotas {
  constructor() {
    this.vehiculos = [];
    this.conductores = [];
    this.reportes = [];
  }

  registrarVehiculo(vehiculo) {
    this.vehiculos.push(vehiculo);
  }

  registrarConductor(conductor) {
    this.conductores.push(conductor);
  }

  generarReporte(reporte) {
    this.reportes.push(reporte);
  }

  listarVehiculos() {
    return this.vehiculos.map(v => v.mostrarDatos());
  }

  mostrarResumen() {
    return `Vehículos registrados: ${this.vehiculos.length}, Conductores activos: ${this.conductores.length}`;
  }
}

// ===============================
// EJEMPLO DE USO
// ===============================

// Crear instancias
const gestion = new GestionFlotas();

const vehiculo1 = new Vehiculo("VH001", "Camión Volqueta", "Caterpillar", "CAT 773G", 50, 2020, "Operativo", "Zona Norte", 8500, 12.5);
const conductor1 = new Conductor("CND045", "Carlos Gómez", "C3", 8, "3124567890", "Activo");
const mantenimiento1 = new Mantenimiento("MTN101", "Preventivo", "2025-11-15", "Taller Mecánico Central", 4500000, "Pendiente");
const reporte1 = new Reporte("Octubre 2025", 180, 40, 3200000, 4500000);

// Registrar elementos
vehiculo1.registrarMantenimiento(mantenimiento1);
gestion.registrarVehiculo(vehiculo1);
gestion.registrarConductor(conductor1);
gestion.generarReporte(reporte1);

// Mostrar información
console.log("=== SISTEMA DE GESTIÓN DE FLOTAS ===");
console.log(gestion.mostrarResumen());
console.log("Vehículos:", gestion.listarVehiculos());
console.log("Reporte:", reporte1.mostrarReporte());
console.log("Último mantenimiento:", vehiculo1.obtenerUltimoMantenimiento().mostrarDetalle());