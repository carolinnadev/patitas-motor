const Nodo = require('./Nodo');

class Pila {
    constructor() {
        this.tope = null;
        this.tamanio = 0;
    }

    estaVacia() {
        return this.tamanio === 0;
    }

    obtenerTamanio() {
        return this.tamanio;
    }

    verTope() {
        return this.tope ? this.tope.dato : null;
    }

    apilar(dato) {
        const nuevoNodo = new Nodo(dato);
        nuevoNodo.siguiente = this.tope;
        this.tope = nuevoNodo;
        this.tamanio++;
    }

    desapilar() {
        if (this.estaVacia()) {
            return null;
        }
        const datoEliminado = this.tope.dato;
        this.tope = this.tope.siguiente;
        this.tamanio--;
        return datoEliminado;
    }
}

module.exports = Pila;