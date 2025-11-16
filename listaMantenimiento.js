class Nodo {
  constructor(dato) {
    this.dato = dato;
    this.siguiente = null;
  }
}

class ListaEnlazada {
  constructor() {
    this.cabeza = null;
  }

  agregar(dato) {
    const nuevo = new Nodo(dato);

    if (!this.cabeza) {
      this.cabeza = nuevo;
      return;
    }

    let actual = this.cabeza;
    while (actual.siguiente) {
      actual = actual.siguiente;
    }

    actual.siguiente = nuevo;
  }

  mostrar() {
    let actual = this.cabeza;
    while (actual) {
      console.log(actual.dato);
      actual = actual.siguiente;
    }
  }
}

let lista = new ListaEnlazada();
lista.agregar("Cambio de aceite");
lista.agregar("Revisión de frenos");
lista.agregar("Diagnóstico de motor");

lista.mostrar();

