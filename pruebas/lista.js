const ListaEnlazada = require('../src/ListaEnlazada');

console.log('=== PRUEBAS DE LISTA ENLAZADA (Casos Borde) ===\n');

const lista = new ListaEnlazada();

console.log('1. ¿Está vacía?', lista.estaVacia()); // true

// Agregar al inicio y al final
lista.agregarAlFinal({ motivo: 'Control inicial', costo: 50000 });
lista.agregarAlInicio({ motivo: 'Urgencia previa', costo: 100000 });

console.log('Tamaño actual:', lista.obtenerTamanio()); // 2

// Buscar un elemento
const encontrado = lista.buscar(a => a.costo === 100000);
console.log('Búsqueda por costo (100.000):', encontrado ? encontrado.motivo : 'No encontrado');

// Eliminar un elemento
const eliminado = lista.eliminar(a => a.costo === 50000);
console.log('Dato eliminado:', eliminado ? eliminado.motivo : 'Ninguno');
console.log('Tamaño después de eliminar:', lista.obtenerTamanio()); // 1