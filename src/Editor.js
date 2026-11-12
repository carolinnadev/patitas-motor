const Pila = require('./Pila');
const RegistroClinico = require('./RegistroClinico');

class Editor {
    constructor() {
        this.registro = new RegistroClinico();
        this.pilaDeshacer = new Pila();
        this.pilaRehacer = new Pila();
    }

    agregarAtencion(mascota, atencion) {
        this.registro.registrarAtencion(mascota, atencion);
        
        // Registrar acción inversa para deshacer
        this.pilaDeshacer.apilar({
            tipo: 'AGREGAR',
            mascota,
            atencion
        });

        // Toda acción nueva vacía la pila de rehacer
        this.pilaRehacer = new Pila();
    }

    deshacer() {
        if (this.pilaDeshacer.estaVacia()) return false;

        const accion = this.pilaDeshacer.desapilar();
        
        if (accion.tipo === 'AGREGAR') {
            // Revertir el agregado eliminando el nodo de la lista de la mascota
            const lista = this.registro.obtenerHistorial(accion.mascota);
            if (lista) {
                lista.eliminar(a => a.fecha === accion.atencion.fecha && a.motivo === accion.atencion.motivo);
            }
        }

        this.pilaRehacer.apilar(accion);
        return true;
    }

    rehacer() {
        if (this.pilaRehacer.estaVacia()) return false;

        const accion = this.pilaRehacer.desapilar();

        if (accion.tipo === 'AGREGAR') {
            this.registro.registrarAtencion(accion.mascota, accion.atencion);
        }

        this.pilaDeshacer.apilar(accion);
        return true;
    }
}

module.exports = Editor;