const btnOpen = document.getElementById("openMenu");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("mainContent");

btnOpen.addEventListener("click", () => {
  const opened = sidebar.classList.toggle("open");
  main.classList.toggle("shifted", opened);
  btnOpen.classList.toggle("active");
});

const toggleMode = document.getElementById("toggleMode");
let modo = "dark";

document.body.classList.add("dark");

toggleMode.addEventListener("click", () => {
  modo = modo === "dark" ? "light" : "dark";
  document.body.className = modo;
  toggleMode.textContent = modo === "dark" ? "🌙" : "☀️";
});

let vehiculos = [];

function mostrarForm() {
  document.getElementById("formSection").classList.remove("hidden");
}

function listarVehiculos() {
  document.getElementById("formSection").classList.add("hidden");
  renderVehiculos(vehiculos);
}

function limpiarLista() {
  vehiculos = [];
  renderVehiculos(vehiculos);
  actualizarStats();
}

document.getElementById("vehiculoForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const tipo = document.getElementById("tipo").value;
  const capacidad = document.getElementById("capacidad").value;
  const material = document.getElementById("material").value;
  const horas = document.getElementById("horas").value;
  const construccion = document.getElementById("construccion").value;

  vehiculos.push({ tipo, capacidad, material, horas, construccion });

  document.getElementById("vehiculoForm").reset();
  renderVehiculos(vehiculos);
  actualizarStats();
});

function renderVehiculos(lista) {
  const ul = document.getElementById("listaVehiculos");
  ul.innerHTML = "";
  

  lista.forEach((v, index) => {
    ul.innerHTML += `
      <li>
        <b>${v.tipo}</b> <br>
        Capacidad: ${v.capacidad} <br>
        Material: ${v.material} <br>
        Horas: ${v.horas} <br>
        Construcción: ${v.construccion}
        <button class="delete-btn" onclick="eliminar(${index})">X</button>
      </li>
    `;
  });
}

function eliminar(index) {
  vehiculos.splice(index, 1);
  renderVehiculos(vehiculos);
  actualizarStats();
}

function filtrar() {
  const tipoF = document.getElementById("filtroTipo").value;
  const matF = document.getElementById("filtroMaterial").value;
  const consF = document.getElementById("filtroConstruccion").value;

  const filtrados = vehiculos.filter(v =>
    (tipoF === "" || v.tipo === tipoF) &&
    (matF === "" || v.material === matF) &&
    (consF === "" || v.construccion === consF)
  );

  renderVehiculos(filtrados);
}

function actualizarStats() {
  document.getElementById("statTotal").textContent = vehiculos.length;

  if (vehiculos.length === 0) {
    document.getElementById("statMaterial").textContent = "-";
  } else {
    const contador = {};
    vehiculos.forEach(v => {
      contador[v.material] = (contador[v.material] || 0) + 1;
    });
    const material = Object.keys(contador).reduce((a, b) => contador[a] > contador[b] ? a : b);
    document.getElementById("statMaterial").textContent = material;
  }

  let suma = 0;
  vehiculos.forEach(v => suma += parseInt(v.horas));
  document.getElementById("statHoras").textContent = vehiculos.length > 0 ? (suma / vehiculos.length).toFixed(1) : "0";
}

function descargarJSON() {
  const data = JSON.stringify({ vehiculos }, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "vehiculos_registrados.json";
  a.click();
  URL.revokeObjectURL(url);
}
document.getElementById("downloadBtn").addEventListener("click", descargarJSON);
