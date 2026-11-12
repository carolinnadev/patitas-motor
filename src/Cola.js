const Nodo = require('./Nodo');

class Cola {
    constructor() {
        this.frente = null;
        this.final = null;
        this.tamanio = 0;
    }

    estaVacia() {
        return this.tamanio === 0;
    }

    obtenerTamanio() {
        return this.tamanio;
    }

    verFrente() {
        return this.frente ? this.frente.dato : null;
    }

    encolar(dato) {
        const nuevoNodo = new Nodo(dato);
        if (this.estaVacia()) {
            this.frente = nuevoNodo;
            this.final = nuevoNodo;
        } else {
            this.final.siguiente = nuevoNodo;
            this.final = nuevoNodo;
        }
        this.tamanio++;
    }

    desencolar() {
        if (this.estaVacia()) {
            return null;
        }
        const datoEliminado = this.frente.dato;
        this.frente = this.frente.siguiente;
        this.tamanio--;

        if (this.tamanio === 0) {
            this.final = null;
        }
        return datoEliminado;
    }
}

module.exports = Cola;