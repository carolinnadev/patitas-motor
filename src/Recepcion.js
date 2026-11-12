const Cola = require('./Cola');

class Recepcion {
    constructor() {
        this.colaUrgencias = new Cola();
        this.colaGenerales = new Cola();
    }

    registrarLlegada(turno) {
        if (turno.tipo.toLowerCase() === 'urgencia') {
            this.colaUrgencias.encolar(turno);
        } else {
            this.colaGenerales.encolar(turno);
        }
    }

    llamarSiguiente() {
        if (!this.colaUrgencias.estaVacia()) {
            return this.colaUrgencias.desencolar();
        }
        if (!this.colaGenerales.estaVacia()) {
            return this.colaGenerales.desencolar();
        }
        return null;
    }

    hayPacientes() {
        return !this.colaUrgencias.estaVacia() || !this.colaGenerales.estaVacia();
    }
}

module.exports = Recepcion;