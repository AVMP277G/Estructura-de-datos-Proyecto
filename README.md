# Proyecto: Módulo de Vehículos de Construcción 🚧

## 📌 Descripción
Este proyecto  busca analizar y proponer soluciones relacionadas con el *pistón de flota para construcción, aplicable a vehículos de carga pesada como **camiones, grúas, escaladoras* y similares.  
El objetivo es estudiar su funcionamiento, limitaciones y aplicaciones prácticas en obras de infraestructura y construcción vial. 
El módulo tiene como objetivo simular la *gestión de vehículos de construcción pesada*, permitiendo realizar operaciones relacionadas con su capacidad, horas de trabajo de la máquina, condiciones para su funcionamiento, tipo de material que soportan y el tipo de construcción en el que se utilizan.  

Los vehículos que se incluyen son:  
- 🚛 Camiones de carga  
- 🏗️ Grúas  
- 🚜 Excavadoras  
- 🌀 Mezcladoras de concreto  
- 🚚 Volquetas  

---

## División del proyecto

El proyecto se organiza en módulos, cada uno a cargo de un integrante del equipo:

- *Módulo: Vehículos de Construcción*  
  - Investigación sobre vehículos de construcción.  
  - Peso que soportan, condiciones de operación y horas de trabajo.  
  - Tipos de construcción en los que se emplean (viales, urbanas, minería).  
  - Tipo de material que pueden transportar o manipular.

-*Módulo: Indumentaria*
  


## 🎯 Objetivos
- Implementar estructuras de datos para la gestión de vehículos de construcción.  
- Modelar las operaciones principales de cada vehículo en relación con su uso real.  
- Desarrollar un módulo escalable que permita agregar más vehículos en el futuro.  

---

## ⚙️ Operaciones del Módulo
El módulo permitirá las siguientes operaciones: 
-  *Registrar vehículos*: tipo, capacidad de carga, características y material que soportan.  
-  *Listar vehículos*: mostrar todos los vehículos registrados en el sistema. 
-  *Asignar vehículo a una construcción*: seleccionar qué tipo de construcción requiere el vehículo: 
  - Construcción vial (carreteras, puentes).  
  - Construcción de edificaciones.  
  - Obras hidráulicas.  
  - Minería.  
- Consultar información de cada vehículo: capacidad, material que transporta, horas de trabajo estimadas.
- *Consultar capacidad de carga*: verificar qué material puede soportar el vehículo: 
   - Arena  
   - Cemento  
   - Piedra  
   - Tierra  
   - Carga metálica
- *Consultar peso que que soparta*: verificar qué tipo de peso soporta cada vehículo:  
   - 15 – 25 ton
   - 20 – 60 ton 
   -  5 – 15 ton
- *Consultar las horas de operación de la máquina*: verificar cuánto tiempo dura en funcionamiento cada vehículo:  
   - 8 – 12 h/día 
   -  6 – 8 h/día   
   -  10 – 12 h/día 
- *Actualizar información de un vehículo*.  
- *Eliminar vehículos del sistema que ya no estén en operación*.

---
## Datos (Entradas de información)

- Capacidad de carga de los vehículos (toneladas).  
- Tipo de materiales que soportan (arena, grava, tierra, acero, concreto).  
- Condiciones de operación (terreno, clima, resistencia).  
- Horas de trabajo continuas que pueden realizar.  
- Normas técnicas y manuales de fabricantes (Caterpillar, Komatsu, Volvo CE).  

Ejemplo de tabla inicial:

| Vehículo         | Capacidad de carga (ton) | Material soportado     | Horas de operación | Tipo de construcción |
|------------------|--------------------------|------------------------|--------------------|----------------------|
| Camión de volteo | 15 – 25 ton             | Arena, grava, tierra   | 8 – 12 h/día       | Viales, urbanas      |
| Grúa móvil       | 20 – 60 ton             | Estructuras metálicas  | 6 – 8 h/día        | Puentes, edificios   |
| Excavadora       | 5 – 15 ton              | Tierra, rocas          | 10 – 12 h/día      | Minería, viales      |

---

## 🚧 Limitaciones del Proyecto
- El sistema no contempla el mantenimiento mecánico de los vehículos.   
- La simulación se centra en *gestión y clasificación*, no en animaciones ni en cálculos físicos reales.  
- Solo se incluyen los tipos de vehículos previamente definidos.  
- Los datos de los vehículos se ingresan de forma manual (no hay integración con bases de datos reales).  
- No se incluye información sobre consumo de combustible, mantenimiento o costos operativos.  
- La simulación no contempla condiciones físicas exactas (ejemplo: resistencia de materiales, rendimiento real).
- Tiempo para investigación detallada.  
- Acceso a datos reales de maquinaria usada en el entorno local.
---

## 📂 Tecnologías
- Lenguaje: *JavaScript (ES6)*  
- Entorno: Navegador / JS bin / Visual Studio Code  
- Paradigma: Programación Orientada a Objetos y estructuras de datos  

---

## 📅 Cronograma de Desarrollo
Hasta el corte: *15 de septiembre*

| Semana | Actividad |
|--------|-----------|
| 1 (26 ago - 1 sep) | Definición del tema, análisis de vehículos de construcción, documentación inicial (README). |
| 2 (2 - 8 sep) | Diseño de estructuras de datos (clases y métodos), definición de operaciones del módulo. |
| 3 (9 - 15 sep) | Implementación en JavaScript, pruebas básicas, corrección de errores y entrega del corte.(aún no definido) |

---

## Referencias

- [Caterpillar](https://www.cat.com/es_CO.html)  
- [Komatsu](https://www.komatsu.com/es)  
- [Volvo Construction Equipment](https://www.volvoce.com/global/en/)  
- Normas OSHA, ISO 6016 sobre maquinaria pesada.

---

## 👥 Autores
- Estudiante: [Angie Valentina Martínez Poveda]  
- Universidad: [Fundación Universitaria de San Gil - UNISANGIL]  
- Asignatura: *Estructura de Datos*
- Docente: [Jeida Faisuly Ramírez Buitrago ]  
